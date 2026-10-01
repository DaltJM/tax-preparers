# SEO baseline: taxpreparers.com.au

Recorded 1 October 2026, before any design work, so a replacement can keep what the site already has in search. See "Replacing an existing site" in `consultancy-static-websites`.

## Integrations found in the page source

| Integration | Found | Still collecting? |
|---|---|---|
| Google Analytics (GA4 `G-`, Universal `UA-`) | None | n/a |
| Google Tag Manager, Ads tag, Meta pixel, other trackers | None | n/a |
| Search Console verification meta tag | None in the source (may be verified by DNS or file) | Unknown |
| SEO plugin | Yoast SEO v4.3 (2017-era) | Generates titles, canonicals and basic schema |

The site has no visible analytics, so there is no visitor history to pull. **At full build, ask the owner** whether Search Console or any analytics exists, and for read access.

## What Google has indexed (`site:` search)

Eight pages, matching the crawl: home, about-us, services, taxation, book-keeping, asic, business-consulting-due-diligence, contacts. Google holds a mix of `http://` and `https://` versions of them.

## Host and protocol

- `http://taxpreparers.com.au/` 301-redirects to `http://www.taxpreparers.com.au/`.
- `https://www.taxpreparers.com.au/` answers 200 with a valid certificate, but nothing redirects HTTP to HTTPS, and every canonical points at `http://`.
- Google listing website link: `http://www.taxpreparers.com.au/`.
- No XML sitemap (`/sitemap.xml` and `/sitemap_index.xml` are 404).

## Structured data

`WebSite` with SearchAction and `Organization` (name, logo). No `LocalBusiness` or `AccountingService`.

## Keep in a replacement

- All eight URL paths exactly as they are (`/about-us/`, `/services/`, `/taxation/`, `/book-keeping/`, `/asic/`, `/business-consulting-due-diligence/`, `/contacts/`), with trailing slashes.
- The phrases the pages are built around: "We Prepare | You Save", tax advice for businesses and individuals, the service names.
- Improve: one canonical `https://www` host with HTTP redirected to it, a sitemap, full-length descriptions (the homepage one is cut short), `AccountingService` structured data matching the Google listing, an H1 on the homepage.

## Pages (crawled 2026-10-01)

Sitemap found: none. 8 URLs from the sitemap and homepage links.

| URL | Status | Title | Meta description | H1 | Canonical | Robots meta |
|---|---|---|---|---|---|---|
| / | 200 | We Prepare \| You Save - TaxPreparers | We work with businesses and individuals to provide them tax advice |  | self | noodp, index, follow |
| /about-us/ | 200 | Tax Advice \| Businesses \| Individual - Taxpreparers | Our aim to provide a top class tax service which encompasses faster tax refunds and value added tax advice | About Us | self | noodp, index, follow |
| /services/ | 200 | Services - TaxPreparers | OUR UMBERLLA OF SERVICES | Services | self | noodp, index, follow |
| /taxation/ | 200 | Taxation - TaxPreparers |  | Taxation | self | noodp, index, follow |
| /book-keeping/ | 200 | Book Keeping - TaxPreparers |  | Book Keeping | self | noodp, index, follow |
| /asic/ | 200 | ASIC - TaxPreparers |  | ASIC | self | noodp, index, follow |
| /business-consulting-due-diligence/ | 200 | Business Consulting &amp; Due Diligence - TaxPreparers |  | Business Consulting &#038; Due Diligence | self | noodp, index, follow |
| /contacts/ | 200 | Contacts - TaxPreparers |  | Contacts | self | noodp, index, follow |

## robots.txt (200)

```
User-agent: *
Disallow: /wp-admin/
Allow: /wp-admin/admin-ajax.php
```
