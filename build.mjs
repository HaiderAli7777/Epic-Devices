/* Builds src/ into a deployable site at the repository root.
   Hostinger serves the repo as-is, so index.html and assets/ must be committed. */
import { build } from "esbuild";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

mkdirSync("assets", { recursive: true });

const out = await build({
  entryPoints: ["src/entry.jsx"],
  bundle: true,
  minify: true,
  format: "iife",
  target: "es2019",
  jsx: "automatic",
  loader: { ".jsx": "jsx" },
  define: { "process.env.NODE_ENV": '"production"' },
  outfile: "assets/app.js",
  metafile: true,
});

const head = readFileSync("src/shell.head.html", "utf8");
const html = head +
  '<script src="./assets/app.js" defer></script>\n</body>\n</html>\n';
writeFileSync("index.html", html);

const bytes = Object.values(out.metafile.outputs)[0].bytes;
console.log("built assets/app.js  " + (bytes / 1024).toFixed(0) + " KB");
console.log("wrote index.html");
