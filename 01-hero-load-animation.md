# 01 — Hero Entrance / Load Animation

> **Depends on:** 00-design-language-master.md

---

## Prompt

Create the hero section of the "Vertical — Editorial" portfolio with a choreographed page-load animation. The hero is a single 100vh viewport on `color.surface.base` (#000000) composed of five layers that animate in sequence:

### Layer composition (final state)

1. **Portrait photo** — a dark, moody B&W portrait (man in a black bucket hat, face half-shadowed) anchored to the **right half** of the viewport, roughly 55% width, full height, `object-fit: cover`, grayscale. It sits **behind** the display type.
2. **Display wordmark** — the word **VERTICAL** broken into three staggered lines: `VER` / `TI` / `CAL`, set in Inter 700 (or Inter Black), uppercase, color `color.surface.raised` (#81ff28), font-size ~20vw, line-height 0.85. The lines form a diagonal cascade: `VER` starts at the top-left margin, `TI` is indented ~35% from left and sits mid-viewport, `CAL` is indented ~55% and sits at the bottom, partially overlapping the portrait. The type overlaps the photo — lime letters on top of the B&W image.
3. **Headline block** (top-right, over the photo): three stacked lines — `I BREAK THINGS` in lime, `TO SEE WHAT` in white, `THEY ARE MADE OF` in white, ~32px, uppercase, bold. Below it: a 4px lime vertical bar, then `ADAM KNOXVILLE` in white bold uppercase and `VISUAL ARTIST/CREATOR` in 10px letter-spaced uppercase.
4. **Phase timeline** — four evenly spaced columns across the middle of the hero, each with a 1px vertical hairline (rgba(255,255,255,0.2)) ~160px tall, topped by a mono label: `001 / PHASE/BREAK`, `002 / PHASE/BUILD`, `003 / PHASE/BEND`, `004 / PHASE/RELEASE`. The word after the slash is lime; the number is white. A tiny lime progress tick sits at the bottom of each hairline.
5. **Index list** (bottom-left): mono label `IDX/AK` in white with `2026` in lime below it, then a 1px vertical rule, then five stacked items in white bold uppercase ~16px: `VISUAL EXPERIMENTS`, `FORM & FUNCTION`, `SOUND & MOTION`, `WRITTEN FRAGMENTS`, `THINGS I CAN'T EXPLAIN`.
6. **Nav** (fixed top): lowercase wordmark `vertical` in white bold left; right-aligned links `WORK ABOUT THOUGHTS CONTACT` in white bold uppercase 12px.

### Load choreography (plays once on first paint, total ~1.6s)

1. **0ms** — Page background is black; everything invisible.
2. **0–900ms — Display type reveal:** each line (`VER`, `TI`, `CAL`) rises from below inside an overflow-hidden clip mask, `translateY(110%) → 0`, duration 900ms, easing `cubic-bezier(0.16, 1, 0.3, 1)`, stagger **120ms** between lines (VER → TI → CAL).
3. **200ms offset — Portrait:** fades from `opacity: 0; transform: scale(1.06)` to `opacity: 1; scale(1)`, duration 1100ms, same easing.
4. **500ms offset — Headline block:** the three lines slide up 24px + fade, staggered 80ms; the lime bar scales `scaleY(0) → 1` from top; name/role fade in last.
5. **650ms offset — Nav:** fades down from `translateY(-12px)`, 500ms.
6. **750ms offset — Phase timeline:** each 1px hairline **draws downward** (`scaleY(0) → 1`, `transform-origin: top`), staggered 100ms left→right; mono labels fade in as each line completes; lime ticks pop in (`scale(0) → 1`) 200ms after their line finishes.
7. **850ms offset — Index list:** the vertical rule draws top→bottom, then the five items slide up 16px + fade with 70ms stagger; `2026` in lime appears with a quick opacity flicker-in (2 steps, 120ms).

### Constraints

- No bounce/overshoot easings — confident expo-out only.
- All animated properties must be `transform` and `opacity` only (compositor-friendly, 60fps).
- `prefers-reduced-motion`: skip choreography, render final state immediately with a single 200ms fade.
- The hero must be fully readable if JS fails (progressive enhancement: initial state visible without `.js` class).

### Acceptance criteria
- [ ] Letters never visibly jump — clip-mask reveal only.
- [ ] Total sequence ≤ 1.8s; nothing animates after 2s.
- [ ] Type overlaps photo exactly as specified (lime over B&W).
- [ ] Keyboard focus reaches nav links immediately; focus outline is 2px lime.
