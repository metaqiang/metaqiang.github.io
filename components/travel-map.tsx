import { ChevronDown } from 'lucide-react';
import { visitedCountries } from '@/data/travel';
import { travelMapMarkers, travelMapPaths, travelMapSize } from '@/data/travel-map-paths';

const visitedIds = new Set<string>(visitedCountries.map((country) => country.id));

export function TravelMap() {
  return (
    <section className="travel-card" aria-labelledby="travel-title">
      <div className="travel-heading">
        <h2 id="travel-title">Travel footprint</h2>
        <span className="travel-count">{visitedCountries.length} countries</span>
      </div>
      <svg className="travel-map" viewBox={`0 0 ${travelMapSize.width} ${travelMapSize.height}`} role="img" aria-labelledby="travel-map-title travel-map-description">
        <title id="travel-map-title">Countries I have visited</title>
        <desc id="travel-map-description">Highlighted in lavender: {visitedCountries.map((country) => country.name).join(', ')}. Singapore is shown with a small dot.</desc>
        {travelMapPaths.map((country) => (
          <path key={country.id} d={country.path} fillRule="evenodd" className={visitedIds.has(country.id) ? 'travel-country is-visited' : 'travel-country'}>
            {visitedIds.has(country.id) && <title>{country.name}</title>}
          </path>
        ))}
        {travelMapMarkers.filter((country) => visitedIds.has(country.id)).map((country) => (
          <circle key={country.id} className="travel-marker" cx={country.x} cy={country.y} r={3.5}><title>{country.name}</title></circle>
        ))}
      </svg>
      <details className="travel-destinations">
        <summary><span>Places visited</span><ChevronDown size={14} aria-hidden="true" /></summary>
        <ul>{visitedCountries.map((country) => <li key={country.id}>{country.name}</li>)}</ul>
      </details>
    </section>
  );
}
