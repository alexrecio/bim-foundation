// Artículo 03 · comprobador de nomenclatura de contenedores (slide «Validar un nombre»).
// Regla de elaboración propia a partir de las longitudes del anejo nacional británico de 2018
// (Proyecto 2-6 · Originador 2-6 · Volumen 2 · Nivel 2 · Tipo 2 · Rol 1-2 · Número 4-6) y de sus listas de tipo y rol.
// Usa las piezas visuales del lector de coordenadas (.lector-bar, .lector-out) y el campo de búsqueda del glosario (.gl-q).
(() => {
  const TIPOS = { AF: 'animación', BQ: 'mediciones', CA: 'cálculo', CM: 'modelo combinado', CO: 'correspondencia', CP: 'presupuesto', CR: 'informe de interferencias', DB: 'base de datos', DR: 'plano', FN: 'nota de expediente', HS: 'seguridad y salud', IE: 'intercambio de información', M2: 'modelo 2D', M3: 'modelo 3D', MI: 'acta', MR: 'renderizado', MS: 'memoria de método', PP: 'presentación', PR: 'programa', RD: 'hoja de locales', RI: 'solicitud de información', RP: 'informe', SA: 'calendario', SH: 'horario', SN: 'nota', SP: 'especificación', SU: 'encuesta', VS: 'visualización' };
  const ROLES = { A: 'arquitectura', B: 'inspección de edificios', C: 'ingeniería civil', D: 'drenaje y carreteras', E: 'eléctricas', F: 'facility management', G: 'topografía', H: 'climatización', I: 'interiorismo', K: 'cliente', L: 'paisajismo', M: 'mecánicas', P: 'fontanería y saneamiento', Q: 'medición y costes', S: 'estructuras', T: 'urbanismo', W: 'contratista', X: 'subcontratista', Y: 'especialista', Z: 'general' };
  const CAMPOS = [
    ['Proyecto', /^[A-Z0-9]{2,6}$/, '2 a 6 letras o cifras'],
    ['Originador', /^[A-Z0-9]{2,6}$/, '2 a 6 letras o cifras'],
    ['Volumen', /^[A-Z0-9]{2}$/, '2 caracteres · ZZ = todos'],
    ['Nivel', /^[A-Z0-9]{2}$/, '2 caracteres · ZZ = varios'],
    ['Tipo', /^[A-Z0-9]{2}$/, '2 caracteres de la lista', TIPOS],
    ['Rol', /^[A-Z]{1,2}$/, '1 o 2 letras de la lista', ROLES],
    ['Número', /^[0-9]{4,6}$/, '4 a 6 cifras']
  ];
  const EJEMPLOS = [
    ['Válido', 'BFD-ARQ-ZZ-02-M3-A-0001'],
    ['Con estado y revisión', 'BFD-ARQ-ZZ-02-M3-A-0001-S2-P03'],
    ['Tipo inventado', 'BFD-ARQ-ZZ-02-3D-A-0001'],
    ['Número corto', 'BFD-ARQ-ZZ-02-DR-A-12'],
    ['A la antigua', 'planta_final_v2']
  ];
  const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  document.querySelectorAll('.cde-nombre').forEach((el) => {
    el.innerHTML = `<label class="gl-q" style="max-width:none"><span class="mono" aria-hidden="true">›</span><input type="text" spellcheck="false" autocomplete="off" aria-label="Nombre del contenedor" value="${esc(el.dataset.nombre || '')}" style="font-family:var(--mono);text-transform:uppercase"></label>
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
        if (ok && lista) { ok = p in lista; nota = ok ? lista[p] : 'no está en la lista'; }
        if (p === undefined) nota = 'falta este campo';
        if (!ok) errores++;
        return `<div class="${ok ? '' : 'k'}"><span class="label">${ok ? '✓' : '✕'} ${nom}</span><b>${p === undefined ? '—' : esc(p)}</b><span class="label" style="text-transform:none;letter-spacing:0">${esc(nota)}</span></div>`;
      });
      const sobran = partes.length > CAMPOS.length;
      if (sobran) errores++;
      const veredicto = errores
        ? `<div class="k"><span class="label">Resultado</span><b>No pasa · ${errores} ${errores === 1 ? 'fallo' : 'fallos'}</b><span class="label" style="text-transform:none;letter-spacing:0">${sobran ? 'sobran campos: estado y revisión van en los metadatos' : 'se queda en trabajo en curso'}</span></div>`
        : '<div class="is-key"><span class="label">Resultado</span><b>Pasa la comprobación</b><span class="label" style="text-transform:none;letter-spacing:0">falta revisar el contenido</span></div>';
      out.innerHTML = celdas.join('') + veredicto;
    };
    input.addEventListener('input', comprobar);
    chips.forEach((c) => c.addEventListener('click', () => { input.value = c.dataset.v; comprobar(); }));
    comprobar();
  });
})();
