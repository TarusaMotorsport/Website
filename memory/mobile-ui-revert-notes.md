---
name: mobile-ui-revert-notes
description: Pre-fix state of HomeMobile.jsx and Navbar.jsx before mobile UI overhaul (March 2026)
type: project
---

## Mobile UI overhaul — revert reference

**Commit before changes:** `0d07cb0` (run `git checkout 0d07cb0 -- src/pages/HomeMobile.jsx src/components/Navbar.jsx` to revert individual files)

### Files changed
- `src/pages/HomeMobile.jsx`
- `src/components/Navbar.jsx`

### What was broken (pre-fix)
1. **Hero z-layering**: TARUSA text was `absolute inset-0 z-10` centered in a `min-h-screen flex-col` section while Canvas was in normal flow at top — car appeared at top, text appeared in middle, large gap between them (they never overlapped).
2. **TimelineCard dot texture**: parent `<section>` had no `relative` class, so `absolute inset-0` dot background bled across neighbouring sections.
3. **Navbar on mobile (About/Team/Media)**: full desktop nav (logo + 4 links + sponsor button) with no responsive breakpoints — all elements squished on small screens.
4. **Stats**: said "3+ Competitions" and "AIR 1 · hBaja 2024" — outdated after 2025/2026 results.
5. **Achievements**: only had 2017/2022/2024 entries — missing 2025 (AIR 7 + AIR 1 Cost/Statics) and 2026 (AIR 1 3D Print, AIR 3 Cost).
6. **MobileCTA**: had both "Support Us" (green accent card) AND "Sponsor Us" (regular card) — two nearly identical cards pointing to the same page.

### How to apply fix
Changes are in a single commit on `main`. To revert just the mobile files:
```
git checkout 0d07cb0 -- src/pages/HomeMobile.jsx src/components/Navbar.jsx
```
