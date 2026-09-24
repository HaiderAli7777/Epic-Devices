/* Local static preview. Build once with npm run build before starting. */
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve, extname, sep } from "node:path";

const root = dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.EPIC_PREVIEW_PORT || 4173);
const mime = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css", ".svg": "image/svg+xml", ".webp": "image/webp", ".png": "image/png", ".jpg": "image/jpeg", ".woff2": "font/woff2", ".txt": "text/plain" };
createServer(async (req, res) => {
  try {
    const url = new URL(req.url || "/", "http://localhost");
    let pathname = decodeURIComponent(url.pathname);
    if (pathname === "/") pathname = "/index.html";
    const path = resolve(root, "." + pathname);
    if (!path.startsWith(root + sep) || /(^|\/)\.|^\/(src|node_modules|scripts|tests|reports)(\/|$)|\.(jsx|mjs|json|md)$/.test(pathname)) { res.writeHead(403); return res.end("Forbidden"); }
    const file = await stat(path).then(s => s.isFile() ? path : null).catch(() => null);
    if (!file) { res.writeHead(404, { "Content-Type": "text/plain" }); return res.end("Not found"); }
    res.writeHead(200, { "Content-Type": mime[extname(file)] || "application/octet-stream", "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" });
    res.end(await readFile(file));
  } catch { res.writeHead(400); res.end("Invalid request"); }
}).listen(port, "127.0.0.1", () => console.log(`EPIC DEVICES preview: http://127.0.0.1:${port}`));
