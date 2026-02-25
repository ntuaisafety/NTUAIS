# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Dev Commands

```bash
hugo server -D          # Dev server with drafts at http://localhost:1313/NTUAIS/
hugo --minify           # Production build to ./public/
hugo new team/name/index.md    # New team member (page bundle)
hugo new blog/post-title.md    # New blog post
hugo new events/event-name.md  # New event
```

Requires **Hugo Extended** >= 0.154.5. Verify with `hugo version` (must show "extended").

## Architecture

Hugo static site using vendored Blowfish theme (v2.98.0). The theme is a full copy in `themes/blowfish/` — **not** a git submodule. Custom layouts in `layouts/` override theme layouts.

### Data-Driven Pages

Several pages pull content from YAML data files rather than Markdown:

| Data file | Template | What it drives |
|-----------|----------|---------------|
| `data/about.yml` | `layouts/about/list.html` | Hero, mission/vision, values, team preview, CTA cards |
| `data/faq.yml` | `layouts/partials/components/faq-accordion.html` | FAQ accordion on homepage and about page |
| `data/siteconfig.yml` | Multiple templates | Discord URL, social links, site metadata, collaborators |
| `data/upcoming_programs.yml` | `layouts/partials/components/program-card.html` | Homepage program cards (fallback when no future events) |

Templates load data with `{{ .Site.Data.about }}` and access nested fields.

### relURL is Required for All Internal Links

**The site deploys to a subdirectory** (`/NTUAIS/`), so every internal URL must use `| relURL`:

```go
<a href="{{ .url | relURL }}">  {{/* CORRECT — prepends /NTUAIS/ */}}
<a href="{{ .url }}">           {{/* BROKEN — missing base path */}}
```

**Critical:** paths must NOT have a leading `/`. Hugo's `relURL` only prepends the base path for paths without a leading slash:
- `"events/" | relURL` → `/NTUAIS/events/` (correct)
- `"/events/" | relURL` → `/events/` (broken — treated as already absolute)

### Team Members

Page bundles at `content/team/{name}/index.md`. Frontmatter must include `role: organizer` or `role: mentor` — the team page template filters by this field. Place an `avatar.jpg` or `avatar.png` in the same folder; the template finds it via `Resources.GetMatch "avatar.*"`.

### Homepage Layout

`layouts/partials/home/background.html` renders:
1. Hero with typewriter effect (config in `config/_default/params.toml` under `[homepage.typewriter]`)
2. FAQ accordion (from `data/faq.yml`)
3. Upcoming events grid (filters `content/events/` by `Date >= now`)
4. Collaborators logo wall
5. Recent blog articles

### Program Card Dual Mode

`layouts/partials/components/program-card.html` accepts either a Hugo page object (from `content/events/`) or a plain map (from `data/upcoming_programs.yml`). It detects the type with `reflect.IsMap` and reads fields accordingly (`.Title` vs `.title`).

### Discord URL Injection

The Discord URL is defined once in `data/siteconfig.yml` under `social.discord`. Templates that need it load `{{ $siteConfig := .Site.Data.siteconfig }}` and reference `$siteConfig.social.discord`. The about page uses `merge` to inject it into CTA card data at render time.

## Key Config Files

- `config/_default/hugo.toml` — baseURL, theme, taxonomies, `buildFuture = true`
- `config/_default/params.toml` — theme settings, homepage layout, typewriter texts, CTA buttons
- `config/_default/languages.en.toml` — author name, headline, social links
- `config/_default/menus.en.toml` — navigation menu
- `i18n/en.yaml` — UI strings used with `{{ i18n "key_name" }}`

## CSS

`assets/css/custom.css` — ~1000 line Linear-inspired design system. Key classes:
- `.btn-linear`, `.btn-linear-primary`, `.btn-linear-secondary` — buttons
- `.section-badge`, `.section-badge--green`, `.section-badge--blue` — section badges
- `.hero-linear` — homepage hero
- `.animate-blur-reveal` with `delay-100` through `delay-400` — staggered entrance animations

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml` → Hugo build → GitHub Pages.

**Workflow:** branch from `dev` → make changes → PR to `main` → auto-deploy.

## Commit Conventions

`fix:`, `content:`, `chore:`, `docs:`, `refactor:`, `perf:`, `feat:` — lowercase summary, optional body explaining why. Use `/atomic-commits` skill for grouped commits.
