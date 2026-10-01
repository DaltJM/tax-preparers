# WCAG 2.2 Level AA pass: TaxPreparers concept

Checked 1 October 2026 on the local build (`/`, `/taxation/`, `/contacts/`) in Chromium via Playwright, with axe-core 4.13.0 (WCAG 2.0, 2.1 and 2.2 A and AA rules plus best practices) at 1280 px and 320 px, with every "Common questions" item open and every review expanded.

**Result: no failures found. This is not a conformance claim.** Automated tools cover only part of WCAG, and the items under "Not yet tested" below still need a person with a screen reader and real devices.

Status key: **Pass** (checked and met), **N/A** (the page has nothing the criterion applies to), **Untested** (needs a check not done here).

## Perceivable

| Criterion | Status | Evidence |
|---|---|---|
| 1.1.1 Non-text content | Pass | Logo "TaxPreparers home"; registration symbol and placeholder have descriptive alt text; icons and stars are `aria-hidden` with text beside them ("Rated 5 out of 5") |
| 1.2.1 to 1.2.5 Time-based media | N/A | No audio or video |
| 1.3.1 Info and relationships | Pass | Landmarks (header, nav, main, footer), one `h1` per page, ordered headings, lists, `address`, `blockquote`; axe 0 violations |
| 1.3.2 Meaningful sequence | Pass | DOM order matches visual order at every width |
| 1.3.3 Sensory characteristics | Pass | No instruction relies on shape, colour or position |
| 1.3.4 Orientation | Pass | No orientation lock |
| 1.3.5 Identify input purpose | N/A | No form fields in the concept |
| 1.4.1 Use of colour | Pass | Links in text are underlined; current page in the menu has an underline bar and `aria-current` |
| 1.4.2 Audio control | N/A | No audio |
| 1.4.3 Contrast (minimum) | Pass | Lowest text pair 4.9:1 (hero list heading on navy); body text 7.9:1 or better; call button 8.0:1 |
| 1.4.4 Resize text | Pass | Layout reflows at 200% zoom (equivalent to 640 px width); text in rem |
| 1.4.5 Images of text | Pass | The logo is the only image of text (logotype exception). The registration symbol is a third-party mark; its number is also set as real text |
| 1.4.10 Reflow | Pass | No horizontal scroll at 320 px on any page. The review carousel scrolls sideways by design and is a static list under reduced motion |
| 1.4.11 Non-text contrast | Pass | Button borders 4.9:1 and 7.9:1; focus outline 9.8:1 on light, amber 5.4:1 on navy; carousel dots 7.9:1 and 9.8:1; chevrons 9.8:1. Stars are decorative (rating is given in text) |
| 1.4.12 Text spacing | Pass | With WCAG's spacing overrides at 320 px: no overflow or clipped text; clamped reviews can be opened with "See more" |
| 1.4.13 Content on hover or focus | N/A | No hover or focus popups |

## Operable

| Criterion | Status | Evidence |
|---|---|---|
| 2.1.1 Keyboard | Pass | Every link, button, question and review control reached and operated by keyboard; Enter opens a question; the review list is focusable and scrolls with arrow keys |
| 2.1.2 No keyboard trap | Pass | Tabbed through the whole home page |
| 2.1.4 Character key shortcuts | N/A | None |
| 2.2.1, 2.2.2 Timing; pause, stop, hide | Pass | No time limits. One 1.1 s stroke animation on load; no autoplay carousel |
| 2.3.1 Three flashes | Pass | Nothing flashes |
| 2.4.1 Bypass blocks | Pass | "Skip to main content" is the first Tab stop and is visible on focus |
| 2.4.2 Page titled | Pass | Unique, descriptive titles |
| 2.4.3 Focus order | Pass | Follows visual order |
| 2.4.4 Link purpose (in context) | Pass | Link text names its destination ("Directions to Mill Park", "29 Google reviews", "See more of N H.'s review") |
| 2.4.5 Multiple ways | Pass with note | Three pages, all in the main menu and footer on every page. The full site should add a sitemap page or search if it grows |
| 2.4.6 Headings and labels | Pass | Headings describe their sections |
| 2.4.7 Focus visible | Pass | 3 px outline on every focusable element, checked by Tab |
| 2.4.11 Focus not obscured (minimum) | Pass | Focused each of 30 controls below the sticky header: none hidden behind it (`scroll-padding-top` set) |
| 2.5.1, 2.5.2, 2.5.4 Pointer gestures, cancellation, motion | Pass | Carousel has button alternatives to swiping; actions fire on click; no motion input |
| 2.5.3 Label in name | Pass | Visible text is part of each accessible name |
| 2.5.7 Dragging movements | Pass | Previous and Next buttons replace dragging the carousel |
| 2.5.8 Target size (minimum) | Pass | No link, button or question under 24 x 24 px at any of eight widths |

## Understandable

| Criterion | Status | Evidence |
|---|---|---|
| 3.1.1 Language of page | Pass | `lang="en-AU"` |
| 3.1.2 Language of parts | N/A | English throughout |
| 3.2.1, 3.2.2 On focus, on input | Pass | Nothing changes context on focus |
| 3.2.3 Consistent navigation | Pass | Same header and footer on every page |
| 3.2.4 Consistent identification | Pass | Same labels and icons for the same actions |
| 3.2.6 Consistent help | Pass | The call button is in the same place on every page |
| 3.3.1 to 3.3.4, 3.3.7, 3.3.8 Forms and authentication | N/A | No form or login in the concept. **The enquiry form in the full version must be checked against these** |

## Robust

| Criterion | Status | Evidence |
|---|---|---|
| 4.1.2 Name, role, value | Pass | Native `details`/`summary`, buttons with `aria-expanded` and `aria-controls`, labelled navigation and review group; axe 0 violations |
| 4.1.3 Status messages | Pass | The review position is announced through a polite live region |

## Not yet tested

- A real screen reader (NVDA, JAWS, VoiceOver, TalkBack).
- A real phone and tablet, including touch on the carousel.
- Browsers other than Chromium.
- A browser with reduced motion switched on (the styles were read, not exercised).
- Windows high-contrast (forced colours) mode.
- The enquiry form, which does not exist yet.
