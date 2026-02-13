# NTUAIS Website

Official website for **NTUAIS** (National Taiwan University AI Safety Group).

Built with [Hugo](https://gohugo.io/) (Extended) and the [Blowfish](https://blowfish.page/) theme.

Live site: https://ntuaisafety.github.io/NTUAIS/

## Prerequisites

- **Hugo Extended** >= 0.154.5 ([install guide](https://gohugo.io/installation/))

macOS:

```bash
brew install hugo
```

Linux:

```bash
sudo snap install hugo
```

Verify:

```bash
hugo version   # Must show "extended"
```

## Development

```bash
hugo server -D          # Start dev server (includes drafts)
```

Open http://localhost:1313/NTUAIS/

### Build for production

```bash
hugo --minify           # Output to ./public/
```

## Project Structure

```
├── archetypes/            # Content templates (blog.md, team.md)
├── assets/
│   ├── css/custom.css     # Design system (Linear-inspired, ~1000 lines)
│   └── img/branding/      # SVG logos
├── config/_default/       # Hugo configuration
│   ├── hugo.toml          # Site settings, base URL, taxonomies
│   ├── params.toml        # Theme parameters, homepage layout
│   ├── languages.en.toml  # Language & author settings
│   ├── menus.en.toml      # Navigation menus
│   └── markup.toml        # Markdown renderer, math support
├── content/
│   ├── blog/              # Blog posts (Markdown)
│   ├── events/            # Programs & events
│   ├── team/              # Team member profiles (page bundles)
│   ├── resources/         # Learning resources
│   ├── projects/          # Projects
│   └── about/             # About page
├── data/
│   ├── siteconfig.yml     # Central site config (URLs, social links)
│   ├── about.yml          # About page sections
│   ├── faq.yml            # FAQ content
│   ├── upcoming_programs.yml
│   └── authors/           # Author profiles (.toml)
├── i18n/en.yaml           # UI string translations
├── layouts/
│   ├── team/list.html     # Team page (organizers/mentors)
│   ├── events/list.html   # Events page (upcoming/past)
│   ├── about/list.html    # Data-driven about page
│   ├── partials/
│   │   ├── home/background.html   # Homepage hero
│   │   └── components/            # Reusable partials
│   └── shortcodes/        # faq.html, discord-link.html
├── static/img/            # Static images (logos, default avatars)
├── themes/blowfish/       # Vendored Blowfish theme (v2.98.0)
└── docs/                  # Development roadmap & guides
```

## Adding Content

### New team member

```bash
hugo new team/firstname-lastname/index.md
```

Then add an `avatar.jpg` (max 200KB, <= 800px wide) in the same folder.

### New blog post

```bash
hugo new blog/my-post-title.md
```

### New event

```bash
hugo new events/event-name.md
```

## Deployment

Pushes to `main` trigger GitHub Actions (`.github/workflows/deploy.yml`) which builds with Hugo and deploys to GitHub Pages.

**Workflow:** `dev` branch -> PR -> `main` -> auto-deploy

## Navigation

Home -> Events -> Blog -> Resources -> Team -> About

## Documentation

- `docs/website-development-roadmap.md` - Feature roadmap
- `devlogs/` - Development logs

## Contributing

1. Branch from `dev`
2. Make changes, test with `hugo server -D`
3. PR to `main` for deployment
