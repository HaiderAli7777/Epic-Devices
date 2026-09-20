/* Builds the app into index.html + assets/app.js at the repository root.
   Works whether the sources sit in src/ or flat beside this file, because a
   file-by-file download loses the folder structure and that is an easy way to
   end up with a layout that does not match the paths. */
import { build } from "esbuild";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";

const find = (name) => {
  for (const p of ["src/" + name, "./" + name, "source/" + name]) {
    if (existsSync(p)) return p;
  }
  return null;
};

const entry = find("entry.jsx");
const shell = find("shell.head.html");
const app = find("app.jsx");

const missing = [["entry.jsx", entry], ["shell.head.html", shell], ["app.jsx", app]]
  .filter(([, p]) => !p).map(([n]) => n);
if (missing.length) {
  console.error("\nBuild stopped: cannot find " + missing.join(", "));
  console.error("Looked in src/ and in the repository root.");
  console.error("These files must be committed, in either layout:\n");
  console.error("  src/entry.jsx  src/app.jsx  src/shell.head.html");
  console.error("  or entry.jsx   app.jsx      shell.head.html\n");
  process.exit(1);
}
console.log("sources: " + entry + ", " + app + ", " + shell);

mkdirSync("assets", { recursive: true });

const out = await build({
  entryPoints: [entry],
  bundle: true,
  minify: true,
  format: "iife",
  target: "es2019",
  jsx: "automatic",
  loader: { ".jsx": "jsx" },
  define: { "process.env.NODE_ENV": '"production"' },
  outfile: "assets/app.js",
  metafile: true,
  logLevel: "warning",
});

const head = readFileSync(shell, "utf8");
if (!head.includes('id="root"')) {
  console.error('Build stopped: shell.head.html has no <div id="root">.');
  process.exit(1);
}
writeFileSync("index.html", head + '<script src="./assets/app.js" defer></script>\n</body>\n</html>\n');

const bytes = Object.values(out.metafile.outputs).find((o) => o.entryPoint || true).bytes;
console.log("built assets/app.js  " + (bytes / 1024).toFixed(0) + " KB");
console.log("wrote index.html");
