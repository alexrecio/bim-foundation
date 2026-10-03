// Calcula el tiempo de lectura de cada artículo y lo escribe en assets/js/serie.js (campo `tiempo`).
// Dos cifras por idioma, en segundos: [capa 1 (solo diapositivas), capa 1 + capa 2 (con todos los «Ver detalle»)].
// web.js las muestra junto al titular de la portada de cada artículo y en la rejilla de la portada de la web.
// Uso (desde la raíz del repo, sin dependencias): node herramientas/tiempos-lectura.mjs
// Ejecutarlo tras cambiar el texto de un artículo (en cualquier idioma) y subir serie.js.
//
// Criterio: texto que el lector ve (sin SVG, sin antetítulo ni contador, que se ocultan, sin botones)
// a PPM palabras por minuto, más SEG_VISUAL segundos por cada dibujo SVG que hay que mirar.
// No cuentan: las slides comentadas (ocultas), las notas «Fuentes: …» ni la ficha de fuentes (se consultan, no se leen).
import fs from 'node:fs';
import vm from 'node:vm';

const PPM = 200;        // lectura de texto técnico en pantalla
const SEG_VISUAL = 3;   // mirar un esquema, gráfico o dibujo
const LANGS = ['es', 'en', 'de'];

const SERIE_F = 'assets/js/serie.js';
const ctx = { window: {} };
vm.runInNewContext(fs.readFileSync(SERIE_F, 'utf8'), ctx);
const SERIE = ctx.window.SERIE;

const ENT = { amp: '&', lt: '<', gt: '>', quot: '"', nbsp: ' ' };
const palabras = (h) => (h || '')
  .replace(/<svg[\s\S]*?<\/svg>/g, ' ')
  .replace(/<p[^>]*>\s*(Fuentes|Sources|Quellen):[\s\S]*?<\/p>/g, ' ')
  .replace(/<(span|p)[^>]*class="(kicker-y|slide-n|hero-id)[^"]*"[^>]*>[\s\S]*?<\/\1>/g, ' ')
  .replace(/<div class="slide-actions">[\s\S]*?<\/div>/g, ' ')
  .replace(/<button[\s\S]*?<\/button>/g, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&(#\d+|[a-z]+);/g, (m, e) => (e[0] === '#' ? String.fromCharCode(+e.slice(1)) : ENT[e] ?? ' '))
  .split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
const visuales = (h) => (h.match(/<svg[\s>]/g) || []).length;
const seg = (h) => (palabras(h) / PPM) * 60 + visuales(h) * SEG_VISUAL;

const tiempos = {};
for (const art of SERIE) {
  for (const lang of LANGS) {
    const f = `${lang === 'es' ? '' : lang + '/'}articulos/${art.slug}/index.html`;
    if (!fs.existsSync(f)) continue;
    const html = fs.readFileSync(f, 'utf8').replace(/<!--[\s\S]*?-->/g, '');
    const main = html.split(/<main[^>]*>/)[1]?.split('</main>')[0] || '';
    const c1 = seg(main);
    const usadas = new Set([...main.matchAll(/data-l2="([^"]+)"/g)].map((m) => m[1]));
    let c2 = 0;
    for (const m of html.matchAll(/<template id="l2-([^"]+)"[^>]*>([\s\S]*?)<\/template>/g)) if (usadas.has(m[1]) && m[1] !== 'fuentes') c2 += seg(m[2]);
    (tiempos[art.slug] ||= {})[lang] = [Math.round(c1), Math.round(c1 + c2)];
  }
}

// Reescribe solo la línea `tiempo:` de cada ficha (la crea tras `lectura:` si no existe)
let src = fs.readFileSync(SERIE_F, 'utf8');
for (const [slug, t] of Object.entries(tiempos)) {
  const linea = `tiempo: ${JSON.stringify(t).replace(/"/g, '')}, // s: [diapositivas, con detalle] · herramientas/tiempos-lectura.mjs`;
  const re = new RegExp(`(slug: '${slug}',[\\s\\S]*?)(\\n(\\s*)lectura: [^\\n]*)(\\n\\s*tiempo: [^\\n]*)?`);
  src = src.replace(re, (m, a, lec, ind) => `${a}${lec}\n${ind}${linea}`);
  const min = (s) => Math.max(1, Math.round(s / 60));
  console.log(`${slug.padEnd(28)} ${Object.entries(t).map(([l, [a, b]]) => `${l} ${min(a)}/${min(b)} min`).join('  ')}`);
}
fs.writeFileSync(SERIE_F, src);
