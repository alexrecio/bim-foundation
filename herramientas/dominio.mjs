// Dominio público de la web: genera _headers (canonical + hreflang por página), sitemap.xml y robots.txt.
//   node herramientas/dominio.mjs   → ejecutar tras añadir, quitar o traducir una página
// Las páginas internas (laboratorio, sistema, plantilla) quedan fuera. El noindex de cada página no se toca aquí.
import { readdirSync, existsSync, statSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const DOMINIO = 'https://bimkernel.com';
const IDIOMAS = ['en', 'de']; // ES es la raíz
const FUERA = new Set(['assets', 'herramientas', 'laboratorio', 'sistema', '_plantilla', 'functions', ...IDIOMAS]);
const raiz = join(dirname(fileURLToPath(import.meta.url)), '..');

// Rutas ES con index.html ('' = portada, 'articulos/slug/' …)
const rutas = [];
(function buscar(dir, ruta) {
  if (existsSync(join(dir, 'index.html'))) rutas.push(ruta);
  for (const n of readdirSync(dir).sort()) {
    if (n.startsWith('.') || FUERA.has(n) || !statSync(join(dir, n)).isDirectory()) continue;
    buscar(join(dir, n), ruta + n + '/');
  }
})(raiz, '');

const url = (l, r) => `${DOMINIO}/${l === 'es' ? '' : l + '/'}${r}`;
const versiones = (r) => [['es', r], ...IDIOMAS.filter((l) => existsSync(join(raiz, l, r, 'index.html'))).map((l) => [l, r])];

let headers = '# Generado por herramientas/dominio.mjs: no editar a mano\n';
let mapa = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';
for (const r of rutas) {
  const vs = versiones(r);
  const alternas = [...vs.map(([l]) => [l, url(l, r)]), ['x-default', url('es', r)]];
  for (const [l] of vs) {
    const camino = '/' + (l === 'es' ? '' : l + '/') + r;
    headers += `\n${camino}\n  Link: <${url(l, r)}>; rel="canonical"\n`;
    for (const [hl, u] of alternas) headers += `  Link: <${u}>; rel="alternate"; hreflang="${hl}"\n`;
    mapa += `  <url>\n    <loc>${url(l, r)}</loc>\n`;
    for (const [hl, u] of alternas) mapa += `    <xhtml:link rel="alternate" hreflang="${hl}" href="${u}"/>\n`;
    mapa += '  </url>\n';
  }
}
mapa += '</urlset>\n';

writeFileSync(join(raiz, '_headers'), headers);
writeFileSync(join(raiz, 'sitemap.xml'), mapa);
writeFileSync(join(raiz, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${DOMINIO}/sitemap.xml\n`);
console.log(`${rutas.length} rutas ES · ${(mapa.match(/<loc>/g) || []).length} URL en sitemap.xml · _headers y robots.txt al día`);
