// Glosario (de). GENERADO por herramientas/i18n.mjs desde assets/i18n/de/glosario.json y assets/js/glosario.js: no editar a mano.
window.BF_GLOSARIO = [
 {
  "id": "C01",
  "slug": "georreferenciacion",
  "t": "Georeferenzierung",
  "en": "Georreferenciación",
  "b": "I",
  "d": "Verknüpfung des lokalen Systems eines Modells oder einer Zeichnung mit einem bekannten erdbezogenen Referenzsystem, sodass jeder Punkt des Modells eindeutige reale Koordinaten (E, N, H) erhält.",
  "ej": "Modell eines Gebäudes in Madrid in ETRS89 / UTM 30N (EPSG:25830) mit Höhen über dem mittleren Meeresspiegel in Alicante.",
  "eq": "Revit: Gemeinsame Koordinaten; Archicad/Allplan/Vectorworks: Survey Point; Tekla: base point; Bentley: GCS; IFC: IfcMapConversion + IfcProjectedCRS.",
  "err": "Annehmen, dass die Eingabe von Breite/Länge am Projektstandort eine Georeferenzierung ist; damit wird das Projekt nur näherungsweise verortet.",
  "rel": [
   "C02",
   "C13",
   "C19",
   "C20",
   "C22"
  ],
  "al": [
   "Georeferenzierung",
   "georeferenziert",
   "georeferenzierte",
   "georeferenzierten",
   "georeferenzieren",
   "georeferencing",
   "georreferenciación",
   "georreferenciar",
   "georreferenciado"
  ]
 },
 {
  "id": "C02",
  "slug": "sistema-de-referencia-de-coordenadas",
  "t": "Koordinatenreferenzsystem (KRS / CRS)",
  "en": "Sistema de referencia de coordenadas (SRC / CRS)",
  "b": "I",
  "d": "Kombination aus einem Datum (Lagerung bezüglich der Erde) und einem Koordinatensystem (geografisch, projiziert oder vertikal), mit der sich Positionen eindeutig angeben lassen.",
  "ej": "ETRS89 / UTM 30N (EPSG:25830) für die Lage + Alicante height (EPSG:5782) für die Höhe; zusammen bilden sie ein zusammengesetztes CRS.",
  "eq": "Civil 3D: Koordinatenzone (GEOCSASSIGN); Bentley: GCS; ArcGIS/QGIS: KBS/CRS; IFC: IfcProjectedCRS / IfcGeographicCRS.",
  "err": "Nur „UTM 30“ ohne Datum angeben: ED50 und ETRS89 in UTM 30 weichen in Spanien um rund 200 m voneinander ab.",
  "rel": [
   "C03",
   "C04",
   "C05",
   "C07"
  ],
  "al": [
   "Koordinatenreferenzsystem",
   "Koordinatenreferenzsysteme",
   "Koordinatenreferenzsystems",
   "Referenzsystem",
   "Koordinatensystem",
   "Koordinatensysteme",
   "Koordinatensystems",
   "KRS",
   "CRS",
   "KBS",
   "sistema de referencia",
   "SRC",
   "sistema de coordenadas"
  ]
 },
 {
  "id": "C03",
  "slug": "datum-geodesico",
  "t": "Geodätisches Datum",
  "en": "Datum geodésico",
  "b": "I",
  "d": "Mathematisches Modell (Ellipsoid + Orientierung und Ursprung), das festlegt, wie sich die Koordinaten auf die reale Erde beziehen. Ein Datumswechsel verschiebt die Koordinaten, obwohl der physische Punkt derselbe bleibt.",
  "ej": "Amtlich auf der Iberischen Halbinsel und den Balearen: ETRS89 (Ellipsoid GRS80); Kanaren: REGCAN95; historisch: ED50 (Internationales Ellipsoid 1924). WGS84 ist das Datum des GPS. Ohne Epoche ist es mehrdeutig: Es entfernt sich durch die Drift der Eurasischen Platte jährlich um etwa 2,5 cm von ETRS89, und heute beträgt der Unterschied mehrere Dezimeter.",
  "eq": "Wird bei der Definition des CRS gewählt: Civil 3D, Bentley GCS, IfcProjectedCRS.GeodeticDatum.",
  "err": "Alte Kartengrundlagen in ED50 ohne Transformation mit GNSS-Aufmessungen in ETRS89 mischen (Versätze von ~150–230 m).",
  "rel": [
   "C02",
   "C16",
   "C33"
  ],
  "al": [
   "Datum",
   "geodätisches Datum",
   "geodätischen Datums",
   "geodätische Datum",
   "Datumswechsel",
   "datum",
   "datum geodésico"
  ]
 },
 {
  "id": "C04",
  "slug": "codigo-epsg-wkt",
  "t": "EPSG-Code / WKT",
  "en": "Código EPSG / WKT",
  "b": "II",
  "d": "Numerische Kennung aus dem EPSG-Register (IOGP), die ein CRS, ein Datum oder eine Transformation eindeutig definiert. WKT (ISO 19162) ist die textuelle Alternative, die das CRS vollständig beschreibt.",
  "ej": "EPSG:25829, 25830, 25831 (ETRS89 / UTM 29N, 30N, 31N); EPSG:4083 und 4082 (REGCAN95 / UTM 28N und 27N); EPSG:5782 (Höhen Alicante).",
  "eq": "Revit (IFC-Exporter): EPSG-Feld; Civil 3D: GEOCSASSIGN akzeptiert EPSG-Codes; IFC: IfcProjectedCRS.Name = 'EPSG:25830'; IFC4.3: IfcWellKnownText.",
  "err": "Den Namen des Systems ohne Code angeben, einen Code eines anderen Datums verwenden (23030 ist ED50 / UTM 30N) oder einen mit anderer Achsreihenfolge (3042 ist ETRS89 / UTM 30N in der Reihenfolge Nord-Ost).",
  "rel": [
   "C02",
   "C20"
  ],
  "al": [
   "EPSG",
   "EPSG-Code",
   "EPSG-Codes",
   "WKT",
   "código EPSG"
  ]
 },
 {
  "id": "C05",
  "slug": "proyeccion-cartografica-utm-huso",
  "t": "Kartenabbildung / UTM / Zone",
  "en": "Proyección cartográfica / UTM / huso",
  "b": "I",
  "d": "Mathematische Abbildung von geografischen Koordinaten (Breite, Länge) in eine Ebene (Ost, Nord). UTM teilt die Erde in 6°-Zonen mit einem Maßstabsfaktor von 0,9996 auf dem Mittelmeridian.",
  "ej": "Das spanische Festland liegt in den Zonen 29, 30 und 31, die Kanaren in 27 und 28. Ein Projekt bleibt in einer einzigen Zone, auch wenn es nahe der Zonengrenze liegt.",
  "eq": "Parameter des CRS in allen Programmen; IFC: IfcProjectedCRS.MapProjection und MapZone.",
  "err": "Innerhalb eines Projekts die Zone wechseln oder die Zone der Kanaren verwechseln.",
  "rel": [
   "C02",
   "C08",
   "C10"
  ],
  "al": [
   "Kartenabbildung",
   "Kartenprojektion",
   "Projektion",
   "UTM",
   "UTM-Zone",
   "Zone",
   "Zonen",
   "Mercator",
   "proyección",
   "huso"
  ]
 },
 {
  "id": "C06",
  "slug": "coordenadas-locales-de-obra-vs-coordenadas-proyectadas",
  "t": "Lokale Baustellenkoordinaten vs. projizierte Koordinaten (Landeskoordinaten)",
  "en": "Coordenadas locales de obra vs. coordenadas proyectadas",
  "b": "I",
  "d": "Lokale Koordinaten haben einen für die Baustelle praktischen Ursprung und eine praktische Ausrichtung und messen „wie mit dem Maßband“; projizierte Koordinaten (z. B. UTM) sind große Zahlen und enthalten die Verzerrung der Abbildung. Eine verzerrungsarme Projektion (Low Distortion Projection, LDP) ist so ausgelegt, dass der Maßstab auf der Baustelle ~1 beträgt.",
  "ej": "Kleines Projekt (≤100 m) in lokalen Koordinaten mit zwei oder mehr Verknüpfungspunkten zu UTM. Bei langen Linienbauwerken UTM mit gehandhabtem Maßstabsfaktor oder eine LDP: Die Deutsche Bahn kam bei 6.326 Bahnhöfen auf unter 5 ppm (Clemen und Romanschek, ISPRS 2025).",
  "eq": "Revit: Projektbasispunkt vs. Vermessungspunkt; Tekla: base points; Trimble/Leica: lokale Baustellenkalibrierung (site calibration).",
  "err": "Im BIM-Programm direkt in echten UTM-Koordinaten modellieren (Genauigkeitsverlust), statt lokal zu modellieren und zu transformieren.",
  "rel": [
   "C08",
   "C12",
   "C13",
   "C15",
   "C27"
  ],
  "al": [
   "lokale Koordinaten",
   "lokalen Koordinaten",
   "Baustellenkoordinaten",
   "Baustellenkoordinatensystem",
   "projizierte Koordinaten",
   "projizierten Koordinaten",
   "Landeskoordinaten",
   "lokales System",
   "lokalen System",
   "LDP",
   "coordenadas locales",
   "coordenadas proyectadas",
   "sistema local"
  ]
 },
 {
  "id": "C07",
  "slug": "alturas-elipsoidal-ortometrica-geoide",
  "t": "Höhen: ellipsoidische Höhe, orthometrische Höhe, Geoid",
  "en": "Alturas: elipsoidal, ortométrica, geoide",
  "b": "I",
  "d": "Die ellipsoidische Höhe (h) liefert GNSS bezogen auf das Ellipsoid; die orthometrische Höhe (H) ist die „Höhe über dem Meeresspiegel“ bezogen auf das Geoid. Beide hängen über die Geoidundulation zusammen: N = h − H. Das Höhendatum legt den Nullpunkt der Höhen fest.",
  "ej": "In Spanien bezieht sich H auf den mittleren Meeresspiegel in Alicante (Netz REDNAP); das IGN veröffentlicht das Geoid EGM08-REDNAP (~3,8 cm Genauigkeit). Auf den Kanaren hat jede Insel ihren eigenen Bezug.",
  "eq": "Revit: Höhe des Vermessungspunkts; IFC: IfcMapConversion.OrthogonalHeight und IfcProjectedCRS.VerticalDatum.",
  "err": "Dem Modell ellipsoidische GNSS-Höhen als Höhenkoten geben (Fehler von ~50 m auf der Iberischen Halbinsel).",
  "rel": [
   "C03",
   "C27",
   "C33"
  ],
  "al": [
   "Geoid",
   "Geoids",
   "Quasigeoid",
   "ellipsoidische Höhe",
   "ellipsoidischen Höhe",
   "ellipsoidische Höhen",
   "orthometrische Höhe",
   "orthometrischen Höhe",
   "Normalhöhe",
   "Höhendatum",
   "Höhenbezug",
   "Geoidundulation",
   "geoide",
   "altura elipsoidal",
   "altitud",
   "ortométrica",
   "datum vertical"
  ]
 },
 {
  "id": "C08",
  "slug": "factor-de-escala-coeficiente-de-anamorfosis",
  "t": "Maßstabsfaktor / Streckenreduktion (K)",
  "en": "Factor de escala / coeficiente de anamorfosis (K)",
  "b": "I",
  "d": "Die im Gelände gemessene Strecke stimmt nicht mit der Strecke im UTM-Gitter überein. Der Gitterfaktor (Abbildungsreduktion) hängt von der Lage in der Zone ab, der Höhenfaktor (Höhenreduktion) von der Höhe über dem Ellipsoid; der kombinierte Faktor ist ihr Produkt. Es ist festzulegen, ob „im Gelände“ oder „im Gitter“ modelliert wird.",
  "ej": "Typische Abweichungen von 100 bis 400 ppm in Spanien: 1 bis 4 cm pro 100 m. Die spanische Dienstanweisung für Straßen (Nota de Servicio 03/2024) verlangt, in der Vermessung den Verzerrungskoeffizienten (K) und die Meridiankonvergenz (W) anzugeben.",
  "eq": "Civil 3D: Grid Scale Factor (Transformation); IFC: IfcMapConversion.Scale (Einheiten) und IfcMapConversionScaled (IFC4.3, FactorX/Y/Z); Trimble/Leica: Kalibrierung. Revit: wird nicht unterstützt (Festlegung im BAP).",
  "err": "Die beiden Verwendungen von IfcMapConversion.Scale verwechseln: Der bSI-Leitfaden 2020, OSArch und Bonsai nutzen es als kombinierten Faktor, während IFC 4.3 ADD2 es der Einheitenumrechnung vorbehält und den Gitterfaktor in IfcMapConversionScaled verlagert. Ebenfalls ein Fehler: den Faktor bei langen Linienbauwerken zu ignorieren.",
  "rel": [
   "C05",
   "C06",
   "C19",
   "C25"
  ],
  "al": [
   "Maßstabsfaktor",
   "Maßstabsfaktors",
   "Maßstabsfaktoren",
   "Streckenreduktion",
   "Abbildungsreduktion",
   "Höhenreduktion",
   "kombinierter Faktor",
   "kombinierten Faktor",
   "Gitterfaktor",
   "Scale Factor",
   "factor de escala",
   "anamorfosis",
   "factor combinado"
  ]
 },
 {
  "id": "C09",
  "slug": "nortes-verdadero-de-cuadricula-magnetico-de-proyecto",
  "t": "Nordrichtungen: Geografisch Nord, Gitter-Nord, magnetisch Nord, Projektnord",
  "en": "Nortes: verdadero, de cuadrícula, magnético, de proyecto",
  "b": "I",
  "d": "Geografisch Nord (rechtweisend): Richtung zum Pol. Gitter-Nord: N-Achse der Abbildung (UTM). Magnetisch Nord: Richtung der Kompassnadel. Projektnord: „Oben“-Richtung des Modells, ausgerichtet an den Gebäudeachsen für bequemes Arbeiten.",
  "ej": "In Spanien kann der Unterschied zwischen geografisch Nord und UTM-Gitter-Nord (Meridiankonvergenz) an den Zonenrändern mehr als 2° betragen.",
  "eq": "Revit: Projektnord / Geografisch Nord; Archicad: Project North; Tekla: angle to North; IFC: TrueNorth und Rotation von IfcMapConversion (bezogen auf Gitter-Nord).",
  "err": "Als „Winkel zu Geografisch Nord“ unbemerkt den Winkel zum UTM-Gitter eingeben oder umgekehrt.",
  "rel": [
   "C10",
   "C21"
  ],
  "al": [
   "Geografisch Nord",
   "geografisch Nord",
   "geografischen Norden",
   "Gitter-Nord",
   "Gitternord",
   "magnetisch Nord",
   "magnetischen Norden",
   "Projektnord",
   "Projektnorden",
   "Nordrichtung",
   "Nordrichtungen",
   "True North",
   "Project North",
   "norte verdadero",
   "norte de cuadrícula",
   "norte magnético",
   "norte de proyecto"
  ]
 },
 {
  "id": "C10",
  "slug": "convergencia-de-meridianos",
  "t": "Meridiankonvergenz (W) / Drehwinkel",
  "en": "Convergencia de meridianos (W) / ángulo de rotación",
  "b": "I",
  "d": "Winkel zwischen geografisch Nord und Gitter-Nord in einem Punkt. Bei BIM muss für den Drehwinkel der Transformation lokal→Welt angegeben werden, auf welche Nordrichtung er sich bezieht und in welchem Drehsinn er gemessen wird.",
  "ej": "Null auf dem Mittelmeridian der Zone (3° W für Zone 30) und zu den Rändern hin zunehmend.",
  "eq": "Revit: Winkel im Uhrzeigersinn gemessen; Archicad: gegen den Uhrzeigersinn ab +X; IFC: XAxisAbscissa / XAxisOrdinate (gegen den Uhrzeigersinn ab Ost).",
  "err": "Drehsinn-Konventionen verschiedener Programme mischen (Revit vs. Archicad) und ein verdrehtes Modell erhalten.",
  "rel": [
   "C09",
   "C19"
  ],
  "al": [
   "Meridiankonvergenz",
   "Konvergenz",
   "Drehwinkel",
   "Drehwinkels",
   "grid convergence",
   "convergencia",
   "convergencia de meridianos"
  ]
 },
 {
  "id": "C11",
  "slug": "origen-interno",
  "t": "Interner Ursprung",
  "en": "Origen interno",
  "b": "III",
  "d": "Fester Punkt 0,0,0 der Geometrie-Engine des Programms, auf den sich alle internen Koordinaten beziehen. Er bewegt sich nicht; die Geometrie sollte in seiner Nähe modelliert werden.",
  "ej": "In Revit ist er seit Version 2020.2 sichtbar.",
  "eq": "Revit: Interner Ursprung; Archicad: Project Origin; Tekla: model origin; Allplan: globaler Punkt 0,0,0; Vectorworks: Internal Origin; BricsCAD: WCS 0,0,0; Bonsai/IFC: lokaler Ursprung.",
  "err": "Ein DWG in UTM „Ursprung auf Ursprung“ importieren: Die Geometrie liegt dann Kilometer vom internen Ursprung entfernt.",
  "rel": [
   "C12",
   "C13",
   "C15"
  ],
  "al": [
   "Interner Ursprung",
   "interner Ursprung",
   "internen Ursprung",
   "internen Ursprungs",
   "internem Ursprung",
   "Internal Origin",
   "origen interno"
  ]
 },
 {
  "id": "C12",
  "slug": "punto-base-del-proyecto",
  "t": "Projektbasispunkt (und Entsprechungen)",
  "en": "Punto base del proyecto (y equivalentes)",
  "b": "III",
  "d": "Lokale Referenz des Projekts, meist an einer Ecke oder einem Achsschnittpunkt, die zum Bemaßen und Abstecken in Gebäudekoordinaten dient. Sie ist nicht die Verbindung zur realen Welt.",
  "ej": "Schnittpunkt der Achsen A-1 eines Tragwerks.",
  "eq": "Revit: Projektbasispunkt; Tekla: project base point; Allplan 2026: Base Point; Vectorworks: User Origin; BricsCAD: Project Location; IFC: Placement von IfcSite/IfcBuilding.",
  "err": "Den Projektbasispunkt verschieben in der Annahme, damit das Modell zu georeferenzieren.",
  "rel": [
   "C11",
   "C13",
   "C14"
  ],
  "al": [
   "Projektbasispunkt",
   "Projektbasispunkts",
   "Projektbasispunktes",
   "Basispunkt",
   "Basispunkts",
   "Project Base Point",
   "punto base"
  ]
 },
 {
  "id": "C13",
  "slug": "punto-de-reconocimiento-survey-point",
  "t": "Vermessungspunkt / Survey Point (und Entsprechungen)",
  "en": "Punto de reconocimiento / Survey Point (y equivalentes)",
  "b": "III",
  "d": "Markierung, die Koordinaten des gemeinsamen bzw. des Vermessungssystems anzeigt. Beschnitten liegt sie im Ursprung dieses Systems, und ihr Verschieben versetzt das System gegenüber dem Modell; unbeschnitten wird sie auf einen bekannten Punkt (einen Absteckpunkt) gesetzt, ohne etwas zu verändern, nur um Koordinaten abzulesen oder zu prüfen.",
  "ej": "Unbeschnitten auf einen Absteckpunkt mit bekannten Koordinaten in ETRS89 / UTM 30N gesetzt, um zu prüfen, ob das Modell sie richtig liest.",
  "eq": "Revit: Vermessungspunkt (beschnitten oder unbeschnitten); Archicad (AC25+): Survey Point; Allplan 2026 und Vectorworks: Survey Point; BricsCAD: Survey Location; Tekla: base point mit E/N; IFC: IfcMapConversion.",
  "err": "Den beschnittenen Punkt verschieben, obwohl der unbeschnittene gemeint war (oder umgekehrt), und damit das gesamte gemeinsame System versetzen.",
  "rel": [
   "C11",
   "C12",
   "C14",
   "C19"
  ],
  "al": [
   "Vermessungspunkt",
   "Vermessungspunkts",
   "Vermessungspunktes",
   "Vermessungspunkte",
   "Survey Point",
   "punto de reconocimiento"
  ]
 },
 {
  "id": "C14",
  "slug": "coordenadas-compartidas",
  "t": "Gemeinsame Koordinaten (übernehmen / veröffentlichen)",
  "en": "Coordenadas compartidas (adquirir / publicar)",
  "b": "III",
  "d": "Mechanismus, mit dem mehrere verknüpfte Modelle dasselbe Koordinatensystem verwenden. Man übernimmt das System eines anderen Modells oder veröffentlicht das eigene in dieses; benannte Standorte erlauben mehrere Positionen desselben Modells.",
  "ej": "Master-Lageplanmodell, das die Koordinaten aus dem Vermessungsmodell übernimmt und sie an Architektur, Tragwerk und TGA veröffentlicht.",
  "eq": "Revit: Koordinaten übernehmen / Koordinaten veröffentlichen, Shared Site, Relocate Project, Reset Shared Coordinates; ACC: bei Cloud Worksharing nur übernehmen; andere Programme: gleiche Logik mit ihrem Survey Point.",
  "err": "„In denselben Koordinaten liegen“ mit „Koordinaten gemeinsam nutzen“ verwechseln; Veröffentlichen mit einem DWG verwenden.",
  "rel": [
   "C13",
   "C17",
   "C30"
  ],
  "al": [
   "Gemeinsame Koordinaten",
   "gemeinsame Koordinaten",
   "gemeinsamen Koordinaten",
   "Koordinaten übernehmen",
   "Koordinaten veröffentlichen",
   "Shared Coordinates",
   "coordenadas compartidas",
   "adquirir coordenadas",
   "publicar coordenadas"
  ]
 },
 {
  "id": "C15",
  "slug": "precision-en-coma-flotante-y-modelos-lejos-del-origen",
  "t": "Gleitkommagenauigkeit und Modelle fern vom Ursprung",
  "en": "Precisión en coma flotante y modelos lejos del origen",
  "b": "I",
  "d": "Grafik-Engines speichern Koordinaten mit einer begrenzten Zahl signifikanter Stellen: Fern vom Ursprung geht Genauigkeit verloren, die Geometrie „zittert“ und es treten Fehler auf. Deshalb wird nahe am Ursprung modelliert und eine Transformation angewendet (False Origin, falscher Ursprung).",
  "ej": "Revit begrenzt die Geometrie auf 16 km (10 Meilen) vom internen Ursprung; Bonsai warnt ab etwa 5 km vor Fehlern im Millimeterbereich.",
  "eq": "Revit: Entfernungsgrenze; Bonsai: False Origin; Navisworks/Solibri: Flackern bei großen Koordinaten; Bentley: Global Origin.",
  "err": "Im BIM-Programm direkt in UTM-Koordinaten (400000, 4400000) modellieren.",
  "rel": [
   "C06",
   "C11",
   "C26"
  ],
  "al": [
   "Gleitkomma",
   "Gleitkommagenauigkeit",
   "Gleitkommazahlen",
   "einfache Genauigkeit",
   "große Koordinaten",
   "großen Koordinaten",
   "float32",
   "float64",
   "False Origin",
   "falscher Ursprung",
   "falschen Ursprung",
   "coma flotante",
   "precisión simple",
   "false origin"
  ]
 },
 {
  "id": "C16",
  "slug": "transformacion-de-coordenadas",
  "t": "Koordinatentransformation",
  "en": "Transformación de coordenadas",
  "b": "I",
  "d": "Operation, die Koordinaten von einem System in ein anderes umrechnet: von lokal nach projiziert (Verschiebung + Drehung + Maßstab, Helmert-Transformation 2D/3D) oder zwischen Datumsangaben (z. B. ED50→ETRS89 mit dem NTv2-Gitter des IGN).",
  "ej": "NTv2-Gitter: PENR2009 und BALR2009 des IGN (wenige cm), SPED2ETV2 aus dem EPSG-Register (EPSG:15932, 0,1–0,2 m) und das des ICGC in Katalonien (EPSG:5661). Es empfiehlt sich zu prüfen, welches jedes Programm verwendet.",
  "eq": "IFC: IfcMapConversion (lokal→projiziert); CloudCompare: Global Shift; FME/PROJ/QGIS: Umprojektion; Civil 3D: Transformationen aus dem Katalog.",
  "err": "Drehung und Verschiebung in umgekehrter Reihenfolge anwenden (im Modelical-Workflow mit Punktwolken wird zuerst verschoben und dann gedreht).",
  "rel": [
   "C03",
   "C19",
   "C26"
  ],
  "al": [
   "Koordinatentransformation",
   "Koordinatentransformationen",
   "Transformation",
   "Transformationen",
   "transformieren",
   "transformiert",
   "Datumsübergang",
   "Helmert",
   "Helmert-Transformation",
   "NTv2",
   "transformación"
  ]
 },
 {
  "id": "C17",
  "slug": "federacion-y-alineacion-de-modelos",
  "t": "Modellföderation und Ausrichtung",
  "en": "Federación y alineación de modelos",
  "b": "IV",
  "d": "Modelle verschiedener Fachdisziplinen und Programme in einem gemeinsamen Viewer zusammenführen, um sie zu koordinieren (Kollisionsprüfung, Prüfung). Das funktioniert nur, wenn alle dasselbe Koordinatensystem verwenden.",
  "ej": "Architektur- (Archicad), Tragwerks- (Tekla) und TGA-Modelle (Revit), föderiert in Navisworks oder BIMcollab.",
  "eq": "Navisworks: Units and Transform; ACC: Transform; BIMcollab Zoom: IFC Global Origin / Use georeferencing; Solibri; Trimble Connect; Dalux.",
  "err": "Die Transform-Funktion des Viewers als Dauerlösung nutzen, statt den Ursprung im Quellmodell zu korrigieren.",
  "rel": [
   "C14",
   "C24",
   "C30",
   "C32"
  ],
  "al": [
   "Modellföderation",
   "Föderation",
   "föderieren",
   "föderiert",
   "föderierte",
   "föderierten",
   "Koordinationsmodell",
   "Koordinationsmodells",
   "Ausrichtung",
   "federación",
   "federar",
   "federado"
  ]
 },
 {
  "id": "C18",
  "slug": "ifcsite",
  "t": "IfcSite (Breite, Länge, Höhe)",
  "en": "IfcSite (latitud, longitud, elevación)",
  "b": "II",
  "d": "Attribute des IFC-Grundstücks, die eine Näherungsposition in WGS84 (Grad, Minuten, Sekunden) und eine Höhe angeben. Sie sind informativ: Sie definieren keine genaue Transformation.",
  "ej": "Breite 40°25'N, Länge 3°42'W für ein Projekt in Madrid.",
  "eq": "Revit: Projektstandort (Karte); Archicad: Project Location; alle IFC-Exporter.",
  "err": "Breite/Länge von IfcSite als genaue Georeferenzierung betrachten oder auf 0 belassen (laut TU Delft häufig).",
  "rel": [
   "C19",
   "C22",
   "C29"
  ],
  "al": [
   "IfcSite",
   "RefLatitude",
   "RefLongitude",
   "RefElevation"
  ]
 },
 {
  "id": "C19",
  "slug": "ifcmapconversion",
  "t": "IfcMapConversion (sowie IfcMapConversionScaled, IfcRigidOperation)",
  "en": "IfcMapConversion (y IfcMapConversionScaled, IfcRigidOperation)",
  "b": "II",
  "d": "IFC-Entität (seit IFC4), die die Transformation vom lokalen System des Modells in das Karten-CRS definiert: Eastings, Northings, OrthogonalHeight, Drehung (XAxisAbscissa/Ordinate) und Maßstab. IFC4.3 ergänzt IfcMapConversionScaled (FactorX/Y/Z) und IfcRigidOperation (nur Verschiebung).",
  "ej": "IFCMAPCONVERSION(#ctx,#crs,440125.250,4474310.800,655.320,0.9993908,0.0348995,1.) für EPSG:25830.",
  "eq": "Revit (IFC4 mit EPSG), Archicad (Survey Point and Project Origin), Tekla (Option IfcMapConversion), Vectorworks, Bonsai, Allplan; in IFC2x3 wird es mit ePSet_MapConversion nachgebildet.",
  "err": "Doppelte Verschiebung: Koordinaten sowohl in IfcMapConversion als auch im Placement von IfcSite.",
  "rel": [
   "C13",
   "C20",
   "C21",
   "C22",
   "C24"
  ],
  "al": [
   "IfcMapConversion",
   "IfcMapConversionScaled",
   "IfcRigidOperation",
   "ePSet_MapConversion"
  ]
 },
 {
  "id": "C20",
  "slug": "ifcprojectedcrs-ifcgeographiccrs",
  "t": "IfcProjectedCRS / IfcGeographicCRS",
  "en": "IfcProjectedCRS / IfcGeographicCRS",
  "b": "II",
  "d": "IFC-Entität, die das Ziel-CRS von IfcMapConversion beschreibt: Name (EPSG-Code), geodätisches Datum, Höhendatum, Abbildung, Zone und Einheiten. In IFC4.3 muss das CRS einen EPSG-Code oder ein WKT enthalten.",
  "ej": "Name 'EPSG:25830', GeodeticDatum 'EPSG:6258' (ETRS89), VerticalDatum bezogen auf Alicante, MapZone '30N'.",
  "eq": "EPSG-Feld im IFC-Exporter von Revit, Archicad, Vectorworks, Bonsai; IFC2x3: ePSet_ProjectedCRS.",
  "err": "Den Namen leer lassen oder einen Freitext eintragen, den Viewer nicht auswerten können.",
  "rel": [
   "C04",
   "C19"
  ],
  "al": [
   "IfcProjectedCRS",
   "IfcGeographicCRS",
   "IfcCoordinateReferenceSystem",
   "ePSet_ProjectedCRS"
  ]
 },
 {
  "id": "C21",
  "slug": "contexto-geometrico-worldcoordinatesystem-y-truenorth",
  "t": "Geometrischer Kontext: WorldCoordinateSystem und TrueNorth",
  "en": "Contexto geométrico: WorldCoordinateSystem y TrueNorth",
  "b": "II",
  "d": "Darstellungskontext des IFC-Projekts, der das Weltkoordinatensystem und die Richtung nach geografisch Nord enthält. Ist IfcMapConversion vorhanden, ist TrueNorth nur informativ.",
  "ej": "TrueNorth um 12° gegenüber der Y-Achse des Modells gedreht.",
  "eq": "Revit „Coordinate Base“ mit den Varianten „oriented in True North“; alle Exporter.",
  "err": "TrueNorth passt nicht zur Drehung von IfcMapConversion.",
  "rel": [
   "C09",
   "C19",
   "C22"
  ],
  "al": [
   "TrueNorth",
   "WorldCoordinateSystem",
   "IfcGeometricRepresentationContext",
   "Darstellungskontext"
  ]
 },
 {
  "id": "C22",
  "slug": "logeoref-y-validacion-de-georreferenciacion-ifc",
  "t": "LoGeoRef und Prüfung der IFC-Georeferenzierung",
  "en": "LoGeoRef y validación de georreferenciación IFC",
  "b": "II",
  "d": "Klassifizierung (HTW Dresden), wie vollständig die Georeferenzierung eines IFC ist: 10 Postanschrift, 20 Breite/Länge in IfcSite, 30 Placement des obersten Elements, 40 WorldCoordinateSystem + TrueNorth, 50 IfcMapConversion + IfcProjectedCRS (empfohlen).",
  "ej": "LoGeoRef 50 im BAP fordern und mit IfcGeoRefChecker, IfcGref oder IDS prüfen.",
  "eq": "IfcGeoRefChecker, IfcGref (TU Delft), Bonsai, IDS-Validatoren, BIM Fit Check (buildingSMART Deutschland).",
  "err": "Ein IFC als gültig akzeptieren, das nur LoGeoRef 20 (Breite/Länge) erreicht.",
  "rel": [
   "C18",
   "C19",
   "C20",
   "C21",
   "C32"
  ],
  "al": [
   "LoGeoRef",
   "Level of Georeferencing",
   "IfcGeoRefChecker"
  ]
 },
 {
  "id": "C23",
  "slug": "ifc-4-3-para-infraestructura-alineaciones-y-pk",
  "t": "IFC 4.3 für Infrastruktur: Achsen (Alignment) und Stationierung",
  "en": "IFC 4.3 para infraestructura: alineaciones y PK",
  "b": "II",
  "d": "IFC 4.3 (ISO 16739-1:2024) umfasst Straßen, Bahnen, Brücken und Häfen, mit Achsen (Lageplan, Gradiente, Querneigung) und linearer Referenzierung (Stationierung) sowie neuen Entitäten zur Georeferenzierung.",
  "ej": "Autobahn-Hauptstrecke von Station 0+000 bis 12+500, georeferenziert in EPSG:25830.",
  "eq": "Civil 3D, OpenRoads/OpenRail, Istram, Allplan Civil, Bonsai.",
  "err": "Ein Linienbauwerk als generisches IFC4 exportieren und dabei Achse und Stationierung verlieren.",
  "rel": [
   "C19",
   "C25",
   "C27"
  ],
  "al": [
   "IFC 4.3",
   "IFC4.3",
   "Achse",
   "Achsen",
   "Trassierung",
   "Alignment",
   "Stationierung",
   "Station",
   "lineare Referenzierung",
   "alineación"
  ]
 },
 {
  "id": "C24",
  "slug": "exportacion-importacion-ifc-con-coordenadas",
  "t": "IFC-Export/-Import mit Koordinaten",
  "en": "Exportación/importación IFC con coordenadas",
  "b": "V",
  "d": "Einstellungen des IFC-Exporters/-Importers jedes Programms, die bestimmen, welcher Ursprung geschrieben wird (intern, Projektbasispunkt, Vermessungspunkt, gemeinsam) und ob IfcMapConversion/IfcProjectedCRS oder in IFC2x3 Property Sets erzeugt werden.",
  "ej": "Revit: Coordinate Base = Shared Coordinates + EPSG in IFC4; Archicad: Survey Point and Project Origin; Tekla: IfcMapConversion oder IfcSite.",
  "eq": "Revit IFC exporter (6 Optionen für Coordinate Base); Archicad-Translator; Tekla IFC export; Vectorworks; Allplan; CYPE; BricsCAD.",
  "err": "IFC-Dateien, die nach unterschiedlichen Kriterien exportiert wurden, im selben Viewer mischen.",
  "rel": [
   "C19",
   "C20",
   "C17"
  ],
  "al": [
   "IFC-Export",
   "IFC-Exports",
   "IFC-Import",
   "IFC-Exporter",
   "IFC exportieren",
   "IFC-Exportes",
   "Coordinate Base",
   "exportación IFC",
   "exportar IFC",
   "exportador IFC"
  ]
 },
 {
  "id": "C25",
  "slug": "estrategia-de-coordenadas-en-eir-bep",
  "t": "Koordinatenstrategie in AIA/BAP (ISO 19650)",
  "en": "Estrategia de coordenadas en EIR/BEP (ISO 19650)",
  "b": "II",
  "d": "In den Auftraggeber-Informationsanforderungen (AIA) und im BIM-Abwicklungsplan (BAP) dokumentierte Vereinbarung, die CRS, Höhendatum, Kontrollpunkte, Drehung, Einheiten, Maßstabsfaktor, Verantwortlichen für das Lageplanmodell und Exportweise festlegt.",
  "ej": "Der spanische Leitfaden es.BIM verlangt einen in X, Y, Z georeferenzierten „Koordinationsbasispunkt des Projekts“ außerhalb des Gebäudes mit positiven Koordinaten sowie mindestens zwei dokumentierte Punkte. Das ETS-Handbuch (Baskenland, 2024) legt ETRS89 (ETRF2000, Epoche 2017.0), UTM 30 und das Geoid EGM08-REDNAP fest.",
  "eq": "Softwareunabhängig; wird in jedem Programm über den jeweiligen Survey Point umgesetzt.",
  "err": "Die Strategie nicht zu Projektbeginn vereinbaren und den Versatz erst bei der ersten Föderation entdecken.",
  "rel": [
   "C01",
   "C08",
   "C13",
   "C32"
  ],
  "al": [
   "AIA",
   "BAP",
   "BIM-Abwicklungsplan",
   "BIM-Abwicklungsplans",
   "Auftraggeber-Informationsanforderungen",
   "Koordinatenstrategie",
   "BEP",
   "EIR",
   "ISO 19650",
   "DIN EN ISO 19650"
  ]
 },
 {
  "id": "C26",
  "slug": "nubes-de-puntos-georreferenciadas",
  "t": "Georeferenzierte Punktwolken",
  "en": "Nubes de puntos georreferenciadas",
  "b": "III",
  "d": "Laserscans oder photogrammetrische Aufnahmen, die in einem realen Koordinatensystem registriert sind. Wegen ihrer großen Koordinaten brauchen sie meist eine globale Verschiebung, bevor sie ins BIM-Programm übernommen werden.",
  "ej": "Workflow ReCap → Dynamo → CloudCompare (Global Shift) → ReCap → Revit Ursprung auf Ursprung (Modelical).",
  "eq": "ReCap, CloudCompare (Global Shift), Trimble RealWorks, Leica Cyclone; in Revit Einfügen Ursprung auf Ursprung oder über gemeinsame Koordinaten.",
  "err": "„Tanzende Punkte“ beim Einfügen einer Punktwolke in UTM ohne Verschiebung.",
  "rel": [
   "C15",
   "C16",
   "C27"
  ],
  "al": [
   "Punktwolke",
   "Punktwolken",
   "georeferenzierte Punktwolke",
   "georeferenzierte Punktwolken",
   "Laserscan",
   "Laserscans",
   "nube de puntos",
   "nubes de puntos"
  ]
 },
 {
  "id": "C27",
  "slug": "topografia-replanteo-y-gnss",
  "t": "Vermessung, Absteckung und GNSS",
  "en": "Topografía, replanteo y GNSS",
  "b": "I",
  "d": "Feldarbeiten, die das Gelände aufmessen und das Projekt auf der Baustelle abstecken. Sie erfordern Absteckpunkte mit bekannten Koordinaten und eine Kalibrierung, die das Baustellensystem mit GNSS verknüpft.",
  "ej": "Netz von Absteckpunkten, angeschlossen an das Netz ERGNSS/REGENTE des IGN.",
  "eq": "Trimble Business Center/Siteworks, Leica Infinity/Captivate (Baustellenkalibrierung), Civil 3D, Istram, TcpMDT.",
  "err": "Mit Koordinaten aus einem Modell abstecken, das nicht das System des Vermessers verwendete.",
  "rel": [
   "C06",
   "C07",
   "C08",
   "C26"
  ],
  "al": [
   "Vermessung",
   "vermessen",
   "Absteckung",
   "abstecken",
   "Absteckpunkt",
   "Absteckpunkte",
   "GNSS",
   "GNSS-Messung",
   "Totalstation",
   "Tachymeter",
   "topografía",
   "replanteo",
   "estación total"
  ]
 },
 {
  "id": "C28",
  "slug": "integracion-bim-gis",
  "t": "BIM-GIS-Integration (GeoBIM)",
  "en": "Integración BIM-GIS",
  "b": "IV",
  "d": "Gemeinsame Nutzung von BIM-Modellen und Geodaten (Kartengrundlagen, 3D-Stadtmodell) in derselben Umgebung; dazu muss das BIM-Modell korrekt georeferenziert sein und im richtigen CRS vorliegen.",
  "ej": "IFC-Modell des Projekts, geladen auf die Kartengrundlage des IGN oder ein kommunales CityGML.",
  "eq": "ArcGIS GeoBIM / ArcGIS Pro, QGIS, FME, Cesium (3D Tiles), Autodesk Forma, Bentley iTwin.",
  "err": "Ein IFC ohne IfcMapConversion ins GIS übernehmen: Es erscheint im Ozean vor Ghana (0,0).",
  "rel": [
   "C02",
   "C19",
   "C29"
  ],
  "al": [
   "BIM-GIS",
   "BIM-GIS-Integration",
   "GIS",
   "GeoBIM"
  ]
 },
 {
  "id": "C29",
  "slug": "geolocalizacion-ubicacion-del-proyecto",
  "t": "Projektstandort / Geolokalisierung",
  "en": "Geolocalización / ubicación del proyecto",
  "b": "III",
  "d": "Näherungsposition des Projekts (Adresse oder Breite/Länge) für Sonnenstand, Klima oder Kartenkontext. Ersetzt nicht die gemeinsamen Koordinaten.",
  "ej": "Standort per Postanschrift in Revit oder Forma für Besonnungsstudien.",
  "eq": "Revit: Standort (Internet-Kartendienst); Archicad: Project Location; Forma; IfcSite Breite/Länge; IfcPostalAddress.",
  "err": "Annehmen, dass die Verortung auf der Karte das Modell bereits in korrekte UTM-Koordinaten bringt.",
  "rel": [
   "C18",
   "C28"
  ],
  "al": [
   "Projektstandort",
   "Projektstandorts",
   "Standort",
   "Geolokalisierung",
   "geolokalisiert",
   "geolokalisieren",
   "Project Location",
   "geolocalización",
   "ubicación del proyecto"
  ]
 },
 {
  "id": "C30",
  "slug": "coordinacion-en-la-nube",
  "t": "Koordination in der Cloud (CDE)",
  "en": "Coordinación en la nube (CDE)",
  "b": "IV",
  "d": "Gemeinsame Datenumgebungen (ACC/BIM 360, Trimble Connect, Bentley iTwin, Dalux, BIMcollab Cloud, usBIM), in denen Modelle geteilt und föderiert werden; jede hat eigene Regeln für Koordinaten und Transformationen.",
  "ej": "In ACC mit Cloud Worksharing kann Veröffentlichen deaktiviert sein, sodass nur aus dem Master übernommen werden kann.",
  "eq": "ACC Model Coordination (Transform), Trimble Connect, iTwin (Geolokalisierung linear/projected), Dalux, usBIM.",
  "err": "Das Modell nur in der Cloud transformieren und vergessen, dass das Original weiterhin versetzt ist.",
  "rel": [
   "C14",
   "C17"
  ],
  "al": [
   "CDE",
   "gemeinsame Datenumgebung",
   "gemeinsamen Datenumgebung",
   "Common Data Environment",
   "Cloud",
   "entorno común de datos"
  ]
 },
 {
  "id": "C31",
  "slug": "sistemas-de-coordenadas-cad",
  "t": "CAD-Koordinatensysteme (WKS/BKS, DWG, DGN)",
  "en": "Sistemas de coordenadas CAD (SCU/SCP, DWG, DGN)",
  "b": "III",
  "d": "Im CAD wird die Geometrie direkt in Koordinaten gezeichnet (WKS/WCS), das BKS/UCS ist ein Hilfssystem. DGN-Dateien von Bentley ergänzen GCS und Global Origin.",
  "ej": "Vermessungsplan als DWG in UTM 30N mit einem gedrehten BKS, das beim Verknüpfen verwirrt.",
  "eq": "AutoCAD/Civil 3D: WKS/BKS, GEOGRAPHICLOCATION; MicroStation: GCS, Global Origin, ACS; BricsCAD.",
  "err": "Ein DWG mit zusätzlichen BKS verknüpfen, ohne sie zu prüfen.",
  "rel": [
   "C02",
   "C11",
   "C14"
  ],
  "al": [
   "WKS",
   "BKS",
   "WCS",
   "UCS",
   "Weltkoordinatensystem",
   "Benutzerkoordinatensystem",
   "DWG",
   "DGN",
   "SCU",
   "SCP"
  ]
 },
 {
  "id": "C32",
  "slug": "errores-comunes-y-control-de-calidad-de-coordenadas",
  "t": "Typische Fehler und Qualitätsprüfung von Koordinaten",
  "en": "Errores comunes y control de calidad de coordenadas",
  "b": "V",
  "d": "Systematische Prüfungen, um Verschiebungen, Verdrehungen und Höhenfehler zu erkennen: Kontrollobjekte an Kontrollpunkten, Prüfung in einem neutralen Viewer, Kontrolle des LoGeoRef und Vergleich der Koordinaten bekannter Punkte.",
  "ej": "Kontrollwürfel von 1 m³ oder physischer „Basispunkt“ (ETS-Handbuch der baskischen Regierung) an jedem Kontrollpunkt.",
  "eq": "Navisworks, Solibri, BIMcollab, IfcGeoRefChecker, IfcGref, Bonsai, IDS.",
  "err": "Nur visuell im Ursprungsprogramm prüfen.",
  "rel": [
   "C17",
   "C22",
   "C25"
  ],
  "al": [
   "Qualitätsprüfung",
   "Qualitätskontrolle",
   "Kontrollpunkt",
   "Kontrollpunkte",
   "Kontrollpunkten",
   "Kontrollwürfel",
   "QA/QC",
   "control de calidad"
  ]
 },
 {
  "id": "C33",
  "slug": "marco-geodesico-y-legal-espanol",
  "t": "Geodätischer und rechtlicher Rahmen Spaniens",
  "en": "Marco geodésico y legal español",
  "b": "I",
  "d": "Das Königliche Dekret RD 1071/2007 legt ETRS89 (Iberische Halbinsel und Balearen) und REGCAN95 (Kanaren) als amtliche Systeme fest, ebenso die UTM-Abbildung und Höhen bezogen auf den mittleren Meeresspiegel in Alicante. Das IGN unterhält die Netze REGENTE, REDNAP und ERGNSS.",
  "ej": "Öffentliches Projekt in Spanien: EPSG:25830 + REDNAP-Höhen (EPSG:5782). Die Orden PCM/818/2023 und der BIM-Plan des IGN verlangen As-built-Modelle in IFC 4.3, bezogen auf das amtliche geodätische System.",
  "eq": "Betrifft die Wahl des CRS in allen Programmen.",
  "err": "Bei neuen Aufträgen weiter ED50 verwenden oder Systeme der Kanaren und des Festlands mischen.",
  "rel": [
   "C02",
   "C03",
   "C04",
   "C07"
  ],
  "al": [
   "ETRS89",
   "REGCAN95",
   "RD 1071/2007",
   "REDNAP",
   "amtliches System",
   "amtliche Bezugssystem"
  ]
 },
 {
  "id": "C34",
  "slug": "unidades-y-conversion",
  "t": "Einheiten und Umrechnung",
  "en": "Unidades y conversión",
  "b": "V",
  "d": "Die Einheiten des Modells (mm, m, Fuß) und die des CRS (meist Meter) müssen zusammenpassen; in IFC rechnet das Feld Scale von IfcMapConversion Modelleinheiten in Karteneinheiten um.",
  "ej": "Modell in Millimetern: Scale = 0,001, wenn das CRS in Metern ist.",
  "eq": "Revit (Projekteinheiten; US Survey Foot wird nicht unterstützt), IFC Scale/MapUnit, Civil 3D (Zeichnungseinheiten).",
  "err": "IFC in mm mit Scale = 1 und einem CRS in Metern exportieren (dokumentierter Fehler in revit-ifc #784).",
  "rel": [
   "C19",
   "C20"
  ],
  "al": [
   "Einheiten",
   "Modelleinheiten",
   "Projekteinheiten",
   "Einheitenumrechnung",
   "Umrechnung",
   "MapUnit",
   "unidades del modelo",
   "conversión de unidades"
  ]
 },
 {
  "id": "C35",
  "slug": "epoca-de-referencia-y-deriva-continental",
  "t": "Referenzepoche und Plattenbewegung",
  "en": "Época de referencia y deriva continental",
  "b": "I",
  "d": "Die tektonischen Platten bewegen sich einige Zentimeter pro Jahr, daher ändern sich die Koordinaten eines Punktes in einem globalen Bezugsrahmen (ITRF, WGS84) mit der Zeit. Ein „statisches“ Datum friert die Koordinaten zu einem Zeitpunkt (Epoche) ein; ein dynamisches Datum aktualisiert sie. Ohne Angabe der Epoche sind Koordinaten nicht zentimetergenau vergleichbar.",
  "ej": "ETRS89 ist an die Eurasische Platte gebunden und ändert sich in Spanien kaum, entfernt sich aber um etwa 2,5 cm/Jahr von WGS84. Das ETS-Handbuch legt ETRF2000, Epoche 2017.0 fest. In Australien (GDA94→GDA2020) betrug der Sprung etwa 1,8 m.",
  "eq": "Trimble Business Center, Leica Infinity, Civil 3D (Transformationen mit Datum); IFC: Breite/Länge in IfcSite in WGS84 ohne Epoche, daher nur metergenau.",
  "err": "GNSS-Koordinaten in tagesaktuellem WGS84/ITRF mit ETRS89-Kartengrundlagen mischen oder in Australien MGA94- mit MGA2020-Daten (Gasleitung 300 mm versetzt im Fall Worrell).",
  "rel": [
   "C03",
   "C16",
   "C27",
   "C18"
  ],
  "al": [
   "Referenzepoche",
   "Epoche",
   "Plattenbewegung",
   "Kontinentaldrift",
   "dynamisches Datum",
   "dynamischen Datum",
   "ITRF",
   "época de referencia",
   "deriva continental",
   "datum dinámico"
  ]
 },
 {
  "id": "N01",
  "slug": "nivel-de-informacion-necesario",
  "t": "Nivel de información necesario (LOIN)",
  "en": "Level of information need (LOIN)",
  "b": "I",
  "d": "Marco que define la extensión y la granularidad de la información que se pide de cada objeto: qué información geométrica, alfanumérica y documental hace falta para un propósito, en un hito y entre unos actores concretos (ISO 7817-1).",
  "ej": "Una puerta cortafuegos en proyecto de ejecución, para justificar la seguridad en caso de incendio: paso libre y sentido de apertura; clase EI2 60-C5; certificado de ensayo.",
  "eq": "Revit/Archicad: no existe como objeto; se traduce en parámetros, plantillas y un IDS. Gestores como Cobuilder Require, BIMQ o Plannerly lo guardan en una base de datos.",
  "err": "Tratarlo como un número único para todo el modelo («modelo LOIN 3») o como la suma LOD + LOI.",
  "rel": [
   "N02",
   "N03",
   "N04",
   "N05",
   "N06",
   "N07",
   "N13"
  ],
  "al": [
   "nivel de información necesario",
   "LOIN",
   "LoIN",
   "level of information need"
  ]
 },
 {
  "id": "N02",
  "slug": "informacion-geometrica",
  "t": "Información geométrica",
  "en": "Geometrical information",
  "b": "I",
  "d": "Parte del nivel de información que describe la forma del objeto mediante cinco aspectos: detalle, dimensionalidad, ubicación, apariencia y comportamiento paramétrico.",
  "ej": "Puerta en ejecución: detalle bajo, 3D, ubicación absoluta, apariencia simbólica, sin comportamiento paramétrico.",
  "eq": "Se materializa en la geometría de la familia (Revit), el objeto GDL (Archicad) o la representación IFC.",
  "err": "Confundirla con el nivel de detalle de la vista (grueso, medio, fino), que solo decide qué se dibuja a cada escala.",
  "rel": [
   "N01",
   "N10",
   "N23"
  ],
  "al": [
   "información geométrica",
   "dimensionalidad",
   "comportamiento paramétrico",
   "apariencia"
  ]
 },
 {
  "id": "N03",
  "slug": "informacion-alfanumerica",
  "t": "Información alfanumérica",
  "en": "Alphanumerical information",
  "b": "I",
  "d": "Parte del nivel de información formada por la identificación del objeto (nombre, tipo, código, clasificación) y su contenido (propiedades con nombre, valor, unidad y valores admitidos).",
  "ej": "Pset_DoorCommon.FireRating = «EI2 60-C5»; IsExternal = falso.",
  "eq": "Revit: parámetros (compartidos); Archicad: propiedades; Allplan: atributos; Tekla: UDA y property sets; IFC: atributos y Psets.",
  "err": "Pedir propiedades sin nombre normalizado ni tipo de dato: llegan «60 min», «EI60» y «sí» para la misma pregunta.",
  "rel": [
   "N01",
   "N20",
   "N26"
  ],
  "al": [
   "información alfanumérica"
  ]
 },
 {
  "id": "N04",
  "slug": "documentacion",
  "t": "Documentación",
  "en": "Documentation",
  "b": "I",
  "d": "Conjunto de documentos que acompañan a un objeto o entrega y no forman parte del modelo: fichas técnicas, certificados, fotografías, manuales, planos de taller.",
  "ej": "Certificado de ensayo de resistencia al fuego de la puerta, en PDF, enlazado al tipo.",
  "eq": "IFC: IfcDocumentReference asociado con IfcRelAssociatesDocument; en los CDE, documentos vinculados al elemento.",
  "err": "Pedir «documentación técnica» sin decir qué documento, en qué formato y para qué hito.",
  "rel": [
   "N01",
   "N28"
  ],
  "al": [
   "documentación",
   "IfcDocumentReference"
  ]
 },
 {
  "id": "N05",
  "slug": "proposito",
  "t": "Propósito",
  "en": "Purpose",
  "b": "I",
  "d": "Uso que se va a dar a la información (coordinar, medir, justificar el incendio, mantener...). Es la primera condición para fijar el nivel de información necesario.",
  "ej": "Propósito «justificar la seguridad en caso de incendio» para la licencia de obra.",
  "eq": "IDS: campo purpose de la cabecera <info>.",
  "err": "Pedir información «por si acaso», sin propósito: genera sobremodelado.",
  "rel": [
   "N01",
   "N06",
   "N08",
   "N29"
  ],
  "al": [
   "propósito",
   "caso de uso",
   "purpose"
  ]
 },
 {
  "id": "N06",
  "slug": "hito-de-entrega-de-informacion-n06",
  "t": "Hito de entrega de información",
  "en": "Information delivery milestone",
  "b": "I",
  "d": "Momento acordado en el que se intercambia información: fin de fase, licitación, licencia, recepción. El nivel necesario se fija para cada hito.",
  "ej": "Anteproyecto, proyecto básico, proyecto de ejecución, obra y entrega final.",
  "eq": "IDS: campo milestone de la cabecera; ISO 19650: plan de entregas (MIDP).",
  "err": "Pedir en proyecto datos que solo se conocen al contratar (fabricante, nº de serie).",
  "rel": [
   "N01",
   "N05",
   "N16"
  ],
  "al": [
   "hito",
   "hitos",
   "milestone"
  ]
 },
 {
  "id": "N07",
  "slug": "actores",
  "t": "Actores (parte que designa / parte designada)",
  "en": "Actors (appointing / appointed party)",
  "b": "I",
  "d": "Quien pide la información (parte que designa: el cliente o el contratista principal) y quien la produce (parte designada). Cada requisito los identifica.",
  "ej": "El cliente pide; el equipo de arquitectura entrega las puertas en ejecución y el carpintero en obra.",
  "eq": "Matriz de responsabilidades del BEP; gestores de requisitos con un IDS por actor.",
  "err": "No asignar responsable: el dato queda en tierra de nadie entre dos disciplinas.",
  "rel": [
   "N01",
   "N15",
   "N16"
  ],
  "al": [
   "actores",
   "parte que designa",
   "parte designada"
  ]
 },
 {
  "id": "N08",
  "slug": "sobremodelado",
  "t": "Sobremodelado",
  "en": "Over-modelling / information waste",
  "b": "I",
  "d": "Producir más geometría o más datos de los que necesita algún propósito. Cuesta crearlos, comprobarlos y mantenerlos, y añade ruido.",
  "ej": "Modelar herrajes y tornillería de todas las puertas en anteproyecto.",
  "eq": "BIMForum 2025 refuerza sus párrafos «Expansion» para responder a peticiones de LOD excesivos.",
  "err": "Pensar que un modelo más detallado es siempre mejor.",
  "rel": [
   "N01",
   "N05",
   "N09"
  ],
  "al": [
   "sobremodelado",
   "sobreespecificación"
  ]
 },
 {
  "id": "N09",
  "slug": "nivel-de-desarrollo",
  "t": "Nivel de desarrollo (LOD)",
  "en": "Level of Development (LOD)",
  "b": "I",
  "d": "Escala de 100 a 500 (más el 350) que indica cuánto se puede confiar en la geometría y la información de un elemento. Nació hacia 2004-2005 (Vico) y la adoptó el AIA en E202-2008.",
  "ej": "LOD 300: cantidad, tamaño, forma, ubicación y orientación medibles en el modelo.",
  "eq": "BIMForum LOD Specification (definiciones por elemento); matrices de elementos del BEP.",
  "err": "Aplicarlo al modelo entero («modelo LOD 300»); BIMForum: «There is no such thing as an LOD ### model».",
  "rel": [
   "N10",
   "N17",
   "N18",
   "N22"
  ],
  "al": [
   "LOD",
   "nivel de desarrollo",
   "level of development",
   "LOD 300",
   "LOD 350"
  ]
 },
 {
  "id": "N10",
  "slug": "nivel-de-detalle",
  "t": "Nivel de detalle (Level of Detail)",
  "en": "Level of Detail",
  "b": "I",
  "d": "Cuánto detalle gráfico contiene un elemento. BIMForum lo distingue del desarrollo: el detalle es entrada; el desarrollo, salida fiable.",
  "ej": "Una puerta de catálogo con manilla y bisagras dibujadas, pero sin producto decidido: mucho detalle, poco desarrollo.",
  "eq": "Reino Unido (NBS): LOD = level of detail (gráfico). No confundir con el nivel de detalle de la vista.",
  "err": "Tomar el detalle gráfico como prueba de que el elemento está decidido.",
  "rel": [
   "N09",
   "N02",
   "N23"
  ],
  "al": [
   "nivel de detalle",
   "level of detail"
  ]
 },
 {
  "id": "N11",
  "slug": "nivel-de-informacion",
  "t": "Nivel de información (LOI)",
  "en": "Level of Information (LOI)",
  "b": "I",
  "d": "Nivel de la información no gráfica (alfanumérica) de un elemento. Usado en Reino Unido (NBS BIM Toolkit) y Alemania (junto a LOG), hoy integrado en el nivel de información necesario.",
  "ej": "LOI de una puerta en ejecución: tipo, resistencia al fuego, transmitancia, acústica.",
  "eq": "Alemania: LOG (geometría) + LOI; Perú: matriz con LOD y LOI.",
  "err": "Usar LOD y LOI como dos números sueltos sin propósito ni hito.",
  "rel": [
   "N01",
   "N03",
   "N19"
  ],
  "al": [
   "LOI",
   "LOG",
   "level of information",
   "level of geometry"
  ]
 },
 {
  "id": "N12",
  "slug": "nivel-de-exactitud",
  "t": "Nivel de exactitud (LOA)",
  "en": "Level of Accuracy (LOA)",
  "b": "I",
  "d": "Escala de la USIBD (LOA10 a LOA50) que fija, al 95 % de confianza, la desviación admisible de lo medido y de lo representado respecto a la realidad.",
  "ej": "LOA30 (5-15 mm) para el levantamiento de un edificio existente que se va a reformar.",
  "eq": "Escaneado y nubes de puntos (ReCap, CloudCompare); guías como la de Metrolinx la combinan con el LOIN.",
  "err": "Pedir un LOD alto a un modelo de edificio existente sin fijar la exactitud del levantamiento.",
  "rel": [
   "N02",
   "N09"
  ],
  "al": [
   "LOA",
   "nivel de exactitud",
   "level of accuracy"
  ]
 },
 {
  "id": "N13",
  "slug": "iso-7817-1",
  "t": "ISO 7817-1",
  "en": "ISO 7817-1",
  "b": "II",
  "d": "Norma internacional (2024) «Building information modelling — Level of information need — Part 1: Concepts and principles». Sustituye a la EN 17412-1 sin cambios de fondo; en España, UNE-EN ISO 7817-1:2025.",
  "ej": "UNE-EN ISO 7817-1:2025 sustituye a la UNE-EN 17412-1:2021, anulada el 22-01-2025.",
  "eq": "BIMForum 2025 describe cada LOD con los aspectos de la ISO 7817-1.",
  "err": "Seguir citando la UNE-EN 17412-1 en pliegos posteriores a 2025.",
  "rel": [
   "N01",
   "N14",
   "N15"
  ],
  "al": [
   "ISO 7817",
   "ISO 7817-1",
   "UNE-EN ISO 7817-1"
  ]
 },
 {
  "id": "N14",
  "slug": "en-17412-1",
  "t": "EN 17412-1",
  "en": "EN 17412-1",
  "b": "II",
  "d": "Primera norma europea (CEN, 2020) del nivel de información necesario. Anulada y sustituida por la EN ISO 7817-1:2024.",
  "ej": "UNE-EN 17412-1:2021, publicada el 28-04-2021 y anulada el 22-01-2025.",
  "eq": "—",
  "err": "Citarla como vigente.",
  "rel": [
   "N13"
  ],
  "al": [
   "EN 17412-1",
   "UNE-EN 17412-1"
  ]
 },
 {
  "id": "N15",
  "slug": "requisitos-de-informacion",
  "t": "Requisitos de información (OIR, AIR, PIR, EIR)",
  "en": "Information requirements (OIR, AIR, PIR, EIR)",
  "b": "II",
  "d": "Cadena de requisitos de ISO 19650: de la organización (OIR) y del activo (AIR) al proyecto (PIR) y a cada intercambio (EIR), donde se fija el nivel de información necesario.",
  "ej": "El EIR de un contrato de arquitectura pide las puertas con su resistencia al fuego en el proyecto de ejecución.",
  "eq": "Plataformas de requisitos (BIMQ, Plannerly, Cobuilder Require); IDS adjunto al EIR.",
  "err": "Escribir el EIR con niveles genéricos («LOD 300») sin propósito ni hito.",
  "rel": [
   "N01",
   "N07",
   "N16"
  ],
  "al": [
   "OIR",
   "AIR",
   "PIR",
   "requisitos de información",
   "requisitos de intercambio"
  ]
 },
 {
  "id": "N16",
  "slug": "plan-de-entregas",
  "t": "Plan de entregas (MIDP / TIDP)",
  "en": "Master / task information delivery plan",
  "b": "II",
  "d": "Planes de ISO 19650 que dicen qué contenedor de información entrega cada equipo, quién y cuándo. Llevan a la práctica los hitos y el nivel necesario.",
  "ej": "TIDP del equipo de estructuras: modelo de estructura en LOD 350 para el hito de ejecución.",
  "eq": "Hojas de cálculo o módulos de planificación de los CDE.",
  "err": "Planificar entregas sin enlazarlas con los requisitos de cada hito.",
  "rel": [
   "N06",
   "N07",
   "N15"
  ],
  "al": [
   "MIDP",
   "TIDP",
   "plan de entregas"
  ]
 },
 {
  "id": "N17",
  "slug": "bimforum-lod-specification",
  "t": "BIMForum LOD Specification",
  "en": "BIMForum LOD Specification",
  "b": "II",
  "d": "Especificación (desde 2013, casi anual) que define qué significa cada LOD para cada tipo de elemento, con ilustraciones. Añadió el LOD 350; la edición 2025 incorpora los aspectos de ISO 7817-1. Hay versión oficial en español de 2024 y 2025.",
  "ej": "Edición 2025 en español, traducida con BIMForum Ecuador (febrero de 2026).",
  "eq": "Referencia para matrices de elementos en cualquier programa.",
  "err": "Creer que dice qué LOD toca en cada fase: «esa determinación se deja a cada equipo de proyecto».",
  "rel": [
   "N09",
   "N18",
   "N22"
  ],
  "al": [
   "BIMForum",
   "LOD Specification"
  ]
 },
 {
  "id": "N18",
  "slug": "aia-e202-g202",
  "t": "AIA E202 / G202",
  "en": "AIA E202 / G202",
  "b": "II",
  "d": "Documentos contractuales del American Institute of Architects: E202-2008 introdujo las definiciones de Level of Development; en 2013 se revisaron en E203, G201 y G202.",
  "ej": "—",
  "eq": "—",
  "err": "Usar el anexo E202 de 2008 como si fuera la versión vigente.",
  "rel": [
   "N09",
   "N17"
  ],
  "al": [
   "AIA E202",
   "G202",
   "E203"
  ]
 },
 {
  "id": "N19",
  "slug": "lod-y-loi-britanicos",
  "t": "LOD y LOI británicos (PAS 1192 / NBS BIM Toolkit)",
  "en": "UK LOD and LOI (PAS 1192 / NBS BIM Toolkit)",
  "b": "II",
  "d": "Escalas británicas de nivel gráfico (LOD) y no gráfico (LOI) por etapas. NBS las da por sustituidas por ISO 19650, la EN 17412-1 y el nivel de información necesario.",
  "ej": "—",
  "eq": "—",
  "err": "Mezclar la escala británica (1-7) con la estadounidense (100-500).",
  "rel": [
   "N10",
   "N11",
   "N13"
  ],
  "al": [
   "PAS 1192",
   "NBS BIM Toolkit",
   "BS 1192"
  ]
 },
 {
  "id": "N20",
  "slug": "plantillas-de-datos",
  "t": "Plantillas de datos (ISO 23386 / ISO 23387)",
  "en": "Data templates (ISO 23386 / ISO 23387)",
  "b": "II",
  "d": "ISO 23386 fija cómo describir propiedades y mantener diccionarios interconectados; ISO 23387 define plantillas de datos que agrupan las propiedades de cada tipo de objeto.",
  "ej": "Plantilla de datos de puerta cortafuegos con su clase de resistencia al fuego y valores admitidos.",
  "eq": "bSDD; gestores de requisitos; importación de propiedades en Allplan y Archicad.",
  "err": "Inventar nombres de propiedades distintos en cada proyecto.",
  "rel": [
   "N03",
   "N21"
  ],
  "al": [
   "ISO 23386",
   "ISO 23387",
   "plantilla de datos",
   "plantillas de datos"
  ]
 },
 {
  "id": "N21",
  "slug": "bsdd",
  "t": "bSDD (buildingSMART Data Dictionary)",
  "en": "buildingSMART Data Dictionary (bSDD)",
  "b": "II",
  "d": "Servicio en línea de buildingSMART que publica diccionarios de clases y propiedades según ISO 23386, enlazados con entidades IFC y con valores admitidos.",
  "ej": "Propiedad de resistencia al fuego con valores REI30 a REI120 en un diccionario nacional.",
  "eq": "Allplan 2026 integra más de 300 diccionarios; Bonsai 0.8.5 admite la API v5; editores IDS consultan el bSDD.",
  "err": "Crear un Pset propio para algo que ya existe en un diccionario o en IFC.",
  "rel": [
   "N20",
   "N26",
   "N27"
  ],
  "al": [
   "bSDD",
   "diccionario de datos"
  ]
 },
 {
  "id": "N22",
  "slug": "matriz-de-elementos",
  "t": "Matriz de elementos",
  "en": "Model element table / LOD matrix",
  "b": "II",
  "d": "Tabla de elementos por hitos con el nivel pedido en cada celda y su responsable. En Estados Unidos, Model Element Table; en otros países, matriz de progresión o matriz LOIN.",
  "ej": "Estructura 350 en ejecución, puertas 300, mobiliario 100.",
  "eq": "Hoja de cálculo del BEP o gestores como Plannerly y BIMQ.",
  "err": "Una sola columna «LOD del modelo».",
  "rel": [
   "N09",
   "N16",
   "N25"
  ],
  "al": [
   "matriz de elementos",
   "matriz LOIN",
   "matriz LOD"
  ]
 },
 {
  "id": "N23",
  "slug": "nivel-de-detalle-de-vista",
  "t": "Nivel de detalle de vista",
  "en": "View detail level",
  "b": "III",
  "d": "Ajuste gráfico de los programas (grueso/medio/fino, esquemático/simplificado/completo) que decide qué geometría se dibuja a cada escala. No es un nivel contractual.",
  "ej": "—",
  "eq": "Revit: Detail Level (Coarse, Medium, Fine) por vista; Archicad: Opciones de vista del modelo; exportador IFC de Revit: «Level of Detail» = teselación.",
  "err": "Creer que una vista en «fino» equivale a LOD 400.",
  "rel": [
   "N02",
   "N10"
  ],
  "al": [
   "nivel de detalle de vista",
   "Detail Level"
  ]
 },
 {
  "id": "N24",
  "slug": "parametros-y-propiedades-del-programa",
  "t": "Parámetros y propiedades del programa",
  "en": "Authoring tool parameters and properties",
  "b": "III",
  "d": "Contenedores nativos de la información alfanumérica en cada programa de autoría. Deben definirse una vez y con el nombre que pide el requisito.",
  "ej": "—",
  "eq": "Revit: parámetros compartidos (TXT); Archicad: Administrador de propiedades y expresiones; Allplan: atributos; Tekla: property sets de Trimble Connect.",
  "err": "Rellenar el dato en un parámetro que el exportador IFC no lleva a ningún Pset.",
  "rel": [
   "N03",
   "N26"
  ],
  "al": [
   "parámetros compartidos",
   "parámetros",
   "atributos"
  ]
 },
 {
  "id": "N25",
  "slug": "gestor-de-requisitos-de-informacion",
  "t": "Gestor de requisitos de información",
  "en": "Information requirements management platform",
  "b": "IV",
  "d": "Plataforma que guarda los requisitos por objeto, hito, propósito y actor, y los exporta a plantillas, reglas o IDS.",
  "ej": "—",
  "eq": "dRofus, Plannerly, BIMQ, Cobuilder Require (exporta un IDS por hito y propósito).",
  "err": "Gestionar cientos de requisitos en una hoja de cálculo sin control de versiones.",
  "rel": [
   "N15",
   "N22",
   "N27"
  ],
  "al": [
   "gestor de requisitos",
   "gestores de requisitos"
  ]
 },
 {
  "id": "N26",
  "slug": "conjunto-de-propiedades-ifc",
  "t": "Conjunto de propiedades IFC (Pset)",
  "en": "IFC property set (Pset)",
  "b": "V",
  "d": "Agrupación de propiedades de un objeto IFC. Los Pset_ estándar de buildingSMART (p. ej. Pset_DoorCommon) tienen nombres y tipos fijos; los conjuntos de cantidades (Qto_) guardan medidas.",
  "ej": "Pset_DoorCommon.FireRating (IfcLabel), IsExternal (IfcBoolean).",
  "eq": "Revit: pestaña Property Sets del exportador y TXT de conjuntos de usuario; Archicad: Traductores IFC.",
  "err": "Crear conjuntos propios que empiezan por «Pset_» o duplicar una propiedad estándar.",
  "rel": [
   "N03",
   "N24",
   "N27"
  ],
  "al": [
   "Pset",
   "Psets",
   "property set",
   "Pset_DoorCommon",
   "Qto"
  ]
 },
 {
  "id": "N27",
  "slug": "ids-n27",
  "t": "IDS (Information Delivery Specification)",
  "en": "Information Delivery Specification (IDS)",
  "b": "V",
  "d": "Estándar de buildingSMART (1.0, junio de 2024): fichero XML con requisitos comprobables de un IFC, en aplicabilidad y requisitos, con seis facetas. Su cabecera admite purpose y milestone; no puede pedir geometría.",
  "ej": "IDS de puertas: FireRating con patrón «EI2? \\d+(-C\\d)?» e IsExternal booleano.",
  "eq": "Importan IDS: Archicad 28+, Allplan 2026, Vectorworks 2024+, BricsCAD V25; validan: IfcTester, Solibri (regla 244), BIMcollab Zoom; Revit con complementos.",
  "err": "Pensar que el IDS cubre todo el nivel de información necesario: deja fuera la geometría y los documentos.",
  "rel": [
   "N01",
   "N26",
   "N30"
  ],
  "al": [
   "IDS",
   "Information Delivery Specification"
  ]
 },
 {
  "id": "N28",
  "slug": "cobie-n28",
  "t": "COBie",
  "en": "Construction Operations Building information exchange (COBie)",
  "b": "V",
  "d": "Subconjunto de datos para explotación y mantenimiento (instalaciones, espacios, tipos, componentes, garantías). COBie v3 (2023) forma parte de NBIMS-US V4 y añade JSON.",
  "ej": "—",
  "eq": "Exportadores COBie de los programas de autoría; hojas de cálculo y IFC.",
  "err": "Pedir COBie completo en fases de diseño.",
  "rel": [
   "N04",
   "N06"
  ],
  "al": [
   "COBie"
  ]
 },
 {
  "id": "N29",
  "slug": "idm",
  "t": "IDM (ISO 29481)",
  "en": "Information Delivery Manual (IDM)",
  "b": "V",
  "d": "Método para describir los procesos y los intercambios de información de un caso de uso. ISO 29481-3:2022 da un esquema de datos legible por máquina.",
  "ej": "—",
  "eq": "buildingSMART Use Case Management; IDS como parte técnica comprobable.",
  "err": "Escribir requisitos sin el proceso que los justifica.",
  "rel": [
   "N05",
   "N27"
  ],
  "al": [
   "IDM",
   "ISO 29481"
  ]
 },
 {
  "id": "N30",
  "slug": "comprobacion-de-requisitos",
  "t": "Comprobación de requisitos",
  "en": "Requirements checking",
  "b": "VI",
  "d": "Verificación de que una entrega cumple su nivel de información: que existan las propiedades, que tengan valor y que sea válido; la geometría se revisa con reglas y muestreo.",
  "ej": "IfcTester 0.9.0: 1 de 3 puertas cumple el IDS de prueba.",
  "eq": "IfcTester, Solibri, BIMcollab Zoom, usBIM.IDS, xbim; el Validation Service de buildingSMART no comprueba IDS.",
  "err": "Comprobar solo al recibir, cuando corregir es más caro.",
  "rel": [
   "N27",
   "N26"
  ],
  "al": [
   "comprobación de requisitos",
   "IfcTester",
   "validación IDS"
  ]
 },
 {
  "id": "N31",
  "slug": "guias-nacionales-de-niveles-de-informacion",
  "t": "Guías nacionales de niveles de información",
  "en": "National level of information guidance",
  "b": "II",
  "d": "Documentos de cada país que concretan cómo pedir niveles de información: siglas, escalas, plantillas de matriz y ejemplos. Unos siguen la escala LOD 100-500 y otros el nivel de información necesario.",
  "ej": "España: UNE-EN ISO 7817-1:2025 y guías de la CBIM; Chile: NDI del MINVU y Planbim; Perú: matriz de nivel de información necesaria del Plan BIM; Alemania: Arbeitshilfe LOIN-Konzept.",
  "eq": "—",
  "err": "Copiar la matriz de otro país sin adaptar los propósitos ni los hitos.",
  "rel": [
   "N01",
   "N09",
   "N13"
  ],
  "al": [
   "NDI",
   "Plan BIM",
   "Planbim"
  ]
 },
 {
  "id": "N32",
  "slug": "iso-7817-2-e-iso-7817-3",
  "t": "ISO 7817-2 e ISO 7817-3",
  "en": "ISO 7817-2 and ISO 7817-3",
  "b": "II",
  "d": "Partes en preparación: la 2 (ISO/DTS) es una guía de aplicación con ejemplos y plantillas; la 3 (ISO/DIS) define un modelo de datos UML y un esquema XSD para intercambiar el nivel de información necesario.",
  "ej": "—",
  "eq": "Bibliotecas que leen borradores de la parte 3 (p. ej. openbim-loin).",
  "err": "Implementar el borrador de la parte 3 como si fuera definitivo.",
  "rel": [
   "N13",
   "N27"
  ],
  "al": [
   "ISO 7817-2",
   "ISO 7817-3"
  ]
 },
 {
  "id": "D01",
  "slug": "interferencia-colision",
  "t": "Interferencia / colisión",
  "en": "Clash / conflict",
  "b": "I",
  "d": "Incompatibilidad entre elementos de uno o varios modelos (espacial, de holgura o temporal) que impediría construir, operar o mantener como está diseñado; se detecta comparando conjuntos de elementos con unas reglas y tolerancias.",
  "ej": "Un conducto de climatización atraviesa una viga de hormigón.",
  "eq": "Navisworks: Clash; Solibri: Issue/Clash (regla de intersección de componentes); Revit: Interference Check; ACC Model Coordination: Clash; IfcClash: clash; BCF: Topic (tipo Clash)",
  "err": "Confundir un resultado geométrico con un problema real: muchos resultados son irrelevantes o duplicados.",
  "rel": [
   "D02",
   "D03",
   "D04",
   "D08",
   "D10"
  ],
  "al": [
   "interferencia",
   "interferencias",
   "choque",
   "choques",
   "colisión",
   "colisiones"
  ]
 },
 {
  "id": "D02",
  "slug": "interferencia-dura",
  "t": "Interferencia dura",
  "en": "Hard clash",
  "b": "I",
  "d": "Dos elementos ocupan el mismo espacio físico: sus geometrías se intersecan más allá de la tolerancia de penetración admitida.",
  "ej": "Tubería de saneamiento que atraviesa un pilar.",
  "eq": "Navisworks: Hard / Hard (Conservative); Solibri: Intersection; ACC: Hard clash; IfcClash: intersection/collision",
  "err": "Reportar como duros los pasos previstos (pasatubos) o los contactos tangentes sin tolerancia.",
  "rel": [
   "D05",
   "D12"
  ],
  "al": [
   "interferencia dura",
   "choque duro",
   "hard clash"
  ]
 },
 {
  "id": "D03",
  "slug": "interferencia-blanda-o-de-holgura",
  "t": "Interferencia blanda o de holgura",
  "en": "Soft / clearance clash",
  "b": "I",
  "d": "Un elemento invade la distancia mínima o el volumen libre exigido alrededor de otro (aislamiento, montaje, acceso, seguridad) aunque no lo toque.",
  "ej": "Bandeja eléctrica a 5 cm de un conducto cuando se exigen 30 cm de separación.",
  "eq": "Navisworks: Clearance; Solibri: Clearance / regla de distancia; Revizto: Clearance (con desfases H/V); IfcClash: clearance",
  "err": "Aplicar una holgura única a todo el modelo; la holgura depende del sistema y debería modelarse como volumen cuando es de mantenimiento.",
  "rel": [
   "D05",
   "D20"
  ],
  "al": [
   "holgura",
   "interferencia de holgura",
   "clearance"
  ]
 },
 {
  "id": "D04",
  "slug": "interferencia-de-flujo-de-trabajo-4d",
  "t": "Interferencia de flujo de trabajo / 4D",
  "en": "Workflow / 4D / time-space clash",
  "b": "I",
  "d": "Conflicto que surge al vincular el modelo con la planificación: dos actividades, equipos o espacios de trabajo coinciden en lugar y tiempo, o la secuencia impide montar algo.",
  "ej": "El radio de giro de la grúa invade la zona de montaje de fachada en la semana 32.",
  "eq": "Navisworks: Clash Detective con TimeLiner; Synchro: conflictos 4D; ACC/Revizto: limitados",
  "err": "Tratarla con las mismas reglas que una interferencia espacial estática.",
  "rel": [
   "D01",
   "D24"
  ],
  "al": [
   "secuencia",
   "interferencia de flujo",
   "4D"
  ]
 },
 {
  "id": "D05",
  "slug": "tolerancia-de-deteccion",
  "t": "Tolerancia de detección",
  "en": "Clash tolerance",
  "b": "I",
  "d": "Valor numérico que define qué se reporta: en choques duros, la penetración mínima a partir de la cual se informa; en holgura, la distancia máxima por debajo de la cual se informa. Suele ajustarse por fase y disciplina.",
  "ej": "Duro con 10 mm para ignorar contactos de modelado; holgura de 50 mm entre conductos.",
  "eq": "Navisworks: Tolerance; Solibri: tolerancia en reglas; Revizto: Tolerance; IfcClash: tolerance/clearance",
  "err": "Confundir tolerancia de detección con tolerancia de ejecución de obra, o subirla tanto que oculte choques reales.",
  "rel": [
   "D02",
   "D03",
   "D06"
  ],
  "al": [
   "tolerancia"
  ]
 },
 {
  "id": "D06",
  "slug": "matriz-de-deteccion",
  "t": "Matriz de detección (plan de pruebas)",
  "en": "Clash matrix / clash test plan",
  "b": "I",
  "d": "Tabla, acordada en el BEP, que define qué pares de disciplinas o sistemas se comprueban, con qué tipo de prueba y tolerancia, en qué fase, con qué prioridad y quién es responsable.",
  "ej": "ARQ vs EST duro 0 mm; SAN vs CLIM holgura 25 mm; ELE vs todo, fase de ejecución.",
  "eq": "Navisworks: lista de Tests; Solibri: Ruleset; ACC: Clash test (automático); BIMcollab/Revizto: Clash sets",
  "err": "Probar 'todo contra todo' sin matriz y obtener miles de resultados inútiles.",
  "rel": [
   "D05",
   "D13",
   "D16",
   "D07"
  ],
  "al": [
   "matriz de detección",
   "matriz de pruebas",
   "matriz"
  ]
 },
 {
  "id": "D07",
  "slug": "agrupacion-de-interferencias",
  "t": "Agrupación de interferencias",
  "en": "Clash grouping",
  "b": "I",
  "d": "Reunir resultados con una causa o solución común (mismo elemento, sistema, nivel, zona o responsable) para gestionarlos como una sola incidencia.",
  "ej": "40 choques de una misma bandeja contra 40 viguetas se tratan como una incidencia.",
  "eq": "Navisworks: Clash groups/Group; Solibri: agrupación de resultados en Issues; BIM Track: Clash grouper; Revizto: Grouping; IfcClash: smart grouping",
  "err": "Agrupar solo por nivel o rejilla, mezclando problemas de distintos responsables.",
  "rel": [
   "D08",
   "D10",
   "D12"
  ],
  "al": [
   "agrupación",
   "agrupar"
  ]
 },
 {
  "id": "D08",
  "slug": "falso-positivo-interferencia-irrelevante",
  "t": "Falso positivo / interferencia irrelevante",
  "en": "False positive / irrelevant clash",
  "b": "I",
  "d": "Resultado que la herramienta marca como choque pero no requiere acción: contacto intencionado, elemento sin modelar a nivel suficiente, solución resoluble en obra o elemento ya resuelto.",
  "ej": "Choque entre aislamiento de tubería y su abrazadera.",
  "eq": "Navisworks: Approved/Resolved; Solibri: Accepted/Rejected; ACC: Not an issue; BCF: TopicStatus cerrado",
  "err": "Aprobar en bloque sin criterio o, al revés, mandar todo a las disciplinas.",
  "rel": [
   "D05",
   "D07",
   "D12"
  ],
  "al": [
   "falso positivo",
   "falsos positivos"
  ]
 },
 {
  "id": "D09",
  "slug": "coordinacion-espacial-modelo-federado-de-coordinacion",
  "t": "Coordinación espacial / modelo federado de coordinación",
  "en": "Spatial coordination / federated coordination model",
  "b": "I",
  "d": "Proceso de integrar los modelos de cada disciplina, sin fusionarlos ni perder su autoría, en un modelo federado georreferenciado sobre el que se detectan y resuelven incompatibilidades.",
  "ej": "Arquitectura, estructura y MEP en IFC federados en un visor común con origen compartido.",
  "eq": "Navisworks: NWF/NWD; Solibri: SMC con varios IFC; ACC: Coordination space; Revizto/BIMcollab Zoom; Trimble Connect",
  "err": "Federar modelos con distinto origen o versión, o coordinar sobre un modelo 'fusionado' que borra la autoría.",
  "rel": [
   "C17",
   "D16",
   "D24"
  ],
  "al": [
   "coordinación espacial",
   "coordinación 3D"
  ]
 },
 {
  "id": "D10",
  "slug": "incidencia",
  "t": "Incidencia (issue / topic)",
  "en": "Issue / topic",
  "b": "I",
  "d": "Registro gestionable de un problema detectado, con título, descripción, tipo, estado, prioridad, responsable, fecha límite, comentarios y vistas asociadas; en BCF se denomina Topic.",
  "ej": "Topic 'Conducto C-12 contra viga V-3, planta 2', asignado a MEP, fecha límite viernes.",
  "eq": "BCF: Topic; Navisworks: Clash result/Issue; Solibri: Issue; ACC: Issue; Revizto: Issue; Trimble Connect: ToDo",
  "err": "Usar la incidencia como captura sin responsable ni estado.",
  "rel": [
   "D11",
   "D14",
   "D22"
  ],
  "al": [
   "incidencia",
   "incidencias"
  ]
 },
 {
  "id": "D11",
  "slug": "punto-de-vista-y-captura",
  "t": "Punto de vista y captura",
  "en": "Viewpoint and snapshot",
  "b": "I",
  "d": "Estado de visualización asociado a una incidencia: cámara (ortogonal o perspectiva), planos de corte, componentes seleccionados, visibles o coloreados (por GUID IFC) y una imagen de referencia.",
  "ej": "viewpoint.bcfv con cámara, dos componentes seleccionados por IfcGuid y snapshot.png.",
  "eq": "BCF: .bcfv + snapshot PNG/JPEG; Navisworks: Viewpoint; Solibri: Slide; ACC/Revizto: vista de la incidencia",
  "err": "Compartir solo la imagen sin componentes: el receptor no puede seleccionar los elementos en su software.",
  "rel": [
   "D10",
   "D14",
   "D17"
  ],
  "al": [
   "punto de vista",
   "puntos de vista"
  ]
 },
 {
  "id": "D12",
  "slug": "duplicados",
  "t": "Duplicados",
  "en": "Duplicates",
  "b": "I",
  "d": "Elementos repetidos o superpuestos de geometría idéntica (o casi) en el mismo lugar, en un mismo modelo o entre modelos; inflan mediciones y resultados de choques.",
  "ej": "Pilar modelado en arquitectura y en estructura, o un muro copiado dos veces.",
  "eq": "Navisworks: Duplicates; Solibri: regla de componentes duplicados; Revit: advertencia 'instancias idénticas'",
  "err": "No ejecutarla antes de los cruces entre disciplinas, multiplicando los resultados.",
  "rel": [
   "D08",
   "D25"
  ],
  "al": [
   "duplicado",
   "duplicados"
  ]
 },
 {
  "id": "D13",
  "slug": "jerarquia-de-resolucion",
  "t": "Jerarquía de resolución (quién se mueve)",
  "en": "Clash resolution hierarchy / right of way",
  "b": "I",
  "d": "Orden, pactado en el BEP, que decide qué sistema cede ante un choque según su flexibilidad: los elementos más grandes, permanentes o restringidos (estructura, saneamiento por gravedad) tienen prioridad.",
  "ej": "Saneamiento por gravedad > conductos > tuberías a presión/PCI > bandejas y tubos eléctricos.",
  "eq": "Matriz de prioridades del BEP; ETS: gravedad A/B/C; Ashghal: prioridad A-C y severidad 1-4",
  "err": "Aplicarla sin excepciones (p. ej. un conducto pequeño frente a un colector principal).",
  "rel": [
   "D06",
   "D24",
   "D20"
  ],
  "al": [
   "quién se mueve",
   "jerarquía de resolución",
   "derecho de paso"
  ]
 },
 {
  "id": "D14",
  "slug": "bcf",
  "t": "BCF (BIM Collaboration Format)",
  "en": "BIM Collaboration Format",
  "b": "II",
  "d": "Estándar abierto de buildingSMART para intercambiar incidencias sobre modelos (IFC u otros) sin enviar el modelo: XML (BCF-XML, contenedor .bcfzip/.bcf) o servicios web (BCF API). Versiones 1.0 (2011), 2.0, 2.1 y 3.0.",
  "ej": "Exportar 25 topics de Solibri en BCF 2.1 e importarlos en Revit con BCF Manager.",
  "eq": "BCF-XML 2.1/3.0; BCF API 2.1/3.0; complementos en Revit/Archicad/Tekla; BIMcollab; Revizto; Trimble Connect; Catenda; Bonsai",
  "err": "Mezclar versiones (3.0 vs 2.1) o perder campos (prioridad, id del servidor) en la exportación.",
  "rel": [
   "D10",
   "D11",
   "D15",
   "D17"
  ],
  "al": [
   "BCF",
   "BIM Collaboration Format"
  ]
 },
 {
  "id": "D15",
  "slug": "bcf-api-opencde",
  "t": "BCF API / OpenCDE",
  "en": "BCF API / OpenCDE APIs",
  "b": "II",
  "d": "Especificación REST/JSON para sincronizar incidencias BCF entre aplicaciones y servidores; forma parte de la familia OpenCDE junto con la Foundation API (descubrimiento, OAuth 2.0, usuario) y la Documents API (descarga/subida al CDE).",
  "ej": "Un complemento de Revit consulta GET /bcf/3.0/projects/{id}/topics y actualiza el estado sin pasar archivos.",
  "eq": "BCF API 2.1/3.0; OpenCDE Foundation API 1.0/1.1; Documents API 1.0",
  "err": "Creer que 'soporta BCF' implica soportar la API (muchas herramientas solo leen/escriben archivos).",
  "rel": [
   "D14",
   "C30"
  ],
  "al": [
   "BCF API",
   "OpenCDE",
   "Foundation API"
  ]
 },
 {
  "id": "D16",
  "slug": "iso-19650-y-coordinacion",
  "t": "ISO 19650 y coordinación",
  "en": "ISO 19650 and coordination",
  "b": "II",
  "d": "Marco de gestión de la información (UNE-EN ISO 19650) que asigna la coordinación: cada equipo de tarea revisa y coordina su información antes de compartirla; la parte adjudicataria principal define la estrategia de federación, la estructura de contenedores, la matriz de responsabilidades y compila los TIDP en el MIDP.",
  "ej": "El BEP fija la estrategia de federación por edificio y disciplina y la matriz que asigna la detección al coordinador del equipo de desarrollo.",
  "eq": "ISO 19650-1/-2 (2018; revisión 2026); UNE-EN ISO 19650; UK BIM Framework; Plan BIM (Orden PCM/818/2023)",
  "err": "Creer que ISO 19650 define cargos (BIM Manager) o el procedimiento de detección: define funciones y procesos.",
  "rel": [
   "C25",
   "C17",
   "C30",
   "D06"
  ],
  "al": [
   "estrategia de federación",
   "TIDP",
   "MIDP"
  ]
 },
 {
  "id": "D17",
  "slug": "identificador-de-objeto-ifc",
  "t": "Identificador de objeto IFC (GlobalId)",
  "en": "IFC GlobalId / IfcGloballyUniqueId",
  "b": "II",
  "d": "Identificador único de 128 bits de cada objeto IFC, codificado en 22 caracteres (alfabeto 0-9A-Za-z_$); BCF lo usa (IfcGuid) para referenciar componentes, por lo que debe mantenerse estable entre exportaciones.",
  "ej": "2O2Fr$t4X7Zf8NOew3FLOH identifica la misma puerta en todas las versiones del IFC.",
  "eq": "IFC: GlobalId; BCF: IfcGuid; Revit: parámetro IfcGUID/IFC GUID (derivado del UniqueId); Archicad: IFC GlobalId; Tekla: GUID",
  "err": "Regenerar GUID al exportar (copiar/pegar, borrar y rehacer) rompe la trazabilidad de las incidencias.",
  "rel": [
   "D11",
   "D14"
  ],
  "al": [
   "GlobalId",
   "IfcGloballyUniqueId",
   "IFC GUID"
  ]
 },
 {
  "id": "D18",
  "slug": "conjunto-de-seleccion-conjunto-de-busqueda",
  "t": "Conjunto de selección / conjunto de búsqueda",
  "en": "Selection set / Search set (Navisworks); Smart View (BIMcollab Zoom); Search set (Revizto); grupo de criterios (Archicad)",
  "b": "III",
  "d": "Agrupación guardada de elementos del modelo federado que se usa como lado A o B de una prueba de interferencias. El conjunto de selección guarda elementos concretos (estático); el de búsqueda guarda criterios (propiedad, categoría, sistema) y se reevalúa cuando el modelo cambia (dinámico).",
  "ej": "Search set 'MEP – Saneamiento' = elementos cuyo 'System Type' contiene 'Sanitary'; se prueba contra el search set 'EST – Vigas'. Al cargar la nueva versión del modelo, el conjunto incluye automáticamente las tuberías nuevas.",
  "eq": "Navisworks: Selection Set / Search Set (ventana Sets, Find Items); BIMcollab Zoom: Smart Views como source/target set; Revizto: search sets A/B; Solibri: filtros de componentes de la regla; Archicad: Grupo 1 / Grupo 2 por criterios; IfcClash: selectores del grupo A/B; MicroStation: niveles/referencias/Named Groups.",
  "err": "Usar conjuntos de selección estáticos en pruebas que se repiten: los elementos nuevos de la siguiente entrega quedan fuera y la prueba da un falso 'cero interferencias'. También: criterios basados en nombres no normalizados.",
  "rel": [
   "D06",
   "D19",
   "D08",
   "C17"
  ],
  "al": [
   "conjunto de selección",
   "conjuntos de búsqueda",
   "search sets"
  ]
 },
 {
  "id": "D19",
  "slug": "reglas-de-exclusion-y-conjuntos-de-reglas",
  "t": "Reglas de exclusión y conjuntos de reglas",
  "en": "Clash rules / ignore rules / suppression rules; rulesets",
  "b": "III",
  "d": "Condiciones que hacen que el programa no informe de ciertas interferencias (reglas de exclusión) y agrupaciones de reglas de comprobación guardadas y reutilizables (conjuntos de reglas). Sirven para eliminar falsos positivos sistemáticos y estandarizar la comprobación.",
  "ej": "En Navisworks, activar 'Items in Same File' para no informar de choques internos de cada disciplina y la plantilla 'Insulation Thickness' para tuberías aisladas; en Solibri, un ruleset 'Coordinación MEP-EST' con General Intersection Rule y excepciones de 'conducto atraviesa muro'.",
  "eq": "Navisworks: pestaña Rules (6 reglas por defecto + plantillas); Solibri: Ruleset / Intersection Exceptions; Revizto: Ignore rules; Bentley: Suppression rules; Trimble Connect: 'Ignore clashes within the same file/type'; Archicad: 'Participa en Detección de Colisiones' por material; BIMcollab Zoom: conjuntos de reglas Local/Shared.",
  "err": "Reglas demasiado amplias (p. ej. 'Same File' en un modelo federado en un solo NWD) que ocultan interferencias reales; o no documentar las reglas en el BEP, de modo que cada coordinador obtiene resultados distintos.",
  "rel": [
   "D08",
   "D18",
   "D06",
   "D05",
   "C32"
  ],
  "al": [
   "reglas de exclusión",
   "conjunto de reglas"
  ]
 },
 {
  "id": "D20",
  "slug": "zona-libre-espacio-de-mantenimiento-y-acceso",
  "t": "Zona libre / espacio de mantenimiento y acceso",
  "en": "Clearance / maintenance and access zone",
  "b": "I",
  "d": "Volumen que debe quedar libre alrededor de equipos o elementos para operar, mantener, sustituir o acceder con seguridad; se modela como sólido auxiliar y se comprueba con pruebas de holgura o duras contra ese volumen.",
  "ej": "Zona frontal de 1 m delante de un cuadro eléctrico o de apertura del registro de una UTA.",
  "eq": "Familias/objetos de 'clearance' en Revit; Solibri: regla de espacio libre; Navisworks: prueba contra sólidos de holgura",
  "err": "No modelarla y confiar en la tolerancia global; o modelarla como sólido que luego se mide o se exporta como elemento real.",
  "rel": [
   "D03",
   "D13"
  ],
  "al": [
   "zona libre",
   "espacio libre",
   "espacio de mantenimiento"
  ]
 },
 {
  "id": "D21",
  "slug": "deteccion-automatica-en-la-nube",
  "t": "Detección automática en la nube",
  "en": "Automated cloud clash detection",
  "b": "IV",
  "d": "Cálculo de interferencias que ejecuta un servicio en el CDE sin intervención manual cuando se publica o actualiza un modelo en un espacio de coordinación, o según una programación, y deja los resultados accesibles a todo el equipo.",
  "ej": "Al subir la nueva versión del IFC de climatización al espacio de coordinación, Forma Model Coordination recalcula los choques contra estructura y arquitectura y los muestra agrupados.",
  "eq": "Model Coordination (Autodesk Forma/BIM Collaborate Pro), Clash Automation (Revizto), clash spaces (Aconex), clash sets en la nube (Trimble Connect).",
  "err": "Creer que 'automática' significa configurable como Navisworks: en Model Coordination no hay tolerancia ni matriz de pruebas en el cálculo, solo filtros posteriores; o dejar activados los modelos contenedor y multiplicar ruido y tiempos.",
  "rel": [
   "D05",
   "D06",
   "D07",
   "D09",
   "C30"
  ],
  "al": [
   "detección automática"
  ]
 },
 {
  "id": "D22",
  "slug": "estado-y-ciclo-de-vida-de-la-incidencia",
  "t": "Estado y ciclo de vida de la incidencia",
  "en": "Issue status and lifecycle",
  "b": "V",
  "d": "Secuencia de estados por los que pasa una incidencia desde que se crea hasta que se verifica su cierre (p. ej. Nueva → Activa/Asignada → Resuelta por el autor → Verificada/Cerrada, o Descartada), con responsable, fechas e historial.",
  "ej": "El coordinador crea la incidencia 'Conducto vs viga P3' (Open), la asigna a MEP; MEP la marca Resuelta; tras reejecutar la prueba el coordinador la pasa a Cerrada.",
  "eq": "Topic status (BCF), New/Active/Reviewed/Approved/Resolved (Navisworks), Open/Closed (ACC Issues).",
  "err": "Mapear mal los estados entre programas: BCF no fija valores, cada servidor los define en extensions; al importar a ACC todo llega como 'Open' salvo 'Closed'; confundir 'Resuelta' con 'Cerrada'.",
  "rel": [
   "D10",
   "D14",
   "D15",
   "D23",
   "D26"
  ],
  "al": [
   "estado de la incidencia",
   "ciclo de vida"
  ]
 },
 {
  "id": "D23",
  "slug": "indicadores-de-coordinacion",
  "t": "Indicadores de coordinación (KPI)",
  "en": "Coordination KPIs",
  "b": "VI",
  "d": "Métricas que miden la salud del proceso de coordinación: incidencias abiertas/cerradas, nuevas por ciclo, tiempo medio de cierre, antigüedad, reabiertas, tendencia por disciplina o zona y ratio identificadas/resueltas.",
  "ej": "Cuadro semanal: 42 abiertas (−15 %), tiempo medio de cierre 9 días, 6 reabiertas; MEP-estructura concentra el 60 % de las abiertas en P2.",
  "eq": "Clash metrics, coordination dashboard, clash aging.",
  "err": "Medir el número bruto de choques (dominado por falsos positivos y duplicados) en lugar de incidencias agrupadas; comparar ciclos con pruebas o tolerancias distintas.",
  "rel": [
   "D07",
   "D08",
   "D22",
   "D24",
   "C32"
  ],
  "al": [
   "indicadores",
   "KPI"
  ]
 },
 {
  "id": "D24",
  "slug": "reunion-de-coordinacion",
  "t": "Reunión de coordinación",
  "en": "Coordination meeting",
  "b": "I",
  "d": "Sesión periódica (habitualmente semanal o quincenal) en torno al modelo federado donde se revisan los grupos de incidencias priorizadas, se deciden soluciones y se asignan responsables y plazos, registrándose en BCF/CDE.",
  "ej": "Reunión semanal: revisión de 15 incidencias prioritarias de la planta 3 con MEP y estructura.",
  "eq": "ACC/BIM 360 Coordination; Revizto; BIMcollab; Navisworks en sala; Teams + BCF",
  "err": "Revisar choque a choque sin preparación previa ni asignar tareas al terminar.",
  "rel": [
   "D09",
   "D10",
   "D13"
  ],
  "al": [
   "reunión de coordinación"
  ]
 },
 {
  "id": "D25",
  "slug": "nivel-de-informacion-y-aptitud-del-modelo-para-detectar",
  "t": "Nivel de información y aptitud del modelo para detectar",
  "en": "Level of information need / LOD",
  "b": "I",
  "d": "Grado de desarrollo geométrico y alfanumérico que debe tener cada elemento para un propósito; para coordinar hace falta geometría con tamaño, posición e interfaces (p. ej. LOD 350 de BIMForum), definida conforme al LOIN (EN ISO 7817-1:2024).",
  "ej": "Conductos con aislamiento y soportes modelados antes de la coordinación de oficios.",
  "eq": "BIMForum LOD 100-500 (350 para coordinación); EN ISO 7817-1 (LOIN); IDS para comprobar requisitos",
  "err": "Detectar sobre modelos LOD 200 y tomar decisiones sobre geometría genérica.",
  "rel": [
   "D01",
   "D08",
   "C32"
  ],
  "al": [
   "nivel de desarrollo",
   "LOD",
   "nivel de información necesario"
  ]
 },
 {
  "id": "D26",
  "slug": "verificacion-de-cierre",
  "t": "Verificación de cierre",
  "en": "Closure verification / clash re-run",
  "b": "VI",
  "d": "Comprobación de que una incidencia marcada como resuelta lo está realmente: se reejecuta la misma prueba (mismas reglas y tolerancia) sobre la nueva versión de los modelos y se confirma que el choque desaparece sin crear otros, antes de cerrarla.",
  "ej": "Tras la nueva versión del modelo de fontanería, el coordinador relanza la prueba FON_v_EST; el choque desaparece y la incidencia pasa de Resuelta a Cerrada; un nuevo choque con el falso techo genera otra incidencia.",
  "eq": "Re-run, verify fix, Approved/Resolved en Clash Detective, choques en rojo por desactualizados (Trimble Connect).",
  "err": "Cerrar por declaración del autor sin reejecutar, o reejecutar con otra tolerancia o modelo y dar por buena la desaparición.",
  "rel": [
   "D22",
   "D23",
   "D06",
   "D05"
  ],
  "al": [
   "verificación de cierre"
  ]
 },
 {
  "id": "P01",
  "slug": "plan-de-ejecucion-bim",
  "t": "Plan de ejecución BIM (BEP)",
  "en": "BIM execution plan (BEP)",
  "b": "I",
  "d": "Plan que explica cómo el equipo de desarrollo gestionará y entregará la información de una designación para cumplir el EIR: personas, estrategia, federación, responsabilidades, métodos, estándar y medios.",
  "ej": "La Junta de Andalucía (AOPJA) lo llama PEB y pide un pre-PEB con la oferta y el PEB tras la adjudicación.",
  "eq": "ISO 19650-2: BIM execution plan; Penn State: BIM Project Execution Plan (PxP); NBIMS-US V4: BIM Execution Plan; revisión ISO en curso: posible «Information Production Plan».",
  "err": "Escribir un manual de empresa genérico que no responde a ningún requisito concreto del EIR.",
  "rel": [
   "P02",
   "P03",
   "P04",
   "P16",
   "P21"
  ],
  "al": [
   "plan de ejecución BIM",
   "planes de ejecución BIM",
   "BEP",
   "PEB",
   "BIM execution plan"
  ]
 },
 {
  "id": "P02",
  "slug": "bep-previo-a-la-designacion",
  "t": "BEP previo a la designación",
  "en": "Pre-appointment BEP",
  "b": "I",
  "d": "Versión del BEP que cada candidato a parte designada principal entrega con su oferta (ISO 19650-2, 5.3.2) para mostrar cómo cumplirá el EIR; incluye una matriz de responsabilidades de alto nivel.",
  "ej": "pre-PEB del EIR tipo de la AOPJA (2024).",
  "eq": "PAS 1192-2: pre-contract BEP; Penn State: propuesta.",
  "err": "Presentarlo como un catálogo comercial en lugar de una respuesta punto por punto al EIR.",
  "rel": [
   "P01",
   "P03",
   "P16",
   "P29"
  ],
  "al": [
   "BEP previo",
   "pre-BEP",
   "pre-PEB",
   "pre-appointment BEP"
  ]
 },
 {
  "id": "P03",
  "slug": "bep-confirmado",
  "t": "BEP confirmado (posterior a la designación)",
  "en": "Post-appointment BEP",
  "b": "I",
  "d": "BEP que el equipo designado confirma y detalla tras la designación (ISO 19650-2, 5.4.1): nombres de las personas, matriz detallada, métodos y estándar acordados. Forma parte de los documentos del contrato.",
  "ej": "PEB tras la adjudicación en los pliegos de la AOPJA.",
  "eq": "PAS 1192-2: post-contract award BEP.",
  "err": "No actualizarlo después de firmar: a mitad de proyecto ya describe un equipo que no existe.",
  "rel": [
   "P01",
   "P02",
   "P17",
   "P18"
  ],
  "al": [
   "BEP confirmado",
   "post-appointment BEP"
  ]
 },
 {
  "id": "P04",
  "slug": "requisitos-de-intercambio-de-informacion",
  "t": "Requisitos de intercambio de información (EIR)",
  "en": "Exchange information requirements (EIR)",
  "b": "I",
  "d": "Requisitos de información de una designación concreta (aspectos de gestión, comerciales y técnicos). Los escribe la parte que designa y la parte designada principal los traslada a cada parte designada.",
  "ej": "Anexo «Requerimientos BIM (EIR)» de los pliegos de la AOPJA.",
  "eq": "PAS 1192-2: Employer's Information Requirements; Plan BIM español: requisitos BIM en las prescripciones técnicas.",
  "err": "Seguir leyendo EIR como «Employer's»: en ISO 19650 hay un EIR por cada designación, también hacia las subcontratas.",
  "rel": [
   "P05",
   "P06",
   "P07",
   "P01"
  ],
  "al": [
   "requisitos de intercambio de información",
   "requisitos de intercambio",
   "EIR",
   "exchange information requirements"
  ]
 },
 {
  "id": "P05",
  "slug": "requisitos-de-informacion-de-la-organizacion",
  "t": "Requisitos de información de la organización (OIR)",
  "en": "Organizational information requirements (OIR)",
  "b": "I",
  "d": "Requisitos de información ligados a los objetivos estratégicos de la organización respecto a sus activos; alimentan los PIR y los AIR.",
  "ej": "Un ayuntamiento que necesita conocer el consumo energético de todos sus edificios.",
  "eq": "ISO 19650-1.",
  "err": "Saltárselos y escribir el EIR sin saber para qué decisiones se pide la información.",
  "rel": [
   "P06",
   "P07",
   "P04"
  ],
  "al": [
   "OIR",
   "requisitos de información de la organización"
  ]
 },
 {
  "id": "P06",
  "slug": "requisitos-de-informacion-del-proyecto",
  "t": "Requisitos de información del proyecto (PIR)",
  "en": "Project information requirements (PIR)",
  "b": "I",
  "d": "Requisitos relativos al propósito, diseño y construcción del activo, ligados a los puntos de decisión clave del proyecto; determinan el modelo de información del proyecto (PIM).",
  "ej": "Información para decidir si se licita la obra al final del proyecto de ejecución.",
  "eq": "ISO 19650-1.",
  "err": "Confundirlos con el EIR: el PIR es del proyecto; el EIR, de cada designación.",
  "rel": [
   "P05",
   "P04",
   "P08",
   "P19"
  ],
  "al": [
   "PIR",
   "requisitos de información del proyecto"
  ]
 },
 {
  "id": "P07",
  "slug": "requisitos-de-informacion-del-activo-p07",
  "t": "Requisitos de información del activo (AIR)",
  "en": "Asset information requirements (AIR)",
  "b": "I",
  "d": "Requisitos de la información necesaria para operar y mantener el activo; determinan el contenido del modelo de información del activo (AIM).",
  "ej": "Datos de mantenimiento de equipos de climatización que pide el gestor del edificio.",
  "eq": "ISO 19650-1 y -3; COBie como formato habitual.",
  "err": "Pedirlos al final de la obra en lugar de incluirlos desde el primer EIR.",
  "rel": [
   "P05",
   "P09",
   "P04"
  ],
  "al": [
   "AIR",
   "requisitos de información del activo"
  ]
 },
 {
  "id": "P08",
  "slug": "modelo-de-informacion-del-proyecto-p08",
  "t": "Modelo de información del proyecto (PIM)",
  "en": "Project information model (PIM)",
  "b": "I",
  "d": "Modelo de información (contenedores estructurados y no estructurados) que se desarrolla en la fase de desarrollo y transfiere al AIM lo que pide el AIR.",
  "ej": "Modelos, planos y documentos del proyecto y la obra de un hospital.",
  "eq": "ISO 19650-1.",
  "err": "Pensar que es solo el modelo 3D federado.",
  "rel": [
   "P09",
   "P06",
   "P24"
  ],
  "al": [
   "PIM",
   "modelo de información del proyecto"
  ]
 },
 {
  "id": "P09",
  "slug": "modelo-de-informacion-del-activo-p09",
  "t": "Modelo de información del activo (AIM)",
  "en": "Asset information model (AIM)",
  "b": "I",
  "d": "Modelo de información de la fase de operación; recibe del PIM la información pertinente al cierre del proyecto.",
  "ej": "Base de datos de mantenimiento del edificio entregado.",
  "eq": "ISO 19650-1 y -3.",
  "err": "Entregar el PIM completo como AIM sin filtrar lo que de verdad sirve para operar.",
  "rel": [
   "P08",
   "P07"
  ],
  "al": [
   "AIM",
   "modelo de información del activo"
  ]
 },
 {
  "id": "P10",
  "slug": "parte-que-designa",
  "t": "Parte que designa",
  "en": "Appointing party",
  "b": "I",
  "d": "Receptor de la información sobre trabajos o servicios: normalmente el cliente o quien gestiona la información en su nombre. Escribe el EIR y acepta la información.",
  "ej": "Un ministerio o una agencia de obra pública que licita un proyecto.",
  "eq": "ISO 19650: appointing party; PAS 1192: employer.",
  "err": "Llamarla «el cliente» sin más cuando en realidad actúa un gestor de la información delegado.",
  "rel": [
   "P11",
   "P12",
   "P04"
  ],
  "al": [
   "parte que designa",
   "appointing party"
  ]
 },
 {
  "id": "P11",
  "slug": "parte-designada-principal",
  "t": "Parte designada principal",
  "en": "Lead appointed party",
  "b": "I",
  "d": "Parte designada por la parte que designa que coordina y gestiona la información entre su equipo de desarrollo y la parte que designa. Escribe el BEP y el MIDP.",
  "ej": "El estudio de arquitectura que gana el concurso y subcontrata estructura e instalaciones.",
  "eq": "ISO 19650: lead appointed party.",
  "err": "Suponer que solo hay una por proyecto: hay una por cada equipo de desarrollo.",
  "rel": [
   "P10",
   "P12",
   "P13",
   "P18"
  ],
  "al": [
   "parte designada principal",
   "lead appointed party"
  ]
 },
 {
  "id": "P12",
  "slug": "parte-designada",
  "t": "Parte designada",
  "en": "Appointed party",
  "b": "I",
  "d": "Proveedor de información designado por la parte designada principal; recibe su propio EIR y escribe el TIDP de sus equipos de tarea.",
  "ej": "La ingeniería de estructuras subcontratada por el estudio de arquitectura.",
  "eq": "ISO 19650: appointed party.",
  "err": "No pasarle un EIR propio: entonces no sabe qué debe entregar.",
  "rel": [
   "P11",
   "P14",
   "P17"
  ],
  "al": [
   "parte designada",
   "partes designadas",
   "appointed party"
  ]
 },
 {
  "id": "P13",
  "slug": "equipo-de-desarrollo",
  "t": "Equipo de desarrollo",
  "en": "Delivery team",
  "b": "I",
  "d": "Conjunto formado por una parte designada principal y sus partes designadas.",
  "ej": "Arquitectura + estructura + instalaciones bajo un mismo contrato principal.",
  "eq": "ISO 19650: delivery team. En español también «equipo de ejecución» (traducción UNE por confirmar).",
  "err": "Confundirlo con el equipo del proyecto, que incluye además a la parte que designa y a otros equipos de desarrollo.",
  "rel": [
   "P11",
   "P12",
   "P15"
  ],
  "al": [
   "equipo de desarrollo",
   "equipos de desarrollo",
   "delivery team"
  ]
 },
 {
  "id": "P14",
  "slug": "equipo-de-tarea",
  "t": "Equipo de tarea",
  "en": "Task team",
  "b": "I",
  "d": "Grupo de personas que realiza un paquete de trabajo concreto dentro de una parte designada.",
  "ej": "El equipo de instalaciones eléctricas dentro de la ingeniería.",
  "eq": "ISO 19650: task team.",
  "err": "Tratar a la empresa entera como un solo equipo de tarea y perder el detalle del TIDP.",
  "rel": [
   "P12",
   "P17"
  ],
  "al": [
   "equipo de tarea",
   "equipos de tarea",
   "task team"
  ]
 },
 {
  "id": "P15",
  "slug": "equipo-del-proyecto",
  "t": "Equipo del proyecto",
  "en": "Project team",
  "b": "I",
  "d": "La parte que designa más todos los equipos de desarrollo del proyecto.",
  "ej": "Promotor, equipo de diseño y constructora de una misma obra.",
  "eq": "ISO 19650: project team.",
  "err": "—",
  "rel": [
   "P10",
   "P13"
  ],
  "al": [
   "equipo del proyecto",
   "project team"
  ]
 },
 {
  "id": "P16",
  "slug": "matriz-de-responsabilidades",
  "t": "Matriz de responsabilidades",
  "en": "Responsibility matrix",
  "b": "I",
  "d": "Tabla que asigna quién produce cada información: de alto nivel en el BEP previo y detallada (por contenedor, hito y responsable) tras la designación.",
  "ej": "Hoja de cálculo con contenedores en filas y equipos en columnas.",
  "eq": "ISO 19650-2: high-level / detailed responsibility matrix; RACI en gestión de proyectos.",
  "err": "Filas con dos «responsables»: si todos lo son, nadie lo es.",
  "rel": [
   "P02",
   "P17",
   "P18"
  ],
  "al": [
   "matriz de responsabilidades",
   "matriz de responsabilidad"
  ]
 },
 {
  "id": "P17",
  "slug": "plan-de-entrega-de-informacion-de-la-tarea",
  "t": "Plan de entrega de información de la tarea (TIDP)",
  "en": "Task information delivery plan (TIDP)",
  "b": "I",
  "d": "Lista de contenedores que entregará cada equipo de tarea, con nivel de información, formato, fecha y responsable.",
  "ej": "TIDP del equipo de estructuras para el proyecto básico.",
  "eq": "ISO 19650-2.",
  "err": "Hacerlo una vez y no actualizarlo cuando cambia el calendario.",
  "rel": [
   "P18",
   "P14",
   "P16"
  ],
  "al": [
   "TIDP",
   "plan de entrega de información de la tarea"
  ]
 },
 {
  "id": "P18",
  "slug": "plan-maestro-de-entrega-de-informacion",
  "t": "Plan maestro de entrega de información (MIDP)",
  "en": "Master information delivery plan (MIDP)",
  "b": "I",
  "d": "Plan que reúne los TIDP de todo el equipo de desarrollo, alineado con los hitos de entrega de la parte que designa.",
  "ej": "MIDP del equipo ganador de un concurso de hospital.",
  "eq": "ISO 19650-2; Perú: «programa general de desarrollo de la información» (traducción UNE por confirmar).",
  "err": "Usarlo como diagrama de Gantt de obra en lugar de como plan de información.",
  "rel": [
   "P17",
   "P19",
   "P11"
  ],
  "al": [
   "MIDP",
   "plan maestro de entrega de información",
   "plan maestro de entrega"
  ]
 },
 {
  "id": "P19",
  "slug": "hito-de-entrega-de-informacion-p19",
  "t": "Hito de entrega de información",
  "en": "Information delivery milestone",
  "b": "I",
  "d": "Momento en que la parte que designa necesita información para decidir; puede estar al final de una etapa o dentro de ella.",
  "ej": "Entrega antes de pedir la licencia de obras.",
  "eq": "ISO 19650-1/2; key decision points.",
  "err": "Fijar los hitos por la comodidad del equipo y no por las decisiones del cliente.",
  "rel": [
   "P06",
   "P18"
  ],
  "al": [
   "hito de entrega",
   "hitos de entrega",
   "hito de entrega de información"
  ]
 },
 {
  "id": "P20",
  "slug": "estrategia-de-federacion",
  "t": "Estrategia de federación",
  "en": "Federation strategy",
  "b": "I",
  "d": "Cómo se divide la información en contenedores (por disciplina, volumen, nivel…) y cómo se juntan para coordinar.",
  "ej": "Un modelo por disciplina y edificio, federado cada semana.",
  "eq": "ISO 19650-2 (BEP previo); estructura de desglose de contenedores.",
  "err": "Dividir el modelo según la costumbre de cada programa sin pensar en quién lo produce.",
  "rel": [
   "P01",
   "P24"
  ],
  "al": [
   "estrategia de federación"
  ]
 },
 {
  "id": "P21",
  "slug": "estandar-de-informacion-del-proyecto",
  "t": "Estándar de información del proyecto",
  "en": "Project's information standard",
  "b": "I",
  "d": "Reglas comunes de la información: nombres, clasificación, unidades, niveles de información, sistema de coordenadas y formatos. El BEP propone cambios y el BEP confirmado los fija.",
  "ej": "Convención de nombres + metros + EPSG:25830 + altitudes Alicante.",
  "eq": "ISO 19650-2, 5.1.4.",
  "err": "Dejar las coordenadas fuera: cada disciplina elige su origen.",
  "rel": [
   "P28",
   "P22",
   "P01"
  ],
  "al": [
   "estándar de información",
   "estándar de información del proyecto"
  ]
 },
 {
  "id": "P22",
  "slug": "metodos-y-procedimientos-de-produccion-de-la-informacion",
  "t": "Métodos y procedimientos de producción de la información",
  "en": "Information production methods and procedures",
  "b": "I",
  "d": "Cómo se produce, comprueba, revisa, aprueba y comparte la información en el proyecto.",
  "ej": "Revisión interna antes de pasar un fichero a compartido.",
  "eq": "ISO 19650-2, 5.1.5.",
  "err": "Confundirlos con el estándar: el estándar dice cómo es la información; los métodos, cómo se trabaja.",
  "rel": [
   "P21",
   "P25"
  ],
  "al": [
   "métodos y procedimientos de producción",
   "métodos de producción"
  ]
 },
 {
  "id": "P23",
  "slug": "protocolo-de-informacion",
  "t": "Protocolo de información",
  "en": "Information protocol",
  "b": "II",
  "d": "Anexo contractual que incorpora la gestión de la información a la designación: responsabilidades, licencias y uso de la información.",
  "ej": "—",
  "eq": "UK BIM Framework: Information Protocol (2021).",
  "err": "Firmar el contrato sin él: entonces el BEP no obliga a nada.",
  "rel": [
   "P04",
   "P01"
  ],
  "al": [
   "protocolo de información"
  ]
 },
 {
  "id": "P24",
  "slug": "contenedor-de-informacion",
  "t": "Contenedor de información",
  "en": "Information container",
  "b": "I",
  "d": "Conjunto de información con nombre propio, recuperable de un sistema de ficheros o aplicación: un plano, un modelo, una tabla, un documento.",
  "ej": "HSP-ARQ-ZZ-01-M3-A-0001.ifc",
  "eq": "ISO 19650-1.",
  "err": "Pensar solo en modelos: un PDF o una hoja de cálculo también son contenedores.",
  "rel": [
   "P28",
   "P25",
   "P08"
  ],
  "al": [
   "contenedor de información",
   "contenedores de información",
   "contenedor",
   "contenedores"
  ]
 },
 {
  "id": "P25",
  "slug": "estados-del-cde",
  "t": "Estados del CDE",
  "en": "CDE states",
  "b": "I",
  "d": "Situación de cada contenedor en el entorno común de datos: trabajo en curso, compartido, publicado y archivado. Cada transición exige una comprobación, revisión o autorización.",
  "ej": "Carpeta WIP de cada equipo y carpeta de publicados del proyecto.",
  "eq": "ISO 19650-1; Autodesk Docs y BCDE Project los implementan con estados y flujos.",
  "err": "Tener las cuatro carpetas sin nadie que firme las transiciones.",
  "rel": [
   "P26",
   "P24",
   "P22"
  ],
  "al": [
   "estados del CDE",
   "trabajo en curso",
   "work in progress"
  ]
 },
 {
  "id": "P26",
  "slug": "codigo-de-estado",
  "t": "Código de estado",
  "en": "Status code",
  "b": "II",
  "d": "Metadato que indica para qué es apto un contenedor: S0 en curso; S1–S7 compartido; A, B y CR publicado (anexo nacional británico de 2021).",
  "ej": "S1 apto para coordinación; A1 autorizado y aceptado.",
  "eq": "BS EN ISO 19650-2 NA; Autodesk Docs (atributo); otros CDE con listas propias.",
  "err": "Usar S para «sin revisar» y A para «aprobado» sin definir la lista en el estándar del proyecto.",
  "rel": [
   "P25",
   "P27",
   "P28"
  ],
  "al": [
   "código de estado",
   "códigos de estado",
   "status code"
  ]
 },
 {
  "id": "P27",
  "slug": "codigo-de-revision",
  "t": "Código de revisión",
  "en": "Revision code",
  "b": "II",
  "d": "Identificador de versión del contenedor: P01, P02… preliminar; C01, C02… contractual; P01.01 para versiones intermedias.",
  "ej": "P03 en compartido; C01 al publicar.",
  "eq": "BS EN ISO 19650-2 NA.",
  "err": "Reiniciar la numeración al cambiar de estado.",
  "rel": [
   "P26",
   "P28"
  ],
  "al": [
   "código de revisión",
   "códigos de revisión"
  ]
 },
 {
  "id": "P28",
  "slug": "convencion-de-nomenclatura",
  "t": "Convención de nomenclatura",
  "en": "Naming convention",
  "b": "II",
  "d": "Regla de identificación de contenedores por campos separados por guiones: proyecto-originador-volumen-nivel-tipo-rol-número (anexo nacional británico).",
  "ej": "HSP-ARQ-ZZ-01-M3-A-0001",
  "eq": "BS EN ISO 19650-2 NA; validador de nombres de Autodesk Docs.",
  "err": "Copiar la convención británica sin definir los códigos de cada campo para el proyecto.",
  "rel": [
   "P24",
   "P26",
   "P21"
  ],
  "al": [
   "convención de nombres",
   "convención de nomenclatura",
   "nomenclatura"
  ]
 },
 {
  "id": "P29",
  "slug": "plan-de-movilizacion",
  "t": "Plan de movilización",
  "en": "Mobilization plan",
  "b": "I",
  "d": "Cómo el equipo pondrá en marcha y probará recursos, tecnología y métodos antes de producir (ISO 19650-2, 5.3.5 y 5.5).",
  "ej": "Prueba de exportación IFC y subida al CDE en la primera semana.",
  "eq": "ISO 19650-2.",
  "err": "Empezar a producir sin haber probado el flujo completo.",
  "rel": [
   "P02",
   "P30"
  ],
  "al": [
   "plan de movilización",
   "movilización"
  ]
 },
 {
  "id": "P30",
  "slug": "proceso-de-gestion-de-la-informacion",
  "t": "Proceso de gestión de la información",
  "en": "Information management process",
  "b": "II",
  "d": "Las ocho actividades de ISO 19650-2 para cada designación: evaluación y necesidad, invitación a licitar, respuesta, designación, movilización, producción colaborativa, entrega y cierre.",
  "ej": "—",
  "eq": "ISO 19650-2, cláusula 5; ISO 19650-3 para la operación.",
  "err": "Leer el BEP como un documento suelto y no como parte de ese proceso.",
  "rel": [
   "P01",
   "P02",
   "P03",
   "P29"
  ],
  "al": [
   "gestión de la información",
   "proceso de gestión de la información"
  ]
 },
 {
  "id": "P31",
  "slug": "serie-iso-19650",
  "t": "Serie ISO 19650",
  "en": "ISO 19650 series",
  "b": "II",
  "d": "Normas internacionales de gestión de la información con BIM: 1 conceptos, 2 desarrollo, 3 operación, 4 intercambio, 5 seguridad, 6 salud y seguridad. En España, UNE-EN ISO 19650.",
  "ej": "UNE-EN ISO 19650-1:2019 y -2:2019.",
  "eq": "BS 1192 y PAS 1192-2 (antecedentes británicos).",
  "err": "Citar «ISO 19650» sin la parte: el BEP está en la parte 2.",
  "rel": [
   "P30",
   "P01"
  ],
  "al": [
   "ISO 19650",
   "UNE-EN ISO 19650"
  ]
 },
 {
  "id": "P32",
  "slug": "usos-bim",
  "t": "Usos BIM",
  "en": "BIM uses",
  "b": "I",
  "d": "Formas concretas de aplicar BIM para conseguir un objetivo (coordinación 3D, mediciones, simulación…); eje de la guía de Penn State y de NBIMS-US.",
  "ej": "Coordinación 3D y extracción de planos, exigidos en el nivel Inicial del Plan BIM.",
  "eq": "Penn State BIM PxP Guide; NBIMS-US V4; Plan BIM español.",
  "err": "Pedir «todos los usos» en el EIR sin decir para qué decisión sirve cada uno.",
  "rel": [
   "P01",
   "P04"
  ],
  "al": [
   "usos BIM",
   "uso BIM"
  ]
 },
 {
  "id": "P33",
  "slug": "plan-bim-en-la-contratacion-publica",
  "t": "Plan BIM en la contratación pública",
  "en": "Spanish BIM plan for public procurement",
  "b": "II",
  "d": "Plan de Incorporación de la Metodología BIM en la contratación pública (Acuerdo del Consejo de Ministros de 27/06/2023, Orden PCM/818/2023): calendario de niveles BIM exigidos por valor de contrato.",
  "ej": "Nivel Medio en obras ≥ 5.404.000 € desde el 1/10/2025.",
  "eq": "Instrucción interna para la AGE; recomendación para el resto del sector público.",
  "err": "Llamarlo «real decreto»: no lo es.",
  "rel": [
   "P34",
   "P35"
  ],
  "al": [
   "Plan BIM",
   "Orden PCM/818/2023",
   "Plan de Incorporación de la Metodología BIM"
  ]
 },
 {
  "id": "P34",
  "slug": "nivel-bim",
  "t": "Nivel BIM (Plan BIM español)",
  "en": "BIM level (Spanish BIM plan)",
  "b": "II",
  "d": "Escala de madurez del Plan BIM: PreBIM, Inicial, Medio, Avanzado e Integrado, evaluada en estrategia, procesos, tecnología y personas.",
  "ej": "Nivel Inicial: modelos para planos y coordinación 3D, CDE como repositorio y formatos abiertos.",
  "eq": "UK: «BIM Level 2» (término retirado con ISO 19650).",
  "err": "Confundirlo con los «niveles de desarrollo» (LOD) de los elementos.",
  "rel": [
   "P33"
  ],
  "al": [
   "nivel BIM",
   "niveles BIM"
  ]
 },
 {
  "id": "P35",
  "slug": "comision-interministerial-bim",
  "t": "Comisión Interministerial BIM (CIBIM)",
  "en": "Interministerial BIM Commission",
  "b": "II",
  "d": "Órgano creado por el RD 1515/2018 para coordinar la incorporación de BIM en la contratación de la Administración General del Estado; elaboró el Plan BIM.",
  "ej": "cibim.transportes.gob.es",
  "eq": "Antes: Comisión es.BIM (2015).",
  "err": "Atribuirle el Plan BIM como norma propia: lo aprobó el Consejo de Ministros.",
  "rel": [
   "P33",
   "P34"
  ],
  "al": [
   "CIBIM",
   "CBIM",
   "Comisión Interministerial BIM"
  ]
 },
 {
  "id": "P36",
  "slug": "anexo-nacional-britanico",
  "t": "Anexo nacional británico",
  "en": "UK National Annex",
  "b": "II",
  "d": "Anexo de BS EN ISO 19650-2 que concreta para el Reino Unido la convención de nombres, los códigos de estado y los de revisión.",
  "ej": "Muchos pliegos españoles copian su convención.",
  "eq": "BS EN ISO 19650-2:2018 + A1 / NA (2021).",
  "err": "Darlo por norma española: España no tiene anexo nacional.",
  "rel": [
   "P28",
   "P26",
   "P27"
  ],
  "al": [
   "anexo nacional",
   "anexo nacional británico"
  ]
 },
 {
  "id": "P37",
  "slug": "registro-de-riesgos-de-informacion",
  "t": "Registro de riesgos de información",
  "en": "Information risk register",
  "b": "I",
  "d": "Riesgos que pueden impedir entregar la información en plazo y forma, con su tratamiento; acompaña a la respuesta a la licitación (ISO 19650-2, 5.3.6).",
  "ej": "Riesgo: versión de software distinta entre arquitectura y estructura.",
  "eq": "ISO 19650-2.",
  "err": "Confundirlo con el registro de riesgos de obra.",
  "rel": [
   "P02",
   "P29"
  ],
  "al": [
   "registro de riesgos"
  ]
 },
 {
  "id": "P38",
  "slug": "plan-de-produccion-de-informacion",
  "t": "Plan de producción de información (propuesto)",
  "en": "Information Production Plan (proposed)",
  "b": "II",
  "d": "Nombre que, según fuentes que siguieron la consulta pública, podría sustituir al BEP en la revisión de ISO 19650 (borrador en nueva votación desde el 18/08/2026). No es definitivo.",
  "ej": "—",
  "eq": "ISO/DIS 19650-2.",
  "err": "Usarlo ya como término oficial.",
  "rel": [
   "P01",
   "P31"
  ],
  "al": [
   "Information Production Plan"
  ]
 },
 {
  "id": "G01",
  "slug": "gemelo-digital",
  "t": "Gemelo digital",
  "en": "Digital twin",
  "b": "I",
  "d": "Representación virtual integrada y basada en datos de entidades y procesos reales, con interacción sincronizada a una frecuencia y fidelidad especificadas.",
  "ej": "Gemelo urbano del Ayuntamiento de Madrid, que integra cartografía 3D y datos de sensores municipales.",
  "eq": "ISO/IEC 30173:2023 (término normalizado); 'operational twin' en AWS IoT TwinMaker; 'twin graph' en Azure Digital Twins; 'facility twin' en Autodesk Tandem; 'iTwin' en Bentley; 'virtual twin' en Dassault.",
  "err": "Llamar gemelo a cualquier modelo BIM o render 3D: sin conexión de datos con el activo real no hay gemelo.",
  "rel": [
   "G02",
   "G03",
   "G04",
   "G05",
   "G43"
  ],
  "al": [
   "gemelo digital",
   "gemelos digitales",
   "digital twin",
   "digital twins",
   "réplica digital"
  ]
 },
 {
  "id": "G02",
  "slug": "modelo-digital",
  "t": "Modelo digital",
  "en": "Digital model",
  "b": "I",
  "d": "Representación digital de un objeto físico sin intercambio automático de datos: cualquier actualización entre objeto y modelo se hace manualmente (Kritzinger et al., 2018).",
  "ej": "Modelo BIM 'as built' entregado al final de obra y que nadie actualiza tras reformas.",
  "eq": "Nivel 1 'Digital model' de Arup (2019); modelo de información del activo estático (ISO 19650).",
  "err": "Creer que un modelo BIM 'as built' ya es un gemelo digital.",
  "rel": [
   "G01",
   "G03",
   "G08"
  ],
  "al": [
   "modelo digital",
   "digital model",
   "modelo BIM estático"
  ]
 },
 {
  "id": "G03",
  "slug": "sombra-digital",
  "t": "Sombra digital",
  "en": "Digital shadow",
  "b": "I",
  "d": "Representación digital que recibe datos automáticamente del objeto físico, pero cuyos cambios no vuelven automáticamente al objeto (flujo unidireccional) (Kritzinger et al., 2018).",
  "ej": "Cuadro de mando que muestra en un modelo 3D las temperaturas de las salas enviadas por la gestión técnica del edificio (BMS), sin enviar consignas.",
  "eq": "Muchos productos comerciales 'digital twin' de operación funcionan en la práctica como sombra digital (monitorización sin actuación).",
  "err": "Pensar que todo gemelo debe actuar sobre el activo: en construcción la mayoría de casos reales son sombras digitales y es legítimo decirlo.",
  "rel": [
   "G01",
   "G02",
   "G37"
  ],
  "al": [
   "sombra digital",
   "digital shadow",
   "sombras digitales"
  ]
 },
 {
  "id": "G04",
  "slug": "activo-fisico",
  "t": "Activo físico",
  "en": "Physical asset / physical twin",
  "b": "I",
  "d": "Elemento real (edificio, puente, equipo, red) que el gemelo representa y del que recibe datos; ISO 55000 lo define como elemento con valor potencial o real para una organización.",
  "ej": "Una enfriadora de un hospital, una pila de un viaducto o una estación de bombeo del Canal de Isabel II.",
  "eq": "IfcProduct/IfcElement en IFC; 'Asset' en AAS (IEC 63278); 'Equipment' en Brick; 'Entity' en AWS IoT TwinMaker.",
  "err": "Confundir el activo con su modelo: el gemelo debe identificar cada activo de forma única y estable.",
  "rel": [
   "G01",
   "G08",
   "G14"
  ],
  "al": [
   "activo físico",
   "gemelo físico",
   "physical twin"
  ]
 },
 {
  "id": "G05",
  "slug": "nivel-de-madurez-del-gemelo",
  "t": "Nivel de madurez del gemelo",
  "en": "Digital twin maturity level",
  "b": "I",
  "d": "Escala que clasifica un gemelo según su capacidad: Arup (2019) propone 5 niveles, del modelo digital al razonamiento autónomo, valorando autonomía, inteligencia, aprendizaje y fidelidad.",
  "ej": "Un sistema de alertas de temperatura en un edificio sería nivel 2 (realimentación y control) en la escala de Arup.",
  "eq": "Arup 1-5 (2019); ISO/IEC 30186:2025 'Digital twin — Maturity model and guidance for maturity assessment'.",
  "err": "Tratar la madurez como un objetivo en sí: el nivel adecuado depende del caso de uso, no siempre del más alto.",
  "rel": [
   "G01",
   "G43",
   "G35"
  ],
  "al": [
   "nivel de madurez",
   "madurez del gemelo digital",
   "maturity level",
   "niveles de madurez"
  ]
 },
 {
  "id": "G06",
  "slug": "gemelo-digital-nacional",
  "t": "Gemelo digital nacional",
  "en": "National digital twin (NDT)",
  "b": "II",
  "d": "Ecosistema de gemelos digitales conectados mediante intercambio seguro de datos, propuesto en Reino Unido por el CDBB y hoy desarrollado por el National Digital Twin Programme (NDTP).",
  "ej": "Programa británico que pretende conectar gemelos de agua, energía y transporte mediante un marco común de gestión de información.",
  "eq": "Information Management Framework (IMF) del CDBB; Gemini Principles; Integration Architecture del NDTP.",
  "err": "Imaginarlo como un único modelo gigante del país: es una federación de gemelos interoperables.",
  "rel": [
   "G07",
   "G01",
   "G42"
  ],
  "al": [
   "gemelo digital nacional",
   "National Digital Twin",
   "NDTP"
  ]
 },
 {
  "id": "G07",
  "slug": "principios-gemini",
  "t": "Principios Gemini",
  "en": "Gemini Principles",
  "b": "II",
  "d": "Nueve principios (CDBB, diciembre 2018) para gemelos del entorno construido agrupados en propósito, confianza y función: bien público, valor, visión, seguridad, apertura, calidad, federación, curaduría y evolución.",
  "ej": "Usarlos como lista de verificación al redactar el pliego de un gemelo para una red pública.",
  "eq": "Base del Information Management Framework británico; citados en ISO/IEC 30173 y literatura AEC.",
  "err": "Tomarlos como norma técnica: son principios rectores, no requisitos verificables.",
  "rel": [
   "G06",
   "G01"
  ],
  "al": [
   "principios Gemini",
   "Gemini Principles",
   "The Gemini Principles"
  ]
 },
 {
  "id": "G08",
  "slug": "modelo-de-informacion-del-activo-g08",
  "t": "Modelo de información del activo (AIM)",
  "en": "Asset information model (AIM)",
  "b": "II",
  "d": "Modelo de información (geometría, datos y documentos) que sostiene la gestión del activo durante la operación, según ISO 19650-1 y 19650-3.",
  "ej": "Base de datos de activos de mantenimiento alimentada con COBie al recibir un edificio público.",
  "eq": "ISO 19650-3:2020 (fase de operación); 'Facility' en Autodesk Tandem; iModel en Bentley; AIM ≈ capa estática del gemelo.",
  "err": "Confundir AIM con gemelo: el AIM es la base de datos de referencia; el gemelo añade conexión dinámica y analítica.",
  "rel": [
   "G09",
   "G10",
   "G17",
   "G01"
  ],
  "al": [
   "AIM",
   "modelo de información del activo",
   "asset information model"
  ]
 },
 {
  "id": "G09",
  "slug": "modelo-de-informacion-del-proyecto-g09",
  "t": "Modelo de información del proyecto (PIM)",
  "en": "Project information model (PIM)",
  "b": "II",
  "d": "Modelo de información desarrollado durante diseño y construcción (ISO 19650-2); al terminar, la parte relevante se traspasa al AIM.",
  "ej": "Modelos federados de una obra hospitalaria gestionados en un CDE hasta la recepción.",
  "eq": "ISO 19650-2:2018; contenedores de información en el CDE.",
  "err": "Entregar el PIM completo como si fuera el AIM, con datos de obra que no sirven para operar.",
  "rel": [
   "G08",
   "C30",
   "G41"
  ],
  "al": [
   "modelo de información del proyecto",
   "project information model"
  ]
 },
 {
  "id": "G10",
  "slug": "requisitos-de-informacion-del-activo-g10",
  "t": "Requisitos de información del activo (AIR)",
  "en": "Asset information requirements (AIR)",
  "b": "V",
  "d": "Requisitos del propietario sobre qué información del activo debe entregarse para su gestión, derivados de los requisitos organizacionales (OIR) según ISO 19650.",
  "ej": "Lista de atributos obligatorios (fabricante, nº serie, garantía, intervalo de mantenimiento) para cada bomba de un edificio.",
  "eq": "ISO 19650-1/-3; se pueden expresar de forma verificable con IDS (buildingSMART) o plantillas COBie.",
  "err": "Redactar AIR genéricos en PDF que nadie puede comprobar automáticamente.",
  "rel": [
   "G08",
   "C25",
   "G18",
   "G17"
  ],
  "al": [
   "AIR",
   "requisitos de información del activo",
   "asset information requirements"
  ]
 },
 {
  "id": "G13",
  "slug": "ifc",
  "t": "IFC",
  "en": "Industry Foundation Classes",
  "b": "II",
  "d": "Esquema abierto de buildingSMART para describir datos de construcción e infraestructura; la versión IFC 4.3 se publicó como ISO 16739-1:2024 (abril 2024).",
  "ej": "Exportar el modelo de un viaducto en IFC 4.3 con IfcBridge para cargarlo en una plataforma de gemelo.",
  "eq": "Importado por Autodesk Tandem, Bentley iTwin (conector IFC), Nemetschek dTwin, Dalux; convertible a grafo (ifcOWL, Brick).",
  "err": "Pensar que IFC transmite datos de sensores en tiempo real: IFC describe el activo, no el flujo de telemetría.",
  "rel": [
   "G14",
   "G15",
   "G16",
   "G18"
  ],
  "al": [
   "IFC",
   "Industry Foundation Classes",
   "ISO 16739"
  ]
 },
 {
  "id": "G14",
  "slug": "guid-ifc",
  "t": "GUID IFC (GlobalId)",
  "en": "IFC GlobalId (GUID)",
  "b": "V",
  "d": "Identificador único global de 128 bits (codificado en 22 caracteres) de cada objeto IFC; permite trazar un elemento del modelo al registro del gemelo.",
  "ej": "Vincular la etiqueta de mantenimiento de una climatizadora con el GlobalId del IfcUnitaryEquipment.",
  "eq": "IfcRoot.GlobalId en IFC; 'externalId' en Autodesk Tandem; 'federationGuid' en iModel (⚠); propiedad de mapeo en DTDL.",
  "err": "Asumir que el GUID es estable: algunas herramientas lo regeneran al reexportar, rompiendo la trazabilidad.",
  "rel": [
   "G13",
   "G04",
   "G41"
  ],
  "al": [
   "GUID",
   "GlobalId",
   "IfcGloballyUniqueId",
   "identificador persistente"
  ]
 },
 {
  "id": "G15",
  "slug": "ifcsensor",
  "t": "IfcSensor",
  "en": "IfcSensor",
  "b": "II",
  "d": "Clase IFC (subtipo de IfcDistributionControlElement) que representa un dispositivo que mide una magnitud física (temperatura, caudal, deformación) y forma parte de un sistema de control.",
  "ej": "Sensor de humedad modelado en Revit y exportado como IfcSensor con PredefinedType HUMIDITYSENSOR.",
  "eq": "IfcSensor (IFC); brick:Sensor (Brick); sosa:Sensor (SSN/SOSA); Sensor (SensorThings API).",
  "err": "Modelar el sensor solo como geometría genérica (IfcBuildingElementProxy), perdiendo su semántica.",
  "rel": [
   "G13",
   "G16",
   "G19",
   "G22"
  ],
  "al": [
   "IfcSensor",
   "sensor IFC",
   "IfcDistributionControlElement"
  ]
 },
 {
  "id": "G16",
  "slug": "historial-de-rendimiento",
  "t": "Historial de rendimiento (IfcPerformanceHistory)",
  "en": "IfcPerformanceHistory / IfcTimeSeries",
  "b": "II",
  "d": "Entidades IFC para registrar datos de comportamiento de un elemento a lo largo del tiempo (series temporales); poco usadas en la práctica frente a bases de datos de series temporales.",
  "ej": "Guardar en IFC un resumen mensual de consumo de una bomba al entregar el AIM.",
  "eq": "IfcPerformanceHistory + IfcTimeSeries (IFC); series temporales en InfluxDB/Azure Data Explorer en la práctica.",
  "err": "Intentar meter telemetría de alta frecuencia en ficheros IFC.",
  "rel": [
   "G13",
   "G15",
   "G37"
  ],
  "al": [
   "IfcPerformanceHistory",
   "IfcTimeSeries",
   "series temporales IFC"
  ]
 },
 {
  "id": "G17",
  "slug": "cobie-g17",
  "t": "COBie",
  "en": "Construction Operations Building information exchange",
  "b": "II",
  "d": "Especificación de intercambio (normalmente hoja de cálculo o IFC) con espacios, sistemas, componentes, tipos y documentos para la entrega a mantenimiento; nacida en USACE en 2007.",
  "ej": "Entregar a la propiedad un libro COBie con todas las unidades terminales y su garantía.",
  "eq": "NBIMS-US (COBie v3 en elaboración, borrador 2023); BS 1192-4:2014 en Reino Unido; exportadores COBie de Revit, Archicad.",
  "err": "Rellenar COBie al final de la obra 'a mano' sin vincularlo con los GUID del modelo.",
  "rel": [
   "G08",
   "G10",
   "G41"
  ],
  "al": [
   "COBie",
   "Construction Operations Building information exchange",
   "hoja COBie"
  ]
 },
 {
  "id": "G18",
  "slug": "ids-g18",
  "t": "IDS",
  "en": "Information Delivery Specification",
  "b": "VI",
  "d": "Estándar de buildingSMART (v1.0 aprobado el 4-6-2024) para definir requisitos de información en XML legible por humanos y verificable automáticamente contra modelos IFC.",
  "ej": "Fichero IDS que exige que todo IfcPump tenga 'Manufacturer' y 'SerialNumber' antes de cargarlo al gemelo.",
  "eq": "IfcTester (IfcOpenShell), Solibri, BIMcollab Zoom, usBIM.IDS y otros validadores; seis facetas: entity, attribute, property, classification, material, partOf.",
  "err": "Confundir IDS con IFC: IDS describe qué datos se exigen, no el modelo.",
  "rel": [
   "G10",
   "G13",
   "G41"
  ],
  "al": [
   "IDS",
   "Information Delivery Specification",
   "especificación de entrega de información"
  ]
 },
 {
  "id": "G19",
  "slug": "brick",
  "t": "Brick",
  "en": "Brick Schema",
  "b": "II",
  "d": "Ontología abierta (RDF/OWL) para describir equipos, puntos, espacios y relaciones de sistemas de edificios (climatización, iluminación, contadores) de forma legible por máquinas.",
  "ej": "Grafo Brick de un edificio donde un 'Supply_Air_Temperature_Sensor' alimenta una 'AHU'.",
  "eq": "brick:Equipment/Point/Location; equivalencias con Haystack, RealEstateCore y ASHRAE 223P; validación SHACL con la librería brickschema.",
  "err": "Usar Brick para geometría: Brick describe relaciones de sistemas y puntos, no forma ni posición.",
  "rel": [
   "G20",
   "G21",
   "G39",
   "G40"
  ],
  "al": [
   "Brick",
   "Brick Schema",
   "ontología Brick"
  ]
 },
 {
  "id": "G20",
  "slug": "project-haystack",
  "t": "Project Haystack",
  "en": "Project Haystack",
  "b": "II",
  "d": "Iniciativa abierta de etiquetado semántico de datos IoT de edificios (tags como 'ahu', 'temp', 'sensor'); Haystack 5 (2025) añade el lenguaje de esquemas Xeto e integración RDF.",
  "ej": "Puntos del BMS etiquetados 'discharge air temp sensor point' para que una analítica los encuentre.",
  "eq": "Haystack 4 (tags y defs); Haystack 5 con Xeto; usado en SkySpark y numerosos BMS.",
  "err": "Creer que Haystack y Brick compiten sin solución: trabajan en convergencia con ASHRAE 223P.",
  "rel": [
   "G19",
   "G21",
   "G34"
  ],
  "al": [
   "Haystack",
   "Project Haystack",
   "Haystack 5",
   "Xeto"
  ]
 },
 {
  "id": "G21",
  "slug": "realestatecore",
  "t": "RealEstateCore",
  "en": "RealEstateCore (REC)",
  "b": "II",
  "d": "Ontología modular abierta (licencia MIT) para inmuebles que enlaza BIM/IFC, control de edificios e IoT; base de las ontologías DTDL de edificios para Azure Digital Twins.",
  "ej": "Modelar espacios, plantas y equipos de una cartera de oficinas como gemelos REC en Azure Digital Twins.",
  "eq": "REC en DTDL (Azure), WillowTwin (extensión de REC), versión RDF/OWL.",
  "err": "Pensarla como norma ISO: es un consorcio abierto que explícitamente 'puentea' normas existentes.",
  "rel": [
   "G19",
   "G25",
   "G40"
  ],
  "al": [
   "RealEstateCore",
   "ontología RealEstateCore"
  ]
 },
 {
  "id": "G22",
  "slug": "ssn-sosa",
  "t": "SSN/SOSA",
  "en": "Semantic Sensor Network / Sensor, Observation, Sample, Actuator",
  "b": "II",
  "d": "Ontología W3C-OGC (Recomendación, octubre 2017) para describir sensores, observaciones, procedimientos y actuadores; SOSA es su núcleo ligero.",
  "ej": "Describir que un extensómetro (sosa:Sensor) observa la deformación de una viga (sosa:FeatureOfInterest).",
  "eq": "sosa:Sensor ≈ IfcSensor ≈ brick:Sensor; base conceptual de SensorThings API.",
  "err": "Usarla para modelar el edificio entero: se centra en la observación, se combina con otras ontologías.",
  "rel": [
   "G15",
   "G23",
   "G40"
  ],
  "al": [
   "SSN",
   "SOSA",
   "Semantic Sensor Network",
   "ontología SSN"
  ]
 },
 {
  "id": "G23",
  "slug": "sensorthings-api",
  "t": "SensorThings API",
  "en": "OGC SensorThings API",
  "b": "II",
  "d": "Norma OGC de API web abierta y geoespacial para interconectar dispositivos, sensores y observaciones IoT (Parte 1 Sensing v1.0 2016, v1.1 2021; Parte 2 Tasking).",
  "ej": "Publicar las lecturas de piezómetros de una presa como entidades Thing/Datastream/Observation consultables vía REST y MQTT.",
  "eq": "Entidades Thing, Location, Datastream, Sensor, ObservedProperty, Observation, FeatureOfInterest; implementaciones FROST-Server.",
  "err": "Confundirla con un protocolo de bajo nivel: define modelo de datos y API, y usa HTTP/MQTT por debajo.",
  "rel": [
   "G22",
   "G32",
   "G24"
  ],
  "al": [
   "SensorThings",
   "SensorThings API",
   "OGC SensorThings"
  ]
 },
 {
  "id": "G24",
  "slug": "dynamizer",
  "t": "Dynamizer (CityGML 3.0)",
  "en": "CityGML Dynamizer",
  "b": "II",
  "d": "Módulo de CityGML 3.0 (OGC, 2021) que asocia a objetos urbanos valores variables en el tiempo y enlaza sensores IoT con el modelo 3D de ciudad.",
  "ej": "Atribuir a la fachada de un edificio la irradiación solar horaria o enlazar un sensor de tráfico a un tramo de calle.",
  "eq": "CityGML 3.0 Dynamizer; puede apuntar a series de SensorThings API.",
  "err": "Pensar que CityGML 3.0 sustituye a IFC: trabajan a escalas distintas (ciudad vs. edificio).",
  "rel": [
   "G23",
   "G42"
  ],
  "al": [
   "Dynamizer",
   "CityGML 3.0",
   "módulo Dynamizer"
  ]
 },
 {
  "id": "G25",
  "slug": "dtdl",
  "t": "DTDL",
  "en": "Digital Twins Definition Language",
  "b": "II",
  "d": "Lenguaje abierto de Microsoft basado en JSON-LD para definir modelos de gemelos (interfaces con propiedades, telemetría, relaciones y componentes); versiones v2, v3 y v4.",
  "ej": "Interfaz 'Room' con propiedad humidity y relación 'hasSensors', usada para un campus universitario.",
  "eq": "Azure Digital Twins (soporta v2/v3), ontologías RealEstateCore y WillowTwin, Azure IoT Plug and Play.",
  "err": "Creer que DTDL es una norma ISO/IEC: es especificación abierta de Microsoft.",
  "rel": [
   "G21",
   "G30",
   "G40"
  ],
  "al": [
   "DTDL",
   "Digital Twins Definition Language",
   "DTDL v3",
   "DTDL v4"
  ]
 },
 {
  "id": "G26",
  "slug": "asset-administration-shell",
  "t": "Asset Administration Shell (AAS)",
  "en": "Asset Administration Shell",
  "b": "II",
  "d": "Representación digital normalizada (IEC 63278-1:2023) que da acceso uniforme a la información y servicios de un activo industrial mediante submodelos.",
  "ej": "Placa de características digital de una enfriadora entregada por el fabricante como AAS.",
  "eq": "IEC 63278; Industrie 4.0 / IDTA; Eclipse BaSyx; submodelos 'Digital Nameplate', 'Technical Data'.",
  "err": "Considerarla ajena a la construcción: se empieza a usar para equipos MEP y productos.",
  "rel": [
   "G04",
   "G26",
   "G33"
  ],
  "al": [
   "Asset Administration Shell",
   "administración del activo",
   "IEC 63278"
  ]
 },
 {
  "id": "G27",
  "slug": "openusd",
  "t": "OpenUSD",
  "en": "Universal Scene Description",
  "b": "V",
  "d": "Formato y API abiertos para describir y componer escenas 3D, originado en Pixar; la Alliance for OpenUSD publicó la Core Specification 1.0 el 17-12-2025.",
  "ej": "Componer en NVIDIA Omniverse el modelo de una fábrica a partir de capas USD procedentes de Revit y de datos de sensores.",
  "eq": "NVIDIA Omniverse; conectores USD de Autodesk, Bentley; Cesium for Omniverse.",
  "err": "Pensar que USD sustituye a IFC: USD es escena/visualización; IFC lleva la semántica de construcción.",
  "rel": [
   "G28",
   "G13"
  ],
  "al": [
   "OpenUSD",
   "Universal Scene Description"
  ]
 },
 {
  "id": "G28",
  "slug": "3d-tiles",
  "t": "3D Tiles",
  "en": "3D Tiles",
  "b": "IV",
  "d": "Formato abierto creado por Cesium (Community Standard OGC) para transmitir por teselas grandes conjuntos 3D (ciudades, nubes de puntos, modelos BIM) a la web.",
  "ej": "Mostrar en navegador un gemelo de una autopista con terreno, ortofoto y modelo BIM teselado.",
  "eq": "Cesium ion, CesiumJS, Cesium for Unreal/Unity/Omniverse, Bentley iTwin.",
  "err": "Esperar semántica BIM completa en 3D Tiles: lleva metadatos, pero su objetivo es la visualización eficiente.",
  "rel": [
   "G27",
   "G42"
  ],
  "al": [
   "3D Tiles",
   "teselas 3D",
   "OGC 3D Tiles"
  ]
 },
 {
  "id": "G29",
  "slug": "imodel",
  "t": "iModel",
  "en": "iModel",
  "b": "III",
  "d": "Base de datos distribuida (sobre SQLite) de la plataforma Bentley iTwin que alinea datos de diversas fuentes de ingeniería en un esquema común y registra cambios ('changesets').",
  "ej": "Sincronizar modelos IFC, DGN y Revit de una línea de metro en un iModel común.",
  "eq": "iTwin.js (código abierto); conectores IFC/Revit/DGN; esquemas BIS (⚠ detalle técnico no verificado en esta sesión).",
  "err": "Confundir iModel con un archivo: es un repositorio con historial de cambios.",
  "rel": [
   "G13",
   "G30"
  ],
  "al": [
   "iModel",
   "iModels"
  ]
 },
 {
  "id": "G30",
  "slug": "grafo-de-gemelos",
  "t": "Grafo de gemelos",
  "en": "Twin graph / knowledge graph",
  "b": "IV",
  "d": "Red de gemelos (nodos) conectados por relaciones tipadas (contiene, alimenta, sirve a) que permite consultar el estado del sistema y su contexto.",
  "ej": "Consulta: 'todas las salas de la planta 3 servidas por la UTA-2 con CO2 > 1000 ppm'.",
  "eq": "Azure Digital Twins (twin graph), AWS IoT TwinMaker (knowledge graph), grafo RDF Brick.",
  "err": "Pensar que el modelo 3D es el gemelo: el grafo de relaciones suele aportar más valor que la geometría.",
  "rel": [
   "G25",
   "G19",
   "G40"
  ],
  "al": [
   "grafo de gemelos",
   "twin graph",
   "grafo de conocimiento",
   "knowledge graph"
  ]
 },
 {
  "id": "G31",
  "slug": "internet-de-las-cosas",
  "t": "Internet de las cosas (IoT)",
  "en": "Internet of Things",
  "b": "I",
  "d": "Red de dispositivos con sensores y conectividad que envían datos a sistemas informáticos; en un gemelo, es la vía de actualización del estado del activo.",
  "ej": "Sensores LoRaWAN de ocupación en las aulas de un edificio universitario.",
  "eq": "Azure IoT Hub, AWS IoT Core, Eclipse Ditto; normalizado en ISO/IEC JTC 1/SC 41.",
  "err": "Pensar que más sensores es mejor gemelo: sin modelo semántico los datos son difíciles de usar.",
  "rel": [
   "G32",
   "G33",
   "G34"
  ],
  "al": [
   "IoT",
   "Internet de las cosas",
   "Internet of Things",
   "sensores IoT"
  ]
 },
 {
  "id": "G32",
  "slug": "mqtt",
  "t": "MQTT",
  "en": "MQTT",
  "b": "V",
  "d": "Protocolo ligero de mensajería publicación/suscripción (OASIS; ISO/IEC 20922) muy usado para enviar telemetría de sensores a plataformas de gemelos.",
  "ej": "Gateway del edificio que publica 'edificio/p3/sala12/co2' cada minuto a un broker.",
  "eq": "Soportado por Eclipse Ditto (MQTT 3.1.1 y 5), Azure IoT Hub, AWS IoT Core, SensorThings API.",
  "err": "Creer que MQTT da semántica: solo transporta mensajes; el significado lo da el modelo (Brick, DTDL...).",
  "rel": [
   "G31",
   "G33",
   "G23"
  ],
  "al": [
   "MQTT",
   "protocolo MQTT",
   "broker MQTT"
  ]
 },
 {
  "id": "G33",
  "slug": "opc-ua",
  "t": "OPC UA",
  "en": "OPC Unified Architecture",
  "b": "V",
  "d": "Arquitectura de comunicación industrial (IEC 62541) con modelo de información propio; existe un mapeo publicado entre BACnet (ISO 16484-5) y OPC UA.",
  "ej": "Leer datos de una planta de tratamiento de agua (SCADA) hacia el gemelo de la red.",
  "eq": "IEC 62541; companion specifications; conectores OPC UA en AWS IoT SiteWise, Azure IoT.",
  "err": "Asumir que OPC UA es solo industria: aparece en infraestructuras y grandes instalaciones.",
  "rel": [
   "G34",
   "G32",
   "G26"
  ],
  "al": [
   "OPC UA",
   "OPC-UA",
   "IEC 62541"
  ]
 },
 {
  "id": "G34",
  "slug": "bacnet",
  "t": "BACnet",
  "en": "BACnet",
  "b": "V",
  "d": "Protocolo de comunicación para automatización y control de edificios (ASHRAE 135 / ISO 16484-5), fuente habitual de datos operacionales de climatización e iluminación.",
  "ej": "Integrar los puntos BACnet del BMS de un hospital en Autodesk Tandem o Willow mediante un conector.",
  "eq": "ISO 16484-5; mapeo a OPC UA; puntos etiquetables con Haystack/Brick.",
  "err": "Pensar que los nombres de puntos BACnet son comprensibles: suelen ser códigos que hay que mapear.",
  "rel": [
   "G20",
   "G19",
   "G33"
  ],
  "al": [
   "BACnet",
   "ISO 16484-5",
   "ASHRAE 135"
  ]
 },
 {
  "id": "G35",
  "slug": "mantenimiento-predictivo",
  "t": "Mantenimiento predictivo",
  "en": "Predictive maintenance",
  "b": "I",
  "d": "Estrategia que anticipa fallos a partir de datos de estado y modelos analíticos para intervenir antes de la avería; nivel 3 en la escala de Arup.",
  "ej": "Detectar por vibración y consumo que una bomba de impulsión se degrada y programar su sustitución.",
  "eq": "AWS IoT TwinMaker + SiteWise; Azure Digital Twins + analítica; Autodesk Tandem (alertas de umbral).",
  "err": "Confundirlo con mantenimiento preventivo (por calendario).",
  "rel": [
   "G05",
   "G31",
   "G38"
  ],
  "al": [
   "mantenimiento predictivo",
   "predictive maintenance",
   "PdM"
  ]
 },
 {
  "id": "G36",
  "slug": "monitorizacion-de-la-salud-estructural",
  "t": "Monitorización de la salud estructural (SHM)",
  "en": "Structural health monitoring",
  "b": "I",
  "d": "Medición continua (deformación, vibración, inclinación, temperatura) del comportamiento de una estructura para detectar daños y apoyar decisiones de mantenimiento.",
  "ej": "Sistema de monitorización del puente Queensferry Crossing (Escocia) con cientos de sensores.",
  "eq": "Bentley iTwin IoT / partners SHM; SensorThings para publicación; IfcSensor para modelar sensores.",
  "err": "Llamar gemelo a un SHM sin modelo del puente asociado: es monitorización, no necesariamente gemelo.",
  "rel": [
   "G36",
   "G15",
   "G38"
  ],
  "al": [
   "SHM",
   "monitorización estructural",
   "structural health monitoring",
   "auscultación"
  ]
 },
 {
  "id": "G37",
  "slug": "latencia-y-frecuencia-de-sincronizacion",
  "t": "Latencia y frecuencia de sincronización",
  "en": "Latency / synchronisation frequency",
  "b": "VI",
  "d": "Tiempo entre un cambio en el activo y su reflejo en el gemelo, y cadencia de actualización; la definición del DTC exige una frecuencia especificada según el caso de uso.",
  "ej": "Ocupación de salas: cada 5 min basta; vibración de un puente: muestreo de cientos de Hz con agregación.",
  "eq": "Parámetro de diseño en cualquier plataforma (IoT Hub, SiteWise, Tandem streams).",
  "err": "Exigir 'tiempo real' para todo, encareciendo sin aportar valor.",
  "rel": [
   "G01",
   "G03",
   "G38"
  ],
  "al": [
   "latencia",
   "frecuencia de actualización"
  ]
 },
 {
  "id": "G38",
  "slug": "deriva-y-calibracion-del-sensor",
  "t": "Deriva y calibración del sensor",
  "en": "Sensor drift and calibration",
  "b": "VI",
  "d": "Desviación progresiva de la medida de un sensor respecto al valor real; la calibración periódica y la detección de valores anómalos son parte del control de calidad del gemelo.",
  "ej": "Sonda de CO2 que tras dos años mide 150 ppm de más y dispara la ventilación sin necesidad.",
  "eq": "Metadatos de calibración en SSN/SOSA (procedimiento), Brick (propiedades), registros de mantenimiento.",
  "err": "Fiarse del dato porque 'viene del sensor' sin plan de calibración.",
  "rel": [
   "G37",
   "G36",
   "G22"
  ],
  "al": [
   "deriva del sensor",
   "sensor drift"
  ]
 },
 {
  "id": "G39",
  "slug": "shacl",
  "t": "SHACL",
  "en": "Shapes Constraint Language",
  "b": "VI",
  "d": "Lenguaje W3C para validar grafos RDF contra 'formas' (restricciones); se usa para comprobar que un modelo Brick cumple la ontología.",
  "ej": "Validar con la librería Python brickschema que todo sensor tiene 'isPointOf' a un equipo.",
  "eq": "brickschema (Python), pySHACL, TopBraid; ASHRAE 223P también se define con SHACL.",
  "err": "Validar solo la sintaxis RDF y no la coherencia semántica.",
  "rel": [
   "G19",
   "G40"
  ],
  "al": [
   "SHACL",
   "validación SHACL",
   "Shapes Constraint Language"
  ]
 },
 {
  "id": "G40",
  "slug": "ontologia",
  "t": "Ontología",
  "en": "Ontology",
  "b": "V",
  "d": "Modelo formal de conceptos y relaciones de un dominio que permite que distintos sistemas interpreten los datos del gemelo del mismo modo.",
  "ej": "Usar Brick + IFC + SOSA para que analítica, mantenimiento y BIM hablen del mismo 'equipo'.",
  "eq": "Brick, RealEstateCore, ifcOWL, SSN/SOSA, ASHRAE 223P; DTDL como lenguaje de modelado.",
  "err": "Inventar una ontología propia para cada proyecto en lugar de extender una existente.",
  "rel": [
   "G19",
   "G21",
   "G22",
   "G25"
  ],
  "al": [
   "ontología",
   "ontologías",
   "ontology"
  ]
 },
 {
  "id": "G41",
  "slug": "traspaso-de-informacion",
  "t": "Traspaso de información (handover)",
  "en": "Information handover",
  "b": "V",
  "d": "Entrega estructurada de la información del proyecto (PIM) al propietario para formar el AIM y alimentar el gemelo, verificando los requisitos acordados.",
  "ej": "Crossrail entregó a TfL la información de activos del Elizabeth line como parte del traspaso.",
  "eq": "ISO 19650-2/-3; COBie; IDS; 'Soft Landings' británico.",
  "err": "Dejar el traspaso para el final: la información debe acumularse y validarse durante toda la obra.",
  "rel": [
   "G08",
   "G09",
   "G17",
   "G18"
  ],
  "al": [
   "handover",
   "traspaso de información"
  ]
 },
 {
  "id": "G42",
  "slug": "gemelo-digital-urbano",
  "t": "Gemelo digital urbano",
  "en": "Urban digital twin",
  "b": "I",
  "d": "Gemelo a escala de ciudad que integra modelo 3D, datos geoespaciales, sensores y simulaciones para planificación y gestión urbana.",
  "ej": "Virtual Singapore (NRF, desde 2014) o el gemelo digital del Ayuntamiento de Madrid.",
  "eq": "CityGML 3.0, 3D Tiles/Cesium, Dassault 3DEXPERIENCE (Virtual Singapore), Esri.",
  "err": "Equiparar un visor 3D de la ciudad con un gemelo sin datos dinámicos ni simulación.",
  "rel": [
   "G24",
   "G28",
   "G06"
  ],
  "al": [
   "gemelo urbano",
   "gemelo digital urbano",
   "urban digital twin",
   "gemelo de ciudad"
  ]
 },
 {
  "id": "G43",
  "slug": "fidelidad",
  "t": "Fidelidad",
  "en": "Fidelity",
  "b": "I",
  "d": "Grado de detalle y exactitud con que el gemelo reproduce el activo (geometría, datos y comportamiento); debe ser la suficiente para el caso de uso.",
  "ej": "Para gestionar ocupación basta un modelo de espacios; para SHM se necesita un modelo estructural calibrado.",
  "eq": "Métrica 'Fidelity' de Arup; 'fidelity' en la definición del DTC; nivel de información necesario (ISO 7817-1).",
  "err": "Buscar máxima fidelidad geométrica cuando el valor está en los datos.",
  "rel": [
   "G05",
   "G01",
   "G37"
  ],
  "al": [
   "fidelidad",
   "fidelity"
  ]
 }
];
