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

## Formato de los artículos: dos capas

Mismo patrón que el portfolio:

- **Capa 1 · regla de los 15 segundos.** Cada idea es una diapositiva a pantalla completa que se lee en unos 15 s: antetítulo, titular (unas 6 palabras), una frase (unas 20) y un visual (cifra, chips, flujo, barras, iconos o SVG). Unas 40 palabras en total.
- **Capa 2 · detalle.** El botón «Ver detalle» de cada diapositiva abre una ficha (`<template id="l2-…">`) con los pasos, tablas, matices y fuentes. **Ningún texto se repite entre capas**: la ficha solo añade lo que la diapositiva no dice (los datos sí pueden repetirse cuando aportan).
- Navegación: rueda o flechas pasan de diapositiva, Esc cierra la ficha, y `#detalle-<id>` enlaza directamente a una ficha.

## Añadir un artículo

1. Copiar `articulos/_plantilla/` a `articulos/<slug>/` (slug en minúsculas, sin tildes, con guiones).
2. En el nuevo `index.html`: cambiar `data-slug="SLUG"` por el slug y rellenar título, descripción y diapositivas.
3. Cada diapositiva es un `<section class="slide" id="…">` dentro de `<main class="deck">`; su ficha es `<template id="l2-<id>">` y se abre con `data-l2="<id>"`. La numeración, el contador y los puntos laterales se generan solos.
4. Añadir la ficha en `assets/js/serie.js`, en el orden de la serie. `estado`: `borrador`, `publicado` o `proximamente` (se lista sin enlace).

## Bloques disponibles

- Capa 1: `big-num` + `big-cap`, `chips`/`chip` (`y` amarillo, `k` negro), `flow`, `eq`, `bars`, `top3`, `cards3`, `figure.diagram` (SVG).
- Capa 2: `l2-cols`, `callout` (`dark`, `check`), `quote`, `steps`, `errors`, `checklist`, `table-wrap` + `table` (fila `is-key`), `formula`, `pre`/`code`, `glossary`, `sources`, `tag` («Por confirmar») y `ui` (`Menú › Comando`).

## Probar en local

Se puede abrir `index.html` con doble clic. Para ver las URL como en producción: `python3 -m http.server` y abrir `http://localhost:8000`.

## Publicar

Pensada para Cloudflare Pages o GitHub Pages sin paso de compilación (directorio raíz `/`). Mientras sea borrador lleva `noindex`: quitar la etiqueta `<meta name="robots">` de cada página al publicar.
