// Capa «Precisión»: movimiento de plóter, sello de lámina, cruz del origen y lector de coordenadas.
// Se carga después de web.js. Todo es decorativo: si este archivo falla, la web se lee igual.
(function () {
  const doc = document.documentElement;
  const calma = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const pad = (n) => String(n).padStart(2, '0');
  const serie = window.SERIE || [];
  const art = serie.find((a) => a.slug === doc.dataset.slug);

  // ---------- Sello de lámina en cada slide: «kernel://01/07 · I  [07/39]» ----------
  const slides = [...document.querySelectorAll('.slide')];
  let cap = '';
  slides.forEach((s, i) => {
    if (s.dataset.cap) cap = s.dataset.cap.split('·')[0].trim();
    s.dataset.pzStamp = `kernel://${art ? art.numero : '00'}/${pad(i + 1)}${cap ? ' · ' + cap : ''}  [${pad(i + 1)}/${pad(slides.length)}]`;
  });

  // ---------- Movimiento: entrada de tarjetas y trazado de los dibujos ----------
  if (!calma && 'IntersectionObserver' in window && slides.length) {
    doc.classList.add('pz-motion');
    const plotable = 'path, line, polyline, polygon, circle, ellipse, rect';
    slides.forEach((s) => {
      [...s.querySelectorAll('.b-title > *')].forEach((el, i) => el.style.setProperty('--i', i));
      [...s.querySelectorAll('.b-cards > .card')].forEach((el, i) => el.style.setProperty('--i', i + 2));
      s.querySelectorAll('.b-cards svg').forEach((svg) => {
        let k = 0;
        svg.querySelectorAll(plotable).forEach((el) => {
          if (el.closest('defs, clipPath, mask, pattern, marker, symbol')) return;
          const cs = getComputedStyle(el);
          const trazo = cs.stroke && cs.stroke !== 'none' && parseFloat(cs.strokeWidth) > 0;
          const discontinuo = cs.strokeDasharray && cs.strokeDasharray !== 'none';
          const relleno = cs.fill && cs.fill !== 'none' && !/rgba\(.*, 0\)$/.test(cs.fill);
          if (trazo && !discontinuo) {
            el.setAttribute('pathLength', '1');
            el.classList.add('pz-plot');
            el.style.setProperty('--i', Math.min(k++, 14));
          } else if (relleno && !trazo) el.classList.add('pz-fill');
        });
      });
      s.classList.add('pz-wait');
    });
    const entra = (s) => { s.classList.remove('pz-wait'); s.classList.add('pz-in'); io.unobserve(s); };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) entra(en.target); });
    }, { threshold: 0.18 });
    requestAnimationFrame(() => requestAnimationFrame(() => slides.forEach((s) => io.observe(s))));
  }

  // ---------- Portada de la web: cruz del origen sobre el plano milimetrado ----------
  // Origen técnico reutilizable: plano milimetrado + ejes + cruz del origen (+ pieza colocada, opcional)
  const PIEZA = '<g class="part"><path class="plot" pathLength="1" d="M15 6 L200 76"/>' +
    '<g transform="translate(200 76) rotate(-14)"><rect class="fill" x="0" y="-62" width="128" height="76" fill="#FFFF00"/>' +
    '<path class="plot" pathLength="1" d="M0 14 V-62 H128 V14 Z M14 -48 H58 V-14 H14 Z M72 -48 H114 V-30 H72 Z"/></g></g>';
  const PIEZA_TXT = '<g class="part" font-family="JetBrains Mono, monospace" font-size="10" font-weight="700" letter-spacing="1">' +
    '<text x="34" y="9" transform="rotate(22.3 34 9)">ΔE 412,318  ΔN 88,104</text><text x="318" y="-12">θ −14°</text></g>';
  const origen = (box, pos, { pieza = false, xy = 'E 0,000 · N 0,000', papel = false } = {}) => {
    const o = document.createElement('div');
    o.className = 'pz-origin' + (papel ? ' has-paper' : ''); o.setAttribute('aria-hidden', 'true');
    o.innerHTML = (papel ? '<i class="paper"></i>' : '') + '<i class="h"></i><i class="v"></i>' +
      '<svg viewBox="0 0 1 1"><g fill="none" stroke="#000" stroke-width="1.5" stroke-linecap="round">' +
      '<circle r="11"/><circle r="26" stroke-width="1" stroke-dasharray="3 4"/>' + (pieza ? PIEZA : '') + '</g>' +
      '<circle r="2.5" fill="#000"/>' + (pieza ? PIEZA_TXT : '') + '</svg>' +
      `<span class="lbl xy">${xy}</span><span class="lbl e">E →</span><span class="lbl n">↑ N</span>`;
    box.classList.add('pz-host');
    box.prepend(o);
    const place = () => {
      const p = pos(box.getBoundingClientRect());
      o.style.setProperty('--ox', Math.round(p[0]) + 'px');
      o.style.setProperty('--oy', Math.round(p[1]) + 'px');
    };
    place(); addEventListener('resize', place);
    if (document.fonts) document.fonts.ready.then(place);
    return o;
  };

  // Portada de la web
  const hero = document.querySelector('body > main:not(.deck) .hero');
  if (hero) origen(hero, (r) => {
    const s = hero.querySelector('.hero-side').getBoundingClientRect();
    return innerWidth >= 1280 ? [s.left - r.left - 36, Math.min(s.bottom - r.top + 28, r.height - 130)] : [r.width * 0.86, r.height * 0.86];
  }, { pieza: true });

  // Portada de cada artículo: el origen es el del sistema del lector
  const portada = slides[0] && !slides[0].dataset.cap ? slides[0] : null;
  if (portada && portada.querySelector('.b-cards')) {
    const crs = () => { const b = document.querySelector('[data-crs-chip] b'); const m = b && b.textContent.match(/EPSG\s*\d+/); return m ? m[0] : 'EPSG ····'; };
    const o = origen(portada, (r) => {
      const c = portada.querySelector('.b-cards').getBoundingClientRect();
      const t = portada.querySelector('.b-title').getBoundingClientRect();
      return innerWidth >= 1000 ? [c.left - r.left - 8, Math.min(t.bottom - r.top + 40, r.height - 60)] : [r.width - 28, t.top - r.top - 24];
    }, { xy: `${crs()} · E 0,000 · N 0,000`, papel: true });
    document.addEventListener('bf-crs', () => { o.querySelector('.lbl.xy').textContent = `${crs()} · E 0,000 · N 0,000`; });
  }

  // Primera lámina de cada bloque (I–VI): papel milimetrado en la esquina y el numeral del bloque, en hueco
  slides.filter((s) => s.dataset.cap).forEach((s) => {
    const n = document.createElement('div');
    n.className = 'pz-block'; n.setAttribute('aria-hidden', 'true');
    n.innerHTML = `<i class="paper"></i><b>${s.dataset.cap.split('·')[0].trim()}</b>`;
    s.classList.add('pz-host'); s.prepend(n);
  });

  // ---------- Pie como cajetín de plano: proyecto, documento, hoja, escala, fecha, revisión ----------
  const pie = document.querySelector('footer.site .wrap');
  if (pie && !pie.querySelector('.pz-cajetin')) {
    const autor = (pie.textContent.match(/(?:Diseñada y desarrollada por|Designed and developed by|entwickelt von) ([^·]+)/) || [])[1] || 'Alejandro García Nicolás';
    const doc_ = art ? art.titulo : (document.title.split('|').map((t) => t.trim()).find((t) => t && t !== 'kernel') || 'Índice de la serie');
    const meses = ['ENE','FEB','MAR','ABR','MAY','JUN','JUL','AGO','SEP','OCT','NOV','DIC'];
    const f = art && art.fecha ? art.fecha.split('-') : null;
    const fecha = f ? `${meses[+f[1] - 1]} ${f[0]}` : String(new Date().getFullYear());
    const celda = (k, v, cls = '') => `<div class="${cls}"><span>${k}</span><b>${v}</b></div>`;
    // Sustituye solo la línea de autoría original; lo demás que haya en el pie se conserva
    [...pie.children].filter((el) => el.matches('span') && (/Diseñada|Designed|entwickelt von|kernel ·/.test(el.textContent) || el.classList.contains('sep'))).forEach((el) => el.remove());
    pie.insertAdjacentHTML('afterbegin', `<div class="pz-cajetin">` +
      celda('Proyecto', 'kernel', 'c-proy') +
      celda('Documento', doc_, 'c-doc') +
      celda('Hoja', art ? `K·${art.numero}` : 'K·00') +
      celda('Escala', '1:1') +
      celda('Fecha', fecha) +
      celda('Rev.', art && art.estado === 'publicado' ? '1.0' : '0.1', 'c-rev') +
      celda('Diseño y desarrollo', autor.trim(), 'c-aut') + `</div>`);
  }

  // ---------- Lector de coordenadas: dónde está el puntero, en milímetros de pantalla ----------
  if (matchMedia('(pointer: fine)').matches) {
    const hud = document.createElement('div');
    hud.className = 'pz-hud'; hud.setAttribute('aria-hidden', 'true');
    const sis = () => { const b = document.querySelector('[data-crs-chip] b'); const m = b && b.textContent.match(/EPSG\s*\d+/); return m ? m[0] : ''; };
    hud.innerHTML = '<span class="led"></span><span class="sys">kernel <em>v0.1</em></span><span class="crs"></span>X <b>0,0</b> Y <b>0,0</b> <i>mm</i>';
    const crsEl = hud.querySelector('.crs');
    const pintaCrs = () => { const c = sis(); crsEl.textContent = c; crsEl.hidden = !c; };
    pintaCrs(); document.addEventListener('bf-crs', pintaCrs); setTimeout(pintaCrs, 600);
    document.body.appendChild(hud);
    const [bx, by] = hud.querySelectorAll('b');
    const MM = 25.4 / 96; // 1 px CSS = 0,2646 mm
    const fmt = (v) => v.toLocaleString('es-ES', { minimumFractionDigits: 1, maximumFractionDigits: 1, useGrouping: true });
    let raf = 0, px = 0, py = 0;
    addEventListener('pointermove', (e) => {
      px = e.pageX; py = e.pageY;
      if (!raf) raf = requestAnimationFrame(() => {
        raf = 0; bx.textContent = fmt(px * MM); by.textContent = fmt(py * MM);
        hud.classList.add('is-on');
      });
    }, { passive: true });
    document.addEventListener('pointerleave', () => hud.classList.remove('is-on'));
  }
})();

