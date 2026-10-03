// Deutsch: Oberflächentexte aus web.js, ayuda.js und precision.js sowie der Katalog der Serie.
// Schlüssel = exakter spanischer Text (getrimmt); Wert = Deutsch. Mit « · » getrennte Texte werden stückweise übersetzt.
// Fehlendes bleibt Spanisch: eine Seite mit ?i18n=debug öffnen, um offene Texte in der Konsole aufzulisten.
// Verwendet von assets/js/idioma.js. Terminologie: /mnt/project-files/traduccion/de/terminologia_de.md
(function () {
  const t = {
    // Navigation und Status
    'Inicio': 'Start', 'Artículos': 'Beiträge', 'Glosario': 'Glossar', 'Buscar': 'Suchen', 'Ayuda': 'Hilfe', 'Menú': 'Menü', 'Cerrar': 'Schließen',
    'Borrador': 'Entwurf', 'Próximamente': 'Demnächst', 'Relleno ficticio': 'Fiktiver Platzhalter', 'Ficticio': 'Fiktiv',
    'Serie bimkernel': 'Serie bimkernel', 'Tema': 'Thema', 'Primer artículo': 'Erster Beitrag',
    '← Anterior': '← Zurück', 'Siguiente →': 'Weiter →', 'Por confirmar': 'Noch zu bestätigen', 'Inferido': 'Abgeleitet',
    'Diapositivas': 'Folien', 'Ver detalle': 'Details ansehen', 'Capa 2': 'Ebene 2', 'Capa 1': 'Ebene 1', '15 segundos': '15 Sekunden',
    // Blöcke
    'Conceptos generales': 'Grundlagen', 'Estándares': 'Normen und Standards', 'Software': 'Software', 'Plataformas': 'Plattformen',
    'Interoperabilidad': 'Interoperabilität', 'Control de calidad': 'Qualitätsprüfung',
    'Lo que vale para cualquier programa': 'Was für jedes Programm gilt', 'Normas, códigos y formatos abiertos': 'Normen, Codes und offene Formate',
    'Cómo lo resuelve cada programa': 'Wie jedes Programm es löst', 'Visores y entornos en la nube': 'Viewer und Cloud-Umgebungen',
    'Intercambios entre programas': 'Austausch zwischen Programmen', 'Cómo comprobarlo': 'Wie man es prüft',
    // Bezugssystem des Lesers (Land und KRS)
    'Europa': 'Europa', 'América': 'Amerika', 'Asia y Oceanía': 'Asien und Ozeanien', 'Oriente Medio y África': 'Naher Osten und Afrika',
    'Tu sistema': 'Ihr Bezugssystem', 'cambiar': 'ändern', 'Tu país': 'Ihr Land', 'País': 'Land', 'Elegir país': 'Land wählen',
    'Datum': 'Datum', 'Altitudes': 'Höhen', 'Red nacional': 'Landesnetz', 'Red geodésica': 'Geodätisches Netz',
    'Proyección': 'Abbildung', 'EPSG habitual': 'Üblicher EPSG-Code',
    'Elige el sistema de tu obra': 'Wählen Sie das System Ihres Projekts', 'códigos EPSG para el BEP y el IFC': 'EPSG-Codes für BAP und IFC',
    'Fuentes:': 'Quellen:', 'sin código EPSG': 'ohne EPSG-Code', 'pies US': 'US-Survey-Fuß', 'pies': 'Fuß', 'en pies': 'in Fuß',
    'su sistema de altitudes': 'sein Höhensystem', 'su red geodésica nacional': 'sein nationales geodätisches Netz',
    'Desde dónde lees': 'Ihr Standort', 'Cambiar país': 'Land ändern', 'países': 'Länder', 'Los ejemplos y los datos se adaptan a tu país. Se recuerda en todos los artículos.': 'Beispiele und Daten passen sich Ihrem Land an. Die Wahl gilt für alle Beiträge.',
    'Se recuerda en todos los artículos': 'Gilt für alle Beiträge',
    'Antes de empezar': 'Bevor Sie beginnen', '¿En qué sistema trabajas': 'In welchem System arbeiten Sie',
    'Los ejemplos de coordenadas del artículo se calculan en el sistema que elijas. Se recuerda en toda la serie.': 'Die Koordinatenbeispiele des Beitrags werden in dem von Ihnen gewählten System berechnet. Die Auswahl gilt für die gesamte Serie.',
    'Las explicaciones son generales; los ejemplos, datos y coordenadas se calculan para tu país y tu sistema. Se recuerda en toda la serie.': 'Die Erklärungen sind allgemein; Beispiele, Daten und Koordinaten werden für Ihr Land und Ihr System berechnet. Die Wahl gilt für die ganze Reihe.',
    'Red geodésica nacional': 'Nationales geodätisches Netz',
    'La serie': 'Die Reihe', 'Inicio →': 'Start →', 'Consulta': 'Nachschlagen', 'Preferencias': 'Einstellungen', 'pregunta → respuesta': 'Frage → Antwort', 'Idioma': 'Sprache', 'A–Z': 'A–Z',
    'Sistema de coordenadas': 'Koordinatensystem', 'Usar este sistema': 'Dieses System verwenden', 'Ahora no': 'Jetzt nicht',
    // Koordinatenleser (Vermessungspunkt)
    'Con clip': 'Beschnitten', 'Sin clip, en el vértice': 'Unbeschnitten, am Festpunkt', 'edificio': 'Gebäude', 'origen interno': 'interner Ursprung',
    'punto base': 'Projektbasispunkt', 'vértice': 'Festpunkt',
    'Plano con origen interno, punto base, vértice topográfico y un cursor que se puede arrastrar': 'Plan mit internem Ursprung, Projektbasispunkt, Vermessungsfestpunkt und verschiebbarem Cursor',
    'Desde el origen interno': 'Vom internen Ursprung', 'Desde el punto base': 'Vom Projektbasispunkt', 'Coordenadas compartidas': 'Gemeinsame Koordinaten',
    'El Survey Point marca': 'Der Vermessungspunkt zeigt',
    // Suche
    'Todo': 'Alles', 'Conceptos': 'Begriffe', 'Ideas': 'Ideen', 'En detalle': 'Im Detail', 'Concepto': 'Begriff', 'Idea': 'Idee', 'Artículo': 'Beitrag',
    'Buscar en la serie': 'In der Serie suchen', 'Busca un concepto, una duda o un programa…': 'Suchen Sie einen Begriff, eine Frage oder ein Programm…',
    'Tipo': 'Typ', 'Bloque': 'Block', 'Todos': 'Alle', 'Cargando…': 'Wird geladen…', 'moverse': 'bewegen', 'abrir': 'öffnen',
    'buscar desde cualquier sitio': 'von überall suchen', 'Dudas frecuentes': 'Häufige Fragen', 'Conceptos clave': 'Schlüsselbegriffe',
    'Glosario completo →': 'Vollständiges Glossar →', 'Los 40 mejores resultados': 'Die 40 besten Treffer', '1 resultado': '1 Treffer',
    'Prueba con otra palabra (también vale en inglés: «survey point», «shared coordinates»), quita los filtros o mira el': 'Versuchen Sie ein anderes Wort (auch spanische Begriffe funktionieren: «coordenadas compartidas», «punto base»), entfernen Sie die Filter oder schauen Sie ins',
    'glosario': 'Glossar',
    // Lesezeit (web.js, herramientas/tiempos-lectura.mjs)
    'Lectura': 'Lesezeit', 'diapositivas': 'Folien', 'con detalle': 'mit Details',
    // So lesen Sie die Serie (Anleitung)
    'Cómo se lee': 'So lesen Sie die Serie', 'Una idea por pantalla': 'Eine Idee pro Bildschirm',
    'Titular, una frase y un dibujo. Baja con la rueda, las flechas o deslizando.': 'Überschrift, ein Satz und eine Zeichnung. Blättern Sie mit dem Mausrad, den Pfeiltasten oder durch Wischen.',
    'La letra pequeña, aparte': 'Das Kleingedruckte, separat',
    'Cifras, tablas, pasos y fuentes. Se cierra con Esc y vuelves al mismo sitio.': 'Zahlen, Tabellen, Schritte und Quellen. Mit Esc schließen Sie es und sind wieder an derselben Stelle.',
    'Seis bloques': 'Sechs Blöcke', 'De lo general a lo concreto': 'Vom Allgemeinen zum Konkreten',
    'I es para cualquier programa; III habla de programas concretos. Salta al que necesites desde el menú.': 'I gilt für jedes Programm; III behandelt konkrete Programme. Springen Sie über das Menü zum gewünschten Block.',
    'Palabras subrayadas': 'Unterstrichene Wörter', 'Definición al momento': 'Sofortige Definition',
    'Pasa el ratón o toca un término punteado y verás qué significa sin salir de la idea.': 'Fahren Sie mit der Maus über einen gepunkteten Begriff oder tippen Sie darauf, um seine Bedeutung zu sehen, ohne die Idee zu verlassen.',
    'Atajos de teclado': 'Tastenkürzel', 'o': 'oder', 'Buscar en toda la serie': 'In der gesamten Serie suchen',
    'Idea siguiente / anterior': 'Nächste / vorherige Idee', 'Cerrar el detalle o un panel': 'Details oder ein Fenster schließen', 'Esta ayuda': 'Diese Hilfe',
    'Dudas frecuentes de este artículo': 'Häufige Fragen zu diesem Beitrag',
    'Ficha completa: error típico y dónde se explica →': 'Vollständiger Eintrag: typischer Fehler und wo es erklärt wird →',
    // Filter der Startseite
    'Filtrar por tema': 'Nach Thema filtern', 'Ocultar los ficticios': 'Fiktive ausblenden',
    // Glossarseite
    'Error típico': 'Typischer Fehler', 'Más: en cada programa y ejemplo': 'Mehr: in jedem Programm und ein Beispiel', 'Más: en cada programa': 'Mehr: in jedem Programm',
    'Equivalentes por programa': 'Entsprechungen je Programm', 'Ejemplo en España': 'Beispiel in Spanien', 'Dónde se explica': 'Wo es erklärt wird',
    'Relacionados': 'Verwandte Begriffe', 'Prueba el': 'Nutzen Sie die', 'buscador de toda la serie': 'Suche in der gesamten Serie',
    'Filtrar términos (también en inglés)': 'Begriffe filtern (auch auf Spanisch)', 'Filtrar términos': 'Begriffe filtern', 'Índice alfabético': 'Alphabetisches Verzeichnis',
    // Schriftfeld (precision.js)
    'Proyecto': 'Projekt', 'Documento': 'Dokument', 'Hoja': 'Blatt', 'Escala': 'Maßstab', 'Fecha': 'Datum', 'Rev.': 'Rev.',
    'Diseño y desarrollo': 'Gestaltung und Entwicklung', 'Índice de la serie': 'Verzeichnis der Serie'
  };
  const MES = { enero: 'Januar', febrero: 'Februar', marzo: 'März', abril: 'April', mayo: 'Mai', junio: 'Juni', julio: 'Juli', agosto: 'August', septiembre: 'September', octubre: 'Oktober', noviembre: 'November', diciembre: 'Dezember' };
  const MES3 = { ENE: 'JAN', MAR: 'MÄR', ABR: 'APR', MAY: 'MAI', AGO: 'AUG', OCT: 'OKT', DIC: 'DEZ' };
  const re = [
    [/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre) (\d{4})$/, (m, a, y) => MES[a] + ' ' + y],
    [/^(ENE|FEB|MAR|ABR|MAY|JUN|JUL|AGO|SEP|OCT|NOV|DIC) (\d{4})$/, (m, a, y) => (MES3[a] || a) + ' ' + y],
    [/^Artículo (\d+)$/, 'Beitrag $1'],
    [/^([\d.,]+°) O$/, '$1 W'], [/^([\d.,]+°) E$/, '$1 O'],
    [/^(I|II|III|IV|V|VI) ([^·]+)$/, (m, r, n) => r + ' ' + (t[n] || n)],
    [/^Detalle: /, 'Details: '],
    [/^(\d+) resultados$/, '$1 Treffer'],
    [/^(\d+) de (\d+) términos$/, '$1 von $2 Begriffen'],
    [/^(\d+) de (\d+)$/, '$1 von $2'],
    [/^Un punto de ejemplo en (.+)$/, 'Ein Beispielpunkt in $1'],
    [/^Survey Point y origen compartido: a (.+) km$/, 'Vermessungspunkt und gemeinsamer Ursprung: $1 km entfernt'],
    [/^E 0,00 · N 0,00 \(su sitio es el origen\)$/, 'E 0,00 · N 0,00 (sein Standort ist der Ursprung)'],
    [/^Nada con «(.*)» en el bloque (\w+)\.$/, 'Keine Treffer für «$1» in Block $2.'],
    [/^Nada con «(.*)»\.$/, 'Keine Treffer für «$1».'],
    [/^Ningún término con «(.*)»\.$/, 'Kein Begriff passt zu «$1».']
  ];
  window.BF_I18N_UI = {
    t, re,
    // Deutsch verwendet wie Spanisch das Dezimalkomma: Zahlen werden nicht umgewandelt (leerer Selektor = keine Umwandlung)
    num: '',
    // Katalog der Serie (assets/js/serie.js): übersetzte Felder je Slug
    serie: {
      'coordenadas-compartidas': { titulo: 'Koordinatensysteme in BIM', lectura: '43 Ideen', resumen: 'Zuerst die Grundlagen, die für jedes Programm gelten (Geodäsie, Vermessung, Genauigkeit und Transformation); danach Normen, Software, Plattformen, Interoperabilität und Qualitätsprüfung.', tema: 'Georeferenzierung' },
      'niveles-de-informacion': { titulo: 'Informationsbedarfstiefe', lectura: '34 Ideen', resumen: 'In jeder Phase genau das Nötige anfordern: nicht mehr Geometrie und nicht weniger Daten.', tema: 'Information' },
      'entorno-comun-de-datos': { titulo: 'Gemeinsame Datenumgebung', lectura: '39 Ideen', resumen: 'Ein einziger Ort, an dem Informationen einen Status, eine Version und einen Verantwortlichen haben.', tema: 'Management' },
      'deteccion-de-interferencias': { titulo: 'Kollisionsprüfung', lectura: '34 Ideen', resumen: 'Kollisionen im Modell finden, bevor sie die Baustelle erreichen.', tema: 'Koordination' },
      'clasificacion-bim': { titulo: 'Klassifikationssysteme', lectura: '28 Ideen', resumen: 'Ein gemeinsamer Code, damit jedes Bauteil in jeder Phase verstanden wird.', tema: 'Daten' },
      'bep-plan-de-ejecucion': { titulo: 'BIM-Abwicklungsplan', lectura: '29 Ideen', resumen: 'Das Dokument, das die Auftraggeber-Informationsanforderungen in einen Arbeitsplan übersetzt.', tema: 'Management' },
      'gemelos-digitales': { titulo: 'Digitale Zwillinge', lectura: '32 Ideen', resumen: 'Vom Übergabemodell zum Betriebsmodell, das mit Sensoren verbunden ist.', tema: 'Betrieb' }
    }
  };
})();
