---
# Team Member Frontmatter Template
# This template shows all available fields for team members

# Required fields
title: "Full Name"  # Member's full name
description: "Role @ Organization | Position"  # One-line summary shown below name
date: {{ .Date }}  # Date added to team
role: "organizer"  # Options: "organizer" or "mentor"
draft: false

# Optional fields
summary: "Extended bio for search engines and social media (2-3 sentences)"
weight: 1  # Lower numbers appear first (1, 2, 3...)

# Social media links (optional)
# Add platforms as needed - supported: facebook, linkedin, github, twitter, email
social:
  - linkedin: "https://www.linkedin.com/in/yourprofile"
  - github: "https://github.com/yourusername"
  - twitter: "https://twitter.com/yourhandle"
  - email: "mailto:your.email@example.com"

# Image configuration
# Option 1: Use Page Bundle (create a folder with index.md + avatar.jpg/png)
# Place avatar image in the same directory as this index.md file
# The template will automatically find images named "avatar.*"
#
# Option 2: Use central image path (if using a single .md file instead of bundle)
# image: "img/team/your-name.jpg"

---

## Biography

Write a longer biography here. This appears on the team member's individual page.

Include:
- Professional background and expertise
- Current role and responsibilities
- Areas of interest in AI Safety
- Notable projects or contributions

## Current Focus

What are you currently working on? What topics interest you?

---

**Setup Instructions:**

1. **Create a Page Bundle** (recommended):
   - Create folder: `content/team/your-name/`
   - Create this file: `content/team/your-name/index.md`
   - Add avatar image: `content/team/your-name/avatar.jpg` (or .png)

2. **Alternative - Single File**:
   - Create file: `content/team/your-name.md`
   - Set `image: "img/team/your-name.jpg"` in front matter
   - Place image in: `static/img/team/your-name.jpg`

3. **Role Types**:
   - `"organizer"` - Current active organizers (appears in "Organizers" section)
   - `"mentor"` - Mentors and advisors (appears in "Mentors" section)

4. **Social Icons**:
   Supported platforms: facebook, linkedin, github, twitter, email, website
   Format: `platform: "full-url"` (include https:// or mailto:)
