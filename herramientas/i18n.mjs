// Idiomas de la web: regenera los datos de cada idioma y avisa de las traducciones desfasadas.
// Uso (desde la raíz del repo, sin dependencias):
//   node herramientas/i18n.mjs                       → todos los idiomas de assets/i18n/<lang>/
//   node herramientas/i18n.mjs --sellar <página.html> → marca una página traducida como al día con su original ES actual
// Qué hace, por idioma:
//   1. assets/i18n/paginas.js: qué páginas existen en cada idioma (el selector y los enlaces lo usan).
//   2. glosario.js desde glosario.json (solo campos traducidos por id; lo que falte se queda en ES y se avisa).
//   3. paises.js desde paises.json (se aplica sobre assets/js/paises.js en el navegador).
//   4. preguntas.js desde preguntas.json («artículo#slide» → pregunta; las que falten no se muestran).
//   5. indice.js con node herramientas/generar-indice.mjs <lang>.
//   6. Aviso de páginas cuyo original ES ha cambiado desde la traducción (<meta name="bf-fuente" content="ruta@blob">).
// Ejecutarlo después de traducir o cambiar cualquier página, y antes de subir. Guía: assets/i18n/LEEME.md
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { execFileSync } from 'node:child_process';

const blob = (f) => execFileSync('git', ['hash-object', f], { encoding: 'utf8' }).trim();
const leer = (f) => { const ctx = { window: {} }; vm.runInNewContext(fs.readFileSync(f, 'utf8'), ctx); return ctx.window; };
const json = (f) => (fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')) : null);
const META = /<meta name="bf-fuente" content="([^"@]+)@([0-9a-f]*)">/;

if (process.argv[2] === '--sellar') {
  for (const f of process.argv.slice(3)) {
    const h = fs.readFileSync(f, 'utf8'); const m = h.match(META);
    if (!m) { console.error('sin <meta name="bf-fuente">:', f); process.exitCode = 1; continue; }
    fs.writeFileSync(f, h.replace(META, `<meta name="bf-fuente" content="${m[1]}@${blob(m[1])}">`));
    console.log('al día:', f, '←', m[1]);
  }
  process.exit();
}

// Idiomas: carpetas de 2 letras en la raíz con su index.html (/en/, /de/…) o con datos en assets/i18n/<lang>/
const LANGS = [...new Set([
  ...fs.readdirSync('.', { withFileTypes: true }).filter((d) => d.isDirectory() && /^[a-z]{2}$/.test(d.name) && fs.existsSync(d.name + '/index.html')).map((d) => d.name),
  ...fs.readdirSync('assets/i18n', { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name)
])].sort();
const paginas = (dir) => {
  const out = [];
  const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).forEach((e) => {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p); else if (e.name === 'index.html') out.push(path.relative(dir, d).split(path.sep).join('/'));
  });
  if (fs.existsSync(dir)) walk(dir);
  return out.map((k) => (k ? k + '/' : '')).sort();
};

// 1. Manifiesto de páginas
const PAG = Object.fromEntries(LANGS.map((l) => [l, paginas(l)]));
fs.writeFileSync('assets/i18n/paginas.js',
  '// Páginas traducidas por idioma. GENERADO por herramientas/i18n.mjs: no editar a mano.\n' +
  `window.BF_PAGINAS = ${JSON.stringify(PAG)};\n`);

const GLOS = leer('assets/js/glosario.js').BF_GLOSARIO;
const PAISES = leer('assets/js/paises.js').BF_PAISES;
const PREG = leer('assets/js/preguntas.js').BF_PREGUNTAS;
const avisos = [];

