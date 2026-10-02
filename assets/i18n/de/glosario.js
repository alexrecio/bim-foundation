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
   "DIN EN ISO 19650",
   "estrategia de coordenadas",
   "requisitos de coordenadas"
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
   "coordinación en la nube"
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
  "t": "Informationsbedarfstiefe (LOIN)",
  "en": "Nivel de información necesario (LOIN)",
  "b": "I",
  "d": "Rahmen, der Umfang und Granularität der für jedes Objekt geforderten Informationen festlegt: welche geometrischen und alphanumerischen Informationen und welche Dokumentation für einen Zweck, zu einem Datenübergabepunkt und zwischen bestimmten Akteuren nötig sind (ISO 7817-1).",
  "ej": "Eine Brandschutztür in der Ausführungsplanung, zum Nachweis des Brandschutzes: lichte Durchgangsbreite und Öffnungsrichtung; Klasse EI2 60-C5; Prüfzeugnis.",
  "eq": "Revit/Archicad: existiert nicht als Objekt; wird in Parameter, Vorlagen und eine IDS übersetzt. Anforderungsmanager wie Cobuilder Require, BIMQ oder Plannerly speichern sie in einer Datenbank.",
  "err": "Sie als eine einzige Zahl für das ganze Modell behandeln („Modell LOIN 3“) oder als Summe LOD + LOI.",
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
   "Informationsbedarfstiefe",
   "Informationsbedarfstiefen",
   "LOIN",
   "LoIN",
   "level of information need",
   "Level of Information Need",
   "nivel de información necesario"
  ]
 },
 {
  "id": "N02",
  "slug": "informacion-geometrica",
  "t": "Geometrische Informationen",
  "en": "Información geométrica",
  "b": "I",
  "d": "Teil der Informationsbedarfstiefe, der die Form des Objekts über fünf Aspekte beschreibt: Detaillierung, Dimensionalität, Lage, Erscheinungsbild und parametrisches Verhalten.",
  "ej": "Tür in der Ausführungsplanung: geringe Detaillierung, 3D, absolute Lage, symbolisches Erscheinungsbild, ohne parametrisches Verhalten.",
  "eq": "Wird umgesetzt in der Geometrie der Familie (Revit), im GDL-Objekt (Archicad) oder in der IFC-Repräsentation.",
  "err": "Sie mit der Detailgenauigkeit der Ansicht (grob, mittel, fein) verwechseln, die nur bestimmt, was in welchem Maßstab dargestellt wird.",
  "rel": [
   "N01",
   "N10",
   "N23"
  ],
  "al": [
   "geometrische Informationen",
   "geometrischen Informationen",
   "geometrische Information",
   "Dimensionalität",
   "parametrisches Verhalten",
   "parametrischen Verhalten",
   "Erscheinungsbild",
   "LOG",
   "información geométrica",
   "dimensionalidad",
   "comportamiento paramétrico",
   "apariencia"
  ]
 },
 {
  "id": "N03",
  "slug": "informacion-alfanumerica",
  "t": "Alphanumerische Informationen",
  "en": "Información alfanumérica",
  "b": "I",
  "d": "Teil der Informationsbedarfstiefe, bestehend aus der Identifikation des Objekts (Name, Typ, Code, Klassifikation) und seinem Inhalt (Merkmale mit Name, Wert, Einheit und zulässigen Werten).",
  "ej": "Pset_DoorCommon.FireRating = „EI2 60-C5“; IsExternal = falsch.",
  "eq": "Revit: (gemeinsam genutzte) Parameter; Archicad: Eigenschaften; Allplan: Attribute; Tekla: UDA und Property Sets; IFC: Attribute und Psets.",
  "err": "Merkmale ohne normierten Namen und ohne Datentyp fordern: Auf dieselbe Frage kommen „60 min“, „EI60“ und „ja“ zurück.",
  "rel": [
   "N01",
   "N20",
   "N26"
  ],
  "al": [
   "alphanumerische Informationen",
   "alphanumerischen Informationen",
   "alphanumerische Information",
   "información alfanumérica"
  ]
 },
 {
  "id": "N04",
  "slug": "documentacion",
  "t": "Dokumentation",
  "en": "Documentación",
  "b": "I",
  "d": "Gesamtheit der Dokumente, die ein Objekt oder eine Lieferung begleiten und nicht Teil des Modells sind: Datenblätter, Zertifikate, Fotos, Handbücher, Werkstattpläne.",
  "ej": "Prüfzeugnis zum Feuerwiderstand der Tür als PDF, mit dem Typ verknüpft.",
  "eq": "IFC: IfcDocumentReference, zugeordnet über IfcRelAssociatesDocument; in der CDE mit dem Bauteil verknüpfte Dokumente.",
  "err": "„Technische Dokumentation“ fordern, ohne zu sagen, welches Dokument, in welchem Format und für welchen Datenübergabepunkt.",
  "rel": [
   "N01",
   "N28"
  ],
  "al": [
   "Dokumentation",
   "IfcDocumentReference",
   "documentación"
  ]
 },
 {
  "id": "N05",
  "slug": "proposito",
  "t": "Zweck",
  "en": "Propósito",
  "b": "I",
  "d": "Verwendung, für die die Informationen gedacht sind (koordinieren, Mengen ermitteln, Brandschutz nachweisen, instand halten …). Er ist die erste Bedingung, um die Informationsbedarfstiefe festzulegen.",
  "ej": "Zweck „Nachweis des Brandschutzes“ für die Baugenehmigung.",
  "eq": "IDS: Feld purpose im Kopf <info>.",
  "err": "Informationen „für alle Fälle“ ohne Zweck fordern: Das führt zu Übermodellierung.",
  "rel": [
   "N01",
   "N06",
   "N08",
   "N29"
  ],
  "al": [
   "Zweck",
   "Zwecks",
   "Zwecke",
   "Anwendungsfall",
   "Anwendungsfälle",
   "purpose",
   "propósito",
   "caso de uso"
  ]
 },
 {
  "id": "N06",
  "slug": "hito-de-entrega-de-informacion-n06",
  "t": "Datenübergabepunkt",
  "en": "Hito de entrega de información",
  "b": "I",
  "d": "Vereinbarter Zeitpunkt, zu dem Informationen ausgetauscht werden: Phasenende, Ausschreibung, Genehmigung, Abnahme. Die erforderliche Tiefe wird für jeden Datenübergabepunkt festgelegt.",
  "ej": "Vorentwurf, Entwurf, Genehmigungsplanung, Ausführungsplanung, Bauausführung und Übergabe (Leistungsphasen der HOAI).",
  "eq": "IDS: Feld milestone im Kopf; ISO 19650: Lieferplan (MIDP).",
  "err": "In der Planung Daten fordern, die erst bei der Vergabe bekannt sind (Hersteller, Seriennummer).",
  "rel": [
   "N01",
   "N05",
   "N16"
  ],
  "al": [
   "Datenübergabepunkt",
   "Datenübergabepunkte",
   "Datenübergabepunkten",
   "Datenübergabepunkts",
   "Meilenstein",
   "Meilensteine",
   "milestone",
   "hito",
   "hitos"
  ]
 },
 {
  "id": "N07",
  "slug": "actores",
  "t": "Akteure (Auftraggeber / Auftragnehmer)",
  "en": "Actores (parte que designa / parte designada)",
  "b": "I",
  "d": "Wer die Informationen anfordert (Auftraggeber: der Bauherr oder der federführende Auftragnehmer) und wer sie erstellt (Auftragnehmer). Jede Anforderung benennt beide.",
  "ej": "Der Bauherr fordert an; das Architekturbüro liefert die Türen in der Ausführungsplanung, der Schreiner in der Bauausführung.",
  "eq": "Verantwortlichkeitsmatrix des BAP; Anforderungsmanager mit einer IDS je Akteur.",
  "err": "Keinen Verantwortlichen zuweisen: Die Information bleibt im Niemandsland zwischen zwei Fachdisziplinen.",
  "rel": [
   "N01",
   "N15",
   "N16"
  ],
  "al": [
   "Akteure",
   "Akteuren",
   "Auftraggeber",
   "Auftragnehmer",
   "appointing party",
   "appointed party",
   "actores",
   "parte que designa",
   "parte designada"
  ]
 },
 {
  "id": "N08",
  "slug": "sobremodelado",
  "t": "Übermodellierung",
  "en": "Sobremodelado",
  "b": "I",
  "d": "Mehr Geometrie oder mehr Daten erzeugen, als irgendein Zweck braucht. Ihre Erstellung, Prüfung und Pflege kostet Aufwand und erzeugt Rauschen.",
  "ej": "Beschläge und Schrauben aller Türen schon im Vorentwurf modellieren.",
  "eq": "BIMForum 2025 stärkt seine „Expansion“-Absätze, um auf überzogene LOD-Forderungen zu antworten.",
  "err": "Glauben, ein detaillierteres Modell sei immer besser.",
  "rel": [
   "N01",
   "N05",
   "N09"
  ],
  "al": [
   "Übermodellierung",
   "Überspezifikation",
   "over-modelling",
   "sobremodelado",
   "sobreespecificación"
  ]
 },
 {
  "id": "N09",
  "slug": "nivel-de-desarrollo",
  "t": "Fertigstellungsgrad (LOD)",
  "en": "Nivel de desarrollo (LOD)",
  "b": "I",
  "d": "Skala von 100 bis 500 (plus 350), die angibt, wie weit man sich auf Geometrie und Informationen eines Bauteils verlassen kann. Entstanden um 2004–2005 (Vico), vom AIA in E202-2008 übernommen.",
  "ej": "LOD 300: Menge, Größe, Form, Lage und Ausrichtung im Modell messbar.",
  "eq": "BIMForum LOD Specification (Definitionen je Bauteil); Bauteilmatrizen des BAP.",
  "err": "Ihn auf das ganze Modell anwenden („Modell LOD 300“); BIMForum: „There is no such thing as an LOD ### model“.",
  "rel": [
   "N10",
   "N17",
   "N18",
   "N22"
  ],
  "al": [
   "Fertigstellungsgrad",
   "Fertigstellungsgrade",
   "Fertigstellungsgrads",
   "Fertigstellungsgrades",
   "LOD",
   "level of development",
   "Level of Development",
   "LOD 300",
   "LOD 350",
   "nivel de desarrollo"
  ]
 },
 {
  "id": "N10",
  "slug": "nivel-de-detalle",
  "t": "Detaillierungsgrad (Level of Detail)",
  "en": "Nivel de detalle (Level of Detail)",
  "b": "I",
  "d": "Wie viel grafisches Detail ein Bauteil enthält. BIMForum unterscheidet es vom Fertigstellungsgrad: Detail ist Eingabe, Fertigstellung ist verlässliche Ausgabe.",
  "ej": "Eine Katalogtür mit gezeichnetem Drücker und Bändern, aber ohne festgelegtes Produkt: viel Detail, geringer Fertigstellungsgrad.",
  "eq": "Vereinigtes Königreich (NBS): LOD = level of detail (grafisch). Nicht mit der Detailgenauigkeit der Ansicht verwechseln.",
  "err": "Das grafische Detail als Beweis nehmen, dass das Bauteil festgelegt ist.",
  "rel": [
   "N09",
   "N02",
   "N23"
  ],
  "al": [
   "Detaillierungsgrad",
   "Detaillierungsgrade",
   "Detaillierungsgrads",
   "level of detail",
   "Level of Detail",
   "nivel de detalle"
  ]
 },
 {
  "id": "N11",
  "slug": "nivel-de-informacion",
  "t": "Informationsgrad (LOI)",
  "en": "Nivel de información (LOI)",
  "b": "I",
  "d": "Grad der nicht grafischen (alphanumerischen) Informationen eines Bauteils. Verwendet im Vereinigten Königreich (NBS BIM Toolkit) und in Deutschland (neben LOG), heute in der Informationsbedarfstiefe aufgegangen.",
  "ej": "LOI einer Tür in der Ausführungsplanung: Typ, Feuerwiderstand, Wärmedurchgangskoeffizient, Schallschutz.",
  "eq": "Deutschland: LOG (Geometrie) + LOI; Peru: Matrix mit LOD und LOI.",
  "err": "LOD und LOI als zwei lose Zahlen ohne Zweck und ohne Datenübergabepunkt verwenden.",
  "rel": [
   "N01",
   "N03",
   "N19"
  ],
  "al": [
   "Informationsgrad",
   "Informationsgrads",
   "LOI",
   "LOG",
   "level of information",
   "level of geometry"
  ]
 },
 {
  "id": "N12",
  "slug": "nivel-de-exactitud",
  "t": "Genauigkeitsgrad (LOA)",
  "en": "Nivel de exactitud (LOA)",
  "b": "I",
  "d": "Skala des USIBD (LOA10 bis LOA50), die bei 95 % Vertrauensniveau die zulässige Abweichung des Gemessenen und des Dargestellten von der Wirklichkeit festlegt.",
  "ej": "LOA30 (5–15 mm) für das Aufmaß eines Bestandsgebäudes, das umgebaut werden soll.",
  "eq": "Scans und Punktwolken (ReCap, CloudCompare); Leitfäden wie der von Metrolinx kombinieren ihn mit der LOIN.",
  "err": "Für ein Bestandsmodell einen hohen LOD fordern, ohne die Genauigkeit des Aufmaßes festzulegen.",
  "rel": [
   "N02",
   "N09"
  ],
  "al": [
   "Genauigkeitsgrad",
   "LOA",
   "level of accuracy",
   "Level of Accuracy",
   "nivel de exactitud"
  ]
 },
 {
  "id": "N13",
  "slug": "iso-7817-1",
  "t": "ISO 7817-1",
  "en": "ISO 7817-1",
  "b": "II",
  "d": "Internationale Norm (2024) „Building information modelling — Level of information need — Part 1: Concepts and principles“. Ersetzt die EN 17412-1 ohne inhaltliche Änderungen; in Spanien UNE-EN ISO 7817-1:2025.",
  "ej": "UNE-EN ISO 7817-1:2025 ersetzt die UNE-EN 17412-1:2021, zurückgezogen am 22.01.2025.",
  "eq": "BIMForum 2025 beschreibt jeden LOD mit den Aspekten der ISO 7817-1.",
  "err": "In Ausschreibungen nach 2025 weiterhin die EN 17412-1 zitieren.",
  "rel": [
   "N01",
   "N14",
   "N15"
  ],
  "al": [
   "ISO 7817",
   "ISO 7817-1",
   "EN ISO 7817-1",
   "DIN EN ISO 7817-1",
   "UNE-EN ISO 7817-1"
  ]
 },
 {
  "id": "N14",
  "slug": "en-17412-1",
  "t": "EN 17412-1",
  "en": "EN 17412-1",
  "b": "II",
  "d": "Erste europäische Norm (CEN, 2020) zur Informationsbedarfstiefe. Zurückgezogen und ersetzt durch die EN ISO 7817-1:2024.",
  "ej": "UNE-EN 17412-1:2021, veröffentlicht am 28.04.2021 und zurückgezogen am 22.01.2025.",
  "eq": "—",
  "err": "Sie als gültig zitieren.",
  "rel": [
   "N13"
  ],
  "al": [
   "EN 17412-1",
   "DIN EN 17412-1",
   "UNE-EN 17412-1"
  ]
 },
 {
  "id": "N15",
  "slug": "requisitos-de-informacion",
  "t": "Informationsanforderungen (OIR, AIR, PIR, EIR)",
  "en": "Requisitos de información (OIR, AIR, PIR, EIR)",
  "b": "II",
  "d": "Anforderungskette der ISO 19650: von der Organisation (OIR) und dem Asset (AIR) zum Projekt (PIR) und zu jedem Austausch (EIR, im Deutschen AIA), wo die Informationsbedarfstiefe festgelegt wird.",
  "ej": "Die AIA eines Architektenvertrags fordern die Türen mit ihrem Feuerwiderstand in der Ausführungsplanung.",
  "eq": "Anforderungsplattformen (BIMQ, Plannerly, Cobuilder Require); IDS als Anlage zu den AIA.",
  "err": "Die AIA mit generischen Stufen („LOD 300“) ohne Zweck und ohne Datenübergabepunkt schreiben.",
  "rel": [
   "N01",
   "N07",
   "N16"
  ],
  "al": [
   "OIR",
   "AIR",
   "PIR",
   "EIR",
   "AIA",
   "Informationsanforderungen",
   "Informationsanforderung",
   "Auftraggeber-Informationsanforderungen",
   "Austauschanforderungen",
   "requisitos de información",
   "requisitos de intercambio"
  ]
 },
 {
  "id": "N16",
  "slug": "plan-de-entregas",
  "t": "Lieferplan (MIDP / TIDP)",
  "en": "Plan de entregas (MIDP / TIDP)",
  "b": "II",
  "d": "Pläne der ISO 19650, die festlegen, welcher Informationscontainer von welchem Team, von wem und wann geliefert wird. Sie setzen die Datenübergabepunkte und die erforderliche Tiefe praktisch um.",
  "ej": "TIDP des Tragwerksteams: Tragwerksmodell in LOD 350 für den Datenübergabepunkt Ausführungsplanung.",
  "eq": "Tabellen oder Planungsmodule der CDE.",
  "err": "Lieferungen planen, ohne sie mit den Anforderungen jedes Datenübergabepunkts zu verknüpfen.",
  "rel": [
   "N06",
   "N07",
   "N15"
  ],
  "al": [
   "MIDP",
   "TIDP",
   "Lieferplan",
   "Lieferpläne",
   "Informationslieferplan",
   "plan de entregas"
  ]
 },
 {
  "id": "N17",
  "slug": "bimforum-lod-specification",
  "t": "BIMForum LOD Specification",
  "en": "BIMForum LOD Specification",
  "b": "II",
  "d": "Spezifikation (seit 2013, fast jährlich), die festlegt, was jeder LOD für jeden Bauteiltyp bedeutet, mit Abbildungen. Sie hat den LOD 350 eingeführt; die Ausgabe 2025 übernimmt die Aspekte der ISO 7817-1. Es gibt offizielle spanische Fassungen von 2024 und 2025.",
  "ej": "Ausgabe 2025 auf Spanisch, übersetzt mit BIMForum Ecuador (Februar 2026).",
  "eq": "Referenz für Bauteilmatrizen in jeder Software.",
  "err": "Glauben, sie lege fest, welcher LOD in welcher Phase gilt: „diese Festlegung bleibt jedem Projektteam überlassen“.",
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
  "d": "Vertragsdokumente des American Institute of Architects: E202-2008 führte die Definitionen des Level of Development ein; 2013 wurden sie in E203, G201 und G202 überarbeitet.",
  "ej": "—",
  "eq": "—",
  "err": "Den Anhang E202 von 2008 so verwenden, als sei er die gültige Fassung.",
  "rel": [
   "N09",
   "N17"
  ],
  "al": [
   "AIA E202",
   "E202",
   "G202",
   "E203"
  ]
 },
 {
  "id": "N19",
  "slug": "lod-y-loi-britanicos",
  "t": "Britische LOD und LOI (PAS 1192 / NBS BIM Toolkit)",
  "en": "LOD y LOI británicos (PAS 1192 / NBS BIM Toolkit)",
  "b": "II",
  "d": "Britische Skalen für den grafischen (LOD) und nicht grafischen (LOI) Grad je Projektstufe. NBS betrachtet sie als ersetzt durch ISO 19650, EN 17412-1 und die Informationsbedarfstiefe.",
  "ej": "—",
  "eq": "—",
  "err": "Die britische Skala (1–7) mit der US-amerikanischen (100–500) vermischen.",
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
  "t": "Datenvorlagen (ISO 23386 / ISO 23387)",
  "en": "Plantillas de datos (ISO 23386 / ISO 23387)",
  "b": "II",
  "d": "ISO 23386 legt fest, wie Merkmale beschrieben und vernetzte Merkmalverzeichnisse gepflegt werden; ISO 23387 definiert Datenvorlagen, die die Merkmale jedes Objekttyps bündeln.",
  "ej": "Datenvorlage für eine Brandschutztür mit ihrer Feuerwiderstandsklasse und den zulässigen Werten.",
  "eq": "bSDD; Anforderungsmanager; Import von Merkmalen in Allplan und Archicad.",
  "err": "In jedem Projekt andere Merkmalnamen erfinden.",
  "rel": [
   "N03",
   "N21"
  ],
  "al": [
   "ISO 23386",
   "ISO 23387",
   "DIN EN ISO 23387",
   "Datenvorlage",
   "Datenvorlagen",
   "Merkmal",
   "Merkmale",
   "Merkmalen",
   "plantilla de datos",
   "plantillas de datos"
  ]
 },
 {
  "id": "N21",
  "slug": "bsdd-n21",
  "t": "bSDD (buildingSMART Data Dictionary)",
  "en": "bSDD (buildingSMART Data Dictionary)",
  "b": "II",
  "d": "Onlinedienst von buildingSMART, der Klassen- und Merkmalverzeichnisse nach ISO 23386 veröffentlicht, verknüpft mit IFC-Entitäten und mit zulässigen Werten.",
  "ej": "Merkmal Feuerwiderstand mit den Werten REI30 bis REI120 in einem nationalen Verzeichnis.",
  "eq": "Allplan 2026 integriert mehr als 300 Verzeichnisse; Bonsai 0.8.5 unterstützt die API v5; IDS-Editoren fragen das bSDD ab.",
  "err": "Ein eigenes Pset für etwas anlegen, das bereits in einem Verzeichnis oder in IFC existiert.",
  "rel": [
   "N20",
   "N26",
   "N27"
  ],
  "al": [
   "bSDD",
   "Datenverzeichnis",
   "Merkmalverzeichnis",
   "buildingSMART Data Dictionary",
   "diccionario de datos"
  ]
 },
 {
  "id": "N22",
  "slug": "matriz-de-elementos",
  "t": "Bauteilmatrix",
  "en": "Matriz de elementos",
  "b": "II",
  "d": "Tabelle der Bauteile je Datenübergabepunkt mit der geforderten Stufe in jeder Zelle und dem Verantwortlichen. In den USA Model Element Table; in anderen Ländern Progressionsmatrix oder LOIN-Matrix.",
  "ej": "Tragwerk 350 in der Ausführungsplanung, Türen 300, Möblierung 100.",
  "eq": "Tabelle des BAP oder Anforderungsmanager wie Plannerly und BIMQ.",
  "err": "Eine einzige Spalte „LOD des Modells“.",
  "rel": [
   "N09",
   "N16",
   "N25"
  ],
  "al": [
   "Bauteilmatrix",
   "Bauteilmatrizen",
   "LOIN-Matrix",
   "LOD-Matrix",
   "Model Element Table",
   "matriz de elementos",
   "matriz LOIN",
   "matriz LOD"
  ]
 },
 {
  "id": "N23",
  "slug": "nivel-de-detalle-de-vista",
  "t": "Detailgenauigkeit der Ansicht",
  "en": "Nivel de detalle de vista",
  "b": "III",
  "d": "Grafische Einstellung der Programme (grob/mittel/fein, schematisch/vereinfacht/vollständig), die bestimmt, welche Geometrie in welchem Maßstab dargestellt wird. Sie ist keine vertragliche Stufe.",
  "ej": "—",
  "eq": "Revit: Detailgenauigkeit (Grob, Mittel, Fein) je Ansicht; Archicad: Modellansicht-Optionen; IFC-Exporter von Revit: „Level of Detail“ = Tesselierung.",
  "err": "Glauben, eine Ansicht in „Fein“ entspreche LOD 400.",
  "rel": [
   "N02",
   "N10"
  ],
  "al": [
   "Detailgenauigkeit",
   "Detail Level",
   "nivel de detalle de vista"
  ]
 },
 {
  "id": "N24",
  "slug": "parametros-y-propiedades-del-programa",
  "t": "Parameter und Eigenschaften der Software",
  "en": "Parámetros y propiedades del programa",
  "b": "III",
  "d": "Native Container der alphanumerischen Informationen in jedem Autorenprogramm. Sie sollten einmal definiert werden, und zwar mit dem Namen, den die Anforderung vorgibt.",
  "ej": "—",
  "eq": "Revit: gemeinsam genutzte Parameter (TXT); Archicad: Eigenschaften-Manager und Ausdrücke; Allplan: Attribute; Tekla: Property Sets von Trimble Connect.",
  "err": "Die Information in einen Parameter eintragen, den der IFC-Exporter in kein Pset überträgt.",
  "rel": [
   "N03",
   "N26"
  ],
  "al": [
   "gemeinsam genutzte Parameter",
   "gemeinsam genutzten Parameter",
   "Parameter",
   "Parametern",
   "Attribute",
   "Attributen",
   "parámetros compartidos",
   "parámetros",
   "atributos"
  ]
 },
 {
  "id": "N25",
  "slug": "gestor-de-requisitos-de-informacion",
  "t": "Anforderungsmanager",
  "en": "Gestor de requisitos de información",
  "b": "IV",
  "d": "Plattform, die die Anforderungen je Objekt, Datenübergabepunkt, Zweck und Akteur speichert und sie als Vorlagen, Regeln oder IDS exportiert.",
  "ej": "—",
  "eq": "dRofus, Plannerly, BIMQ, Cobuilder Require (exportiert eine IDS je Datenübergabepunkt und Zweck).",
  "err": "Hunderte von Anforderungen in einer Tabelle ohne Versionskontrolle verwalten.",
  "rel": [
   "N15",
   "N22",
   "N27"
  ],
  "al": [
   "Anforderungsmanager",
   "Anforderungsmanagern",
   "Anforderungsmanagements",
   "gestor de requisitos",
   "gestores de requisitos"
  ]
 },
 {
  "id": "N26",
  "slug": "conjunto-de-propiedades-ifc",
  "t": "IFC-Property-Set (Pset)",
  "en": "Conjunto de propiedades IFC (Pset)",
  "b": "V",
  "d": "Gruppe von Merkmalen eines IFC-Objekts. Die Standard-Pset_ von buildingSMART (z. B. Pset_DoorCommon) haben feste Namen und Datentypen; die Mengensets (Qto_) speichern Maße.",
  "ej": "Pset_DoorCommon.FireRating (IfcLabel), IsExternal (IfcBoolean).",
  "eq": "Revit: Registerkarte Property Sets des Exporters und TXT benutzerdefinierter Sets; Archicad: IFC-Übersetzer.",
  "err": "Eigene Sets anlegen, die mit „Pset_“ beginnen, oder ein Standardmerkmal duplizieren.",
  "rel": [
   "N03",
   "N24",
   "N27"
  ],
  "al": [
   "Pset",
   "Psets",
   "Property Set",
   "Property Sets",
   "Property-Set",
   "Property-Sets",
   "Pset_DoorCommon",
   "Qto",
   "property set"
  ]
 },
 {
  "id": "N27",
  "slug": "ids-n27",
  "t": "IDS (Information Delivery Specification)",
  "en": "IDS (Information Delivery Specification)",
  "b": "V",
  "d": "Standard von buildingSMART (1.0, Juni 2024): XML-Datei mit prüfbaren Anforderungen an ein IFC, gegliedert in Anwendbarkeit und Anforderungen, mit sechs Facetten. Ihr Kopf erlaubt purpose und milestone; Geometrie kann sie nicht fordern.",
  "ej": "IDS für Türen: FireRating mit dem Muster „EI2? \\d+(-C\\d)?“ und IsExternal als Boolean.",
  "eq": "IDS importieren: Archicad 28+, Allplan 2026, Vectorworks 2024+, BricsCAD V25; prüfen: IfcTester, Solibri (Regel 244), BIMcollab Zoom; Revit mit Add-ins.",
  "err": "Glauben, die IDS decke die ganze Informationsbedarfstiefe ab: Geometrie und Dokumente bleiben außen vor.",
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
  "en": "COBie",
  "b": "V",
  "d": "Datenteilmenge für Betrieb und Instandhaltung (Anlagen, Räume, Typen, Komponenten, Garantien). COBie v3 (2023) ist Teil von NBIMS-US V4 und ergänzt JSON.",
  "ej": "—",
  "eq": "COBie-Exporter der Autorenprogramme; Tabellen und IFC.",
  "err": "In den Planungsphasen ein vollständiges COBie fordern.",
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
  "en": "IDM (ISO 29481)",
  "b": "V",
  "d": "Methode zur Beschreibung der Prozesse und des Informationsaustauschs eines Anwendungsfalls. ISO 29481-3:2022 liefert ein maschinenlesbares Datenschema.",
  "ej": "—",
  "eq": "buildingSMART Use Case Management; IDS als prüfbarer technischer Teil.",
  "err": "Anforderungen ohne den Prozess schreiben, der sie begründet.",
  "rel": [
   "N05",
   "N27"
  ],
  "al": [
   "IDM",
   "ISO 29481",
   "Information Delivery Manual"
  ]
 },
 {
  "id": "N30",
  "slug": "comprobacion-de-requisitos",
  "t": "Anforderungsprüfung",
  "en": "Comprobación de requisitos",
  "b": "VI",
  "d": "Prüfung, ob eine Lieferung ihre Informationsbedarfstiefe erfüllt: ob die Merkmale vorhanden sind, einen Wert haben und dieser gültig ist; die Geometrie wird mit Regeln und Stichproben geprüft.",
  "ej": "IfcTester 0.9.0: 1 von 3 Türen erfüllt die Test-IDS.",
  "eq": "IfcTester, Solibri, BIMcollab Zoom, usBIM.IDS, xbim; der Validation Service von buildingSMART prüft keine IDS.",
  "err": "Erst beim Empfang prüfen, wenn Korrekturen teurer sind.",
  "rel": [
   "N27",
   "N26"
  ],
  "al": [
   "Anforderungsprüfung",
   "Anforderungsprüfungen",
   "IfcTester",
   "IDS-Prüfung",
   "IDS-Validierung",
   "comprobación de requisitos",
   "validación IDS"
  ]
 },
 {
  "id": "N31",
  "slug": "guias-nacionales-de-niveles-de-informacion",
  "t": "Nationale Leitfäden zu Informationsgraden",
  "en": "Guías nacionales de niveles de información",
  "b": "II",
  "d": "Dokumente jedes Landes, die konkretisieren, wie Informationsgrade gefordert werden: Abkürzungen, Skalen, Matrixvorlagen und Beispiele. Manche folgen der Skala LOD 100–500, andere der Informationsbedarfstiefe.",
  "ej": "Spanien: UNE-EN ISO 7817-1:2025 und Leitfäden der CBIM; Chile: NDI des MINVU und Planbim; Peru: Matrix der Informationsbedarfstiefe des Plan BIM; Deutschland: Arbeitshilfe LOIN-Konzept.",
  "eq": "—",
  "err": "Die Matrix eines anderen Landes übernehmen, ohne Zwecke und Datenübergabepunkte anzupassen.",
  "rel": [
   "N01",
   "N09",
   "N13"
  ],
  "al": [
   "NDI",
   "Plan BIM",
   "Planbim",
   "LOIN-Konzept"
  ]
 },
 {
  "id": "N32",
  "slug": "iso-7817-2-e-iso-7817-3",
  "t": "ISO 7817-2 und ISO 7817-3",
  "en": "ISO 7817-2 e ISO 7817-3",
  "b": "II",
  "d": "Teile in Vorbereitung: Teil 2 (ISO/DTS) ist ein Anwendungsleitfaden mit Beispielen und Vorlagen; Teil 3 (ISO/DIS) definiert ein UML-Datenmodell und ein XSD-Schema für den Austausch der Informationsbedarfstiefe.",
  "ej": "—",
  "eq": "Bibliotheken, die Entwürfe von Teil 3 lesen (z. B. openbim-loin).",
  "err": "Den Entwurf von Teil 3 so implementieren, als sei er endgültig.",
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
  "id": "E01",
  "slug": "entorno-comun-de-datos",
  "t": "Entorno común de datos (CDE)",
  "en": "Common data environment (CDE)",
  "b": "I",
  "d": "Fuente acordada de información de un proyecto o activo para reunir, gestionar y difundir cada contenedor de información mediante un proceso controlado (ISO 19650-1, 3.3.15). Tiene dos piezas: el flujo de trabajo (proceso) y la solución tecnológica.",
  "ej": "El Plan BIM (Orden PCM/818/2023) lo define como «solución tecnológica que integra un flujo de trabajo para gestionar, entregar y revisar la información» y lo exige según UNE-EN ISO 19650 desde el nivel avanzado (1-10-2027 para contratos ≥ 5,382 M€).",
  "eq": "Autodesk Docs (Forma Data Management), Trimble Connect, ProjectWise, Aconex, Asite, Dalux, Catenda Hub, Viewpoint For Projects, Thinkproject, usBIM, BIMcollab.",
  "err": "Llamar «CDE» a una plataforma concreta: la norma pide primero el flujo y después la herramienta, que puede ser más de una.",
  "rel": [
   "E02",
   "E03",
   "E05",
   "E06",
   "P24",
   "P25"
  ],
  "al": [
   "CDE",
   "entorno común de datos",
   "entornos comunes de datos",
   "common data environment"
  ]
 },
 {
  "id": "E02",
  "slug": "fuente-acordada-de-informacion",
  "t": "Fuente acordada de información",
  "en": "Agreed source of information",
  "b": "I",
  "d": "Idea central del CDE: todos los participantes acuerdan un único lugar y un único proceso para la información del proyecto, de modo que lo que está fuera no cuenta como entregado.",
  "ej": "Un plano enviado por correo sin su contenedor publicado no es información de obra válida.",
  "eq": "Independiente del software.",
  "err": "Mantener en paralelo correo, carpetas de red y plataforma: nadie sabe cuál es la versión vigente.",
  "rel": [
   "E01",
   "E12"
  ],
  "al": [
   "fuente acordada",
   "fuente única de información",
   "single source of truth"
  ]
 },
 {
  "id": "E04",
  "slug": "metadatos-del-contenedor",
  "t": "Metadatos del contenedor",
  "en": "Information container metadata",
  "b": "I",
  "d": "Datos que acompañan a cada contenedor y lo describen: como mínimo código de estado (idoneidad), código de revisión y código de clasificación (ISO 19650-2, 5.1.7), más los que fije el protocolo del proyecto.",
  "ej": "En España no hay anejo nacional: el BEP o el pliego fijan qué metadatos son obligatorios.",
  "eq": "Autodesk Docs: atributos Status, Revision y Classification de la convención de nombres; Catenda y BIMcollab: estado como metadato; usBIM: estados personalizables.",
  "err": "Guardar el estado solo en el nombre de la carpeta o meterlo en el nombre del archivo: se pierde al descargar o rompe el apilado de revisiones.",
  "rel": [
   "E01",
   "E07",
   "P26",
   "P27"
  ],
  "al": [
   "metadatos",
   "metadato",
   "metadata"
  ]
 },
 {
  "id": "E06",
  "slug": "aprobacion-autorizacion-y-aceptacion",
  "t": "Aprobación, autorización y aceptación",
  "en": "Approve, authorize and accept",
  "b": "I",
  "d": "Decisiones que hacen pasar un contenedor de estado: el equipo de trabajo comprueba, revisa y aprueba para compartir (decisión A de ISO 19650-4); la parte contratada principal revisa y autoriza, y la parte contratante revisa y acepta para publicar (decisión B).",
  "ej": "ISO 19650-2: 5.6.4 (aprobar para compartir), 5.7.1-5.7.2 (autorizar) y 5.7.3-5.7.4 (aceptar).",
  "eq": "Autodesk Docs: flujos de revisión de 1 a 6 pasos; Dalux: flujos disparados por estado; Catenda: permiso «Can publish»; usBIM: gates.",
  "err": "Confundir comprobar (forma del contenedor) con revisar (contenido) o dejar que la plataforma cambie el estado sin una decisión firmada.",
  "rel": [
   "E05",
   "E26",
   "E28",
   "P25"
  ],
  "al": [
   "aprobar para compartir",
   "autorizar para publicar",
   "autorización y aceptación",
   "puerta A",
   "puerta B"
  ]
 },
 {
  "id": "E07",
  "slug": "codigo-de-idoneidad",
  "t": "Código de idoneidad",
  "en": "Suitability code",
  "b": "II",
  "d": "Código que indica para qué puede usarse un contenedor compartido o publicado. ISO 19650 pide un código de estado pero no lo fija; los más usados son los del anejo británico: S0 en curso; S1 coordinación; S2 información; S3 revisión y comentarios; S4 aprobación de etapa; A1…An autorizado y aceptado; B con comentarios; CR registro de lo construido (2018).",
  "ej": "Sin anejo español: muchos proyectos adoptan la tabla británica de 2018 y la escriben en el BEP.",
  "eq": "Autodesk Docs: S0, S1-S4, S6, S7, A, B, CR (tabla 2018); Aconex: estados For Review, For Construction… que no son códigos de idoneidad.",
  "err": "Mezclar la tabla de 2018 (S6, S7, CR) con la de 2021 (S4 autorización, S5 aceptación, A6 en lugar de CR) en el mismo proyecto.",
  "rel": [
   "E04",
   "E19",
   "P26"
  ],
  "al": [
   "código de idoneidad",
   "códigos de idoneidad",
   "idoneidad",
   "suitability"
  ]
 },
 {
  "id": "E10",
  "slug": "parte-contratante-y-partes-contratadas",
  "t": "Parte contratante y partes contratadas",
  "en": "Appointing party and appointed parties",
  "b": "I",
  "d": "Terminología de UNE-EN ISO 19650 según las fuentes en español consultadas: parte contratante (appointing party, quien encarga), parte contratada principal (lead appointed party, responde por el equipo de desarrollo) y parte contratada (appointed party). Otras traducciones usan «parte que designa» y «parte designada».",
  "ej": "En un contrato público, la parte contratante es la administración; la contratada principal, la ingeniería o constructora adjudicataria.",
  "eq": "Independiente del software; en las plataformas se traduce en empresas y roles con permisos.",
  "err": "Pensar que la parte contratada principal es un rol técnico: es una responsabilidad contractual sobre la información de todo su equipo.",
  "rel": [
   "P10",
   "P11",
   "P12",
   "P13",
   "P14"
  ],
  "al": [
   "parte contratante",
   "parte contratada principal",
   "parte contratada",
   "partes contratadas"
  ]
 },
 {
  "id": "E11",
  "slug": "permisos-por-estado",
  "t": "Permisos por estado",
  "en": "Access control by state",
  "b": "I",
  "d": "Reglas de acceso del CDE que dependen del rol y del estado del contenedor: el equipo edita su trabajo en curso, los demás leen lo compartido y lo publicado no lo edita nadie (se crea una revisión nueva).",
  "ej": "En proyectos sensibles, ISO 19650-5 y, en la Administración, el ENS limitan el acceso a quien lo necesita.",
  "eq": "Autodesk Docs: permisos por carpeta; Catenda: «View shared revisions» y «Can publish»; Dalux: áreas compartida y publicada.",
  "err": "Dar permiso de editor a todos al principio del proyecto.",
  "rel": [
   "E05",
   "E20"
  ],
  "al": [
   "permisos",
   "control de acceso",
   "necesidad de conocer"
  ]
 },
 {
  "id": "E12",
  "slug": "archivado-y-traza-de-auditoria",
  "t": "Archivado y traza de auditoría",
  "en": "Archive and audit trail",
  "b": "I",
  "d": "Cuarto estado del CDE: el diario de transacciones de información que guarda las revisiones superadas y cada cambio de estado (quién, qué y cuándo). No es un estado final de lo aprobado. Al cierre se archiva el modelo de información del proyecto (ISO 19650-2, 5.8.1).",
  "ej": "Algunos pliegos españoles describen el archivado como «datos validados y verificados», lo que lo confunde con publicado.",
  "eq": "Historial de versiones y registro de actividad de cada plataforma.",
  "err": "Borrar revisiones antiguas para «limpiar» el CDE.",
  "rel": [
   "E05",
   "E02"
  ],
  "al": [
   "archivado",
   "traza de auditoría",
   "registro de auditoría",
   "audit trail",
   "golden thread",
   "hilo dorado"
  ]
 },
 {
  "id": "E19",
  "slug": "anejo-nacional",
  "t": "Anejo nacional",
  "en": "National annex",
  "b": "II",
  "d": "Documento de cada país que concreta ISO 19650-2: códigos de idoneidad y de revisión, campos de la nomenclatura y clasificación. El británico (2018, revisado en 2021) es el más copiado; Irlanda usa códigos de propósito P1-P10 y de aceptación S/A/B/C/D.",
  "ej": "España no tiene anejo nacional: los códigos los fija cada BEP o pliego.",
  "eq": "Las plantillas ISO 19650 de las plataformas suelen reproducir el anejo británico de 2018.",
  "err": "Presentar los códigos S0-S7 como «de ISO 19650» cuando son del anejo británico.",
  "rel": [
   "E07",
   "P36"
  ],
  "al": [
   "anejo nacional",
   "anejos nacionales",
   "national annex"
  ]
 },
 {
  "id": "E20",
  "slug": "enfoque-de-seguridad",
  "t": "Enfoque de seguridad (ISO 19650-5)",
  "en": "Security-minded approach",
  "b": "II",
  "d": "Parte 5 de la serie (2020, confirmada en 2025): obliga a evaluar la sensibilidad del activo y de su información y, si lo es, a definir estrategia y plan de seguridad, que se traducen en permisos, registro y alojamiento del CDE.",
  "ej": "El CDE de la Administración debe cumplir además el Esquema Nacional de Seguridad (ENS) y el de Interoperabilidad (ENI), según el Plan BIM.",
  "eq": "Kitemark de BSI de Asite y ACC citan ISO 19650-5.",
  "err": "Aplicarla solo a infraestructuras críticas: la evaluación de sensibilidad es para todo proyecto.",
  "rel": [
   "E11"
  ],
  "al": [
   "ISO 19650-5",
   "enfoque de seguridad",
   "Esquema Nacional de Seguridad"
  ]
 },
 {
  "id": "E21",
  "slug": "din-spec-91391",
  "t": "DIN SPEC 91391",
  "en": "DIN SPEC 91391",
  "b": "V",
  "d": "Especificación alemana (abril de 2019). Parte 1: módulos y funciones obligatorias u opcionales de un CDE a partir de la cláusula 12 de ISO 19650-1. Parte 2: interfaz «openCDE» para intercambiar contenedores y metadatos entre plataformas.",
  "ej": "Sirve como lista de requisitos al licitar una plataforma de CDE.",
  "eq": "Oracle Aconex obtuvo el Kitemark de BSI frente a ISO 19650 y DIN SPEC 91391 (2022).",
  "err": "Creer que ISO 19650 recomienda OpenCDE: el antecedente normativo es DIN SPEC 91391-2.",
  "rel": [
   "E22",
   "E24"
  ],
  "al": [
   "DIN SPEC 91391",
   "DIN SPEC 91391-1",
   "DIN SPEC 91391-2"
  ]
 },
 {
  "id": "E22",
  "slug": "opencde-documents-api",
  "t": "OpenCDE Documents API",
  "en": "OpenCDE Documents API",
  "b": "V",
  "d": "API de buildingSMART (estándar final el 21-12-2023) para subir y bajar contenedores de un CDE desde un programa cliente. Funciona con un «apretón de manos»: el usuario elige y pone metadatos en la web del CDE y el cliente transfiere el archivo. Se apoya en la Foundation API (descubrimiento y OAuth2).",
  "ej": "Sin implantaciones españolas documentadas en las fuentes consultadas.",
  "eq": "Catenda Hub (autodeclarado), Solibri 25.12 (conexión a CDE privados), buildagil.",
  "err": "Tomar los listados de implementaciones de buildingSMART como certificación: son autodeclarados.",
  "rel": [
   "D15",
   "E21"
  ],
  "al": [
   "Documents API",
   "OpenCDE Documents API"
  ]
 },
 {
  "id": "E24",
  "slug": "icdd",
  "t": "ICDD (ISO 21597)",
  "en": "Information Container for linked Document Delivery",
  "b": "V",
  "d": "Formato de paquete que entrega varios documentos (modelos, planos, tablas) junto con los enlaces entre ellos. ISO 21597-1:2020 define el contenedor e ISO 21597-2:2020, los tipos de enlace con semántica de datos enlazados.",
  "ej": "UNE-EN ISO 21597-2 ratificada en enero de 2021.",
  "eq": "Poco implantado en plataformas comerciales.",
  "err": "Confundir el contenedor ICDD (un paquete) con el contenedor de información de ISO 19650 (cualquier unidad con nombre).",
  "rel": [
   "E03",
   "E21"
  ],
  "al": [
   "ICDD",
   "ISO 21597"
  ]
 },
 {
  "id": "E26",
  "slug": "flujo-de-revision",
  "t": "Flujo de revisión",
  "en": "Review workflow",
  "b": "IV",
  "d": "Función de una plataforma que automatiza una puerta del CDE: asigna revisores en serie o en paralelo, recoge su decisión y mueve o reetiqueta el contenedor.",
  "ej": "El Plan BIM no fija cómo configurarlo: se define en el BEP.",
  "eq": "Autodesk Docs: plantillas de 1 a 6 pasos que copian lo aprobado a una carpeta; Dalux: disparado por estado; Trimble Connect: las Releases no admiten aprobación; SharePoint: borrador, pendiente, aprobado.",
  "err": "Configurar la herramienta antes de dibujar el flujo en papel.",
  "rel": [
   "E06",
   "E11"
  ],
  "al": [
   "flujo de revisión",
   "flujos de revisión",
   "flujo de aprobación",
   "flujos de aprobación"
  ]
 },
 {
  "id": "E27",
  "slug": "trabajo-compartido-en-la-nube",
  "t": "Trabajo compartido en la nube",
  "en": "Cloud worksharing",
  "b": "III",
  "d": "Forma de trabajar varios usuarios sobre un mismo modelo alojado en la nube. A efectos de ISO 19650 es trabajo en curso del equipo: sincronizar no comparte; hace falta un paso explícito (publicar, exportar, cambiar de estado).",
  "ej": "Igual en cualquier país.",
  "eq": "Revit Cloud Worksharing (sincronizar frente a publicar), Archicad Teamwork en BIMcloud, Tekla Model Sharing, Vectorworks Project Sharing.",
  "err": "Creer que lo que está «en la nube» ya está compartido con los demás equipos.",
  "rel": [
   "E05",
   "E08"
  ],
  "al": [
   "modelo central",
   "Cloud Worksharing",
   "Teamwork",
   "Tekla Model Sharing",
   "Project Sharing"
  ]
 },
 {
  "id": "E28",
  "slug": "criterios-de-revision",
  "t": "Criterios de revisión (ISO 19650-4)",
  "en": "Information exchange review criteria",
  "b": "VI",
  "d": "Seis criterios para decidir en cada puerta: CDE (nombre y metadatos), conformidad, continuidad, comunicación, consistencia y completitud. ISO 19650-4:2022 los asocia a las decisiones A (compartir) y B (publicar).",
  "ej": "Aplicables tal cual; no hay adaptación española.",
  "eq": "Comprobación de nombres de las plataformas (Autodesk Docs, Dalux, Atvero), IDS con IfcTester o Solibri.",
  "err": "Revisar solo el contenido y olvidar el primero: el propio contenedor.",
  "rel": [
   "E06",
   "E29"
  ],
  "al": [
   "ISO 19650-4",
   "criterios de revisión",
   "completitud",
   "consistencia"
  ]
 },
 {
  "id": "E31",
  "slug": "bsi-kitemark-para-cde",
  "t": "BSI Kitemark para CDE",
  "en": "BSI Kitemark",
  "b": "IV",
  "d": "Certificación de BSI (desde abril de 2021) que evalúa que una plataforma ofrezca funciones conformes con ISO 19650, su enfoque de seguridad y su soporte. Certifica la herramienta, no el proceso de quien la usa.",
  "ej": "No hay sello español equivalente; BSI emite además certificados de verificación frente a ISO 19650-2 para organizaciones.",
  "eq": "Asite (KM 740457, caduca 23-03-2027), Autodesk Construction Cloud (2025), Oracle Aconex (2022). Thinkproject tiene una atestación de TÜV SÜD.",
  "err": "Equiparar «compatible con ISO 19650» en un folleto con una certificación auditada.",
  "rel": [
   "E01"
  ],
  "al": [
   "Kitemark",
   "BSI Kitemark"
  ]
 },
 {
  "id": "E32",
  "slug": "version-de-plataforma",
  "t": "Versión de plataforma",
  "en": "Platform version",
  "b": "III",
  "d": "Contador automático que crea la plataforma en cada subida o guardado. No equivale a la revisión ISO, que cambia por una decisión al cruzar una puerta.",
  "ej": "Igual en cualquier país.",
  "eq": "Autodesk Docs con Civil 3D: una versión nueva en cada guardado; Revit: una versión por publicación.",
  "err": "Poner en la carátula del plano la versión automática en lugar de la revisión acordada.",
  "rel": [
   "E08",
   "P27"
  ],
  "al": [
   "versión de plataforma",
   "versiones de plataforma"
  ]
 },
 {
  "id": "D01",
  "slug": "interferencia-colision",
  "t": "Kollision",
  "en": "Interferencia / colisión",
  "b": "I",
  "d": "Unverträglichkeit zwischen Elementen eines oder mehrerer Modelle (räumlich, bezüglich Abstand oder zeitlich), die Bau, Betrieb oder Instandhaltung wie geplant verhindern würde; sie wird ermittelt, indem Elementgruppen nach Regeln und Toleranzen miteinander verglichen werden.",
  "ej": "Ein Lüftungskanal durchdringt einen Stahlbetonträger.",
  "eq": "Navisworks: Clash; Solibri: Issue/Clash (Regel für Komponentenüberschneidung); Revit: Interference Check; ACC Model Coordination: Clash; IfcClash: clash; BCF: Topic (Typ Clash)",
  "err": "Ein geometrisches Ergebnis mit einem echten Problem verwechseln: Viele Ergebnisse sind irrelevant oder doppelt.",
  "rel": [
   "D02",
   "D03",
   "D04",
   "D08",
   "D10"
  ],
  "al": [
   "Kollision",
   "Kollisionen",
   "Clash",
   "Clashes",
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
  "t": "Harte Kollision",
  "en": "Interferencia dura",
  "b": "I",
  "d": "Zwei Elemente belegen denselben physischen Raum: Ihre Geometrien durchdringen sich über die zulässige Durchdringungstoleranz hinaus.",
  "ej": "Eine Abwasserleitung durchdringt eine Stütze.",
  "eq": "Navisworks: Hard / Hard (Conservative); Solibri: Intersection; ACC: Hard clash; IfcClash: intersection/collision",
  "err": "Geplante Durchführungen (Futterrohre) oder tangentiale Berührungen ohne Toleranz als harte Kollisionen melden.",
  "rel": [
   "D05",
   "D12"
  ],
  "al": [
   "harte Kollision",
   "harten Kollision",
   "harte Kollisionen",
   "harten Kollisionen",
   "hard clash",
   "interferencia dura",
   "choque duro"
  ]
 },
 {
  "id": "D03",
  "slug": "interferencia-blanda-o-de-holgura",
  "t": "Weiche Kollision (Abstandskollision)",
  "en": "Interferencia blanda o de holgura",
  "b": "I",
  "d": "Ein Element dringt in den Mindestabstand oder den freizuhaltenden Raum um ein anderes ein (Dämmung, Montage, Zugang, Sicherheit), ohne es zu berühren.",
  "ej": "Kabeltrasse 5 cm neben einem Lüftungskanal, obwohl 30 cm Abstand gefordert sind.",
  "eq": "Navisworks: Clearance; Solibri: Clearance / Abstandsregel; Revizto: Clearance (mit H/V-Versatz); IfcClash: clearance",
  "err": "Einen einheitlichen Abstand auf das ganze Modell anwenden; der Abstand hängt vom System ab und sollte als Volumen modelliert werden, wenn er der Instandhaltung dient.",
  "rel": [
   "D05",
   "D20"
  ],
  "al": [
   "weiche Kollision",
   "weichen Kollision",
   "weiche Kollisionen",
   "weichen Kollisionen",
   "Abstandskollision",
   "Abstandskollisionen",
   "clearance",
   "holgura",
   "interferencia de holgura"
  ]
 },
 {
  "id": "D04",
  "slug": "interferencia-de-flujo-de-trabajo-4d",
  "t": "Ablaufkollision / zeitliche Kollision (4D)",
  "en": "Interferencia de flujo de trabajo / 4D",
  "b": "I",
  "d": "Konflikt, der bei der Verknüpfung des Modells mit dem Terminplan entsteht: Zwei Vorgänge, Geräte oder Arbeitsbereiche treffen am selben Ort zur selben Zeit zusammen, oder die Reihenfolge verhindert eine Montage.",
  "ej": "Der Schwenkradius des Krans ragt in Kalenderwoche 32 in den Montagebereich der Fassade.",
  "eq": "Navisworks: Clash Detective mit TimeLiner; Synchro: 4D-Konflikte; ACC/Revizto: eingeschränkt",
  "err": "Sie mit denselben Regeln behandeln wie eine statische räumliche Kollision.",
  "rel": [
   "D01",
   "D24"
  ],
  "al": [
   "Ablaufkollision",
   "Ablaufkollisionen",
   "zeitliche Kollision",
   "zeitliche Kollisionen",
   "4D",
   "secuencia",
   "interferencia de flujo"
  ]
 },
 {
  "id": "D05",
  "slug": "tolerancia-de-deteccion",
  "t": "Prüftoleranz",
  "en": "Tolerancia de detección",
  "b": "I",
  "d": "Zahlenwert, der festlegt, was gemeldet wird: bei harten Kollisionen die Mindestdurchdringung, ab der gemeldet wird; bei Abstandskollisionen der Höchstabstand, unterhalb dessen gemeldet wird. Wird meist je Phase und Fachdisziplin angepasst.",
  "ej": "Hart mit 10 mm, um Modellierungsberührungen zu ignorieren; Abstand von 50 mm zwischen Lüftungskanälen.",
  "eq": "Navisworks: Tolerance; Solibri: Toleranz in Regeln; Revizto: Tolerance; IfcClash: tolerance/clearance",
  "err": "Die Prüftoleranz mit der Ausführungstoleranz auf der Baustelle verwechseln oder sie so hoch ansetzen, dass echte Kollisionen verborgen bleiben.",
  "rel": [
   "D02",
   "D03",
   "D06"
  ],
  "al": [
   "Toleranz",
   "Toleranzen",
   "Prüftoleranz",
   "Prüftoleranzen",
   "tolerancia"
  ]
 },
 {
  "id": "D06",
  "slug": "matriz-de-deteccion",
  "t": "Kollisionsmatrix (Prüfplan)",
  "en": "Matriz de detección (plan de pruebas)",
  "b": "I",
  "d": "Im BAP vereinbarte Tabelle, die festlegt, welche Paare von Fachdisziplinen oder Systemen geprüft werden, mit welcher Prüfart und Toleranz, in welcher Phase, mit welcher Priorität und wer verantwortlich ist.",
  "ej": "ARC vs. TWP hart 0 mm; Abwasser vs. Lüftung Abstand 25 mm; ELT vs. alle, Ausführungsphase.",
  "eq": "Navisworks: Liste der Tests; Solibri: Ruleset; ACC: Clash test (automatisch); BIMcollab/Revizto: Clash sets",
  "err": "„Alles gegen alles“ ohne Matrix prüfen und Tausende nutzloser Ergebnisse erhalten.",
  "rel": [
   "D05",
   "D13",
   "D16",
   "D07"
  ],
  "al": [
   "Kollisionsmatrix",
   "Kollisionsmatrizen",
   "Prüfmatrix",
   "Prüfplan",
   "Matrix",
   "clash matrix",
   "matriz de detección",
   "matriz de pruebas",
   "matriz"
  ]
 },
 {
  "id": "D07",
  "slug": "agrupacion-de-interferencias",
  "t": "Gruppierung von Kollisionen",
  "en": "Agrupación de interferencias",
  "b": "I",
  "d": "Ergebnisse mit gemeinsamer Ursache oder Lösung (dasselbe Element, System, Geschoss, dieselbe Zone oder Zuständigkeit) zusammenfassen, um sie als ein einziges Problem zu bearbeiten.",
  "ej": "40 Kollisionen derselben Kabeltrasse mit 40 Deckenträgern werden als ein Problem behandelt.",
  "eq": "Navisworks: Clash groups/Group; Solibri: Gruppierung von Ergebnissen in Issues; BIM Track: Clash grouper; Revizto: Grouping; IfcClash: smart grouping",
  "err": "Nur nach Geschoss oder Raster gruppieren und dabei Probleme verschiedener Verantwortlicher vermischen.",
  "rel": [
   "D08",
   "D10",
   "D12"
  ],
  "al": [
   "Gruppierung",
   "Gruppierungen",
   "gruppieren",
   "gruppiert",
   "agrupación",
   "agrupar"
  ]
 },
 {
  "id": "D08",
  "slug": "falso-positivo-interferencia-irrelevante",
  "t": "Falschmeldung (False Positive)",
  "en": "Falso positivo / interferencia irrelevante",
  "b": "I",
  "d": "Ergebnis, das das Werkzeug als Kollision markiert, das aber kein Handeln erfordert: beabsichtigte Berührung, Element ohne ausreichenden Detaillierungsgrad, auf der Baustelle lösbare Situation oder bereits gelöstes Element.",
  "ej": "Kollision zwischen der Rohrdämmung und ihrer Rohrschelle.",
  "eq": "Navisworks: Approved/Resolved; Solibri: Accepted/Rejected; ACC: Not an issue; BCF: TopicStatus geschlossen",
  "err": "Pauschal ohne Kriterien genehmigen oder umgekehrt alles an die Fachdisziplinen weiterleiten.",
  "rel": [
   "D05",
   "D07",
   "D12"
  ],
  "al": [
   "Falschmeldung",
   "Falschmeldungen",
   "False Positive",
   "False Positives",
   "false positive",
   "falso positivo",
   "falsos positivos"
  ]
 },
 {
  "id": "D09",
  "slug": "coordinacion-espacial-modelo-federado-de-coordinacion",
  "t": "Räumliche Koordination / Koordinationsmodell",
  "en": "Coordinación espacial / modelo federado de coordinación",
  "b": "I",
  "d": "Prozess, die Modelle der einzelnen Fachdisziplinen ohne Zusammenführen und ohne Verlust ihrer Urheberschaft zu einem georeferenzierten Koordinationsmodell zu verbinden, in dem Unverträglichkeiten erkannt und gelöst werden.",
  "ej": "Architektur, Tragwerk und TGA als IFC in einem gemeinsamen Viewer mit gemeinsamem Ursprung zusammengeführt.",
  "eq": "Navisworks: NWF/NWD; Solibri: SMC mit mehreren IFC; ACC: Coordination space; Revizto/BIMcollab Zoom; Trimble Connect",
  "err": "Modelle mit unterschiedlichem Ursprung oder Stand zusammenführen oder an einem „verschmolzenen“ Modell koordinieren, das die Urheberschaft löscht.",
  "rel": [
   "C17",
   "D16",
   "D24"
  ],
  "al": [
   "räumliche Koordination",
   "räumlichen Koordination",
   "3D-Koordination",
   "Koordinationsmodell",
   "Koordinationsmodells",
   "coordinación espacial",
   "coordinación 3D"
  ]
 },
 {
  "id": "D10",
  "slug": "incidencia",
  "t": "Problem (Issue / Topic)",
  "en": "Incidencia (issue / topic)",
  "b": "I",
  "d": "Bearbeitbarer Eintrag zu einem festgestellten Problem mit Titel, Beschreibung, Typ, Status, Priorität, Zuständigkeit, Frist, Kommentaren und zugehörigen Ansichten; in BCF heißt er Topic.",
  "ej": "Topic „Kanal K-12 gegen Träger T-3, 2. OG“, zugewiesen an TGA, Frist Freitag.",
  "eq": "BCF: Topic; Navisworks: Clash result/Issue; Solibri: Issue; ACC: Issue; Revizto: Issue; Trimble Connect: ToDo",
  "err": "Das Problem als bloßen Screenshot ohne Zuständigkeit und Status verwenden.",
  "rel": [
   "D11",
   "D14",
   "D22"
  ],
  "al": [
   "Issue",
   "Issues",
   "Topic",
   "Topics",
   "Aufgabe",
   "Aufgaben",
   "incidencia",
   "incidencias"
  ]
 },
 {
  "id": "D11",
  "slug": "punto-de-vista-y-captura",
  "t": "Ansichtspunkt und Snapshot",
  "en": "Punto de vista y captura",
  "b": "I",
  "d": "Darstellungszustand, der zu einem Problem gehört: Kamera (orthogonal oder perspektivisch), Schnittebenen, ausgewählte, sichtbare oder eingefärbte Komponenten (per IFC-GUID) und ein Referenzbild.",
  "ej": "viewpoint.bcfv mit Kamera, zwei per IfcGuid ausgewählten Komponenten und snapshot.png.",
  "eq": "BCF: .bcfv + Snapshot PNG/JPEG; Navisworks: Viewpoint; Solibri: Slide; ACC/Revizto: Ansicht des Issues",
  "err": "Nur das Bild ohne Komponenten teilen: Der Empfänger kann die Elemente in seiner Software nicht auswählen.",
  "rel": [
   "D10",
   "D14",
   "D17"
  ],
  "al": [
   "Ansichtspunkt",
   "Ansichtspunkte",
   "Viewpoint",
   "Viewpoints",
   "Snapshot",
   "punto de vista",
   "puntos de vista"
  ]
 },
 {
  "id": "D12",
  "slug": "duplicados",
  "t": "Duplikate",
  "en": "Duplicados",
  "b": "I",
  "d": "Wiederholte oder überlagerte Elemente mit identischer (oder nahezu identischer) Geometrie am selben Ort, im selben Modell oder zwischen Modellen; sie verfälschen Mengen und Kollisionsergebnisse.",
  "ej": "Eine Stütze, die im Architektur- und im Tragwerksmodell modelliert ist, oder eine zweimal kopierte Wand.",
  "eq": "Navisworks: Duplicates; Solibri: Regel für doppelte Komponenten; Revit: Warnung „identische Instanzen“",
  "err": "Die Duplikatprüfung nicht vor den Prüfungen zwischen den Fachdisziplinen ausführen und damit die Ergebnisse vervielfachen.",
  "rel": [
   "D08",
   "D25"
  ],
  "al": [
   "Duplikat",
   "Duplikate",
   "Duplikaten",
   "doppelte Elemente",
   "duplicado",
   "duplicados"
  ]
 },
 {
  "id": "D13",
  "slug": "jerarquia-de-resolucion",
  "t": "Lösungshierarchie (wer weicht aus)",
  "en": "Jerarquía de resolución (quién se mueve)",
  "b": "I",
  "d": "Im BAP vereinbarte Rangfolge, die festlegt, welches System bei einer Kollision nach seiner Flexibilität ausweicht: Größere, dauerhafte oder stärker eingeschränkte Elemente (Tragwerk, Freispiegelentwässerung) haben Vorrang.",
  "ej": "Freispiegelentwässerung > Lüftungskanäle > Druckrohrleitungen/Brandschutz > Kabeltrassen und Elektroinstallationsrohre.",
  "eq": "Prioritätenmatrix des BAP; ETS: Schweregrad A/B/C; Ashghal: Priorität A–C und Schweregrad 1–4",
  "err": "Sie ausnahmslos anwenden (z. B. ein kleiner Kanal gegenüber einem Hauptsammler).",
  "rel": [
   "D06",
   "D24",
   "D20"
  ],
  "al": [
   "wer weicht aus",
   "Lösungshierarchie",
   "Vorfahrtsregel",
   "Vorrangregel",
   "quién se mueve",
   "jerarquía de resolución",
   "derecho de paso"
  ]
 },
 {
  "id": "D14",
  "slug": "bcf",
  "t": "BCF (BIM Collaboration Format)",
  "en": "BCF (BIM Collaboration Format)",
  "b": "II",
  "d": "Offener Standard von buildingSMART zum Austausch von Problemen zu Modellen (IFC oder andere), ohne das Modell zu versenden: XML (BCF-XML, Container .bcfzip/.bcf) oder Webdienste (BCF API). Versionen 1.0 (2011), 2.0, 2.1 und 3.0.",
  "ej": "25 Topics aus Solibri als BCF 2.1 exportieren und in Revit mit BCF Manager importieren.",
  "eq": "BCF-XML 2.1/3.0; BCF API 2.1/3.0; Plug-ins für Revit/Archicad/Tekla; BIMcollab; Revizto; Trimble Connect; Catenda; Bonsai",
  "err": "Versionen mischen (3.0 vs. 2.1) oder beim Export Felder verlieren (Priorität, Server-ID).",
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
  "en": "BCF API / OpenCDE",
  "b": "II",
  "d": "REST/JSON-Spezifikation zur Synchronisierung von BCF-Problemen zwischen Anwendungen und Servern; gehört zur OpenCDE-Familie zusammen mit der Foundation API (Erkennung, OAuth 2.0, Benutzer) und der Documents API (Herunter- und Hochladen in die CDE).",
  "ej": "Ein Revit-Plug-in fragt GET /bcf/3.0/projects/{id}/topics ab und aktualisiert den Status, ohne Dateien zu übertragen.",
  "eq": "BCF API 2.1/3.0; OpenCDE Foundation API 1.0/1.1; Documents API 1.0",
  "err": "Annehmen, dass „unterstützt BCF“ auch die API einschließt (viele Werkzeuge lesen/schreiben nur Dateien).",
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
  "t": "ISO 19650 und Koordination",
  "en": "ISO 19650 y coordinación",
  "b": "II",
  "d": "Rahmen für das Informationsmanagement (DIN EN ISO 19650), der die Koordination zuweist: Jedes Aufgabenteam prüft und koordiniert seine Informationen, bevor es sie teilt; der federführende Auftragnehmer legt die Föderationsstrategie, die Containerstruktur und die Verantwortlichkeitsmatrix fest und fasst die TIDP im MIDP zusammen.",
  "ej": "Der BAP legt die Föderationsstrategie je Gebäude und Fachdisziplin fest sowie die Matrix, die die Kollisionsprüfung dem Koordinator des Lieferteams zuweist.",
  "eq": "ISO 19650-1/-2 (2018; Überarbeitung 2026); DIN EN ISO 19650; UK BIM Framework; spanischer Plan BIM (Orden PCM/818/2023)",
  "err": "Annehmen, dass ISO 19650 Positionen (BIM-Manager) oder das Prüfverfahren festlegt: Sie definiert Funktionen und Prozesse.",
  "rel": [
   "C25",
   "C17",
   "C30",
   "D06"
  ],
  "al": [
   "Föderationsstrategie",
   "TIDP",
   "MIDP",
   "estrategia de federación"
  ]
 },
 {
  "id": "D17",
  "slug": "identificador-de-objeto-ifc",
  "t": "IFC-Objektkennung (GlobalId)",
  "en": "Identificador de objeto IFC (GlobalId)",
  "b": "II",
  "d": "Eindeutige 128-Bit-Kennung jedes IFC-Objekts, codiert in 22 Zeichen (Alphabet 0-9A-Za-z_$); BCF verwendet sie (IfcGuid), um Komponenten zu referenzieren, weshalb sie zwischen Exporten stabil bleiben muss.",
  "ej": "2O2Fr$t4X7Zf8NOew3FLOH kennzeichnet dieselbe Tür in allen Versionen der IFC-Datei.",
  "eq": "IFC: GlobalId; BCF: IfcGuid; Revit: Parameter IfcGUID/IFC GUID (abgeleitet von der UniqueId); Archicad: IFC GlobalId; Tekla: GUID",
  "err": "GUIDs beim Export neu erzeugen (Kopieren/Einfügen, Löschen und Neumodellieren) zerstört die Rückverfolgbarkeit der Probleme.",
  "rel": [
   "D11",
   "D14"
  ],
  "al": [
   "GlobalId",
   "IfcGloballyUniqueId",
   "IFC GUID",
   "IFC-GUID"
  ]
 },
 {
  "id": "D18",
  "slug": "conjunto-de-seleccion-conjunto-de-busqueda",
  "t": "Auswahlset / Suchset",
  "en": "Conjunto de selección / conjunto de búsqueda",
  "b": "III",
  "d": "Gespeicherte Gruppe von Elementen des Koordinationsmodells, die als Seite A oder B einer Kollisionsprüfung dient. Das Auswahlset speichert konkrete Elemente (statisch); das Suchset speichert Kriterien (Eigenschaft, Kategorie, System) und wird bei Modelländerungen neu ausgewertet (dynamisch).",
  "ej": "Suchset „TGA – Abwasser“ = Elemente, deren „System Type“ „Sanitary“ enthält; geprüft gegen das Suchset „TWP – Träger“. Beim Laden der neuen Modellversion enthält das Set automatisch die neuen Rohrleitungen.",
  "eq": "Navisworks: Selection Set / Search Set (Fenster Sets, Find Items); BIMcollab Zoom: Smart Views als Source/Target Set; Revizto: Search Sets A/B; Solibri: Komponentenfilter der Regel; Archicad: Gruppe 1 / Gruppe 2 nach Kriterien; IfcClash: Selektoren der Gruppe A/B; MicroStation: Ebenen/Referenzen/Named Groups.",
  "err": "Statische Auswahlsets in wiederholten Prüfungen verwenden: Neue Elemente der nächsten Lieferung bleiben außen vor, und die Prüfung meldet fälschlich „null Kollisionen“. Ebenso: Kriterien auf Basis nicht normierter Namen.",
  "rel": [
   "D06",
   "D19",
   "D08",
   "C17"
  ],
  "al": [
   "Auswahlset",
   "Auswahlsets",
   "Suchset",
   "Suchsets",
   "search set",
   "search sets",
   "selection set",
   "conjunto de selección",
   "conjuntos de búsqueda"
  ]
 },
 {
  "id": "D19",
  "slug": "reglas-de-exclusion-y-conjuntos-de-reglas",
  "t": "Ausschlussregeln und Regelsätze",
  "en": "Reglas de exclusión y conjuntos de reglas",
  "b": "III",
  "d": "Bedingungen, durch die das Programm bestimmte Kollisionen nicht meldet (Ausschlussregeln), und gespeicherte, wiederverwendbare Gruppen von Prüfregeln (Regelsätze). Sie dienen dazu, systematische Falschmeldungen zu beseitigen und die Prüfung zu standardisieren.",
  "ej": "In Navisworks „Items in Same File“ aktivieren, um interne Kollisionen jeder Fachdisziplin nicht zu melden, und die Vorlage „Insulation Thickness“ für gedämmte Rohrleitungen; in Solibri ein Ruleset „Koordination TGA–TWP“ mit General Intersection Rule und Ausnahmen für „Kanal durchdringt Wand“.",
  "eq": "Navisworks: Registerkarte Rules (6 Standardregeln + Vorlagen); Solibri: Ruleset / Intersection Exceptions; Revizto: Ignore rules; Bentley: Suppression rules; Trimble Connect: „Ignore clashes within the same file/type“; Archicad: Teilnahme an der Kollisionsprüfung je Baustoff; BIMcollab Zoom: Regelsätze Local/Shared.",
  "err": "Zu weit gefasste Regeln (z. B. „Same File“ bei einem in einer einzigen NWD zusammengeführten Modell), die echte Kollisionen verbergen; oder die Regeln nicht im BAP dokumentieren, sodass jeder Koordinator andere Ergebnisse erhält.",
  "rel": [
   "D08",
   "D18",
   "D06",
   "D05",
   "C32"
  ],
  "al": [
   "Ausschlussregel",
   "Ausschlussregeln",
   "Regelsatz",
   "Regelsätze",
   "Regelsatzes",
   "ruleset",
   "rulesets",
   "reglas de exclusión",
   "conjunto de reglas"
  ]
 },
 {
  "id": "D20",
  "slug": "zona-libre-espacio-de-mantenimiento-y-acceso",
  "t": "Freiraum / Wartungs- und Zugangsbereich",
  "en": "Zona libre / espacio de mantenimiento y acceso",
  "b": "I",
  "d": "Volumen, das um Geräte oder Elemente frei bleiben muss, um sie sicher zu bedienen, zu warten, auszutauschen oder zu erreichen; es wird als Hilfskörper modelliert und mit Abstands- oder harten Prüfungen gegen dieses Volumen geprüft.",
  "ej": "1 m Bedienbereich vor einem Schaltschrank oder Öffnungsbereich der Revisionsklappe eines RLT-Geräts.",
  "eq": "Clearance-Familien/-Objekte in Revit; Solibri: Freiraumregel; Navisworks: Prüfung gegen Abstandskörper",
  "err": "Ihn nicht modellieren und auf die globale Toleranz vertrauen; oder ihn als Körper modellieren, der später als reales Element gemessen oder exportiert wird.",
  "rel": [
   "D03",
   "D13"
  ],
  "al": [
   "Freiraum",
   "Freiräume",
   "Wartungsbereich",
   "Wartungsbereiche",
   "Zugangsbereich",
   "zona libre",
   "espacio libre",
   "espacio de mantenimiento"
  ]
 },
 {
  "id": "D21",
  "slug": "deteccion-automatica-en-la-nube",
  "t": "Automatische Kollisionsprüfung in der Cloud",
  "en": "Detección automática en la nube",
  "b": "IV",
  "d": "Kollisionsberechnung, die ein Dienst in der CDE ohne manuelles Eingreifen ausführt, sobald ein Modell in einem Koordinationsbereich veröffentlicht oder aktualisiert wird oder nach Zeitplan, und deren Ergebnisse dem ganzen Team zugänglich sind.",
  "ej": "Beim Hochladen der neuen Version der Lüftungs-IFC in den Koordinationsbereich berechnet Forma Model Coordination die Kollisionen gegen Tragwerk und Architektur neu und zeigt sie gruppiert an.",
  "eq": "Model Coordination (Autodesk Forma/BIM Collaborate Pro), Clash Automation (Revizto), Clash Spaces (Aconex), Clash Sets in der Cloud (Trimble Connect).",
  "err": "Annehmen, „automatisch“ heiße so konfigurierbar wie Navisworks: Model Coordination kennt in der Berechnung weder Toleranz noch Prüfmatrix, nur nachträgliche Filter; oder Containermodelle aktiviert lassen und so Rauschen und Rechenzeiten vervielfachen.",
  "rel": [
   "D05",
   "D06",
   "D07",
   "D09",
   "C30"
  ],
  "al": [
   "automatische Kollisionsprüfung",
   "automatischen Kollisionsprüfung",
   "detección automática"
  ]
 },
 {
  "id": "D22",
  "slug": "estado-y-ciclo-de-vida-de-la-incidencia",
  "t": "Status und Lebenszyklus eines Problems",
  "en": "Estado y ciclo de vida de la incidencia",
  "b": "V",
  "d": "Abfolge von Status, die ein Problem von der Erstellung bis zur bestätigten Schließung durchläuft (z. B. Neu → Aktiv/Zugewiesen → Vom Ersteller gelöst → Verifiziert/Geschlossen, oder Verworfen), mit Zuständigkeit, Daten und Verlauf.",
  "ej": "Der Koordinator erstellt das Problem „Kanal vs. Träger 3. OG“ (Open) und weist es der TGA zu; die TGA markiert es als gelöst; nach erneuter Prüfung setzt der Koordinator es auf Geschlossen.",
  "eq": "Topic status (BCF), New/Active/Reviewed/Approved/Resolved (Navisworks), Open/Closed (ACC Issues).",
  "err": "Status zwischen Programmen falsch zuordnen: BCF legt keine Werte fest, jeder Server definiert sie in extensions; beim Import in ACC kommt alles außer „Closed“ als „Open“ an; „gelöst“ mit „geschlossen“ verwechseln.",
  "rel": [
   "D10",
   "D14",
   "D15",
   "D23",
   "D26"
  ],
  "al": [
   "Status des Problems",
   "Lebenszyklus",
   "Issue-Status",
   "estado de la incidencia",
   "ciclo de vida"
  ]
 },
 {
  "id": "D23",
  "slug": "indicadores-de-coordinacion",
  "t": "Koordinationskennzahlen (KPI)",
  "en": "Indicadores de coordinación (KPI)",
  "b": "VI",
  "d": "Kennzahlen, die den Zustand des Koordinationsprozesses messen: offene/geschlossene Probleme, neue je Zyklus, mittlere Bearbeitungsdauer, Alter, wieder geöffnete, Tendenz je Fachdisziplin oder Zone und Verhältnis erkannt/gelöst.",
  "ej": "Wöchentliche Übersicht: 42 offen (−15 %), mittlere Bearbeitungsdauer 9 Tage, 6 wieder geöffnet; TGA–Tragwerk vereint 60 % der offenen Probleme im 2. OG.",
  "eq": "Clash metrics, coordination dashboard, clash aging.",
  "err": "Die rohe Anzahl der Kollisionen messen (dominiert von Falschmeldungen und Duplikaten) statt gruppierter Probleme; Zyklen mit unterschiedlichen Prüfungen oder Toleranzen vergleichen.",
  "rel": [
   "D07",
   "D08",
   "D22",
   "D24",
   "C32"
  ],
  "al": [
   "Kennzahlen",
   "Kennzahl",
   "KPI",
   "KPIs",
   "indicadores"
  ]
 },
 {
  "id": "D24",
  "slug": "reunion-de-coordinacion",
  "t": "Koordinationsbesprechung",
  "en": "Reunión de coordinación",
  "b": "I",
  "d": "Regelmäßige Sitzung (meist wöchentlich oder vierzehntägig) am Koordinationsmodell, in der priorisierte Problemgruppen geprüft, Lösungen entschieden sowie Zuständigkeiten und Fristen zugewiesen und in BCF/CDE festgehalten werden.",
  "ej": "Wöchentliche Besprechung: Prüfung von 15 vorrangigen Problemen im 3. OG mit TGA und Tragwerk.",
  "eq": "ACC/BIM 360 Coordination; Revizto; BIMcollab; Navisworks im Besprechungsraum; Teams + BCF",
  "err": "Kollision für Kollision ohne Vorbereitung durchgehen und am Ende keine Aufgaben zuweisen.",
  "rel": [
   "D09",
   "D10",
   "D13"
  ],
  "al": [
   "Koordinationsbesprechung",
   "Koordinationsbesprechungen",
   "reunión de coordinación"
  ]
 },
 {
  "id": "D25",
  "slug": "nivel-de-informacion-y-aptitud-del-modelo-para-detectar",
  "t": "Informationsbedarfstiefe und Prüfreife des Modells",
  "en": "Nivel de información y aptitud del modelo para detectar",
  "b": "I",
  "d": "Geometrischer und alphanumerischer Ausarbeitungsgrad, den jedes Element für einen Zweck haben muss; für die Koordination ist Geometrie mit Größe, Lage und Schnittstellen nötig (z. B. LOD 350 nach BIMForum), festgelegt gemäß LOIN (EN ISO 7817-1:2024).",
  "ej": "Lüftungskanäle mit Dämmung und Halterungen modelliert, bevor die Gewerkekoordination beginnt.",
  "eq": "BIMForum LOD 100–500 (350 für die Koordination); EN ISO 7817-1 (LOIN); IDS zur Prüfung der Anforderungen",
  "err": "Kollisionen an LOD-200-Modellen prüfen und Entscheidungen auf generischer Geometrie treffen.",
  "rel": [
   "D01",
   "D08",
   "C32"
  ],
  "al": [
   "Fertigstellungsgrad",
   "LOD",
   "LOIN",
   "Informationsbedarfstiefe",
   "Level of Information Need",
   "nivel de desarrollo",
   "nivel de información necesario"
  ]
 },
 {
  "id": "D26",
  "slug": "verificacion-de-cierre",
  "t": "Abschlussprüfung",
  "en": "Verificación de cierre",
  "b": "VI",
  "d": "Prüfung, ob ein als gelöst markiertes Problem es wirklich ist: Dieselbe Prüfung (gleiche Regeln und Toleranz) wird an der neuen Modellversion erneut ausgeführt und bestätigt, dass die Kollision verschwindet, ohne neue zu erzeugen, bevor das Problem geschlossen wird.",
  "ej": "Nach der neuen Version des Sanitärmodells startet der Koordinator die Prüfung SAN_v_TWP erneut; die Kollision verschwindet und das Problem wechselt von Gelöst zu Geschlossen; eine neue Kollision mit der abgehängten Decke erzeugt ein weiteres Problem.",
  "eq": "Re-run, verify fix, Approved/Resolved im Clash Detective, veraltete Kollisionen in Rot (Trimble Connect).",
  "err": "Auf Erklärung des Erstellers hin schließen, ohne erneut zu prüfen, oder mit anderer Toleranz bzw. anderem Modell erneut prüfen und das Verschwinden als gültig ansehen.",
  "rel": [
   "D22",
   "D23",
   "D06",
   "D05"
  ],
  "al": [
   "Abschlussprüfung",
   "Abschlussprüfungen",
   "re-run",
   "verificación de cierre"
  ]
 },
 {
  "id": "K01",
  "slug": "clasificacion",
  "t": "Clasificación",
  "en": "Classification",
  "b": "I",
  "d": "Agrupación sistemática de objetos o conceptos en clases según características o propósito comunes, normalmente en jerarquía.",
  "ej": "Un tabique clasificado como 40.10.10.10 (GuBIMclass) en un proyecto público catalán.",
  "eq": "Revit: Assembly Code, OmniClass Number, ClassificationCode; Archicad: Classification Manager; IFC: IfcClassificationReference.",
  "err": "Confundir clasificar con nombrar: el nombre del tipo no es una clasificación.",
  "rel": [
   "K02",
   "K06",
   "K07",
   "K26"
  ],
  "al": [
   "sistema de clasificación",
   "sistemas de clasificación",
   "classification system"
  ]
 },
 {
  "id": "K02",
  "slug": "tabla-de-clasificacion",
  "t": "Tabla de clasificación",
  "en": "Classification table",
  "b": "I",
  "d": "Lista jerárquica de clases que clasifica un tipo de concepto según un único criterio (p. ej. espacios por función).",
  "ej": "GuBIMclass es una sola tabla (elementos por función); Uniclass tiene 15.",
  "eq": "Archicad: un sistema por tabla en el Classification Manager.",
  "err": "Mezclar códigos de tablas distintas en el mismo campo.",
  "rel": [
   "K03",
   "K04",
   "K17"
  ],
  "al": [
   "tabla de clasificación",
   "tablas de clasificación"
  ]
 },
 {
  "id": "K03",
  "slug": "faceta",
  "t": "Faceta",
  "en": "Facet",
  "b": "I",
  "d": "Punto de vista o criterio independiente desde el que se clasifica un objeto (función, forma, material, proceso); cada faceta suele ser una tabla.",
  "ej": "Una puerta vista como espacio, elemento, sistema, producto o trabajo.",
  "eq": "",
  "err": "Creer que un objeto solo admite un código.",
  "rel": [
   "K02",
   "K04"
  ],
  "al": [
   "faceta",
   "facetas"
  ]
 },
 {
  "id": "K04",
  "slug": "clasificacion-facetada",
  "t": "Clasificación facetada",
  "en": "Faceted classification",
  "b": "I",
  "d": "Sistema con varias tablas independientes que se combinan para describir un objeto (Uniclass, OmniClass), frente a la enumerativa de árbol único.",
  "ej": "Uniclass: SL_20_15_59 + EF_25_10 + Ss_25_10_30_35 + Pr_25_71_35_33 para un tabique de oficina.",
  "eq": "",
  "err": "Usar todas las tablas sin que ningún uso las pida.",
  "rel": [
   "K03",
   "K05",
   "K17",
   "K18"
  ],
  "al": [
   "facetada",
   "facetado"
  ]
 },
 {
  "id": "K05",
  "slug": "clasificacion-enumerativa",
  "t": "Clasificación enumerativa",
  "en": "Enumerative classification",
  "b": "I",
  "d": "Sistema que enumera todas las clases en una única jerarquía predefinida (p. ej. capítulos de un cuadro de precios).",
  "ej": "GuBIMclass y los capítulos de un cuadro de precios.",
  "eq": "",
  "err": "",
  "rel": [
   "K04",
   "K24"
  ],
  "al": [
   "enumerativa",
   "enumerativo"
  ]
 },
 {
  "id": "K06",
  "slug": "codigo-de-clasificacion",
  "t": "Código de clasificación",
  "en": "Classification code / notation",
  "b": "I",
  "d": "Símbolo compacto que representa una clase (Ss_25_10_30, B2010, 03 30 00). No es la clase en sí, sino su notación.",
  "ej": "40.10.10.10 (GuBIMclass), Ss_25_10_30_35 (Uniclass), 03 30 00 (MasterFormat).",
  "eq": "Revit: [Sistema]código:título en ClassificationCode; IFC: Identification (ItemReference en IFC2x3).",
  "err": "Guardar código y título juntos en el campo del código.",
  "rel": [
   "K01",
   "K07",
   "K10"
  ],
  "al": [
   "código de clasificación",
   "códigos de clasificación",
   "ClassificationCode"
  ]
 },
 {
  "id": "K07",
  "slug": "identificador",
  "t": "Identificador",
  "en": "Identifier",
  "b": "I",
  "d": "Nombre o código único que distingue una instancia concreta (no una clase); p. ej. GlobalId IFC o designación de referencia.",
  "ej": "Puerta P-2.14 del proyecto; GlobalId del IFC.",
  "eq": "IFC: GlobalId, Tag; Revit: Marca.",
  "err": "Usar el identificador como si fuera la clase.",
  "rel": [
   "K06",
   "K08"
  ],
  "al": [
   "identificador",
   "GUID"
  ]
 },
 {
  "id": "K08",
  "slug": "designacion-de-referencia",
  "t": "Designación de referencia",
  "en": "Reference designation",
  "b": "II",
  "d": "Identificador estructurado de un objeto dentro de un sistema según ISO/IEC 81346, con aspectos de función (=), producto (-) y ubicación (+).",
  "ej": "",
  "eq": "CCI: =, -, + en la designación.",
  "err": "",
  "rel": [
   "K21",
   "K28"
  ],
  "al": [
   "designación de referencia",
   "reference designation"
  ]
 },
 {
  "id": "K09",
  "slug": "ifcclassification",
  "t": "IfcClassification",
  "en": "IfcClassification",
  "b": "V",
  "d": "Entidad IFC que describe el sistema de clasificación: Source, Edition, EditionDate, Name, Description, Specification (Location en IFC4), ReferenceTokens.",
  "ej": "IFCCLASSIFICATION('GuBIMCat','1.2',$,'GuBIMclass',…)",
  "eq": "Revit: Classification Settings del exportador IFC; Archicad: traductor IFC.",
  "err": "Sistema sin nombre: «Default Classification».",
  "rel": [
   "K10",
   "K11",
   "K12"
  ],
  "al": [
   "IfcClassification"
  ]
 },
 {
  "id": "K10",
  "slug": "ifcclassificationreference",
  "t": "IfcClassificationReference",
  "en": "IfcClassificationReference",
  "b": "V",
  "d": "Entidad IFC que referencia un código concreto (Identification, Name, Location, ReferencedSource); en IFC2x3 el código era ItemReference.",
  "ej": "IFCCLASSIFICATIONREFERENCE($,'40.10.10.10','Tabiques',#…)",
  "eq": "",
  "err": "Buscar ItemReference en IFC4 (ahora es Identification).",
  "rel": [
   "K09",
   "K11",
   "K06"
  ],
  "al": [
   "IfcClassificationReference",
   "ItemReference"
  ]
 },
 {
  "id": "K11",
  "slug": "ifcrelassociatesclassification",
  "t": "IfcRelAssociatesClassification",
  "en": "IfcRelAssociatesClassification",
  "b": "V",
  "d": "Relación IFC que asocia una clasificación o referencia a objetos, tipos, plantillas de Pset o contextos.",
  "ej": "",
  "eq": "",
  "err": "Clasificar solo instancias cuando el tipo ya lo hereda, o al revés, sin documentarlo.",
  "rel": [
   "K09",
   "K10"
  ],
  "al": [
   "IfcRelAssociatesClassification"
  ]
 },
 {
  "id": "K12",
  "slug": "clasificacion-ligera-completa",
  "t": "Clasificación ligera / completa",
  "en": "Lightweight / full classification",
  "b": "V",
  "d": "Ligera: la referencia apunta directamente al sistema. Completa: apunta a la referencia padre y reproduce la jerarquía en el IFC.",
  "ej": "",
  "eq": "IfcOpenShell: add_reference(is_lightweight=True).",
  "err": "",
  "rel": [
   "K10",
   "K09"
  ],
  "al": [
   "clasificación ligera",
   "clasificación completa"
  ]
 },
 {
  "id": "K13",
  "slug": "bsdd-k13",
  "t": "bSDD",
  "en": "buildingSMART Data Dictionary",
  "b": "IV",
  "d": "Servicio gratuito de buildingSMART que aloja diccionarios interconectados (clases, propiedades, valores) con URI estables y API; basado en ISO 12006-3.",
  "ej": "Uniclass y CCI están en bSDD; GuBIMclass: Por confirmar.",
  "eq": "Bonsai: Add Classification From bSDD; complementos para Revit y Archicad.",
  "err": "Copiar el código de bSDD sin su URI ni versión.",
  "rel": [
   "K14",
   "K27",
   "K30"
  ],
  "al": [
   "bSDD",
   "buildingSMART Data Dictionary",
   "diccionario de datos",
   "diccionarios de datos"
  ]
 },
 {
  "id": "K14",
  "slug": "uri",
  "t": "URI",
  "en": "Uniform Resource Identifier",
  "b": "IV",
  "d": "Identificador web persistente de una clase o propiedad; en bSDD con patrón identifier.buildingsmart.org/uri/{org}/{dict}/{versión}/class/{código}.",
  "ej": "identifier.buildingsmart.org/uri/molio/cciconstruction/1.0/class/L-BD",
  "eq": "IFC4: Location; IFC4.3: Specification (sistema) y Location (clase).",
  "err": "Esperar que IDS compruebe la URI: no la comprueba.",
  "rel": [
   "K13"
  ],
  "al": [
   "URI"
  ]
 },
 {
  "id": "K15",
  "slug": "ids-k15",
  "t": "IDS",
  "en": "Information Delivery Specification",
  "b": "VI",
  "d": "Estándar buildingSMART (v1.0, junio 2024) en XML para definir requisitos de información verificables automáticamente sobre modelos IFC.",
  "ej": "IDS que exige 40.10.10.10 a los tabiques de un proyecto público.",
  "eq": "IfcTester, Solibri, BIMcollab Zoom; Archicad 28 importa desde IDS.",
  "err": "Escribir el sistema distinto al del IFC («Uniclass 2015»).",
  "rel": [
   "K16",
   "K09"
  ],
  "al": [
   "IDS",
   "Information Delivery Specification"
  ]
 },
 {
  "id": "K16",
  "slug": "faceta-de-clasificacion",
  "t": "Faceta de clasificación (IDS)",
  "en": "Classification facet",
  "b": "VI",
  "d": "Faceta IDS con system (obligatorio), value y uri, usable en aplicabilidad o requisitos con cardinalidad required/optional/prohibited.",
  "ej": "",
  "eq": "",
  "err": "Pedir la clasificación con la faceta de propiedad en vez de la de clasificación.",
  "rel": [
   "K15"
  ],
  "al": [
   "faceta de clasificación"
  ]
 },
 {
  "id": "K17",
  "slug": "uniclass",
  "t": "Uniclass",
  "en": "Uniclass",
  "b": "II",
  "d": "Sistema de clasificación unificado del Reino Unido (NBS), 15 tablas, alineado con ISO 12006-2, gratuito (CC BY-ND 4.0), revisión trimestral.",
  "ej": "Lo piden algunos pliegos españoles (19 % en el sector del agua, 2022).",
  "eq": "Revit: ClassificationCode; Archicad: paquete de clasificación; NBS Chorus.",
  "err": "No fijar la edición: se revisa cada trimestre.",
  "rel": [
   "K04",
   "K18",
   "K26"
  ],
  "al": [
   "Uniclass",
   "Uniclass 2015"
  ]
 },
 {
  "id": "K18",
  "slug": "omniclass",
  "t": "OmniClass",
  "en": "OmniClass Construction Classification System",
  "b": "II",
  "d": "Sistema norteamericano (CSI) de 15 tablas numeradas 11–49 basado en ISO 12006-2, MasterFormat, UniFormat y EPIC.",
  "ej": "",
  "eq": "Revit: OmniClass Number (tabla 23).",
  "err": "Usar sus tablas sin fecha: cada una es de un año distinto.",
  "rel": [
   "K19",
   "K20",
   "K26"
  ],
  "al": [
   "OmniClass"
  ]
 },
 {
  "id": "K19",
  "slug": "masterformat",
  "t": "MasterFormat",
  "en": "MasterFormat",
  "b": "II",
  "d": "Clasificación de CSI para especificaciones y resultados de obra con códigos de 6 dígitos (03 30 00) organizada en divisiones 00–49.",
  "ej": "",
  "eq": "",
  "err": "",
  "rel": [
   "K18",
   "K20"
  ],
  "al": [
   "MasterFormat"
  ]
 },
 {
  "id": "K20",
  "slug": "uniformat",
  "t": "UniFormat",
  "en": "UniFormat / UNIFORMAT II",
  "b": "II",
  "d": "Clasificación por elementos constructivos (A1010, B2010) usada en estimación temprana; UNIFORMAT II normalizada como ASTM E1557.",
  "ej": "",
  "eq": "Revit: Assembly Code (sale en IFC como «Uniformat»).",
  "err": "",
  "rel": [
   "K18",
   "K19"
  ],
  "al": [
   "UniFormat",
   "Uniformat",
   "UNIFORMAT II",
   "Assembly Code"
  ]
 },
 {
  "id": "K21",
  "slug": "cci",
  "t": "CCI",
  "en": "Construction Classification International",
  "b": "II",
  "d": "Sistema basado en ISO/IEC 81346-12 que combina clasificación e identificación; evolución internacional del CCS danés (Molio).",
  "ej": "",
  "eq": "Revit: Class Feeder; Tekla: Type-ID CCS.",
  "err": "",
  "rel": [
   "K08",
   "K22",
   "K28"
  ],
  "al": [
   "CCI",
   "Construction Classification International"
  ]
 },
 {
  "id": "K22",
  "slug": "coclass",
  "t": "CoClass",
  "en": "CoClass",
  "b": "II",
  "d": "Sistema sueco de Svensk Byggtjänst, sucesor de BSAB 96, alineado con ISO 12006-2 e ISO 81346-12.",
  "ej": "",
  "eq": "",
  "err": "",
  "rel": [
   "K21",
   "K28"
  ],
  "al": [
   "CoClass"
  ]
 },
 {
  "id": "K23",
  "slug": "nl-sfb",
  "t": "NL-SfB",
  "en": "NL-SfB",
  "b": "II",
  "d": "Adaptación neerlandesa del CI/SfB, usada en la BIM basis ILS para clasificar elementos de edificación.",
  "ej": "",
  "eq": "",
  "err": "",
  "rel": [
   "K05"
  ],
  "al": [
   "NL-SfB"
  ]
 },
 {
  "id": "K24",
  "slug": "gubimclass",
  "t": "GuBIMclass",
  "en": "GuBIMclass",
  "b": "II",
  "d": "Sistema español de clasificación de elementos por función principal creado por GuBIMCat (v1.0 2017, v1.2 nov. 2017), adoptado por Infraestructures.cat.",
  "ej": "40.10.10.10 Tabiques; 20.10.40.10 Soleras; 30.10.10 Fachadas.",
  "eq": "Archicad: XML del Classification Manager; Revit: Assembly Code y Classification Manager; Navisworks: XML de búsqueda.",
  "err": "Usar códigos copiados de terceros sin cotejarlos con la tabla oficial 1.2.",
  "rel": [
   "K05",
   "K25",
   "K01"
  ],
  "al": [
   "GuBIMclass",
   "GuBIMClass",
   "GuBIMCat"
  ]
 },
 {
  "id": "K25",
  "slug": "fiebdc-3-bc3",
  "t": "FIEBDC-3 / BC3",
  "en": "FIEBDC-3 (BC3) exchange format",
  "b": "V",
  "d": "Formato español de intercambio de bases de datos de construcción (precios, descompuestos, mediciones, pliegos) en ASCII con registros ~C, ~D, ~T, ~M…",
  "ej": "El código de partida de Presto enlazado a tipos de Revit con Cost-It.",
  "eq": "Presto, Arquímedes, TCQ.",
  "err": "Meter el código BC3 en el mismo campo que la clasificación de elementos.",
  "rel": [
   "K24",
   "K30"
  ],
  "al": [
   "BC3",
   "FIEBDC",
   "FIEBDC-3"
  ]
 },
 {
  "id": "K26",
  "slug": "iso-12006-2",
  "t": "ISO 12006-2",
  "en": "ISO 12006-2",
  "b": "II",
  "d": "Norma marco que recomienda tablas de clasificación para la construcción (recursos, procesos, resultados, propiedades); no aporta contenido; en revisión 2025-2026.",
  "ej": "",
  "eq": "",
  "err": "Pensar que la norma trae códigos: solo títulos de tablas.",
  "rel": [
   "K02",
   "K17",
   "K18"
  ],
  "al": [
   "ISO 12006-2"
  ]
 },
 {
  "id": "K27",
  "slug": "iso-12006-3",
  "t": "ISO 12006-3",
  "en": "ISO 12006-3",
  "b": "II",
  "d": "Norma marco para información orientada a objetos (diccionarios independientes del idioma); base de IFD/bSDD.",
  "ej": "",
  "eq": "",
  "err": "",
  "rel": [
   "K13"
  ],
  "al": [
   "ISO 12006-3"
  ]
 },
 {
  "id": "K28",
  "slug": "iso-iec-81346",
  "t": "ISO/IEC 81346",
  "en": "ISO/IEC 81346 (reference designation)",
  "b": "II",
  "d": "Serie de normas de estructuración y designación de referencia; la parte 12 define clases para obras de construcción y servicios.",
  "ej": "",
  "eq": "",
  "err": "",
  "rel": [
   "K08",
   "K21"
  ],
  "al": [
   "ISO 81346",
   "ISO/IEC 81346",
   "ISO 81346-12"
  ]
 },
 {
  "id": "K29",
  "slug": "cobie-k29",
  "t": "COBie",
  "en": "Construction Operations Building information exchange",
  "b": "V",
  "d": "Formato de entrega de datos para operación y mantenimiento; usa columnas Category con códigos de clasificación (OmniClass, Uniclass).",
  "ej": "",
  "eq": "Revit: exportación COBie con «código : título».",
  "err": "",
  "rel": [
   "K17",
   "K18"
  ],
  "al": [
   "COBie"
  ]
 },
 {
  "id": "K30",
  "slug": "mapeo-tabla-de-correspondencias",
  "t": "Mapeo / tabla de correspondencias",
  "en": "Crosswalk / mapping",
  "b": "V",
  "d": "Tabla que relaciona clases de dos sistemas (p. ej. Uniclass↔NRM, OmniClass↔Uniclass); en bSDD mediante relaciones IsEqualTo/IsSimilarTo.",
  "ej": "GuBIMclass ↔ Uniclass ↔ partida BC3 en un mismo proyecto.",
  "eq": "bSDD: IsEqualTo / IsSimilarTo.",
  "err": "Esperar equivalencias uno a uno.",
  "rel": [
   "K13",
   "K24",
   "K17"
  ],
  "al": [
   "mapeo",
   "tabla de correspondencia",
   "crosswalk"
  ]
 },
 {
  "id": "K31",
  "slug": "edicion",
  "t": "Edición (de una tabla)",
  "en": "Edition",
  "b": "I",
  "d": "Versión o fecha de publicación de la tabla de clasificación usada. Sin ella, un código puede no existir o significar otra cosa en otra versión.",
  "ej": "GuBIMclass 1.2 (2017); Uniclass Ss v1.43 (julio de 2026).",
  "eq": "IFC: IfcClassification.Edition / EditionDate.",
  "err": "Código sin edición: puede estar retirado o cambiar de título.",
  "rel": [
   "K09",
   "K17"
  ],
  "al": [
   "edición de la tabla"
  ]
 },
 {
  "id": "P01",
  "slug": "plan-de-ejecucion-bim",
  "t": "BIM-Abwicklungsplan (BAP)",
  "en": "Plan de ejecución BIM (BEP)",
  "b": "I",
  "d": "Plan, der erläutert, wie das Lieferteam die Informationen eines Auftrags verwaltet und liefert, um die AIA zu erfüllen: Personen, Strategie, Föderation, Verantwortlichkeiten, Methoden, Standard und Ressourcen.",
  "ej": "Die andalusische Regionalregierung (AOPJA) nennt ihn PEB und verlangt einen vorvertraglichen PEB mit dem Angebot und den PEB nach der Vergabe.",
  "eq": "ISO 19650-2: BIM execution plan; Penn State: BIM Project Execution Plan (PxP); NBIMS-US V4: BIM Execution Plan; laufende ISO-Überarbeitung: möglicherweise „Information Production Plan“.",
  "err": "Ein allgemeines Unternehmenshandbuch schreiben, das auf keine konkrete Anforderung der AIA antwortet.",
  "rel": [
   "P02",
   "P03",
   "P04",
   "P16",
   "P21"
  ],
  "al": [
   "BIM-Abwicklungsplan",
   "BIM-Abwicklungsplans",
   "BIM-Abwicklungspläne",
   "BIM-Abwicklungsplänen",
   "BAP",
   "BEP",
   "BIM execution plan",
   "plan de ejecución BIM",
   "planes de ejecución BIM",
   "PEB"
  ]
 },
 {
  "id": "P02",
  "slug": "bep-previo-a-la-designacion",
  "t": "Vorvertraglicher BAP",
  "en": "BEP previo a la designación",
  "b": "I",
  "d": "Fassung des BAP, die jeder Bewerber um die Rolle des federführenden Auftragnehmers mit seinem Angebot einreicht (ISO 19650-2, 5.3.2), um zu zeigen, wie er die AIA erfüllen wird; enthält eine übergeordnete Verantwortlichkeitsmatrix.",
  "ej": "Vorvertraglicher PEB in den Muster-AIA der AOPJA (2024).",
  "eq": "PAS 1192-2: pre-contract BEP; Penn State: Angebot.",
  "err": "Ihn als Werbekatalog statt als punktgenaue Antwort auf die AIA vorlegen.",
  "rel": [
   "P01",
   "P03",
   "P16",
   "P29"
  ],
  "al": [
   "vorvertraglicher BAP",
   "vorvertraglichen BAP",
   "vorvertraglichen BAPs",
   "Vor-BAP",
   "pre-BEP",
   "pre-appointment BEP",
   "BEP previo",
   "pre-PEB"
  ]
 },
 {
  "id": "P03",
  "slug": "bep-confirmado",
  "t": "BAP nach Vergabe (bestätigter BAP)",
  "en": "BEP confirmado (posterior a la designación)",
  "b": "I",
  "d": "BAP, den das beauftragte Team nach der Beauftragung bestätigt und ausarbeitet (ISO 19650-2, 5.4.1): Namen der Personen, detaillierte Matrix, vereinbarte Methoden und Standard. Er ist Teil der Vertragsunterlagen.",
  "ej": "PEB nach der Vergabe in den Ausschreibungsunterlagen der AOPJA.",
  "eq": "PAS 1192-2: post-contract award BEP.",
  "err": "Ihn nach der Unterzeichnung nicht fortschreiben: Zur Projektmitte beschreibt er ein Team, das es nicht mehr gibt.",
  "rel": [
   "P01",
   "P02",
   "P17",
   "P18"
  ],
  "al": [
   "BAP nach Vergabe",
   "bestätigter BAP",
   "bestätigten BAP",
   "post-appointment BEP",
   "BEP confirmado"
  ]
 },
 {
  "id": "P04",
  "slug": "requisitos-de-intercambio-de-informacion",
  "t": "Auftraggeber-Informationsanforderungen (AIA / EIR)",
  "en": "Requisitos de intercambio de información (EIR)",
  "b": "I",
  "d": "Informationsanforderungen eines konkreten Auftrags (Management, kaufmännische und technische Aspekte). Der Auftraggeber verfasst sie, und der federführende Auftragnehmer gibt sie an jeden Auftragnehmer weiter.",
  "ej": "Anlage „BIM-Anforderungen (EIR)“ der Ausschreibungsunterlagen der AOPJA.",
  "eq": "PAS 1192-2: Employer's Information Requirements; spanischer Plan BIM: BIM-Anforderungen in den technischen Vorgaben; DIN EN ISO 19650: Austausch-Informationsanforderungen.",
  "err": "EIR weiterhin als „Employer's“ lesen: In ISO 19650 gibt es eine AIA je Auftrag, auch gegenüber Nachunternehmern.",
  "rel": [
   "P05",
   "P06",
   "P07",
   "P01"
  ],
  "al": [
   "Auftraggeber-Informationsanforderungen",
   "Austausch-Informationsanforderungen",
   "AIA",
   "EIR",
   "exchange information requirements",
   "requisitos de intercambio de información",
   "requisitos de intercambio"
  ]
 },
 {
  "id": "P05",
  "slug": "requisitos-de-informacion-de-la-organizacion",
  "t": "Organisatorische Informationsanforderungen (OIR)",
  "en": "Requisitos de información de la organización (OIR)",
  "b": "I",
  "d": "Informationsanforderungen, die an die strategischen Ziele der Organisation in Bezug auf ihre Assets gebunden sind; sie speisen die PIR und die AIR.",
  "ej": "Eine Stadtverwaltung, die den Energieverbrauch aller ihrer Gebäude kennen muss.",
  "eq": "ISO 19650-1.",
  "err": "Sie überspringen und die AIA schreiben, ohne zu wissen, für welche Entscheidungen die Informationen benötigt werden.",
  "rel": [
   "P06",
   "P07",
   "P04"
  ],
  "al": [
   "OIR",
   "organisatorische Informationsanforderungen",
   "organisatorischen Informationsanforderungen",
   "requisitos de información de la organización"
  ]
 },
 {
  "id": "P06",
  "slug": "requisitos-de-informacion-del-proyecto",
  "t": "Projekt-Informationsanforderungen (PIR)",
  "en": "Requisitos de información del proyecto (PIR)",
  "b": "I",
  "d": "Anforderungen an Zweck, Planung und Bau des Assets, verknüpft mit den wichtigsten Entscheidungspunkten des Projekts; sie bestimmen das Projekt-Informationsmodell (PIM).",
  "ej": "Informationen, um am Ende der Ausführungsplanung zu entscheiden, ob die Bauleistung ausgeschrieben wird.",
  "eq": "ISO 19650-1.",
  "err": "Sie mit der AIA verwechseln: Die PIR gehören zum Projekt, die AIA zu jedem einzelnen Auftrag.",
  "rel": [
   "P05",
   "P04",
   "P08",
   "P19"
  ],
  "al": [
   "PIR",
   "Projekt-Informationsanforderungen",
   "requisitos de información del proyecto"
  ]
 },
 {
  "id": "P07",
  "slug": "requisitos-de-informacion-del-activo-p07",
  "t": "Asset-Informationsanforderungen (AIR)",
  "en": "Requisitos de información del activo (AIR)",
  "b": "I",
  "d": "Anforderungen an die Informationen, die für Betrieb und Instandhaltung des Assets nötig sind; sie bestimmen den Inhalt des Asset-Informationsmodells (AIM).",
  "ej": "Wartungsdaten der Lüftungs- und Klimageräte, die der Gebäudebetreiber anfordert.",
  "eq": "ISO 19650-1 und -3; COBie als übliches Format.",
  "err": "Sie erst am Ende der Bauphase anfordern, statt sie von der ersten AIA an aufzunehmen.",
  "rel": [
   "P05",
   "P09",
   "P04"
  ],
  "al": [
   "AIR",
   "Asset-Informationsanforderungen",
   "requisitos de información del activo"
  ]
 },
 {
  "id": "P08",
  "slug": "modelo-de-informacion-del-proyecto-p08",
  "t": "Projekt-Informationsmodell (PIM)",
  "en": "Modelo de información del proyecto (PIM)",
  "b": "I",
  "d": "Informationsmodell (strukturierte und unstrukturierte Container), das in der Lieferphase entsteht und an das AIM übergibt, was die AIR verlangen.",
  "ej": "Modelle, Pläne und Dokumente zu Planung und Bau eines Krankenhauses.",
  "eq": "ISO 19650-1.",
  "err": "Annehmen, es sei nur das föderierte 3D-Modell.",
  "rel": [
   "P09",
   "P06",
   "P24"
  ],
  "al": [
   "PIM",
   "Projekt-Informationsmodell",
   "Projekt-Informationsmodells",
   "modelo de información del proyecto"
  ]
 },
 {
  "id": "P09",
  "slug": "modelo-de-informacion-del-activo-p09",
  "t": "Asset-Informationsmodell (AIM)",
  "en": "Modelo de información del activo (AIM)",
  "b": "I",
  "d": "Informationsmodell der Betriebsphase; es erhält beim Projektabschluss die relevanten Informationen aus dem PIM.",
  "ej": "Instandhaltungsdatenbank des übergebenen Gebäudes.",
  "eq": "ISO 19650-1 und -3.",
  "err": "Das vollständige PIM als AIM übergeben, ohne herauszufiltern, was für den Betrieb wirklich nützt.",
  "rel": [
   "P08",
   "P07"
  ],
  "al": [
   "AIM",
   "Asset-Informationsmodell",
   "Asset-Informationsmodells",
   "modelo de información del activo"
  ]
 },
 {
  "id": "P10",
  "slug": "parte-que-designa",
  "t": "Auftraggeber",
  "en": "Parte que designa",
  "b": "I",
  "d": "Empfänger der Informationen zu Arbeiten oder Leistungen: in der Regel der Bauherr oder wer die Informationen in seinem Namen verwaltet. Er verfasst die AIA und nimmt die Informationen ab.",
  "ej": "Ein Ministerium oder eine Behörde für öffentliche Bauvorhaben, die ein Projekt ausschreibt.",
  "eq": "ISO 19650: appointing party; PAS 1192: employer.",
  "err": "Ihn einfach „den Bauherrn“ nennen, obwohl tatsächlich ein beauftragter Informationsmanager handelt.",
  "rel": [
   "P11",
   "P12",
   "P04"
  ],
  "al": [
   "Auftraggeber",
   "Auftraggebers",
   "appointing party",
   "parte que designa"
  ]
 },
 {
  "id": "P11",
  "slug": "parte-designada-principal",
  "t": "Federführender Auftragnehmer",
  "en": "Parte designada principal",
  "b": "I",
  "d": "Vom Auftraggeber beauftragte Partei, die die Informationen zwischen ihrem Lieferteam und dem Auftraggeber koordiniert und verwaltet. Sie verfasst den BAP und den MIDP.",
  "ej": "Das Architekturbüro, das den Wettbewerb gewinnt und Tragwerksplanung und TGA an Nachunternehmer vergibt.",
  "eq": "ISO 19650: lead appointed party.",
  "err": "Annehmen, es gebe nur einen pro Projekt: Es gibt einen je Lieferteam.",
  "rel": [
   "P10",
   "P12",
   "P13",
   "P18"
  ],
  "al": [
   "federführender Auftragnehmer",
   "federführenden Auftragnehmer",
   "federführenden Auftragnehmers",
   "federführende Auftragnehmer",
   "lead appointed party",
   "parte designada principal"
  ]
 },
 {
  "id": "P12",
  "slug": "parte-designada",
  "t": "Auftragnehmer",
  "en": "Parte designada",
  "b": "I",
  "d": "Informationslieferant, der vom federführenden Auftragnehmer beauftragt wird; erhält eigene AIA und verfasst den TIDP seiner Aufgabenteams.",
  "ej": "Das Tragwerksplanungsbüro, das vom Architekturbüro als Nachunternehmer beauftragt wird.",
  "eq": "ISO 19650: appointed party.",
  "err": "Ihm keine eigenen AIA übergeben: Dann weiß er nicht, was er liefern muss.",
  "rel": [
   "P11",
   "P14",
   "P17"
  ],
  "al": [
   "Auftragnehmer",
   "Auftragnehmers",
   "Auftragnehmern",
   "appointed party",
   "parte designada",
   "partes designadas"
  ]
 },
 {
  "id": "P13",
  "slug": "equipo-de-desarrollo",
  "t": "Lieferteam",
  "en": "Equipo de desarrollo",
  "b": "I",
  "d": "Einheit aus einem federführenden Auftragnehmer und seinen Auftragnehmern.",
  "ej": "Architektur + Tragwerk + TGA unter einem gemeinsamen Hauptvertrag.",
  "eq": "ISO 19650: delivery team. Im Spanischen auch „equipo de ejecución“ (UNE-Übersetzung zu bestätigen).",
  "err": "Es mit dem Projektteam verwechseln, das außerdem den Auftraggeber und andere Lieferteams umfasst.",
  "rel": [
   "P11",
   "P12",
   "P15"
  ],
  "al": [
   "Lieferteam",
   "Lieferteams",
   "delivery team",
   "equipo de desarrollo",
   "equipos de desarrollo"
  ]
 },
 {
  "id": "P14",
  "slug": "equipo-de-tarea",
  "t": "Aufgabenteam",
  "en": "Equipo de tarea",
  "b": "I",
  "d": "Gruppe von Personen, die innerhalb eines Auftragnehmers ein bestimmtes Arbeitspaket ausführt.",
  "ej": "Das Team für Elektroinstallationen innerhalb des Ingenieurbüros.",
  "eq": "ISO 19650: task team.",
  "err": "Das ganze Unternehmen als ein einziges Aufgabenteam behandeln und so die Detailtiefe des TIDP verlieren.",
  "rel": [
   "P12",
   "P17"
  ],
  "al": [
   "Aufgabenteam",
   "Aufgabenteams",
   "task team",
   "equipo de tarea",
   "equipos de tarea"
  ]
 },
 {
  "id": "P15",
  "slug": "equipo-del-proyecto",
  "t": "Projektteam",
  "en": "Equipo del proyecto",
  "b": "I",
  "d": "Der Auftraggeber zuzüglich aller Lieferteams des Projekts.",
  "ej": "Bauherr, Planungsteam und Bauunternehmen desselben Bauvorhabens.",
  "eq": "ISO 19650: project team.",
  "err": "—",
  "rel": [
   "P10",
   "P13"
  ],
  "al": [
   "Projektteam",
   "Projektteams",
   "project team",
   "equipo del proyecto"
  ]
 },
 {
  "id": "P16",
  "slug": "matriz-de-responsabilidades",
  "t": "Verantwortlichkeitsmatrix",
  "en": "Matriz de responsabilidades",
  "b": "I",
  "d": "Tabelle, die festlegt, wer welche Information erstellt: übergeordnet im vorvertraglichen BAP und detailliert (je Container, Meilenstein und Verantwortlichem) nach der Beauftragung.",
  "ej": "Tabellenkalkulation mit Containern in den Zeilen und Teams in den Spalten.",
  "eq": "ISO 19650-2: high-level / detailed responsibility matrix; RACI im Projektmanagement.",
  "err": "Zeilen mit zwei „Verantwortlichen“: Wenn alle verantwortlich sind, ist es niemand.",
  "rel": [
   "P02",
   "P17",
   "P18"
  ],
  "al": [
   "Verantwortlichkeitsmatrix",
   "Verantwortlichkeitsmatrizen",
   "responsibility matrix",
   "matriz de responsabilidades",
   "matriz de responsabilidad"
  ]
 },
 {
  "id": "P17",
  "slug": "plan-de-entrega-de-informacion-de-la-tarea",
  "t": "Teil-Informationslieferplan (TIDP)",
  "en": "Plan de entrega de información de la tarea (TIDP)",
  "b": "I",
  "d": "Liste der Container, die jedes Aufgabenteam liefern wird, mit Informationstiefe, Format, Datum und Verantwortlichem.",
  "ej": "TIDP des Tragwerksteams für die Entwurfsplanung.",
  "eq": "ISO 19650-2.",
  "err": "Ihn einmal erstellen und nicht fortschreiben, wenn sich der Terminplan ändert.",
  "rel": [
   "P18",
   "P14",
   "P16"
  ],
  "al": [
   "TIDP",
   "Teil-Informationslieferplan",
   "Teil-Informationslieferplans",
   "Teil-Informationslieferpläne",
   "plan de entrega de información de la tarea"
  ]
 },
 {
  "id": "P18",
  "slug": "plan-maestro-de-entrega-de-informacion",
  "t": "Master-Informationslieferplan (MIDP)",
  "en": "Plan maestro de entrega de información (MIDP)",
  "b": "I",
  "d": "Plan, der die TIDP des gesamten Lieferteams zusammenführt, abgestimmt auf die Liefermeilensteine des Auftraggebers.",
  "ej": "MIDP des Siegerteams eines Krankenhauswettbewerbs.",
  "eq": "ISO 19650-2; Peru: „programa general de desarrollo de la información“ (UNE-Übersetzung zu bestätigen).",
  "err": "Ihn als Bauzeitenplan (Gantt-Diagramm) statt als Informationsplan verwenden.",
  "rel": [
   "P17",
   "P19",
   "P11"
  ],
  "al": [
   "MIDP",
   "Master-Informationslieferplan",
   "Master-Informationslieferplans",
   "plan maestro de entrega de información",
   "plan maestro de entrega"
  ]
 },
 {
  "id": "P19",
  "slug": "hito-de-entrega-de-informacion-p19",
  "t": "Meilenstein der Informationslieferung",
  "en": "Hito de entrega de información",
  "b": "I",
  "d": "Zeitpunkt, zu dem der Auftraggeber Informationen für eine Entscheidung benötigt; er kann am Ende einer Phase oder innerhalb einer Phase liegen.",
  "ej": "Lieferung vor dem Bauantrag.",
  "eq": "ISO 19650-1/2; key decision points; in Deutschland auch Datenübergabepunkt.",
  "err": "Meilensteine nach der Bequemlichkeit des Teams statt nach den Entscheidungen des Auftraggebers festlegen.",
  "rel": [
   "P06",
   "P18"
  ],
  "al": [
   "Meilenstein",
   "Meilensteine",
   "Meilensteinen",
   "Liefermeilenstein",
   "Liefermeilensteine",
   "Datenübergabepunkt",
   "Datenübergabepunkte",
   "hito de entrega",
   "hitos de entrega",
   "hito de entrega de información"
  ]
 },
 {
  "id": "P20",
  "slug": "estrategia-de-federacion",
  "t": "Föderationsstrategie",
  "en": "Estrategia de federación",
  "b": "I",
  "d": "Wie die Informationen in Container aufgeteilt werden (nach Fachdisziplin, Bauteil, Geschoss …) und wie sie zur Koordination zusammengeführt werden.",
  "ej": "Ein Modell je Fachdisziplin und Gebäude, wöchentlich föderiert.",
  "eq": "ISO 19650-2 (vorvertraglicher BAP); Container-Aufschlüsselungsstruktur.",
  "err": "Das Modell nach der Gewohnheit des jeweiligen Programms aufteilen, ohne zu bedenken, wer es erstellt.",
  "rel": [
   "P01",
   "P24"
  ],
  "al": [
   "Föderationsstrategie",
   "Föderationsstrategien",
   "estrategia de federación"
  ]
 },
 {
  "id": "P21",
  "slug": "estandar-de-informacion-del-proyecto",
  "t": "Informationsstandard des Projekts",
  "en": "Estándar de información del proyecto",
  "b": "I",
  "d": "Gemeinsame Regeln für die Informationen: Namen, Klassifikation, Einheiten, Informationstiefe, Koordinatensystem und Formate. Der BAP schlägt Änderungen vor, der bestätigte BAP legt sie fest.",
  "ej": "Namenskonvention + Meter + EPSG:25830 + Höhen Alicante.",
  "eq": "ISO 19650-2, 5.1.4.",
  "err": "Die Koordinaten weglassen: Dann wählt jede Fachdisziplin ihren eigenen Ursprung.",
  "rel": [
   "P28",
   "P22",
   "P01"
  ],
  "al": [
   "Informationsstandard",
   "Informationsstandards",
   "Informationsstandard des Projekts",
   "estándar de información",
   "estándar de información del proyecto"
  ]
 },
 {
  "id": "P22",
  "slug": "metodos-y-procedimientos-de-produccion-de-la-informacion",
  "t": "Methoden und Verfahren der Informationserstellung",
  "en": "Métodos y procedimientos de producción de la información",
  "b": "I",
  "d": "Wie Informationen im Projekt erstellt, geprüft, überprüft, freigegeben und geteilt werden.",
  "ej": "Interne Prüfung, bevor eine Datei in den Bereich „geteilt“ übergeht.",
  "eq": "ISO 19650-2, 5.1.5.",
  "err": "Sie mit dem Standard verwechseln: Der Standard sagt, wie die Information beschaffen ist; die Methoden, wie gearbeitet wird.",
  "rel": [
   "P21",
   "P25"
  ],
  "al": [
   "Methoden und Verfahren der Informationserstellung",
   "Methoden der Informationserstellung",
   "Erstellungsmethoden",
   "métodos y procedimientos de producción",
   "métodos de producción"
  ]
 },
 {
  "id": "P23",
  "slug": "protocolo-de-informacion",
  "t": "Informationsprotokoll",
  "en": "Protocolo de información",
  "b": "II",
  "d": "Vertragsanlage, die das Informationsmanagement in den Auftrag einbindet: Verantwortlichkeiten, Lizenzen und Nutzung der Informationen.",
  "ej": "—",
  "eq": "UK BIM Framework: Information Protocol (2021).",
  "err": "Den Vertrag ohne es unterzeichnen: Dann verpflichtet der BAP zu nichts.",
  "rel": [
   "P04",
   "P01"
  ],
  "al": [
   "Informationsprotokoll",
   "Informationsprotokolls",
   "Information Protocol",
   "protocolo de información"
  ]
 },
 {
  "id": "P24",
  "slug": "contenedor-de-informacion",
  "t": "Informationscontainer",
  "en": "Contenedor de información",
  "b": "I",
  "d": "Benannte Menge von Informationen, abrufbar aus einem Dateisystem oder einer Anwendung: ein Plan, ein Modell, eine Tabelle, ein Dokument.",
  "ej": "HSP-ARQ-ZZ-01-M3-A-0001.ifc",
  "eq": "ISO 19650-1.",
  "err": "Nur an Modelle denken: Auch eine PDF-Datei oder eine Tabellenkalkulation ist ein Container.",
  "rel": [
   "P28",
   "P25",
   "P08"
  ],
  "al": [
   "Informationscontainer",
   "Informationscontainers",
   "Informationscontainern",
   "Container",
   "Containern",
   "Containers",
   "contenedor de información",
   "contenedores de información",
   "contenedor",
   "contenedores"
  ]
 },
 {
  "id": "P25",
  "slug": "estados-del-cde",
  "t": "Status in der CDE",
  "en": "Estados del CDE",
  "b": "I",
  "d": "Zustand jedes Containers in der gemeinsamen Datenumgebung: in Bearbeitung, geteilt, veröffentlicht und archiviert. Jeder Übergang erfordert eine Prüfung, Überprüfung oder Freigabe.",
  "ej": "WIP-Ordner jedes Teams und Ordner für veröffentlichte Projektinformationen.",
  "eq": "ISO 19650-1; Autodesk Docs und BCDE Project setzen sie mit Status und Workflows um.",
  "err": "Die vier Ordner anlegen, ohne dass jemand die Übergänge freigibt.",
  "rel": [
   "P26",
   "P24",
   "P22"
  ],
  "al": [
   "CDE-Status",
   "Status der CDE",
   "in Bearbeitung",
   "work in progress",
   "WIP",
   "estados del CDE",
   "trabajo en curso"
  ]
 },
 {
  "id": "P26",
  "slug": "codigo-de-estado",
  "t": "Statuscode",
  "en": "Código de estado",
  "b": "II",
  "d": "Metadatum, das angibt, wofür ein Container geeignet ist: S0 in Bearbeitung; S1–S7 geteilt; A, B und CR veröffentlicht (britischer nationaler Anhang von 2021).",
  "ej": "S1 geeignet für die Koordination; A1 freigegeben und angenommen.",
  "eq": "BS EN ISO 19650-2 NA; Autodesk Docs (Attribut); andere CDE mit eigenen Listen.",
  "err": "S für „ungeprüft“ und A für „freigegeben“ verwenden, ohne die Liste im Informationsstandard des Projekts festzulegen.",
  "rel": [
   "P25",
   "P27",
   "P28"
  ],
  "al": [
   "Statuscode",
   "Statuscodes",
   "status code",
   "código de estado",
   "códigos de estado"
  ]
 },
 {
  "id": "P27",
  "slug": "codigo-de-revision",
  "t": "Revisionscode",
  "en": "Código de revisión",
  "b": "II",
  "d": "Versionskennung des Containers: P01, P02 … vorläufig; C01, C02 … vertraglich; P01.01 für Zwischenversionen.",
  "ej": "P03 im Bereich „geteilt“; C01 bei der Veröffentlichung.",
  "eq": "BS EN ISO 19650-2 NA.",
  "err": "Die Nummerierung beim Statuswechsel neu beginnen.",
  "rel": [
   "P26",
   "P28"
  ],
  "al": [
   "Revisionscode",
   "Revisionscodes",
   "revision code",
   "código de revisión",
   "códigos de revisión"
  ]
 },
 {
  "id": "P28",
  "slug": "convencion-de-nomenclatura",
  "t": "Namenskonvention",
  "en": "Convención de nomenclatura",
  "b": "II",
  "d": "Regel zur Kennzeichnung von Containern durch mit Bindestrichen getrennte Felder: Projekt-Urheber-Bauteil-Geschoss-Typ-Rolle-Nummer (britischer nationaler Anhang).",
  "ej": "HSP-ARQ-ZZ-01-M3-A-0001",
  "eq": "BS EN ISO 19650-2 NA; Namensvalidierung in Autodesk Docs.",
  "err": "Die britische Konvention übernehmen, ohne die Codes jedes Feldes für das Projekt festzulegen.",
  "rel": [
   "P24",
   "P26",
   "P21"
  ],
  "al": [
   "Namenskonvention",
   "Namenskonventionen",
   "Benennungskonvention",
   "naming convention",
   "convención de nombres",
   "convención de nomenclatura",
   "nomenclatura"
  ]
 },
 {
  "id": "P29",
  "slug": "plan-de-movilizacion",
  "t": "Mobilisierungsplan",
  "en": "Plan de movilización",
  "b": "I",
  "d": "Wie das Team Ressourcen, Technologie und Methoden vor Beginn der Erstellung in Betrieb nimmt und testet (ISO 19650-2, 5.3.5 und 5.5).",
  "ej": "Test des IFC-Exports und des Hochladens in die CDE in der ersten Woche.",
  "eq": "ISO 19650-2.",
  "err": "Mit der Erstellung beginnen, ohne den gesamten Ablauf getestet zu haben.",
  "rel": [
   "P02",
   "P30"
  ],
  "al": [
   "Mobilisierungsplan",
   "Mobilisierungsplans",
   "Mobilisierung",
   "plan de movilización",
   "movilización"
  ]
 },
 {
  "id": "P30",
  "slug": "proceso-de-gestion-de-la-informacion",
  "t": "Informationsmanagementprozess",
  "en": "Proceso de gestión de la información",
  "b": "II",
  "d": "Die acht Aktivitäten der ISO 19650-2 für jeden Auftrag: Bewertung und Bedarf, Aufforderung zur Angebotsabgabe, Angebot, Beauftragung, Mobilisierung, kollaborative Erstellung, Lieferung und Projektabschluss.",
  "ej": "—",
  "eq": "ISO 19650-2, Abschnitt 5; ISO 19650-3 für den Betrieb.",
  "err": "Den BAP als losgelöstes Dokument statt als Teil dieses Prozesses lesen.",
  "rel": [
   "P01",
   "P02",
   "P03",
   "P29"
  ],
  "al": [
   "Informationsmanagement",
   "Informationsmanagements",
   "Informationsmanagementprozess",
   "Informationsmanagementprozesses",
   "gestión de la información",
   "proceso de gestión de la información"
  ]
 },
 {
  "id": "P31",
  "slug": "serie-iso-19650",
  "t": "Normenreihe ISO 19650",
  "en": "Serie ISO 19650",
  "b": "II",
  "d": "Internationale Normen für das Informationsmanagement mit BIM: 1 Begriffe und Grundsätze, 2 Lieferphase, 3 Betriebsphase, 4 Informationsaustausch, 5 Sicherheit, 6 Gesundheitsschutz und Sicherheit. In Deutschland DIN EN ISO 19650, in Spanien UNE-EN ISO 19650.",
  "ej": "UNE-EN ISO 19650-1:2019 und -2:2019.",
  "eq": "BS 1192 und PAS 1192-2 (britische Vorläufer).",
  "err": "„ISO 19650“ ohne Teil zitieren: Der BAP steht in Teil 2.",
  "rel": [
   "P30",
   "P01"
  ],
  "al": [
   "ISO 19650",
   "DIN EN ISO 19650",
   "UNE-EN ISO 19650"
  ]
 },
 {
  "id": "P32",
  "slug": "usos-bim",
  "t": "BIM-Anwendungsfälle",
  "en": "Usos BIM",
  "b": "I",
  "d": "Konkrete Arten, BIM zur Erreichung eines Ziels einzusetzen (3D-Koordination, Mengenermittlung, Simulation …); Kern des Leitfadens der Penn State und des NBIMS-US.",
  "ej": "3D-Koordination und Planableitung, gefordert in der Stufe „Inicial“ des spanischen Plan BIM.",
  "eq": "Penn State BIM PxP Guide; NBIMS-US V4; spanischer Plan BIM.",
  "err": "In den AIA „alle Anwendungsfälle“ verlangen, ohne zu sagen, welcher Entscheidung jeder dient.",
  "rel": [
   "P01",
   "P04"
  ],
  "al": [
   "BIM-Anwendungsfall",
   "BIM-Anwendungsfälle",
   "BIM-Anwendungsfällen",
   "BIM-Anwendungsfalls",
   "BIM uses",
   "usos BIM",
   "uso BIM"
  ]
 },
 {
  "id": "P33",
  "slug": "plan-bim-en-la-contratacion-publica",
  "t": "Plan BIM für die öffentliche Auftragsvergabe (Spanien)",
  "en": "Plan BIM en la contratación pública",
  "b": "II",
  "d": "Plan zur Einführung der BIM-Methodik in der öffentlichen Auftragsvergabe Spaniens (Beschluss des Ministerrats vom 27.06.2023, Orden PCM/818/2023): Zeitplan der geforderten BIM-Stufen nach Auftragswert.",
  "ej": "Stufe „Medio“ bei Bauleistungen ≥ 5.404.000 € ab dem 1.10.2025.",
  "eq": "Interne Anweisung für die Allgemeine Staatsverwaltung (AGE); Empfehlung für den übrigen öffentlichen Sektor.",
  "err": "Ihn „Königliches Dekret“ (real decreto) nennen: Das ist er nicht.",
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
  "t": "BIM-Stufe (spanischer Plan BIM)",
  "en": "Nivel BIM (Plan BIM español)",
  "b": "II",
  "d": "Reifegradskala des Plan BIM: PreBIM, Inicial, Medio, Avanzado und Integrado, bewertet nach Strategie, Prozessen, Technologie und Personen.",
  "ej": "Stufe „Inicial“: Modelle für Pläne und 3D-Koordination, CDE als Ablage und offene Formate.",
  "eq": "UK: „BIM Level 2“ (Begriff mit ISO 19650 aufgegeben).",
  "err": "Sie mit dem Fertigstellungsgrad (LOD) der Elemente verwechseln.",
  "rel": [
   "P33"
  ],
  "al": [
   "BIM-Stufe",
   "BIM-Stufen",
   "BIM Level",
   "nivel BIM",
   "niveles BIM"
  ]
 },
 {
  "id": "P35",
  "slug": "comision-interministerial-bim",
  "t": "Interministerielle BIM-Kommission (CIBIM)",
  "en": "Comisión Interministerial BIM (CIBIM)",
  "b": "II",
  "d": "Durch das Königliche Dekret RD 1515/2018 geschaffenes Gremium zur Koordinierung der BIM-Einführung bei der Auftragsvergabe der spanischen Allgemeinen Staatsverwaltung; es hat den Plan BIM erarbeitet.",
  "ej": "cibim.transportes.gob.es",
  "eq": "Zuvor: Kommission es.BIM (2015).",
  "err": "Ihr den Plan BIM als eigene Vorschrift zuschreiben: Beschlossen hat ihn der Ministerrat.",
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
  "t": "Britischer nationaler Anhang",
  "en": "Anexo nacional británico",
  "b": "II",
  "d": "Anhang der BS EN ISO 19650-2, der für das Vereinigte Königreich die Namenskonvention, die Statuscodes und die Revisionscodes festlegt.",
  "ej": "Viele spanische Ausschreibungsunterlagen übernehmen seine Konvention.",
  "eq": "BS EN ISO 19650-2:2018 + A1 / NA (2021).",
  "err": "Ihn für eine spanische Norm halten: Spanien hat keinen nationalen Anhang.",
  "rel": [
   "P28",
   "P26",
   "P27"
  ],
  "al": [
   "nationaler Anhang",
   "nationalen Anhang",
   "nationalen Anhangs",
   "britischer nationaler Anhang",
   "britischen nationalen Anhang",
   "UK National Annex",
   "anexo nacional",
   "anexo nacional británico"
  ]
 },
 {
  "id": "P37",
  "slug": "registro-de-riesgos-de-informacion",
  "t": "Informationsrisikoregister",
  "en": "Registro de riesgos de información",
  "b": "I",
  "d": "Risiken, die eine termin- und formgerechte Lieferung der Informationen verhindern können, mit ihrer Behandlung; begleitet das Angebot (ISO 19650-2, 5.3.6).",
  "ej": "Risiko: unterschiedliche Softwareversionen in Architektur und Tragwerksplanung.",
  "eq": "ISO 19650-2.",
  "err": "Es mit dem Risikoregister der Bauausführung verwechseln.",
  "rel": [
   "P02",
   "P29"
  ],
  "al": [
   "Risikoregister",
   "Risikoregisters",
   "Informationsrisikoregister",
   "Informationsrisikoregisters",
   "registro de riesgos"
  ]
 },
 {
  "id": "P38",
  "slug": "plan-de-produccion-de-informacion",
  "t": "Informationserstellungsplan (vorgeschlagen)",
  "en": "Plan de producción de información (propuesto)",
  "b": "II",
  "d": "Bezeichnung, die laut Quellen, die die öffentliche Konsultation verfolgt haben, den BAP in der Überarbeitung der ISO 19650 ersetzen könnte (Entwurf seit dem 18.08.2026 in erneuter Abstimmung). Nicht endgültig.",
  "ej": "—",
  "eq": "ISO/DIS 19650-2.",
  "err": "Ihn bereits als offiziellen Begriff verwenden.",
  "rel": [
   "P01",
   "P31"
  ],
  "al": [
   "Information Production Plan",
   "Informationserstellungsplan"
  ]
 },
 {
  "id": "G01",
  "slug": "gemelo-digital",
  "t": "Digitaler Zwilling",
  "en": "Gemelo digital",
  "b": "I",
  "d": "Integrierte, datengestützte virtuelle Darstellung realer Entitäten und Prozesse mit synchronisierter Interaktion in festgelegter Frequenz und Genauigkeit.",
  "ej": "Urbaner Zwilling der Stadt Madrid, der 3D-Kartografie und Daten städtischer Sensoren zusammenführt.",
  "eq": "ISO/IEC 30173:2023 (genormter Begriff); „operational twin“ in AWS IoT TwinMaker; „twin graph“ in Azure Digital Twins; „facility twin“ in Autodesk Tandem; „iTwin“ bei Bentley; „virtual twin“ bei Dassault.",
  "err": "Jedes BIM-Modell oder 3D-Rendering als Zwilling bezeichnen: Ohne Datenverbindung zum realen Asset gibt es keinen Zwilling.",
  "rel": [
   "G02",
   "G03",
   "G04",
   "G05",
   "G43"
  ],
  "al": [
   "Digitaler Zwilling",
   "digitaler Zwilling",
   "digitalen Zwilling",
   "digitalen Zwillings",
   "digitalen Zwillinge",
   "digitalen Zwillingen",
   "Digitale Zwillinge",
   "digitale Zwillinge",
   "digital twin",
   "digital twins",
   "gemelo digital",
   "gemelos digitales",
   "réplica digital"
  ]
 },
 {
  "id": "G02",
  "slug": "modelo-digital",
  "t": "Digitales Modell",
  "en": "Modelo digital",
  "b": "I",
  "d": "Digitale Darstellung eines physischen Objekts ohne automatischen Datenaustausch: Jede Aktualisierung zwischen Objekt und Modell erfolgt manuell (Kritzinger et al., 2018).",
  "ej": "„As-built“-BIM-Modell, das bei Bauende übergeben und nach Umbauten von niemandem aktualisiert wird.",
  "eq": "Stufe 1 „Digital model“ bei Arup (2019); statisches Asset-Informationsmodell (ISO 19650).",
  "err": "Glauben, ein „As-built“-BIM-Modell sei bereits ein digitaler Zwilling.",
  "rel": [
   "G01",
   "G03",
   "G08"
  ],
  "al": [
   "digitales Modell",
   "digitalen Modell",
   "digitalen Modells",
   "Digitales Modell",
   "digital model",
   "statisches BIM-Modell",
   "modelo digital",
   "modelo BIM estático"
  ]
 },
 {
  "id": "G03",
  "slug": "sombra-digital",
  "t": "Digitaler Schatten",
  "en": "Sombra digital",
  "b": "I",
  "d": "Digitale Darstellung, die automatisch Daten vom physischen Objekt erhält, deren Änderungen aber nicht automatisch zum Objekt zurückfließen (Einbahnfluss) (Kritzinger et al., 2018).",
  "ej": "Dashboard, das in einem 3D-Modell die von der Gebäudeleittechnik (GLT/BMS) gemeldeten Raumtemperaturen anzeigt, ohne Sollwerte zu senden.",
  "eq": "Viele kommerzielle „Digital Twin“-Produkte für den Betrieb arbeiten in der Praxis als digitaler Schatten (Überwachung ohne Eingriff).",
  "err": "Annehmen, jeder Zwilling müsse auf das Asset einwirken: Im Bauwesen sind die meisten realen Fälle digitale Schatten, und das darf man auch so sagen.",
  "rel": [
   "G01",
   "G02",
   "G37"
  ],
  "al": [
   "digitaler Schatten",
   "digitalen Schatten",
   "digitalen Schattens",
   "Digitaler Schatten",
   "digitale Schatten",
   "digital shadow",
   "sombra digital",
   "sombras digitales"
  ]
 },
 {
  "id": "G04",
  "slug": "activo-fisico",
  "t": "Physisches Asset",
  "en": "Activo físico",
  "b": "I",
  "d": "Reales Element (Gebäude, Brücke, Anlage, Netz), das der Zwilling darstellt und von dem er Daten erhält; ISO 55000 definiert ein Asset als Gegenstand mit potenziellem oder tatsächlichem Wert für eine Organisation.",
  "ej": "Eine Kältemaschine in einem Krankenhaus, ein Pfeiler eines Viadukts oder ein Pumpwerk des Canal de Isabel II.",
  "eq": "IfcProduct/IfcElement in IFC; „Asset“ in AAS (IEC 63278); „Equipment“ in Brick; „Entity“ in AWS IoT TwinMaker.",
  "err": "Das Asset mit seinem Modell verwechseln: Der Zwilling muss jedes Asset eindeutig und dauerhaft identifizieren.",
  "rel": [
   "G01",
   "G08",
   "G14"
  ],
  "al": [
   "physisches Asset",
   "physischen Asset",
   "physischen Assets",
   "physischer Zwilling",
   "physischen Zwilling",
   "physical twin",
   "physical asset",
   "activo físico",
   "gemelo físico"
  ]
 },
 {
  "id": "G05",
  "slug": "nivel-de-madurez-del-gemelo",
  "t": "Reifegrad des Zwillings",
  "en": "Nivel de madurez del gemelo",
  "b": "I",
  "d": "Skala, die einen Zwilling nach seinen Fähigkeiten einstuft: Arup (2019) schlägt 5 Stufen vom digitalen Modell bis zum autonomen Schlussfolgern vor und bewertet Autonomie, Intelligenz, Lernfähigkeit und Genauigkeit.",
  "ej": "Ein Temperaturwarnsystem in einem Gebäude entspräche auf der Arup-Skala Stufe 2 (Rückkopplung und Steuerung).",
  "eq": "Arup 1–5 (2019); ISO/IEC 30186:2025 „Digital twin — Maturity model and guidance for maturity assessment“.",
  "err": "Den Reifegrad als Selbstzweck behandeln: Die passende Stufe hängt vom Anwendungsfall ab, nicht immer ist die höchste die richtige.",
  "rel": [
   "G01",
   "G43",
   "G35"
  ],
  "al": [
   "Reifegrad",
   "Reifegrade",
   "Reifegrads",
   "Reifegrades",
   "Reifegradstufe",
   "Reifegradstufen",
   "maturity level",
   "nivel de madurez",
   "madurez del gemelo digital",
   "niveles de madurez"
  ]
 },
 {
  "id": "G06",
  "slug": "gemelo-digital-nacional",
  "t": "Nationaler digitaler Zwilling",
  "en": "Gemelo digital nacional",
  "b": "II",
  "d": "Ökosystem digitaler Zwillinge, die über sicheren Datenaustausch verbunden sind; im Vereinigten Königreich vom CDBB vorgeschlagen und heute vom National Digital Twin Programme (NDTP) weiterentwickelt.",
  "ej": "Britisches Programm, das Zwillinge für Wasser, Energie und Verkehr über einen gemeinsamen Rahmen für das Informationsmanagement verbinden will.",
  "eq": "Information Management Framework (IMF) des CDBB; Gemini Principles; Integration Architecture des NDTP.",
  "err": "Ihn sich als ein einziges riesiges Modell des Landes vorstellen: Es ist eine Föderation interoperabler Zwillinge.",
  "rel": [
   "G07",
   "G01",
   "G42"
  ],
  "al": [
   "nationaler digitaler Zwilling",
   "nationalen digitalen Zwilling",
   "nationalen digitalen Zwillings",
   "National Digital Twin",
   "NDTP",
   "gemelo digital nacional"
  ]
 },
 {
  "id": "G07",
  "slug": "principios-gemini",
  "t": "Gemini-Prinzipien",
  "en": "Principios Gemini",
  "b": "II",
  "d": "Neun Prinzipien (CDBB, Dezember 2018) für Zwillinge der gebauten Umwelt, gruppiert nach Zweck, Vertrauen und Funktion: Gemeinwohl, Wert, Erkenntnis, Sicherheit, Offenheit, Qualität, Föderation, Kuratierung und Weiterentwicklung.",
  "ej": "Sie als Checkliste beim Verfassen der Leistungsbeschreibung für einen Zwilling eines öffentlichen Netzes nutzen.",
  "eq": "Grundlage des britischen Information Management Framework; zitiert in ISO/IEC 30173 und in der AEC-Literatur.",
  "err": "Sie als technische Norm verstehen: Es sind Leitprinzipien, keine prüfbaren Anforderungen.",
  "rel": [
   "G06",
   "G01"
  ],
  "al": [
   "Gemini-Prinzipien",
   "Gemini Principles",
   "The Gemini Principles",
   "principios Gemini"
  ]
 },
 {
  "id": "G08",
  "slug": "modelo-de-informacion-del-activo-g08",
  "t": "Asset-Informationsmodell (AIM)",
  "en": "Modelo de información del activo (AIM)",
  "b": "II",
  "d": "Informationsmodell (Geometrie, Daten und Dokumente), das das Asset-Management im Betrieb trägt, nach ISO 19650-1 und 19650-3.",
  "ej": "Asset-Datenbank der Instandhaltung, die bei der Übernahme eines öffentlichen Gebäudes mit COBie befüllt wird.",
  "eq": "ISO 19650-3:2020 (Betriebsphase); „Facility“ in Autodesk Tandem; iModel bei Bentley; AIM ≈ statische Schicht des Zwillings.",
  "err": "AIM und Zwilling verwechseln: Das AIM ist die Referenzdatenbank; der Zwilling ergänzt dynamische Anbindung und Analytik.",
  "rel": [
   "G09",
   "G10",
   "G17",
   "G01"
  ],
  "al": [
   "AIM",
   "Asset-Informationsmodell",
   "Asset-Informationsmodells",
   "asset information model",
   "modelo de información del activo"
  ]
 },
 {
  "id": "G09",
  "slug": "modelo-de-informacion-del-proyecto-g09",
  "t": "Projektinformationsmodell (PIM)",
  "en": "Modelo de información del proyecto (PIM)",
  "b": "II",
  "d": "In Planung und Bau entwickeltes Informationsmodell (ISO 19650-2); nach Abschluss wird der relevante Teil in das AIM überführt.",
  "ej": "Föderierte Modelle eines Krankenhausbaus, die bis zur Abnahme in einer CDE verwaltet werden.",
  "eq": "ISO 19650-2:2018; Informationscontainer in der CDE.",
  "err": "Das gesamte PIM als AIM übergeben, mit Baudaten, die für den Betrieb nutzlos sind.",
  "rel": [
   "G08",
   "C30",
   "G41"
  ],
  "al": [
   "PIM",
   "Projektinformationsmodell",
   "Projektinformationsmodells",
   "project information model",
   "modelo de información del proyecto"
  ]
 },
 {
  "id": "G10",
  "slug": "requisitos-de-informacion-del-activo-g10",
  "t": "Asset-Informationsanforderungen (AIR)",
  "en": "Requisitos de información del activo (AIR)",
  "b": "V",
  "d": "Anforderungen des Eigentümers, welche Informationen über das Asset für dessen Bewirtschaftung zu liefern sind, abgeleitet aus den organisatorischen Informationsanforderungen (OIR) nach ISO 19650.",
  "ej": "Liste der Pflichtattribute (Hersteller, Seriennummer, Gewährleistung, Wartungsintervall) für jede Pumpe eines Gebäudes.",
  "eq": "ISO 19650-1/-3; lassen sich prüfbar mit IDS (buildingSMART) oder COBie-Vorlagen ausdrücken.",
  "err": "Allgemeine AIR als PDF verfassen, die niemand automatisch prüfen kann.",
  "rel": [
   "G08",
   "C25",
   "G18",
   "G17"
  ],
  "al": [
   "AIR",
   "Asset-Informationsanforderungen",
   "asset information requirements",
   "requisitos de información del activo"
  ]
 },
 {
  "id": "G13",
  "slug": "ifc",
  "t": "IFC",
  "en": "IFC",
  "b": "II",
  "d": "Offenes Schema von buildingSMART zur Beschreibung von Bau- und Infrastrukturdaten; die Version IFC 4.3 wurde als ISO 16739-1:2024 veröffentlicht (April 2024).",
  "ej": "Das Modell eines Viadukts in IFC 4.3 mit IfcBridge exportieren, um es in eine Zwillingsplattform zu laden.",
  "eq": "Importiert von Autodesk Tandem, Bentley iTwin (IFC-Konnektor), Nemetschek dTwin, Dalux; in Graphen umwandelbar (ifcOWL, Brick).",
  "err": "Glauben, IFC übertrage Sensordaten in Echtzeit: IFC beschreibt das Asset, nicht den Telemetriestrom.",
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
  "t": "IFC-GUID (GlobalId)",
  "en": "GUID IFC (GlobalId)",
  "b": "V",
  "d": "Global eindeutige 128-Bit-Kennung (codiert in 22 Zeichen) jedes IFC-Objekts; damit lässt sich ein Modellelement bis zum Datensatz im Zwilling zurückverfolgen.",
  "ej": "Das Wartungsetikett eines Klimageräts mit der GlobalId des IfcUnitaryEquipment verknüpfen.",
  "eq": "IfcRoot.GlobalId in IFC; „externalId“ in Autodesk Tandem; „federationGuid“ im iModel (⚠); Mapping-Eigenschaft in DTDL.",
  "err": "Annehmen, die GUID sei stabil: Manche Werkzeuge erzeugen sie beim erneuten Export neu und zerstören so die Rückverfolgbarkeit.",
  "rel": [
   "G13",
   "G04",
   "G41"
  ],
  "al": [
   "GUID",
   "GUIDs",
   "GlobalId",
   "IfcGloballyUniqueId",
   "persistente Kennung",
   "eindeutige Kennung",
   "identificador persistente"
  ]
 },
 {
  "id": "G15",
  "slug": "ifcsensor",
  "t": "IfcSensor",
  "en": "IfcSensor",
  "b": "II",
  "d": "IFC-Klasse (Subtyp von IfcDistributionControlElement) für ein Gerät, das eine physikalische Größe misst (Temperatur, Durchfluss, Verformung) und Teil eines Regelsystems ist.",
  "ej": "In Revit modellierter Feuchtesensor, exportiert als IfcSensor mit PredefinedType HUMIDITYSENSOR.",
  "eq": "IfcSensor (IFC); brick:Sensor (Brick); sosa:Sensor (SSN/SOSA); Sensor (SensorThings API).",
  "err": "Den Sensor nur als generische Geometrie modellieren (IfcBuildingElementProxy) und damit seine Semantik verlieren.",
  "rel": [
   "G13",
   "G16",
   "G19",
   "G22"
  ],
  "al": [
   "IfcSensor",
   "IFC-Sensor",
   "IfcDistributionControlElement",
   "sensor IFC"
  ]
 },
 {
  "id": "G16",
  "slug": "historial-de-rendimiento",
  "t": "Leistungshistorie (IfcPerformanceHistory)",
  "en": "Historial de rendimiento (IfcPerformanceHistory)",
  "b": "II",
  "d": "IFC-Entitäten zur Aufzeichnung des Verhaltens eines Elements über die Zeit (Zeitreihen); in der Praxis wenig genutzt gegenüber Zeitreihendatenbanken.",
  "ej": "Bei der Übergabe des AIM eine monatliche Verbrauchsübersicht einer Pumpe in IFC speichern.",
  "eq": "IfcPerformanceHistory + IfcTimeSeries (IFC); in der Praxis Zeitreihen in InfluxDB/Azure Data Explorer.",
  "err": "Versuchen, hochfrequente Telemetrie in IFC-Dateien unterzubringen.",
  "rel": [
   "G13",
   "G15",
   "G37"
  ],
  "al": [
   "IfcPerformanceHistory",
   "IfcTimeSeries",
   "IFC-Zeitreihen",
   "series temporales IFC"
  ]
 },
 {
  "id": "G17",
  "slug": "cobie-g17",
  "t": "COBie",
  "en": "COBie",
  "b": "II",
  "d": "Austauschspezifikation (meist Tabelle oder IFC) mit Räumen, Systemen, Komponenten, Typen und Dokumenten für die Übergabe an die Instandhaltung; 2007 beim USACE entstanden.",
  "ej": "Dem Eigentümer eine COBie-Arbeitsmappe mit allen Endgeräten und ihrer Gewährleistung übergeben.",
  "eq": "NBIMS-US (COBie v3 in Arbeit, Entwurf 2023); BS 1192-4:2014 im Vereinigten Königreich; COBie-Exporter von Revit, Archicad.",
  "err": "COBie bei Bauende „von Hand“ ausfüllen, ohne Verknüpfung mit den GUIDs des Modells.",
  "rel": [
   "G08",
   "G10",
   "G41"
  ],
  "al": [
   "COBie",
   "Construction Operations Building information exchange",
   "COBie-Tabelle",
   "hoja COBie"
  ]
 },
 {
  "id": "G18",
  "slug": "ids-g18",
  "t": "IDS",
  "en": "IDS",
  "b": "VI",
  "d": "Standard von buildingSMART (v1.0 verabschiedet am 4.6.2024) zur Definition von Informationsanforderungen in menschenlesbarem XML, automatisch prüfbar gegen IFC-Modelle.",
  "ej": "IDS-Datei, die verlangt, dass jede IfcPump „Manufacturer“ und „SerialNumber“ hat, bevor sie in den Zwilling geladen wird.",
  "eq": "IfcTester (IfcOpenShell), Solibri, BIMcollab Zoom, usBIM.IDS und weitere Prüfwerkzeuge; sechs Facetten: entity, attribute, property, classification, material, partOf.",
  "err": "IDS mit IFC verwechseln: IDS beschreibt, welche Daten gefordert sind, nicht das Modell.",
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
  "en": "Brick",
  "b": "II",
  "d": "Offene Ontologie (RDF/OWL) zur maschinenlesbaren Beschreibung von Anlagen, Datenpunkten, Räumen und Beziehungen von Gebäudesystemen (Klima, Beleuchtung, Zähler).",
  "ej": "Brick-Graph eines Gebäudes, in dem ein „Supply_Air_Temperature_Sensor“ eine „AHU“ versorgt.",
  "eq": "brick:Equipment/Point/Location; Entsprechungen zu Haystack, RealEstateCore und ASHRAE 223P; SHACL-Validierung mit der Bibliothek brickschema.",
  "err": "Brick für Geometrie verwenden: Brick beschreibt Beziehungen von Systemen und Datenpunkten, nicht Form oder Lage.",
  "rel": [
   "G20",
   "G21",
   "G39",
   "G40"
  ],
  "al": [
   "Brick",
   "Brick Schema",
   "Brick-Ontologie",
   "ontología Brick"
  ]
 },
 {
  "id": "G20",
  "slug": "project-haystack",
  "t": "Project Haystack",
  "en": "Project Haystack",
  "b": "II",
  "d": "Offene Initiative zur semantischen Kennzeichnung von IoT-Gebäudedaten (Tags wie „ahu“, „temp“, „sensor“); Haystack 5 (2025) ergänzt die Schemasprache Xeto und RDF-Integration.",
  "ej": "GLT-Datenpunkte, getaggt als „discharge air temp sensor point“, damit eine Analytik sie findet.",
  "eq": "Haystack 4 (Tags und Defs); Haystack 5 mit Xeto; genutzt in SkySpark und zahlreichen GLT-Systemen.",
  "err": "Glauben, Haystack und Brick konkurrierten unvereinbar: Sie nähern sich gemeinsam mit ASHRAE 223P an.",
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
  "en": "RealEstateCore",
  "b": "II",
  "d": "Modulare offene Ontologie (MIT-Lizenz) für Immobilien, die BIM/IFC, Gebäudeautomation und IoT verbindet; Grundlage der DTDL-Gebäudeontologien für Azure Digital Twins.",
  "ej": "Räume, Geschosse und Anlagen eines Büroportfolios als REC-Zwillinge in Azure Digital Twins modellieren.",
  "eq": "REC in DTDL (Azure), WillowTwin (Erweiterung von REC), RDF/OWL-Version.",
  "err": "Sie für eine ISO-Norm halten: Es ist ein offenes Konsortium, das bestehende Normen ausdrücklich „überbrückt“.",
  "rel": [
   "G19",
   "G25",
   "G40"
  ],
  "al": [
   "RealEstateCore",
   "REC",
   "RealEstateCore-Ontologie",
   "ontología RealEstateCore"
  ]
 },
 {
  "id": "G22",
  "slug": "ssn-sosa",
  "t": "SSN/SOSA",
  "en": "SSN/SOSA",
  "b": "II",
  "d": "W3C-OGC-Ontologie (Empfehlung, Oktober 2017) zur Beschreibung von Sensoren, Beobachtungen, Verfahren und Aktoren; SOSA ist ihr schlanker Kern.",
  "ej": "Beschreiben, dass ein Dehnungsmesser (sosa:Sensor) die Verformung eines Trägers (sosa:FeatureOfInterest) beobachtet.",
  "eq": "sosa:Sensor ≈ IfcSensor ≈ brick:Sensor; konzeptionelle Grundlage der SensorThings API.",
  "err": "Sie zur Modellierung des ganzen Gebäudes nutzen: Sie konzentriert sich auf die Beobachtung und wird mit anderen Ontologien kombiniert.",
  "rel": [
   "G15",
   "G23",
   "G40"
  ],
  "al": [
   "SSN",
   "SOSA",
   "Semantic Sensor Network",
   "SSN-Ontologie",
   "ontología SSN"
  ]
 },
 {
  "id": "G23",
  "slug": "sensorthings-api",
  "t": "SensorThings API",
  "en": "SensorThings API",
  "b": "II",
  "d": "Offene, raumbezogene Web-API-Norm des OGC zur Vernetzung von IoT-Geräten, Sensoren und Beobachtungen (Teil 1 Sensing v1.0 2016, v1.1 2021; Teil 2 Tasking).",
  "ej": "Die Messwerte der Piezometer einer Talsperre als Thing/Datastream/Observation-Entitäten veröffentlichen, abfragbar über REST und MQTT.",
  "eq": "Entitäten Thing, Location, Datastream, Sensor, ObservedProperty, Observation, FeatureOfInterest; Implementierungen wie FROST-Server.",
  "err": "Sie mit einem Low-Level-Protokoll verwechseln: Sie definiert Datenmodell und API und nutzt darunter HTTP/MQTT.",
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
  "en": "Dynamizer (CityGML 3.0)",
  "b": "II",
  "d": "Modul von CityGML 3.0 (OGC, 2021), das Stadtobjekten zeitlich veränderliche Werte zuordnet und IoT-Sensoren mit dem 3D-Stadtmodell verknüpft.",
  "ej": "Der Fassade eines Gebäudes die stündliche Sonneneinstrahlung zuordnen oder einen Verkehrssensor mit einem Straßenabschnitt verknüpfen.",
  "eq": "CityGML 3.0 Dynamizer; kann auf Zeitreihen der SensorThings API verweisen.",
  "err": "Glauben, CityGML 3.0 ersetze IFC: Beide arbeiten in unterschiedlichen Maßstäben (Stadt vs. Gebäude).",
  "rel": [
   "G23",
   "G42"
  ],
  "al": [
   "Dynamizer",
   "Dynamizer-Modul",
   "CityGML 3.0",
   "módulo Dynamizer"
  ]
 },
 {
  "id": "G25",
  "slug": "dtdl",
  "t": "DTDL",
  "en": "DTDL",
  "b": "II",
  "d": "Offene, auf JSON-LD basierende Sprache von Microsoft zur Definition von Zwillingsmodellen (Interfaces mit Eigenschaften, Telemetrie, Beziehungen und Komponenten); Versionen v2, v3 und v4.",
  "ej": "Interface „Room“ mit der Eigenschaft humidity und der Beziehung „hasSensors“, genutzt für einen Hochschulcampus.",
  "eq": "Azure Digital Twins (unterstützt v2/v3), Ontologien RealEstateCore und WillowTwin, Azure IoT Plug and Play.",
  "err": "Glauben, DTDL sei eine ISO/IEC-Norm: Es ist eine offene Spezifikation von Microsoft.",
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
  "en": "Asset Administration Shell (AAS)",
  "b": "II",
  "d": "Genormte digitale Darstellung (IEC 63278-1:2023), die über Teilmodelle einheitlichen Zugriff auf Informationen und Dienste eines Industrie-Assets bietet.",
  "ej": "Digitales Typenschild einer Kältemaschine, vom Hersteller als AAS geliefert.",
  "eq": "IEC 63278; Industrie 4.0 / IDTA; Eclipse BaSyx; Teilmodelle „Digital Nameplate“, „Technical Data“.",
  "err": "Sie für bauwesenfremd halten: Sie wird zunehmend für TGA-Anlagen und Produkte genutzt.",
  "rel": [
   "G04",
   "G26",
   "G33"
  ],
  "al": [
   "Asset Administration Shell",
   "AAS",
   "Verwaltungsschale",
   "Verwaltungsschalen",
   "IEC 63278",
   "administración del activo"
  ]
 },
 {
  "id": "G27",
  "slug": "openusd",
  "t": "OpenUSD",
  "en": "OpenUSD",
  "b": "V",
  "d": "Offenes Format und API zur Beschreibung und Komposition von 3D-Szenen, ursprünglich von Pixar; die Alliance for OpenUSD veröffentlichte die Core Specification 1.0 am 17.12.2025.",
  "ej": "In NVIDIA Omniverse das Modell einer Fabrik aus USD-Ebenen aus Revit und Sensordaten zusammensetzen.",
  "eq": "NVIDIA Omniverse; USD-Konnektoren von Autodesk, Bentley; Cesium for Omniverse.",
  "err": "Glauben, USD ersetze IFC: USD ist Szene/Visualisierung; IFC trägt die Bausemantik.",
  "rel": [
   "G28",
   "G13"
  ],
  "al": [
   "OpenUSD",
   "Universal Scene Description",
   "USD"
  ]
 },
 {
  "id": "G28",
  "slug": "3d-tiles",
  "t": "3D Tiles",
  "en": "3D Tiles",
  "b": "IV",
  "d": "Von Cesium geschaffenes offenes Format (OGC Community Standard), um große 3D-Datenmengen (Städte, Punktwolken, BIM-Modelle) gekachelt ins Web zu streamen.",
  "ej": "Im Browser einen Zwilling einer Autobahn mit Gelände, Orthofoto und gekacheltem BIM-Modell anzeigen.",
  "eq": "Cesium ion, CesiumJS, Cesium for Unreal/Unity/Omniverse, Bentley iTwin.",
  "err": "Volle BIM-Semantik in 3D Tiles erwarten: Sie enthalten Metadaten, ihr Ziel ist aber effiziente Visualisierung.",
  "rel": [
   "G27",
   "G42"
  ],
  "al": [
   "3D Tiles",
   "3D-Kacheln",
   "OGC 3D Tiles",
   "teselas 3D"
  ]
 },
 {
  "id": "G29",
  "slug": "imodel",
  "t": "iModel",
  "en": "iModel",
  "b": "III",
  "d": "Verteilte Datenbank (auf SQLite-Basis) der Plattform Bentley iTwin, die Daten aus verschiedenen Ingenieurquellen in einem gemeinsamen Schema zusammenführt und Änderungen („changesets“) protokolliert.",
  "ej": "IFC-, DGN- und Revit-Modelle einer U-Bahn-Linie in einem gemeinsamen iModel synchronisieren.",
  "eq": "iTwin.js (Open Source); IFC/Revit/DGN-Konnektoren; BIS-Schemas (⚠ technisches Detail in dieser Sitzung nicht verifiziert).",
  "err": "iModel mit einer Datei verwechseln: Es ist ein Repository mit Änderungshistorie.",
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
  "t": "Zwillingsgraph",
  "en": "Grafo de gemelos",
  "b": "IV",
  "d": "Netz aus Zwillingen (Knoten), verbunden durch typisierte Beziehungen (enthält, versorgt, bedient), das Abfragen zum Systemzustand und seinem Kontext ermöglicht.",
  "ej": "Abfrage: „alle Räume im 3. OG, die vom RLT-Gerät 2 versorgt werden und CO2 > 1000 ppm aufweisen“.",
  "eq": "Azure Digital Twins (twin graph), AWS IoT TwinMaker (knowledge graph), Brick-RDF-Graph.",
  "err": "Glauben, das 3D-Modell sei der Zwilling: Der Beziehungsgraph bringt meist mehr Nutzen als die Geometrie.",
  "rel": [
   "G25",
   "G19",
   "G40"
  ],
  "al": [
   "Zwillingsgraph",
   "Zwillingsgraphen",
   "twin graph",
   "Wissensgraph",
   "Wissensgraphen",
   "knowledge graph",
   "grafo de gemelos",
   "grafo de conocimiento"
  ]
 },
 {
  "id": "G31",
  "slug": "internet-de-las-cosas",
  "t": "Internet der Dinge (IoT)",
  "en": "Internet de las cosas (IoT)",
  "b": "I",
  "d": "Netz von Geräten mit Sensoren und Konnektivität, die Daten an IT-Systeme senden; in einem Zwilling der Weg, über den der Zustand des Assets aktualisiert wird.",
  "ej": "LoRaWAN-Belegungssensoren in den Hörsälen eines Universitätsgebäudes.",
  "eq": "Azure IoT Hub, AWS IoT Core, Eclipse Ditto; genormt in ISO/IEC JTC 1/SC 41.",
  "err": "Glauben, mehr Sensoren ergäben einen besseren Zwilling: Ohne semantisches Modell sind die Daten schwer nutzbar.",
  "rel": [
   "G32",
   "G33",
   "G34"
  ],
  "al": [
   "IoT",
   "Internet der Dinge",
   "Internet of Things",
   "IoT-Sensoren",
   "Internet de las cosas",
   "sensores IoT"
  ]
 },
 {
  "id": "G32",
  "slug": "mqtt",
  "t": "MQTT",
  "en": "MQTT",
  "b": "V",
  "d": "Schlankes Publish/Subscribe-Nachrichtenprotokoll (OASIS; ISO/IEC 20922), häufig genutzt, um Sensortelemetrie an Zwillingsplattformen zu senden.",
  "ej": "Gebäude-Gateway, das jede Minute „gebaeude/og3/raum12/co2“ an einen Broker veröffentlicht.",
  "eq": "Unterstützt von Eclipse Ditto (MQTT 3.1.1 und 5), Azure IoT Hub, AWS IoT Core, SensorThings API.",
  "err": "Glauben, MQTT liefere Semantik: Es transportiert nur Nachrichten; die Bedeutung gibt das Modell (Brick, DTDL …).",
  "rel": [
   "G31",
   "G33",
   "G23"
  ],
  "al": [
   "MQTT",
   "MQTT-Protokoll",
   "MQTT-Broker",
   "protocolo MQTT",
   "broker MQTT"
  ]
 },
 {
  "id": "G33",
  "slug": "opc-ua",
  "t": "OPC UA",
  "en": "OPC UA",
  "b": "V",
  "d": "Industrielle Kommunikationsarchitektur (IEC 62541) mit eigenem Informationsmodell; es gibt ein veröffentlichtes Mapping zwischen BACnet (ISO 16484-5) und OPC UA.",
  "ej": "Daten einer Wasseraufbereitungsanlage (SCADA) in den Zwilling des Netzes einlesen.",
  "eq": "IEC 62541; Companion Specifications; OPC-UA-Konnektoren in AWS IoT SiteWise, Azure IoT.",
  "err": "Annehmen, OPC UA sei nur etwas für die Industrie: Es kommt auch in Infrastrukturen und großen Anlagen vor.",
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
  "d": "Kommunikationsprotokoll für Gebäudeautomation (ASHRAE 135 / ISO 16484-5), übliche Quelle betrieblicher Daten aus Klima- und Beleuchtungstechnik.",
  "ej": "Die BACnet-Datenpunkte der GLT eines Krankenhauses über einen Konnektor in Autodesk Tandem oder Willow einbinden.",
  "eq": "ISO 16484-5; Mapping auf OPC UA; Datenpunkte mit Haystack/Brick taggbar.",
  "err": "Glauben, BACnet-Datenpunktnamen seien verständlich: Meist sind es Codes, die zugeordnet werden müssen.",
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
  "t": "Vorausschauende Instandhaltung",
  "en": "Mantenimiento predictivo",
  "b": "I",
  "d": "Strategie, die Ausfälle anhand von Zustandsdaten und Analysemodellen vorhersagt, um vor dem Schaden einzugreifen; Stufe 3 auf der Arup-Skala.",
  "ej": "Anhand von Vibration und Verbrauch erkennen, dass eine Förderpumpe nachlässt, und ihren Austausch einplanen.",
  "eq": "AWS IoT TwinMaker + SiteWise; Azure Digital Twins + Analytik; Autodesk Tandem (Schwellenwertwarnungen).",
  "err": "Sie mit vorbeugender (kalenderbasierter) Instandhaltung verwechseln.",
  "rel": [
   "G05",
   "G31",
   "G38"
  ],
  "al": [
   "vorausschauende Instandhaltung",
   "vorausschauenden Instandhaltung",
   "vorausschauende Wartung",
   "Predictive Maintenance",
   "predictive maintenance",
   "PdM",
   "mantenimiento predictivo"
  ]
 },
 {
  "id": "G36",
  "slug": "monitorizacion-de-la-salud-estructural",
  "t": "Bauwerksüberwachung (SHM)",
  "en": "Monitorización de la salud estructural (SHM)",
  "b": "I",
  "d": "Kontinuierliche Messung (Verformung, Schwingung, Neigung, Temperatur) des Verhaltens eines Tragwerks, um Schäden zu erkennen und Instandhaltungsentscheidungen zu stützen.",
  "ej": "Überwachungssystem der Queensferry Crossing (Schottland) mit Hunderten von Sensoren.",
  "eq": "Bentley iTwin IoT / SHM-Partner; SensorThings zur Veröffentlichung; IfcSensor zur Modellierung von Sensoren.",
  "err": "Ein SHM ohne zugehöriges Brückenmodell als Zwilling bezeichnen: Es ist Überwachung, nicht zwangsläufig ein Zwilling.",
  "rel": [
   "G36",
   "G15",
   "G38"
  ],
  "al": [
   "SHM",
   "Bauwerksüberwachung",
   "Bauwerksmonitoring",
   "Structural Health Monitoring",
   "structural health monitoring",
   "monitorización estructural",
   "auscultación"
  ]
 },
 {
  "id": "G37",
  "slug": "latencia-y-frecuencia-de-sincronizacion",
  "t": "Latenz und Synchronisationsfrequenz",
  "en": "Latencia y frecuencia de sincronización",
  "b": "VI",
  "d": "Zeit zwischen einer Änderung am Asset und ihrer Abbildung im Zwilling sowie der Aktualisierungstakt; die Definition des DTC verlangt eine je nach Anwendungsfall festgelegte Frequenz.",
  "ej": "Raumbelegung: alle 5 min genügt; Schwingungen einer Brücke: Abtastung mit Hunderten Hz und Aggregation.",
  "eq": "Entwurfsparameter in jeder Plattform (IoT Hub, SiteWise, Tandem Streams).",
  "err": "Für alles „Echtzeit“ fordern und damit die Kosten erhöhen, ohne Nutzen zu stiften.",
  "rel": [
   "G01",
   "G03",
   "G38"
  ],
  "al": [
   "Latenz",
   "Synchronisationsfrequenz",
   "Aktualisierungsfrequenz",
   "latencia",
   "frecuencia de actualización"
  ]
 },
 {
  "id": "G38",
  "slug": "deriva-y-calibracion-del-sensor",
  "t": "Sensordrift und Kalibrierung",
  "en": "Deriva y calibración del sensor",
  "b": "VI",
  "d": "Fortschreitende Abweichung des Messwerts eines Sensors vom tatsächlichen Wert; regelmäßige Kalibrierung und die Erkennung von Ausreißern gehören zur Qualitätskontrolle des Zwillings.",
  "ej": "CO2-Fühler, der nach zwei Jahren 150 ppm zu viel misst und die Lüftung unnötig auslöst.",
  "eq": "Kalibrierungsmetadaten in SSN/SOSA (Verfahren), Brick (Eigenschaften), Wartungsprotokolle.",
  "err": "Dem Wert trauen, weil er „vom Sensor kommt“, ohne Kalibrierplan.",
  "rel": [
   "G37",
   "G36",
   "G22"
  ],
  "al": [
   "Sensordrift",
   "Drift des Sensors",
   "sensor drift",
   "deriva del sensor"
  ]
 },
 {
  "id": "G39",
  "slug": "shacl",
  "t": "SHACL",
  "en": "SHACL",
  "b": "VI",
  "d": "W3C-Sprache zur Validierung von RDF-Graphen gegen „Shapes“ (Einschränkungen); damit wird geprüft, ob ein Brick-Modell der Ontologie entspricht.",
  "ej": "Mit der Python-Bibliothek brickschema prüfen, dass jeder Sensor „isPointOf“ auf eine Anlage hat.",
  "eq": "brickschema (Python), pySHACL, TopBraid; auch ASHRAE 223P ist mit SHACL definiert.",
  "err": "Nur die RDF-Syntax prüfen und nicht die semantische Stimmigkeit.",
  "rel": [
   "G19",
   "G40"
  ],
  "al": [
   "SHACL",
   "SHACL-Validierung",
   "Shapes Constraint Language",
   "validación SHACL"
  ]
 },
 {
  "id": "G40",
  "slug": "ontologia",
  "t": "Ontologie",
  "en": "Ontología",
  "b": "V",
  "d": "Formales Modell der Begriffe und Beziehungen einer Domäne, damit verschiedene Systeme die Daten des Zwillings gleich interpretieren.",
  "ej": "Brick + IFC + SOSA nutzen, damit Analytik, Instandhaltung und BIM von derselben „Anlage“ sprechen.",
  "eq": "Brick, RealEstateCore, ifcOWL, SSN/SOSA, ASHRAE 223P; DTDL als Modellierungssprache.",
  "err": "Für jedes Projekt eine eigene Ontologie erfinden, statt eine bestehende zu erweitern.",
  "rel": [
   "G19",
   "G21",
   "G22",
   "G25"
  ],
  "al": [
   "Ontologie",
   "Ontologien",
   "ontology",
   "ontología",
   "ontologías"
  ]
 },
 {
  "id": "G41",
  "slug": "traspaso-de-informacion",
  "t": "Informationsübergabe (Handover)",
  "en": "Traspaso de información (handover)",
  "b": "V",
  "d": "Strukturierte Übergabe der Projektinformationen (PIM) an den Eigentümer, um das AIM zu bilden und den Zwilling zu speisen, unter Prüfung der vereinbarten Anforderungen.",
  "ej": "Crossrail übergab TfL im Rahmen des Handovers die Asset-Informationen der Elizabeth line.",
  "eq": "ISO 19650-2/-3; COBie; IDS; britisches „Soft Landings“.",
  "err": "Die Übergabe ans Ende schieben: Die Informationen müssen während des gesamten Baus gesammelt und geprüft werden.",
  "rel": [
   "G08",
   "G09",
   "G17",
   "G18"
  ],
  "al": [
   "Handover",
   "handover",
   "Informationsübergabe",
   "traspaso de información"
  ]
 },
 {
  "id": "G42",
  "slug": "gemelo-digital-urbano",
  "t": "Urbaner digitaler Zwilling",
  "en": "Gemelo digital urbano",
  "b": "I",
  "d": "Zwilling im Stadtmaßstab, der 3D-Modell, Geodaten, Sensoren und Simulationen für Stadtplanung und -management zusammenführt.",
  "ej": "Virtual Singapore (NRF, seit 2014) oder der digitale Zwilling der Stadt Madrid.",
  "eq": "CityGML 3.0, 3D Tiles/Cesium, Dassault 3DEXPERIENCE (Virtual Singapore), Esri.",
  "err": "Einen 3D-Stadtviewer ohne dynamische Daten oder Simulation mit einem Zwilling gleichsetzen.",
  "rel": [
   "G24",
   "G28",
   "G06"
  ],
  "al": [
   "urbaner digitaler Zwilling",
   "urbanen digitalen Zwilling",
   "urbaner Zwilling",
   "urbanen Zwilling",
   "Stadtzwilling",
   "urban digital twin",
   "gemelo urbano",
   "gemelo digital urbano",
   "gemelo de ciudad"
  ]
 },
 {
  "id": "G43",
  "slug": "fidelidad",
  "t": "Genauigkeit (Fidelity)",
  "en": "Fidelidad",
  "b": "I",
  "d": "Grad an Detail und Exaktheit, mit dem der Zwilling das Asset abbildet (Geometrie, Daten und Verhalten); er muss für den Anwendungsfall ausreichen.",
  "ej": "Für das Belegungsmanagement genügt ein Raummodell; für SHM braucht es ein kalibriertes Tragwerksmodell.",
  "eq": "Arups Kennzahl „Fidelity“; „fidelity“ in der Definition des DTC; Level of Information Need (ISO 7817-1).",
  "err": "Maximale geometrische Genauigkeit anstreben, wenn der Wert in den Daten liegt.",
  "rel": [
   "G05",
   "G01",
   "G37"
  ],
  "al": [
   "Fidelity",
   "fidelity",
   "Wiedergabetreue",
   "Modellgenauigkeit",
   "fidelidad"
  ]
 }
];
