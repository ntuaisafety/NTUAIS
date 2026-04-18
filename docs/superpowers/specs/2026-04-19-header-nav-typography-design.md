# Header Navigation Typography & Layout Redesign

**Date:** 2026-04-19
**Scope:** `src/components/Header.astro` only (desktop ≥769px)
**Goal:** Make the top nav feel harmonious with the logo and CTA by rebalancing typography, color, and layout.

## Problem

The current desktop header places nav links at 14px / weight 500 / `#4B6A62` (low-contrast grey-green) against a grey-green translucent header. Visual weight sits entirely on the 40px logo and the solid green CTA; the nav links float weakly between them. The header reads as "logo + button" with filler in the middle, rather than a unified composition.

## Design Direction

Adopt a centered-nav layout (Vercel/Stripe-style) with larger, darker, bolder link text. The logo stays at the left, the CTA stays at the right, and the nav block becomes the visual anchor of the header.

## Specification

### Layout

| Property | Current | Target |
|---|---|---|
| `.site-header` height | `64px` | `76px` |
| `.site-nav` positioning | inline, `flex: 1`, `gap: 0.25rem` | absolute, horizontally centered, `gap: 0.5rem` |
| `.header-inner` | `justify-content: space-between` | unchanged |

Centering implementation:

```css
.site-nav {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
```

`.header-inner` keeps `display: flex; justify-content: space-between` so logo and CTA push to the edges; absolute positioning takes the nav out of the flex flow so it centers independently of the side elements' widths.

### Nav links

| Property | Current | Target |
|---|---|---|
| `font-size` | `0.875rem` (14px) | `1rem` (16px) |
| `font-weight` | `500` | `600` |
| `color` | `var(--linear-subtext)` (#4B6A62) | `var(--linear-text-bright)` (#0A221D) |
| `padding` | `0.375rem 0.75rem` | `0.5rem 1rem` |
| `border-radius` | `var(--border-radius-sm)` | unchanged |
| Hover background | `var(--linear-overlay-soft)` | unchanged |
| Hover color | `var(--linear-text)` | unchanged |

### Active state

- Semantic: `aria-current="page"` set on the matching nav link in `Header.astro`, derived from `Astro.url.pathname`.
- Visual: 2px bottom underline, `background: #165343` (equal to `--linear-button-bg`), positioned absolutely inside the link: `left: 1rem; right: 1rem; bottom: 0.2rem; height: 2px; border-radius: 2px`.
- CSS target: `.nav-link[aria-current="page"]::after` — style and semantics stay in one place.

Path matching logic (in `Header.astro` frontmatter):

```ts
const current = Astro.url.pathname;
// A link is active if the current path starts with its href (after base stripping).
// Root "/" only matches the home link (not part of the nav, so no special case needed).
const isActive = (href: string) => {
  const full = `${base}${href}`;
  return current === full || current.startsWith(full);
};
```

Edge cases:
- Trailing slash: both `href` values and `Astro.url.pathname` use trailing slashes on this site, so equality + prefix match work without normalization.
- Nested routes (e.g. `/events/spring-fellowship/`) correctly activate the `Events` link via the `startsWith` check.

### CTA button

| Property | Current | Target |
|---|---|---|
| `font-weight` (`.btn-linear` base) | `500` | unchanged (base stays 500) |
| `.header-cta` `font-weight` | inherits 500 | override to `600` |
| `font-size` | `0.875rem` | unchanged |

The weight override lives on `.header-cta` only, not on `.btn-linear`, to avoid affecting buttons elsewhere (hero CTA, event cards' "All Events →", mobile drawer CTA). Mobile CTA (`.mobile-cta`) stays at base weight so the drawer is unaffected.

### Mobile (≤768px)

No changes. Existing media query still hides `.site-nav` and `.header-cta`, shows `.hamburger`, and the drawer behavior is unchanged. The centered absolute positioning is irrelevant below the breakpoint because `.site-nav { display: none }`.

### Collision check

Rough widths at 16px / weight 600: About ≈ 58px, Events ≈ 66px, Blog ≈ 48px, Team ≈ 54px. Plus 4 × 2rem horizontal padding (128px) and 3 × 0.5rem gaps (24px) → nav block ≈ 378px. Logo (40px) + CTA (≈ 140px) + container horizontal padding (48px) leaves ~680px of content on a 1152px usable container (1200px max - padding). No collision down to the 768px mobile breakpoint.

## Out of scope

- Mobile drawer typography, animations, or layout
- Logo size or treatment
- Header background color / blur
- Any page other than the shared header

## Files touched

- `src/components/Header.astro` — frontmatter (active detection), template (`aria-current`), styles (layout + typography + active state)

No new files, no global CSS changes, no dependencies.

## Acceptance

1. Desktop header is 76px tall; nav is horizontally centered in the viewport.
2. Nav links render at 16px / weight 600 / `#0A221D`.
3. The link matching the current URL has `aria-current="page"` and displays a 2px green underline.
4. Navigating to `/events/some-event/` keeps the `Events` link active.
5. Hover on a non-active link shows the existing soft overlay background.
6. At ≤768px, the desktop nav is hidden; hamburger + drawer behave exactly as before.
7. No visual regression on buttons outside the header (hero CTA, event cards, mobile drawer CTA).
