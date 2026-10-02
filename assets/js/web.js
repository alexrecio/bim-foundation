// Comportamiento común: menú en cartucho, índice automático del artículo,
// barra de progreso de lectura y navegación entre artículos de la serie.
(function () {
  const root = document.documentElement.dataset.root || './';
  // Enlaces a páginas: en el idioma del lector si existe (assets/js/idioma.js); en ES, igual que root + ruta
  const url = (p) => (window.BF_I18N ? window.BF_I18N.url(p) : root + p);

  // El punto amarillo de los titulares no se queda solo en una línea: se une a la última palabra
  document.querySelectorAll('.display > .dot, .display .hl-y > .dot').forEach((dot) => {
    const prev = dot.previousSibling;
    if (!prev || prev.nodeType !== 3) return;
    const m = prev.textContent.match(/^([\s\S]*?)(\S+)$/);
    if (!m) return;
    prev.textContent = m[1];
    const w = document.createElement('span');
    w.style.whiteSpace = 'nowrap';
    w.textContent = m[2];
    dot.replaceWith(w);
    w.appendChild(dot);
  });

  // Menú: el círculo se despliega como en el portfolio
  const capsule = document.getElementById('nav-capsule');
  const trigger = document.getElementById('menu-trigger');
  if (capsule && trigger) {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = capsule.classList.toggle('menu-open');
      trigger.setAttribute('aria-expanded', open);
    });
    document.addEventListener('click', (e) => { if (!capsule.contains(e.target)) capsule.classList.remove('menu-open'); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') capsule.classList.remove('menu-open'); });
  }

  // Índice: se construye con los <section id> + <h2> del artículo
  const toc = document.querySelector('.toc ol');
  const sections = [...document.querySelectorAll('.prose > section[id]')];
  if (toc && sections.length) {
    sections.forEach((s, i) => {
      const h = s.querySelector('h2');
      const num = s.querySelector('.sec-num');
      if (num && !num.textContent.trim()) num.textContent = String(i + 1).padStart(2, '0');
      const li = document.createElement('li');
      li.innerHTML = `<a href="#${s.id}">${h.dataset.short || h.textContent.replace(/\.$/, '')}</a>`;
      toc.appendChild(li);
    });
    const links = [...toc.querySelectorAll('a')];
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          links.forEach((a) => a.classList.toggle('is-current', a.getAttribute('href') === '#' + en.target.id));
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px' });
    sections.forEach((s) => io.observe(s));
  }

  // Barra de progreso
  const bar = document.getElementById('progress');
  if (bar) {
    const upd = () => {
      const h = document.documentElement.scrollHeight - innerHeight;
      bar.style.width = (h > 0 ? (scrollY / h) * 100 : 0) + '%';
    };
    addEventListener('scroll', upd, { passive: true }); upd();
  }

  const serie = window.SERIE || [];
  const fmtFecha = (f) => {
    const [y, m] = (f || '').split('-');
    const meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
    return m ? `${meses[+m - 1]} ${y}` : y || '';
  };

  // Identidad común: cada artículo tiene la misma «cubierta» (número, ilustración y tema sobre papel cuadriculado)
  const ESTADOS = { borrador: 'Borrador', proximamente: 'Próximamente', relleno: 'Relleno ficticio' };
  const icono = (a) => `${root}assets/img/iconos/${a.slug || '_plantilla'}.svg`;
  const cover = (a) => `<div class="cover" aria-hidden="true"><span class="cover-n">${a.numero || 'NN'}</span>` +
    `<img src="${root}assets/img/cubiertas/${a.slug || '_plantilla'}.svg" alt="" onerror="this.src='${root}assets/img/cubiertas/_plantilla.svg'">` +
    `<span class="cover-t">${a.tema || 'Tema'}</span><span class="cover-bf">k</span></div>`;

  // Portada de la web: rejilla de artículos con su cubierta
  const list = document.getElementById('article-list');
  if (list) {
    list.innerHTML = serie.map((a) => {
      const soon = a.estado === 'proximamente';
      const estado = ESTADOS[a.estado];
      return `<li class="article-item${soon ? ' is-soon' : ''}"><a href="${url(`articulos/${a.slug}/`)}">
        ${cover(a)}
        <div class="article-body"><h3>${a.titulo}</h3>
          <div class="meta">${fmtFecha(a.fecha)} · ${a.lectura}${estado ? ` <span class="soon">${estado}</span>` : ''}</div>
          <p>${a.resumen}</p></div>
      </a></li>`;
    }).join('');
  }

  // Artículo: ficha de identidad en la portada ([data-ficha]) y pictograma en el menú de diapositivas
  const slugActual = document.documentElement.dataset.slug;
  const actual = serie.find((a) => a.slug === slugActual) || { slug: '', numero: 'NN', titulo: document.title.split(' | ')[0], tema: 'Tema', lectura: '', fecha: '' };
  document.querySelectorAll('[data-ficha]').forEach((el) => {
    const estado = ESTADOS[actual.estado];
    el.innerHTML = `${cover(actual)}<div class="ficha-info">
      <span class="c-label">Serie kernel</span>
      <span class="c-title">Artículo ${actual.numero}</span>
      <div class="chips"><span class="chip y">${actual.lectura}</span>${actual.fecha ? `<span class="chip">${fmtFecha(actual.fecha)}</span>` : ''}</div>
      ${estado ? `<span class="badge n">${estado}</span>` : ''}</div>`;
  });
  const dn = document.querySelector('#deck-nav > .kicker-y');
  if (dn) dn.insertAdjacentHTML('beforebegin', `<img class="deck-ico" src="${icono(actual)}" alt="">`);

  // Artículo: anterior / siguiente
  const nav = document.getElementById('series-nav');
  const slug = document.documentElement.dataset.slug;
  if (nav && slug) {
    const pub = serie.filter((a) => a.estado !== 'proximamente');
    const i = pub.findIndex((a) => a.slug === slug);
    const card = (a, cls, label) => a
      ? `<a class="${cls}" href="${url(`articulos/${a.slug}/`)}"><span class="label">${label} · ${a.numero}</span><b>${a.titulo}</b></a>`
      : `<div class="empty ${cls}"><span class="label">${label}</span><b>${cls === 'next' ? 'Próximamente' : 'Primer artículo'}</b></div>`;
    nav.innerHTML = card(pub[i - 1], 'prev', '← Anterior') + card(pub[i + 1], 'next', 'Siguiente →');
  }
})();

