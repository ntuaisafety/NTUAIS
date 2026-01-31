# NTUAIS Website Development Guide

## Content Editing

### Adding/Editing Pages

All content is written in **Markdown** format, located in the `content/` directory.

```text
content/
├── about/         # About page
├── blog/          # Blog posts
├── projects/      # Project showcases
└── team/          # Team member profiles
```

### Creating a New Blog Post

1. Create a new `.md` file in `content/blog/`
2. Add frontmatter at the top:

```yaml
---
title: "Your Post Title"
date: 2026-01-31
draft: false
---
```

3. Write your content in Markdown below the frontmatter

### Modifying Theme/Layout

- **HTML Templates**: `themes/ntuais/layouts/`
- **CSS Styles**: `themes/ntuais/static/css/`

## Running Locally

```bash
hugo server
```

Site available at `http://localhost:1313`

## Design References

(To be added - inspirational websites for UI/UX improvements)
