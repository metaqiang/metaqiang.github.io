"""Build static country paths from Natural Earth's public-domain 110m dataset.

Usage: python3 scripts/generate-travel-map.py /path/to/ne_110m_admin_0_countries.zip
Source: https://naturalearth.s3.amazonaws.com/110m_cultural/ne_110m_admin_0_countries.zip
Data terms: https://www.naturalearthdata.com/about/terms-of-use/
No Python packages, runtime map library, or network requests are required.

Natural Earth I forward projection equations adapted from d3-geo:
https://github.com/d3/d3-geo/blob/main/src/projection/naturalEarth1.js
Copyright 2010-2024 Mike Bostock
Permission to use, copy, modify, and/or distribute this software for any purpose
with or without fee is hereby granted, provided that the above copyright notice
and this permission notice appear in all copies.
THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND
FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS
OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER
TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF
THIS SOFTWARE.
"""

import json
import math
from pathlib import Path
import struct
import sys
from zipfile import ZipFile


WIDTH, HEIGHT, PADDING = 600, 320, 10
VISITED = {'CHN', 'NZL', 'MYS', 'BEL', 'FRA', 'CHE', 'DEU', 'AUT', 'ITA'}


def read_records(archive):
    data = archive.read('ne_110m_admin_0_countries.dbf')
    count, header, size = struct.unpack_from('<IHH', data, 4)
    fields = []
    for offset in range(32, header - 1, 32):
        if data[offset] == 13:
            break
        name = data[offset:offset + 11].split(b'\0')[0].decode()
        fields.append((name, data[offset + 16]))
    records = []
    for index in range(count):
        record = data[header + index * size:header + (index + 1) * size]
        row, offset = {}, 1
        for name, length in fields:
            row[name] = record[offset:offset + length].decode('utf8').strip(' \0')
            offset += length
        records.append(row)
    return records


def read_shapes(archive):
    data = archive.read('ne_110m_admin_0_countries.shp')
    shapes, offset = [], 100
    while offset < len(data):
        _, words = struct.unpack_from('>II', data, offset)
        body = data[offset + 8:offset + 8 + words * 2]
        assert struct.unpack_from('<I', body)[0] == 5, 'Expected polygon shape'
        count, points = struct.unpack_from('<II', body, 36)
        starts = list(struct.unpack_from(f'<{count}I', body, 44)) + [points]
        coordinates = [struct.unpack_from('<dd', body, 44 + count * 4 + n * 16) for n in range(points)]
        shapes.append([coordinates[starts[n]:starts[n + 1]] for n in range(count)])
        offset += 8 + words * 2
    return shapes


def natural_earth(longitude, latitude):
    longitude, latitude = math.radians(longitude), math.radians(latitude)
    p2, p4 = latitude * latitude, latitude ** 4
    return (
        longitude * (0.8707 - 0.131979 * p2 + p4 * (-0.013791 + p4 * (0.003971 * p2 - 0.001529 * p4))),
        -latitude * (1.007226 + p2 * (0.015085 + p4 * (-0.044475 + 0.028874 * p2 - 0.005916 * p4))),
    )


def simplify(points, tolerance=0.18):
    if len(points) <= 2:
        return points
    first, last = points[0], points[-1]
    dx, dy = last[0] - first[0], last[1] - first[1]
    norm = dx * dx + dy * dy
    index, maximum = 0, 0
    for current, point in enumerate(points[1:-1], 1):
        factor = max(0, min(1, ((point[0] - first[0]) * dx + (point[1] - first[1]) * dy) / norm)) if norm else 0
        distance = (point[0] - first[0] - factor * dx) ** 2 + (point[1] - first[1] - factor * dy) ** 2
        if distance > maximum:
            index, maximum = current, distance
    if maximum > tolerance ** 2:
        return simplify(points[:index + 1], tolerance)[:-1] + simplify(points[index:], tolerance)
    return [first, last]