// Capa «Precisión» v0.3: lectura de cifras, cursor de CAD, apertura en cruz de las tarjetas y cubiertas trazadas
(function () {
  const calma = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fino = matchMedia('(pointer: fine)').matches;
  const ver = (els, fn, threshold = 0.35) => {
    if (!('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver((en) => en.forEach((e) => { if (e.isIntersecting) { io.unobserve(e.target); fn(e.target); } }), { threshold });
    els.forEach((el) => io.observe(el));
  };

  // ---------- Cifras que se «leen» como en una estación total: las cifras ruedan y se fijan de izquierda a derecha ----------
  const leer = (el) => {
    const nodos = [];
    const w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    while (w.nextNode()) if (/\d/.test(w.currentNode.nodeValue)) nodos.push([w.currentNode, w.currentNode.nodeValue]);
    if (!nodos.length) return;
    const total = nodos.reduce((n, [, t]) => n + (t.match(/\d/g) || []).length, 0);
    const dur = 650 + total * 45, t0 = performance.now();
    el.classList.add('pz-reading');
    const paso = (t) => {
      const fijas = Math.floor(((t - t0) / dur) * (total + 1));
      let k = 0;
      nodos.forEach(([n, fin]) => {
        n.nodeValue = fin.replace(/\d/g, (d) => (k++ < fijas ? d : String((Math.random() * 10) | 0)));
      });
      if (t - t0 < dur) requestAnimationFrame(paso);
      else { nodos.forEach(([n, fin]) => (n.nodeValue = fin)); el.classList.remove('pz-reading'); }
    };
    requestAnimationFrame(paso);
  };
  if (!calma) ver([...document.querySelectorAll('.slide .c-num, .stat b')].filter((el) => !el.querySelector('[data-pais]') && !el.closest('[data-pais]')), leer, 0.6);

  // ---------- Apertura en cruz: dos crucetas a pantalla completa salen del centro de cada tarjeta
  // hacia sus esquinas superior izquierda e inferior derecha y van descubriendo el contenido (una vez) ----------
  const tarjetas = (b) => [...b.querySelectorAll('.b-cards > .card')];
  if (!calma && 'IntersectionObserver' in window) {
    const bentos = [...document.querySelectorAll('.slide .bento')];
    document.documentElement.classList.add('pz-x');
    bentos.forEach((b) => tarjetas(b).forEach((c) => { c.style.clipPath = 'inset(50% 50% 50% 50%)'; }));
    // Dos variantes (?cruz=cascada | global, la elegida): crucetas tarjeta a tarjeta, o una sola
    // que abre la rejilla entera de la lámina como un único recuadro
    let modo = new URLSearchParams(location.search).get('cruz');   // la cascada solo con ?cruz=cascada, sin recordarla
    try { localStorage.removeItem('k-cruz'); } catch (e) {}
    modo = modo === 'cascada' ? 'cascada' : 'global';   // por defecto, la global
    if (modo === 'global') bentos.forEach((b) => { tarjetas(b).forEach((c) => { c.style.clipPath = ''; }); const g = b.querySelector('.b-cards'); if (g) g.style.clipPath = 'inset(50% 50% 50% 50%)'; });
    let capa = null;
    const libre = new Map();   // cascada por lámina: la siguiente tarjeta espera a que la anterior vaya avanzada
    const DUR = 760, SOLAPE = 0.72;
    const suave = (t) => 1 - Math.pow(1 - t, 3);
    const abre = (c, inicio) => {
      if (!capa) { capa = document.createElement('div'); capa.className = 'pz-xl'; capa.setAttribute('aria-hidden', 'true'); document.body.appendChild(capa); }
      const ls = ['h', 'v', 'h', 'v'].map((k) => { const l = document.createElement('i'); l.className = k; capa.appendChild(l); return l; });
      ls.forEach((l) => { l.style.opacity = '0'; });
      const fin = () => { c.style.clipPath = ''; ls.forEach((l) => { l.style.opacity = ''; l.classList.add('out'); setTimeout(() => l.remove(), 400); }); };
      const paso = (ts) => {
        if (ts < inicio) { requestAnimationFrame(paso); return; }
        const p = suave(Math.min(1, (ts - inicio) / DUR));
        const r = c.getBoundingClientRect(), q = (1 - p) / 2;
        const x1 = r.left + r.width * q, y1 = r.top + r.height * q, x2 = r.right - r.width * q, y2 = r.bottom - r.height * q;
        ls[0].style.transform = `translateY(${y1}px)`; ls[1].style.transform = `translateX(${x1}px)`;
        ls[2].style.transform = `translateY(${y2}px)`; ls[3].style.transform = `translateX(${x2}px)`;
        ls.forEach((l) => { l.style.opacity = ''; });
        c.style.clipPath = `inset(${q * 100}% ${q * 100}% ${q * 100}% ${q * 100}%)`;
        if (ts - inicio < DUR) requestAnimationFrame(paso); else fin();
      };
      requestAnimationFrame(paso);
    };
    // Cada tarjeta se abre al asomar (en móvil una lámina puede medir varias pantallas).
    // Sin IntersectionObserver: Chromium descuenta el clip-path y una tarjeta cerrada nunca «intersecta».
    let pendientes = modo === 'global' ? bentos.map((b) => b.querySelector('.b-cards')).filter(Boolean) : bentos.flatMap(tarjetas), cola = 0;
    const mira = () => {
      cola = 0;
      const ahora = performance.now(), vistas = [];
      pendientes = pendientes.filter((c) => {
        const r = c.getBoundingClientRect();
        if (r.top < innerHeight * 0.88 && r.bottom > innerHeight * 0.06 && r.width) { vistas.push(c); return false; }
        return true;
      });
      if (modo === 'cascada') vistas.forEach((c) => { const b = c.closest('.bento'), t = Math.max(ahora, libre.get(b) || 0); const n = tarjetas(b).length; libre.set(b, t + Math.min(DUR * SOLAPE, 1600 / Math.max(1, n - 1))); abre(c, t); });
      else vistas.forEach((g) => abre(g, ahora));
      if (!pendientes.length) { removeEventListener('scroll', pide, true); removeEventListener('resize', pide); }
    };
    const pide = () => { if (!cola) cola = requestAnimationFrame(mira); };
    addEventListener('scroll', pide, { passive: true, capture: true }); addEventListener('resize', pide);
    requestAnimationFrame(() => requestAnimationFrame(pide));
  }

  // ---------- Cursor de CAD: sobre un dibujo, retícula y coordenadas locales del dibujo ----------
  if (fino) document.querySelectorAll('.card svg.draw').forEach((svg) => {
    const card = svg.closest('.card');
    const cad = document.createElement('div');
    cad.className = 'pz-cad'; cad.setAttribute('aria-hidden', 'true');
    cad.innerHTML = '<i class="x"></i><i class="y"></i><span></span>';
    card.appendChild(cad);
    const lbl = cad.querySelector('span');
    svg.addEventListener('pointermove', (e) => {
      const r = svg.getBoundingClientRect(), c = card.getBoundingClientRect();
      const vb = svg.viewBox && svg.viewBox.baseVal && svg.viewBox.baseVal.width ? svg.viewBox.baseVal : { x: 0, y: 0, width: r.width, height: r.height };
      const s = Math.min(r.width / vb.width, r.height / vb.height);
      const ox = r.left + (r.width - vb.width * s) / 2, oy = r.top + (r.height - vb.height * s) / 2;
      const ux = vb.x + (e.clientX - ox) / s, uy = vb.y + (e.clientY - oy) / s;
      cad.style.setProperty('--l', r.left - c.left + 'px'); cad.style.setProperty('--t', r.top - c.top + 'px');
      cad.style.setProperty('--w', r.width + 'px'); cad.style.setProperty('--h', r.height + 'px');
      cad.style.setProperty('--cx', e.clientX - c.left + 'px'); cad.style.setProperty('--cy', e.clientY - c.top + 'px');
      lbl.textContent = `x ${ux.toFixed(1).replace('.', ',')}  y ${uy.toFixed(1).replace('.', ',')}`;
      cad.classList.add('is-on');
    });
    svg.addEventListener('pointerleave', () => cad.classList.remove('is-on'));
  });

  // ---------- Cubiertas de la portada: el dibujo se inserta en la página y se traza al aparecer ----------
  const cubiertas = [...document.querySelectorAll('.article-list .cover img[src$=".svg"]')];
  if (!calma && cubiertas.length && window.fetch) ver(cubiertas, async (img) => {
    try {
      const txt = await (await fetch(img.src)).text();
      const tmp = document.createElement('div'); tmp.innerHTML = txt;
      const svg = tmp.querySelector('svg'); if (!svg || svg.querySelector('script')) return;
      svg.setAttribute('class', 'pz-cover-svg'); svg.setAttribute('aria-hidden', 'true');
      img.replaceWith(svg);
      let k = 0;
      svg.querySelectorAll('path, line, polyline, polygon, circle, ellipse, rect').forEach((el) => {
        const cs = getComputedStyle(el);
        const trazo = cs.stroke !== 'none' && parseFloat(cs.strokeWidth) > 0 && cs.strokeDasharray === 'none';
        if (trazo) { el.setAttribute('pathLength', '1'); el.classList.add('pz-plot'); el.style.setProperty('--i', Math.min(k++, 12)); }
        else el.classList.add('pz-fill');
      });
      svg.querySelectorAll('text').forEach((t) => t.classList.add('pz-fill'));
      svg.classList.add('pz-wait');
      requestAnimationFrame(() => requestAnimationFrame(() => { svg.classList.remove('pz-wait'); svg.classList.add('pz-in'); }));
    } catch (e) { /* si falla, se queda la imagen */ }
  }, 0.4);
})();

// kernel v0.4: logotipo de terminal y arranque del sistema en la portada
(function () {
  const lang = (document.documentElement.lang || 'es').slice(0, 2);
  const calma = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---------- Logotipo: «kernel» en mono con el cursor de terminal amarillo ----------
  document.querySelectorAll('.hero-id').forEach((el) => {
    const w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    while (w.nextNode()) {
      const n = w.currentNode, i = n.nodeValue.indexOf('kernel');
      if (i < 0) continue;
      const resto = n.splitText(i); resto.nodeValue = resto.nodeValue.slice(6);
      const k = document.createElement('span');
      k.className = 'k-word'; k.innerHTML = 'kernel<i class="k-cur" aria-hidden="true"></i>';
      n.parentNode.insertBefore(k, resto);
      break;
    }
  });

  // ---------- Arranque: una vez por visita, la portada «arranca» como un sistema ----------
  const portada = document.getElementById('article-list') && document.querySelector('.hero');
  let visto = false;
  try { visto = sessionStorage.getItem('k-boot') === '1'; sessionStorage.setItem('k-boot', '1'); } catch (e) { visto = true; }
  if (!portada || visto || calma) return;
  const n = (window.SERIE || []).filter((a) => a.estado !== 'proximamente').length;
  const T = {
    es: ['kernel v0.1 · fundamentos BIM', 'montando sistema de referencia', 'cargando registro EPSG', 'fijando origen  E 0,000 · N 0,000', `${n} artículos · 6 bloques · fuentes citadas`, 'listo'],
    en: ['kernel v0.1 · BIM fundamentals', 'mounting reference system', 'loading EPSG registry', 'fixing origin  E 0.000 · N 0.000', `${n} articles · 6 blocks · sources cited`, 'ready'],
    de: ['kernel v0.1 · BIM-Grundlagen', 'Bezugssystem wird eingebunden', 'EPSG-Register wird geladen', 'Ursprung wird gesetzt  E 0,000 · N 0,000', `${n} Beiträge · 6 Blöcke · Quellen belegt`, 'bereit']
  }[lang] || null;
  if (!T) return;
  const o = document.createElement('div');
  o.className = 'k-boot'; o.setAttribute('aria-hidden', 'true');
  o.innerHTML = `<pre><b>${T[0]}</b>\n</pre>`;
  document.body.appendChild(o);
  const pre = o.querySelector('pre');
  const lineas = [1, 2, 3].map((i) => `<span class="dim">&gt;</span> ${T[i]} <span class="dots"></span> <span class="ok">ok</span>`).concat([`<span class="dim">&gt;</span> ${T[4]}`, `<span class="y">${T[5]}</span><i class="k-cur"></i>`]);
  let i = 0, fin = false;
  const cerrar = () => { if (fin) return; fin = true; o.classList.add('is-out'); setTimeout(() => o.remove(), 450); };
  const sig = () => { if (fin) return; if (i < lineas.length) { pre.insertAdjacentHTML('beforeend', lineas[i++] + '\n'); setTimeout(sig, i < 4 ? 170 : 220); } else setTimeout(cerrar, 380); };
  setTimeout(sig, 160);
  ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((ev) => addEventListener(ev, cerrar, { once: true, passive: true }));
})();

// Tema «Retícula» (mockup): ?tema=reticula lo activa y se recuerda; ?tema=clasico vuelve al actual
(function () {
  const html = document.documentElement;
  const q = new URLSearchParams(location.search).get('tema');
  let tema = q, probado = !!q;
  try { if (q) localStorage.setItem('k-tema', q); else { tema = localStorage.getItem('k-tema'); probado = !!tema; } } catch (e) { /* sin almacenamiento: solo por URL */ }
  const root = html.dataset.root || './';
  if (tema === 'reticula' && !html.classList.contains('rt')) {
    html.style.visibility = 'hidden';
    const l = document.createElement('link');
    l.rel = 'stylesheet'; l.href = root + 'assets/css/reticula.css';
    const ver = () => { html.style.visibility = ''; };
    l.onload = ver; l.onerror = ver; setTimeout(ver, 1200);
    document.head.appendChild(l);
    html.classList.add('rt');
    const bg = document.createElement('div'); bg.className = 'rt-bg'; bg.setAttribute('aria-hidden', 'true');
    document.body.prepend(bg);
  }
  if (!probado) return;
  const enlace = (t) => { const u = new URL(location.href); u.searchParams.set('tema', t); return u.pathname + u.search + u.hash; };
  const sw = document.createElement('div');
  sw.className = 'rt-switch';
  sw.innerHTML = `<a href="${enlace('reticula')}" class="${tema === 'reticula' ? 'is-on' : ''}">Retícula</a><a href="${enlace('clasico')}" class="${tema !== 'reticula' ? 'is-on' : ''}">Actual</a>`;
  document.body.appendChild(sw);
})();
