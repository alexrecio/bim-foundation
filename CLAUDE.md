# BIM Foundation · reglas del proyecto

- Serie de artículos divulgativos sobre BIM, en español. Idioma de trabajo con el usuario: español.
- Estética idéntica al portfolio de Álex (repo `alexrecio/portfolio`): negro dominante, blanco, Hello Yellow `#FFFF00` como acento (nunca texto blanco sobre amarillo ni amarillo sobre blanco), grises Slate / Warm Slate, Inter 900 en mayúsculas con tracking negativo para titulares (con el punto final en amarillo), JetBrains Mono para etiquetas y datos, botones en píldora negra que pasan a amarillo, navegación en cartucho con círculo negro arriba a la izquierda.
- Sin dependencias ni compilación: HTML + `assets/css/estilo.css` + `assets/js/`. Nuevos componentes van a `estilo.css`, no en línea.
- `assets/js/serie.js` es la única lista de artículos. Un artículo nuevo = carpeta copiada de `articulos/_plantilla/` + ficha en `serie.js`.
- Contenido: cada dato técnico lleva su fuente (preferir documentación oficial). Lo no confirmado se marca con `<span class="tag">Por confirmar</span>` y se revisa antes de publicar.
- La investigación de cada artículo vive en la carpeta del proyecto (`/mnt/project-files/investigacion/`), no en el repo.
