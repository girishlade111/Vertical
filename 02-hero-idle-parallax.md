# 02 — Hero Idle Motion & Cursor Parallax

> **Depends on:** 00-design-language-master.md, 01-hero-load-animation.md

---

## Prompt

Add continuous idle motion and pointer-reactive parallax to the hero from prompt 01. The effect must feel like the typography is barely alive — a slow breath, not a screensaver.

### A. Idle drift on display type

- Each display line (`VER`, `TI`, `CAL`) drifts independently and continuously:
  - `VER`: translate between `(-8px, -4px)` and `(8px, 4px)`, loop duration **11s**.
  - `TI`: opposite phase, amplitude `±10px` horizontal / `±5px` vertical, loop **13s**.
  - `CAL`: amplitude `±6px` / `±6px`, loop **9s**.
- Easing `ease-in-out`, `animation-iteration-count: infinite`, alternating keyframes so motion reverses smoothly.
- The portrait gets a much subtler counter-drift: `±4px`, 17s loop (slowest layer).
- Result: a gentle layered "floating" where type and photo never move in sync.

### B. Cursor parallax (pointer devices only)

- Track normalized pointer position `(-0.5 … +0.5)` across the viewport, smoothed with a lerp factor of **0.06 per frame** (heavy smoothing, no snapping).
- Apply as additive translation on top of idle drift:
  - `VER`: `pointer.x * -18px, pointer.y * -10px`
  - `TI`: `pointer.x * -26px, pointer.y * -14px`
  - `CAL`: `pointer.x * -34px, pointer.y * -18px` (front layers move more — parallax depth)
  - Portrait: `pointer.x * 8px, pointer.y * 5px` (moves slightly WITH the cursor — opposite sign of the type, enhancing depth)
- Never rotate or scale on hover; translation only. Max combined offset ≤ 40px.

### C. Phase progress ticks

- The four phase columns (`001 PHASE/BREAK` … `004 PHASE/RELEASE`) each have a tiny lime indicator at the base of their hairline.
- Animate as a sequential "loading" loop: tick 1 fills for 1.2s, then tick 2, then 3, then 4, then all reset — a 4.8s cycle, `steps()` timing so fills are instant, with the active phase label's lime word at full opacity while others sit at 70%.
- Loop runs only while the hero is in viewport (pause via `IntersectionObserver`).

### D. Performance & accessibility

- Run drift + parallax on a single `requestAnimationFrame` loop writing `transform` only; use CSS custom properties (`--px`, `--py`) so one rAF drives all layers.
- Fully disable idle drift, cursor parallax, and tick loop under `prefers-reduced-motion: reduce`.
- On touch devices (no fine pointer): keep idle drift, skip cursor parallax; optionally map parallax to device tilt within ±10px if `DeviceOrientationEvent` exists — never required for the design to work.

### Acceptance criteria
- [ ] No layout thrash: only `transform`/`opacity` written per frame.
- [ ] Idle drift is imperceptible in screenshots (≤ 10px at any instant) but visible over 2–3 seconds of watching.
- [ ] Parallax lerp settles within ~600ms after the cursor stops.
- [ ] All loops pause when the hero scrolls out of view (zero CPU when off-screen).