for (const l of LANGS) {
  const dir = `assets/i18n/${l}/`;
  fs.mkdirSync(dir, { recursive: true });
  console.log(`\n== ${l}: ${PAG[l].length} páginas (${PAG[l].map((k) => '/' + l + '/' + k).join(' ')})`);

  // 2. Glosario: estructura del ES (id, slug, bloque, relacionados) + textos traducidos; «en» pasa a ser el término ES
  const G = json(dir + 'glosario.json');
  if (G) {
    const falta = [];
    const out = GLOS.map((g) => {
      const x = G[g.id];
      if (!x) { falta.push(g.id); return g; }
      return { ...g, t: x.t || g.t, en: g.t, d: x.d || g.d, ej: x.ej || g.ej, eq: x.eq || g.eq, err: x.err || g.err, al: [...new Set([...(x.al || []), ...g.al])] };
    });
    fs.writeFileSync(dir + 'glosario.js',
      `// Glosario (${l}). GENERADO por herramientas/i18n.mjs desde ${dir}glosario.json y assets/js/glosario.js: no editar a mano.\n` +
      `window.BF_GLOSARIO = ${JSON.stringify(out, null, 1)};\n`);
    console.log(`glosario: ${GLOS.length - falta.length}/${GLOS.length} términos traducidos`);
    if (falta.length) avisos.push(`${l} · glosario sin traducir (sale en ES): ${falta.join(', ')}`);
  }

  // 3. Países
  const P = json(dir + 'paises.json');
  if (P) {
    const falta = PAISES.filter((p) => !P[p.id]).map((p) => p.id);
    PAISES.forEach((p) => {
      const x = P[p.id];
      if (x && x.epsg && x.epsg.map(([c]) => c).join() !== p.epsg.map(([c]) => c).join()) avisos.push(`${l} · paises.json ${p.id}: los códigos EPSG no coinciden con assets/js/paises.js`);
    });
    fs.writeFileSync(dir + 'paises.js',
      `// Países (${l}): textos traducidos que se aplican sobre assets/js/paises.js. GENERADO por herramientas/i18n.mjs desde ${dir}paises.json.\n` +
      `(function () {\n  const T = ${JSON.stringify(P)};\n  (window.BF_PAISES || []).forEach((p) => { if (T[p.id]) Object.assign(p, T[p.id]); });\n})();\n`);
    console.log(`países: ${PAISES.length - falta.length}/${PAISES.length}`);
    if (falta.length) avisos.push(`${l} · países sin traducir: ${falta.join(', ')}`);
  }

  // 4. Dudas frecuentes
  const Q = json(dir + 'preguntas.json');
  if (Q) {
    const out = PREG.filter(([, a, id]) => Q[`${a}#${id}`]).map(([, a, id, b]) => [Q[`${a}#${id}`], a, id, b]);
    fs.writeFileSync(dir + 'preguntas.js',
      `// Dudas frecuentes (${l}). GENERADO por herramientas/i18n.mjs desde ${dir}preguntas.json: no editar a mano.\n` +
      `window.BF_PREGUNTAS = ${JSON.stringify(out, null, 1)};\n`);
    const falta = PREG.filter(([, a, id]) => !Q[`${a}#${id}`]).map(([t, a, id]) => `${a}#${id} («${t}»)`);
    console.log(`dudas frecuentes: ${out.length}/${PREG.length}`);
    if (falta.length) avisos.push(`${l} · dudas sin traducir (no se muestran): ${falta.join('; ')}`);
  }

  // 5. Índice del buscador
  execFileSync('node', ['herramientas/generar-indice.mjs', l], { stdio: ['ignore', 'ignore', 'inherit'] });
  console.log('índice: ' + dir + 'indice.js');

  // 6. Traducciones desfasadas
  for (const k of PAG[l]) {
    const f = `${l}/${k}index.html`;
    const m = fs.readFileSync(f, 'utf8').match(META);
    if (!m) { avisos.push(`${l} · ${f}: sin <meta name="bf-fuente"> (no se puede saber si está al día)`); continue; }
    if (!fs.existsSync(m[1])) { avisos.push(`${l} · ${f}: el original ${m[1]} ya no existe`); continue; }
    if (blob(m[1]) !== m[2]) avisos.push(`${l} · ${f}: DESFASADA, ${m[1]} ha cambiado desde la traducción → git diff ${m[2].slice(0, 10)} ${blob(m[1]).slice(0, 10)}; al terminar: node herramientas/i18n.mjs --sellar ${f}`);
  }
  // Artículos de la serie aún sin traducir
  const sin = leer('assets/js/serie.js').SERIE.filter((a) => fs.existsSync(`articulos/${a.slug}/index.html`) && !PAG[l].includes(`articulos/${a.slug}/`)).map((a) => a.numero);
  if (sin.length) console.log(`artículos sin traducir (se enlazan en ES): ${sin.join(', ')}`);
}

console.log(avisos.length ? '\nAVISOS\n- ' + avisos.join('\n- ') : '\nTodo al día.');
