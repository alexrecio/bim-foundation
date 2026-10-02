// Navegación y ayuda al lector: buscador de toda la serie, glosario (página y definiciones al pasar),
// preguntas frecuentes, exploración por bloques, filtros de la portada y guía «Cómo se lee».
// Se carga desde web.js; los datos (indice.js, glosario.js, preguntas.js) se cargan solo cuando hacen falta.
(function () {
  const root = document.documentElement.dataset.root || './';
  // Idioma (assets/js/idioma.js): enlaces a la página del idioma del lector y datos traducidos en assets/i18n/<lang>/
  const lang = document.documentElement.dataset.lang || 'es';
  const url = (p) => (window.BF_I18N ? window.BF_I18N.url(p) : root + p);
  const slugActual = document.documentElement.dataset.slug || '';
  const esArticulo = !!document.querySelector('main.deck');
  const serie = window.SERIE || [];
  const art = (slug) => serie.find((a) => a.slug === slug) || {};
  const BLOQUES = [
    ['I', 'Conceptos generales', 'Lo que vale para cualquier programa'],
    ['II', 'Estándares', 'Normas, códigos y formatos abiertos'],
    ['III', 'Software', 'Cómo lo resuelve cada programa'],
    ['IV', 'Plataformas', 'Visores y entornos en la nube'],
    ['V', 'Interoperabilidad', 'Intercambios entre programas'],
    ['VI', 'Control de calidad', 'Cómo comprobarlo']
  ];
  const esc = (s) => String(s || '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const norm = (s) => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  const pad = (n) => String(n).padStart(2, '0');
  const ficticio = (slug) => art(slug).estado === 'relleno';

  // ---------- Carga perezosa de datos ----------
  const cargas = {};
  const cargar = (f) => cargas[f] || (cargas[f] = new Promise((ok) => {
    const s = document.createElement('script');
    s.src = `${root}assets/${lang === 'es' ? 'js' : 'i18n/' + lang}/${f}`; s.onload = ok; s.onerror = ok;
    document.head.appendChild(s);
  }));
  const datos = () => Promise.all(['indice.js', 'glosario.js', 'preguntas.js'].map(cargar));

  // ---------- Enlaces ----------
  const urlIdea = (a, id) => url(`articulos/${a}/#${id}`);
  const urlTermino = (g) => url(`glosario/#${g.slug}`);
  // En el mismo artículo no se recarga la página: se baja a la diapositiva (y se abre la capa 2 si toca)
  const ir = (href) => {
    const u = new URL(href, location.href);
    if (u.pathname === location.pathname && u.hash) {
      cerrarTodo();
      const det = u.hash.match(/^#detalle-(.+)$/);
      const btn = det && document.querySelector(`[data-l2="${det[1]}"]`);
      const dest = btn ? btn.closest('.slide') : document.getElementById(u.hash.slice(1));
      if (dest) dest.scrollIntoView({ behavior: 'smooth' });
      if (btn) setTimeout(() => btn.click(), 450);
      if (!btn) history.replaceState(null, '', u.hash);
      return;
    }
    location.href = href;
  };

  // ---------- Buscador ----------
  let dlg = null, filtroTipo = 'todo', filtroBloque = '', sel = 0, resultados = [];
  const TIPOS = [['todo', 'Todo'], ['concepto', 'Conceptos'], ['idea', 'Ideas'], ['detalle', 'En detalle'], ['articulo', 'Artículos']];

  const registros = () => {
    const R = [];
    (window.BF_GLOSARIO || []).forEach((g) => R.push({
      tipo: 'concepto', b: g.b, href: urlTermino(g), titulo: g.t, sub: g.en, texto: g.d,
      campos: [[g.t + ' ' + g.en + ' ' + g.al.join(' '), 6], [g.d, 2], [g.eq + ' ' + g.err, 1]]
    }));
    ((window.BF_INDICE || {}).ideas || []).forEach((x) => {
      if (x.id === 'portada') return;
      const a = art(x.a);
      const lugar = `${x.n} · ${a.titulo || x.a}${x.b ? ' · ' + x.b + ' ' + x.bn : ''}`;
      R.push({
        tipo: 'idea', b: x.b, a: x.a, href: urlIdea(x.a, x.id), titulo: x.h || x.t, sub: lugar, texto: x.l || x.c,
        campos: [[x.t + ' ' + x.h, 6], [x.k, 4], [x.l, 3], [x.c, 2]]
      });
      if (x.d && x.l2) R.push({
        tipo: 'detalle', b: x.b, a: x.a, href: urlIdea(x.a, 'detalle-' + x.l2), titulo: `Detalle: ${x.h || x.t}`, sub: lugar, texto: x.d,
        campos: [[x.d, 1]]
      });
    });
    serie.filter((a) => a.estado !== 'proximamente').forEach((a) => R.push({
      tipo: 'articulo', b: '', a: a.slug, href: url(`articulos/${a.slug}/`), titulo: `${a.numero} · ${a.titulo}`, sub: `${a.tema} · ${a.lectura}`, texto: a.resumen,
      campos: [[a.titulo + ' ' + a.tema + ' ' + (a.etiquetas || []).join(' '), 6], [a.resumen, 2]]
    }));
    R.forEach((r) => { r.n = r.campos.map(([t, w]) => [norm(t), w]); });
    return R;
  };
  let R = null;

  const buscar = (q) => {
    if (!R) R = registros();
    const toks = norm(q).split(/[\s,.;:¿?¡!()]+/).filter((t) => t.length > 1);
    const frase = norm(q).trim();
    return R.filter((r) => (filtroTipo === 'todo' || r.tipo === filtroTipo) && (!filtroBloque || r.b === filtroBloque))
      .map((r) => {
        if (!toks.length) return [r.tipo === 'idea' ? 1 : 0, r];
        let s = 0;
        for (const t of toks) {
          let best = 0;
          for (const [txt, w] of r.n) {
            const i = txt.indexOf(t);
            if (i < 0) continue;
            const inicio = i === 0 || /[^a-z0-9]/.test(txt[i - 1]);
            best = Math.max(best, w * (inicio ? 2 : 1));
          }
          if (!best) return [0, r];
          s += best;
        }
        if (frase.length > 3 && r.n[0][0].includes(frase)) s += 10;
        if (r.tipo === 'detalle') s *= 0.6;
        if (ficticio(r.a)) s *= 0.5;
        return [s, r];
      })
      .filter(([s]) => s > 0)
      .sort((x, y) => y[0] - x[0])
      .slice(0, toks.length ? 40 : 60)
      .map(([, r]) => r);
  };

  const resaltar = (t, q, max = 150) => {
    const toks = norm(q).split(/\s+/).filter((x) => x.length > 1);
    let txt = String(t || '');
    const nt = norm(txt);
    let i = toks.length ? Math.min(...toks.map((k) => { const j = nt.indexOf(k); return j < 0 ? Infinity : j; })) : 0;
    if (!isFinite(i)) i = 0;
    const ini = Math.max(0, i - 50);
    txt = (ini ? '…' : '') + txt.slice(ini, ini + max) + (txt.length > ini + max ? '…' : '');
    let h = esc(txt);
    toks.forEach((k) => {
      // Resaltado sin acentos: se busca en el texto normalizado y se marca el tramo original
      const nh = norm(h); let out = '', p = 0, j;
      while ((j = nh.indexOf(k, p)) >= 0) { out += h.slice(p, j) + '<mark>' + h.slice(j, j + k.length) + '</mark>'; p = j + k.length; }
      h = out + h.slice(p);
    });
    return h;
  };

  const ICONO = { concepto: 'Aa', idea: '▢', detalle: '+', articulo: '№' };
  const ETQ = { concepto: 'Concepto', idea: 'Idea', detalle: 'En detalle', articulo: 'Artículo' };
  const pintar = () => {
    const q = dlg.querySelector('input').value;
    const out = dlg.querySelector('.bfb-res');
    dlg.querySelectorAll('[data-tipo]').forEach((b) => b.setAttribute('aria-pressed', b.dataset.tipo === filtroTipo));
    dlg.querySelectorAll('[data-bloque]').forEach((b) => b.setAttribute('aria-pressed', b.dataset.bloque === filtroBloque));
    if (!q.trim() && !filtroBloque && filtroTipo === 'todo') {
      // Sin texto: las dudas más frecuentes y los conceptos clave
      const P = window.BF_PREGUNTAS || [];
      const G = (window.BF_GLOSARIO || []).slice(0, 12);
      resultados = P.map(([t, a, id, b]) => ({ href: urlIdea(a, id), titulo: t, tipo: 'pregunta', b }));
      out.innerHTML = `<p class="bfb-sec">Dudas frecuentes</p><ul>${resultados.map((r, k) => `<li><a href="${r.href}" data-k="${k}" class="bfb-item is-q"><span class="bfb-ico">?</span><span class="bfb-txt"><b>${esc(r.titulo)}</b></span>${r.b ? `<span class="bfb-b">${r.b}</span>` : ''}</a></li>`).join('')}</ul>` +
        `<p class="bfb-sec">Conceptos clave</p><div class="bfb-terms">${G.map((g) => `<a class="chip" href="${urlTermino(g)}">${esc(g.t.split(' (')[0])}</a>`).join('')}<a class="chip k" href="${url('glosario/')}">Glosario completo →</a></div>`;
    } else {
      resultados = buscar(q);
      const n = resultados.length;
      out.innerHTML = n ? `<p class="bfb-sec">${n === 40 ? 'Los 40 mejores resultados' : n + (n === 1 ? ' resultado' : ' resultados')}</p><ul>${resultados.map((r, k) => `<li><a href="${r.href}" data-k="${k}" class="bfb-item t-${r.tipo}">
          <span class="bfb-ico" title="${ETQ[r.tipo]}">${ICONO[r.tipo]}</span>
          <span class="bfb-txt"><span class="bfb-sub">${ETQ[r.tipo]} · ${esc(r.sub)}${ficticio(r.a) ? ' <span class="tag">Ficticio</span>' : ''}</span><b>${resaltar(r.titulo, q, 90)}</b><span class="bfb-snip">${resaltar(r.texto, q)}</span></span>
          ${r.b ? `<span class="bfb-b">${r.b}</span>` : ''}</a></li>`).join('')}</ul>`
        : `<div class="bfb-vacio"><b>Nada con «${esc(q)}»${filtroBloque ? ' en el bloque ' + filtroBloque : ''}.</b><p>Prueba con otra palabra (también vale en inglés: «survey point», «shared coordinates»), quita los filtros o mira el <a href="${url('glosario/')}">glosario</a>.</p></div>`;
    }
    sel = 0; marcar();
  };
  const marcar = () => {
    const items = [...dlg.querySelectorAll('.bfb-item')];
    items.forEach((a, k) => a.classList.toggle('is-sel', k === sel));
    if (items[sel]) items[sel].scrollIntoView({ block: 'nearest' });
  };

  const abrirBuscador = (opts = {}) => {
    cerrarTodo();
    if (!dlg) {
      dlg = document.createElement('div');
      dlg.id = 'bf-buscar'; dlg.setAttribute('role', 'dialog'); dlg.setAttribute('aria-modal', 'true'); dlg.setAttribute('aria-label', 'Buscar en la serie');
      dlg.innerHTML = `<div class="bfb-box">
        <div class="bfb-top"><svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><circle cx="8.5" cy="8.5" r="6" fill="none" stroke="#000" stroke-width="2.5"/><path d="M13 13l5 5" stroke="#000" stroke-width="2.5" stroke-linecap="round"/></svg>
          <input type="search" placeholder="Busca un concepto, una duda o un programa…" aria-label="Buscar" autocomplete="off" spellcheck="false">
          <button type="button" class="bfb-x" aria-label="Cerrar">Esc</button></div>
        <div class="bfb-filtros">
          <div role="group" aria-label="Tipo">${TIPOS.map(([k, t]) => `<button type="button" class="bfb-f" data-tipo="${k}">${t}</button>`).join('')}</div>
          <div role="group" aria-label="Bloque"><span class="label">Bloque</span><button type="button" class="bfb-f" data-bloque="">Todos</button>${BLOQUES.map(([r, n]) => `<button type="button" class="bfb-f" data-bloque="${r}" title="${n}">${r}</button>`).join('')}</div>
        </div>
        <div class="bfb-res custom-scroll" aria-live="polite"><p class="bfb-sec">Cargando…</p></div>
        <div class="bfb-pie"><span><kbd>↑</kbd><kbd>↓</kbd> moverse</span><span><kbd>↵</kbd> abrir</span><span><kbd>/</kbd> buscar desde cualquier sitio</span><a href="${url('glosario/')}">Glosario</a></div>
      </div>`;
      document.body.appendChild(dlg);
      const inp = dlg.querySelector('input');
      inp.addEventListener('input', pintar);
      dlg.addEventListener('click', (e) => {
        if (e.target === dlg || e.target.closest('.bfb-x')) return cerrarBuscador();
        const f = e.target.closest('[data-tipo], [data-bloque]');
        if (f) { if (f.dataset.tipo) filtroTipo = f.dataset.tipo; else filtroBloque = f.dataset.bloque; pintar(); inp.focus(); return; }
        const a = e.target.closest('a[href]');
        if (a && !e.metaKey && !e.ctrlKey) { e.preventDefault(); cerrarBuscador(); ir(a.href); }
      });
      inp.addEventListener('keydown', (e) => {
        const items = dlg.querySelectorAll('.bfb-item');
        if (e.key === 'ArrowDown') { e.preventDefault(); sel = Math.min(items.length - 1, sel + 1); marcar(); }
        else if (e.key === 'ArrowUp') { e.preventDefault(); sel = Math.max(0, sel - 1); marcar(); }
        else if (e.key === 'Enter' && items[sel]) { e.preventDefault(); const h = items[sel].href; cerrarBuscador(); ir(h); }
      });
    }
    if (opts.bloque !== undefined) filtroBloque = opts.bloque;
    if (opts.tipo) filtroTipo = opts.tipo;
    dlg.querySelector('input').value = opts.q || '';
    dlg.classList.add('is-open'); document.body.classList.add('l2-lock');
    dlg.querySelector('input').focus();
    datos().then(() => { R = null; pintar(); });
  };
  const cerrarBuscador = () => { if (dlg && dlg.classList.contains('is-open')) { dlg.classList.remove('is-open'); document.body.classList.remove('l2-lock'); } };

  // ---------- Guía «Cómo se lee» ----------
  let guia = null;
  const abrirGuia = () => {
    cerrarTodo();
    datos().then(() => {
      if (!guia) {
        guia = document.createElement('div');
        guia.id = 'bf-guia'; guia.setAttribute('role', 'dialog'); guia.setAttribute('aria-modal', 'true'); guia.setAttribute('aria-labelledby', 'bfg-t');
        const P = (window.BF_PREGUNTAS || []).filter((p) => !slugActual || p[1] === slugActual).slice(0, 6);
        guia.innerHTML = `<div class="bfg-box custom-scroll">
          <button type="button" class="l2-close bfg-x" aria-label="Cerrar">✕</button>
          <span class="kicker-y">Ayuda</span>
          <h3 id="bfg-t">Cómo se lee<span class="dot">.</span></h3>
          <div class="bfg-grid">
            <div class="card"><svg viewBox="0 0 120 70" class="draw" aria-hidden="true"><rect x="6" y="6" width="108" height="58" rx="4" fill="#fff" stroke="#000" stroke-width="2.5"/><rect x="14" y="14" width="30" height="6" fill="#FFFF00" stroke="#000" stroke-width="1.5"/><rect x="14" y="26" width="46" height="9" fill="#000"/><rect x="14" y="40" width="40" height="3" fill="#8F8F87"/><rect x="70" y="16" width="36" height="40" rx="3" fill="#EFEFEA" stroke="#000" stroke-width="2"/></svg>
              <span class="c-label">Capa 1 · 15 segundos</span><span class="c-title">Una idea por pantalla</span><span class="c-text">Titular, una frase y un dibujo. Baja con la rueda, las flechas o deslizando.</span></div>
            <div class="card"><svg viewBox="0 0 120 70" class="draw" aria-hidden="true"><rect x="6" y="6" width="108" height="58" rx="4" fill="#EFEFEA" stroke="#000" stroke-width="2"/><rect x="26" y="12" width="88" height="52" rx="4" fill="#fff" stroke="#000" stroke-width="2.5"/><rect x="34" y="20" width="34" height="5" fill="#000"/><rect x="34" y="30" width="34" height="26" fill="#EFEFEA"/><rect x="72" y="30" width="34" height="26" fill="#EFEFEA"/><rect x="10" y="48" width="30" height="10" rx="5" fill="#000"/></svg>
              <span class="c-label">Capa 2 · Ver detalle</span><span class="c-title">La letra pequeña, aparte</span><span class="c-text">Cifras, tablas, pasos y fuentes. Se cierra con Esc y vuelves al mismo sitio.</span></div>
            <div class="card"><svg viewBox="0 0 120 70" class="draw" aria-hidden="true">${BLOQUES.map(([r], k) => `<rect x="${8 + k * 18}" y="${54 - k * 8}" width="14" height="${10 + k * 8}" fill="${k === 2 ? '#FFFF00' : '#fff'}" stroke="#000" stroke-width="2"/><text x="${15 + k * 18}" y="66" font-family="JetBrains Mono, monospace" font-size="6" text-anchor="middle">${r}</text>`).join('')}</svg>
              <span class="c-label">Seis bloques</span><span class="c-title">De lo general a lo concreto</span><span class="c-text">I es para cualquier programa; III habla de programas concretos. Salta al que necesites desde el menú.</span></div>
            <div class="card"><svg viewBox="0 0 120 70" class="draw" aria-hidden="true"><text x="10" y="34" font-family="Inter, sans-serif" font-weight="900" font-size="15">datum</text><path d="M10 39 h46" stroke="#000" stroke-width="2" stroke-dasharray="3 3"/><rect x="52" y="44" width="60" height="20" rx="3" fill="#000"/><rect x="58" y="50" width="30" height="3" fill="#FFFF00"/><rect x="58" y="56" width="44" height="3" fill="#8F8F87"/></svg>
              <span class="c-label">Palabras subrayadas</span><span class="c-title">Definición al momento</span><span class="c-text">Pasa el ratón o toca un término punteado y verás qué significa sin salir de la idea.</span></div>
          </div>
          <div class="bfg-cols">
            <div><span class="c-label">Atajos de teclado</span>
              <dl class="bfg-keys"><dt><kbd>/</kbd> o <kbd>Ctrl</kbd><kbd>K</kbd></dt><dd>Buscar en toda la serie</dd><dt><kbd>↓</kbd> <kbd>↑</kbd></dt><dd>Idea siguiente / anterior</dd><dt><kbd>Esc</kbd></dt><dd>Cerrar el detalle o un panel</dd><dt><kbd>?</kbd></dt><dd>Esta ayuda</dd></dl></div>
            ${P.length ? `<div><span class="c-label">Dudas frecuentes${slugActual ? ' de este artículo' : ''}</span><ul class="bfg-q">${P.map(([t, a, id, b]) => `<li><a href="${urlIdea(a, id)}"><span class="bfb-b">${b}</span>${esc(t)}</a></li>`).join('')}</ul></div>` : ''}
          </div>
          <div class="bfg-acc"><button type="button" class="btn" data-buscar>Buscar en la serie</button><a class="btn ghost" href="${url('glosario/')}">Glosario</a></div>
        </div>`;
        document.body.appendChild(guia);
        guia.addEventListener('click', (e) => {
          if (e.target === guia || e.target.closest('.bfg-x')) return cerrarGuia();
          const a = e.target.closest('a[href]');
          if (a && a.hash && !e.metaKey && !e.ctrlKey) { e.preventDefault(); cerrarGuia(); ir(a.href); }
        });
      }
      guia.classList.add('is-open'); document.body.classList.add('l2-lock');
      guia.querySelector('.bfg-x').focus();
    });
  };
  const cerrarGuia = () => { if (guia && guia.classList.contains('is-open')) { guia.classList.remove('is-open'); document.body.classList.remove('l2-lock'); } };
  const cerrarTodo = () => { cerrarBuscador(); cerrarGuia(); cerrarPop(); };

  // ---------- Atajos y botones globales ----------
  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-buscar]');
    if (b) { e.preventDefault(); abrirBuscador({ bloque: b.dataset.buscarBloque, q: b.dataset.buscarQ, tipo: b.dataset.buscarTipo }); return; }
    const g = e.target.closest('[data-guia]');
    if (g) { e.preventDefault(); abrirGuia(); }
  });
  document.addEventListener('keydown', (e) => {
    const enCampo = e.target.closest && e.target.closest('input, textarea, select, [contenteditable]');
    if ((e.key === 'k' || e.key === 'K') && (e.ctrlKey || e.metaKey)) { e.preventDefault(); abrirBuscador(); return; }
    if (e.key === 'Escape') { cerrarTodo(); return; }
    if (enCampo || e.ctrlKey || e.metaKey || e.altKey) return;
    if (document.getElementById('crs-dialog') || document.querySelector('#l2-modal.is-visible')) return;
    if (e.key === '/') { e.preventDefault(); abrirBuscador(); }
    else if (e.key === '?') { e.preventDefault(); abrirGuia(); }
  });

  // Menú en cartucho: Glosario, Buscar y Ayuda en todas las páginas
  const menu = document.querySelector('#menu-content nav');
  if (menu && !menu.querySelector('[data-buscar]')) {
    const enGlosario = /\/glosario\/?$/.test(location.pathname);
    if (!menu.querySelector('a[href$="glosario/"]')) menu.insertAdjacentHTML('beforeend', `<a class="menu-link${enGlosario ? ' is-current' : ''}" href="${url('glosario/')}">Glosario</a>`);
    menu.insertAdjacentHTML('beforeend', `<button type="button" class="menu-link bf-menu-btn" data-buscar>Buscar <kbd>/</kbd></button><button type="button" class="menu-link bf-menu-btn" data-guia aria-label="Ayuda">?</button>`);
  }

  // Artículo: botones Buscar y Ayuda en el menú de diapositivas (lateral y hoja móvil)
  if (esArticulo) {
    const herr = () => `<div class="bf-tools"><button type="button" class="bf-tool" data-buscar><svg width="13" height="13" viewBox="0 0 20 20" aria-hidden="true"><circle cx="8.5" cy="8.5" r="6" fill="none" stroke="currentColor" stroke-width="3"/><path d="M13 13l5 5" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>Buscar<kbd>/</kbd></button><button type="button" class="bf-tool q" data-guia aria-label="Cómo se lee">?</button></div>`;
    const side = document.querySelector('#deck-nav > ol');
    if (side) side.insertAdjacentHTML('beforebegin', herr());
    const sheet = document.querySelector('#deck-sheet > ol');
    if (sheet) sheet.insertAdjacentHTML('beforebegin', herr());
  }

  // ---------- Definiciones al pasar (artículos) ----------
  let pop = null, popTerm = null, popT = 0;
  const cerrarPop = () => { if (pop) pop.hidden = true; if (popTerm) popTerm.setAttribute('aria-expanded', 'false'); popTerm = null; };
  const mostrarPop = (el) => {
    const g = (window.BF_GLOSARIO || []).find((x) => x.id === el.dataset.gl);
    if (!g) return;
    if (!pop) {
      pop = document.createElement('div'); pop.id = 'bf-pop'; pop.setAttribute('role', 'tooltip'); pop.hidden = true;
      document.body.appendChild(pop);
      pop.addEventListener('mouseleave', () => setTimeout(() => { if (!pop.matches(':hover') && !(popTerm && popTerm.matches(':hover'))) cerrarPop(); }, 150));
    }
    const B = BLOQUES.find(([r]) => r === g.b);
    pop.innerHTML = `<span class="c-label">Glosario${B ? ' · ' + B[0] + ' ' + B[1] : ''}</span><b>${esc(g.t)}</b><span class="mono">${esc(g.en)}</span><p>${esc(g.d)}</p><a href="${urlTermino(g)}">Ficha completa: error típico y dónde se explica →</a>`;
    pop.hidden = false;
    if (popTerm) popTerm.setAttribute('aria-expanded', 'false');
    popTerm = el; el.setAttribute('aria-expanded', 'true'); popT = Date.now();
    const r = el.getBoundingClientRect(), w = Math.min(340, innerWidth - 24);
    pop.style.width = w + 'px';
    pop.style.left = Math.max(12, Math.min(innerWidth - w - 12, r.left + r.width / 2 - w / 2)) + 'px';
    const h = pop.offsetHeight;
    const arriba = r.bottom + h + 12 > innerHeight && r.top - h - 12 > 0;
    pop.style.top = (arriba ? r.top - h - 10 : r.bottom + 10) + 'px';
  };
  // Marca la primera aparición de cada término en un contenedor (sin tocar enlaces, botones ni ejemplos por país)
  const marcarTerminos = (cont, vistos) => {
    const G = window.BF_GLOSARIO || [];
    const alias = [];
    G.forEach((g) => [g.t.split(' (')[0], ...g.al].forEach((a) => { if (a.length > 3) alias.push([a, g.id]); }));
    alias.sort((x, y) => y[0].length - x[0].length);
    const tw = document.createTreeWalker(cont, NodeFilter.SHOW_TEXT, {
      acceptNode: (n) => (n.parentElement.closest('a, button, [data-pais], .gl-term, code, pre, svg, .sw, .tag, .kicker-y, .label, .c-label') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT)
    });
    const nodos = []; while (tw.nextNode()) nodos.push(tw.currentNode);
    nodos.forEach((n) => {
      let txt = n.textContent; const nt = norm(txt);
      for (const [a, id] of alias) {
        if (vistos.has(id)) continue;
        const na = norm(a);
        const re = new RegExp(`(^|[^a-z0-9])(${na.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&')})(?=[^a-z0-9]|$)`);
        const m = nt.match(re);
        if (!m) continue;
        const i = m.index + m[1].length;
        const span = document.createElement('button');
        span.type = 'button'; span.className = 'gl-term'; span.dataset.gl = id;
        span.setAttribute('aria-expanded', 'false');
        span.textContent = txt.slice(i, i + a.length);
        const resto = n.splitText(i); resto.textContent = resto.textContent.slice(a.length);
        n.parentNode.insertBefore(span, resto);
        vistos.add(id);
        return; // un término por nodo de texto: el resto del nodo se revisa en la siguiente pasada
      }
    });
  };
  if (esArticulo) {
    cargar('glosario.js').then(() => {
      if (!(window.BF_GLOSARIO || []).length) return;
      document.querySelectorAll('.deck > .slide').forEach((s) => {
        const vistos = new Set();
        s.querySelectorAll('.slide-lead, .c-text').forEach((c) => { for (let k = 0; k < 3; k++) marcarTerminos(c, vistos); });
      });
      // Capa 2: se marcan los términos cada vez que se abre una ficha
      const body = document.getElementById('l2-body');
      if (body) new MutationObserver(() => {
        if (body.querySelector('.gl-term')) return;
        const vistos = new Set();
        body.querySelectorAll('p, li, .c-text').forEach((c) => marcarTerminos(c, vistos));
      }).observe(body, { childList: true });
    });
    const hover = matchMedia('(hover: hover)').matches;
    document.addEventListener('click', (e) => {
      const t = e.target.closest('.gl-term');
      if (t) { e.preventDefault(); e.stopPropagation(); if (popTerm === t && !hover && Date.now() - popT > 400) cerrarPop(); else mostrarPop(t); return; }
      if (pop && !pop.hidden && !e.target.closest('#bf-pop')) cerrarPop();
    }, true);
    if (hover) {
      document.addEventListener('mouseover', (e) => { const t = e.target.closest('.gl-term'); if (t && t !== popTerm) mostrarPop(t); });
      document.addEventListener('mouseout', (e) => {
        const t = e.target.closest('.gl-term');
        if (t) setTimeout(() => { if (popTerm === t && !t.matches(':hover') && !(pop && pop.matches(':hover'))) cerrarPop(); }, 200);
      });
    }
    addEventListener('scroll', () => { if (pop && !pop.hidden && !(pop.matches(':hover'))) cerrarPop(); }, { passive: true });
    document.addEventListener('focusin', (e) => { const t = e.target.closest && e.target.closest('.gl-term'); if (t) mostrarPop(t); });
  }

  // ---------- Portada: dudas frecuentes, bloques y filtros ----------
  const dudas = document.getElementById('bf-dudas');
  if (dudas) datos().then(() => {
    const P = window.BF_PREGUNTAS || [];
    dudas.innerHTML = P.map(([t, a, id, b]) => {
      const x = ((window.BF_INDICE || {}).ideas || []).find((i) => i.a === a && i.id === id) || {};
      return `<li><a href="${urlIdea(a, id)}"><span class="bfd-b">${b}</span><b>${esc(t)}</b><span class="bfd-r">${esc(x.h || '')} <span aria-hidden="true">→</span></span><span class="bfd-a">${art(a).numero || ''} · ${esc(art(a).titulo || '')}</span></a></li>`;
    }).join('');
  });
  const bloques = document.getElementById('bf-bloques');
  if (bloques) datos().then(() => {
    const I = ((window.BF_INDICE || {}).ideas || []).filter((x) => !ficticio(x.a));
    bloques.innerHTML = BLOQUES.map(([r, n, d]) => {
      const L = I.filter((x) => x.b === r);
      return `<li><button type="button" data-buscar data-buscar-bloque="${r}" data-buscar-tipo="idea"><span class="bfk-r">${r}</span><b>${n}</b><span class="bfk-d">${d}</span><span class="bfk-n">${L.length} ${L.length === 1 ? 'idea' : 'ideas'}</span></button></li>`;
    }).join('');
  });
  const filtros = document.getElementById('bf-filtros');
  const lista = document.getElementById('article-list');
  if (filtros && lista) {
    const temas = [...new Set(serie.map((a) => a.tema))];
    let tema = '', ocultarFicticios = false;
    const aplicar = () => {
      [...lista.children].forEach((li, k) => {
        const a = serie[k]; if (!a) return;
        li.hidden = (tema && a.tema !== tema) || (ocultarFicticios && a.estado === 'relleno');
      });
      filtros.querySelectorAll('[data-tema]').forEach((b) => b.setAttribute('aria-pressed', b.dataset.tema === tema));
      const n = [...lista.children].filter((li) => !li.hidden).length;
      filtros.querySelector('.bff-n').textContent = `${n} de ${serie.length}`;
    };
    filtros.innerHTML = `<div role="group" aria-label="Filtrar por tema"><button type="button" class="bfb-f" data-tema="">Todos</button>${temas.map((t) => `<button type="button" class="bfb-f" data-tema="${esc(t)}">${esc(t)} <span>${serie.filter((a) => a.tema === t).length}</span></button>`).join('')}</div>
      <label class="bff-chk"><input type="checkbox"> Ocultar los ficticios</label><span class="label bff-n"></span>`;
    filtros.addEventListener('click', (e) => { const b = e.target.closest('[data-tema]'); if (b) { tema = b.dataset.tema; aplicar(); } });
    filtros.querySelector('input').addEventListener('change', (e) => { ocultarFicticios = e.target.checked; aplicar(); });
    aplicar();
  }

  // ---------- Página del glosario ----------
  const gl = document.getElementById('glosario-lista');
  if (gl) datos().then(() => {
    const G = [...(window.BF_GLOSARIO || [])].sort((x, y) => x.t.localeCompare(y.t, 'es'));
    const byId = (id) => G.find((g) => g.id === id);
    const D = (window.BF_INDICE || {}).donde || {};
    const I = (window.BF_INDICE || {}).ideas || [];
    const ctl = document.getElementById('glosario-filtros');
    let bl = '', q = '';
    const letra = (g) => norm(g.t[0]).toUpperCase();
    const ficha = (g) => {
      const B = BLOQUES.find(([r]) => r === g.b) || [];
      const donde = (D[g.id] || []).map(([a, id]) => { const x = I.find((i) => i.a === a && i.id === id) || {}; return `<li><a href="${urlIdea(a, id)}"><span class="mono">${art(a).numero || ''} · ${pad(x.i || 0)}</span>${esc(x.h || x.t || id)}${ficticio(a) ? ' <span class="tag">Ficticio</span>' : ''}</a></li>`; }).join('');
      return `<article class="gl-card" id="${g.slug}" data-b="${g.b}">
        <div class="gl-head"><span class="bfd-b" title="${B[1] || ''}">${g.b}</span><div><h3>${esc(g.t)}</h3><span class="mono">${esc(g.en)}</span></div></div>
        <p class="gl-d">${esc(g.d)}</p>
        ${g.err ? `<div class="gl-err"><span class="c-label">Error típico</span><p>${esc(g.err)}</p></div>` : ''}
        <details><summary>Más: en cada programa${g.ej ? ' y ejemplo' : ''}</summary>${g.eq ? `<p><span class="c-label">Equivalentes por programa</span><br>${esc(g.eq)}</p>` : ''}${g.ej ? `<p><span class="c-label">Ejemplo en España</span><br>${esc(g.ej)}</p>` : ''}</details>
        ${donde ? `<div class="gl-donde"><span class="c-label">Dónde se explica</span><ul>${donde}</ul></div>` : ''}
        ${g.rel.length ? `<div class="gl-rel"><span class="c-label">Relacionados</span><div>${g.rel.map(byId).filter(Boolean).map((r) => `<a class="chip" href="#${r.slug}">${esc(r.t.split(' (')[0])}</a>`).join('')}</div></div>` : ''}
      </article>`;
    };
    const pintarGl = () => {
      const nq = norm(q).trim();
      const L = G.filter((g) => (!bl || g.b === bl) && (!nq || norm([g.t, g.en, g.d, ...g.al].join(' ')).includes(nq)));
      const letras = [...new Set(L.map(letra))];
      ctl.querySelectorAll('[data-bloque]').forEach((b) => b.setAttribute('aria-pressed', b.dataset.bloque === bl));
      ctl.querySelector('.gl-az').innerHTML = [...new Set(G.map(letra))].map((l) => letras.includes(l) ? `<a href="#gl-${l}">${l}</a>` : `<span>${l}</span>`).join('');
      ctl.querySelector('.bff-n').textContent = `${L.length} de ${G.length} términos`;
      gl.innerHTML = L.length ? letras.map((l) => `<section class="gl-letra" id="gl-${l}"><h2 class="gl-L">${l}</h2><div class="gl-grid">${L.filter((g) => letra(g) === l).map(ficha).join('')}</div></section>`).join('')
        : `<div class="bfb-vacio"><b>Ningún término con «${esc(q)}».</b><p>Prueba el <button type="button" class="linklike" data-buscar data-buscar-q="${esc(q)}">buscador de toda la serie</button>.</p></div>`;
    };
    ctl.innerHTML = `<label class="gl-q"><svg width="16" height="16" viewBox="0 0 20 20" aria-hidden="true"><circle cx="8.5" cy="8.5" r="6" fill="none" stroke="#000" stroke-width="2.5"/><path d="M13 13l5 5" stroke="#000" stroke-width="2.5" stroke-linecap="round"/></svg><input type="search" placeholder="Filtrar términos (también en inglés)" aria-label="Filtrar términos"></label>
      <div role="group" aria-label="Bloque"><button type="button" class="bfb-f" data-bloque="">Todos</button>${BLOQUES.map(([r, n]) => `<button type="button" class="bfb-f" data-bloque="${r}">${r} · ${n}</button>`).join('')}</div>
      <nav class="gl-az" aria-label="Índice alfabético"></nav><span class="label bff-n"></span>`;
    ctl.querySelector('input').addEventListener('input', (e) => { q = e.target.value; pintarGl(); });
    ctl.addEventListener('click', (e) => { const b = e.target.closest('[data-bloque]'); if (b) { bl = b.dataset.bloque; pintarGl(); } });
    pintarGl();
    const destacar = () => {
      const t = location.hash && document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (t && t.classList.contains('gl-card')) { t.scrollIntoView({ block: 'center' }); t.classList.remove('is-target'); void t.offsetWidth; t.classList.add('is-target'); }
    };
    destacar(); addEventListener('hashchange', destacar);
  });

  // ---------- Idioma: siempre a la vista y a un clic (los enlaces y el destino los da idioma.js) ----------
  // Artículo: fila «Idioma» en el menú de diapositivas (lateral y hoja móvil). Resto de páginas: botón fijo arriba a la derecha.
  // Si el navegador o una elección anterior piden otro idioma en el que existe esta página, se ofrece una vez, sin redirigir.
  const conIdiomas = (fn, n = 0) => {
    if (window.BF_I18N && window.BF_I18N.preparado) return window.BF_I18N.preparado(fn);
    if (n < 50) setTimeout(() => conIdiomas(fn, n + 1), 100);
  };
  conIdiomas(() => {
    const I18N = window.BF_I18N;
    const L = I18N.idiomas();
    if (L.length < 2) return;
    const grupo = (cls) => `<div class="bf-lang ${cls}" role="group" aria-label="Idioma · Language" data-i18n-no>${L.map((x) => x.actual
      ? `<span class="is-current" lang="${x.l}" title="${x.n}">${x.l.toUpperCase()}</span>`
      : `<a href="${I18N.destino(x.l)}" hreflang="${x.l}" lang="${x.l}" title="${x.n}${x.existe ? '' : ' · home'}" data-lang-to="${x.l}">${x.l.toUpperCase()}</a>`).join('')}</div>`;
    if (esArticulo) document.querySelectorAll('.bf-tools').forEach((t) => t.insertAdjacentHTML('afterend', `<div class="bf-lang-fila"><span class="label">Idioma</span>${grupo('')}</div>`));
    // Botón fijo: en los artículos solo cuando no se ve el menú lateral (móvil y tableta)
    if (!document.getElementById('bf-lang-fijo')) document.body.insertAdjacentHTML('beforeend', `<div id="bf-lang-fijo"${esArticulo ? ' class="en-articulo"' : ''}>${grupo('')}</div>`);
    // Sugerencia única
    const ls = (k, v) => { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { /* sin almacenamiento */ } return null; };
    const navegador = ((navigator.languages || [navigator.language || ''])[0] || '').slice(0, 2).toLowerCase();
    const pref = ls('bf-lang') || navegador;
    const otro = L.find((x) => x.l === pref && !x.actual && x.existe);
    if (!otro || ls('bf-lang-aviso') === pref + '>' + I18N.lang) return;
    const TXT = {
      es: ['Esta página también está en español.', 'Leer en español'],
      en: ['This page is also available in English.', 'Read in English'],
      de: ['Diese Seite gibt es auch auf Deutsch.', 'Auf Deutsch lesen']
    };
    const QUEDAR = { es: 'Seguir en español', en: 'Stay in English', de: 'Auf Deutsch bleiben' };
    const t = TXT[otro.l]; if (!t) return;
    document.body.insertAdjacentHTML('beforeend', `<div id="bf-lang-aviso" role="status" data-i18n-no lang="${otro.l}">
      <span class="label">${otro.l.toUpperCase()} · ${otro.n}</span><p>${t[0]}</p>
      <div><a class="btn" href="${I18N.destino(otro.l)}" data-lang-to="${otro.l}">${t[1]}</a><button type="button" class="crs-skip" lang="${I18N.lang}">${QUEDAR[I18N.lang] || 'OK'}</button></div></div>`);
    const av = document.getElementById('bf-lang-aviso');
    av.querySelector('button').addEventListener('click', () => { ls('bf-lang', I18N.lang); ls('bf-lang-aviso', pref + '>' + I18N.lang); av.remove(); });
  });

  // ---------- Rueda del ratón: sobre la banda del menú solo se mueve el menú; sobre las slides, las slides ----------
  const banda = document.getElementById('deck-nav');
  if (banda) banda.addEventListener('wheel', (e) => {
    if (e.ctrlKey) return; // zoom del navegador
    e.preventDefault();
    const ol = banda.querySelector(':scope > ol');
    if (!ol) return;
    const k = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? ol.clientHeight : 1;
    ol.scrollTop += e.deltaY * k;
  }, { passive: false });
})();
