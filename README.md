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
- **Bloques a ancho completo.** Cada diapositiva es un `.bento`: a la izquierda el titular (`.b-title`) y a la derecha una rejilla de tarjetas (`.b-cards`) con cifras, esquemas y dibujos SVG. En móvil se apila y las tarjetas pasan a dos columnas.
- **Menú de diapositivas.** Lateral en escritorio y barra inferior desplegable en móvil, con el título de cada slide (`data-nav`) y la slide actual marcada.
- Navegación: rueda, flechas o el menú; Esc cierra la ficha, y `#detalle-<id>` enlaza directamente a una ficha.

## Añadir un artículo

1. Copiar `articulos/_plantilla/` a `articulos/<slug>/` (slug en minúsculas, sin tildes, con guiones).
2. En el nuevo `index.html`: cambiar `data-slug="SLUG"` por el slug y rellenar título, descripción y diapositivas.
3. Cada diapositiva es un `<section class="slide" id="…" data-nav="Título del menú">` dentro de `<main class="deck">`; su ficha es `<template id="l2-<id>">` y se abre con `data-l2="<id>"`. La numeración y el menú se generan solos.
4. Dibujar su ilustración de cubierta en `assets/img/cubiertas/<slug>.svg` (320×200, trazo negro 3, una sola pieza amarilla) y su pictograma en `assets/img/iconos/<slug>.svg` (96, trazo 4). La cubierta de la portada y la ficha del artículo se generan solas.
5. Añadir la ficha en `assets/js/serie.js`, en el orden de la serie. `estado`: `borrador`, `publicado`, `proximamente` (se lista sin enlace) o `relleno` (artículo ficticio para probar la web; sustituir o borrar antes de publicar).

## Bloques disponibles

- Estructura: `.bento` › `.b-title` + `.b-cards` (6 columnas; 2 en móvil). Tarjetas `.card` con ancho `w2`, `w3`, `w4`, `w6` y variante `g` (gris), `k` (negra) o `y` (amarilla).
- Dentro de una tarjeta: `c-label`, `c-num` (`xl`), `c-title`, `c-text`, `c-foot`, `badge` (`y`, `k`, `n`), `chips`/`chip`, `flow`, `bars`/`bar` (`is-key`), `row`, `step-n`, `ico`, `svg.draw`.
- Capa 2 (en tarjetas `.b-cards`): `h4`, `vsteps`, `callout` (`dark`, `check`), `quote`, `errors`, `checklist`, `table-wrap` + `table` (fila `is-key`), `formula`, `pre`/`code`, `glossary`, `sources`, `tag` («Por confirmar») y `ui` (`Menú › Comando`).

## Probar en local

Se puede abrir `index.html` con doble clic. Para ver las URL como en producción: `python3 -m http.server` y abrir `http://localhost:8000`.

## Publicar

Pensada para Cloudflare Pages o GitHub Pages sin paso de compilación (directorio raíz `/`). Mientras sea borrador lleva `noindex`: quitar la etiqueta `<meta name="robots">` de cada página al publicar.
