# Validation: EPIC DEVICES 5.0.1

Validation date: 24 September 2026.

## Automated

`npm run build` produced `assets/app-*.js` (about 275 KB) for the storefront and the separate console bundle. `npm test` passed **10 of 10 tests**: exact +10% pricing in paisa, catalogue scope and validation, natural-language search, filtering and sorting, bag data cleaning and totals, homepage to product to bag flow with no runtime errors, the four-product compare limit, shareable filter URLs and missing pages, search suggestions with the finder, and unsafe product URLs.

The interface tests run against the generated JavaScript in JSDOM, so they check behaviour, not appearance.

## Hostinger build

Hostinger's first 5.0 deployment failed with "No output directory found after build": its React preset publishes `dist`, while 5.0 wrote the pages to the repository root. 5.0.1 builds into `dist/`.

The deployment was reproduced from a clean copy of the repository with **Node.js 22.18.0**, the version in Hostinger's log: `npm install` finished with no engine warnings and no vulnerabilities, `npm run build` produced `dist/`, and the built storefront and console loaded in Chromium without errors. The test tool (jsdom) is pinned to 29.1.1 and the bundler (esbuild) to 0.28.2 so that every package supports Node 22.18; the esbuild upgrade also clears the moderate security advisory. The remaining npm notice about recharts 2 being an older release line is informational and does not affect the build.

## Visual review

Rendered in Chromium and reviewed at 1440 x 900 (desktop) and 390 x 844 (phone): home page with the slider on its first and second slides, shop page with filters, product page, bag drawer with the WhatsApp enquiry, promotions, brand list and footer; plus the console sign-in, dashboard and the locked brand theme in Settings. No console errors were logged during these runs.

## Not verified here

Live WhatsApp delivery of the prefilled message, behaviour on Hostinger's servers (headers and caching), and real product photographs, which are still to be added.
