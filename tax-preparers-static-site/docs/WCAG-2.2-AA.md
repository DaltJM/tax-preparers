# WCAG 2.2 Level AA pass: TaxPreparers concept

Redone 22 November 2026 after the layout changes (service and office panels, step cards, registration card, proof strip, upright headings, two-column common questions). Checked on the local build (`/`, `/taxation/`, `/contacts/`) served by `python -m http.server`, in Chrome via Playwright, with axe-core 4.14.1 (WCAG 2.0, 2.1 and 2.2 A and AA rules plus best practices) at 1280 px and 320 px, with every "Common questions" item open and every review expanded. The previous pass was 1 October 2026.

**Result: no failures found. This is not a conformance claim.** Automated tools cover only part of WCAG, and the items under "Not yet tested" below still need a person with a screen reader and real devices.

Status key: **Pass** (checked and met), **N/A** (the page has nothing the criterion applies to), **Untested** (needs a check not done here).

## Perceivable

| Criterion | Status | Evidence |
|---|---|---|
| 1.1.1 Non-text content | Pass | Logo "TaxPreparers home"; registration symbol and placeholder have descriptive alt text; every image has an `alt`. Icons (panel, office, check, star, step numbers) are `aria-hidden` or CSS-generated, with text beside them ("Rated 5.0 on Google", "5 out of 5 stars from 29 Google reviews") |
| 1.2.1 to 1.2.5 Time-based media | N/A | No audio or video |
| 1.3.1 Info and relationships | Pass | Landmarks (header, nav, main, footer), one `h1` per page, no skipped heading levels on any page, services and steps are lists, offices use `address`, the badge is a `figure` with `figcaption`; axe 0 violations |
| 1.3.2 Meaningful sequence | Pass | DOM order matches visual order at every width; in the two-column panels and questions the left column comes first in the source |
| 1.3.3 Sensory characteristics | Pass | No instruction relies on shape, colour or position |
| 1.3.4 Orientation | Pass | No orientation lock |
| 1.3.5 Identify input purpose | N/A | No form fields in the concept |
| 1.4.1 Use of colour | Pass | Links in text are underlined; current page in the menu has an underline bar and `aria-current`; the navy business panel is identified by its heading, not its colour |
| 1.4.2 Audio control | N/A | No audio |
| 1.4.3 Contrast (minimum) | Pass | Lowest text pair 4.9:1 (`#aab1dc` muted text on the navy panel and hero). Panel text 17.5:1, muted text on white 8.3:1, white on navy 10.3:1, price line on tint 8.6:1, outline buttons 9.8 to 10.3:1, call button 8.0:1 |
| 1.4.4 Resize text | Pass | At 200% zoom (640 CSS px) no page scrolls sideways and no content is lost; text in rem |
| 1.4.5 Images of text | Pass | The logo is the only image of text (logotype exception). The registration symbol is a third-party mark; its number is also set as real text |
| 1.4.10 Reflow | Pass | No horizontal scroll at 320, 375, 414, 768, 1024, 1280, 1440 or 1920 px on any page (24 checks). The review carousel scrolls sideways by design and is a static grid under reduced motion |
| 1.4.11 Non-text contrast | Pass | Button borders 4.9:1 (ghost on navy) and 9.8 to 10.3:1 (outline); check icons 10.3:1 on white, 4.9:1 on navy; panel icons 8.6:1 and 7.3:1; focus outline as before (9.8:1 on light, amber 5.4:1 on navy). Not required, recorded for completeness: the amber star in the proof strip is 2.0:1 on its tint and is decorative (the rating is stated in text); panel borders are 1.4:1 and outline non-interactive cards |
| 1.4.12 Text spacing | Pass | With WCAG's spacing overrides at 320 px, all questions open and reviews expanded: no horizontal scroll and no clipped visible text on any page. (The only elements reported as clipped were the visually hidden screen-reader labels, which are clipped on purpose.) Review cards stay clamped to six lines and open with "See more" |
| 1.4.13 Content on hover or focus | N/A | No hover or focus popups |

