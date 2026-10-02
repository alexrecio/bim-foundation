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
  "d": "Punto que materializa en el modelo el origen del sistema de coordenadas real o compartido. Define la traslación (y con el norte, la rotación) entre el sistema local y el sistema topográfico.",
  "ej": "Coincidente con una base de replanteo con coordenadas ETRS89 / UTM 30N conocidas.",
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
 }
];
