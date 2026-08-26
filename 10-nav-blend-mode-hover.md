# 10 — Fixed Navigation: Difference Blend & Hover States

> **Depends on:** 00-design-language-master.md

---

## Prompt

Build the fixed top navigation bar with its signature **mix-blend-mode: difference** behavior, which makes it self-invert over every section color it crosses.

### Anatomy

- Fixed, full-width, `top: 0`, height 64px, transparent background (no bar, no blur, no border), `z-index: 1000`, horizontal padding 40px.
- Left: wordmark `vertical` — lowercase, Inter 700, ~22px, white base color.
- Right: inline link list, gap 28px, Inter 700 uppercase 12px, letter-spacing 0.04em: `WORK`, `ABOUT`, `THOUGHTS`, `CONTACT`.

### The blend behavior (core requirement)

- The entire nav (logo + links) renders in **white with `mix-blend-mode: difference`** against the page.
- Result over the page's section colors (this is the observed, intended behavior — verify each):
  - Over black `#000000` → nav appears **white**.
  - Over light gray `#d9d9d9` / white `#efefef` → nav appears **near-black**.
  - Over lime `#81ff28` → nav appears **purple/violet** (the complement produced by difference blending — this surprising color shift is a deliberate design signature, keep it).
- Do NOT "fix" or override the purple state with per-section color swaps — the difference blend must be the single source of truth.
- Guard: nav container must not create a stacking context that breaks blending (no background, no `opacity < 1` on the wrapper; apply blend on the text elements themselves).

### Hover & focus states

- Link hover: color transitions to **`color.text.inverse` #0000ee** (link blue) — observed as the blue/purple flash on nav items. 150ms ease. Because of difference blending, the hover color also inverts per section; that inconsistency is accepted by design.
- Add a 1px underline that draws left→right on hover (`scaleX 0→1`, origin left, 200ms), sitting 4px below the text, same blend context.
- Active (mousedown): underline at 60% opacity.
- Focus-visible: 2px outline in `#81ff28` with 2px offset (outline is NOT blended — apply on a wrapper span so it stays visible over any section).
- Current-section indicator (optional): while scrolling, the link matching the section in view gets a persistent lime dot (4px) before its label; update via IntersectionObserver on sections.

### Behavior details

- Nav never hides on scroll (always visible), never gains a background.
- Smooth-scroll to section anchors on click (behavior: smooth, but instant under reduced motion).
- Mobile (<640px): links collapse into a full-screen black overlay menu — lime giant links (12vw) stacked with 1px hairlines, staggered slide-up entrance 60ms/item, close via ✕ in the same top-right position; overlay itself is plain black (blend disabled while open so links stay lime).

### Accessibility

- `aria-label="Primary"` on the nav; skip-to-content link as the first focusable element (visually hidden until focused).
- All states keyboard-reachable; focus order: skip link → logo → links.

### Acceptance criteria
- [ ] Nav legible over every section color including mid-scroll transitions.
- [ ] Purple-over-lime state present (difference blend verified, not simulated).
- [ ] No background/bar ever appears behind nav at any scroll position.
- [ ] Mobile overlay traps focus while open and restores focus to the trigger on close.
