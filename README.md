# Yuanqiang Yu — Personal Homepage

A responsive personal homepage for research, job applications, and Ph.D. applications. The site uses Next.js, exports to static files, and is ready for GitHub Pages.

## Project structure

```text
app/                  Next.js routes and site metadata
components/           Reusable page sections and presentation logic
data/                 Profile content, links, and publication metadata
styles/               Design tokens, base rules, sections, and responsive styles
types/                Shared TypeScript content models
public/
  attachments/        Award certificates
  institutions/       Company and university logos
  papers/             Research figures used in publication previews
.github/workflows/    GitHub Pages deployment
```

## Common updates

- Edit biography, contact links, and profile facts in `data/profile.tsx`.
- Add or revise publications and their BibTeX in `data/publications.ts`. `npm run dev` and `npm run build` automatically regenerate the individual files in `public/bib/` and the combined `public/publications.bib`; use `npm run generate:bib` to refresh them separately.
- Edit work and education in `components/experience-sections.tsx`, and awards in `data/honors.ts`.
- Edit the introduction in `components/about-section.tsx`.
- Edit visited countries in `data/travel.ts`; clicking “travel” in the personal interests reveals the initially hidden map, which uses local, simplified country outlines.
- Adjust colors and typography in `styles/tokens.css`.
- Adjust desktop section styling in `styles/sections.css`.
- Adjust phone and tablet behavior in `styles/responsive.css`.
- Update search and sharing metadata in `app/layout.tsx`.

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

The homepage separates publications, experience, education, and awards. Every paper has an original research figure with an enlarged view, an inline abstract from the published version, and an expandable citation with copy and download actions. Awards are grouped by International, National, and Provincial level. Personal interests and a small travel map sit below the profile. The NeoBrutalism layout adapts from a desktop sidebar to a compact mobile profile.

## Quality checks

```bash
npm run check
```

The production build is exported to `out/`.

## GitHub Pages

The workflow in `.github/workflows/deploy-pages.yml` builds and publishes `out/` whenever the `main` branch is pushed. In the GitHub repository settings, select **GitHub Actions** as the Pages source.
