// Genera assets/js/indice.js: el índice de búsqueda de toda la serie (cada diapositiva y su capa 2)
// y, para cada término del glosario, las diapositivas donde se explica.
// Uso (desde la raíz del repo, sin dependencias): node herramientas/generar-indice.mjs
// Ejecutarlo cada vez que se añade o cambia un artículo o el glosario.
import fs from 'node:fs';
import vm from 'node:vm';

const ctx = { window: {} };
vm.runInNewContext(fs.readFileSync('assets/js/serie.js', 'utf8'), ctx);
vm.runInNewContext(fs.readFileSync('assets/js/glosario.js', 'utf8'), ctx);
const SERIE = ctx.window.SERIE, GLOS = ctx.window.BF_GLOSARIO || [];

const ENT = { amp: '&', lt: '<', gt: '>', quot: '"', nbsp: ' ', middot: '·', rarr: '→', larr: '←', harr: '↔', times: '×', minus: '−', deg: '°' };
const txt = (h) => (h || '')
  .replace(/<svg[\s\S]*?<\/svg>/g, ' ').replace(/<pre[\s\S]*?<\/pre>/g, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&(#\d+|[a-z]+);/g, (m, e) => (e[0] === '#' ? String.fromCharCode(+e.slice(1)) : ENT[e] ?? ' '))
  .replace(/\s+/g, ' ').trim();
const first = (re, h) => { const m = h.match(re); return m ? txt(m[1]) : ''; };
const all = (re, h) => [...h.matchAll(re)].map((m) => txt(m[1])).filter(Boolean);
const attr = (tag, a) => { const m = tag.match(new RegExp(`${a}="([^"]*)"`)); return m ? m[1] : ''; };

const ideas = [];
for (const art of SERIE) {
  const f = `articulos/${art.slug}/index.html`;
  if (!fs.existsSync(f)) continue;
  const html = fs.readFileSync(f, 'utf8');
  const tpls = {};
  for (const m of html.matchAll(/<template id="l2-([^"]+)"([^>]*)>([\s\S]*?)<\/template>/g)) {
    tpls[m[1]] = { title: attr(m[2], 'data-title'), text: txt(m[3]) };
  }
  const main = html.split(/<main[^>]*>/)[1]?.split('</main>')[0] || '';
  const parts = main.split(/(?=<section class="slide)/).filter((p) => p.startsWith('<section class="slide'));
  let cap = '';
  parts.forEach((p, i) => {
    const tag = p.match(/^<section[^>]*>/)[0];
    const id = attr(tag, 'id'); if (!id) return;
    if (attr(tag, 'data-cap')) cap = attr(tag, 'data-cap');
    const [b, bn] = cap ? cap.split(' · ') : ['', ''];
    const l2 = (p.match(/data-l2="([^"]+)"/) || [])[1] || '';
    const t2 = tpls[l2];
    ideas.push({
      a: art.slug, n: art.numero, i: i + 1, id,
      t: attr(tag, 'data-nav'),
      k: first(/class="kicker-y[^"]*">([\s\S]*?)<\/span>/, p),
      h: first(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/, p).replace(/\.$/, ''),
      l: first(/class="slide-lead">([\s\S]*?)<\/p>/, p),
      c: [...new Set(all(/class="c-title">([\s\S]*?)<\/span>/g, p))].join(' · ').slice(0, 300),
      b, bn, l2,
      d: t2 ? (t2.title ? t2.title + '. ' : '') + t2.text.slice(0, 1500) : ''
    });
  });
}

// Dónde se explica cada término: primero las diapositivas fijadas a mano (revisadas), después las que encuentra el texto
const CC = 'coordenadas-compartidas';
const MANUAL = {
  C01: [CC, 'problema principio origenes'], C02: [CC, 'coordenadas paises'], C06: [CC, 'coordenadas principio origenes'],
  C11: [CC, 'origenes survey limites'], C12: [CC, 'origenes survey'], C13: [CC, 'survey otros'], C14: [CC, 'revit campus tipologias'],
  C15: [CC, 'limite decimales bytes cribar'], C16: [CC, 'cribar principio nubes'], C18: [CC, 'ifc'], C19: [CC, 'ifc errores'],
  C20: [CC, 'ifc espana'], C21: [CC, 'ifc nortes'], C23: [CC, 'ifc'], C24: [CC, 'errores civil3d'], C28: [CC, 'plataformas'],
  C30: [CC, 'plataformas coordinacion'], C31: [CC, 'civil3d errores'], C32: [CC, 'calidad opciones ids herramientas'], C34: [CC, 'herramientas']
};
// Dónde se explica cada término: puntuación por campo (titular > antetítulo/frase > tarjetas > capa 2)
const norm = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const has = (s, a) => new RegExp(`(^|[^a-z0-9])${norm(a).replace(/[.*+?^${}()|[\]\\/]/g, '\\$&')}([^a-z0-9]|$)`).test(norm(s));
const donde = {};
for (const g of GLOS) {
  const al = [g.t.split(' (')[0], ...g.al];
  const sc = ideas.filter((x) => x.id !== 'portada' && x.id !== 'cierre').map((x) => {
    let s = 0;
    for (const a of al) {
      if (has(x.t + ' ' + x.h, a)) s += 5;
      if (has(x.k, a)) s += 3;
      if (has(x.l, a)) s += 3;
      if (has(x.c, a)) s += 1;
      if (has(x.d, a)) s += 1;
    }
    return [s, x];
  }).filter(([s]) => s >= 3).sort((p, q) => q[0] - p[0]).slice(0, 4);
  const fijas = MANUAL[g.id] ? MANUAL[g.id][1].split(' ').map((id) => [MANUAL[g.id][0], id]) : [];
  const L = [...fijas, ...sc.map(([, x]) => [x.a, x.id])].filter((d, k, arr) => arr.findIndex((e) => e[0] === d[0] && e[1] === d[1]) === k);
  for (const [a, id] of fijas) if (!ideas.some((x) => x.a === a && x.id === id)) throw new Error(`MANUAL ${g.id}: no existe ${a}#${id}`);
  donde[g.id] = L.slice(0, 4);
}

fs.writeFileSync('assets/js/indice.js',
  '// Índice de búsqueda de la serie. GENERADO por herramientas/generar-indice.mjs: no editar a mano.\n' +
  '// ideas: a artículo · n número · i posición · id slide · t menú · k antetítulo · h titular · l frase · c tarjetas · b/bn bloque · l2 ficha · d texto de la capa 2\n' +
  '// donde: término del glosario → diapositivas donde se explica\n' +
  `window.BF_INDICE = ${JSON.stringify({ ideas, donde })};\n`);
console.log(ideas.length, 'ideas ·', Object.values(donde).filter((d) => d.length).length + '/' + GLOS.length, 'términos con diapositiva');
for (const g of GLOS) console.log(g.id, g.t.slice(0, 30).padEnd(30), donde[g.id].map((d) => d[1]).join(', '));
