# 04 — Sticky Split Sections (Media | Text Panels)

> **Depends on:** 00-design-language-master.md, 03-scroll-text-reveal.md

---

## Prompt

Build the recurring 50/50 split-panel section pattern: one half is a **sticky media panel**, the other half is a **scrolling text column**, separated by a decorative scanline strip. Three instances exist on the page.

### Shared pattern

- Section = CSS grid `grid-template-columns: 1fr 1fr` (stack to single column under 900px, media on top).
- Media panel: `position: sticky; top: 0; height: 100vh` — the image holds while the text column scrolls past.
- Between the two halves, insert a **vertical scanline strip**: 40–60px wide column of repeating 1px horizontal hairlines (or vertical lines) at 8px intervals, color `rgba(0,0,0,0.15)` on light panels / `rgba(255,255,255,0.12)` on dark.
- Text column content uses the scroll-reveal system from prompt 03.

### Instance A — "PERSPECTIVE / NOT THE TRUTH" (light panel)

- Background `#d9d9d9`. Right column: giant headline `PERSPECTIVE` in `#050609` (~7vw) with the letters `T` overlapping — actually two stacked words: `PERSPECTIVE` black, then `NOT THE TRUTH` in **white** (intentionally low-contrast on the gray — keep it, it's a design signature) at the same scale.
- Left rail (on the media side): mono metadata stack — `INDX —— //CONCEPTUAL` and an inverted chip `REVISION—NEUE 7.6` (black background, white mono text).
- Below the headline: two spec columns `CAT — 1.07` and `CAT — 1.08`, each with a short black underline rule, a `|||` glyph at the far right, and a mono paragraph (~11px, uppercase): e.g. `I WORK BETWEEN ORDER AND INTERRUPTION, WHERE CLEAN LINES ARGUE WITH IMPULSE. WHERE RHYTHM BREAKS BEFORE IT RESOLVES.` / `VERTICAL IS THE STATE I RETURN TO WHEN UNFINISHED THOUGHTS, SHAPES, AND THINGS THAT REFUSE SILENCE COLLIDE.`
- Media side (left): a tall B&W architectural photo (light shafts, staircase) that slowly **parallaxes within its frame** (`translateY` ±40px across the section's scroll range, image 115% height).

### Instance B — "MODERN RITUALS" (lime panel)

- Full-bleed `color.surface.raised` #81ff28. Left text column (black text): `MODERN RITUALS` ~7vw, mono meta `STUDY — 04.13` + `SELECTED WORK`, then a quote with a **6px black left bar**: `LINES BECOME SIGNALS. SURFACES BECOME STORIES.` (~28px bold), then mono paragraph `STRUCTURE ARGUES WITH IMPULSE UNTIL BOTH LEARN TO STAND STILL. GRIDS SET THE PACE. MARGINS HOLD THE QUIET.` revealed via prompt 03.
- Bottom-left: a strip of three small square thumbnails (~72px, B&W: a dot/sphere, an ink splash, smoke) with 1px black borders.
- Right media panel: large B&W portrait (face wrapped in translucent plastic) with a white bracketed word overlay centered on the image: `[CONFESSIONS]` — white, bold, ~48px, in square brackets. The bracketed word is a **cycling label**: every 3s it swaps to the next word in `CONFESSIONS → RITUALS → SIGNALS` with a quick 200ms clip-reveal (old word wipes up out of a mask, new word wipes in from below). Loop pauses when off-screen.
- A vertical scanline strip separates text from image.

### Instance C — "EMBRACING THE UNKNOWN" (light panel, glitch media)

- Background `#d9d9d9`. Right column: `EMBRACING THE / UNKNOWN` in near-black ~8vw with a thick 4px black rule under the block (draws left→right on enter, per prompt 03 headline variant), sub-line in bold uppercase ~20px: `I FOLLOW IDEAS INTO PLACES THAT DON'T HAVE NAMES YET. SOME REVEAL STRUCTURE. SOME COLLAPSE INTO NOISE.`, then a faint mono paragraph that fades in last: `OBSESSION AND END MISBEHAVE IN MEASURE. I RETURN OFTEN WITH THE SAME QUESTIONS. DISCIPLINE IS A FORM OF CURIOSITY, AND UNCERTAINTY A COMPASS.`
- Left media panel: B&W hooded portrait with **horizontal displacement glitch** (see prompt 09) plus stacked mono words top-left: `ILLUSION / PERSPECTIVE / CONTROL` in white.
- Overlaid on the media panel, bottom: giant white statement `PATTERNS EMERGE. FRICTION CREATES MEANING.` (~5.5vw) that reveals per-line on scroll; later in the scroll a second statement `SIGNALS FORM. / SURFACES RESPOND.` replaces it in the same position (crossfade as the text column scrolls).

### Constraints

- Sticky panels must not cause CLS; reserve exact heights.
- On mobile: unstick everything — media becomes a normal block above text.
- All images grayscale; add `filter: grayscale(1) contrast(1.05)` to enforce it even if source assets drift.

### Acceptance criteria
- [ ] Sticky media holds perfectly flush (no 1px gaps/jitter at section boundaries).
- [ ] `[CONFESSIONS]` cycle pauses off-screen and respects reduced-motion (static word).
- [ ] Scanline strips are pure CSS `repeating-linear-gradient` (no images).
- [ ] Keyboard users can reach any interactive element inside panels with visible focus.
