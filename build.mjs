/* Both pages are prebuilt. Hostinger does not need Node.js. */
import { build } from 'esbuild';
import { readFileSync, writeFileSync, mkdirSync, readdirSync, unlinkSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import { validateCatalog, writeAudit } from './scripts/validate-catalog.mjs';
process.chdir(dirname(fileURLToPath(import.meta.url)));
validateCatalog();
writeAudit();
mkdirSync('assets', { recursive: true });
const outputs = new Set();
for (const [name, entry, htmlFile] of [['app','src/entry.jsx','index.html'], ['console','src/console-entry.jsx','console.html']]) {
  const result = await build({ entryPoints:[entry], bundle:true, minify:true, format:'iife', target:'es2019', jsx:'automatic', loader:{'.jsx':'jsx','.css':'text'}, define:{'process.env.NODE_ENV':'"production"'}, outdir:'assets', entryNames:name+'-[hash]', metafile:true, legalComments:'eof' });
  const bundle = Object.keys(result.metafile.outputs).find(name => name.endsWith('.js'));
  if (!bundle) throw new Error('Missing bundle');
  outputs.add(bundle);
  let head = readFileSync('src/shell.head.html','utf8');
  if(name==='console') head = head.replace('</head>','<meta name="robots" content="noindex,nofollow" />\n</head>').replace(/<title>[^<]*<\/title>/,'<title>EPIC DEVICES Console</title>').replace(/<link rel="preload" as="image"[^>]*>\n?/,'').replace(/<link rel="canonical"[^>]*>\n?/,'').replace(/<script type="application\/ld\+json">.*?<\/script>\n?/,'');
  writeFileSync(htmlFile,head+`<script src="./${bundle}" defer></script>\n</body>\n</html>\n`);
  console.log(`Built ${htmlFile}: ${bundle} (${Math.round(result.metafile.outputs[bundle].bytes/1024)} KB)`);
}
for(const file of readdirSync('assets')) if(/^(app|console)(?:-[A-Z0-9]+)?\.js$/.test(file) && !outputs.has('assets/'+file)) unlinkSync('assets/'+file);
console.log('Ready: index.html, console.html, assets/, .htaccess, robots.txt');
