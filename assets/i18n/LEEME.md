# Idiomas de BIM Foundation

La versión ES es la raíz de la web. Cada idioma vive en `/<lang>/` con **las mismas rutas y slugs** (`/en/`, `/en/glosario/`, `/en/articulos/<slug>/`). Lo que aún no está traducido se enlaza en ES.

## Piezas
- `assets/js/idioma.js`: selector ES · EN · DE en el menú del cartucho, `BF_I18N.url()` para enlazar en el idioma del lector y traducción de los textos que generan `web.js`, `ayuda.js` y `precision.js` (con un diccionario: nadie tiene que tocar esos scripts para traducir).
- `assets/i18n/paginas.js` (generado): qué páginas existen en cada idioma.
- `assets/i18n/<lang>/ui.js`: diccionario de interfaz (clave = texto ES exacto) + fichas de `serie.js` traducidas. Lo que falte se queda en ES: abre la página con `?i18n=debug` y la consola lista lo pendiente.
- `assets/i18n/<lang>/glosario.json`, `paises.json`, `preguntas.json`: solo los textos traducidos. `herramientas/i18n.mjs` genera a partir de ellos `glosario.js`, `paises.js`, `preguntas.js` e `indice.js` (buscador).

## Página traducida
Copia del HTML ES con el texto traducido (estructura, clases, ids y `data-l2` intactos; `data-nav`, `data-title`, `data-cap`, `alt`, `aria-label` traducidos) y:
- `<html lang="en" data-lang="en" data-root="…">` con `data-root` apuntando a la raíz real (un nivel más que en ES).
- `<meta name="bf-fuente" content="<ruta ES>@<git hash-object de la ruta ES>">`: con eso el script avisa cuando el original cambia.
- Scripts, en este orden: `serie.js` · (`paises.js` · `i18n/<lang>/paises.js`) · `i18n/paginas.js` · `i18n/<lang>/ui.js` · `idioma.js` · `web.js` · `precision.js`.
- Cifras con la convención del idioma (EN: punto decimal). Las que generan los scripts se convierten solas en los elementos de `num` de `ui.js`.

## Flujo
1. Traducir o actualizar la página / los JSON.
2. `node herramientas/i18n.mjs` → regenera datos e índice y lista avisos (páginas desfasadas, términos o países sin traducir).
3. Si una página estaba desfasada y ya la has puesto al día: `node herramientas/i18n.mjs --sellar en/articulos/<slug>/index.html`.
4. Subir a `main`.

Idioma nuevo = carpeta `assets/i18n/<lang>/` + `/<lang>/` + línea en `LANGS` de `idioma.js`. Terminología: `/mnt/project-files/traduccion/<lang>/`.
