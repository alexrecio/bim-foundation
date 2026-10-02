// bf-fuente: articulos/entorno-comun-de-datos/cde.js@dcb048ce3c80df580366a9520a32f1b2ae83cdbd
// Artículo 03 · comprobador de nomenclatura de contenedores (slide «Validar un nombre»).
// Regla de elaboración propia a partir de las longitudes del anejo nacional británico de 2018
// (Proyecto 2-6 · Originador 2-6 · Volumen 2 · Nivel 2 · Tipo 2 · Rol 1-2 · Número 4-6) y de sus listas de tipo y rol.
// Usa las piezas visuales del lector de coordenadas (.lector-bar, .lector-out) y el campo de búsqueda del glosario (.gl-q).
(() => {
  const TIPOS = { AF: 'Animation', BQ: 'Mengenermittlung', CA: 'Berechnung', CM: 'Koordinationsmodell', CO: 'Korrespondenz', CP: 'Kostenschätzung', CR: 'Kollisionsbericht', DB: 'Datenbank', DR: 'Plan', FN: 'Aktennotiz', HS: 'Arbeitsschutz', IE: 'Informationsaustausch', M2: '2D-Modell', M3: '3D-Modell', MI: 'Protokoll', MR: 'Rendering', MS: 'Methodenbeschreibung', PP: 'Präsentation', PR: 'Programm', RD: 'Raumdatenblatt', RI: 'Informationsanfrage', RP: 'Bericht', SA: 'Terminplan', SH: 'Zeitplan', SN: 'Notiz', SP: 'Spezifikation', SU: 'Umfrage', VS: 'Visualisierung' };
  const ROLES = { A: 'Architektur', B: 'Bauaufsicht', C: 'Bauingenieurwesen', D: 'Entwässerung und Straßen', E: 'Elektrotechnik', F: 'Facility Management', G: 'Vermessung', H: 'Heizung, Lüftung, Klima', I: 'Innenarchitektur', K: 'Auftraggeber', L: 'Landschaftsarchitektur', M: 'Maschinentechnik', P: 'Sanitär und Abwasser', Q: 'Mengen und Kosten', S: 'Tragwerk', T: 'Stadtplanung', W: 'Auftragnehmer', X: 'Nachunternehmer', Y: 'Fachplaner', Z: 'Allgemein' };
  const CAMPOS = [
    ['Projekt', /^[A-Z0-9]{2,6}$/, '2 bis 6 Buchstaben oder Ziffern'],
    ['Urheber', /^[A-Z0-9]{2,6}$/, '2 bis 6 Buchstaben oder Ziffern'],
    ['Volumen', /^[A-Z0-9]{2}$/, '2 Zeichen · ZZ = alle'],
    ['Ebene', /^[A-Z0-9]{2}$/, '2 Zeichen · ZZ = mehrere'],
    ['Typ', /^[A-Z0-9]{2}$/, '2 Zeichen aus der Liste', TIPOS],
    ['Rolle', /^[A-Z]{1,2}$/, '1 oder 2 Buchstaben aus der Liste', ROLES],
    ['Nummer', /^[0-9]{4,6}$/, '4 bis 6 Ziffern']
  ];
  const EJEMPLOS = [
    ['Gültig', 'BFD-ARQ-ZZ-02-M3-A-0001'],
    ['Mit Status und Revision', 'BFD-ARQ-ZZ-02-M3-A-0001-S2-P03'],
    ['Erfundener Typ', 'BFD-ARQ-ZZ-02-3D-A-0001'],
    ['Zu kurze Nummer', 'BFD-ARQ-ZZ-02-DR-A-12'],
    ['Nach alter Art', 'grundriss_final_v2']
  ];
  const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  document.querySelectorAll('.cde-nombre').forEach((el) => {
    el.innerHTML = `<label class="gl-q" style="max-width:none"><span class="mono" aria-hidden="true">›</span><input type="text" spellcheck="false" autocomplete="off" aria-label="Name des Containers" value="${esc(el.dataset.nombre || '')}" style="font-family:var(--mono);text-transform:uppercase"></label>
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
        if (ok && lista) { ok = p in lista; nota = ok ? lista[p] : 'nicht in der Liste'; }
        if (p === undefined) nota = 'dieses Feld fehlt';
        if (!ok) errores++;
        return `<div class="${ok ? '' : 'k'}"><span class="label">${ok ? '✓' : '✕'} ${nom}</span><b>${p === undefined ? '—' : esc(p)}</b><span class="label" style="text-transform:none;letter-spacing:0">${esc(nota)}</span></div>`;
      });
      const sobran = partes.length > CAMPOS.length;
      if (sobran) errores++;
      const veredicto = errores
        ? `<div class="k"><span class="label">Ergebnis</span><b>Nicht bestanden · ${errores} Fehler</b><span class="label" style="text-transform:none;letter-spacing:0">${sobran ? 'zu viele Felder: Status und Revision gehören in die Metadaten' : 'bleibt in Bearbeitung (WIP)'}</span></div>`
        : '<div class="is-key"><span class="label">Ergebnis</span><b>Prüfung bestanden</b><span class="label" style="text-transform:none;letter-spacing:0">Inhalt noch zu prüfen</span></div>';
      out.innerHTML = celdas.join('') + veredicto;
    };
    input.addEventListener('input', comprobar);
    chips.forEach((c) => c.addEventListener('click', () => { input.value = c.dataset.v; comprobar(); }));
    comprobar();
  });
})();
