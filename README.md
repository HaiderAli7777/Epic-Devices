# EPIC DEVICES — Website Upgrade 3.0

Prepared for Haider Ali. Deployment format: GitHub repository → Hostinger static website.

This package contains the finished website and editable React source. The build is already included. You do not need Node.js or an npm build on Hostinger.

## Deploy these files

1. Extract this ZIP on your computer.
2. Upload the **contents** to the root of your GitHub repository. Do not upload only the ZIP, and do not put the entire site inside an extra folder.
3. Preserve the `assets/` and `src/` folders. `index.html` must be at the repository root.
4. Connect the repository and the intended branch to your Hostinger website's Git deployment.
5. Deploy the repository contents to the website's document root, normally `public_html`. If the Git directory field represents a subfolder inside that root, leave it blank for a root-domain deployment.
6. Ensure SSL is enabled for the domain. The included Apache configuration redirects HTTP to HTTPS.
7. Open the website over HTTPS. The first slider panel should say “Your world. On repeat.”

The files needed to display the website are:

| Path | Purpose |
| --- | --- |
| `index.html` | Homepage, at the repository root |
| `assets/app-*.js` | Finished application bundle; the filename changes when code changes |
| `assets/epic-hero.webp` | Supporting audio collection artwork |
| `assets/epic-collections.webp` | Collection artwork |
| `assets/slide-*-v3-*.webp` | Responsive images for the three new slider scenes |
| `assets/fonts/` | Local house fonts and their licenses |
| `.htaccess` | Apache index, HTTPS, caching and response headers |
| `robots.txt` | Crawler settings |

Keep the generated assets in Git. They are deliberately **not** excluded by `.gitignore`.

## What changed

- Three individually art-directed slider scenes: audio, workspace and power, each with its own image, palette, copy and collection link.
- Crossfades, thumbnail navigation, previous/next controls, a live timer, keyboard arrows and horizontal touch gestures. Autoplay pauses on hover, while offscreen and when the browser tab is hidden. Manual selection or keyboard focus stops it until Play is chosen. Reduced-motion preferences disable autoplay and transitions.
- A three-step product finder that uses actual catalog prices, categories and availability, with budget and sorting preferences. Its result link transfers those choices to the catalog. Empty results offer a prefilled email enquiry.
- Product quick view with image selection, specifications, stock-aware quantity controls, wishlist, comparison and the shared shopping bag.
- A redesigned comparison dialog with a differences-only filter, price highlights, product removal and stock-aware add-to-bag controls.
- Keyboard search suggestions: Up/Down selects a result, Enter opens it, and Escape dismisses the list.
- Native modal focus containment and Escape dismissal for the finder, quick view and comparison.
- A new premium storefront with a cinematic hero, original imagery, clearer navigation and six collection cards.
- A wider product search with matching product suggestions and a keyboard shortcut.
- Updated product cards, catalog filters, comparison, shopping bag and checkout appearance.
- Mobile navigation, a collapsible filter panel, and a mobile menu for the business console.
- A refreshed console sidebar, header, revenue cards, panels, tables and forms.
- Keyboard focus handling for the cart and navigation, Escape dismissal, a skip link and reduced-motion support.
- Cart and product quantities are limited by stock. Collection-only orders no longer show free-shipping offers or accrue an internal courier cost.
- Newsletter controls now prepare a real email request in the visitor's email application; they no longer claim an unsent subscription succeeded.
- Checkout is explicitly a session preview. Selecting a card method does not mark a payment as received.
- The flattened upload has been restored to the directory structure expected by its build.
- Generated JavaScript filenames contain a content hash, preventing the old fixed `app.js` cache problem on future uploads.

The existing product, inventory, purchasing, sales, accounting, HR and other console screens remain in the application. Their accounting, tax and payroll rules were not re-audited or updated for current legislation by this visual upgrade.

## Edit and rebuild locally

Use Node.js 20 or later. From the extracted project directory:

```bash
npm ci
npm run build
npm run dev
```

Open the local address printed by the preview command. The default is `http://127.0.0.1:4173`.

