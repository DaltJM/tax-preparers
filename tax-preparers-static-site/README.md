# TaxPreparers: concept site

A prospect concept for TaxPreparers (Mill Park and Doreen), built 1 October 2026 under the `prospect-site-concept` and `consultancy-static-websites` skills. It is a preview for the owner, not a launched site: every page is `noindex` and `robots.txt` disallows all crawling. Nothing here has been seen or approved by the business.

Facts come from `VERIFICATION.md`. Product context is in `PRODUCT.md`, visual decisions in `DESIGN.md`, and the existing site's search baseline in `docs/research/audit/SEO-BASELINE.md`.

## What is in this folder

This folder is self-contained and is its own repository. Nothing in it points outside the folder.

- The site: `index.html`, `taxation/`, `contacts/`, `styles.css`, `script.js`, `assets/`, `robots.txt`, `llms.txt`.
- `docs/research/`: the audit of the live site, the SEO baseline, the Google reviews, the live site's page wording, and screenshots. **Internal: keep `docs/` out of any deployment and review it before handing the repository to the client** (the audit contains notes not written for the owner).
- `PRODUCT.md`, `DESIGN.md`, `VERIFICATION.md`, and `.impeccable/` (design brief and review notes).

Two things are kept outside this repository and are not needed to run or build the site: the original logo and images taken from the live site (in the client folder's `tax-preparers-source-assets/`), and the client brief (in `briefs/tax-preparers/` at the top of the working directory).

## Run it

Plain static files, no build step. Serve the folder from its root, for example:

```
python -m http.server 8137 --bind 127.0.0.1
```

Links and assets use relative paths, so the site works at a domain root or under a subpath such as GitHub Pages' `/tax-preparers/`. Open it through a server, not as a file, so folder links like `taxation/` resolve to their `index.html`.

## Preview on GitHub Pages

`.github/workflows/pages.yml` (at the repository root) publishes the concept to GitHub Pages on every push to the `github-pages` branch, or when run by hand from the Actions tab. It publishes the site files only: `docs/`, the `*.md` notes and `.impeccable/` are left out. The preview stays `noindex`. One-time setup in the repository settings: Pages → Source: "GitHub Actions"; and Environments → `github-pages` → allow the `github-pages` branch to deploy.

Note that a Pages site on a public repository is public, and a Pages site on a free private repository is not available. Anyone with the link can see the concept before the owner has.

## Pages and their live addresses

Each concept page sits at the address of the live page it replaces.

| Concept page | Path | Live title carried over |
|---|---|---|
| Home | `/` | "We Prepare \| You Save - TaxPreparers" |
| Tax returns | `/taxation/` | "Taxation - TaxPreparers" |
| Contact | `/contacts/` | "Contacts - TaxPreparers" |

Live pages the concept does not yet cover (they must exist, at these addresses, in the full version): `/about-us/`, `/services/`, `/book-keeping/`, `/asic/`, `/business-consulting-due-diligence/`.

## Built for AI search

People increasingly ask AI tools (ChatGPT, Google's AI answers, Perplexity) to recommend a local business, and those tools can only repeat what they can read. The concept therefore:

- states the facts in plain HTML text that needs no JavaScript: who TaxPreparers is, what it does, where, and how to make contact;
- has a "Common questions" section on the home page, with answers drawn only from verified facts;
- carries structured data for both offices (`AccountingService`, with services, address, phone, email, and the Facebook page) and for the questions (`FAQPage`);
- includes `llms.txt`, a short plain-text summary for AI tools. This is an emerging convention, not a standard every tool reads.

At launch, with the owner's agreement, `robots.txt` should admit AI crawlers (for example GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended) as well as search engines. While this is a preview, `robots.txt` disallows everything. No one can promise that an AI tool will name the business.

## Live site and concept, measured the same way

Lighthouse 12.8.2, 1 October 2026, home page. The live site was tested at http://www.taxpreparers.com.au/; the concept on the local preview server, which has no network distance, so its real figures once hosted will be slightly higher.

| | Live, mobile | Concept, mobile | Live, desktop | Concept, desktop |
|---|---|---|---|---|
| Performance score | 51 | 100 | 58 | 100 |
| Accessibility score | 84 | 100 | 84 | 100 |
| Best practices score | 72 | 100 | 68 | 100 |
| First content appears | 6.3 s | 0.9 s | 2.5 s | 0.2 s |
| Main content appears (LCP) | 22.8 s | 1.8 s | 5.7 s | 0.4 s |
| Download size | 3,802 KB | 152 KB | 3,778 KB | 152 KB |
| Files requested | 136 | 10 | 108 | 10 |

The "appears" rows above are Lighthouse's default *simulated* estimates for a slow 4G phone (three runs gave 22.6 to 23.2 s for the live site). They are calculated, not timed, and overstate what a visitor sees. Timed with the connection really slowed to the same slow 4G speed (`--throttling-method=devtools`, 1.6 Mbps, 150 ms delay, 4x slower processor):

| Timed on slow 4G, mobile | Live | Concept |
|---|---|---|
| First content appears | 4.4 s | 2.0 s |
| Main content appears (LCP) | 15.4 s | 2.1 s |
| Page finishes loading | 23.3 s | 2.3 s |

With no slowing at all, on this office connection, the live site showed first content at about 4 s and its main image at 5 to 14 s across three runs. The brief quotes the timed slow-4G figures.

The live site's SEO score was 85; the concept's is 69 only because of the preview `noindex`.

## Concept copy (for the owner to approve)

Wording that does not come from the business's own site:

- Navigation labels "Tax returns" and "Contact" (the live site says "Services" and "Contacts").
- Page titles' added endings: "tax agents in Mill Park and Doreen", "Individual, company, trust and SMSF tax returns", "Mill Park and Doreen offices"; and all three meta descriptions' closing sentences.
- Home: "Registered tax agent 25492655" (the number is read from the badge image on the live About page); "See our tax return services"; "For individuals and families"; "For your business"; "About our tax returns"; "Talk to us about your business"; "Company, Trust and Partnership Tax Returns" (combined from three list items); "Google reviews" and "Rated 5.0 from 29 reviews on Google. Five recent reviews are below."; "Longer reviews are cut short here. Read every review in full on Google."; "Two offices in Melbourne's north"; "Common questions" and its five questions and answers (the answers restate verified facts: registration and agent number, return types, business services, both addresses, the "from $120" price, phone and email); "Mill Park office" / "Doreen office" headings match the live footer.
- Tax returns: "Registered to look after your tax"; "We also specialize in" (the live About page says "We specialize in the following matters"); "How your tax return gets done" and its three steps ("Call or email us", "We prepare", "You save") with their sentences. The steps describe a process the business has not confirmed.
- Contact: "Talk to a tax agent"; "Our offices"; "Send us a message".
- Buttons and links: "Call 0469 348 170", "Send an enquiry" (goes to the enquiry form space on the Contact page), "See more" / "See less" on reviews, "Directions to Mill Park", "Directions to Doreen".
- Footer: "Concept preview. Not the live TaxPreparers website." and "Icon licence".
- The amber accent colour and the "TP" favicon are concept choices, not the business's.

## Changed copy

The business's wording, altered:

| Original | In the concept | Why |
|---|---|---|
| "We Prepare \| You Save" | "We Prepare" / "You Save" on two lines | Headline layout |
| "A TAXPAYER WHO IS TAX PREPARED HAS ALREADY WON HALF THE BATTLE IN TAXES BEFORE IT EVEN BEGAN." | Same words in sentence case | Readability |
| "TaxPreparers is registered with the Tax Practitioners board to provide Taxation Services to individuals and businesses." | "TaxPreparers is registered with the Tax Practitioners board." (proof strip only; full sentence kept on `/taxation/`) | Length |
| "We are ASIC registered agents who act as an intermediary between Australian companies and ASIC to help the company meet their lodgement obligations more efficiently." | "We act as an intermediary between Australian companies and ASIC." (proof strip) | Length |
| Logo PNG with a dark drop shadow | Traced SVG in flat navy, no shadow | Sharp at any size; the PNG was 300 px wide and cropped tight at the top |
| "Goods and Services Tax (Business Activity Statements )" | "Goods and Services Tax (Business Activity Statements)" | Stray space removed |

Kept word for word, including the business's own phrasing: "customer service orientated", "We Provide Tax Compliant BAS services and ensure timely Completion", "We are ASIC registered agents we act as an intermediary between Australian companies & ASIC", "Our Tax Wizards at your Service", "Tax Saving Wizards".

## Price shown

"Tax Return from $120" is shown as the line under the headline on the home page and on `/taxation/`, in the "Common questions" answer ("Tax returns are from $120. Call 0469 348 170 for a price for your situation."), and in `llms.txt`. The wording and figure come from the live site's home page banner (an image uploaded in March 2026). **The owner must confirm it is still current before launch.** The question, and the second sentence of its answer, are concept copy.

## Left out on purpose

- The "19/ Week" book-keeping price from the live slider: not confirmed as current.
- Opening hours: not published anywhere I could verify.
- The tax agent's name: it appears only in reviews (inside the quoted review text here) and needs the owner's approval before being stated by the site.
- ABNs: the live site shows a different ABN for each office.
- MYOB, Sage and Xero logos from the live contact page: third-party marks, and what they signify is unconfirmed.
- The stock photo from the live site's slider.

## Placeholders

- Home, "Our Tax Wizards at your Service": placeholder image and a dashed note where the tax agent's introduction and photo will go.
- Contact, "Send us a message": dashed note where the enquiry form will go.

## Google reviews

Five reviews copied word for word from the Google listing on 1 October 2026 (5.0 from 29; every review is five stars). Names are shown as first name and last initial. Source and alternates: `docs/research/audit/google-reviews.md`. The "29 Google reviews" link goes to a Google search for the listing's reviews because the listing's direct review link was not captured. No review structured data is used. The owner should confirm the selection.

## Third-party assets

Everything is served from this folder; nothing loads from another host.

| Asset | Source | Version | Licence |
|---|---|---|---|
| IBM Plex Sans (400, 600, 700 italic; latin woff2) | `@fontsource/ibm-plex-sans` | 5.3.0 | SIL Open Font License 1.1, `assets/fonts/LICENSE-ibm-plex-sans.txt` |
| Icons (phone, mail, map-pin, arrow-right, nav-arrow-left, nav-arrow-right, nav-arrow-down, check, star) | Iconoir | 7.12.1 | MIT, `assets/icons/LICENSE-iconoir.txt` (linked from the footer) |
| `assets/images/taxpreparers-logo.svg` | Traced with potrace from the business's 300x79 PNG logo (`/wp-content/uploads/2016/12/logo.png`), navy shapes only, with padding added around it | n/a | Owned by the business. **A trace, not their original artwork**: the drop shadow is left out and edges are approximate. The owner should supply the original file or approve this one. The `.png` original is kept for the structured data |
| `assets/images/tpb-registered-tax-agent.webp` | The business's live site (`/wp-content/uploads/2016/09/taxagent.jpg`), resized to 520x266 WebP. On the home page CSS shows only the round symbol and the agent number is set as text beside it | n/a | Tax Practitioners Board registered tax agent symbol, as displayed by the business; use is subject to TPB's rules and the registration being current |
| `assets/images/placeholder.svg` | `prospect-site-concept` skill | n/a | Consultancy's own |
| `assets/images/favicon.svg` | Made for this concept | n/a | Concept mark, to be replaced |

Icons are inlined in each page as an SVG sprite; `assets/icons/` keeps the unmodified source files.

## Not in the concept

Working enquiry form, analytics, hosting, redirects, sitemap, the five remaining pages, and the owner's approval of all concept copy and placeholders. Analytics and Search Console are out of scope until the owner approves the brief.

## Quality record

Recorded 1 October 2026 against the local build served by `python -m http.server` (no compression, no cache headers) at http://127.0.0.1:8137/. One automated run each; treat the results as evidence, not proof of WCAG conformance.

### Tools

| Tool | Version | Context |
|---|---|---|
| Lighthouse | 12.8.2 (headless Chrome, `npx lighthouse@12`) | Mobile (default throttling) and `--preset=desktop`, all three pages |
| axe-core | 4.13.0 | All rules, each page at 1280 px and 320 px |
| Playwright (Chromium) | MCP server | Screenshots, width sweep, keyboard and text-spacing checks |
| Impeccable detector | 4.4.0 | `impeccable detect` on the three pages and `styles.css` |

### Lighthouse

| Page | Mode | Performance | Accessibility | Best practices | SEO | LCP | TBT | CLS | Weight |
|---|---|---|---|---|---|---|---|---|---|
| `/` | Mobile | 99 | 100 | 100 | 69 | 1.9 s | 0 ms | 0 | 159 KB |
| `/` | Desktop | 100 | 100 | 100 | 69 | 0.4 s | 0 ms | 0 | 159 KB |
| `/taxation/` | Mobile | 100 | 100 | 100 | 69 | 1.7 s | 0 ms | 0 | 141 KB |
| `/taxation/` | Desktop | 100 | 100 | 100 | 69 | 0.4 s | 0 ms | 0 | 141 KB |
| `/contacts/` | Mobile | 100 | 100 | 100 | 69 | 1.7 s | 0 ms | 0 | 127 KB |
| `/contacts/` | Desktop | 100 | 100 | 100 | 69 | 0.4 s | 0 ms | 0 | 127 KB |

These are the final runs, taken after the last round of changes (price line, enquiry button, collapsed questions, new review carousel, traced logo). LCP here is Lighthouse's simulated figure; see "Live site and concept, measured the same way" for timed figures.

**Known exception:** SEO is 69 on every run because of one audit, `is-crawlable`. That is the deliberate preview `noindex`. Remove the `noindex` meta tag and the `robots.txt` Disallow at launch and re-run. No other SEO, accessibility or best-practice audit failed.

Lighthouse's remaining performance suggestions (text compression, cache lifetimes, minified CSS) are hosting matters for the full version.

### Accessibility checks

The criterion-by-criterion record is in `docs/WCAG-2.2-AA.md`; it was redone after the last round of changes. The notes below are the supporting checks.

- axe-core: 0 violations and 0 "incomplete" items on all three pages at 1280 px and 320 px.
- Contrast: lowest text pair is 4.9:1 (hero list heading on navy); the call button is 8.0:1.
- Width sweep at 320, 375, 414, 768, 1024, 1280, 1440 and 1920 px on all three pages (24 checks): no horizontal scroll, no link or button under 24x24 px. Done by measuring each width in a frame; full-page screenshots were viewed at 375 and 1440 px only.
- 200% zoom: equivalent to the 640 to 720 px layouts in the sweep; no loss of content.
- Text spacing (line height 1.5, letter spacing 0.12em, word spacing 0.16em, paragraph spacing 2em) at 320 px: no horizontal scroll on the home and contact pages after the fix below; the tax returns page passed before it. The review cards stay clamped to six lines by design; the full text is in the HTML and one link away on Google.
- Keyboard: first Tab lands on a visible "Skip to main content" link with a 3 px focus outline; tab order follows the visual order (27 stops on the home page). The review "Next" button scrolls one card, enables "Previous", and announces "Showing review 2 of 5".
- Reduced motion: the hero stroke animation and transitions are removed and the reviews become a static list (checked in CSS, not in a browser with the setting on).

### Fixes made during review

- Review cards: visually hidden rating text was widening the page on desktop; contained it.
- Proof strip: realigned, equal media sizes, agent number set as text.
- Hero list: four identical links replaced by plain rows and one clear link.
- Contact page: heading no longer repeats the sentence beneath it; the long email button wraps on phones (it overflowed at 320 and 375 px).
- Stars brightened; the badge no longer sits in a white box.
- Badge converted to WebP (63 KB to 12 KB).
- `/taxation/` mobile layout shift of 0.167 traced to the semibold font arriving late; that weight is now preloaded and the shift is 0.
- Office email links wrap under increased text spacing.
- One navigation label per breakpoint, both named "Main".
- Logo replaced by a traced SVG (see "Third-party assets" and "Changed copy").
- "Email us" replaced by "Send an enquiry", which goes to the enquiry form space on the Contact page.
- "Common questions" are collapsed until tapped (native `details`).
- Review carousel follows the Northern Foot Clinic pattern: no visible scrollbar, position dots, and "See more" on reviews that are cut short.
- Section headings and their side text now share the two-column grid of the content below; both offices are the same height.
- Ghost button border raised to 4.9:1 on navy.

### Detector findings left as they are

32 "cramped padding" reports are full-width colour bands and ruled list rows, which do have padding; 2 "tight leading" reports are the display headline at 0.95 line height, which is intended.

### Still unchecked

- A real screen reader (NVDA, VoiceOver) and a real phone.
- A browser with `prefers-reduced-motion` switched on.
- Browsers other than Chromium.
- Field Core Web Vitals (none exist for a local preview) and behaviour behind real hosting with compression and caching.
- The Tax Practitioners Board register entry for agent number 25492655.
- Impeccable's separate finish-reviewer and documenter agents were not run; the review and `DESIGN.md` were done in this session.
