// Comportamiento común: menú en cartucho, índice automático del artículo,
// barra de progreso de lectura y navegación entre artículos de la serie.
(function () {
  const root = document.documentElement.dataset.root || './';

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
