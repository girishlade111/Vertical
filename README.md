# Vertical — Editorial

An editorial-style interactive website built with React, Vite, and Tailwind CSS. Vertical is a design-system showcase: a set of motion-rich editorial sections (hero load animation, idle parallax, scroll text reveals, sticky split sections, gallery parallax columns, oversized marquee typography, index list interactions, rotating badges, glitch/scanline effects, blend-mode nav, section color transitions, footer microinteractions) implemented as reusable components.

The repo also ships the full design documentation that produced the site:

- `DESIGN.md` — implementation-ready design-system guidance: brand, style foundations, typography/color/spacing tokens, accessibility
- `SKILL.md` — agent skill spec for generating design-system guidance for this style
- `00-design-language-master.md` … `12-footer-microinteractions.md` — one spec doc per section/effect
- `13-image-editing-landscape.md` — image-editing reference

## Features

- **Editorial hero** — animated hero load sequence with idle parallax motion
- **Scroll storytelling** — text reveal on scroll, sticky split sections, section color transitions
- **Galleries & motion** — parallax gallery columns, oversized marquee typography, rotating badges
- **Interactive index** — index-list hover/click interactions with section jumps
- **Visual effects** — glitch + scanline effects, blend-mode navigation hover states
- **Footer microinteractions** — animated footer details and links
- **Design docs** — token-driven design language documented alongside the code

## Tech stack

- **React 18** + **Vite 5** + TypeScript-ready JSX
- **Tailwind CSS** + PostCSS/Autoprefixer
- **Framer Motion** for scroll/animation choreography
- **Google Fonts** (Inter, Space Mono)

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build & deploy

```bash
npm run build    # static output in dist/
npm run preview  # preview the production build
```

`npm run build` produces a fully static `dist/` folder — deploy it to any static host (GitHub Pages, Cloudflare Pages, Netlify).

## Project structure

```
src/
  App.jsx            # section composition
  main.jsx           # entry
  index.css          # global styles + fonts
  components/        # Hero, Nav, Marquee, Gallery, IndexRows, Manifesto, ...
  hooks/             # animation helpers
public/              # static assets
00-13-*.md           # per-section design specs
DESIGN.md            # design-system guidance
SKILL.md             # agent skill spec
```

## Deploy notes

This site is a static Vite build — no server, no env vars, no backend. Safe to deploy to any static host.

---

Built by Girish Lade — https://ladestack.in
