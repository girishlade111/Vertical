# 09 — Glitch, Scanline & Distortion Image Effects

> **Depends on:** 00-design-language-master.md, 04-sticky-split-sections.md

---

## Prompt

Create the glitch/scanline treatment applied to selected B&W portraits — the "signal interference" texture that separates this portfolio from a plain photo grid. Two effect tiers: static texture (CSS) and animated displacement (canvas/SVG).

### Tier 1 — Static scanline texture (CSS, apply broadly)

- A reusable overlay class that adds horizontal scanlines to any image: `repeating-linear-gradient(0deg, rgba(0,0,0,0.18) 0 1px, transparent 1px 4px)` as a `::after` overlay, plus a faint vertical variant `repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 7px)` for panels that need CRT flavor.
- Also build the **hairline strip divider**: a 48px-wide vertical strip of dense horizontal lines (1px line / 7px gap, color per background theme) used between split panels and along section edges (observed flanking the lime "MODERN RITUALS" panel and beside the glitch portrait).

### Tier 2 — Displacement glitch (the hero treatment, apply to 2–3 portraits)

Target images: the hooded figure in "EMBRACING THE UNKNOWN" and one gallery portrait. Effect: the middle band of the image is horizontally sliced and offset, like a corrupted video frame.

1. **Slicing:** divide the image into ~28 horizontal slices (thin near the center, thicker toward edges). Center slices (a vertical band ~35% of image width, full height) get horizontal offsets following a noise curve: offsets from 0 up to **±60px**, largest displacement at the vertical center, tapering to 0 at top/bottom. Slices outside the center band stay at 0.
2. **Implementation (choose one):**
   - **Preferred:** SVG filter with `feDisplacementMap` fed by a generated noise `feTurbulence` (`baseFrequency="0 0.9"`, horizontal-only turbulence), scale ~40 — cheap and resolution-independent; OR
   - Canvas: draw the image once, then re-draw center-band slices with `drawImage` offsets; regenerate offsets every **180ms** (not every frame — the glitch should stutter, not swim).
3. **Chromatic accent:** at the slice edges, add 1px lime (#81ff28) edge lines on ~20% of slices (random per regeneration) — the only color allowed in photography.
4. **Scroll reactivity:** displacement amplitude scales with scroll velocity — at rest it idles at 30% amplitude with slow 180ms regen; during fast scroll it jumps to 100% amplitude with 90ms regen, then decays back over 600ms. This makes the image "destabilize" when the page moves fast and settle when still.
5. **Grayscale lock:** the base image stays `filter: grayscale(1) contrast(1.08)`; only slice edges may carry lime.

### Tier 3 — Motion-blur ghost on text-over-image (light touch)

- Where bold white statements overlay photos (e.g., `PAGES BECOME PLACES WORTH LINGERING IN…` over the jellyfish image), add a **scroll-velocity ghost**: a duplicated text layer offset `-6px` horizontally at 25% opacity that appears only while |scroll velocity| is high, lerping back to 0 within 300ms of scroll stop — mimicking the double-exposure smear observed in fast scrolling. Skip entirely under reduced motion.

### Constraints

- All glitch canvases/SVG filters must degrade gracefully: if canvas is unavailable, show the static Tier-1 scanline version.
- Cap simultaneous animated glitch images at 2 (perf budget); others static.
- `prefers-reduced-motion`: everything static — Tier 1 only, no regeneration, no ghost layers.
- Never apply glitch to the hero portrait or the footer imagery — those stay clean.

### Acceptance criteria
- [ ] Glitch stutter reads as intentional corruption, not lag (regen interval ≥ 90ms).
- [ ] No visible seam where slices offset to 0.
- [ ] CPU stays < 5% per glitch image when idle at rest amplitude.
- [ ] Lime edge accents appear on ≤ 20% of slices and never on faces' eyes region (mask center 15% radius from being lime-edged).