def main(source):
    with ZipFile(source) as archive:
        records, shapes = read_records(archive), read_shapes(archive)
        version = archive.read('ne_110m_admin_0_countries.VERSION.txt').decode().strip()
    countries = []
    for record, rings in zip(records, shapes):
        identity = record['ISO_A3_EH'] if record['ISO_A3_EH'] != '-99' else record['ADM0_A3']
        if identity == 'ATA':
            continue
        name = 'China' if identity == 'CHN' else record['NAME_EN']
        if identity == 'FRA':
            mainland, overseas = [], []
            for ring in rings:
                (mainland if all(-10 <= lon <= 15 and lat >= 35 for lon, lat in ring) else overseas).append(ring)
            countries.append(('GUF', 'French Guiana', overseas))
            rings = mainland
        for ring in rings:
            assert all(abs(a[0] - b[0]) <= 180 for a, b in zip(ring, ring[1:])), f'Unsplit antimeridian: {identity}'
        countries.append((identity, name, rings))
    bounds = [natural_earth(*point) for _, _, rings in countries for ring in rings for point in ring]
    xmin, xmax = min(p[0] for p in bounds), max(p[0] for p in bounds)
    ymin, ymax = min(p[1] for p in bounds), max(p[1] for p in bounds)
    scale = min((WIDTH - 2 * PADDING) / (xmax - xmin), (HEIGHT - 2 * PADDING) / (ymax - ymin))

    def project(point):
        x, y = natural_earth(*point)
        return (round(WIDTH / 2 + (x - (xmin + xmax) / 2) * scale, 1), round(HEIGHT / 2 + (y - (ymin + ymax) / 2) * scale, 1))

    paths, previews = [], []
    for identity, name, rings in sorted(countries):
        output, projected_rings = [], []
        for ring in rings:
            points = simplify([project(point) for point in ring])
            if len(set(points)) < 3:
                points = [project(point) for point in ring]
            if points[-1] == points[0]:
                points = points[:-1]
            output.append('M' + 'L'.join(f'{x:g},{y:g}' for x, y in points) + 'Z')
            projected_rings.append(points)
        paths.append({'id': identity, 'name': name, 'path': ''.join(output)})
        previews.append({'id': identity, 'rings': projected_rings})
    marker = dict(zip(('x', 'y'), project((103.8198, 1.3521))))
    markers = [{'id': 'SGP', 'name': 'Singapore', **marker}]
    assert len({country['id'] for country in paths}) == len(paths)
    assert VISITED.issubset({country['id'] for country in paths})
    header = f'''// Generated by scripts/generate-travel-map.py; Natural Earth {version}, 1:110m.
// Source: https://naturalearth.s3.amazonaws.com/110m_cultural/ne_110m_admin_0_countries.zip
// Public domain: https://www.naturalearthdata.com/about/terms-of-use/
// Natural Earth I projection; Antarctica omitted; France excludes French Guiana.
// Render compound paths with fillRule="evenodd" to preserve inland holes.
// IDs are ISO alpha-3 where available; CYN/SOL/KOS retain Natural Earth's unit IDs.
// Singapore is absent at this scale and is represented by the geographic point below.

export const travelMapSize = {{ width: {WIDTH}, height: {HEIGHT} }} as const;

export const travelMapPaths: Array<{{ id: string; name: string; path: string }}> = [
'''
    body = '\n'.join('  ' + json.dumps(country, ensure_ascii=False, separators=(',', ':')) + ',' for country in paths)
    footer = '\n];\n\nexport const travelMapMarkers: Array<{ id: string; name: string; x: number; y: number }> = ' + json.dumps(markers, ensure_ascii=False) + ';\n'
    target = Path(__file__).resolve().parents[1] / 'data' / 'travel-map-paths.ts'
    target.write_text(header + body + footer)
    Path('/tmp/travel-map-preview-data.json').write_text(json.dumps({'size': [WIDTH, HEIGHT], 'countries': previews, 'markers': markers}))
    print(f'{len(paths)} country paths; {target.stat().st_size} bytes; Singapore {marker}')


if __name__ == '__main__':
    main(sys.argv[1])
