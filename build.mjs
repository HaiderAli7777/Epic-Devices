/* Builds the complete static website into dist/.
   Hostinger's React preset runs `npm run build` and publishes the "dist" folder,
   so everything a visitor needs is written there and nothing else is. */
import { build } from 'esbuild';
import { readFileSync, writeFileSync, mkdirSync, rmSync, cpSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import { validateCatalog, writeAudit } from './scripts/validate-catalog.mjs';

process.chdir(dirname(fileURLToPath(import.meta.url)));
const OUT = 'dist';

validateCatalog();
writeAudit();

rmSync(OUT, { recursive: true, force: true });
mkdirSync(`${OUT}/assets`, { recursive: true });

// Files published exactly as they are.
const STATIC = [
  '.htaccess', 'robots.txt', 'sitemap.xml', 'site.webmanifest', 'favicon.ico',
  'assets/brand', 'assets/slides', 'assets/fonts', 'assets/products', 'assets/epic-collections.webp',
];
for (const path of STATIC) if (existsSync(path)) cpSync(path, `${OUT}/${path}`, { recursive: true });

const pages = [];
for (const [name, entry, htmlFile] of [['app', 'src/entry.jsx', 'index.html'], ['console', 'src/console-entry.jsx', 'console.html']]) {
  const result = await build({
    entryPoints: [entry], bundle: true, minify: true, format: 'iife', target: 'es2019', jsx: 'automatic',
    loader: { '.jsx': 'jsx', '.css': 'text' }, define: { 'process.env.NODE_ENV': '"production"' },
    outdir: `${OUT}/assets`, entryNames: name + '-[hash]', metafile: true, legalComments: 'eof', logLevel: 'warning',
  });
  const output = Object.keys(result.metafile.outputs).find((file) => file.endsWith('.js'));
  if (!output) throw new Error(`esbuild produced no JavaScript for ${entry}`);
  const bundle = output.slice(OUT.length + 1); // assets/app-XXXX.js
  let head = readFileSync('src/shell.head.html', 'utf8');
  if (name === 'console') head = head
    .replace('</head>', '<meta name="robots" content="noindex,nofollow" />\n</head>')
    .replace(/<title>[^<]*<\/title>/, '<title>EPIC DEVICES Console</title>')
    .replace(/<link rel="preload" as="image"[^>]*>\n?/, '')
    .replace(/<link rel="canonical"[^>]*>\n?/, '')
    .replace(/<script type="application\/ld\+json">.*?<\/script>\n?/, '');
  writeFileSync(`${OUT}/${htmlFile}`, head + `<script src="./${bundle}" defer></script>\n</body>\n</html>\n`);
  pages.push({ htmlFile, bundle, storefront: name === 'app' });
  console.log(`Built ${OUT}/${htmlFile}: ${bundle} (${Math.round(result.metafile.outputs[output].bytes / 1024)} KB)`);
}

// Fail the build if a page or the storefront points at a file that is not in dist/.
const missing = new Set();
const assetRef = /\.\/(assets\/[A-Za-z0-9_\-./]+\.(?:js|svg|webp|png|jpe?g|woff2|ico))/g;
for (const page of pages) {
  const sources = [readFileSync(`${OUT}/${page.htmlFile}`, 'utf8')];
  if (page.storefront) sources.push(readFileSync(`${OUT}/${page.bundle}`, 'utf8'));
  for (const text of sources) for (const [, ref] of text.matchAll(assetRef)) if (!existsSync(`${OUT}/${ref}`)) missing.add(ref);
}
for (const file of ['index.html', 'console.html', '.htaccess']) if (!existsSync(`${OUT}/${file}`)) missing.add(file);
if (missing.size) throw new Error('Missing from dist/: ' + [...missing].join(', '));

console.log(`Ready: ${OUT}/ holds the finished website. Publish this folder (Hostinger output directory: ${OUT}).`);
