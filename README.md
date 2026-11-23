# Sangeeta Sinha | Portfolio

Personal portfolio for Sangeeta Sinha, Founder & CEO of VigilAI Solutions.

The page is a responsive vCard: a profile card beside the section panel on a wide screen, and a compact top card on tablet and phone. Open a theme with a query parameter:

- `?theme=cyberpunk`
- `?theme=vigilai`
- `?theme=clinical`

The theme control cycles those three. On a wide screen the profile card stays sticky while the main panel scrolls. On a narrower screen it collapses, and **Show contacts** expands the contact details.

## Run locally

```bash
npm install
npm run dev
```

Vite prints a local URL. Open it in a browser.

## Production build

```bash
npm run build
npm run preview
```

`npm run build` writes static files to `dist/`. `amplify.yml` is set up for a later AWS Amplify deploy (build command `npm run build`, output directory `dist`). This repository does not deploy the site.

## Edit content

All page copy lives in `src/data.js`.

## Restyle

Color and type tokens are at the top of `src/styles.css` under `[data-theme="cyberpunk"]`, `[data-theme="vigilai"]`, and `[data-theme="clinical"]`.

## Content check

```bash
npm run check
```

Copyright (c) 2026 Sangeeta Sinha | VigilAI Solutions LLC. All rights reserved.
