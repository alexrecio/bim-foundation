// Artículo 02 · Niveles de información: piezas interactivas propias del artículo.
// 1) Escala LOD (.niv-lod): una puerta dibujada en cada nivel, con lo que cambia.
// 2) Constructor de requisitos (.niv-loin): objeto × propósito → geometría, identificación, propiedades y documentos.
// Usa los estilos del lector de coordenadas (.lector-bar, .lector-svg, .lector-out) de estilo.css.
(() => {
  const M = 'font-family="JetBrains Mono, monospace"';
  const elegir = (bar, btn) => bar.querySelectorAll('.chip').forEach((b) => {
    const on = b === btn; b.classList.toggle('is-on', on); b.setAttribute('aria-pressed', on ? 'true' : 'false');
  });

  // ---------- 1 · Escala LOD ----------
  // Alzado (izquierda, muro de 40..250) y planta (derecha, muro 320..540, y 130..150)
  const muro = '<rect x="40" y="20" width="210" height="180" fill="#EFEFEA" stroke="#000" stroke-width="2"/>' +
    '<line x1="20" y1="200" x2="270" y2="200" stroke="#000" stroke-width="3"/>' +
    `<text x="40" y="216" ${M} font-size="10" fill="#666">ALZADO</text><text x="320" y="216" ${M} font-size="10" fill="#666">PLANTA</text>`;
  const muroP = (hueco) => hueco
    ? '<rect x="300" y="128" width="80" height="22" fill="#EFEFEA" stroke="#000" stroke-width="2"/><rect x="466" y="128" width="80" height="22" fill="#EFEFEA" stroke="#000" stroke-width="2"/>'
    : '<rect x="300" y="128" width="246" height="22" fill="#EFEFEA" stroke="#000" stroke-width="2"/>';
  const cota = `<path d="M100 192 H190 M100 186 v12 M190 186 v12" stroke="#000" stroke-width="1.2"/><text x="145" y="188" ${M} font-size="10" text-anchor="middle">0,90</text>` +
    `<path d="M80 60 V200 M74 60 h12" stroke="#000" stroke-width="1.2"/><text x="76" y="134" ${M} font-size="10" text-anchor="end">2,10</text>`;
  const hoja = '<rect x="100" y="60" width="90" height="140" fill="#fff" stroke="#000" stroke-width="3"/>';
  const marco = '<path d="M94 200 V54 H196 V200" fill="none" stroke="#000" stroke-width="5"/>';
  const giro = '<path d="M380 128 L380 48" stroke="#000" stroke-width="3"/><path d="M380 48 A86 86 0 0 1 466 128" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="5 4"/>';
  const D = {
    100: {
      svg: muro + '<rect x="100" y="60" width="90" height="140" fill="none" stroke="#000" stroke-width="2.5" stroke-dasharray="6 5"/><path d="M100 60 L190 200 M190 60 L100 200" stroke="#000" stroke-width="1.5"/>' +
        muroP(false) + `<rect x="380" y="122" width="86" height="34" fill="none" stroke="#000" stroke-width="2.5" stroke-dasharray="6 5"/><text x="423" y="110" ${M} font-size="10" text-anchor="middle">aquí habrá una puerta</text>`,
      g: 'Símbolo o masa', i: 'Puede tener un coste por unidad', u: 'Estudios de volumen y coste', f: 'Solo indicativa'
    },
    200: {
      svg: muro + hoja + muroP(true) + '<line x1="380" y1="139" x2="466" y2="139" stroke="#000" stroke-width="4"/>' +
        `<text x="145" y="45" ${M} font-size="10" text-anchor="middle">≈ 0,90 × 2,10</text>`,
      g: 'Objeto genérico, tamaño aproximado', i: 'Tipo genérico', u: 'Anteproyecto, distribución', f: 'Aproximada'
    },
    300: {
      svg: muro + marco + hoja + cota + muroP(true) + giro + '<circle cx="178" cy="134" r="4" fill="#000"/>',
      g: 'Medidas, posición y giro exactos', i: 'Tipo, fuego, transmitancia', u: 'Proyecto, mediciones, licencia', f: 'Medible en el modelo'
    },
    350: {
      svg: muro + marco + hoja + cota + muroP(true) + giro +
        '<g fill="#000"><rect x="88" y="80" width="6" height="6"/><rect x="88" y="130" width="6" height="6"/><rect x="88" y="180" width="6" height="6"/><rect x="196" y="80" width="6" height="6"/><rect x="196" y="130" width="6" height="6"/><rect x="196" y="180" width="6" height="6"/></g>' +
        '<circle cx="178" cy="134" r="4" fill="#000"/><path d="M380 150 h86 v40 h-86z" fill="#FFFF00" stroke="#000" stroke-width="1.5"/>' +
        `<text x="423" y="174" ${M} font-size="9.5" text-anchor="middle">zona libre</text><text x="250" y="14" ${M} font-size="10" text-anchor="end">anclajes al muro</text>`,
      g: 'Lo anterior más sus interfaces', i: 'Anclajes, cerradero, cableado', u: 'Coordinar con otros oficios', f: 'Coordinada'
    },
    400: {
      svg: muro + marco + hoja + cota + muroP(true) + giro +
        '<g fill="#000"><rect x="100" y="72" width="5" height="14"/><rect x="100" y="126" width="5" height="14"/><rect x="100" y="176" width="5" height="14"/></g>' +
        '<path d="M178 128 h-14" stroke="#000" stroke-width="4"/><rect x="176" y="138" width="6" height="12" fill="#000"/><path d="M108 70 h74 v52 h-74z" fill="none" stroke="#000" stroke-width="1.2"/>' +
        '<path d="M372 128 v-8 h12 v8 M458 128 v-8 h12 v8" fill="none" stroke="#000" stroke-width="2"/>' +
        `<text x="250" y="14" ${M} font-size="10" text-anchor="end">bisagras · manilla · cerradura</text>`,
      g: 'Detalle de fabricación y montaje', i: 'Fabricante, modelo, herrajes', u: 'Taller, compra, montaje', f: 'Fabricable'
    },
    500: {
      svg: muro + marco + hoja + cota + muroP(true) + giro +
        '<path d="M178 128 h-14" stroke="#000" stroke-width="4"/><circle cx="510" cy="60" r="26" fill="#FFFF00" stroke="#000" stroke-width="3"/><path d="M497 60 l9 9 17 -19" fill="none" stroke="#000" stroke-width="4"/>' +
        `<text x="510" y="104" ${M} font-size="10" text-anchor="middle">verificada en obra</text>`,
      g: 'La de lo construido', i: 'Nº de serie, garantía, manual', u: 'Explotación y mantenimiento', f: 'Comprobada en obra'
    }
  };
  document.querySelectorAll('.niv-lod').forEach((el) => {
    const svg = el.querySelector('svg'), bar = el.querySelector('.lector-bar');
    const pinta = (n) => {
      const d = D[n]; svg.innerHTML = d.svg;
      ['g', 'i', 'u', 'f'].forEach((k) => { el.querySelector(`[data-o="${k}"]`).textContent = d[k]; });
      svg.setAttribute('aria-label', `Puerta en LOD ${n}: ${d.g}`);
    };
    bar.addEventListener('click', (e) => { const b = e.target.closest('[data-lod]'); if (!b) return; elegir(bar, b); pinta(b.dataset.lod); });
    pinta('300');
  });

  // ---------- 2 · Constructor de requisitos ----------
  // [hito, geometría, identificación, propiedades, documentos]. Ejemplo orientativo.
  const R = {
    puerta: {
      coordinar: ['Proyecto de ejecución', '3D con medidas, posición y giro exactos; poco detalle', 'Código y tipo', 'Ancho y alto de paso', '—'],
      medir: ['Proyecto de ejecución', '3D con medidas exactas', 'Tipo y clasificación', 'Material, acabado, herrajes', '—'],
      incendio: ['Proyecto de ejecución', 'Paso libre y sentido de apertura', 'Código y sector de incendio', 'Resistencia al fuego (EI2 60-C5), autocierre', 'Certificado de ensayo'],
      mantener: ['Entrega final', 'Posición; forma simbólica', 'Código, espacio y tipo', 'Fabricante, modelo, nº de serie, garantía', 'Manual y plan de mantenimiento']
    },
    muro: {
      coordinar: ['Proyecto de ejecución', '3D con espesor total y posición exactos; sin capas', 'Tipo', 'Espesor; portante o no', '—'],
      medir: ['Proyecto de ejecución', '3D por capas', 'Tipo y clasificación', 'Material y espesor de cada capa', '—'],
      incendio: ['Proyecto de ejecución', 'Espesor y continuidad hasta el forjado', 'Tipo y sector de incendio', 'Resistencia al fuego (EI 90)', 'Ensayo o justificación'],
      mantener: ['Entrega final', 'Posición; capas simbólicas', 'Tipo y espacio', 'Acabado y su fabricante', 'Fichas de los acabados']
    },
    pilar: {
      coordinar: ['Proyecto de ejecución', '3D con sección y posición exactas', 'Código de eje', 'Sección y material', '—'],
      medir: ['Proyecto de ejecución', '3D exacto', 'Tipo y clasificación', 'Material, clase resistente, volumen', '—'],
      incendio: ['Proyecto de ejecución', 'Sección y recubrimiento', 'Código', 'Resistencia al fuego (R 90) y protección', 'Justificación de la protección'],
      mantener: ['Entrega final', 'Posición', 'Código y planta', 'Material, protección, periodicidad de inspección', 'Certificados de materiales']
    }
  };
  document.querySelectorAll('.niv-loin').forEach((el) => {
    const card = el.closest('.card');
    let obj = 'puerta', pro = 'coordinar';
    const pinta = () => {
      const [h, g, id, p, d] = R[obj][pro];
      const hito = card && card.querySelector('[data-o="h"]'); if (hito) hito.textContent = h;
      el.querySelector('[data-o="g"]').textContent = g;
      el.querySelector('[data-o="id"]').textContent = id;
      el.querySelector('[data-o="p"]').textContent = p;
      el.querySelector('[data-o="d"]').textContent = d;
    };
    el.querySelectorAll('.lector-bar').forEach((bar) => bar.addEventListener('click', (e) => {
      const b = e.target.closest('[data-obj],[data-pro]'); if (!b) return;
      elegir(bar, b);
      if (b.dataset.obj) obj = b.dataset.obj; else pro = b.dataset.pro;
      pinta();
    }));
    pinta();
  });
})();
