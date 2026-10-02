// Catálogo de la serie. Es la única lista de artículos: la portada y la
// navegación «anterior / siguiente» de cada artículo se generan a partir de aquí.
// Para publicar un artículo nuevo: copiar articulos/_plantilla/ a articulos/<slug>/
// y añadir aquí su ficha en el orden de la serie (ver README).
window.SERIE = [
  {
    slug: 'coordenadas-compartidas',
    numero: '01',
    titulo: 'Coordenadas compartidas en BIM',
    resumen: 'Primero los conceptos que valen para cualquier programa (geodesia, topografía, precisión y transformación); después estándares, software, plataformas e interoperabilidad.',
    tema: 'Georreferenciación',
    fecha: '2026-10',
    lectura: '28 ideas',
    estado: 'borrador' // borrador | publicado | proximamente | relleno (ficticio)
  },
  {
    // Artículo ficticio de relleno (arquitectura de la web): sustituir o borrar
    slug: 'niveles-de-informacion',
    numero: '02',
    titulo: 'Niveles de información',
    resumen: 'Pedir lo justo en cada fase: ni más geometría ni menos datos.',
    tema: 'Información',
    fecha: '2026-11',
    lectura: '6 ideas',
    estado: 'relleno'
  },
  {
    // Artículo ficticio de relleno (arquitectura de la web): sustituir o borrar
    slug: 'entorno-comun-de-datos',
    numero: '03',
    titulo: 'Entorno común de datos',
    resumen: 'Un único sitio donde la información tiene estado, versión y dueño.',
    tema: 'Gestión',
    fecha: '2026-11',
    lectura: '6 ideas',
    estado: 'relleno'
  },
  {
    // Artículo ficticio de relleno (arquitectura de la web): sustituir o borrar
    slug: 'deteccion-de-interferencias',
    numero: '04',
    titulo: 'Detección de interferencias',
    resumen: 'Encontrar los choques en el modelo antes que en la obra.',
    tema: 'Coordinación',
    fecha: '2026-12',
    lectura: '6 ideas',
    estado: 'relleno'
  },
  {
    // Artículo ficticio de relleno (arquitectura de la web): sustituir o borrar
    slug: 'clasificacion-bim',
    numero: '05',
    titulo: 'Sistemas de clasificación',
    resumen: 'Un código común para que cada elemento se entienda en todas las fases.',
    tema: 'Datos',
    fecha: '2026-12',
    lectura: '6 ideas',
    estado: 'relleno'
  },
  {
    // Artículo ficticio de relleno (arquitectura de la web): sustituir o borrar
    slug: 'bep-plan-de-ejecucion',
    numero: '06',
    titulo: 'Plan de ejecución BIM',
    resumen: 'El documento que convierte los requisitos del cliente en un plan de trabajo.',
    tema: 'Gestión',
    fecha: '2027-01',
    lectura: '6 ideas',
    estado: 'relleno'
  },
  {
    // Ficticio: prueba del estado «próximamente» (sin enlace ni carpeta)
    slug: 'gemelos-digitales',
    numero: '07',
    titulo: 'Gemelos digitales',
    resumen: 'Del modelo de entrega al modelo de explotación conectado a sensores.',
    tema: 'Operación',
    fecha: '2027-02',
    lectura: '—',
    estado: 'proximamente'
  }
];
