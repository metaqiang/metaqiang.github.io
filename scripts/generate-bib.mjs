import { mkdir, writeFile } from 'node:fs/promises';
import { publications } from '../data/publications.ts';

const bibDirectory = new URL('../public/bib/', import.meta.url);
await mkdir(bibDirectory, { recursive: true });
await Promise.all(publications.map((paper) =>
  writeFile(new URL(`${paper.id}.bib`, bibDirectory), `${paper.bibtex}\n`),
));
await writeFile(new URL('../public/publications.bib', import.meta.url),
  `${publications.map((paper) => paper.bibtex).join('\n\n')}\n`);
console.log(`Generated ${publications.length} citations and the combined bibliography.`);
