/* Build a ready-to-upload static website. No build step is needed on the host. */
import { build } from "esbuild";
import { readFileSync, writeFileSync, mkdirSync, readdirSync, unlinkSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

process.chdir(dirname(fileURLToPath(import.meta.url)));
mkdirSync("assets", { recursive: true });

const out = await build({
  entryPoints: ["src/entry.jsx"],
  bundle: true,
  minify: true,
  format: "iife",
  target: "es2019",
  jsx: "automatic",
  loader: { ".jsx": "jsx", ".css": "text" },
  define: { "process.env.NODE_ENV": '"production"' },
  outdir: "assets",
  entryNames: "app-[hash]",
  metafile: true,
  legalComments: "eof",
});

const bundle = Object.keys(out.metafile.outputs).find(name => name.endsWith(".js"));
if (!bundle) throw new Error("Build did not produce a JavaScript bundle.");
const head = readFileSync("src/shell.head.html", "utf8");
const html = head +
  `<script src="./${bundle}" defer></script>\n</body>\n</html>\n`;
writeFileSync("index.html", html);

// Remove only previous generated entry bundles, never uploaded media.
for (const file of readdirSync("assets")) {
  if (/^app(?:-[A-Z0-9]+)?\.js$/.test(file) && `assets/${file}` !== bundle) unlinkSync(`assets/${file}`);
}
console.log(`Built ${bundle} (${Math.round(out.metafile.outputs[bundle].bytes / 1024)} KB)`);
console.log("Ready to upload: index.html, assets/, .htaccess and robots.txt");
