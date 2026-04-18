# Header Navigation Typography & Layout Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebalance the desktop site header so nav links feel harmonious with the logo and CTA — centered nav block, larger/bolder/darker link text, underline active state.

**Architecture:** A single-file refactor of `src/components/Header.astro`. The frontmatter gains an `isActive()` helper reading `Astro.url.pathname`; the template adds `aria-current="page"` to the matching link; the `<style>` block is rewritten for the new layout, typography, active state, and a scoped CTA weight override. Mobile (≤768px) path is untouched.

**Tech Stack:** Astro v5 (static output), vanilla CSS scoped to `.astro` components.

**Spec:** [`docs/superpowers/specs/2026-04-19-header-nav-typography-design.md`](../specs/2026-04-19-header-nav-typography-design.md)

## Context for the implementing engineer

You are modifying one Astro component. You don't need to know the rest of the codebase.

- **Astro component structure:** `.astro` files have three parts separated by `---` fences: TypeScript frontmatter (runs at build time on the server), HTML template, and `<style>` (scoped CSS by default).
- **Styles are scoped:** CSS in the `<style>` block only applies to this component, so you can write plain class selectors without worrying about collisions.
- **BASE_URL:** This site currently has `base` commented out in `astro.config.mjs`, so `import.meta.env.BASE_URL` resolves to `/`. Don't hardcode the base — use the `base` variable already in the frontmatter.
- **No test runner exists in this project.** `package.json` has `astro check` (type check) and `astro build` (production build). Verification is: type check passes, build passes, dev-server visual check matches the spec's acceptance criteria.
- **Existing file to modify:** [`src/components/Header.astro`](../../../src/components/Header.astro) (221 lines; single file holds frontmatter, template, inline script, and styles).

## File Structure

Only one file is touched:

- **Modify:** `src/components/Header.astro`
  - Frontmatter: add `isActive` helper
  - Template: add `aria-current={isActive(link.href) ? 'page' : undefined}` to nav links
  - Styles: change `.site-header` height, reposition `.site-nav`, restyle `.nav-link`, add `.nav-link[aria-current="page"]::after`, override `.header-cta` weight

No new files. No `global.css` changes. No dependency changes.

---

## Task 1: Active page detection (logic only, no visual change)

Add the `aria-current` wiring. Because no CSS targets `[aria-current="page"]` yet, there is no visible change after this task — but inspecting the DOM on an inner page should show the attribute on the matching link.

**Files:**
- Modify: `src/components/Header.astro` (frontmatter + template)

- [ ] **Step 1: Add `isActive` helper in the frontmatter**

Edit `src/components/Header.astro`. Replace the frontmatter block (lines 1-12) with:

```astro
---
import logoSrc from '../assets/branding/ntuais-logo.png?url';

const base = import.meta.env.BASE_URL;

const navLinks = [
  { label: 'About',  href: 'about/'  },
  { label: 'Events', href: 'events/' },
  { label: 'Blog',   href: 'blog/'   },
  { label: 'Team',   href: 'team/'   },
];

const currentPath = Astro.url.pathname;
const isActive = (href: string) => {
  const full = `${base}${href}`;
  return currentPath === full || currentPath.startsWith(full);
};
---
```

What this does:
- `Astro.url.pathname` is the path of the page being rendered (e.g. `/events/spring-fellowship/`).
- `full` is the absolute href of a nav link (e.g. `/events/`).
- `startsWith` makes nested pages like `/events/spring-fellowship/` activate the `Events` link.

- [ ] **Step 2: Add `aria-current` to the desktop nav template**

In the same file, find the desktop nav block (around lines 21-25):

```astro
<nav class="site-nav" aria-label="Main navigation">
  {navLinks.map(link => (
    <a href={`${base}${link.href}`} class="nav-link">{link.label}</a>
  ))}
</nav>
```

Replace with:

```astro
<nav class="site-nav" aria-label="Main navigation">
  {navLinks.map(link => (
    <a
      href={`${base}${link.href}`}
      class="nav-link"
      aria-current={isActive(link.href) ? 'page' : undefined}
    >{link.label}</a>
  ))}
</nav>
```

Setting `aria-current={undefined}` makes Astro omit the attribute entirely for non-active links (rather than emitting `aria-current=""`).

Do **not** modify the mobile drawer nav (the `.mobile-nav-link` block). It's out of scope and stays as-is.

- [ ] **Step 3: Type-check**

Run:

```bash
npm run check
```

Expected: no errors. If TypeScript complains about `Astro.url`, confirm the file saved and retry.

- [ ] **Step 4: Visual check (DOM only)**

Run:

```bash
npm run dev
```

Open `http://localhost:4321/about/` in the browser. Open DevTools → Elements. Find the `About` link in the header. Confirm it has `aria-current="page"`. Navigate to `/events/`: the `Events` link should now have it; `About` should not. Navigate to `/` (home): no nav link should have `aria-current`.

Stop the dev server (Ctrl+C).

- [ ] **Step 5: Commit**

```bash
git add src/components/Header.astro
git commit -m "feat: add aria-current to active header nav link"
```

---

## Task 2: Restyle header (layout, typography, active underline, CTA weight)

All visual changes in one CSS edit. They are tightly coupled — partial application produces worse-looking intermediate states, so we ship them together.

**Files:**
- Modify: `src/components/Header.astro` (`<style>` block only)

- [ ] **Step 1: Update `.header-inner` height**

Edit `src/components/Header.astro`. Find the `.header-inner` rule (around lines 90-96):

