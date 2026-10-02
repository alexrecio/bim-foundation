// Glosario de la serie. GENERADO por herramientas/glosario_desde_xlsx.py: no editar a mano.
// id · slug · t término · en inglés · b bloque · d definición · ej ejemplo (España) · eq equivalentes por programa
// err error típico · rel relacionados · al alias (cómo aparece en el texto)
window.BF_GLOSARIO = [
 {
  "id": "C01",
  "slug": "georreferenciacion",
  "t": "Georreferenciación",
  "en": "Georeferencing",
  "b": "I",
  "d": "Proceso de vincular el sistema local de un modelo o dibujo con un sistema de referencia terrestre conocido, de forma que cada punto del modelo tenga coordenadas reales (E, N, H) inequívocas.",
  "ej": "Modelo de un edificio en Madrid expresado en ETRS89 / UTM 30N (EPSG:25830) con alturas sobre el nivel medio del mar en Alicante.",
  "eq": "Revit: coordenadas compartidas; Archicad/Allplan/Vectorworks: Survey Point; Tekla: base point; Bentley: GCS; IFC: IfcMapConversion + IfcProjectedCRS.",
  "err": "Creer que poner latitud/longitud en el emplazamiento equivale a georreferenciar; eso solo sitúa el proyecto de forma aproximada.",
  "rel": [
   "C02",
   "C13",
   "C19",
   "C20",
   "C22"
  ],
  "al": [
   "georreferenciación",
   "georreferenciar",
   "georreferenciado",
   "georeferencing"
  ]
 },
 {
  "id": "C02",
  "slug": "sistema-de-referencia-de-coordenadas",
  "t": "Sistema de referencia de coordenadas (SRC / CRS)",
  "en": "Coordinate Reference System (CRS)",
  "b": "I",
  "d": "Conjunto formado por un datum (cómo se ancla a la Tierra) y un sistema de coordenadas (geográficas, proyectadas o verticales) que permite expresar posiciones sin ambigüedad.",
  "ej": "ETRS89 / UTM 30N (EPSG:25830) para la planimetría + Alicante height (EPSG:5782) para la altimetría; juntos forman un CRS compuesto.",
  "eq": "Civil 3D: zona de coordenadas (GEOCSASSIGN); Bentley: GCS; ArcGIS/QGIS: SRC; IFC: IfcProjectedCRS / IfcGeographicCRS.",
  "err": "Indicar solo 'UTM 30' sin el datum: ED50 y ETRS89 en UTM 30 difieren unos 200 m en España.",
  "rel": [
   "C03",
   "C04",
   "C05",
   "C07"
  ],
  "al": [
   "sistema de referencia",
   "CRS",
   "SRC",
   "sistema de coordenadas"
  ]
 },
 {
  "id": "C03",
  "slug": "datum-geodesico",
  "t": "Datum geodésico",
  "en": "Geodetic datum",
  "b": "I",
  "d": "Modelo matemático (elipsoide + orientación y origen) que fija cómo se relacionan las coordenadas con la Tierra real. Cambiar de datum mueve las coordenadas aunque el punto físico sea el mismo.",
  "ej": "Oficial en Península y Baleares: ETRS89 (elipsoide GRS80); Canarias: REGCAN95; histórico: ED50 (elipsoide Internacional 1924). WGS84 es el del GPS. Sin época es ambiguo: se separa de ETRS89 unos 2,5 cm al año por la deriva de la placa euroasiática, y hoy la diferencia es de decenas de centímetros.",
  "eq": "Se elige al definir el CRS: Civil 3D, Bentley GCS, IfcProjectedCRS.GeodeticDatum.",
  "err": "Mezclar cartografía antigua en ED50 con levantamientos GNSS en ETRS89 sin transformar (desfases de ~150-230 m).",
  "rel": [
   "C02",
   "C16",
   "C33"
  ],
  "al": [
   "datum",
   "datum geodésico"
  ]
 },
 {
  "id": "C04",
  "slug": "codigo-epsg-wkt",
  "t": "Código EPSG / WKT",
  "en": "EPSG code / Well-Known Text",
  "b": "II",
  "d": "Identificador numérico del registro EPSG (IOGP) que define de forma unívoca un CRS, datum o transformación. WKT (ISO 19162) es la alternativa textual que describe completamente el CRS.",
  "ej": "EPSG:25829, 25830, 25831 (ETRS89 / UTM 29N, 30N, 31N); EPSG:4083 y 4082 (REGCAN95 / UTM 28N y 27N); EPSG:5782 (altitudes Alicante).",
  "eq": "Revit (exportador IFC): campo EPSG; Civil 3D: GEOCSASSIGN acepta códigos EPSG; IFC: IfcProjectedCRS.Name = 'EPSG:25830'; IFC4.3: IfcWellKnownText.",
  "err": "Escribir el nombre del sistema sin código, usar un código de otro datum (23030 es ED50 / UTM 30N) o uno con otro orden de ejes (3042 es ETRS89 / UTM 30N en orden Norte-Este).",
  "rel": [
   "C02",
   "C20"
  ],
  "al": [
   "EPSG",
   "código EPSG",
   "WKT"
  ]
 },
 {
  "id": "C05",
  "slug": "proyeccion-cartografica-utm-huso",
  "t": "Proyección cartográfica / UTM / huso",
  "en": "Map projection / UTM / zone",
  "b": "I",
  "d": "Transformación matemática que pasa de coordenadas geográficas (latitud, longitud) a un plano (Este, Norte). UTM divide la Tierra en husos de 6° con un factor de escala de 0,9996 en el meridiano central.",
  "ej": "España peninsular usa los husos 29, 30 y 31; Canarias, 27 y 28. Un proyecto se mantiene en un único huso aunque esté cerca del límite.",
  "eq": "Parámetro del CRS en todos los programas; IFC: IfcProjectedCRS.MapProjection y MapZone.",
  "err": "Cambiar de huso dentro de un mismo proyecto o confundir el huso de Canarias.",
  "rel": [
   "C02",
   "C08",
   "C10"
  ],
  "al": [
   "proyección",
   "UTM",
   "huso",
   "Mercator"
  ]
 },
 {
  "id": "C06",
  "slug": "coordenadas-locales-de-obra-vs-coordenadas-proyectadas",
  "t": "Coordenadas locales de obra vs. coordenadas proyectadas",
  "en": "Local site coordinates vs projected coordinates",
  "b": "I",
  "d": "Las locales tienen un origen y una orientación cómodos para la obra y miden 'a cinta métrica'; las proyectadas (p. ej. UTM) son números grandes y llevan la deformación de la proyección. Un sistema local de baja distorsión (LDP) es una proyección diseñada para que la escala sea ~1 en la obra.",
  "ej": "Proyecto pequeño (≤100 m) en coordenadas locales con dos o más puntos de enlace a UTM. Para obra lineal larga, UTM con factor de escala gestionado o una LDP: Deutsche Bahn bajó a menos de 5 ppm en 6.326 estaciones (Clemen y Romanschek, ISPRS 2025).",
  "eq": "Revit: punto base vs punto de reconocimiento; Tekla: base points; Trimble/Leica: calibración local de obra (site calibration).",
  "err": "Modelar en coordenadas UTM reales dentro del programa BIM (pérdida de precisión) en lugar de modelar en local y transformar.",
  "rel": [
   "C08",
   "C12",
   "C13",
   "C15",
   "C27"
  ],
  "al": [
   "coordenadas locales",
   "coordenadas proyectadas",
   "sistema local"
  ]
 },
 {
  "id": "C07",
  "slug": "alturas-elipsoidal-ortometrica-geoide",
  "t": "Alturas: elipsoidal, ortométrica, geoide",
  "en": "Ellipsoidal height, orthometric height, geoid, vertical datum",
  "b": "I",
  "d": "La altura elipsoidal (h) la da el GNSS respecto al elipsoide; la ortométrica (H) es la 'altitud sobre el nivel del mar' respecto al geoide. Se relacionan mediante la ondulación del geoide: N = h − H. El datum vertical define el cero de alturas.",
  "ej": "En España, H referida al nivel medio del mar en Alicante (red REDNAP); el IGN publica el geoide EGM08-REDNAP (~3,8 cm de precisión). En Canarias cada isla tiene su referencia.",
  "eq": "Revit: cota del punto de reconocimiento; IFC: IfcMapConversion.OrthogonalHeight e IfcProjectedCRS.VerticalDatum.",
  "err": "Dar al modelo alturas elipsoidales de un GNSS como si fueran cotas (errores de ~50 m en la Península).",
  "rel": [
   "C03",
   "C27",
   "C33"
  ],
  "al": [
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
  "t": "Factor de escala / coeficiente de anamorfosis (K)",
  "en": "Scale factor (grid, elevation, combined) / grid vs ground",
  "b": "I",
  "d": "La distancia medida en el terreno no coincide con la distancia en la cuadrícula UTM. El factor de cuadrícula depende de la posición en el huso; el de elevación, de la altura sobre el elipsoide; el combinado es su producto. Hay que decidir si se modela 'en terreno' o 'en cuadrícula'.",
  "ej": "Diferencias típicas de 100 a 400 ppm en España: 1 a 4 cm cada 100 m. La Nota de Servicio 03/2024 de carreteras exige indicar en la topografía el coeficiente de anamorfosis (K) y la convergencia (W).",
  "eq": "Civil 3D: Grid Scale Factor (Transformation); IFC: IfcMapConversion.Scale (unidades) e IfcMapConversionScaled (IFC4.3, FactorX/Y/Z); Trimble/Leica: calibración. Revit: no lo gestiona (decisión de BEP).",
  "err": "Confundir los dos usos de IfcMapConversion.Scale: la guía bSI 2020, OSArch y Bonsai lo usan como factor combinado, mientras que IFC 4.3 ADD2 lo reserva a la conversión de unidades y pasa el factor de cuadrícula a IfcMapConversionScaled. También es un error ignorar el factor en obras lineales largas.",
  "rel": [
   "C05",
   "C06",
   "C19",
   "C25"
  ],
  "al": [
   "factor de escala",
   "anamorfosis",
   "factor combinado"
  ]
 },
 {
  "id": "C09",
  "slug": "nortes-verdadero-de-cuadricula-magnetico-de-proyecto",
  "t": "Nortes: verdadero, de cuadrícula, magnético, de proyecto",
  "en": "True north, grid north, magnetic north, project north",
  "b": "I",
  "d": "Norte verdadero (geográfico): hacia el polo. Norte de cuadrícula: eje N de la proyección (UTM). Norte magnético: el de la brújula. Norte de proyecto: dirección 'arriba' del modelo, alineada con los ejes del edificio para trabajar cómodo.",
  "ej": "En España la diferencia entre norte verdadero y de cuadrícula UTM (convergencia) puede superar 2° en los bordes de huso.",
  "eq": "Revit: Norte de proyecto / Norte verdadero; Archicad: Project North; Tekla: angle to North; IFC: TrueNorth y rotación de IfcMapConversion (respecto al norte de cuadrícula).",
  "err": "Introducir como 'ángulo al norte verdadero' el ángulo respecto a la cuadrícula UTM sin advertirlo, o al revés.",
  "rel": [
   "C10",
   "C21"
  ],
  "al": [
   "norte verdadero",
   "norte de cuadrícula",
   "norte magnético",
   "norte de proyecto"
  ]
 },
 {
  "id": "C10",
  "slug": "convergencia-de-meridianos",
  "t": "Convergencia de meridianos (W) / ángulo de rotación",
  "en": "Grid convergence / rotation angle",
  "b": "I",
  "d": "Ángulo entre el norte verdadero y el norte de cuadrícula en un punto. En BIM, el ángulo de rotación de la transformación local→mundo debe indicar respecto a qué norte se mide y con qué sentido de giro.",
  "ej": "Cero en el meridiano central del huso (3°W para el huso 30) y creciente hacia los bordes.",
  "eq": "Revit: ángulo medido en sentido horario; Archicad: antihorario desde +X; IFC: XAxisAbscissa / XAxisOrdinate (antihorario desde Este).",
  "err": "Mezclar convenios de giro entre programas (Revit vs Archicad) y obtener un modelo girado.",
  "rel": [
   "C09",
   "C19"
  ],
  "al": [
   "convergencia",
   "convergencia de meridianos"
  ]
 },
 {
  "id": "C11",
  "slug": "origen-interno",
  "t": "Origen interno",
  "en": "Internal origin / model origin",
  "b": "III",
  "d": "Punto 0,0,0 fijo del motor geométrico del programa, al que se refieren todas las coordenadas internas. No se mueve; la geometría debe modelarse cerca de él.",
  "ej": "En Revit es visible desde la versión 2020.2.",
  "eq": "Revit: Origen interno; Archicad: Project Origin; Tekla: model origin; Allplan: punto 0,0,0 global; Vectorworks: Internal Origin; BricsCAD: WCS 0,0,0; Bonsai/IFC: origen local.",
  "err": "Importar un DWG en UTM 'origen a origen': la geometría queda a kilómetros del origen interno.",
  "rel": [
   "C12",
   "C13",
   "C15"
  ],
  "al": [
   "origen interno"
  ]
 },
 {
  "id": "C12",
  "slug": "punto-base-del-proyecto",
  "t": "Punto base del proyecto (y equivalentes)",
  "en": "Project base point",
  "b": "III",
  "d": "Referencia local del proyecto, normalmente en una esquina o intersección de ejes, que sirve para acotar y replantear en coordenadas del edificio. No es el vínculo con el mundo real.",
  "ej": "Intersección de los ejes A-1 de una estructura.",
  "eq": "Revit: Punto base del proyecto; Tekla: project base point; Allplan 2026: Base Point; Vectorworks: User Origin; BricsCAD: Project Location; IFC: placement de IfcSite/IfcBuilding.",
  "err": "Mover el punto base creyendo que así se georreferencia el modelo.",
  "rel": [
   "C11",
   "C13",
   "C14"
  ],
  "al": [
   "punto base"
  ]
 },
 {
  "id": "C13",
  "slug": "punto-de-reconocimiento-survey-point",
  "t": "Punto de reconocimiento / Survey Point (y equivalentes)",
  "en": "Survey point",
  "b": "III",
  "d": "Marca que muestra coordenadas del sistema compartido o topográfico. Con clip está en el origen de ese sistema y moverla recoloca el sistema respecto al modelo; sin clip se lleva a un punto conocido (una base de replanteo) sin cambiar nada, solo para leer o comprobar coordenadas.",
  "ej": "Sin clip, colocada sobre una base de replanteo con coordenadas ETRS89 / UTM 30N conocidas para comprobar que el modelo las lee bien.",
  "eq": "Revit: Punto de reconocimiento (con o sin clip); Archicad (AC25+): Survey Point; Allplan 2026 y Vectorworks: Survey Point; BricsCAD: Survey Location; Tekla: base point con E/N; IFC: IfcMapConversion.",
  "err": "Mover el punto con clip cuando se quería sin clip (o al revés), desplazando todo el sistema compartido.",
  "rel": [
   "C11",
   "C12",
   "C14",
   "C19"
  ],
  "al": [
   "Survey Point",
   "punto de reconocimiento"
  ]
 },
 {
  "id": "C14",
  "slug": "coordenadas-compartidas",
  "t": "Coordenadas compartidas (adquirir / publicar)",
  "en": "Shared coordinates (acquire / publish)",
  "b": "III",
  "d": "Mecanismo por el que varios modelos vinculados usan el mismo sistema de coordenadas. Se adquiere el sistema de otro modelo o se publica el propio en él; los emplazamientos con nombre permiten varias posiciones de un mismo modelo.",
  "ej": "Modelo maestro de emplazamiento que adquiere del topográfico y publica a arquitectura, estructura e instalaciones.",
  "eq": "Revit: Adquirir/Publicar coordenadas, Emplazamiento compartido, Reubicar proyecto, Resetear coordenadas compartidas; ACC: solo adquirir en cloud worksharing; otros programas: misma lógica con su Survey Point.",
  "err": "Confundir 'estar en las mismas coordenadas' con 'compartir coordenadas'; usar Publicar con un DWG.",
  "rel": [
   "C13",
   "C17",
   "C30"
  ],
  "al": [
   "coordenadas compartidas",
   "adquirir coordenadas",
   "publicar coordenadas"
  ]
 },
 {
  "id": "C15",
  "slug": "precision-en-coma-flotante-y-modelos-lejos-del-origen",
  "t": "Precisión en coma flotante y modelos lejos del origen",
  "en": "Floating-point precision / large coordinates / false origin",
  "b": "I",
  "d": "Los motores gráficos guardan coordenadas con un número limitado de cifras significativas: lejos del origen se pierde precisión, la geometría 'baila' y aparecen errores. Por eso se modela cerca del origen y se aplica una transformación (false origin).",
  "ej": "Revit limita la geometría a 16 km (10 millas) del origen interno; Bonsai avisa de errores milimétricos a partir de unos 5 km.",
  "eq": "Revit: límite de distancia; Bonsai: False Origin; Navisworks/Solibri: parpadeo con coordenadas grandes; Bentley: Global Origin.",
  "err": "Modelar directamente en coordenadas UTM (400000, 4400000) dentro del programa BIM.",
  "rel": [
   "C06",
   "C11",
   "C26"
  ],
  "al": [
   "coma flotante",
   "precisión simple",
   "float32",
   "float64",
   "false origin"
  ]
 },
 {
  "id": "C16",
  "slug": "transformacion-de-coordenadas",
  "t": "Transformación de coordenadas",
  "en": "Coordinate transformation (Helmert, datum shift, NTv2)",
  "b": "I",
  "d": "Operación que convierte coordenadas de un sistema a otro: de local a proyectado (traslación + rotación + escala, tipo Helmert 2D/3D) o entre datums (p. ej. ED50→ETRS89 mediante la rejilla NTv2 del IGN).",
  "ej": "Rejillas NTv2: PENR2009 y BALR2009 del IGN (pocos cm), SPED2ETV2 del registro EPSG (EPSG:15932, 0,1-0,2 m) y la del ICGC en Cataluña (EPSG:5661). Conviene comprobar cuál usa cada programa.",
  "eq": "IFC: IfcMapConversion (local→proyectado); CloudCompare: Global Shift; FME/PROJ/QGIS: reproyección; Civil 3D: transformaciones del catálogo.",
  "err": "Aplicar rotación y traslación en orden inverso (primero se traslada y después se rota en el flujo de Modelical con nubes).",
  "rel": [
   "C03",
   "C19",
   "C26"
  ],
  "al": [
   "transformación",
   "Helmert",
   "NTv2"
  ]
 },
 {
  "id": "C17",
  "slug": "federacion-y-alineacion-de-modelos",
  "t": "Federación y alineación de modelos",
  "en": "Model federation and alignment",
  "b": "IV",
  "d": "Combinar modelos de distintas disciplinas y programas en un visor común para coordinarlos (detección de interferencias, revisión). Funciona solo si todos comparten el mismo sistema de coordenadas.",
  "ej": "Modelos de arquitectura (Archicad), estructura (Tekla) e instalaciones (Revit) federados en Navisworks o BIMcollab.",
  "eq": "Navisworks: Units and Transform; ACC: Transform; BIMcollab Zoom: IFC Global Origin / Use georeferencing; Solibri; Trimble Connect; Dalux.",
  "err": "Usar el Transform del visor como solución permanente en lugar de corregir el origen en el modelo fuente.",
  "rel": [
   "C14",
   "C24",
   "C30",
   "C32"
  ],
  "al": [
   "federación",
   "federar",
   "federado"
  ]
 },
 {
  "id": "C18",
  "slug": "ifcsite",
  "t": "IfcSite (latitud, longitud, elevación)",
  "en": "IfcSite RefLatitude / RefLongitude / RefElevation",
  "b": "II",
  "d": "Atributos del emplazamiento IFC que dan una posición aproximada en WGS84 (grados, minutos, segundos) y una elevación. Son informativos: no definen una transformación precisa.",
  "ej": "Latitud 40°25'N, longitud 3°42'W para un proyecto en Madrid.",
  "eq": "Revit: ubicación del proyecto (mapa); Archicad: Project Location; todos los exportadores IFC.",
  "err": "Tomar la lat/long de IfcSite como georreferenciación precisa, o tenerlos a 0 (frecuente según TU Delft).",
  "rel": [
   "C19",
   "C22",
   "C29"
  ],
  "al": [
   "IfcSite",
   "RefLatitude"
  ]
 },
 {
  "id": "C19",
  "slug": "ifcmapconversion",
  "t": "IfcMapConversion (y IfcMapConversionScaled, IfcRigidOperation)",
  "en": "IfcMapConversion",
  "b": "II",
  "d": "Entidad IFC (desde IFC4) que define la transformación del sistema local del modelo al CRS de mapa: Eastings, Northings, OrthogonalHeight, rotación (XAxisAbscissa/Ordinate) y escala. IFC4.3 añade IfcMapConversionScaled (FactorX/Y/Z) e IfcRigidOperation (solo traslación).",
  "ej": "IFCMAPCONVERSION(#ctx,#crs,440125.250,4474310.800,655.320,0.9993908,0.0348995,1.) para EPSG:25830.",
  "eq": "Revit (IFC4 con EPSG), Archicad (Survey Point and Project Origin), Tekla (opción IfcMapConversion), Vectorworks, Bonsai, Allplan; en IFC2x3 se emula con ePSet_MapConversion.",
  "err": "Doble desplazamiento: coordenadas a la vez en IfcMapConversion y en el placement de IfcSite.",
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
   "IfcRigidOperation"
  ]
 },
 {
  "id": "C20",
  "slug": "ifcprojectedcrs-ifcgeographiccrs",
  "t": "IfcProjectedCRS / IfcGeographicCRS",
  "en": "IfcProjectedCRS / IfcCoordinateReferenceSystem",
  "b": "II",
  "d": "Entidad IFC que identifica el CRS de destino de IfcMapConversion: nombre (código EPSG), datum geodésico, datum vertical, proyección, zona y unidades. En IFC4.3 el CRS debe llevar un EPSG o un WKT.",
  "ej": "Name 'EPSG:25830', GeodeticDatum 'EPSG:6258' (ETRS89), VerticalDatum referido a Alicante, MapZone '30N'.",
  "eq": "Campo EPSG del exportador IFC de Revit, Archicad, Vectorworks, Bonsai; IFC2x3: ePSet_ProjectedCRS.",
  "err": "Dejar el nombre vacío o con un texto libre que los visores no interpretan.",
  "rel": [
   "C04",
   "C19"
  ],
  "al": [
   "IfcProjectedCRS",
   "IfcGeographicCRS"
  ]
 },
 {
  "id": "C21",
  "slug": "contexto-geometrico-worldcoordinatesystem-y-truenorth",
  "t": "Contexto geométrico: WorldCoordinateSystem y TrueNorth",
  "en": "IfcGeometricRepresentationContext / WorldCoordinateSystem / TrueNorth",
  "b": "II",
  "d": "Contexto de representación del proyecto IFC que contiene el sistema de coordenadas de mundo y la dirección del norte verdadero. Si existe IfcMapConversion, TrueNorth es solo informativo.",
  "ej": "TrueNorth girado 12° respecto al eje Y del modelo.",
  "eq": "Revit 'Coordinate Base' con variantes 'oriented in True North'; todos los exportadores.",
  "err": "TrueNorth incoherente con la rotación de IfcMapConversion.",
  "rel": [
   "C09",
   "C19",
   "C22"
  ],
  "al": [
   "TrueNorth",
   "WorldCoordinateSystem"
  ]
 },
 {
  "id": "C22",
  "slug": "logeoref-y-validacion-de-georreferenciacion-ifc",
  "t": "LoGeoRef y validación de georreferenciación IFC",
  "en": "Level of Georeferencing (LoGeoRef)",
  "b": "II",
  "d": "Clasificación (HTW Dresden) de cómo de completa es la georreferenciación de un IFC: 10 dirección postal, 20 lat/long en IfcSite, 30 placement del elemento superior, 40 WorldCoordinateSystem + TrueNorth, 50 IfcMapConversion + IfcProjectedCRS (recomendado).",
  "ej": "Exigir LoGeoRef 50 en el BEP y comprobarlo con IfcGeoRefChecker, IfcGref o IDS.",
  "eq": "IfcGeoRefChecker, IfcGref (TU Delft), Bonsai, validadores IDS, BIM Fit Check (buildingSMART Alemania).",
  "err": "Dar por válido un IFC que solo tiene LoGeoRef 20 (lat/long).",
  "rel": [
   "C18",
   "C19",
   "C20",
   "C21",
   "C32"
  ],
  "al": [
   "LoGeoRef"
  ]
 },
 {
  "id": "C23",
  "slug": "ifc-4-3-para-infraestructura-alineaciones-y-pk",
  "t": "IFC 4.3 para infraestructura: alineaciones y PK",
  "en": "IFC 4.3 alignment / linear referencing",
  "b": "II",
  "d": "IFC 4.3 (ISO 16739-1:2024) incorpora carreteras, ferrocarriles, puentes y puertos, con alineaciones (planta, alzado, peralte) y referenciación lineal (PK / estacionamiento) además de nuevas entidades de georreferenciación.",
  "ej": "Tronco de autovía con PK 0+000 a 12+500 georreferenciado en EPSG:25830.",
  "eq": "Civil 3D, OpenRoads/OpenRail, Istram, Allplan Civil, Bonsai.",
  "err": "Exportar obra lineal en IFC4 genérico perdiendo la alineación y el PK.",
  "rel": [
   "C19",
   "C25",
   "C27"
  ],
  "al": [
   "IFC 4.3",
   "IFC4.3",
   "alineación"
  ]
 },
 {
  "id": "C24",
  "slug": "exportacion-importacion-ifc-con-coordenadas",
  "t": "Exportación/importación IFC con coordenadas",
  "en": "IFC export/import coordinate settings",
  "b": "V",
  "d": "Configuración del exportador/importador IFC de cada programa que decide qué origen se escribe (interno, punto base, survey point, compartidas) y si se generan IfcMapConversion/IfcProjectedCRS o property sets en IFC2x3.",
  "ej": "Revit: Coordinate Base = Shared Coordinates + EPSG en IFC4; Archicad: Survey Point and Project Origin; Tekla: IfcMapConversion o IfcSite.",
  "eq": "Revit IFC exporter (6 opciones de Coordinate Base); Archicad translators; Tekla IFC export; Vectorworks; Allplan; CYPE; BricsCAD.",
  "err": "Mezclar IFC exportados con distintos criterios en el mismo visor.",
  "rel": [
   "C19",
   "C20",
   "C17"
  ],
  "al": [
   "exportación IFC",
   "exportar IFC",
   "exportador IFC"
  ]
 },
 {
  "id": "C25",
  "slug": "estrategia-de-coordenadas-en-eir-bep",
  "t": "Estrategia de coordenadas en EIR/BEP (ISO 19650)",
  "en": "Coordinate strategy in EIR/BEP",
  "b": "II",
  "d": "Acuerdo documentado en los requisitos de información (EIR) y el plan de ejecución BIM (BEP) que fija CRS, datum vertical, puntos de control, rotación, unidades, factor de escala, responsable del modelo de emplazamiento y forma de exportar.",
  "ej": "La guía es.BIM pide un 'punto base de coordinación del proyecto' georreferenciado en X, Y, Z, fuera del edificio y con coordenadas positivas, y al menos dos puntos documentados. ETS (Euskadi, 2024) fija ETRS89 (ETRF2000, época 2017.0), UTM 30 y geoide EGM08-REDNAP.",
  "eq": "Independiente del software; se aplica en cada programa con su Survey Point equivalente.",
  "err": "No acordarlo al inicio y descubrir el desfase en la primera federación.",
  "rel": [
   "C01",
   "C08",
   "C13",
   "C32"
  ],
  "al": [
   "BEP",
   "EIR",
   "ISO 19650"
  ]
 },
 {
  "id": "C26",
  "slug": "nubes-de-puntos-georreferenciadas",
  "t": "Nubes de puntos georreferenciadas",
  "en": "Georeferenced point clouds",
  "b": "III",
  "d": "Escaneos láser o fotogramétricos registrados en un sistema de coordenadas real. Por sus coordenadas grandes, suelen necesitar un desplazamiento global antes de entrar en el programa BIM.",
  "ej": "Flujo ReCap → Dynamo → CloudCompare (Global Shift) → ReCap → Revit origen a origen (Modelical).",
  "eq": "ReCap, CloudCompare (Global Shift), Trimble RealWorks, Leica Cyclone; en Revit, inserción origen a origen o por coordenadas compartidas.",
  "err": "'Baile de puntos' al insertar una nube en UTM sin desplazamiento.",
  "rel": [
   "C15",
   "C16",
   "C27"
  ],
  "al": [
   "nube de puntos",
   "nubes de puntos"
  ]
 },
 {
  "id": "C27",
  "slug": "topografia-replanteo-y-gnss",
  "t": "Topografía, replanteo y GNSS",
  "en": "Surveying, setting out and GNSS",
  "b": "I",
  "d": "Trabajos de campo que miden el terreno y materializan el proyecto en obra. Requieren bases de replanteo con coordenadas conocidas y una calibración que relacione el sistema de obra con el GNSS.",
  "ej": "Red de bases de replanteo enlazada a la red ERGNSS/REGENTE del IGN.",
  "eq": "Trimble Business Center/Siteworks, Leica Infinity/Captivate (calibración de obra), Civil 3D, Istram, TcpMDT.",
  "err": "Replantear con coordenadas de un modelo que no compartía el sistema del topógrafo.",
  "rel": [
   "C06",
   "C07",
   "C08",
   "C26"
  ],
  "al": [
   "topografía",
   "replanteo",
   "GNSS",
   "estación total"
  ]
 },
 {
  "id": "C28",
  "slug": "integracion-bim-gis",
  "t": "Integración BIM-GIS",
  "en": "BIM-GIS integration (GeoBIM)",
  "b": "IV",
  "d": "Uso conjunto de modelos BIM y datos geoespaciales (cartografía, ciudad 3D) en un mismo entorno, para lo que el BIM debe estar bien georreferenciado y en el CRS correcto.",
  "ej": "Modelo IFC del proyecto cargado sobre la cartografía del IGN o un CityGML municipal.",
  "eq": "ArcGIS GeoBIM / ArcGIS Pro, QGIS, FME, Cesium (3D Tiles), Autodesk Forma, Bentley iTwin.",
  "err": "Llevar a GIS un IFC sin IfcMapConversion: aparece en el océano frente a Ghana (0,0).",
  "rel": [
   "C02",
   "C19",
   "C29"
  ],
  "al": [
   "BIM-GIS",
   "GIS",
   "GeoBIM"
  ]
 },
 {
  "id": "C29",
  "slug": "geolocalizacion-ubicacion-del-proyecto",
  "t": "Geolocalización / ubicación del proyecto",
  "en": "Project location / geolocation",
  "b": "III",
  "d": "Posición aproximada del proyecto (dirección o lat/long) usada para soleamiento, clima o contexto de mapa. No sustituye a las coordenadas compartidas.",
  "ej": "Ubicación por dirección postal en Revit o Forma para estudios solares.",
  "eq": "Revit: Ubicación (mapa de Internet); Archicad: Project Location; Forma; IfcSite lat/long; IfcPostalAddress.",
  "err": "Pensar que geolocalizar en el mapa ya deja el modelo en coordenadas UTM correctas.",
  "rel": [
   "C18",
   "C28"
  ],
  "al": [
   "geolocalización",
   "ubicación del proyecto"
  ]
 },
 {
  "id": "C30",
  "slug": "coordinacion-en-la-nube",
  "t": "Coordinación en la nube (CDE)",
  "en": "Cloud coordination / CDE",
  "b": "IV",
  "d": "Entornos de datos comunes (ACC/BIM 360, Trimble Connect, Bentley iTwin, Dalux, BIMcollab Cloud, usBIM) donde se comparten y federan modelos; cada uno tiene reglas propias sobre coordenadas y transformaciones.",
  "ej": "En ACC con cloud worksharing, Publicar puede estar desactivado y solo se puede adquirir del maestro.",
  "eq": "ACC Model Coordination (Transform), Trimble Connect, iTwin (geolocalización linear/projected), Dalux, usBIM.",
  "err": "Transformar el modelo solo en la nube y olvidar que el original sigue desplazado.",
  "rel": [
   "C14",
   "C17"
  ],
  "al": [
   "CDE",
   "entorno común de datos"
  ]
 },
 {
  "id": "C31",
  "slug": "sistemas-de-coordenadas-cad",
  "t": "Sistemas de coordenadas CAD (SCU/SCP, DWG, DGN)",
  "en": "CAD coordinate systems (WCS/UCS, DWG, DGN GCS, global origin)",
  "b": "III",
  "d": "En CAD la geometría se dibuja directamente en coordenadas (SCU/WCS) y el SCP/UCS es un sistema auxiliar. Los DGN de Bentley añaden GCS y Global Origin.",
  "ej": "Plano topográfico DWG en UTM 30N con un SCP girado que confunde al vincularlo.",
  "eq": "AutoCAD/Civil 3D: SCU/SCP, GEOGRAPHICLOCATION; MicroStation: GCS, Global Origin, ACS; BricsCAD.",
  "err": "Vincular un DWG con SCP adicionales sin revisarlos.",
  "rel": [
   "C02",
   "C11",
   "C14"
  ],
  "al": [
   "SCU",
   "SCP",
   "DWG",
   "DGN"
  ]
 },
 {
  "id": "C32",
  "slug": "errores-comunes-y-control-de-calidad-de-coordenadas",
  "t": "Errores comunes y control de calidad de coordenadas",
  "en": "Coordinate QA/QC checklists",
  "b": "V",
  "d": "Comprobaciones sistemáticas para detectar desplazamientos, giros y errores de cota: objetos testigo en puntos de control, verificación en visor neutro, chequeo de LoGeoRef y comparación de coordenadas de puntos conocidos.",
  "ej": "Cubo de 1 m³ o 'Punto Base' físico (manual ETS del Gobierno Vasco) en cada punto de control.",
  "eq": "Navisworks, Solibri, BIMcollab, IfcGeoRefChecker, IfcGref, Bonsai, IDS.",
  "err": "Validar solo visualmente en el programa de origen.",
  "rel": [
   "C17",
   "C22",
   "C25"
  ],
  "al": [
   "control de calidad",
   "QA/QC"
  ]
 },
 {
  "id": "C33",
  "slug": "marco-geodesico-y-legal-espanol",
  "t": "Marco geodésico y legal español",
  "en": "Spanish geodetic and legal framework",
  "b": "I",
  "d": "El RD 1071/2007 fija ETRS89 (Península y Baleares) y REGCAN95 (Canarias) como sistemas oficiales, la proyección UTM y las altitudes referidas al nivel medio del mar en Alicante. El IGN mantiene las redes REGENTE, REDNAP y ERGNSS.",
  "ej": "Proyecto público en España: EPSG:25830 + altitudes REDNAP (EPSG:5782). La Orden PCM/818/2023 y el Plan BIM del IGN piden modelos as-built en IFC 4.3 referidos al sistema geodésico oficial.",
  "eq": "Afecta a la elección de CRS en todos los programas.",
  "err": "Seguir usando ED50 en encargos nuevos o mezclar sistemas de Canarias y Península.",
  "rel": [
   "C02",
   "C03",
   "C04",
   "C07"
  ],
  "al": [
   "ETRS89",
   "REGCAN95",
   "RD 1071/2007"
  ]
 },
 {
  "id": "C34",
  "slug": "unidades-y-conversion",
  "t": "Unidades y conversión",
  "en": "Units and unit conversion",
  "b": "V",
  "d": "Las unidades del modelo (mm, m, pies) y las del CRS (normalmente metros) deben cuadrar; en IFC el campo Scale de IfcMapConversion convierte unidades del modelo a unidades del mapa.",
  "ej": "Modelo en milímetros: Scale = 0,001 si el CRS está en metros.",
  "eq": "Revit (unidades del proyecto; no admite pie topográfico US), IFC Scale/MapUnit, Civil 3D (unidades del dibujo).",
  "err": "Exportar IFC en mm con Scale = 1 y un CRS en metros (error documentado en revit-ifc #784).",
  "rel": [
   "C19",
   "C20"
  ],
  "al": [
   "unidades del modelo",
   "conversión de unidades"
  ]
 },
 {
  "id": "C35",
  "slug": "epoca-de-referencia-y-deriva-continental",
  "t": "Época de referencia y deriva continental",
  "en": "Reference epoch / plate motion / dynamic datum",
  "b": "I",
  "d": "Las placas tectónicas se mueven unos centímetros al año, así que las coordenadas de un punto en un marco global (ITRF, WGS84) cambian con el tiempo. Un datum 'estático' fija las coordenadas en una fecha (época); un datum dinámico las actualiza. Sin indicar la época, unas coordenadas no son comparables al centímetro.",
  "ej": "ETRS89 está ligado a la placa euroasiática y apenas cambia en España, pero se separa de WGS84 unos 2,5 cm/año. El manual de ETS fija ETRF2000 época 2017.0. En Australia (GDA94→GDA2020) el salto fue de unos 1,8 m.",
  "eq": "Trimble Business Center, Leica Infinity, Civil 3D (transformaciones con fecha); IFC: IfcSite lat/long en WGS84 sin época, por eso solo vale al metro.",
  "err": "Mezclar coordenadas GNSS en WGS84/ITRF del día con cartografía ETRS89, o datos MGA94 con MGA2020 en Australia (tubería de gas a 300 mm en el caso de Worrell).",
  "rel": [
   "C03",
   "C16",
   "C27",
   "C18"
  ],
  "al": [
   "época de referencia",
   "deriva continental",
   "ITRF",
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
  "slug": "hito-de-entrega-de-informacion",
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
  "slug": "modelo-de-informacion-del-activo",
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
  "slug": "modelo-de-informacion-del-proyecto",
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
  "slug": "requisitos-de-informacion-del-activo",
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
