# Validation: EPIC DEVICES 5.0

Validation date: 24 September 2026.

## Automated

`npm run build` produced `assets/app-*.js` (about 275 KB) for the storefront and the separate console bundle. `npm test` passed **10 of 10 tests**: exact +10% pricing in paisa, catalogue scope and validation, natural-language search, filtering and sorting, bag data cleaning and totals, homepage to product to bag flow with no runtime errors, the four-product compare limit, shareable filter URLs and missing pages, search suggestions with the finder, and unsafe product URLs.

The interface tests run against the generated JavaScript in JSDOM, so they check behaviour, not appearance.

## Visual review

Rendered in Chromium and reviewed at 1440 x 900 (desktop) and 390 x 844 (phone): home page with the slider on its first and second slides, shop page with filters, product page, bag drawer with the WhatsApp enquiry, promotions, brand list and footer; plus the console sign-in, dashboard and the locked brand theme in Settings. No console errors were logged during these runs.

## Not verified here

Live WhatsApp delivery of the prefilled message, behaviour on Hostinger's servers (headers and caching), and real product photographs, which are still to be added.
