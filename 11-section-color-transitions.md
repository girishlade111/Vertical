# 11 — Full-Bleed Color-Block Section Transitions

> **Depends on:** 00-design-language-master.md

---

## Prompt

Implement the page's section rhythm: hard-cut, full-bleed color blocks in a deliberate order, with content themes that flip per block. There are no gradients, no rounded section corners, no overlapping section shadows — sections butt against each other like printed posters.

### Section order & themes (top → bottom)

1. **BLACK** — Hero (prompts 01/02).
2. **BLACK** — Manifesto + ghost watermark `explore` (prompt 03/06).
3. **BLACK** — Gallery parallax field (prompt 05).
4. **LIGHT GRAY `#d9d9d9`** — `PERSPECTIVE / NOT THE TRUTH` split panel (prompt 04-A). Black + white text on gray.
5. **BLACK** — `SOME PIECES SETTLE. SOME DON'T.` statement over a dark smoky video/image background (video: slow-drifting smoke, 20s loop, 40% opacity, grayscale, `aria-hidden`, `prefers-reduced-motion` → static frame). Mono lime chip `EXPLORATION PHASE` above the statement.
6. **BLACK** — 4-column archive strip (`MATERIAL STUDIES` / `MUSCLE — THE` / `MUSCLE — THE` / `WORK ABOUT`): each column = lime tick + mono title + 1px underline + mono paragraph, columns separated by hairlines.
7. **LIME `#81ff28`** — `MODERN RITUALS` split panel (prompt 04-B). All text black; B&W photo right.
8. **BLACK** — `VERTICAL` marquee band + archive bar + index rows (prompts 06/07).
9. **LIGHT GRAY → split** — `EMBRACING THE UNKNOWN` panels (prompt 04-C) with glitch portrait (prompt 09).
10. **WHITE `#efefef`** — White Rabbit rotating badge (prompt 08).
11. **LIME** — Quote section (`“WHETHER ON PAPER OR PIXELS…” — AK`) with B&W podcast-studio photo right, caption chip `Studio CAM66 London / Daniel & Adam` in mono white over the photo corner.
12. **LIGHT GRAY `#d9d9d9`** — `MODUS VIVENDI` case-study: left B&W photo (woman, hair in motion, water splash, motion-blur streaks), right black title with thick 3px underline rule + paragraph `A DELICATE BALANCE OF STILLNESS AND MOVEMENT, PRESENCE AND ABSENCE. IT CAPTURES BODIES IN TRANSFORMATION, SUSPENDED IN QUIET RESISTANCE.`
13. **WHITE** — `CONTEMPORARY MOTION CONCEPT` project block: mono meta `CONCEPT | MOTION ART` (the `|` in lime), title with lime `/` glyph, mono paragraph, dates `2024 — 2025`, a lime pill tag that **animates in with a blur-to-sharp settle** (`filter: blur(8px) + opacity 0 → blur(0) + opacity 1`, 500ms) when scrolled into view, label `RIPPLE TRACE` below. Giant `AK1.0` in near-black ~14vw as the block's closing mark.
14. **WHITE** — About block: `I AM` huge + `ADAM KNOXVILLE` stacked, portrait right, statement `I MAKE WORK ACROSS IMAGE, FORM, MOTION AND SOUND` with lime highlights, mono bio paragraph, signature rule `AK ————— ADAM KNOXVILLE` (monogram + long hairline, draws left→right on enter).
15. **LIME** — Footer (prompt 12).

### Transition rules

- Sections meet at hard 0px boundaries. No parallax overlap between differently-colored sections (the gallery parallax from prompt 05 stays fully inside its black block).
- Each color block's text theme flips atomically: on lime/gray/white → `color.text.primary #050609`; on black → `#ffffff` / `#d9d9d9`. Verify contrast at every boundary (WCAG 2.2 AA).
- Optional scroll cue: a 1px vertical progress hairline fixed at the left viewport edge (40px margin), lime fill indicating page scroll progress, `aria-hidden`. Subtle: 1px wide, max 40vh visible.
- Section entrances: only the content animates (per prompts 03–09); the color blocks themselves do NOT fade/slide — the hard cut is the aesthetic.

### Constraints

- No `scroll-snap` — free scroll.
- Background colors must extend under the fixed nav and behind the footer edge (no white flashes on overscroll: set `html { background: #000 }` and `overscroll-behavior: none` where supported).
- Every section has a semantic landmark (`header/main/section/footer`) with `aria-labelledby` pointing to its visible heading.

### Acceptance criteria
- [ ] Color order matches the 15-block sequence exactly.
- [ ] Zero gradient/soft edges between blocks at every breakpoint.
- [ ] Contrast passes AA for all body text in all 4 background themes.
- [ ] Smoke video autoplays muted, loops, and is replaced by a static image under reduced motion or when data-saver is detected.
