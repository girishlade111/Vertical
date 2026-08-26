# 12 — Footer, Contact Block & Microinteractions

> **Depends on:** 00-design-language-master.md, 11-section-color-transitions.md

---

## Prompt

Build the footer and the site's remaining microinteractions: back-to-top, link hover language, and the archive-strip details.

### Footer composition (lime `#81ff28`, black text)

1. **Ruler strip** (top of footer): a 64px-tall band of dense vertical hairlines — 1px black lines at 12px intervals, fading to sparse toward the right (mask-image linear gradient to transparent on the right 40%). Purely decorative, `aria-hidden`.
2. **Giant name:** `Adam Knoxville` mixed-case, black, ~16vw, edge-to-edge (see prompt 06-C), rising from a clip mask on enter.
3. **Contact grid** — 4 columns separated by 1px black hairlines (collapse to stacked rows on mobile):
   - Col 1: a 4px black left bar, then phone `(44) 7700 900 482` (bold, ~20px, `tel:` link) and `hey@adamknoxville.design` (bold, `mailto:` link).
   - Col 2: mono block `STUDIO 204` (bold) then `22-24 GREAT EASTERN STREET / SHOREDITCH / LONDON EC2A 3NW / UNITED KINGDOM` (10px mono, uppercase, line-height 1.6).
   - Col 3: link stack (bold uppercase 13px, 8px gaps): `HOME, WORK, ABOUT, THOUGHTS, CONTACT, PRIVACY POLICY, TERMS OF USE` with a 4px black left bar on the column.
   - Col 4: social link stack: `VIMEO, YOUTUBE, INSTAGRAM, X (TWITTER), LINKEDIN, 404`.
4. **Giant wordmark:** `VERTICAL` black ~20vw edge-to-edge at the very bottom, clipped by the viewport bottom edge by ~15% (it bleeds off-page — intentional crop).
5. **Legal line** (below/overlaid at bottom): mono 10px `© 2026 Vertical by Adam Knoxville. All work, all rights.` left; center: `↑` back-to-top button; right: template credit.

### Microinteractions

- **Footer links hover:** text gets a black highlight sweep — background fills black behind the word left→right (150ms) while the text inverts to lime (like a selection highlight). Reverse on leave (200ms). This "inverted selection" is the site's link language — reuse it for all text links on lime/gray/white surfaces.
- **On black surfaces**, links instead underline-draw left→right in lime (1px, 200ms) — matching the nav language from prompt 10.
- **Back-to-top (↑):** 40px hit target; hover: the arrow nudges up 4px (transform, 200ms) and a lime circle outline draws around it (SVG stroke draw, 300ms); click: smooth scroll to top (instant under reduced motion); focus-visible: 2px black outline.
- **Email/phone copy affordance:** clicking email copies to clipboard and shows a mono toast chip bottom-left: `COPIED — HEY@ADAMKNOXVILLE.DESIGN` in a black chip with lime text, radius 11px (`radius.xs`), slides up 8px + fades in, auto-dismisses after 2.4s.
- **404 link:** navigates to a styled 404 page: black bg, giant lime `404`, mono line `THIS PAGE REFUSED TO SIT STILL.`, back link using the underline-draw hover.

### Scroll-out moment

- As the footer enters (top crosses 80% viewport), the ruler strip's hairlines "draw" in a left→right wave (each line scales up 40ms after the previous, total ~600ms), then the giant name rises (clip mask, 900ms expo-out), then contact columns fade-slide up staggered 100ms.

### Constraints

- Footer is the last landmark; all links keyboard-reachable in DOM order.
- The bleeding `VERTICAL` must not create horizontal overflow (`overflow-x: clip` on the footer).
- `prefers-reduced-motion`: no draw/rise animations; highlight sweeps become instant color swaps.

### Acceptance criteria
- [ ] Inverted-selection hover works with keyboard focus (same visual on focus-visible).
- [ ] Clipboard toast announced via `aria-live="polite"`.
- [ ] No horizontal scrollbar at any width despite edge-to-edge type.
- [ ] All footer links resolve (no dead hrefs) and social links open in new tabs with `rel="noopener"`.