// Artículo en dos capas: diapositivas (capa 1) y fichas emergentes (capa 2)
(function () {
  const slides = [...document.querySelectorAll('.deck > .slide[id]')];
  if (!slides.length) return;
  const pad = (n) => String(n).padStart(2, '0');
  const total = pad(slides.length);
  // Titulares: reducen el tamaño si una palabra larga no cabe en su columna (en vez de partirla)
  const fit = () => document.querySelectorAll('.slide .b-title .display').forEach((h) => {
    h.style.fontSize = '';
    // Medir sin cortes de palabra: si una palabra no cabe, se reduce el tamaño en vez de partirla
    Object.assign(h.style, { overflowWrap: 'normal', wordBreak: 'normal', hyphens: 'manual' });
    let size = parseFloat(getComputedStyle(h).fontSize);
    while (h.scrollWidth > h.clientWidth + 1 && size > 24) { size -= 2; h.style.fontSize = size + 'px'; }
    if (h.scrollWidth > h.clientWidth + 1) Object.assign(h.style, { overflowWrap: '', wordBreak: '', hyphens: '' });
  });
  fit(); addEventListener('resize', fit); if (document.fonts) document.fonts.ready.then(fit);
  const titleOf = (s) => s.dataset.nav || ((s.querySelector('h1, h2') || {}).textContent || '').replace(/\.$/, '');

  // Numeración y menú con los títulos de cada diapositiva (lateral en escritorio, hoja inferior en móvil)
  // Capítulos (hilo narrativo): data-cap en la primera slide de cada capítulo
  let cap = '';
  const caps = slides.map((s) => (cap = s.dataset.cap || cap));
  // Menú plegable por capítulos: solo se despliega el del visitante (los demás se abren al pulsar su cabecera)
  const item = (s, i) => `<li class="nav-item"><a href="#${s.id}" data-i="${i}"><span>${pad(i + 1)}</span>${titleOf(s)}</a></li>`;
  const list = () => {
    let html = '', g = -1, open = false;
    slides.forEach((s, i) => {
      if (s.dataset.cap) {
        if (open) html += '</ol></li>';
        g++; open = true;
        const n = caps.filter((c) => c === s.dataset.cap).length;
        html += `<li class="nav-group" data-g="${g}"><button type="button" class="nav-cap" aria-expanded="false"><b>${s.dataset.cap}</b><em>${n}</em><i aria-hidden="true"></i></button><ol>`;
      }
      html += item(s, i);
    });
    return html + (open ? '</ol></li>' : '');
  };
  slides.forEach((s, i) => {
    const n = s.querySelector('.slide-n');
    if (n) n.innerHTML = `${pad(i + 1)} / ${total}` + (caps[i] ? `<b class="slide-cap">${caps[i]}</b>` : '');
    if (s.dataset.cap) s.classList.add('is-cap-start');
  });
  const side = document.querySelector('#deck-nav ol');
  const sheet = document.querySelector('#deck-sheet ol');
  if (side) side.innerHTML = list();
  if (sheet) sheet.innerHTML = list();
  const groupOf = (i) => { const k = caps.slice(0, i + 1).filter((c, j) => slides[j].dataset.cap).length - 1; return k; };
  const openGroup = (k) => document.querySelectorAll('.nav-group').forEach((li) => {
    const on = +li.dataset.g === k;
    li.classList.toggle('is-here', on);
    if (li.closest('#deck-nav')) return; // escritorio: solo portada y bloques; cada bloque se despliega al pulsarlo
    li.classList.toggle('is-open', on);
    li.querySelector('.nav-cap').setAttribute('aria-expanded', on);
  });
  document.querySelectorAll('.nav-cap').forEach((btn) => btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const li = btn.parentElement; const on = li.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', on);
  }));
  const bar = document.getElementById('deck-bar');
  const barBtn = document.getElementById('deck-bar-btn');
  if (barBtn) barBtn.addEventListener('click', (e) => {
    e.stopPropagation(); bar.classList.toggle('is-open'); barBtn.setAttribute('aria-expanded', bar.classList.contains('is-open'));
    const cur = sheet && sheet.querySelector('a.is-current');
    if (cur) sheet.parentElement.scrollTop = cur.offsetTop - sheet.parentElement.clientHeight / 2;
  });
  document.addEventListener('click', (e) => { if (bar && !bar.contains(e.target)) bar.classList.remove('is-open'); });
  if (sheet) sheet.addEventListener('click', (e) => { if (e.target.closest('a')) bar.classList.remove('is-open'); });

  let current = -1;
  const setCurrent = (i) => {
    if (i === current) return;
    if (current < 0 || groupOf(i) !== groupOf(current)) openGroup(groupOf(i));
    current = i;
    document.querySelectorAll('.nav-item a').forEach((a) => {
      const k = +a.dataset.i;
      a.classList.toggle('is-current', k === i);
      a.classList.toggle('is-done', k < i);
      if (k === i) a.setAttribute('aria-current', 'step'); else a.removeAttribute('aria-current');
    });
    const cur = side && side.querySelector('a.is-current');
    if (cur) cur.scrollIntoView({ block: 'nearest' });
    if (barBtn) barBtn.querySelector('.n').textContent = `${pad(i + 1)}/${total}`, barBtn.querySelector('.t').textContent = titleOf(slides[i]);
  };
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) setCurrent(slides.indexOf(en.target)); });
  }, { rootMargin: '-45% 0px -45% 0px' });
  slides.forEach((s) => io.observe(s));
  setCurrent(0);


  // Iconos de programas y formatos (monogramas con los colores de la web, no los logotipos)
  // [nombre, monograma, tipo (p programa · e estándar abierto · f formato), logotipo opcional en assets/img/sw]
  const SW = [
    ['Autodesk Construction Cloud', 'ACC', 'p', 'autodesk.svg'], ['Autodesk Forma', 'Fo', 'p', 'autodesk.svg'], ['Autodesk Docs', 'Do', 'p', 'autodesk.svg'], ['Trimble Connect', 'TC', 'p', 'trimble.svg'], ['BIMcollab Zoom', 'Zm', 'p', 'bimcollab.svg'], ['BIMcollab', 'BC', 'p', 'bimcollab.svg'],
    ['Model Checker', 'MC', 'p'], ['IFCGeoRefChecker', 'GR', 'p'], ['IfcOpenShell', 'IOS', 'p', 'ifcopenshell.png'], ['IfcTester', 'IT', 'p', 'ifctester.svg'], ['IfcClash', 'IC', 'p', 'ifcopenshell.png'], ['IfcGref', 'Gf', 'p'], ['IFC Georeferencer', 'Gr', 'p'],
    ['Civil 3D', 'C3D', 'p', 'civil3d.svg'], ['Navisworks', 'Nw', 'p', 'navisworks.svg'], ['Revit', 'Rv', 'p', 'revit.svg'], ['Archicad', 'Ac', 'p', 'archicad.svg'], ['Tekla', 'Tk', 'p', 'tekla.svg'], ['Allplan', 'Al', 'p', 'allplan.svg'], ['Vectorworks', 'Vw', 'p', 'vectorworks.svg'],
    ['BricsCAD', 'Bc', 'p'], ['Bentley iTwin', 'iT', 'p', 'bentley.svg'], ['Bentley', 'Bn', 'p', 'bentley.svg'], ['Bonsai', 'Bo', 'p', 'bonsai.png'], ['Solibri', 'Sb', 'p'], ['ArcGIS', 'Ag', 'p', 'arcgis.svg'], ['Forma', 'Fo', 'p'],
    ['ReCap', 'Rc', 'p'], ['Plannerly', 'Pl', 'p'], ['Dynamo', 'Dy', 'p', 'dynamo.png'], ['CloudCompare', 'CC', 'p', 'cloudcompare.svg'], ['epsg.io', 'ep', 'p'],
    ['Revizto', 'Rz', 'p'], ['Dalux', 'Dx', 'p'], ['Catenda Hub', 'Ca', 'p'], ['Aconex', 'Ax', 'p'], ['Procore', 'Pc', 'p'], ['MicroStation', 'MS', 'p', 'bentley.svg'],
    ['Autodesk Tandem', 'Td', 'p', 'autodesk.svg'], ['Nemetschek dTwin', 'dT', 'p'], ['3DEXPERIENCE', '3DX', 'p'], ['Willow', 'Wi', 'p'], ['Siemens Building X', 'BX', 'p'], ['Unreal Engine', 'UE', 'p'], ['Unity', 'Un', 'p'], ['NVIDIA Omniverse', 'Ov', 'p'], ['Cesium ion', 'Cs', 'p'], ['Azure Digital Twins', 'ADT', 'p'], ['AWS IoT TwinMaker', 'TM', 'p'], ['Eclipse Ditto', 'Di', 'p'],
    ['Oracle Aconex', 'Ax', 'p'], ['Asite', 'As', 'p'], ['Catenda', 'Ca', 'p'], ['Viewpoint For Projects', 'VP', 'p', 'trimble.svg'], ['Thinkproject', 'tp', 'p'], ['SharePoint', 'SP', 'p'], ['usBIM', 'us', 'p'], ['ProjectWise', 'PW', 'p', 'bentley.svg'], ['Atvero', 'At', 'p'],
    ['OpenCDE', 'oC', 'e'], ['ICDD', 'ICDD', 'e'], ['DIN SPEC', 'DIN', 'e'],
    ['COBie', 'CB', 'e'], ['Brick', 'Br', 'e'], ['DTDL', 'DT', 'e'],
    ['bSDD', 'bSDD', 'e', 'buildingsmart.png'], ['Presto', 'Pr', 'p'], ['IDS', 'IDS', 'e', 'ids.svg'], ['BCF', 'BCF', 'e', 'buildingsmart.png'], ['IFC', 'IFC', 'e', 'buildingsmart.png'], ['DWG', 'DWG', 'f'], ['RVT', 'RVT', 'f'], ['E57', 'E57', 'f'], ['LAS', 'LAS', 'f'], ['NWC', 'NWC', 'f'], ['XML', 'XML', 'f']
  ];
  const swIcon = (el) => {
    if (!el || el.querySelector('.sw')) return;
    const t = el.textContent.trim();
    const hit = SW.find(([n]) => t === n || t.startsWith(n + ' ') || t.startsWith(n + ':') || t.startsWith(n + ',') || t.startsWith(n + '·') || t.startsWith(n + ' ·'));
    if (!hit) return;
    const i = document.createElement('span');
    i.className = 'sw sw-' + hit[2]; i.setAttribute('aria-hidden', 'true');
    if (hit[3]) { // logotipo oficial en una sola tinta (assets/img/sw), coloreado con currentColor
      i.classList.add('sw-logo');
      i.innerHTML = `<i style="--logo:url('${document.documentElement.dataset.root || './'}assets/img/sw/${hit[3]}')"></i>`;
    } else i.textContent = hit[1];
    i.title = hit[0];
    el.prepend(i);
  };
  const swDecorate = (root) => root.querySelectorAll('.card .c-label, .b-title .kicker-y, .l2-head .kicker-y, .card h4, .table-wrap td:first-child, .table-wrap th').forEach((el) => {
    const s = el.closest('.slide');
    if (s && s.dataset.capI === '0') return; // bloque I: sin nombres de software
    swIcon(el);
  });
  slides.forEach((s, i) => { s.dataset.capI = String(caps.slice(0, i + 1).filter((c, j) => slides[j].dataset.cap).length - 1); });
  swDecorate(document);

  // Selector de país: marco geodésico oficial de cada país (datos en assets/js/paises.js)
  const PROY_SVG = {
    utm: '<path d="M20 50 a60 40 0 0 1 120 0 a60 40 0 0 1 -120 0Z" fill="none" stroke="#000" stroke-width="3"/>' + [40, 60, 80, 100, 120].map((x) => `<path d="M${x} ${14 + Math.abs(80 - x) / 6} V${86 - Math.abs(80 - x) / 6}" stroke="#000" stroke-width="2"/>`).join('') + '<rect x="80" y="14" width="20" height="72" fill="#FFFF00" stroke="#000" stroke-width="2.5"/>',
    tm: '<path d="M20 50 a60 40 0 0 1 120 0 a60 40 0 0 1 -120 0Z" fill="none" stroke="#000" stroke-width="3"/><rect x="62" y="12" width="36" height="76" fill="#FFFF00" stroke="#000" stroke-width="2.5"/>',
    lcc: '<path d="M20 70 a60 22 0 0 0 120 0" fill="none" stroke="#000" stroke-width="3"/><path d="M80 6 L28 66 M80 6 L132 66" stroke="#000" stroke-width="3" fill="none"/><path d="M45 47 a40 12 0 0 0 70 0" fill="none" stroke="#000" stroke-width="2"/><path d="M36 57 a48 14 0 0 0 88 0 L115 47 a40 12 0 0 1 -70 0Z" fill="#FFFF00" stroke="#000" stroke-width="2"/>',
    est: '<circle cx="80" cy="62" r="34" fill="none" stroke="#000" stroke-width="3"/><path d="M30 28 H130" stroke="#000" stroke-width="2"/><rect x="50" y="20" width="60" height="10" fill="#FFFF00" stroke="#000" stroke-width="2.5"/><circle cx="80" cy="28" r="4" fill="#000"/>',
    zonas: '<g stroke="#000" stroke-width="2.5" fill="#fff"><rect x="14" y="16" width="44" height="30"/><rect x="58" y="16" width="38" height="30"/><rect x="96" y="16" width="50" height="30"/><rect x="14" y="46" width="60" height="38"/><rect x="74" y="46" width="34" height="38" fill="#FFFF00"/><rect x="108" y="46" width="38" height="38"/></g>'
  };
  // País y sistema del lector: se eligen al entrar (ventana de bienvenida), se recuerdan entre artículos (localStorage)
  // y todos los ejemplos <span data-pais="campo"> se recalculan en ese sistema
  const P = window.BF_PAISES || [];
  const REG = [['EU', 'Europa'], ['AM', 'América'], ['AP', 'Asia y Oceanía'], ['MA', 'Oriente Medio y África']];
  const byId = (id) => P.find((x) => x.id === id);
  const ls = (k, v) => { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { /* sin almacenamiento */ } return null; };
  const paisGuess = () => {
    for (const l of navigator.languages || [navigator.language || '']) {
      const r = (l.split('-')[1] || '').toUpperCase();
      if (byId(r)) return r;
    }
    return 'ES';
  };
  let paisId = byId(ls('bf-pais')) ? ls('bf-pais') : paisGuess();
  const sysOf = (p, c) => (p.epsg.find(([k]) => k === +c) ? +c : p.key);
  let sysId = sysOf(byId(paisId) || P[0] || { epsg: [], key: 0 }, ls('bf-epsg'));
  const pc = () => '<span class="tag">Por confirmar</span>';
  const cur = () => byId(paisId);
  const sysRow = (p, c) => (p.epsg.find(([k]) => k === c) || p.epsg[0]);
  const sis = (p) => (p.sis || {})[sysId] || ['', null, 'm', '', '', 0, 0];
  // Números de ejemplo: el punto de la capital (o de la zona) con la misma parte local que usa el artículo (125,250 · 310,800)
  const fmt = (v, d = 3) => { const [n, x] = Math.abs(v).toFixed(d).split('.'); return (v < 0 ? '−' : '') + n.replace(/\B(?=(\d{3})+$)/g, ' ') + (d ? ',' + x : ''); };
  const big = (v) => Math.floor(v / 1000) * 1000;
  const ej = (p) => { const s2 = sis(p); return [big(s2[5]) + 125.25, big(s2[6]) + 310.8]; };
  const aprox = (v) => { const m = Math.abs(v) >= 100000 ? 100000 : 10000; return Math.floor(v / m) * m; };
  const CAMPOS = {
    nombre: (p) => p.nombre, datum: (p) => p.datum, 'datum-epsg': (p) => p.datumEpsg || '—', proy: (p) => p.proy,
    epsg: () => sysId, 'epsg-nombre': (p) => sysRow(p, sysId)[1], 'crs-nombre': (p) => sis(p)[0], 'datum-code': (p) => sis(p)[1] || '—',
    'zona-ifc': (p) => (sis(p)[4] ? `'${sis(p)[4]}'` : '$'), unidad: (p) => ({ m: 'm', ftUS: 'pies US', ft: 'pies' }[sis(p)[2]] || 'm'), metodo: (p) => sis(p)[3], zona: (p) => sis(p)[4] || '—',
    alt: (p) => p.alt || 'su sistema de altitudes', 'alt-epsg': (p) => p.altEpsg || '—', 'vdatum-code': (p) => p.vdc || '—',
    red: (p) => p.red || 'su red geodésica nacional', org: (p) => p.org,
    e: (p) => fmt(ej(p)[0]), n: (p) => fmt(ej(p)[1]), 'e-raw': (p) => ej(p)[0].toFixed(3), 'n-raw': (p) => ej(p)[1].toFixed(3),
    'e-big': (p) => fmt(big(ej(p)[0]), 0), 'n-big': (p) => fmt(big(ej(p)[1]), 0), 'e-small': () => '125,250', 'n-small': () => '310,800',
    'e-aprox': (p) => fmt(aprox(ej(p)[0]), 0), 'n-aprox': (p) => fmt(aprox(ej(p)[1]), 0),
    'n-bytes': (p) => ej(p)[1].toFixed(3).length,
    'topo-e': (p) => (big(ej(p)[0]) + 10).toFixed(3), 'topo-n': (p) => (big(ej(p)[1]) + 20).toFixed(3)
  };
  const paisTexts = () => { const p = cur(); if (!p) return; document.querySelectorAll('[data-pais]').forEach((el) => { const f = CAMPOS[el.dataset.pais]; if (f) el.textContent = f(p); }); };
  window.BF_CRS = { origen: () => { const p = cur(); if (!p) return null; const s2 = sis(p); return [big(s2[5]) + 100, big(s2[6]) + 200]; } };
  const dEpsg = (c) => (c ? 'EPSG ' + c : 'sin código EPSG');
  const codes = (p, btn) => p.epsg.map(([c, t]) => `<${btn ? 'button type="button"' : 'span'} class="paises-code${c === sysId ? ' is-key' : ''}" data-epsg="${c}"><b>${c}</b>${t}</${btn ? 'button' : 'span'}>`).join('');
  const paisCard = (p) => `
        <div class="paises-proy"><svg viewBox="0 0 160 100" class="draw" aria-hidden="true">${PROY_SVG[p.tipo] || PROY_SVG.utm}</svg><span class="c-label">Tu sistema</span><b>${sysRow(p, sysId)[1]}</b><span class="paises-desc">${p.proy}</span></div>
        <div><span class="c-label">Datum</span><b>${p.datum}</b><span class="mono">${dEpsg(p.datumEpsg)}</span></div>
        <div><span class="c-label">Altitudes</span>${p.alt ? `<b>${p.alt}</b><span class="mono">${dEpsg(p.altEpsg)}</span>` : `<b>Red nacional</b>${pc()}`}</div>
        <div><span class="c-label">Red geodésica</span><b class="paises-red">${p.red || '—'}</b><span class="mono"><a href="${p.url}" target="_blank" rel="noopener">${p.org}</a></span></div>
        <div class="paises-codes"><span class="c-label">Elige el sistema de tu obra · códigos EPSG para el BEP y el IFC</span><div>${codes(p, true)}</div><p>${p.obra ? p.obra + ' ' : ''}${p.revisar ? pc() + ' ' : ''}${(p.fuentes || []).length ? `Fuentes: ${p.fuentes.map((u, k) => `<a href="${u}" target="_blank" rel="noopener">${k + 1}</a>`).join(' · ')}` : ''}</p></div>`;
  const crsDraw = () => {
    const p = cur(); if (!p) return;
    document.querySelectorAll('.paises').forEach((el) => { el.querySelector('select').value = p.id; el.querySelector('.paises-out').innerHTML = paisCard(p); });
    document.querySelectorAll('.paises-tabla tr[data-p]').forEach((tr) => tr.classList.toggle('is-key', tr.dataset.p === p.id));
    document.querySelectorAll('[data-crs-chip]').forEach((b) => { b.innerHTML = `<span class="label">Tu sistema</span><b>${p.nombre} · EPSG ${sysId}</b><i>cambiar</i>`; });
    document.querySelectorAll('[data-crs-menu]').forEach((b) => { b.innerHTML = `<span>Tu sistema</span><span class="mono">EPSG ${sysId}</span>`; });
    paisTexts();
    document.dispatchEvent(new CustomEvent('bf-crs'));
  };
  const setCrs = (id, c) => {
    const p = byId(id); if (!p) return;
    paisId = id; sysId = sysOf(p, c);
    ls('bf-pais', id); ls('bf-epsg', String(sysId));
    crsDraw();
  };
  const paisSelect = (lbl = 'Tu país') => `<label class="paises-sel"><span class="label">${lbl}</span><select aria-label="Elegir país">${REG.map(([r, n]) => {
    const L = P.filter((p) => p.reg === r).sort((x, y) => x.nombre.localeCompare(y.nombre, 'es'));
    return L.length ? `<optgroup label="${n}">${L.map((p) => `<option value="${p.id}">${p.nombre}</option>`).join('')}</optgroup>` : '';
  }).join('')}</select></label>`;
  // Tabla completa para la capa 2 (<div class="paises-tabla"></div>)
  const paisesTabla = (el) => {
    const L = [...P].sort((x, y) => x.nombre.localeCompare(y.nombre, 'es'));
    el.innerHTML = `<div class="table-wrap"><table><thead><tr><th>País</th><th>Datum</th><th>Proyección</th><th>EPSG habitual</th><th>Altitudes</th><th>Red geodésica</th></tr></thead><tbody>${L.map((p) => `<tr data-p="${p.id}"${p.id === paisId ? ' class="is-key"' : ''}><td>${p.nombre}${p.revisar ? ' ' + pc() : ''}</td><td>${p.datum}${p.datumEpsg ? ` <span class="mono">${p.datumEpsg}</span>` : ''}</td><td>${p.proy}</td><td class="mono">${p.epsg.map(([c]) => c).join(' · ')}</td><td>${p.alt ? `${p.alt}${p.altEpsg ? ` <span class="mono">${p.altEpsg}</span>` : ''}` : pc()}</td><td>${p.red || '—'} · <a href="${p.url}" target="_blank" rel="noopener">${p.org}</a></td></tr>`).join('')}</tbody></table></div>`;
  };
  // Ventana de bienvenida: país + sistema; se abre la primera vez y desde «Tu sistema» en el menú
  const crsDialog = () => {
    if (document.getElementById('crs-dialog')) return;
    let did = paisId, dsys = sysId;
    const d = document.createElement('div');
    d.id = 'crs-dialog'; d.setAttribute('role', 'dialog'); d.setAttribute('aria-modal', 'true'); d.setAttribute('aria-labelledby', 'crs-t');
    const body = () => {
      const p = byId(did); const s2 = (p.sis || {})[dsys] || ['', null, 'm', '', '', 0, 0];
      return `<div class="crs-box">
        <span class="kicker-y">Antes de empezar</span>
        <h3 id="crs-t">¿En qué sistema trabajas<span class="dot">?</span></h3>
        <p>Los ejemplos de coordenadas del artículo se calculan en el sistema que elijas. Se recuerda en toda la serie.</p>
        ${paisSelect('País')}
        <span class="c-label">Sistema de coordenadas</span>
        <div class="crs-codes">${codes(p, true).replace(/is-key/g, '').replace(`data-epsg="${dsys}"`, `data-epsg="${dsys}" aria-pressed="true"`)}</div>
        <div class="crs-prev"><span class="label">Un punto de ejemplo en ${p.nombre}</span><b>E ${fmt(big(s2[5]) + 125.25)} · N ${fmt(big(s2[6]) + 310.8)}</b><span class="mono">${s2[0]}${s2[2] !== 'm' ? ' · en pies' : ''}</span></div>
        <div class="crs-actions"><button type="button" class="btn" data-crs-ok>Usar este sistema</button><button type="button" class="crs-skip" data-crs-skip>Ahora no</button></div>
      </div>`;
    };
    const paint = () => {
      d.innerHTML = body();
      d.querySelector('select').value = did;
      d.querySelector('select').addEventListener('change', (e) => { did = e.target.value; dsys = byId(did).key; paint(); });
      d.querySelectorAll('[data-epsg]').forEach((b) => b.addEventListener('click', () => { dsys = +b.dataset.epsg; paint(); }));
      d.querySelector('[data-crs-ok]').addEventListener('click', () => { setCrs(did, dsys); ls('bf-crs-ok', '1'); close(); });
      d.querySelector('[data-crs-skip]').addEventListener('click', () => { ls('bf-crs-ok', '1'); close(); });
    };
    const close = () => { d.remove(); document.removeEventListener('keydown', esc); };
    const esc = (e) => { if (e.key === 'Escape') { ls('bf-crs-ok', '1'); close(); } };
    paint(); document.body.appendChild(d); document.addEventListener('keydown', esc);
    d.querySelector('select').focus();
  };
  if (P.length) {
    document.querySelectorAll('.paises').forEach((el) => {
      el.innerHTML = `<div class="paises-bar">${paisSelect()}<span class="paises-hint">Se recuerda en todos los artículos</span></div><div class="paises-out" aria-live="polite"></div>`;
      el.querySelector('select').addEventListener('change', (e) => setCrs(e.target.value));
      el.addEventListener('click', (e) => { const b = e.target.closest('button[data-epsg]'); if (b) setCrs(paisId, b.dataset.epsg); });
    });
    // Botón «Tu sistema» en el menú de diapositivas (escritorio y móvil)
    const chip = () => {
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'crs-chip'; b.setAttribute('data-crs-chip', '');
      b.addEventListener('click', (e) => { e.stopPropagation(); crsDialog(); });
      return b;
    };
    const kn = document.querySelector('#deck-nav > .kicker-y'); if (kn) kn.after(chip());
    const so = document.querySelector('#deck-sheet > ol'); if (so) so.before(chip());
    // En escritorio el menú de diapositivas solo lleva el índice: «Tu sistema» pasa al cartucho
    const mn = document.querySelector('main.deck') && document.querySelector('#menu-content nav');
    if (mn) {
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'menu-link bf-menu-btn'; b.setAttribute('data-crs-menu', '');
      b.addEventListener('click', (e) => { e.stopPropagation(); crsDialog(); });
      mn.appendChild(b);
    }
    crsDraw();
    if (document.querySelector('main.deck') && !ls('bf-crs-ok') && !/[?&]sin-bienvenida/.test(location.search)) crsDialog();
  }

  // Lector de coordenadas: un cursor que se arrastra y se lee en tres sistemas
  document.querySelectorAll('.lector').forEach((el) => {
    let E0 = +el.dataset.e0, N0 = +el.dataset.n0; const S = 10; // 10 px = 1 m
    const IO = [80, 240], PB = [150, 200], V = [480, 80];
    const f = (v) => { const [n, d] = Math.abs(v).toFixed(2).split('.'); return (v < 0 ? '−' : '') + n.replace(/\B(?=(\d{3})+$)/g, '\u00a0') + ',' + d; };
    el.innerHTML = `
      <div class="lector-bar"><span class="label">Survey Point</span>
        <button type="button" class="chip is-on" data-sp="clip">Con clip</button><button type="button" class="chip" data-sp="libre">Sin clip, en el vértice</button></div>
      <svg viewBox="0 0 600 300" class="lector-svg" role="img" aria-label="Plano con origen interno, punto base, vértice topográfico y un cursor que se puede arrastrar">
        <g stroke="#E3E3DB" stroke-width="1">${Array.from({ length: 15 }, (_, k) => `<line x1="${k * 40 + 20}" y1="0" x2="${k * 40 + 20}" y2="300"/>`).join('')}${Array.from({ length: 8 }, (_, k) => `<line x1="0" y1="${k * 40}" x2="600" y2="${k * 40}"/>`).join('')}</g>
        <rect x="200" y="110" width="180" height="100" fill="#fff" stroke="#000" stroke-width="3"/><text x="210" y="130" font-family="JetBrains Mono, monospace" font-size="11">edificio</text>
        <path d="M${IO[0]} ${IO[1]} h40 M${IO[0]} ${IO[1]} v-40" stroke="#000" stroke-width="2.5"/><circle cx="${IO[0]}" cy="${IO[1]}" r="5" fill="#000"/><text x="${IO[0] + 6}" y="${IO[1] + 18}" font-family="JetBrains Mono, monospace" font-size="11">origen interno</text>
        <circle cx="${PB[0]}" cy="${PB[1]}" r="8" fill="#fff" stroke="#000" stroke-width="2.5"/><path d="M${PB[0] - 8} ${PB[1]} h16 M${PB[0]} ${PB[1] - 8} v16" stroke="#000" stroke-width="2"/><text x="${PB[0] + 12}" y="${PB[1] + 4}" font-family="JetBrains Mono, monospace" font-size="11">punto base</text>
        <polygon points="${V[0]},${V[1] - 10} ${V[0] + 9},${V[1] + 6} ${V[0] - 9},${V[1] + 6}" fill="none" stroke="#000" stroke-width="2.5"/><text x="${V[0] + 14}" y="${V[1] + 4}" font-family="JetBrains Mono, monospace" font-size="11">vértice</text>
        <g class="lector-sp"><circle r="11" fill="#FFFF00" stroke="#000" stroke-width="3"/><path d="M-11 0 h22 M0 -11 v22" stroke="#000" stroke-width="2"/></g>
        <g class="lector-far"><path d="M60 290 L14 296" stroke="#000" stroke-width="2.5"/><polygon points="6,297 18,290 18,302" fill="#000"/><text x="66" y="294" font-family="JetBrains Mono, monospace" font-size="11" font-weight="700" class="lector-far-t"></text></g>
        <g class="lector-cur" style="cursor:grab"><circle r="16" fill="transparent"/><circle r="6" fill="#000"/><path d="M-14 0 h28 M0 -14 v28" stroke="#000" stroke-width="1.5"/></g>
      </svg>
      <div class="lector-out">
        <div><span class="label">Desde el origen interno</span><b data-o="io"></b></div>
        <div><span class="label">Desde el punto base</span><b data-o="pb"></b></div>
        <div class="is-key"><span class="label">Coordenadas compartidas</span><b data-o="sh"></b></div>
        <div class="k"><span class="label">El Survey Point marca</span><b data-o="sp"></b></div>
      </div>`;
    const svg = el.querySelector('svg'), cur = el.querySelector('.lector-cur'), sp = el.querySelector('.lector-sp'), far = el.querySelector('.lector-far');
    let P = [300, 160], mode = 'clip';
    const xy = (p, o) => [(p[0] - o[0]) / S, (o[1] - p[1]) / S];
    const draw = () => {
      far.querySelector('.lector-far-t').textContent = `Survey Point y origen compartido: a ${fmt(Math.round(Math.hypot(E0, N0) / 1000), 0)} km`;
      cur.setAttribute('transform', `translate(${P[0]} ${P[1]})`);
      const a = xy(P, IO), b = xy(P, PB);
      el.querySelector('[data-o="io"]').textContent = `x ${f(a[0])} · y ${f(a[1])}`;
      el.querySelector('[data-o="pb"]').textContent = `x ${f(b[0])} · y ${f(b[1])}`;
      el.querySelector('[data-o="sh"]').textContent = `E ${f(E0 + a[0])} · N ${f(N0 + a[1])}`;
      const v = xy(V, IO);
      el.querySelector('[data-o="sp"]').textContent = mode === 'clip' ? 'E 0,00 · N 0,00 (su sitio es el origen)' : `E ${f(E0 + v[0])} · N ${f(N0 + v[1])}`;
      sp.style.display = mode === 'clip' ? 'none' : ''; far.style.display = mode === 'clip' ? '' : 'none';
      sp.setAttribute('transform', `translate(${V[0]} ${V[1]})`);
    };
    const pt = (e) => { const r = svg.getBoundingClientRect(); return [Math.max(10, Math.min(590, (e.clientX - r.left) / r.width * 600)), Math.max(10, Math.min(290, (e.clientY - r.top) / r.height * 300))]; };
    let drag = false;
    svg.style.touchAction = 'none';
    svg.addEventListener('pointerdown', (e) => { drag = true; svg.setPointerCapture(e.pointerId); P = pt(e); draw(); });
    svg.addEventListener('pointermove', (e) => { if (drag) { P = pt(e); draw(); } });
    svg.addEventListener('pointerup', () => { drag = false; });
    const origen = () => { const o = window.BF_CRS && window.BF_CRS.origen(); if (o) { E0 = o[0]; N0 = o[1]; } };
    origen();
    document.addEventListener('bf-crs', () => { origen(); draw(); });
    el.querySelectorAll('[data-sp]').forEach((b) => b.addEventListener('click', () => {
      mode = b.dataset.sp; el.querySelectorAll('[data-sp]').forEach((x) => x.classList.toggle('is-on', x === b)); draw();
    }));
    draw();
  });

  // Capa 2
  const modal = document.getElementById('l2-modal');
  const body = document.getElementById('l2-body');
  let opener = null;
  const open = (id, btn) => {
    const tpl = document.getElementById('l2-' + id);
    if (!tpl || !modal) return;
    const slide = (btn || document.querySelector(`.slide [data-l2="${id}"]`)).closest('.slide');
    const i = slides.indexOf(slide);
    const kEl = slide.querySelector('.kicker-y'), kicker = kEl ? [...kEl.childNodes].filter((n) => !(n.classList && n.classList.contains('sw'))).map((n) => n.textContent).join('').trim() : '';
    body.innerHTML = `<div class="l2-head"><span class="kicker-y">${kicker}</span><span class="label">Capa 2 · ${pad(i + 1)} / ${total}${i >= 0 && caps[i] ? ' · ' + caps[i] : ''}</span><h3>${tpl.dataset.title || titleOf(slide)}</h3></div>`;
    body.appendChild(tpl.content.cloneNode(true));
    body.querySelectorAll('.paises-tabla').forEach(paisesTabla);
    paisTexts();
    if (slide.dataset.capI !== '0') swDecorate(body);
    opener = btn || null;
    modal.classList.add('is-visible');
    document.body.classList.add('l2-lock');
    modal.querySelector('.l2-panel').scrollTop = 0;
    requestAnimationFrame(() => requestAnimationFrame(() => modal.classList.add('is-open')));
    modal.querySelector('.l2-close').focus({ preventScroll: true });
    history.replaceState(null, '', '#detalle-' + id);
  };
  const close = () => {
    if (!modal || !modal.classList.contains('is-visible')) return;
    modal.classList.remove('is-open', 'is-visible');
    document.body.classList.remove('l2-lock');
    history.replaceState(null, '', location.pathname + location.search);
    if (opener) opener.focus({ preventScroll: true });
  };
  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-l2]');
    if (b) { e.preventDefault(); open(b.dataset.l2, b); }
  });
  if (modal) {
    modal.addEventListener('click', (e) => { if (e.target === modal) close(); });
    modal.querySelector('.l2-close').addEventListener('click', close);
  }

  // Teclado: Esc cierra; flechas y avance de página pasan de diapositiva
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { if (bar) bar.classList.remove('is-open'); return close(); }
    if (modal && modal.classList.contains('is-visible')) return;
    if (e.target.closest('input, textarea, select')) return;
    const step = { ArrowDown: 1, PageDown: 1, ArrowUp: -1, PageUp: -1 }[e.key];
    if (!step) return;
    const next = slides[Math.min(slides.length - 1, Math.max(0, current + step))];
    if (next) { e.preventDefault(); next.scrollIntoView({ behavior: 'smooth' }); }
  });

  // Enlace directo a una ficha: …/#detalle-<id>
  const m = location.hash.match(/^#detalle-(.+)$/);
  if (m) {
    const b = document.querySelector(`[data-l2="${m[1]}"]`);
    if (b) { b.closest('.slide').scrollIntoView(); open(m[1], b); }
  }
})();

// Navegación y ayuda al lector (buscador, glosario, dudas frecuentes, guía): assets/js/ayuda.js
// Idiomas (selector ES · EN · DE): assets/js/idioma.js, que las páginas traducidas cargan antes de web.js
(function () {
  const s = document.createElement('script');
  s.src = (document.documentElement.dataset.root || './') + 'assets/js/ayuda.js';
  document.body.appendChild(s);
  if (!window.BF_I18N) {
    const i = document.createElement('script');
    i.src = (document.documentElement.dataset.root || './') + 'assets/js/idioma.js';
    document.body.appendChild(i);
  }
})();
