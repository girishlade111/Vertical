\# Vertical — Editorial



\## Mission

Create implementation-ready, token-driven UI guidance for Vertical — Editorial that is optimized for consistency, accessibility, and fast delivery across e-commerce storefront.



\## Brand

\- Product/brand: Vertical — Editorial

\- URL: https://vertical.framer.media/

\- Audience: online shoppers and consumers

\- Product surface: e-commerce storefront



\## Style Foundations

\- Visual style: clean, functional, implementation-oriented

\- Main font style: `font.family.primary=Inter`, `font.family.stack=Inter, Inter Placeholder, sans-serif`, `font.size.base=16px`, `font.weight.base=700`, `font.lineHeight.base=16px`

\- Typography scale: `font.size.xs=10px`, `font.size.sm=12px`, `font.size.md=14px`, `font.size.lg=16px`, `font.size.xl=20px`, `font.size.2xl=24px`, `font.size.3xl=28px`, `font.size.4xl=32px`

\- Color palette: `color.text.primary=#050609`, `color.text.secondary=#ffffff`, `color.text.tertiary=#d9d9d9`, `color.text.inverse=#0000ee`, `color.surface.base=#000000`, `color.surface.raised=#81ff28`, `color.surface.strong=#0066ff`

\- Spacing scale: `space.1=1px`, `space.2=3px`, `space.3=6px`, `space.4=10px`

\- Radius/shadow/motion tokens: `radius.xs=11px`



\## Accessibility

\- Target: WCAG 2.2 AA

\- Keyboard-first interactions required.

\- Focus-visible rules required.

\- Contrast constraints required.



\## Writing Tone

Concise, confident, implementation-focused.



\## Rules: Do

\- Use semantic tokens, not raw hex values, in component guidance.

\- Every component must define states for default, hover, focus-visible, active, disabled, loading, and error.

\- Component behavior should specify responsive and edge-case handling.

\- Interactive components must document keyboard, pointer, and touch behavior.

\- Accessibility acceptance criteria must be testable in implementation.



\## Rules: Don't

\- Do not allow low-contrast text or hidden focus indicators.

\- Do not introduce one-off spacing or typography exceptions.

\- Do not use ambiguous labels or non-descriptive actions.

\- Do not ship component guidance without explicit state rules.



\## Guideline Authoring Workflow

1\. Restate design intent in one sentence.

2\. Define foundations and semantic tokens.

3\. Define component anatomy, variants, interactions, and state behavior.

4\. Add accessibility acceptance criteria with pass/fail checks.

5\. Add anti-patterns, migration notes, and edge-case handling.

6\. End with a QA checklist.



\## Required Output Structure

\- Context and goals.

\- Design tokens and foundations.

\- Component-level rules (anatomy, variants, states, responsive behavior).

\- Accessibility requirements and testable acceptance criteria.

\- Content and tone standards with examples.

\- Anti-patterns and prohibited implementations.

\- QA checklist.



\## Component Rule Expectations

\- Include keyboard, pointer, and touch behavior.

\- Include spacing and typography token requirements.

\- Include long-content, overflow, and empty-state handling.

\- Include known page component density: links (37), buttons (3), navigation (2).



\- Extraction diagnostics: Audience and product surface inference confidence is low; verify generated brand context.



\## Quality Gates

\- Every non-negotiable rule must use "must".

\- Every recommendation should use "should".

\- Every accessibility rule must be testable in implementation.

\- Teams should prefer system consistency over local visual exceptions.



