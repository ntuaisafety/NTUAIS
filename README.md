# NTUAIS Website

Official website for **NTUAIS** (National Taiwan University AI Safety Group).

> **Branch:** `astro-migration` — evaluating Astro as a Hugo replacement.
> The Hugo-based site lives on `main`.

Live site: https://ntuaisafety.github.io/NTUAIS/

## Tech Stack

- [Astro](https://astro.build/) v5 (static output)
- Vanilla CSS (Linear-inspired design system in `src/styles/global.css`)
- Astro Content Collections for events
- GitHub Pages deployment via GitHub Actions

## Prerequisites

- Node.js >= 18
- npm >= 9

## Development

```bash
npm install
npm run dev        # http://localhost:4321/NTUAIS/
```

### Build for production

```bash
npm run build      # Output to ./dist/
npm run preview    # Preview the production build locally
```

## Project Structure

```
├── src/
│   ├── assets/
│   │   ├── branding/          # Logo SVGs (imported by components)
│   │   └── members/           # Member & collaborator photos
│   ├── components/
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── content/
│   │   ├── config.ts          # Content collection schemas
│   │   └── events/            # Event markdown files
│   ├── layouts/
│   │   └── BaseLayout.astro   # Base HTML shell
│   ├── pages/
│   │   ├── index.astro        # Homepage
│   │   └── events/index.astro # Events listing
│   └── styles/
│       └── global.css         # CSS variables + base styles
├── public/
│   └── favicon.svg
├── content/                   # Hugo markdown (reference, not yet wired to Astro)
├── data/                      # Hugo YAML data (reference for future Astro pages)
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Adding Content

### New event

Create a `.md` file in `src/content/events/` with this frontmatter:

```yaml
---
title: "Event Title"
description: "Short description"
date: 2026-03-01
badge: "Beginner Friendly"
badge_color: "green"    # green | blue
tags: ["fellowship", "introductory"]
---
```

## Deployment

Pushes to `main` trigger GitHub Actions → Astro build → GitHub Pages.

**Workflow:** feature branch → PR → `main` → auto-deploy
