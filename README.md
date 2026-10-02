# BIM Foundation

Serie de artículos divulgativos sobre BIM en español. Web estática (HTML, CSS y JS sin dependencias ni compilación), con el mismo lenguaje visual que el portfolio de Alejandro García Nicolás.

## Estructura

| Ruta | Contenido |
|---|---|
| `index.html` | Portada de la serie: presentación y lista de artículos |
| `articulos/<slug>/index.html` | Un artículo por carpeta (URL limpia: `/articulos/<slug>/`) |
| `articulos/_plantilla/` | Plantilla con todos los bloques disponibles para empezar un artículo nuevo |
| `assets/js/serie.js` | **Catálogo de la serie**: la única lista de artículos (portada y navegación anterior/siguiente) |
| `assets/js/web.js` | Menú, índice lateral automático, barra de progreso y navegación de la serie |
| `assets/css/estilo.css` | Estilos comunes (paleta, tipografías y componentes) |
| `assets/img/` | Imágenes compartidas. Las de un artículo van en su propia carpeta |

## Añadir un artículo

1. Copiar `articulos/_plantilla/` a `articulos/<slug>/` (slug en minúsculas, sin tildes, con guiones).
2. En el nuevo `index.html`: cambiar `data-slug="SLUG"` por el slug y rellenar título, descripción y textos.
3. Cada sección es un `<section id="…">` con un `h2.display`. El índice lateral y los números (01, 02…) se generan solos; `data-short` en el `h2` define el texto corto del índice.
4. Añadir la ficha en `assets/js/serie.js`, en el orden de la serie. `estado`: `borrador`, `publicado` o `proximamente` (se lista sin enlace).

## Bloques disponibles

`callout` (aviso gris), `callout dark` (advertencia en negro), `callout check` (checklist), `quote`, `steps` (pasos numerados), `errors` (lista numerada en dos columnas), `checklist`, `table-wrap` + `table` (fila `is-key` en amarillo), `formula`, `pre`/`code`, `cards3`, `figure.diagram` (SVG), `glossary`, `sources`, `tag` («Por confirmar») y `ui` (nombres de menús: `Menú › Comando`).

## Probar en local

Se puede abrir `index.html` con doble clic. Para ver las URL como en producción: `python3 -m http.server` y abrir `http://localhost:8000`.

## Publicar

Pensada para Cloudflare Pages o GitHub Pages sin paso de compilación (directorio raíz `/`). Mientras sea borrador lleva `noindex`: quitar la etiqueta `<meta name="robots">` de cada página al publicar.
