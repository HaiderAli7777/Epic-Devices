# EPIC DEVICES storefront 5.0

Static storefront for **epicdevicesltd.com** plus the business console, ready to upload to GitHub and deploy on Hostinger. No server code and no Node.js are needed on the hosting plan: the built files are already in this folder.

## What changed in 5.0

- **New logo everywhere.** The supplied logo was traced into sharp vector files (`assets/brand/`). It is used in the header, footer, loading screen, console, invoices, favicon, home-screen icons and the link preview image.
- **One brand theme.** Every colour comes from the logo: the cobalt blue of the E and the graphite of the D, on a cool white page. The console no longer offers alternative themes; its settings page shows the locked brand theme instead.
- **New hero slider in a single tone.** All slides share one blue studio backdrop with the logo's E as a watermark. Only the product and the words change. The sparkle icon and the mixed-colour slide backgrounds are gone.
- **Slider behaviour.** Autoplay every 6.5 seconds with a progress bar, pause and play button, previous and next buttons, swipe on phones, arrow keys, and automatic pause on hover, on keyboard focus and in background tabs. People who ask their device for reduced motion get no autoplay.
- **WhatsApp ordering.** The bag sends the whole enquiry to WhatsApp (+92 305 7777817) with products, quantities, prices and references filled in. Each product page has an "Ask on WhatsApp" button. Email, copy and download remain as alternatives.
- **Real contact details.** hello@epicdevicesltd.com, +92 305 7777817 and epicdevicesltd.com across the storefront, console and invoices. The old, unverified shop address is no longer shown.
- **Fonts hosted with the site.** Saira (display) and Plus Jakarta Sans (text) load from `assets/fonts`. Nothing is loaded from Google, which is faster in Pakistan and simplifies the security policy.
- **Search engines and sharing.** Page title, description, canonical URL, Open Graph image, structured data for the store, `sitemap.xml` and an updated `robots.txt`.

## Deploy on Hostinger (GitHub, Node.js web app)

Hostinger builds the site on every push: it runs `npm install`, then `npm run build`, then publishes the **`dist`** folder. The build writes the complete website (pages, bundles, logo, slides, fonts, `.htaccess`, sitemap, icons) into `dist/`, so nothing else from the repository reaches visitors.

Use these build and output settings in hPanel (your web app, **Settings**, **Build and output settings**):

| Setting | Value |
| --- | --- |
| Framework preset | React |
| Branch | main |
| Root directory | `./` |
| Node version | 22.x |
| Build command | `npm run build` |
| Output directory | `dist` |
| Entry file | none, this is a static site |

**Update the repository**

1. Unzip the package. Inside is a folder whose top level contains `package.json`.
2. In your local copy of the repository, delete everything **except the hidden `.git` folder**, then copy in all files from the unzipped folder, including the hidden `.htaccess` and `.gitignore`. On a Mac, press **Cmd + Shift + .** in Finder to see hidden files.
3. Commit and push to `main`. This also removes the old prebuilt `index.html`, `console.html` and `assets/app-*.js` files, which are no longer kept in the repository.
4. Hostinger starts a new deployment by itself. If it does not, open the web app in hPanel and click **Redeploy**.
5. Open https://epicdevicesltd.com and press **Ctrl + F5** once.

Never commit `dist/` or `node_modules/`; `.gitignore` already excludes them and Hostinger creates both during the build.

If a deployment ever fails again, open **View analysis** in hPanel, or run `npm ci && npm run build` on your computer: the build stops with a clear message when a file the pages need is missing from `dist/`.

## Editing the site

You only commit source files; Hostinger rebuilds `dist/` on every push. To check a change on your computer first:

```bash
npm ci          # first time only, needs Node.js 20 or newer
npm run build   # writes the finished site to dist/
npm test        # 10 checks for prices, search, bag, compare and routes
npm run preview # serves dist/ at http://127.0.0.1:4173
```

Then commit and push the source change. Node.js 20.19 or newer, or 22.13 or newer, is required; Hostinger's 22.x works.

| To change | Edit |
| --- | --- |
| Phone, WhatsApp number, email, city | `src/store-config.json` (WhatsApp number in international format without +) |
| Hero slides, their words and links | `SLIDES` near the top of `src/retail.jsx`; images in `assets/slides/` |
| Colours, spacing, typography | tokens at the top of `src/retail.css` |
| Products and prices | `src/catalog/products.json`, then `npm run check:catalog` |
| Product photos | put files in `assets/products/` and list them in the product's `images` |
| Page title, description, preview image | `src/shell.head.html` |

Slide images are transparent WebP files at 1200 x 900 and 700 x 525 pixels with the product sitting near the bottom centre. Keeping that format keeps every slide in the same tone.

## Catalogue and pricing

49 products across Mouse (12), Keyboard (3), Headsets and microphones (13), RAM (10) and Hard drives (11), taken from indexed Czone listings on 23 September 2026. Every selling price is the Czone source price x 1.10, calculated in paisa. Product photographs are still to be added; until then each card shows a clean placeholder with the brand name and "Photo coming soon". The storefront works in enquiry mode: availability, delivery and warranty are confirmed with the customer before payment. See `CATALOGUE-STATUS.md` and `reports/catalog-price-audit.csv`.

## Business console

`console.html` (not indexed by search engines). Demo sign-in: `admin` / `epic123`. It uses the same logo, theme and fonts as the storefront. Records created there live only in that browser session. Leaving the console opens the live storefront.

## Files

```
src/                         source code: storefront, console, catalogue, page head
assets/brand/                logo files, favicon, app icons, og-image.jpg
assets/slides/               single-tone product cutouts for the slider
assets/fonts/                Saira and Plus Jakarta Sans with their OFL licences
.htaccess, robots.txt, sitemap.xml, site.webmanifest, favicon.ico
build.mjs                    builds everything into dist/ and checks nothing is missing
dist/                        created by the build, published by Hostinger (not committed)
tests/, scripts/, reports/   checks, catalogue tools and the price audit
```

## Completing the catalogue import

The full Czone catalogue and original photos still need an authorised export or browsing session. Keep source URLs and prices, store photos in `assets/products/`, then run:

```bash
npm run import:catalog -- /path/to/verified-products.json
npm run build
npm test
npm run check:release
```

`check:release` fails on purpose until every product has a live verification date and a local photo. `npm run check:catalog` checks structure and arithmetic only.

## Operating limits

- Enquiry mode: adding to the bag does not reserve stock or take payment. Sending on WhatsApp or email starts the conversation; the customer still presses send.
- Bag, saved items, comparison and recently viewed products live in the visitor's browser only.
- The console sign-in is a browser-side demonstration with session-only records. Do not use it for confidential or real operational data until it has server-side accounts and storage.
- Console stock and cost start at zero, meaning not entered yet.
- Delivery charges, returns and warranty are agreed with each customer before payment.
- Add the verified shop address to `src/store-config.json` only when you want it shown.

Author: Haider Ali.
