# 13 — Image-Editing Prompt: Convert Portrait Capture → Landscape Hero Image

> **Purpose:** Feed this to an AI image editor (Photoshop Generative Expand / Firefly, Midjourney Editor, DALL·E outpainting, Canva Magic Expand, etc.) to produce a clean **1920×1080 (16:9) landscape** website hero image from the existing tall full-page capture (`image.png`, 1910×18012).

---

## Source analysis (what the AI is working with)

The usable region is the **top ~1080px** of `image.png` (the hero viewport). It contains:

- Pure black background (`#000000`)
- Giant neon-lime (`#81ff28`) display type "VERTICAL" broken into three staggered lines: `VER` (top-left), `TI` (center, mid-height), `CAL` (lower-right), in a heavy geometric sans (Inter/Helvetica-like, uppercase)
- A dark B&W portrait of a man in a black bucket hat occupying the right half, face half-shadowed, black clothing merging into the black background
- White uppercase text block top-right: "I BREAK THINGS / TO SEE WHAT / THEY ARE MADE OF" (first line lime), plus "ADAM KNOXVILLE / VISUAL ARTIST/CREATOR" with a small lime vertical bar
- Artifacts to remove: a mouse cursor near the center, a browser scrollbar on the right edge, and a "Get Template" badge in the bottom-right corner

## PRIMARY PROMPT (paste this)

> Edit this image into a clean 1920×1080 landscape (16:9) website hero banner. First, crop to the hero region at the top of the tall source image, then recompose to exact 16:9.
>
> **Clean-up (mandatory):** Remove the small mouse cursor arrow near the center of the frame. Remove the browser scrollbar strip along the right edge — extend the black background and the portrait's shoulder naturally into that area. Remove the "Get Template" badge overlay in the bottom-right corner, reconstructing the black t-shirt fabric and background behind it seamlessly.
>
> **Recomposition:** Keep the giant lime-green (#81ff28) staggered word "VER / TI / CAL" exactly as the compositional anchor — same font weight (ultra-bold geometric sans, uppercase), same diagonal cascade (VER top-left, TI center, CAL bottom-right), same scale relationship to the portrait. Keep the black-and-white portrait of the man in the black bucket hat on the right side; his face stays half-shadowed, moody, high contrast, film-grain texture. Keep the small white/lime text block in the top-right corner exactly as-is, including the lime vertical bar beside the name.
>
> **Extension / outpainting:** Extend the pure black (#000000) background to fill the full 16:9 frame. On the left side, extend the black negative space so the "VER" letters have generous breathing room. At the bottom, extend the man's black t-shirt shoulder line naturally — soft fabric folds, same lighting, no new objects, no new text. The portrait's grain and contrast must match the original seamlessly; the boundary between original and generated pixels must be invisible.
>
> **Style lock:** Flat matte black background, no vignette, no gradient, no glow. Only two colors touch the image: neon lime #81ff28 and pure white #ffffff against grayscale photography. Editorial, brutalist, high-fashion magazine aesthetic. Sharp vector-crisp typography edges against photographic grain.
>
> **Do not:** add any new text, letters, logos, or watermarks; add any color imagery; brighten the background; add shadows, gradients, borders, or rounded corners; distort or re-space the existing letters; change the lime hue.

## VARIANT B — Minimal-touch version (if the tool can't recompose)

> Outpaint this image horizontally to 1920×1080 (16:9), keeping the original pixels untouched in the center. Fill the new left and right margins with pure flat black (#000000) matching the existing background grain-free. On the right, continue the man's black-clad shoulder naturally into the new space. On the left, pure empty black negative space. Remove any UI artifacts (cursor, scrollbar, corner badge). No new elements, no text, no color — black, white, and lime #81ff28 only.

## Output technical spec

- Resolution: **1920×1080 px** (also export 2560×1440 for large displays)
- Format: PNG (or WebP q90 for web), sRGB color profile
- File weight target: < 800 KB WebP for production use
- Safe margins: keep all text ≥ 64px from every edge (nav clearance top, mobile-crop safety)

## Negative prompt (for tools that support it)

```
new text, extra letters, gibberish typography, watermark, logo, colorful photo,
saturated colors, gradients, glow, lens flare, vignette, border, frame,
rounded corners, blur on typography, distorted letters, changed font,
bright background, gray haze, extra people, hands, jewelry, busy background
```

## Post-edit QA checklist

- [ ] Exactly 16:9, no residual scrollbar/cursor/badge pixels
- [ ] Lime reads as #81ff28 (not yellow-green, not mint)
- [ ] Letter edges are crisp (no AI softening on the type)
- [ ] Generated fabric/background matches original grain — no visible seam
- [ ] Text block top-right still legible at 50% zoom
