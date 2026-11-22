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

IBM Plex Sans, self-hosted: 400 and 600 upright, 700 italic. Italic is used only for the closing quote. All headings, prices and step numbers are upright 600 with tight tracking. Body is 17px at 1.6. Numerals are tabular everywhere.

## Layout and components

- Shell: 72rem maximum, fluid gutter. Breakpoints at 26rem, 44rem, 56rem.
- Header: sticky white bar with logo and call button; navigation moves to a second row under 56rem (no menu toggle).
- Ruled rows (`.ledger` in the hero, common questions): a 2px rule above and hairlines between.
- Panels (`.panel`, `.panel-head`, `.panel-icon`): white cards with a hairline border and medium radius, opened by an Iconoir icon in a round navy tint beside an `h3`. `.panel-brand` fills the card in brand navy. Used for the services (`.audiences`: home page, individuals on white and business on navy, each ending with a button; the individuals panel carries the price line `.audience-price` so both end level; taxation page, tax returns on white and other specialisms on navy) and for the offices on the home and contact pages.
- Steps (`.steps`, taxation page): white cards on the tinted band, each opened by a round navy number in semibold, matching the panel icons.
- Registration card (`.registration-card`, taxation page): the TPB badge on a white card beside the registration text.
- Buttons: `.button-action` (amber), `.button-ghost` (on navy), `.button-outline` (on light); 48px minimum height.
- Review carousel: horizontally scrolling list with scroll snap and no visible scrollbar, previous and next buttons, position dots, text clamped to six lines with a "See more" button; becomes a static grid under reduced motion.
- Common questions: native `details` rows, collapsed by default. On wide screens (`.faq-layout`) the heading and a call button sit in the left column and the questions fill the right.
- Price line (`.hero-price`): the starting price as a plain semibold line under the headline, no box.
- Placeholders: `.placeholder-note` dashed box and `placeholder.svg`.
- Icons: Iconoir regular, 1.5 stroke, inline sprite, `currentColor`.

## Motion

One moment: the amber stroke under the headline draws once on load. Hover transitions are 180 to 220ms ease-out. All of it is removed under `prefers-reduced-motion`.
