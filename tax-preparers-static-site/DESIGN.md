# Design

Recorded from the built concept (1 October 2026). Tokens live at the top of `styles.css`; change them there.

## Colour

| Role | Token | Value | Notes |
|---|---|---|---|
| Brand field | `--color-brand` | `#2f3a82` | Sampled from the TaxPreparers logo. Hero and page heads. |
| Deep field | `--color-brand-deep` | `#1b2152` | Closing band. |
| Text | `--color-text` | `#14182e` | |
| Muted text | `--color-text-muted` | `#474d6b` | |
| Page | `--color-bg` | `#fafaf7` | |
| Surface | `--color-surface` | `#ffffff` | Header, proof strip, review cards, footer. |
| Band | `--color-band` | `#e9ebf5` | Tint of the logo navy. |
| Action | `--color-action` | `#f0b23a` | Concept accent. Call buttons and the hero stroke only. Text on it is `#1b2152`. |
| Rating stars | `--color-rating` | `#8f5b00` | Darkened amber so stars keep contrast on white. |
| Lines | `--color-line` | `#d5d8e6` | |

Strategy: committed. Navy owns whole regions; amber marks the one action.

## Type

IBM Plex Sans, self-hosted: 400 and 600 upright, 700 italic. `h1` and `h2` are bold italic with tight tracking, echoing the slanted logo wordmark. Body is 17px at 1.6. Numerals are tabular everywhere.

## Layout and components

- Shell: 72rem maximum, fluid gutter. Breakpoints at 26rem, 44rem, 56rem.
- Header: sticky white bar with logo and call button; navigation moves to a second row under 56rem (no menu toggle).
- Ruled rows (`.rows`, `.ledger`, `.office`, `.steps`): a 2px rule above and hairlines between. These replace cards.
- Buttons: `.button-action` (amber), `.button-ghost` (on navy), `.button-outline` (on light); 48px minimum height.
- Review carousel: horizontally scrolling list with scroll snap and no visible scrollbar, previous and next buttons, position dots, text clamped to six lines with a "See more" button; becomes a static grid under reduced motion.
- Common questions: native `details` rows, collapsed by default.
- Price line (`.hero-price`): the starting price as a plain bold italic line under the headline, no box.
- Placeholders: `.placeholder-note` dashed box and `placeholder.svg`.
- Icons: Iconoir regular, 1.5 stroke, inline sprite, `currentColor`.

## Motion

One moment: the amber stroke under the headline draws once on load. Hover transitions are 180 to 220ms ease-out. All of it is removed under `prefers-reduced-motion`.
