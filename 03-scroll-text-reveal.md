# 03 — Scroll-Linked Text Reveal (Signature Effect)

> **Depends on:** 00-design-language-master.md
> This is the site's most important motion pattern — it appears in nearly every section.

---

## Prompt

Implement the signature text-reveal system used throughout the site: large uppercase statements whose **words (or short line fragments) fade from ghost to solid as the user scrolls**, mapped directly to scroll progress — not a one-shot trigger.

### Behavior spec

1. **Splitting:** Each reveal paragraph is split into word spans (preserve spaces; never break kerning). Long statements may instead split by line fragments of 3–6 words.
2. **Ghost state:** Every word starts at `opacity: 0.12`. On black sections the ghost color stays `#ffffff` (or `#d9d9d9` for softer hierarchy). **On lime sections the ghost state is lime-tinted** — words sit at `opacity: 0.15` in a darker lime (mix of `#81ff28` toward black ~20%), so unread text reads as a watermark on the green field.
3. **Scroll mapping:** Progress `p` = how far the paragraph has traveled through a viewport band: starts when the block's top crosses **85% of viewport height**, completes when the block's top reaches **35% of viewport height**. Map `p × wordCount` → number of fully revealed words; words at the reveal frontier get intermediate opacity (linear ramp between 0.12 and 1 across ~2 words for softness).
4. **Revealed state:** `opacity: 1`, color per section theme (white on black, `#050609` on lime/gray).
5. **Bidirectional:** Scrolling back up must reverse the reveal (it is a scrubbed effect, not a trigger). No hysteresis.
6. **Performance:** Update in a single rAF-throttled scroll handler; write only `opacity`. Pre-split on load; never reflow during scroll.

### Where it applies (content from the design)

- Manifesto block (black section, white text, ~40px uppercase, right-aligned column): `ART IS A CONTROLLED INTERRUPTION — THE MOMENT BEFORE IT DISAPPEARS.` followed by `I WORK ACROSS IMAGE, OBJECT, MOTION, AND SOUND TO TRACE THE SHAPE OF WHAT DOESN'T SIT STILL.`
- Accent line below it, fully lime and revealed as one unit: `IT ISN'T A PORTFOLIO.`
- Sub-line in `#d9d9d9`: `IT'S THE PLACE WHERE THE WORK REFUSES TO BEHAVE.` (smaller, 20px)
- Giant statement section over a dark smoky background: `SOME PIECES SETTLE. SOME DON'T.` in `#d9d9d9` at ~9vw, with mono tag `EXPLORATION PHASE` in a lime chip above it, and `BOTH REVEAL SOMETHING.` continuing below.
- Lime quote section (black text on `#81ff28`, ~40px, left-aligned, with opening/closing quotes and `— AK` attribution): `“WHETHER ON PAPER OR PIXELS, THE GOAL IS CONSTANT — DESIGN THAT DISAPPEARS AS THE STORY APPEARS, LETTING THE WORK SPEAK WITHOUT SHOUTING FOR ATTENTION”` — this one reveals **word by word** with the ghost state clearly visible mid-scroll (observed: first words solid black, trailing words ghosted lime-dark).
- Light-gray section closer: `WHAT HOLDS UP IS WHAT MATTERS.` with mono sub-lines `OBSERVATION OVER EXPLANATION.` / `PROCESS OVER CERTAINTY.`

### Variants

- **Headline variant (per-line):** For 3-line stacked headlines (e.g., `EMBRACING THE / UNKNOWN` with a 3px black underline rule under the last line), reveal per line with a slight upward shift (8px) + opacity, and draw the underline rule left→right (`scaleX(0→1)`, origin left, 600ms expo-out) after the last line lands.
- **Ghost-watermark variant:** Oversized background words (e.g., `explore` at 25vw, lowercase) sit permanently at 4–6% white opacity on black — they do NOT participate in reveals; they are static texture.

### Accessibility

- Full text must exist in the DOM for screen readers regardless of visual opacity — use `opacity` only, never `visibility: hidden` or `content-visibility` tricks on the text nodes.
- `prefers-reduced-motion`: render all words at full opacity immediately.
- Ensure the frontier ramp never leaves text below WCAG-readable contrast **at rest** (only transient mid-scroll states may be low contrast).

### Acceptance criteria
- [ ] Reveal scrubs smoothly at 60fps with mouse wheel, trackpad, and touch.
- [ ] Reversing scroll reverses opacity exactly (no stuck words).
- [ ] No CLS: splitting must not change line breaks or paragraph height.
- [ ] Ghost state on lime sections is visibly lime-tinted, not gray.
