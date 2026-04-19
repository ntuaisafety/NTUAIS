# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Dev Commands

```bash
npm install
npm run dev        # Dev server at http://localhost:4321/
npm run build      # Production build to ./dist/
npm run preview    # Preview production build locally
npm run check      # TypeScript / Astro type-check
```

Requires **Node.js >= 18**.

## Architecture

**Astro v5** static site for NTU AI Safety (ntuais.org), deployed to GitHub Pages via `.github/workflows/`. Output is fully static (`output: 'static'`).

### Content Collections

Three collections defined in [`src/content/config.ts`](src/content/config.ts) with Zod schemas:

| Collection | Path | Key fields |
|---|---|---|
| `events` | `src/content/events/` | `title`, `date`, `endDate?`, `badge`, `badge_color`, `draft` |
| `blog` | `src/content/blog/` | `title`, `date`, `authors[]`, `draft` |
| `team` | `src/content/team/` | `title`, `role` (organizer/mentor/founder), `weight`, `social[]` |

Use `getCollection('events')` etc. to query. Draft filtering is not automatic — filter manually with `.filter(e => !e.data.draft)` as needed.

### BASE_URL for Internal Links

The site may deploy to a subdirectory. Always use `import.meta.env.BASE_URL` for internal hrefs:

```astro
const base = import.meta.env.BASE_URL;
// ...
<a href={`${base}events/`}>Events</a>
```

### Event Status Logic

[`src/lib/eventStatus.ts`](src/lib/eventStatus.ts) provides `getEventStatus()`, `isActiveEvent()`, and `startOfToday()`. Use these instead of raw date comparisons to correctly handle same-day events.

### Design System

[`src/styles/global.css`](src/styles/global.css) is the Linear-inspired design system. Key conventions:

- CSS custom properties under `:root` — `--linear-bg`, `--linear-text`, `--linear-accent-green`, etc.
- Typography: `--font-title` (ProFont IIx Nerd Font) for `h1–h3`; `--font-body` (Inter) for everything else
- Utility classes: `.btn-linear`, `.btn-linear-primary`, `.btn-linear-secondary`, `.card-linear`, `.section-badge`, `.section-badge--green/blue`, `.container`
- Scoped `<style>` blocks in `.astro` files for page/component-specific styles

### Path Aliases

Configured in `tsconfig.json`:
- `@components/*` → `src/components/*`
- `@layouts/*` → `src/layouts/*`
- `@styles/*` → `src/styles/*`

### Layout

[`src/layouts/BaseLayout.astro`](src/layouts/BaseLayout.astro) wraps every page — injects `<Header>`, `<Footer>`, `global.css`, KaTeX stylesheet, and the ProFont web font. Props: `title` (required), `description` (optional).

### Photo Carousel

[`src/components/PhotoCarousel.astro`](src/components/PhotoCarousel.astro) reads from [`src/data/gallery.json`](src/data/gallery.json). Add photo entries there to populate the gallery.

### Math Support

Markdown files support LaTeX via `remark-math` + `rehype-katex`. The KaTeX CSS is loaded globally from CDN in `BaseLayout.astro`.

## Deployment

Pushes to `main` trigger GitHub Actions → Astro build → GitHub Pages. The workflow also runs on a daily cron (`0 0 * * *` UTC) to keep event statuses fresh (upcoming → running → past transitions happen via build-time date comparisons, so a stale deploy would show stale statuses).

**Workflow:** branch from `dev` → make changes → PR to `main` → auto-deploy.

## Commit Conventions

`fix:`, `content:`, `chore:`, `docs:`, `refactor:`, `perf:`, `feat:` — lowercase summary, optional body explaining why.
