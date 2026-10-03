// Catálogo de la serie. Es la única lista de artículos: la portada y la
// navegación «anterior / siguiente» de cada artículo se generan a partir de aquí.
// Para publicar un artículo nuevo: copiar articulos/_plantilla/ a articulos/<slug>/
// y añadir aquí su ficha en el orden de la serie (ver README).
window.SERIE = [
  {
    slug: 'coordenadas-compartidas',
    numero: '01',
    titulo: 'Sistemas de coordenadas en BIM',
    resumen: 'Primero los conceptos que valen para cualquier programa (geodesia, topografía, precisión y transformación); después estándares, software, plataformas, interoperabilidad y control de calidad.',
    tema: 'Georreferenciación',
    fecha: '2026-10',
    lectura: '42 ideas',
    tiempo: {es:[743,2602],en:[728,2913],de:[689,2710]}, // s: [diapositivas, con detalle] · herramientas/tiempos-lectura.mjs
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
    tiempo: {es:[605,1797],en:[607,1762],de:[554,1625]}, // s: [diapositivas, con detalle] · herramientas/tiempos-lectura.mjs
    estado: 'borrador'
  },
  {
    slug: 'entorno-comun-de-datos',
    numero: '03',
    titulo: 'Entorno común de datos (CDE)',
    resumen: 'Qué es un CDE según ISO 19650 y cómo se aplica: contenedores, cuatro estados, puertas de aprobación, metadatos, nombres y roles; después anejos nacionales, programas, plataformas, OpenCDE y control de calidad.',
    tema: 'Gestión de la información',
    fecha: '2026-10',
    lectura: '39 ideas',
    tiempo: {es:[629,2159],en:[632,2117],de:[595,1984]}, // s: [diapositivas, con detalle] · herramientas/tiempos-lectura.mjs
    estado: 'borrador'
  },
  {
    slug: 'deteccion-de-interferencias',
    numero: '04',
    titulo: 'Detección de interferencias',
    resumen: 'Tipos de choque, tolerancias, matriz y agrupación para cualquier programa; después ISO 19650 y BCF, Navisworks, Solibri y la nube, el viaje de una incidencia y cómo se cierra de verdad.',
    tema: 'Coordinación',
    fecha: '2026-10',
    lectura: '34 ideas',
    tiempo: {es:[662,1891],en:[651,1846],de:[610,1739]}, // s: [diapositivas, con detalle] · herramientas/tiempos-lectura.mjs
    estado: 'borrador'
  },
  {
    slug: 'clasificacion-bim',
    numero: '05',
    titulo: 'Sistemas de clasificación',
    resumen: 'Qué es clasificar y para qué; Uniclass, OmniClass, CCI y GuBIMclass; cómo se lleva el código al IFC y cómo se comprueba con IDS.',
    tema: 'Datos',
    fecha: '2026-10',
    lectura: '28 ideas',
    tiempo: {es:[598,1694],en:[596,1681],de:[549,1548]}, // s: [diapositivas, con detalle] · herramientas/tiempos-lectura.mjs
    estado: 'borrador'
  },
  {
    slug: 'bep-plan-de-ejecucion',
    numero: '06',
    titulo: 'Plan de ejecución BIM',
    resumen: 'Qué piden los requisitos de información (OIR, PIR, AIR, EIR) y cómo responde el BEP según ISO 19650: partes, matriz, planes de entrega, CDE, el Plan BIM español y cómo se comprueba.',
    tema: 'Gestión',
    fecha: '2026-10',
    lectura: '29 ideas',
    tiempo: {es:[506,1674],en:[484,1613],de:[467,1484]}, // s: [diapositivas, con detalle] · herramientas/tiempos-lectura.mjs
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
    tiempo: {es:[614,1964],en:[600,1899],de:[558,1764]}, // s: [diapositivas, con detalle] · herramientas/tiempos-lectura.mjs
    estado: 'borrador'
  }
];
