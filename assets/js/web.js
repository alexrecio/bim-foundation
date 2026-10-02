// Comportamiento común: menú en cartucho, índice automático del artículo,
// barra de progreso de lectura y navegación entre artículos de la serie.
(function () {
  const root = document.documentElement.dataset.root || './';

  // El punto amarillo de los titulares no se queda solo en una línea: se une a la última palabra
  document.querySelectorAll('.display > .dot').forEach((dot) => {
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

  // Portada: lista de artículos
  const list = document.getElementById('article-list');
  if (list) {
    list.innerHTML = serie.map((a) => {
      const soon = a.estado === 'proximamente';
      const estado = a.estado === 'borrador' ? '<span class="soon">Borrador</span>' : soon ? '<span class="soon">Próximamente</span>' : '';
      return `<li class="article-item${soon ? ' is-soon' : ''}"><a href="${root}articulos/${a.slug}/">
        <span class="n">${a.numero}</span>
        <div><h3>${a.titulo}</h3><p>${a.resumen}</p></div>
        <div class="meta">${a.tema}<br>${fmtFecha(a.fecha)} · ${a.lectura}<br>${estado}</div>
      </a></li>`;
    }).join('');
  }

  // Artículo: anterior / siguiente
  const nav = document.getElementById('series-nav');
  const slug = document.documentElement.dataset.slug;
  if (nav && slug) {
    const pub = serie.filter((a) => a.estado !== 'proximamente');
    const i = pub.findIndex((a) => a.slug === slug);
    const card = (a, cls, label) => a
      ? `<a class="${cls}" href="${root}articulos/${a.slug}/"><span class="label">${label} · ${a.numero}</span><b>${a.titulo}</b></a>`
      : `<div class="empty ${cls}"><span class="label">${label}</span><b>${cls === 'next' ? 'Próximamente' : 'Primer artículo'}</b></div>`;
    nav.innerHTML = card(pub[i - 1], 'prev', '← Anterior') + card(pub[i + 1], 'next', 'Siguiente →');
  }
})();

// Artículo en dos capas: diapositivas (capa 1) y fichas emergentes (capa 2)
(function () {
  const slides = [...document.querySelectorAll('.deck > .slide[id]')];
  if (!slides.length) return;
  const total = String(slides.length).padStart(2, '0');

  // Numeración, contador y puntos laterales
  const dots = document.getElementById('deck-dots');
  const count = document.getElementById('deck-count');
  slides.forEach((s, i) => {
    const n = s.querySelector('.slide-n');
    if (n) n.textContent = `${String(i + 1).padStart(2, '0')} / ${total}`;
    if (dots) {
      const a = document.createElement('a');
      a.href = '#' + s.id;
      a.title = (s.querySelector('h1, h2') || {}).textContent || '';
      a.setAttribute('aria-label', a.title);
      dots.appendChild(a);
    }
  });
  const dotLinks = dots ? [...dots.children] : [];
  let current = 0;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      current = slides.indexOf(en.target);
      dotLinks.forEach((a, i) => a.classList.toggle('is-current', i === current));
      if (count) count.innerHTML = `<b>${String(current + 1).padStart(2, '0')}</b> / ${total}`;
    });
  }, { threshold: 0.55 });
  slides.forEach((s) => io.observe(s));

  // Capa 2
  const modal = document.getElementById('l2-modal');
  const body = document.getElementById('l2-body');
  let opener = null;
  const open = (id, btn) => {
    const tpl = document.getElementById('l2-' + id);
    if (!tpl || !modal) return;
    const slide = btn ? btn.closest('.slide') : document.querySelector(`.slide [data-l2="${id}"]`)?.closest('.slide');
    const kicker = slide ? (slide.querySelector('.kicker-y') || {}).textContent : '';
    const num = slide ? String(slides.indexOf(slide) + 1).padStart(2, '0') : '';
    body.innerHTML = `<div class="l2-head"><span class="kicker-y">${kicker}</span><span class="label">Detalle · ${num}</span></div>`;
    body.appendChild(tpl.content.cloneNode(true));
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

  // Teclado: Esc cierra la ficha; flechas y avance de página pasan de diapositiva
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') return close();
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
