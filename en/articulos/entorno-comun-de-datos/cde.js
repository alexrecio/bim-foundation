// bf-fuente: articulos/entorno-comun-de-datos/cde.js@dcb048ce3c80df580366a9520a32f1b2ae83cdbd
// Artículo 03 · comprobador de nomenclatura de contenedores (slide «Validar un nombre»).
// Regla de elaboración propia a partir de las longitudes del anejo nacional británico de 2018
// (Proyecto 2-6 · Originador 2-6 · Volumen 2 · Nivel 2 · Tipo 2 · Rol 1-2 · Número 4-6) y de sus listas de tipo y rol.
// Usa las piezas visuales del lector de coordenadas (.lector-bar, .lector-out) y el campo de búsqueda del glosario (.gl-q).
(() => {
  const TIPOS = { AF: 'animation', BQ: 'bill of quantities', CA: 'calculations', CM: 'combined model', CO: 'correspondence', CP: 'cost plan', CR: 'clash rendition', DB: 'database', DR: 'drawing', FN: 'file note', HS: 'health and safety', IE: 'information exchange file', M2: 'two-dimensional model', M3: 'three-dimensional model', MI: 'minutes / action notes', MR: 'model rendition for other renditions', MS: 'method statement', PP: 'presentation', PR: 'programme', RD: 'room data sheet', RI: 'request for information', RP: 'report', SA: 'schedule of accommodation', SH: 'schedule', SN: 'snagging list', SP: 'specification', SU: 'survey', VS: 'visualization' };
  const ROLES = { A: 'architect', B: 'building surveyor', C: 'civil engineer', D: 'drainage, highways engineer', E: 'electrical engineer', F: 'facilities manager', G: 'geographical and land surveyor', H: 'heating and ventilation designer', I: 'interior designer', K: 'client', L: 'landscape architect', M: 'mechanical engineer', P: 'public health engineer', Q: 'quantity surveyor', S: 'structural engineer', T: 'town and country planner', W: 'contractor', X: 'subcontractor', Y: 'specialist designer', Z: 'general (non-disciplinary)' };
  const CAMPOS = [
    ['Project', /^[A-Z0-9]{2,6}$/, '2 to 6 letters or digits'],
    ['Originator', /^[A-Z0-9]{2,6}$/, '2 to 6 letters or digits'],
    ['Volume', /^[A-Z0-9]{2}$/, '2 characters · ZZ = all'],
    ['Level', /^[A-Z0-9]{2}$/, '2 characters · ZZ = multiple'],
    ['Type', /^[A-Z0-9]{2}$/, '2 characters from the list', TIPOS],
    ['Role', /^[A-Z]{1,2}$/, '1 or 2 letters from the list', ROLES],
    ['Number', /^[0-9]{4,6}$/, '4 to 6 digits']
  ];
  const EJEMPLOS = [
    ['Valid', 'BFD-ARQ-ZZ-02-M3-A-0001'],
    ['With status and revision', 'BFD-ARQ-ZZ-02-M3-A-0001-S2-P03'],
    ['Made-up type', 'BFD-ARQ-ZZ-02-3D-A-0001'],
    ['Short number', 'BFD-ARQ-ZZ-02-DR-A-12'],
    ['The old way', 'planta_final_v2']
  ];
  const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  document.querySelectorAll('.cde-nombre').forEach((el) => {
    el.innerHTML = `<label class="gl-q" style="max-width:none"><span class="mono" aria-hidden="true">›</span><input type="text" spellcheck="false" autocomplete="off" aria-label="Container name" value="${esc(el.dataset.nombre || '')}" style="font-family:var(--mono);text-transform:uppercase"></label>
      <div class="lector-bar">${EJEMPLOS.map(([t, v]) => `<button type="button" class="chip" data-v="${esc(v)}">${t}</button>`).join('')}</div>
      <div class="lector-out" aria-live="polite"></div>`;
    const input = el.querySelector('input'), out = el.querySelector('.lector-out'), chips = [...el.querySelectorAll('.lector-bar .chip')];
    const comprobar = () => {
      const v = input.value.trim().toUpperCase();
      const partes = v.split('-');
      chips.forEach((c) => c.classList.toggle('is-on', c.dataset.v.toUpperCase() === v));
      let errores = 0;
      const celdas = CAMPOS.map(([nom, re, regla, lista], i) => {
        const p = partes[i];
        let ok = p !== undefined && re.test(p), nota = regla;
        if (ok && lista) { ok = p in lista; nota = ok ? lista[p] : 'not in the list'; }
        if (p === undefined) nota = 'this field is missing';
        if (!ok) errores++;
        return `<div class="${ok ? '' : 'k'}"><span class="label">${ok ? '✓' : '✕'} ${nom}</span><b>${p === undefined ? '—' : esc(p)}</b><span class="label" style="text-transform:none;letter-spacing:0">${esc(nota)}</span></div>`;
      });
      const sobran = partes.length > CAMPOS.length;
      if (sobran) errores++;
      const veredicto = errores
        ? `<div class="k"><span class="label">Result</span><b>Fails · ${errores} ${errores === 1 ? 'error' : 'errors'}</b><span class="label" style="text-transform:none;letter-spacing:0">${sobran ? 'too many fields: status and revision go in the metadata' : 'stays in work in progress'}</span></div>`
        : '<div class="is-key"><span class="label">Result</span><b>Passes the check</b><span class="label" style="text-transform:none;letter-spacing:0">the content still needs reviewing</span></div>';
      out.innerHTML = celdas.join('') + veredicto;
    };
    input.addEventListener('input', comprobar);
    chips.forEach((c) => c.addEventListener('click', () => { input.value = c.dataset.v; comprobar(); }));
    comprobar();
  });
})();
