# 00 — Master Design-Language Prompt: "Vertical — Editorial"

> **How to use:** This is the foundation prompt. Prepend it to every other prompt in this series (01–13) so the AI has full context before executing a specific animation or component task.

---

## Prompt

Build an animated portfolio website called **"Vertical — Editorial"** for a visual artist named **Adam Knoxville** (visual artist / creator). The site is a brutalist-editorial, single-page scroll experience that feels like a cross between a Swiss type poster, a tabular archive document, and a fashion magazine. Everything is set on a pure-black canvas with one violent accent color.

### 1. Color system (semantic tokens — never raw hex in components)

| Token | Value | Usage |
|---|---|---|
| `color.surface.base` | `#000000` | Page background, default section canvas |
| `color.text.primary` | `#050609` | Text on light/lime surfaces |
| `color.text.secondary` | `#ffffff` | Primary text on black |
| `color.text.tertiary` | `#d9d9d9` | Secondary body copy, ghost headlines on black |
| `color.text.inverse` | `#0000ee` | Link hover / accent blue |
| `color.surface.raised` | `#81ff28` | THE accent: neon lime — display type, highlight spans, full-bleed sections, footer |
| `color.surface.strong` | `#0066ff` | Secondary accent (rare) |

Light sections use `#d9d9d9`–`#efefef` grays with near-black text. There are **no gradients anywhere** — only hard, full-bleed color blocks that cut against each other.

### 2. Typography

- Primary: **Inter**, weight 700 base, stack `Inter, Inter Placeholder, sans-serif`.
- Display type is enormous: hero and section headlines run **12–22vw**, tight leading (~0.85), uppercase, near-zero letter-spacing.
- Body/headline copy is set in UPPERCASE at 20–32px with generous line-height (~1.3).
- Companion **monospace** font (Space Mono / IBM Plex Mono style) for all metadata: captions, coordinates, index numbers, timestamps — 10–12px, uppercase, letter-spaced.
- Metadata grammar used everywhere: `001–004`, `PHASE/BREAK`, `IDX/AK`, `MOD — II/AK`, `/002`, `CAT — 1.07`, `STUDY — 04.13`, `(44) 7700 900 482`, `LONDON EC2A 3NW`.

### 3. Layout grammar

- Full-bleed 100vw sections stacked vertically; hard color transitions between them (black → lime → light gray → white → lime).
- 12-column grid, 40px page margins, hairline 1px rules (`rgba(255,255,255,0.15)` on black, `rgba(0,0,0,0.2)` on light) as the only dividers.
- Signature compositions: 50/50 split panels (media | text), staggered 3-column photo galleries with big vertical offsets, edge-to-edge oversized words, index lists with numbered rows.
- B&W (grayscale) photography only — portraits, textures, smoke, sculpture, glitch-distorted figures. Lime and black are the only colors allowed to touch photos.
- Decorative vertical scanline/hairline strips (repeating 1px lines) used as texture between panels.

### 4. Motion philosophy

- All motion is **scroll-driven or entrance-driven**; nothing bounces, nothing spins except one deliberate rotating badge.
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (expo-out) for entrances; `linear` for loops (marquee, rotation).
- Durations: entrances 0.6–1.2s, stagger 60–90ms, loops 20–60s.
- Text reveals happen as **per-word / per-line opacity ramps tied to scroll progress** (ghost → solid), never as slide-ins for body copy.
- Respect `prefers-reduced-motion`: disable parallax/marquee/rotation, show all text at full opacity.

### 5. Accessibility (non-negotiable)

- WCAG 2.2 AA: visible `:focus-visible` outlines (2px lime on black, 2px black on lime), keyboard-operable nav and index rows, contrast-checked text.
- Decorative giant text is `aria-hidden`; real headings exist in the DOM.

### QA checklist
- [ ] Only semantic tokens used; no raw hex in components.
- [ ] Every interactive element has default / hover / focus-visible / active states.
- [ ] Reduced-motion fallback implemented for every animation.
- [ ] No gradients, no border-radius beyond `radius.xs = 11px` (used sparingly on tags/badges).
