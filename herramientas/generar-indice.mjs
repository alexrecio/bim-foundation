// Genera assets/js/indice.js: el índice de búsqueda de toda la serie (cada diapositiva y su capa 2)
// y, para cada término del glosario, las diapositivas donde se explica.
// Uso (desde la raíz del repo, sin dependencias): node herramientas/generar-indice.mjs
// Ejecutarlo cada vez que se añade o cambia un artículo o el glosario.
// Otros idiomas: node herramientas/generar-indice.mjs en → lee en/articulos/ y assets/i18n/en/glosario.js y
// escribe assets/i18n/en/indice.js (lo hace herramientas/i18n.mjs).
import fs from 'node:fs';
import vm from 'node:vm';

const LANG = process.argv[2] || 'es';
const PRE = LANG === 'es' ? '' : LANG + '/';
const DATOS = LANG === 'es' ? 'assets/js/' : `assets/i18n/${LANG}/`;
const ctx = { window: {} };
vm.runInNewContext(fs.readFileSync('assets/js/serie.js', 'utf8'), ctx);
if (fs.existsSync(DATOS + 'glosario.js')) vm.runInNewContext(fs.readFileSync(DATOS + 'glosario.js', 'utf8'), ctx);
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
  const f = `${PRE}articulos/${art.slug}/index.html`;
  if (!fs.existsSync(f)) continue;
  const html = fs.readFileSync(f, 'utf8');
  const tpls = {};
  for (const m of html.matchAll(/<template id="l2-([^"]+)"([^>]*)>([\s\S]*?)<\/template>/g)) {
    tpls[m[1]] = { title: attr(m[2], 'data-title'), text: txt(m[3]) };
  }
  const main = (html.split(/<main[^>]*>/)[1]?.split('</main>')[0] || '').replace(/<!--[\s\S]*?-->/g, ''); // las slides comentadas (ocultas) no entran
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
const NI = 'niveles-de-informacion';
const DI = 'deteccion-de-interferencias';
const GD = 'gemelos-digitales';
const CD = 'entorno-comun-de-datos';
const CL = 'clasificacion-bim';
const MANUAL = {
  C01: [CC, 'principio origenes'], C02: [CC, 'coordenadas paises'], C06: [CC, 'coordenadas principio origenes'],
  C11: [CC, 'origenes survey limites'], C12: [CC, 'origenes survey'], C13: [CC, 'survey otros'], C14: [CC, 'revit campus tipologias'],
  C15: [CC, 'limite decimales bytes cribar'], C16: [CC, 'cribar principio nubes'], C18: [CC, 'ifc'], C19: [CC, 'ifc errores'],
  C20: [CC, 'ifc espana'], C21: [CC, 'ifc nortes'], C23: [CC, 'ifc'], C24: [CC, 'errores civil3d'], C28: [CC, 'plataformas'],
  C30: [CC, 'plataformas coordinacion'], C31: [CC, 'civil3d errores'], C32: [CC, 'calidad opciones ids herramientas'], C34: [CC, 'herramientas'],
  // Artículo 02 · niveles de información
  N01: [NI, 'requisito pregunta iso7817'], N04: [NI, 'tipos'], N08: [NI, 'sobremodelado'], N09: [NI, 'escalera detalle elemento'],
  N10: [NI, 'detalle vista'], N12: [NI, 'exactitud'], N18: [NI, 'historia'], N19: [NI, 'historia paises'], N22: [NI, 'elemento'],
  N29: [NI, 'loin-ids'], N30: [NI, 'calidad ids comprobadores forma'], N32: [NI, 'partes'],
  // Artículo 04 · detección de interferencias
  D01: [DI, 'que-es tipos'], D02: [DI, 'tipos tolerancia'], D03: [DI, 'tipos holguras'], D04: [DI, 'tipos'], D05: [DI, 'tolerancia'],
  D06: [DI, 'matriz'], D07: [DI, 'agrupar'], D08: [DI, 'ruido'], D09: [DI, 'ciclo iso19650'], D10: [DI, 'incidencia'],
  D11: [DI, 'incidencia bcf-dentro'], D12: [DI, 'tipos ruido'], D13: [DI, 'quien-mueve'], D14: [DI, 'bcf bcf-dentro bcf-versiones'],
  D15: [DI, 'bcf-api'], D16: [DI, 'iso19650'], D17: [DI, 'guid ida-vuelta'], D18: [DI, 'navisworks'], D19: [DI, 'navisworks solibri'],
  D20: [DI, 'holguras'], D21: [DI, 'nube'], D22: [DI, 'cerrar'], D23: [DI, 'kpi'], D24: [DI, 'ciclo'], D25: [DI, 'aptitud'], D26: [DI, 'cerrar'],
  // Artículo 03 · entorno común de datos
  E01: [CD, 'que-es estados plataformas'], E02: [CD, 'problema que-es'], E04: [CD, 'metadatos contenedor'], E06: [CD, 'puertas calidad'],
  E07: [CD, 'codigos anejos'], E10: [CD, 'roles'], E11: [CD, 'permisos seguridad'], E12: [CD, 'archivado'], E19: [CD, 'anejos codigos'],
  E20: [CD, 'seguridad'], E21: [CD, 'icdd'], E22: [CD, 'opencde'], E24: [CD, 'icdd'], E26: [CD, 'flujos'], E27: [CD, 'autoria'],
  E28: [CD, 'calidad validador'], E31: [CD, 'certificados'], E32: [CD, 'exportar'],
  // Artículo 07 · gemelos digitales
  G01: [GD, 'definicion tres-niveles'], G02: [GD, 'tres-niveles'], G03: [GD, 'tres-niveles'], G05: [GD, 'madurez'], G08: [GD, 'iso19650'], G09: [GD, 'iso19650'],
  G10: [GD, 'iso19650 entrega'], G13: [GD, 'ifc normas'], G14: [GD, 'identificadores ifc'], G15: [GD, 'ifc'], G16: [GD, 'ifc'], G17: [GD, 'entrega'], G18: [GD, 'ids entrega'],
  G19: [GD, 'ontologias shacl'], G21: [GD, 'ontologias'], G25: [GD, 'grafo plataformas'], G29: [GD, 'itwin'], G30: [GD, 'grafo'], G31: [GD, 'componentes'],
  G32: [GD, 'protocolos'], G34: [GD, 'protocolos'], G35: [GD, 'usos'], G36: [GD, 'usos casos'], G37: [GD, 'frecuencia datos-sensor'], G38: [GD, 'datos-sensor'],
  G39: [GD, 'shacl'], G40: [GD, 'ontologias'], G41: [GD, 'entrega'], G42: [GD, 'casos mapa'], G43: [GD, 'frecuencia'],
  // Artículo 05 · sistemas de clasificación
  K01: [CL, 'clasificar problema usos'], K02: [CL, 'facetas elegir'], K03: [CL, 'facetas'], K04: [CL, 'facetas uniclass'], K05: [CL, 'facetas espana'],
  K06: [CL, 'jerarquia clasificar'], K07: [CL, 'clasificar'], K08: [CL, 'cci'], K09: [CL, 'ifc revit'], K10: [CL, 'ifc'], K11: [CL, 'ifc'],
  K12: [CL, 'ifc'], K13: [CL, 'bsdd diccionario'], K14: [CL, 'bsdd diccionario'], K15: [CL, 'ids calidad'], K16: [CL, 'ids'], K17: [CL, 'uniclass mapa'],
  K18: [CL, 'omniclass'], K19: [CL, 'omniclass'], K20: [CL, 'omniclass revit'], K21: [CL, 'cci'], K22: [CL, 'cci mapa'], K23: [CL, 'mapa'],
  K24: [CL, 'espana archicad'], K25: [CL, 'espana mapeo otros'], K26: [CL, 'iso'], K27: [CL, 'diccionario bsdd'], K28: [CL, 'cci'], K29: [CL, 'mapeo'],
  K30: [CL, 'mapeo'], K31: [CL, 'regla uniclass ifcopenshell']
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
  const L = [...fijas.filter(([a, id]) => ideas.some((x) => x.a === a && x.id === id)), ...sc.map(([, x]) => [x.a, x.id])].filter((d, k, arr) => arr.findIndex((e) => e[0] === d[0] && e[1] === d[1]) === k);
  for (const [a, id] of fijas) if (fs.existsSync(`${PRE}articulos/${a}/index.html`) && !ideas.some((x) => x.a === a && x.id === id)) throw new Error(`MANUAL ${g.id}: no existe ${a}#${id}`);
  donde[g.id] = L.slice(0, 4);
}

fs.writeFileSync(DATOS + 'indice.js',
  '// Índice de búsqueda de la serie. GENERADO por herramientas/generar-indice.mjs: no editar a mano.\n' +
  '// ideas: a artículo · n número · i posición · id slide · t menú · k antetítulo · h titular · l frase · c tarjetas · b/bn bloque · l2 ficha · d texto de la capa 2\n' +
  '// donde: término del glosario → diapositivas donde se explica\n' +
  `window.BF_INDICE = ${JSON.stringify({ ideas, donde })};\n`);
console.log(ideas.length, 'ideas ·', Object.values(donde).filter((d) => d.length).length + '/' + GLOS.length, 'términos con diapositiva');
for (const g of GLOS) console.log(g.id, g.t.slice(0, 30).padEnd(30), donde[g.id].map((d) => d[1]).join(', '));
