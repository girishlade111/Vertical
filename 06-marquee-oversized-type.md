# 06 — Oversized Marquee Typography & Ghost Watermarks

> **Depends on:** 00-design-language-master.md

---

## Prompt

Create the oversized typographic moments that act as section punctuation: a full-width lime marquee band, ghost watermark words, and edge-to-edge name typography.

### A. "VERTICAL" marquee band (mid-page)

- A full-bleed black section containing the word **VERTICAL** set at ~22vw, Inter 700 uppercase, color `color.surface.raised` (#81ff28), single line, `white-space: nowrap`, width ~130vw so it bleeds past both edges.
- **Motion:** continuous horizontal marquee, leftward, **45s per loop**, `linear`, seamless (duplicate the word with `aria-hidden` for the wrap). Amplitude is slow — roughly 15–25px per second; it should read as a drift, not a ticker.
- **Scroll-reactive skew (optional enhancement):** add `skewX` proportional to scroll velocity (max 4deg, lerped back to 0 within 400ms of scroll stop) so fast scrolling visibly "shears" the giant word. Zero skew at rest.
- Directly below the band: statement in `#d9d9d9` ~5.5vw uppercase, left-aligned at page margin: `THE ARCHIVE OF EVERYTHING I CAN'T KEEP IN ONE PLACE.`
- Below that: a full-width **archive bar** — 1px top and bottom hairlines (rgba white 0.2), containing: a small lime folder icon, mono label `VERTICAL_STORAGE — 2015-2026` left, and mono label `ANALOG ARCHIVES` right. The bar is static.

### B. Ghost watermark words

- Behind the manifesto section (black bg), place the word `explore` lowercase at ~25vw, Inter 700, color `#ffffff` at **5% opacity**, positioned center-right, `z-index: 0`, `pointer-events: none`, `aria-hidden`, `user-select: none`.
- It sits BEHIND content and partially behind section imagery; it never participates in scroll reveals — permanently static.
- Add one more watermark `index` at 4% opacity in the index-list section, bottom-left, cropped by the viewport edge.

### C. Edge-to-edge name typography

- Footer-adjacent moment: `Adam Knoxville` in mixed case (capital A, capital K, lowercase rest — this mixed-case is intentional and appears only here and in the footer), black text on the lime field, font-size ~16vw, `line-height: 0.9`, letter-spacing -0.02em, spanning edge to edge with the first and last glyphs touching the viewport edges (use `clamp()` + `text-align: justify` trick or SVG `textLength` to guarantee exact edge-to-edge fit at every width).
- Entrance: rises from below a clip mask (like prompt 01's display type) when scrolled into view, once.
- The very last element of the page repeats the pattern with the word `VERTICAL` in black on lime, even larger (~20vw), also edge-to-edge, with the same clip-mask rise.

### Constraints

- Marquee and watermarks are decorative: `aria-hidden="true"`, `pointer-events: none`.
- Pause the marquee when the band is off-screen (IntersectionObserver toggling `animation-play-state`).
- `prefers-reduced-motion`: marquee becomes static (word centered, cropped at both edges); skew effect removed entirely; name typography renders in final position.
- No gradients, no outlines, no text-shadows — flat color only.

### Acceptance criteria
- [ ] Marquee loop is perfectly seamless (no jump at the wrap point).
- [ ] Edge-to-edge text touches both margins at 320px, 768px, 1440px, and 2560px widths.
- [ ] Watermarks invisible in high-contrast mode (they are texture, never content).
- [ ] Zero jank: marquee runs on compositor only (`transform` keyframes).