```css
.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  gap: 1.5rem;
}
```

Replace with:

```css
.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 76px;
  gap: 1.5rem;
  position: relative; /* anchor for absolutely-centered .site-nav */
}
```

Why `position: relative`: the next step makes `.site-nav` `position: absolute`, which needs a positioned ancestor to anchor to. `.header-inner` is the right anchor (not `.site-header`) because the container already has the correct horizontal padding.

- [ ] **Step 2: Reposition `.site-nav` to centered absolute**

Find the `.site-nav` rule (around lines 110-115):

```css
.site-nav {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  flex: 1;
}
```

Replace with:

```css
.site-nav {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
```

Why `top: 50%` + `translate(-50%, -50%)`: absolute positioning takes the element out of flex flow, so we need to re-center vertically too (flex's `align-items` no longer applies to it).

- [ ] **Step 3: Update `.nav-link` typography**

Find the `.nav-link` rule (around lines 117-126):

```css
.nav-link {
  padding: 0.375rem 0.75rem;
  border-radius: var(--border-radius-sm);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--linear-subtext);
  text-decoration: none;
  white-space: nowrap;
  transition: color var(--transition-fast), background var(--transition-fast);
}
```

Replace with:

```css
.nav-link {
  position: relative;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius-sm);
  font-size: 1rem;
  font-weight: 600;
  color: var(--linear-text-bright);
  text-decoration: none;
  white-space: nowrap;
  transition: color var(--transition-fast), background var(--transition-fast);
}
```

Why `position: relative`: the active-state underline (next step) is a `::after` pseudo-element positioned absolutely, and needs the link itself as its anchor.

Leave the existing `.nav-link:hover` rule (lines ~128-131) unchanged.

- [ ] **Step 4: Add active-state underline**

Immediately after the `.nav-link:hover` rule, insert:

```css
.nav-link[aria-current="page"]::after {
  content: '';
  position: absolute;
  left: 1rem;
  right: 1rem;
  bottom: 0.2rem;
  height: 2px;
  background: var(--linear-button-bg);
  border-radius: 2px;
}
```

The `left: 1rem; right: 1rem` values match the horizontal padding of `.nav-link`, so the underline aligns with the text width.

- [ ] **Step 5: Override `.header-cta` font-weight**

Find the `.header-cta` rule (around lines 133-136):

```css
.header-cta {
  flex-shrink: 0;
  white-space: nowrap;
}
```

Replace with:

```css
.header-cta {
  flex-shrink: 0;
  white-space: nowrap;
  font-weight: 600;
}
```

The override is scoped to `.header-cta` only — `.btn-linear`'s base weight of 500 is unchanged, so hero CTA, event card "All Events →" button, and mobile drawer CTA are all unaffected.

- [ ] **Step 6: Type-check and build**

```bash
npm run check
npm run build
```

Expected: both succeed. Build output lands in `./dist/`.

- [ ] **Step 7: Visual verification against acceptance criteria**

```bash
npm run dev
```

Open `http://localhost:4321/` and walk through the spec's acceptance list:

1. **Header height is 76px** — DevTools → Elements → `.site-header` → computed height should be `76px`.
2. **Nav is horizontally centered** — the `About Events Blog Team` block is in the middle of the viewport, not flush-left next to the logo.
3. **Link typography** — computed styles on a `.nav-link`: `font-size: 16px`, `font-weight: 600`, `color: rgb(10, 34, 29)`.
4. **Active underline on inner pages** — go to `/about/`. `About` shows a 2px green underline below the text; the other three links don't.
5. **Nested route activation** — go to `/events/` (or any specific event page if one exists). `Events` is underlined.
6. **Hover** — hovering a non-active link shows the soft green background and the color shifts to `--linear-text`.
7. **Mobile drawer unchanged** — resize the browser to 500px wide. Desktop nav disappears; hamburger appears. Open drawer: links look exactly the same as before this change (14px-ish, weight 500 — unchanged).
8. **Buttons elsewhere** — scroll the homepage. The hero "Join Community" / "View Events" buttons and the event cards' "All Events →" button look visually unchanged (they use `.btn-linear` without the `.header-cta` override).

If any criterion fails, note which one and stop before committing. Otherwise, stop the dev server.

- [ ] **Step 8: Commit**

```bash
git add src/components/Header.astro
git commit -m "feat: restyle header nav with centered layout and underline active state"
```

---

## Task 3: Final sweep

- [ ] **Step 1: Run `git diff main -- src/components/Header.astro` and read the full diff**

Confirm:
- Only `Header.astro` changed (no accidental edits elsewhere).
- The mobile section (`@media (max-width: 768px)` block, `.mobile-nav*` rules, `.hamburger*` rules, the inline `<script>`) is byte-for-byte identical to `main`.
- No stray debug styles (e.g. `border: 1px solid red`, `outline`, `background: yellow`).

- [ ] **Step 2: Re-run build as a final gate**

```bash
npm run build
```

Expected: succeeds.

- [ ] **Step 3: No commit needed for this task** — it's a review pass. If Step 1 surfaced problems, fix them and extend the previous commit with `git commit --amend --no-edit` only if the previous commit was the immediately prior one and hasn't been pushed; otherwise make a new commit with a descriptive message.

---

## Rollback

If the change lands and looks wrong in production, revert with:

```bash
git revert <commit-sha-of-task-2>
git revert <commit-sha-of-task-1>  # optional; task 1 is invisible on its own
```

Both commits touch only `Header.astro`, so rollback is clean.
