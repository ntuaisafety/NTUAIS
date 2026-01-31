# NTUAIS Website

Official website for **NTUAIS** (National Taiwan University AI Safety Group).

Built with [Hugo](https://gohugo.io/) and [Blowfish](https://blowfish.page/) theme.

## Quick Start

### Prerequisites

**macOS:**
```bash
brew install hugo
```

**Linux:**
```bash
sudo snap install hugo
```

### Development

```bash
hugo server
```

Open `http://localhost:1313`

## Features

- Linear-inspired dark theme
- Team page with horizontal profile cards
- Events with Upcoming/Past sections
- Sponsors & Collaborators wall (Logo.dev integration)
- Blog with categories and tags

## Project Structure

```
├── content/
│   ├── blog/          # Blog posts
│   ├── events/        # Events and programs
│   ├── team/          # Team member profiles
│   └── resources/     # Learning resources
├── layouts/
│   ├── events/        # Custom events template
│   ├── team/          # Custom team template
│   └── partials/      # Shared components
├── assets/css/        # Custom CSS
├── config/_default/   # Hugo configuration
└── themes/blowfish/   # Theme (git submodule)
```

## Navigation

Home → Events → Blog → Resources → Team → About

## Key Tracks

1. **BlueDot Fellowship** - 10-week introductory program
2. **Technical Paper Reading** - 15-week research discussions
3. **Weekly Policy Reading** - AI governance with NTU Law

## Documentation

- `docs/website-development-roadmap.md` - Feature roadmap
- `devlogs/` - Development logs