After editing, run `npm run build` again. Commit the changed source, `index.html`, and the new `assets/app-*.js` to GitHub, then deploy that version from Hostinger. The build removes only old generated entry bundles from your local `assets/` directory.

| File | Edit here |
| --- | --- |
| `src/storefront.jsx` | Header, collections, restock request, footer and information panels |
| `src/experience.jsx` | Version 3 slider, finder, quick view and comparison |
| `src/experience.css` | Version 3 responsive visual styling |
| `src/slider-content.json` | Slider copy, images, category links, timing and autoplay default |
| `src/upgrade.css` | New storefront and console styling, including responsive rules |
| `src/app.jsx` | Existing business workflows, catalog, configuration and integration |
| `src/shell.head.html` | Page title, description, preloads and loading state |
| `build.mjs` | Production build |
| `dev.mjs` | Local preview server |

The house theme loads its fonts and images from this package. Alternate themes can request their fonts from Google Fonts.

## Edit the slider

Edit `src/slider-content.json`, run `npm run build`, then commit the changed source, generated `index.html` and new application bundle. The current package already includes the finished build.

- `autoplay` controls the initial setting; visitors can pause or play it.
- `durationMs` controls each slide's duration (minimum 5,000 milliseconds).
- Each slide has a unique `id`, a `theme` (`ice`, `sage` or `midnight`), `title`, `accent`, `description`, button `cta`, target `category`, and navigation `label`/`subtitle`.
- `image` and `smallImage` point to the full and small WebP assets. `alt` describes the illustration. Update image filenames when replacing artwork to avoid an old cached image.
- Keep each headline line short; the supplied content has been checked down to 320-pixel screens.
- Use category IDs already present in your catalog. The current slides link to `Headphones`, `grp_desk` and `grp_power`.

See `UPGRADE-GUIDE.md` for a compact guide to the new customer features.

## Current application limits

This remains a **front-end application**, as in the supplied source. Deploying it on GitHub and Hostinger publishes the interface; it does not create a database or payment service.

- Product changes, orders, invoices and business records live in browser memory and reset on reload. Nothing is shared between visitors.
- The console sign-in is a browser-side demonstration, not secure authentication. Do not enter confidential business or customer data. Its original demonstration credentials are `admin` / `epic123`.
- Checkout creates a session preview only. No order is sent, no confirmation email is sent and no payment is collected.
- Contact and restock links open the visitor's email or phone application. An email is sent only when the visitor sends it there.
- The catalog remains empty by default, matching the uploaded source. The homepage shows collections instead of invented stock or sales.
- The provided contact phone, email, domain, address, commercial policies and product information are inherited from the source. Confirm and replace them before publishing.

For real sales and business operations, connect server-side authentication, a database, validated product/stock/order APIs, an email service and an appropriate payment gateway. A static deployment alone is insufficient.

## Store identity and data

Search for `INITIAL_CONFIG` in `src/app.jsx` to edit the store name, contact information, delivery settings and other defaults, then rebuild. Settings changed through the current console are session-only.

`DEMO = false` is preserved. Setting it to `true` loads the source's example products **and** fictional business records. Use that only for a private demonstration, never as real trading data. Category and hero artwork is conceptual and must not be represented as a photograph of a specific product model for sale.

## Troubleshooting deployment

- **Old design:** confirm the updated `index.html` and its referenced hashed JavaScript file were deployed together. Hard-refresh once and clear any Hostinger cache if enabled.
- **Blank page:** confirm there is an `assets/` folder beside `index.html`. Uploading the original flattened filenames will not work.
- **404 or 403:** confirm `index.html` is in the domain's actual document root and the deployment did not add an extra top-level folder. The package includes `DirectoryIndex index.html`.
- **HTTPS problem:** confirm the domain has an active SSL certificate before using the HTTPS redirect.
- **Changes disappear after refresh:** this is the existing front-end storage limitation, not a GitHub or Hostinger deployment error.

See `VALIDATION.md` for the performed checks and `ASSET-NOTES.md` for artwork and font details.
