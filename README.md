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

## Upload to GitHub, then deploy on Hostinger

Your repository is already connected to hPanel's Git integration, so each deploy copies the repository into `public_html`.

**Option A: GitHub Desktop or the git command line (recommended, it removes old files)**

1. Unzip `epic-devices-v5.zip`. Inside is a folder whose top level contains `index.html`.
2. Open your local copy of the repository. Delete everything in it **except the hidden `.git` folder**.
3. Copy all files from the unzipped folder into the repository folder, including the hidden `.htaccess` and `.gitignore`.
4. Commit with a message such as `EPIC DEVICES 5.0` and push to the `main` branch.

**Option B: the GitHub website**

1. In the repository on github.com, delete the old files that 5.0 no longer uses: `assets/app-*.js` and `assets/console-*.js` from 4.0, `assets/epic-hero.webp`, `assets/slide-*-v3-*.webp`, and the `inter` and `sora` files in `assets/fonts`.
2. Choose **Add file, Upload files**, and drag in the **contents** of the unzipped folder, not the folder itself, so `index.html` stays at the repository root.
3. On a Mac, press **Cmd + Shift + .** in Finder first so the hidden `.htaccess` file is visible and gets uploaded.
4. Commit the changes to `main`.

**Deploy on Hostinger**

1. hPanel, **Websites, Manage, Advanced, Git**.
2. Next to the connected repository, click **Deploy**. With auto deployment switched on, the push already did this.
3. Open https://epicdevicesltd.com and press **Ctrl + F5** once to skip your browser's cache.

Quick checks after deploying: the new logo and favicon appear, the slider moves and pauses when you hover over it, the WhatsApp button opens a chat with +92 305 7777817, and `https://epicdevicesltd.com/src/` shows "Forbidden".

## Editing the site

The built site is `index.html`, `console.html` and `assets/`. After editing anything in `src/`, rebuild:

```bash
npm ci          # first time only, needs Node.js 20 or newer
npm run build   # rebuilds index.html, console.html and the bundles
npm test        # 10 checks for prices, search, bag, compare and routes
```

Commit the rebuilt files together with your edits. `node_modules` is ignored by `.gitignore` and must not be uploaded.

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
index.html, console.html     built pages (do not edit by hand)
assets/app-*.js              storefront bundle, about 275 KB
assets/console-*.js          console bundle, loads only on console.html
assets/brand/                logo files, favicon, app icons, og-image.jpg
assets/slides/               single-tone product cutouts for the slider
assets/fonts/                Saira and Plus Jakarta Sans with their OFL licences
src/                         source code (blocked from the web by .htaccess)
tests/, scripts/, reports/   checks, catalogue tools and the price audit
.htaccess                    HTTPS, security headers, caching, source protection
robots.txt, sitemap.xml, site.webmanifest, favicon.ico
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
