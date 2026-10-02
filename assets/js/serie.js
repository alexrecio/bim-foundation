// Catálogo de la serie. Es la única lista de artículos: la portada y la
// navegación «anterior / siguiente» de cada artículo se generan a partir de aquí.
// Para publicar un artículo nuevo: copiar articulos/_plantilla/ a articulos/<slug>/
// y añadir aquí su ficha en el orden de la serie (ver README).
window.SERIE = [
  {
    slug: 'coordenadas-compartidas',
    numero: '01',
    titulo: 'Coordenadas compartidas en BIM',
    resumen: 'Primero los conceptos que valen para cualquier programa (geodesia, topografía, precisión y transformación); después estándares, software, plataformas, interoperabilidad y control de calidad.',
    tema: 'Georreferenciación',
    fecha: '2026-10',
    lectura: '40 ideas',
    estado: 'borrador' // borrador | publicado | proximamente | relleno (ficticio)
  },
  {
    slug: 'niveles-de-informacion',
    numero: '02',
    titulo: 'Niveles de información',
    resumen: 'LOD, LOI y nivel de información necesario (ISO 7817-1): qué pedir de cada elemento, para qué y en qué hito, y cómo comprobarlo con IFC e IDS.',
    tema: 'Información',
    fecha: '2026-10',
    lectura: '34 ideas',
    estado: 'borrador'
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
    slug: 'deteccion-de-interferencias',
    numero: '04',
    titulo: 'Detección de interferencias',
    resumen: 'Tipos de choque, tolerancias, matriz y agrupación para cualquier programa; después ISO 19650 y BCF, Navisworks, Solibri y la nube, el viaje de una incidencia y cómo se cierra de verdad.',
    tema: 'Coordinación',
    fecha: '2026-10',
    lectura: '34 ideas',
    estado: 'borrador'
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
    slug: 'bep-plan-de-ejecucion',
    numero: '06',
    titulo: 'Plan de ejecución BIM',
    resumen: 'Qué piden los requisitos de información (OIR, PIR, AIR, EIR) y cómo responde el BEP según ISO 19650: partes, matriz, planes de entrega, CDE, el Plan BIM español y cómo se comprueba.',
    tema: 'Gestión',
    fecha: '2026-10',
    lectura: '29 ideas',
    estado: 'borrador'
  },
  {
    slug: 'gemelos-digitales',
    numero: '07',
    titulo: 'Gemelos digitales en construcción e ingeniería',
    resumen: 'Qué convierte un modelo en gemelo, qué normas lo ordenan (ISO 19650, IFC, Brick, DTDL), qué software y plataformas hay y cómo se comprueba que sus datos son fiables.',
    tema: 'Operación',
    fecha: '2026-10',
    lectura: '32 ideas',
    estado: 'borrador'
  }
];
