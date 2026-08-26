# 05 — Staggered Gallery with Parallax Columns

> **Depends on:** 00-design-language-master.md

---

## Prompt

Build the B&W photo gallery section of the portfolio: a three-column masonry-style field of photographs at staggered vertical offsets, where the columns scroll at different speeds (multi-speed parallax) against the page scroll.

### Content & layout

- Six photographs, all grayscale (portraits, veiled figure, gallery interior, staircase, samurai costume study, smoke texture), each with a mono caption below-left in 10px uppercase letter-spaced white: `NEW YORK (2025)`, `PARIS (2023)`, `SYDNEY (2021)`, `OSAKA (2019)`, `BRIGHTON (2018)`, `BERLIN (2016)`.
- 3-column grid on desktop (column gap ~6% of width, page margin 40px), 2 columns tablet, 1 column mobile.
- **Vertical stagger is the signature:** column 1 items start at `padding-top: 0`, column 2 at `padding-top: 22vh`, column 3 at `padding-top: 48vh`. Within a column, items are spaced ~18vh apart. No two images share a horizontal line — the layout must look scattered but rhythmically placed.
- Image aspect ratios vary per item (3:4, 4:5, 1:1) — mix them deliberately; widths fill their column.

### Motion

1. **Column parallax:** While the section is in view, translate columns vertically at different rates relative to scroll:
   - Column 1: `+0.00 × scrollDelta` (moves with the page — reference)
   - Column 2: `-0.06 × scrollDelta` (drifts up slightly faster)
   - Column 3: `-0.12 × scrollDelta` (fastest)
   - Implement with a rAF loop reading `scrollY`, applying `transform: translate3d(0, y, 0)` per column wrapper; clamp total offset to ±120px so captions never detach from images (translate the whole figure, image + caption together).
2. **Entrance reveal:** Each figure enters with a **clip-path wipe**: `clip-path: inset(100% 0 0 0)` → `inset(0 0 0 0)` (reveals top→bottom... actually reveal **bottom-up**: `inset(0 0 100% 0)` → `inset(0)`) over 900ms expo-out when the figure crosses 88% viewport height, once per page load. Simultaneously the image inside scales `1.08 → 1` over 1200ms (Ken-Burns settle).
3. **Caption:** fades up 8px + opacity 0→1, delayed 150ms after its image's wipe starts.
4. **Hover (desktop):** image scales to 1.03 over 400ms ease-out; caption's city name swaps to lime (`color.surface.raised`) and a mono index `IMG_0N` fades in at the image's top-right corner. Cursor remains default — the site uses no custom cursor.

### Constraints

- Parallax must be disabled under `prefers-reduced-motion` and on touch devices (static staggered grid remains).
- Only `transform`, `opacity`, `clip-path` animate; `will-change: transform` on column wrappers only, removed when off-screen.
- Images lazy-load with a solid `#111` placeholder block matching final aspect ratio (no layout shift).

### Acceptance criteria
- [ ] Captions stay glued to their images through the entire parallax range.
- [ ] No horizontal overflow at any viewport width.
- [ ] Stagger offsets preserved on mobile as pure top-padding (no parallax needed for the look to hold).
- [ ] Entrance wipes fire exactly once and never re-trigger on scroll-up.
