// Idiomas de la web: selector ES · EN · DE, enlaces en el idioma del lector y traducción de los textos que generan los scripts.
// Versión ES = la raíz; cada idioma vive en /<lang>/ con las mismas rutas (index.html, glosario/, articulos/<slug>/).
// Una página traducida lleva <html lang="en" data-lang="en" data-root="../"> (data-root sigue apuntando a la raíz real)
// y carga, por este orden: serie.js · (paises.js · i18n/<lang>/paises.js) · i18n/paginas.js · i18n/<lang>/ui.js · idioma.js · web.js · precision.js.
// En ES lo carga web.js solo para el selector. Detalles y flujo de trabajo: assets/i18n/LEEME.md
(function () {
  if (window.BF_I18N) return;
  const doc = document.documentElement;
  const root = doc.dataset.root || './';
  const lang = doc.dataset.lang || 'es';
  const LANGS = [['es', 'Español'], ['en', 'English'], ['de', 'Deutsch']];
  const ls = (k, v) => { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { /* sin almacenamiento */ } return null; };

  // Páginas que existen en cada idioma (generado por herramientas/i18n.mjs): { en: ['', 'glosario/', 'articulos/x/'] }
  const existe = (l, k) => l === 'es' || ((window.BF_PAGINAS || {})[l] || []).includes(k);
  const clave = (p) => p.replace(/[?#].*$/, '').replace(/index\.html$/, '');
  // Enlace a una página de la web (ruta desde la raíz, p. ej. 'articulos/x/#id'): en el idioma del lector si existe, si no en ES
  const url = (p, l = lang) => root + (l !== 'es' && existe(l, clave(p)) ? l + '/' : '') + p;
  // Página actual, como clave sin idioma
  const base = new URL(root, location.href).pathname;
  let aqui = location.pathname.startsWith(base) ? location.pathname.slice(base.length) : '';
  if (lang !== 'es') aqui = aqui.replace(new RegExp('^' + lang + '/'), '');
  aqui = clave(aqui);

  window.BF_I18N = { lang, url, existe, aqui };

  // ---------- Datos traducidos de la serie (ui.js: BF_I18N_UI.serie) ----------
  const UI = window.BF_I18N_UI || {};
  if (lang !== 'es' && UI.serie && window.SERIE) window.SERIE.forEach((a) => Object.assign(a, UI.serie[a.slug] || {}));

  // ---------- Selector de idioma en el menú del cartucho ----------
  const selector = () => {
    const nav = document.querySelector('#menu-content nav');
    if (!nav || nav.querySelector('.bf-lang')) return;
    const L = LANGS.filter(([l]) => existe(l, '') || l === lang);
    if (L.length < 2) return;
    const hash = /^articulos\//.test(aqui) ? location.hash.replace(/^#detalle-.*/, '') : '';
    nav.insertAdjacentHTML('beforeend', `<div class="bf-lang" role="group" aria-label="Idioma · Language">${L.map(([l, n]) => {
      const destino = root + (l === 'es' ? '' : l + '/') + (existe(l, aqui) ? aqui + hash : '');
      return l === lang ? `<span class="is-current" lang="${l}" title="${n}">${l.toUpperCase()}</span>`
        : `<a href="${destino}" hreflang="${l}" lang="${l}" title="${n}${existe(l, aqui) ? '' : ' · home'}" data-lang-to="${l}">${l.toUpperCase()}</a>`;
    }).join('')}</div>`);
    nav.querySelectorAll('[data-lang-to]').forEach((a) => a.addEventListener('click', () => ls('bf-lang', a.dataset.langTo)));
  };
  const conPaginas = (fn) => {
    if (window.BF_PAGINAS) return fn();
    const s = document.createElement('script');
    s.src = root + 'assets/i18n/paginas.js'; s.onload = fn;
    document.head.appendChild(s);
  };
  const listo = (fn) => (document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', fn) : fn());
  listo(() => conPaginas(selector));
  if (lang === 'es') return;

  // ---------- Traducción de los textos que generan web.js, ayuda.js y precision.js ----------
  // ui.js: BF_I18N_UI = { t: { 'texto ES exacto': 'traducción' }, re: [[/patrón/, 'sustitución']], num: 'selectores con cifras' }
  // Lo que no está en el diccionario se queda en ES; con ?i18n=debug se listan en consola los textos pendientes.
  const T = UI.t || {};
  const RE = UI.re || [];
  const uno = (s) => {
    if (Object.prototype.hasOwnProperty.call(T, s)) return T[s];
    for (const [re, r] of RE) if (re.test(s)) return s.replace(re, r);
    return undefined;
  };
  const traducir = (txt) => {
    const m = txt.match(/^(\s*)([\s\S]*?)(\s*)$/);
    const s = m[2];
    if (!s || !/[A-Za-zÁÉÍÓÚÑáéíóúñ¿¡]/.test(s)) return null;
    let out = uno(s);
    if (out === s) out = undefined;
    if (out === undefined && s.includes(' · ')) {
      const p = s.split(' · '); const q = p.map((x) => { const y = uno(x); return y === undefined ? x : y; });
      if (q.some((x, i) => x !== p[i])) out = q.join(' · ');
    }
    return out === undefined || out === s ? null : m[1] + out + m[3];
  };
  // Cifras con coma decimal que generan los scripts (sistema del lector, cajetín, lector de coordenadas) → punto decimal
  const NUM = UI.num || '';
  const decimal = (t) => t.replace(/(\d)\.(\d{3})(?=[\d.]*,\d)/g, '$1 $2').replace(/(\d),(\d)/g, '$1.$2');
  const SALTAR = 'script, style, code, pre, [data-i18n-no]';
  const ATTR = ['placeholder', 'aria-label', 'title', 'alt', 'label'];
  const DEBUG = /[?&]i18n=debug/.test(location.search);
  const pendientes = new Set();
  const espanol = /[áéíóúñ¿¡]|\b(de|del|la|las|el|los|con|para|por|que|una|sin|desde|como)\b/i;
  const nodo = (n) => {
    const p = n.parentElement;
    if (!p || p.closest(SALTAR)) return;
    let t = n.nodeValue;
    const r = traducir(t);
    if (r !== null) t = r;
    if (NUM && /\d,\d/.test(t) && p.closest(NUM)) t = decimal(t);
    if (t !== n.nodeValue) n.nodeValue = t;
    else if (DEBUG && espanol.test(t) && t.trim().length > 1 && !p.closest('main.deck, template')) pendientes.add(t.trim());
  };
  const atributos = (el) => ATTR.forEach((a) => {
    const v = el.getAttribute(a);
    if (!v) return;
    const r = traducir(v);
    if (r !== null) el.setAttribute(a, r);
  });
  // Enlaces escritos a mano en el HTML traducido hacia una página que aún no existe en este idioma: a la versión ES
  const pref = new URL(root + lang + '/', location.href).pathname;
  const enlace = (a) => {
    const h = a.getAttribute('href');
    if (!h || /^(#|[a-z]+:)/i.test(h)) return;
    const u = new URL(h, location.href);
    if (u.origin !== location.origin || !u.pathname.startsWith(pref)) return;
    const k = clave(u.pathname.slice(pref.length));
    if (!existe(lang, k)) a.setAttribute('href', root + k + u.hash);
  };
  const recorrer = (raiz) => {
    if (raiz.nodeType === 3) return nodo(raiz);
    if (raiz.nodeType !== 1 || raiz.closest(SALTAR)) return;
    atributos(raiz);
    if (raiz.matches('a[href]')) enlace(raiz);
    raiz.querySelectorAll('a[href]').forEach(enlace);
    raiz.querySelectorAll('[placeholder], [aria-label], [title], [alt], optgroup[label]').forEach(atributos);
    const tw = document.createTreeWalker(raiz, NodeFilter.SHOW_TEXT);
    const L = []; while (tw.nextNode()) L.push(tw.currentNode);
    L.forEach(nodo);
  };
  const obs = new MutationObserver((muts) => {
    obs.disconnect();
    muts.forEach((m) => {
      if (m.type === 'characterData') nodo(m.target);
      else if (m.type === 'attributes') atributos(m.target);
      else m.addedNodes.forEach(recorrer);
    });
    vigilar();
  });
  const vigilar = () => obs.observe(document.documentElement, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ATTR });
  listo(() => { recorrer(document.body); vigilar(); });
  if (DEBUG) {
    window.BF_I18N.pendientes = () => [...pendientes];
    addEventListener('load', () => setTimeout(() => console.table([...pendientes]), 1500));
  }
})();
