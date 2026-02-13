---
# Blog Post Frontmatter Template
# This template shows all available fields for blog posts

# Required fields
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
date: {{ .Date }}
draft: true

# Summary (shown in blog listings and social media previews)
summary: "A brief description of this post (1-2 sentences)"

# Content categorization
tags: ["AI Safety", "Course", "Research"]  # Topics covered in this post
categories: ["Education"]  # Broad category (Education, Research, etc.)

# Author configuration
showAuthor: false  # Set to true to display author info
authors:
  - "zen"  # Reference to data/authors/{author}.toml file
# Note: Author data files should be created in data/authors/ directory

# Optional fields
# featured: true  # Highlight this post on the homepage
# coverImage: "img/blog/post-cover.jpg"  # Hero image for the post
# coverImageAlt: "Description of cover image for accessibility"

---

## Introduction

Start writing your blog post content here. Use markdown formatting.

## Main Content

- Use headings to structure your content
- Add code blocks, images, and links as needed
- Reference research papers and external resources

## Conclusion

Wrap up your post with key takeaways or calls to action.

---

**Author Notes:**
- Images should be placed in `/static/img/blog/`
- For author info, create a file in `data/authors/your-name.toml`
- See existing blog posts in `content/blog/` for examples
- Use front matter field `showAuthor: true` to display author card
