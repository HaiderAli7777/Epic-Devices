# EPIC DEVICES

Storefront and business console. A single React application, built to one
JavaScript bundle and served as static files.

Author: Haider Ali

---

## What Hostinger needs

Hostinger's Git integration **clones the repository and serves it. It does not
run a build.** So the built output is committed to the repository, and
`index.html` sits at the root where Hostinger expects it.

That means: **run `npm run build` and commit the result before you push.**
If you push only `src/`, the site will not update.

```
index.html          the page Hostinger serves
assets/app.js       the built bundle
.htaccess           HTTPS, caching, security headers, SPA routing
robots.txt
src/                source, not served
build.mjs           the build
package.json
```

---

## First deployment

1. Create an empty GitHub repository and push these files.

   ```bash
   git init
   git add .
   git commit -m "EPIC DEVICES"
   git branch -M main
   git remote add origin git@github.com:YOUR-USER/YOUR-REPO.git
   git push -u origin main
   ```

2. In hPanel open **Websites → your site → Advanced → GIT**.

3. Fill in:

   - **Repository**: your repository URL
   - **Branch**: `main`
   - **Directory**: leave **empty**

   An empty directory means the repository root is deployed into
   `public_html`, which is where `index.html` needs to land. If you type a
   folder name here the site will appear at `yourdomain.com/that-folder/`
   instead of at the root.

4. If the repository is private, copy the SSH key hPanel shows you and add it
   to GitHub under **Settings → Deploy keys**.

5. Press **Create**, then **Deploy**.

6. In hPanel turn on the free SSL certificate under **Security → SSL**. The
   `.htaccess` already forces HTTPS, so do this before sharing the address or
   the redirect will fail.

---

## Making a change

```bash
npm install          # once
# edit src/app.jsx
npm run build        # rewrites index.html and assets/app.js
git add -A && git commit -m "what changed" && git push
```

Then press **Deploy** in hPanel, or switch on auto-deployment: hPanel shows a
webhook URL, which you paste into GitHub under **Settings → Webhooks** with
content type `application/json`. After that every push deploys on its own.

---

## What the .htaccess does

- Redirects HTTP to HTTPS
- Sends every unknown path to `index.html`, so deep links work
- `Content-Security-Policy` limiting scripts to this origin. The bundle is a
  separate file precisely so that this can be strict rather than allowing
  inline scripts
- `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`,
  `Permissions-Policy` and HSTS
- Never caches `index.html`, caches `assets/` for a year
- Compresses text with gzip or brotli where the server supports it
- Blocks `src/`, `node_modules/`, dotfiles, `package.json` and `build.mjs`
  from being fetched over the web

If a page ever fails to load after a change, the first thing to check is the
browser console for a CSP violation.

---

## Before you take payments or hold real data

This is a front-end application. Everything it shows lives in the visitor's
browser for the length of their session: nothing is written to a server and
nothing survives a refresh.

Two consequences worth being blunt about:

- **The console sign-in is not security.** The check runs in the browser, so
  anyone can read the credentials in the bundle or step past it with developer
  tools. It keeps an honest visitor out of the admin screens. It stops nobody
  else.
- **No data persists.** Orders, invoices and ledger entries are lost on
  refresh. Nothing here is a record you can rely on.

For a real shop you need a backend: a database, server-side authentication and
authorisation, and payment handling that never touches the browser. This
repository is the interface, and a good one, but it is only the interface.

The demo dataset can be switched back on for a presentation by setting
`const DEMO = true` near the top of `src/app.jsx` and rebuilding.