## Operable

| Criterion | Status | Evidence |
|---|---|---|
| 2.1.1 Keyboard | Pass | Tabbed through every page (37 stops on the home page, 14 on tax returns, 18 on contact). Enter opens a question; Enter on "Next" moves the reviews and announces "Showing review 2 of 5"; Enter on "See more" sets `aria-expanded="true"` |
| 2.1.2 No keyboard trap | Pass | Tab cycles through each whole page and back to the start |
| 2.1.4 Character key shortcuts | N/A | None |
| 2.2.1, 2.2.2 Timing; pause, stop, hide | Pass | No time limits. One 1.1 s stroke animation on load; no autoplay carousel |
| 2.3.1 Three flashes | Pass | Nothing flashes |
| 2.4.1 Bypass blocks | Pass | "Skip to main content" is the first Tab stop on every page and shows above the header when focused (z-index 30 over the header's 20; checked by screenshot) |
| 2.4.2 Page titled | Pass | Unique, descriptive titles on all three pages |
| 2.4.3 Focus order | Pass | Follows visual order; no backward jumps on any page |
| 2.4.4 Link purpose (in context) | Pass | Link and button text names its destination ("About our tax returns", "Talk to us about your business", "Directions to Mill Park", "29 Google reviews", "See more of N H.'s review") |
| 2.4.5 Multiple ways | Pass with note | Three pages, all in the main menu and footer on every page. The full site should add a sitemap page or search if it grows |
| 2.4.6 Headings and labels | Pass | Headings describe their sections and panels |
| 2.4.7 Focus visible | Pass | Every Tab stop on all three pages showed an outline of at least 2 px (3 px by design) |
| 2.4.11 Focus not obscured (minimum) | Pass | No focused control below the header ended up behind the sticky header (`scroll-padding-top` set) |
| 2.5.1, 2.5.2, 2.5.4 Pointer gestures, cancellation, motion | Pass | Carousel has button alternatives to swiping; actions fire on click; no motion input |
| 2.5.3 Label in name | Pass | Visible text is part of each accessible name |
| 2.5.7 Dragging movements | Pass | Previous and Next buttons replace dragging the carousel |
| 2.5.8 Target size (minimum) | Pass | No link, button or question under 24 x 24 px at any of the eight widths on any page (links inside sentences are exempt) |

## Understandable

| Criterion | Status | Evidence |
|---|---|---|
| 3.1.1 Language of page | Pass | `lang="en-AU"` on all pages |
| 3.1.2 Language of parts | N/A | English throughout |
| 3.2.1, 3.2.2 On focus, on input | Pass | Nothing changes context on focus |
| 3.2.3 Consistent navigation | Pass | Same header and footer on every page |
| 3.2.4 Consistent identification | Pass | Same labels and icons for the same actions |
| 3.2.6 Consistent help | Pass | The call button is in the same place in the header on every page; the home page's common questions add a second call button |
| 3.3.1 to 3.3.4, 3.3.7, 3.3.8 Forms and authentication | N/A | No form or login in the concept. **The enquiry form in the full version must be checked against these** |

## Robust

| Criterion | Status | Evidence |
|---|---|---|
| 4.1.2 Name, role, value | Pass | Native `details`/`summary`, buttons with `aria-expanded` and `aria-controls`, labelled navigation and review group; axe 0 violations |
| 4.1.3 Status messages | Pass | The review position is announced through a polite live region |

## Reduced motion

Checked in a browser with reduced motion emulated (Playwright `reducedMotion: 'reduce'`): no animation runs on the home page, and the review track becomes a static grid with no sideways scrolling. This replaces the 1 October note that the styles had only been read.

## Not yet tested

- A real screen reader (NVDA, JAWS, VoiceOver, TalkBack).
- A real phone and tablet, including touch on the carousel.
- Browsers other than Chrome.
- Windows high-contrast (forced colours) mode. Chrome's emulation through Playwright did not change the rendering, so it showed nothing; it needs a real Windows machine with a contrast theme on.
- The enquiry form, which does not exist yet.
