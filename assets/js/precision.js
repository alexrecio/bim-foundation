// Capa «Precisión»: movimiento de plóter, sello de lámina, cruz del origen y lector de coordenadas.
// Se carga después de web.js. Todo es decorativo: si este archivo falla, la web se lee igual.
(function () {
  const doc = document.documentElement;
  const calma = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const pad = (n) => String(n).padStart(2, '0');
  const serie = window.SERIE || [];
  const art = serie.find((a) => a.slug === doc.dataset.slug);

  // ---------- Sello de lámina en cada slide: «BF·01 — 07/39 — I» ----------
  const slides = [...document.querySelectorAll('.slide')];
  let cap = '';
  slides.forEach((s, i) => {
    if (s.dataset.cap) cap = s.dataset.cap.split('·')[0].trim();
    s.dataset.pzStamp = `BF·${art ? art.numero : '00'} — ${pad(i + 1)}/${pad(slides.length)}${cap ? ' — ' + cap : ''}`;
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
    const autor = (pie.textContent.match(/Diseñada y desarrollada por ([^·]+)/) || [])[1] || 'Alejandro García Nicolás';
    const doc_ = art ? art.titulo : (document.title.split('|').map((t) => t.trim()).find((t) => t && t !== 'BIM Foundation') || 'Índice de la serie');
    const meses = ['ENE','FEB','MAR','ABR','MAY','JUN','JUL','AGO','SEP','OCT','NOV','DIC'];
    const f = art && art.fecha ? art.fecha.split('-') : null;
    const fecha = f ? `${meses[+f[1] - 1]} ${f[0]}` : String(new Date().getFullYear());
    const celda = (k, v, cls = '') => `<div class="${cls}"><span>${k}</span><b>${v}</b></div>`;
    // Sustituye solo la línea de autoría original; lo demás que haya en el pie se conserva
    [...pie.children].filter((el) => el.matches('span') && (/Diseñada|BIM Foundation ·/.test(el.textContent) || el.classList.contains('sep'))).forEach((el) => el.remove());
    pie.insertAdjacentHTML('afterbegin', `<div class="pz-cajetin">` +
      celda('Proyecto', 'BIM Foundation', 'c-proy') +
      celda('Documento', doc_, 'c-doc') +
      celda('Hoja', art ? `BF·${art.numero}` : 'BF·00') +
      celda('Escala', '1:1') +
      celda('Fecha', fecha) +
      celda('Rev.', art && art.estado === 'publicado' ? '1.0' : '0.1', 'c-rev') +
      celda('Diseño y desarrollo', autor.trim(), 'c-aut') + `</div>`);
  }

  // ---------- Lector de coordenadas: dónde está el puntero, en milímetros de pantalla ----------
  if (matchMedia('(pointer: fine)').matches) {
    const hud = document.createElement('div');
    hud.className = 'pz-hud'; hud.setAttribute('aria-hidden', 'true');
    hud.innerHTML = 'X <b>0,0</b> Y <b>0,0</b> <i>mm</i>';
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
