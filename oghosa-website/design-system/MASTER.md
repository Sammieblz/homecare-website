# Oghosa design system (premium-editorial, keep existing colors)

**Rule 1: Colors do not change.** Keep the existing palette already used across the site (Tailwind `blue-*`, `gray-*`, `white`).

This redesign comes from **typography, spacing, hierarchy, and composition**, not new gradients or new brand colors.

## Typography

- **Headlines (`h1–h4`)**: Fraunces (serif), tighter tracking, strong hierarchy
- **Body**: Source Sans 3 (high legibility)
- **Defaults**:
  - Body size: 16–18px
  - Max line length for long paragraphs: ~65–80 characters
  - Use fewer, stronger headings (avoid “wall of text”)

Tailwind helpers:
- `font-display` for headings
- `font-body` for paragraphs, nav, UI copy

## Spacing + layout

- Use a single container width: `max-w-7xl` with consistent horizontal padding.
- Prefer **fewer** section types, repeated consistently:
  - Hero (editorial headline + one CTA)
  - Proof (BBB, reviews)
  - Services grid
  - Story / values
  - CTA band
- Avoid hover `scale-*` on large blocks (it reads cheap). Use shadow/border/color transitions instead.

## Components

- **Buttons**:
  - One primary CTA (`bg-blue-900 text-white`)
  - One secondary (outline / subtle)
  - One text link style
  - All interactive elements must have clear `focus-visible` states.
- **Cards**:
  - Subtle border + soft shadow
  - Prefer whitespace over heavy decoration
- **Motion**:
  - Minimal fade/slide on scroll, staggered where it helps comprehension
  - Prefer reduced motion support (`prefers-reduced-motion`)
  - Motion should never cause layout shift

## Transportation van

Keep the van animation as a signature element, but it should feel premium:
- smooth motion, no stepped jumps
- no horizontal scroll
- reduced-motion renders static
