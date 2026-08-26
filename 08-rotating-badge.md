# 08 — Rotating Circular Text Badge ("White Rabbit")

> **Depends on:** 00-design-language-master.md

---

## Prompt

Build the rotating circular-text badge section — the single playful moment in an otherwise rigid system. It sits on a white/very-light (`#efefef`) full-bleed section between the "EMBRACING THE UNKNOWN" panels and the lime quote section.

### Composition

- **Center:** a minimal line-drawn illustration of a sitting rabbit with **X eyes** (dead-pan White Rabbit motif), drawn as inline SVG with 2px black strokes, no fill, ~180px tall. Ears tall, body a simple rounded triangle, whiskers as three short lines per side.
- **Around it:** the phrase `CHASING THE WHITE RABBIT * ` repeated to fill a circle, set on an SVG `<textPath>` following a circular path of radius ~230px, uppercase, Inter 700, ~28px, letter-spacing 0.15em, color `#050609` at **35% opacity** (it reads as a watermark ring, not a headline). The `*` separates repetitions.
- Flanking text columns (static, part of prompt 03 reveal system):
  - Left column (black, ~20px bold uppercase, left-aligned): `I FOLLOW IDEAS INTO PLACES THAT SHIFT AS I STEP INTO THEM. PATHS APPEAR, VANISH, REAPPEAR SOMEWHERE ELSE.` plus a bolder final line `BOTH KEEP THE RABBIT MOVING.`
  - Right column (same scale, right-aligned, `#9a9a9a` ghost gray): `BECOMES SOMETHING IT WASN'T MEANT TO BE. I STAY WITH IT UNTIL IT REVEALS A REASON TO FOLLOW.` with final line in solid black: `THE RABBIT IS NEVER STILL.`

### Motion

1. **Rotation:** the text ring rotates **clockwise, 30s per revolution, linear, infinite**. The rabbit illustration does NOT rotate (it stays upright inside the ring).
2. **Scroll influence (subtle):** rotation speed modulates with scroll velocity — scrolling down adds up to +100% speed (lerped, decays back to base within 800ms of scroll stop). Scrolling up slows it to 50% speed. Never reverses direction.
3. **Entrance:** ring scales `0.85 → 1` + fades in over 800ms expo-out when 40% visible; the rabbit's whiskers "draw" in (SVG stroke-dashoffset animation, 400ms) after the ring lands.
4. **Hover (desktop):** hovering the ring pauses rotation and the ring text snaps to 100% opacity (200ms). Mouse leave resumes.

### Constraints

- Implement rotation with `transform: rotate` on a `<g>` wrapper around the `<textPath>` group only — the rabbit stays in a separate non-rotating layer.
- Entire block is decorative: wrap in `aria-hidden="true"` and provide an `sr-only` equivalent phrase "Chasing the white rabbit — an note on curiosity and process".
- Pause rotation off-screen (IntersectionObserver).
- `prefers-reduced-motion`: static ring at 35% opacity, whiskers pre-drawn.

### Acceptance criteria
- [ ] Ring text is evenly spaced around the full 360° with no gap or overlap at the seam.
- [ ] Rotation is buttery (compositor-only), no wobble in the rabbit.
- [ ] Section background is flat `#efefef` — no gradient, no shadow.
- [ ] Works at 320px (ring scales down to ~200px total diameter, flanking text stacks above/below).
