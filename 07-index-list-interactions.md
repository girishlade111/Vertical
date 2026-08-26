# 07 — Index List Rows & Hover Interactions

> **Depends on:** 00-design-language-master.md, 03-scroll-text-reveal.md

---

## Prompt

Build the index/archive list section — five full-width interactive rows that behave like a table of contents for the portfolio's disciplines.

### Row anatomy (desktop)

Each row is a 100%-width grid: `[meta 120px] [title 1fr] [ticks 60px] [arrow 80px] [description 460px]`, padded 48px vertical, separated by 1px hairlines `rgba(255,255,255,0.15)`, on black.

1. **Meta** (mono, 10px, `#d9d9d9`, uppercase): `MOD — I/AK`, `MOD — II/AK`, `MOD — III/AK`, `MOD — IV/AK`, `MOD — V/AK`.
2. **Title** (Inter 700 uppercase, ~44px, `#d9d9d9` at rest): `VISUAL EXPERIMENTS`, `FORM & FUNCTION`, `SOUND & MOTION`, `WRITTEN FRAGMENTS`, `THINGS I CAN'T EXPLAIN`.
3. **Tick marks** (under title): three tiny horizontal lines stacked (12px wide, 1px, gap 3px) — a miniature "menu" glyph; the middle line is lime.
4. **Row counter** (mono, bottom-left of row): `/001` … `/005` in `#d9d9d9`.
5. **Arrow** (→): thin 1.5px stroke arrow, white, centered in its column.
6. **Description** (Inter 700 uppercase, ~24px, `#d9d9d9`, line-height 1.25, with a 4px vertical hairline on its left edge): full sentences with **key phrases wrapped in lime** (`color.surface.raised`):
   - VISUAL EXPERIMENTS: `STUDIES IN IMAGE, LIGHT, AND DISTORTION. TESTS THAT DON'T CARE IF THEY FAIL.` (lime: `IMAGE, LIGHT,` and `TESTS`)
   - FORM & FUNCTION: `OBJECTS, SYSTEMS, AND SHAPES SHAPED WITH INTENTION — THEN PUSHED UNTIL THEY REVEAL THEIR LIMITS. A DIALOGUE BETWEEN WHAT LOOKS RIGHT AND WHAT WORKS.` (lime: `SHAPED WITH INTENTION`, `REVEAL THEIR LIMITS`)
   - SOUND & MOTION: `MOVING IMAGES, RHYTHM STUDIES, AND AUDIOVISUAL FRAGMENTS. WORK DRIVEN BY PULSE, TENSION, AND THE QUIET BETWEEN FRAMES.` (lime: `DRIVEN BY PULSE, TENSION`)
   - WRITTEN FRAGMENTS: `POEMS, LYRICS, AND UNFINISHED LINES. THOUGHTS CAUGHT MID-BREATH. WORDS THAT BEHAVE MORE LIKE IMAGES THAN SENTENCES.` (lime: `THOUGHTS CAUGHT MID-BREATH`)
   - THINGS I CAN'T EXPLAIN: `CREATIVE IDEAS THAT ARRIVED UNINVITED AND REFUSED TO LEAVE. THE WORK THAT SITS CLOSEST TO WHO I AM AND WHO I'M STILL BECOMING.` (lime: `CREATIVE IDEAS`, `REFUSED TO LEAVE`)

### Scroll entrance

- Rows reveal sequentially as they enter: hairline draws left→right (`scaleX 0→1`, 700ms expo-out), then title slides up 20px + fades, then description words run the prompt-03 reveal, then the arrow fades in and the counter types in (3-step opacity flicker, 150ms).
- Stagger between rows: 120ms.

### Hover interaction (the important part)

On row hover (and on `:focus-visible` for keyboard users — identical treatment):

1. Title color transitions `#d9d9d9 → #ffffff` (200ms ease).
2. Title indents **24px to the right** (transform translateX, 350ms expo-out).
3. The arrow translates **32px to the right** and turns lime, with a trailing fade-ghost (a second arrow at 30% opacity lagging 60ms behind — implement as pseudo-element).
4. The three tick marks "type": lines extend from 12px → 28px width sequentially, 80ms apart, middle one stays lime.
5. The description's left hairline grows from 40% → 100% height and turns lime.
6. The row counter flips to lime.
7. A full-row background wash: black → `#0a0a0a` (barely-there lift, 200ms).
8. On mouse leave everything eases back over 300ms.

The whole row is one `<a>` (or has a single stretched-link hit area) — cursor: pointer.

### Constraints

- Hover states must not shift layout — transforms only.
- Touch devices: no hover state; rows navigate on tap; provide `:active` state (background `#111`, arrow lime).
- `prefers-reduced-motion`: keep color changes, drop translations and the arrow ghost.
- Focus-visible: 2px lime outline inset -4px around the entire row.

### Acceptance criteria
- [ ] Entire row is clickable; hit target ≥ 44px tall on mobile.
- [ ] Hover choreography completes in ≤ 400ms and reverses cleanly.
- [ ] No layout shift between rest and hover states.
- [ ] Screen reader announces each row as one link with title + description.
