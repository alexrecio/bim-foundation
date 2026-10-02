# BIM Foundation · reglas del proyecto

- Serie de artículos divulgativos sobre BIM, en español. Idioma de trabajo con el usuario: español.
- Estética idéntica al portfolio de Álex (repo `alexrecio/portfolio`): negro dominante, blanco, Hello Yellow `#FFFF00` como acento (nunca texto blanco sobre amarillo ni amarillo sobre blanco), grises Slate / Warm Slate, Inter 900 en mayúsculas con tracking negativo para titulares (con el punto final en amarillo), JetBrains Mono para etiquetas y datos, botones en píldora negra que pasan a amarillo, navegación en cartucho con círculo negro arriba a la izquierda.
- Sin dependencias ni compilación: HTML + `assets/css/estilo.css` + `assets/js/`. Nuevos componentes van a `estilo.css`, no en línea.
- **Regla de capas (obligatoria):** capa 1 = una diapositiva a pantalla completa por idea, legible en 15 s (antetítulo, titular, una frase y un visual; ≈40 palabras). Capa 2 = ficha emergente «Ver detalle» (`<template id="l2-…">`) con todo el detalle y las fuentes. Ningún texto se repite entre capas; los datos sí pueden repetirse cuando aportan.
- **Composición:** todo lo que se pueda, visual. Cada slide es un `.bento` a ancho completo (titular + rejilla de tarjetas con cifras, esquemas y dibujos SVG) y lleva `data-nav` con su título para el menú de diapositivas (lateral en escritorio, barra inferior en móvil). La capa 2 también va en tarjetas. Probar siempre a 1440×900 (cada slide cabe en una pantalla) y a 390 px (sin scroll horizontal).
- Los cambios se publican directamente en `main` (Cloudflare Pages despliega `main`).
- `assets/js/serie.js` es la única lista de artículos. Un artículo nuevo = carpeta copiada de `articulos/_plantilla/` + ficha en `serie.js`.
- Contenido: cada dato técnico lleva su fuente (preferir documentación oficial). Lo no confirmado se marca con `<span class="tag">Por confirmar</span>` y se revisa antes de publicar.
- La investigación de cada artículo vive en la carpeta del proyecto (`/mnt/project-files/investigacion/`), no en el repo.
