// Catálogo de la serie. Es la única lista de artículos: la portada y la
// navegación «anterior / siguiente» de cada artículo se generan a partir de aquí.
// Para publicar un artículo nuevo: copiar articulos/_plantilla/ a articulos/<slug>/
// y añadir aquí su ficha en el orden de la serie (ver README).
window.SERIE = [
  {
    slug: 'coordenadas-compartidas',
    numero: '01',
    titulo: 'Coordenadas compartidas en BIM',
    resumen: 'Origen interno, punto base y punto de reconocimiento; Revit, Civil 3D, IFC y el resto del software BIM, con los códigos EPSG y el marco geodésico español.',
    tema: 'Georreferenciación',
    fecha: '2026-10',
    lectura: '18 ideas',
    estado: 'borrador' // borrador | publicado | proximamente
  }
];
