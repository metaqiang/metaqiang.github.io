# Yuanqiang Yu — Personal Homepage

A responsive personal homepage for research, job applications, and Ph.D. applications. The site uses Next.js, exports to static files, and is ready for GitHub Pages.

## Project structure

```text
app/                  Next.js routes and site metadata
components/           Reusable page sections and presentation logic
data/                 Profile content, links, publications, and timeline events
styles/               Design tokens, base rules, sections, and responsive styles
types/                Shared TypeScript content models
public/
  attachments/        Award certificates
  institutions/       Company and university logos
.github/workflows/    GitHub Pages deployment
```

## Common updates

- Edit biography, contact links, and profile facts in `data/profile.tsx`.
- Add or revise timeline entries and publications in `data/milestones.tsx`.
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

## Quality checks

```bash
npm run check
```

The production build is exported to `out/`.

## GitHub Pages

The workflow in `.github/workflows/deploy-pages.yml` builds and publishes `out/` whenever the `main` branch is pushed. In the GitHub repository settings, select **GitHub Actions** as the Pages source.
