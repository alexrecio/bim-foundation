// Glosario (en). GENERADO por herramientas/i18n.mjs desde assets/i18n/en/glosario.json y assets/js/glosario.js: no editar a mano.
window.BF_GLOSARIO = [
 {
  "id": "C01",
  "slug": "georreferenciacion",
  "t": "Georeferencing",
  "en": "Georreferenciación",
  "b": "I",
  "d": "The process of linking the local system of a model or drawing to a known terrestrial reference system, so that every point in the model has unambiguous real-world coordinates (E, N, H).",
  "ej": "A building model in Madrid expressed in ETRS89 / UTM zone 30N (EPSG:25830), with heights above mean sea level at Alicante.",
  "eq": "Revit: shared coordinates; Archicad/Allplan/Vectorworks: Survey Point; Tekla: base point; Bentley: GCS; IFC: IfcMapConversion + IfcProjectedCRS.",
  "err": "Believing that entering latitude/longitude in the project location amounts to georeferencing; that only places the project approximately.",
  "rel": [
   "C02",
   "C13",
   "C19",
   "C20",
   "C22"
  ],
  "al": [
   "georeferencing",
   "georeferenced",
   "georeference",
   "geo-referencing",
   "georreferenciación",
   "georreferenciar",
   "georreferenciado"
  ]
 },
 {
  "id": "C02",
  "slug": "sistema-de-referencia-de-coordenadas",
  "t": "Coordinate Reference System (CRS)",
  "en": "Sistema de referencia de coordenadas (SRC / CRS)",
  "b": "I",
  "d": "The combination of a datum (how it is anchored to the Earth) and a coordinate system (geographic, projected or vertical) that allows positions to be expressed unambiguously.",
  "ej": "ETRS89 / UTM zone 30N (EPSG:25830) for horizontal position + Alicante height (EPSG:5782) for heights; together they form a compound CRS.",
  "eq": "Civil 3D: coordinate system zone (GEOCSASSIGN); Bentley: GCS; ArcGIS/QGIS: CRS; IFC: IfcProjectedCRS / IfcGeographicCRS.",
  "err": "Stating only 'UTM 30' without the datum: ED50 and ETRS89 in UTM zone 30 differ by about 200 m in Spain.",
  "rel": [
   "C03",
   "C04",
   "C05",
   "C07"
  ],
  "al": [
   "coordinate reference system",
   "CRS",
   "reference system",
   "coordinate system",
   "sistema de referencia",
   "SRC",
   "sistema de coordenadas"
  ]
 },
 {
  "id": "C03",
  "slug": "datum-geodesico",
  "t": "Geodetic datum",
  "en": "Datum geodésico",
  "b": "I",
  "d": "A mathematical model (ellipsoid + orientation and origin) that fixes how coordinates relate to the real Earth. Changing the datum moves the coordinates even though the physical point is the same.",
  "ej": "Official on the Iberian Peninsula and the Balearic Islands: ETRS89 (GRS80 ellipsoid); Canary Islands: REGCAN95; historical: ED50 (International 1924 ellipsoid). WGS84 is the GPS datum. Without an epoch it is ambiguous: it drifts away from ETRS89 by about 2.5 cm a year because of the motion of the Eurasian plate, and today the difference is tens of centimetres.",
  "eq": "Chosen when the CRS is defined: Civil 3D, Bentley GCS, IfcProjectedCRS.GeodeticDatum.",
  "err": "Mixing old ED50 mapping with ETRS89 GNSS surveys without transforming them (offsets of ~150-230 m).",
  "rel": [
   "C02",
   "C16",
   "C33"
  ],
  "al": [
   "geodetic datum",
   "datum",
   "datum geodésico"
  ]
 },
 {
  "id": "C04",
  "slug": "codigo-epsg-wkt",
  "t": "EPSG code / Well-Known Text (WKT)",
  "en": "Código EPSG / WKT",
  "b": "II",
  "d": "A numerical identifier from the EPSG registry (IOGP) that uniquely defines a CRS, datum or transformation. WKT (ISO 19162) is the text-based alternative that fully describes the CRS.",
  "ej": "EPSG:25829, 25830, 25831 (ETRS89 / UTM zones 29N, 30N, 31N); EPSG:4083 and 4082 (REGCAN95 / UTM zones 28N and 27N); EPSG:5782 (Alicante heights).",
  "eq": "Revit (IFC exporter): EPSG field; Civil 3D: GEOCSASSIGN accepts EPSG codes; IFC: IfcProjectedCRS.Name = 'EPSG:25830'; IFC4.3: IfcWellKnownText.",
  "err": "Writing the name of the system without a code, using a code from another datum (23030 is ED50 / UTM zone 30N) or one with a different axis order (3042 is ETRS89 / UTM zone 30N in North-East order).",
  "rel": [
   "C02",
   "C20"
  ],
  "al": [
   "EPSG",
   "EPSG code",
   "WKT",
   "Well-Known Text",
   "código EPSG"
  ]
 },
 {
  "id": "C05",
  "slug": "proyeccion-cartografica-utm-huso",
  "t": "Map projection / UTM / zone",
  "en": "Proyección cartográfica / UTM / huso",
  "b": "I",
  "d": "A mathematical transformation from geographic coordinates (latitude, longitude) to a plane (Easting, Northing). UTM divides the Earth into 6° zones with a scale factor of 0.9996 on the central meridian.",
  "ej": "Mainland Spain uses zones 29, 30 and 31; the Canary Islands, 27 and 28. A project stays in a single zone even when it is close to the boundary.",
  "eq": "A CRS parameter in every program; IFC: IfcProjectedCRS.MapProjection and MapZone.",
  "err": "Switching zones within the same project or getting the Canary Islands zone wrong.",
  "rel": [
   "C02",
   "C08",
   "C10"
  ],
  "al": [
   "map projection",
   "projection",
   "UTM",
   "UTM zone",
   "Mercator",
   "proyección",
   "huso"
  ]
 },
 {
  "id": "C06",
  "slug": "coordenadas-locales-de-obra-vs-coordenadas-proyectadas",
  "t": "Local site coordinates vs projected coordinates",
  "en": "Coordenadas locales de obra vs. coordenadas proyectadas",
  "b": "I",
  "d": "Local coordinates have an origin and orientation convenient for the site and measure 'as with a tape'; projected coordinates (e.g. UTM) are large numbers and carry the distortion of the projection. A low distortion projection (LDP) is a projection designed so that the scale is ~1 on the site.",
  "ej": "A small project (≤100 m) in local coordinates with two or more tie points to UTM. For a long linear project, UTM with a managed scale factor or an LDP: Deutsche Bahn brought distortion below 5 ppm at 6 326 stations (Clemen and Romanschek, ISPRS 2025).",
  "eq": "Revit: Project Base Point vs Survey Point; Tekla: base points; Trimble/Leica: site calibration.",
  "err": "Modelling in real UTM coordinates inside the BIM program (loss of precision) instead of modelling locally and transforming.",
  "rel": [
   "C08",
   "C12",
   "C13",
   "C15",
   "C27"
  ],
  "al": [
   "local coordinates",
   "projected coordinates",
   "local site coordinates",
   "grid coordinates",
   "local system",
   "low distortion projection",
   "coordenadas locales",
   "coordenadas proyectadas",
   "sistema local"
  ]
 },
 {
  "id": "C07",
  "slug": "alturas-elipsoidal-ortometrica-geoide",
  "t": "Ellipsoidal height, orthometric height, geoid, vertical datum",
  "en": "Alturas: elipsoidal, ortométrica, geoide",
  "b": "I",
  "d": "Ellipsoidal height (h) is given by GNSS relative to the ellipsoid; orthometric height (H) is the 'height above sea level' relative to the geoid. They are related by the geoid undulation: N = h − H. The vertical datum defines the zero for heights.",
  "ej": "In Spain, H is referred to mean sea level at Alicante (REDNAP network); the IGN publishes the EGM08-REDNAP geoid (~3.8 cm accuracy). In the Canary Islands each island has its own reference.",
  "eq": "Revit: Survey Point elevation; IFC: IfcMapConversion.OrthogonalHeight and IfcProjectedCRS.VerticalDatum.",
  "err": "Giving the model ellipsoidal heights from a GNSS receiver as if they were levels (errors of ~50 m on the Peninsula).",
  "rel": [
   "C03",
   "C27",
   "C33"
  ],
  "al": [
   "geoid",
   "ellipsoidal height",
   "orthometric height",
   "vertical datum",
   "elevation",
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
  "t": "Scale factor (grid, elevation, combined) / grid vs ground",
  "en": "Factor de escala / coeficiente de anamorfosis (K)",
  "b": "I",
  "d": "The distance measured on the ground does not match the distance on the UTM grid. The grid scale factor depends on the position within the zone; the elevation factor, on the height above the ellipsoid; the combined scale factor is their product. You have to decide whether to model 'at ground' or 'at grid'.",
  "ej": "Typical differences of 100 to 400 ppm in Spain: 1 to 4 cm every 100 m. The 2024 road technical note Nota de Servicio 03/2024 requires the survey to state the grid distortion coefficient (K) and the convergence (W).",
  "eq": "Civil 3D: Grid Scale Factor (Transformation); IFC: IfcMapConversion.Scale (units) and IfcMapConversionScaled (IFC4.3, FactorX/Y/Z); Trimble/Leica: calibration. Revit: does not handle it (a BEP decision).",
  "err": "Confusing the two uses of IfcMapConversion.Scale: the 2020 bSI guide, OSArch and Bonsai use it as the combined scale factor, whereas IFC 4.3 ADD2 reserves it for unit conversion and moves the grid scale factor to IfcMapConversionScaled. Ignoring the factor on long linear projects is also a mistake.",
  "rel": [
   "C05",
   "C06",
   "C19",
   "C25"
  ],
  "al": [
   "scale factor",
   "combined scale factor",
   "grid scale factor",
   "grid distortion",
   "grid vs ground",
   "factor de escala",
   "anamorfosis",
   "factor combinado"
  ]
 },
 {
  "id": "C09",
  "slug": "nortes-verdadero-de-cuadricula-magnetico-de-proyecto",
  "t": "True north, grid north, magnetic north, project north",
  "en": "Nortes: verdadero, de cuadrícula, magnético, de proyecto",
  "b": "I",
  "d": "True (geographic) north: towards the pole. Grid north: the N axis of the projection (UTM). Magnetic north: the compass north. Project north: the 'up' direction of the model, aligned with the building grid for convenient working.",
  "ej": "In Spain the difference between true north and UTM grid north (grid convergence) can exceed 2° at the zone edges.",
  "eq": "Revit: Project North / True North; Archicad: Project North; Tekla: angle to North; IFC: TrueNorth and the IfcMapConversion rotation (relative to grid north).",
  "err": "Entering the angle relative to the UTM grid as the 'angle to true north' without noticing, or the other way round.",
  "rel": [
   "C10",
   "C21"
  ],
  "al": [
   "true north",
   "grid north",
   "magnetic north",
   "project north",
   "norte verdadero",
   "norte de cuadrícula",
   "norte magnético",
   "norte de proyecto"
  ]
 },
 {
  "id": "C10",
  "slug": "convergencia-de-meridianos",
  "t": "Grid convergence (W) / rotation angle",
  "en": "Convergencia de meridianos (W) / ángulo de rotación",
  "b": "I",
  "d": "The angle between true north and grid north at a point. In BIM, the rotation angle of the local→world transformation must state which north it is measured from and in which direction of rotation.",
  "ej": "Zero on the central meridian of the zone (3°W for zone 30) and increasing towards the edges.",
  "eq": "Revit: angle measured clockwise; Archicad: anticlockwise from +X; IFC: XAxisAbscissa / XAxisOrdinate (anticlockwise from East).",
  "err": "Mixing rotation conventions between programs (Revit vs Archicad) and ending up with a rotated model.",
  "rel": [
   "C09",
   "C19"
  ],
  "al": [
   "grid convergence",
   "meridian convergence",
   "convergence angle",
   "rotation angle",
   "convergencia",
   "convergencia de meridianos"
  ]
 },
 {
  "id": "C11",
  "slug": "origen-interno",
  "t": "Internal origin / model origin",
  "en": "Origen interno",
  "b": "III",
  "d": "The fixed 0,0,0 point of the program's geometry engine, to which all internal coordinates refer. It does not move; geometry should be modelled close to it.",
  "ej": "In Revit it has been visible since version 2020.2.",
  "eq": "Revit: Internal Origin; Archicad: Project Origin; Tekla: model origin; Allplan: global 0,0,0 point; Vectorworks: Internal Origin; BricsCAD: WCS 0,0,0; Bonsai/IFC: local origin.",
  "err": "Importing a DWG in UTM 'origin to origin': the geometry ends up kilometres away from the internal origin.",
  "rel": [
   "C12",
   "C13",
   "C15"
  ],
  "al": [
   "internal origin",
   "Internal Origin",
   "model origin",
   "origen interno"
  ]
 },
 {
  "id": "C12",
  "slug": "punto-base-del-proyecto",
  "t": "Project base point",
  "en": "Punto base del proyecto (y equivalentes)",
  "b": "III",
  "d": "The local reference of the project, usually at a corner or a grid intersection, used for dimensioning and setting out in building coordinates. It is not the link to the real world.",
  "ej": "The intersection of grid lines A-1 of a structure.",
  "eq": "Revit: Project Base Point; Tekla: project base point; Allplan 2026: Base Point; Vectorworks: User Origin; BricsCAD: Project Location; IFC: placement of IfcSite/IfcBuilding.",
  "err": "Moving the base point in the belief that this georeferences the model.",
  "rel": [
   "C11",
   "C13",
   "C14"
  ],
  "al": [
   "project base point",
   "Project Base Point",
   "base point",
   "punto base"
  ]
 },
 {
  "id": "C13",
  "slug": "punto-de-reconocimiento-survey-point",
  "t": "Survey point",
  "en": "Punto de reconocimiento / Survey Point (y equivalentes)",
  "b": "III",
  "d": "Marker that shows coordinates of the shared or survey system. Clipped, it sits at the origin of that system and moving it relocates the system relative to the model; unclipped, it is moved to a known point (a setting-out control point) without changing anything, only to read or check coordinates.",
  "ej": "Unclipped, placed on a setting-out control point with known ETRS89 / UTM 30N coordinates to check that the model reads them correctly.",
  "eq": "Revit: Survey Point (clipped or unclipped); Archicad (AC25+): Survey Point; Allplan 2026 and Vectorworks: Survey Point; BricsCAD: Survey Location; Tekla: base point with E/N; IFC: IfcMapConversion.",
  "err": "Moving the point while clipped when you meant unclipped (or vice versa), shifting the whole shared coordinate system.",
  "rel": [
   "C11",
   "C12",
   "C14",
   "C19"
  ],
  "al": [
   "survey point",
   "Survey Point",
   "punto de reconocimiento"
  ]
 },
 {
  "id": "C14",
  "slug": "coordenadas-compartidas",
  "t": "Shared coordinates (acquire / publish)",
  "en": "Coordenadas compartidas (adquirir / publicar)",
  "b": "III",
  "d": "The mechanism by which several linked models use the same coordinate system. You acquire the system of another model or publish your own to it; named sites (locations) allow several positions of the same model.",
  "ej": "A master site model that acquires from the survey model and publishes to the architecture, structure and MEP models.",
  "eq": "Revit: Acquire Coordinates/Publish Coordinates, shared site (named location), Relocate Project, Reset Shared Coordinates; ACC: acquire only under cloud worksharing; other programs: the same logic with their Survey Point.",
  "err": "Confusing 'being at the same coordinates' with 'sharing coordinates'; using Publish Coordinates with a DWG.",
  "rel": [
   "C13",
   "C17",
   "C30"
  ],
  "al": [
   "shared coordinates",
   "acquire coordinates",
   "publish coordinates",
   "Acquire Coordinates",
   "Publish Coordinates",
   "coordenadas compartidas",
   "adquirir coordenadas",
   "publicar coordenadas"
  ]
 },
 {
  "id": "C15",
  "slug": "precision-en-coma-flotante-y-modelos-lejos-del-origen",
  "t": "Floating-point precision / large coordinates / false origin",
  "en": "Precisión en coma flotante y modelos lejos del origen",
  "b": "I",
  "d": "Graphics engines store coordinates with a limited number of significant digits: far from the origin, precision is lost, geometry 'jitters' and errors appear. That is why you model close to the origin and apply a transformation (false origin).",
  "ej": "Revit limits geometry to 16 km (10 miles) from the internal origin; Bonsai warns of millimetre errors from about 5 km.",
  "eq": "Revit: distance limit; Bonsai: False Origin; Navisworks/Solibri: flickering with large coordinates; Bentley: Global Origin.",
  "err": "Modelling directly in UTM coordinates (400000, 4400000) inside the BIM program.",
  "rel": [
   "C06",
   "C11",
   "C26"
  ],
  "al": [
   "floating point",
   "floating-point precision",
   "single precision",
   "false origin",
   "large coordinates",
   "float32",
   "coma flotante",
   "precisión simple",
   "float64"
  ]
 },
 {
  "id": "C16",
  "slug": "transformacion-de-coordenadas",
  "t": "Coordinate transformation (Helmert, datum shift, NTv2)",
  "en": "Transformación de coordenadas",
  "b": "I",
  "d": "An operation that converts coordinates from one system to another: from local to projected (translation + rotation + scale, Helmert 2D/3D type) or between datums (e.g. ED50→ETRS89 using the IGN NTv2 grid).",
  "ej": "NTv2 grids: PENR2009 and BALR2009 from the IGN (a few cm), SPED2ETV2 from the EPSG registry (EPSG:15932, 0.1-0.2 m) and the ICGC grid for Catalonia (EPSG:5661). It is worth checking which one each program uses.",
  "eq": "IFC: IfcMapConversion (local→projected); CloudCompare: Global Shift; FME/PROJ/QGIS: reprojection; Civil 3D: library transformations.",
  "err": "Applying rotation and translation in the wrong order (in Modelical's point cloud workflow you translate first and then rotate).",
  "rel": [
   "C03",
   "C19",
   "C26"
  ],
  "al": [
   "coordinate transformation",
   "transformation",
   "datum shift",
   "Helmert",
   "NTv2",
   "reprojection",
   "transformación"
  ]
 },
 {
  "id": "C17",
  "slug": "federacion-y-alineacion-de-modelos",
  "t": "Model federation and alignment",
  "en": "Federación y alineación de modelos",
  "b": "IV",
  "d": "Combining models from different disciplines and programs in a common viewer to coordinate them (clash detection, review). It only works if they all share the same coordinate system.",
  "ej": "Architecture (Archicad), structure (Tekla) and MEP (Revit) models federated in Navisworks or BIMcollab.",
  "eq": "Navisworks: Units and Transform; ACC: Transform; BIMcollab Zoom: IFC Global Origin / Use georeferencing; Solibri; Trimble Connect; Dalux.",
  "err": "Using the viewer's Transform as a permanent fix instead of correcting the origin in the source model.",
  "rel": [
   "C14",
   "C24",
   "C30",
   "C32"
  ],
  "al": [
   "federation",
   "federated model",
   "federate",
   "federated",
   "model alignment",
   "federación",
   "federar",
   "federado"
  ]
 },
 {
  "id": "C18",
  "slug": "ifcsite",
  "t": "IfcSite RefLatitude / RefLongitude / RefElevation",
  "en": "IfcSite (latitud, longitud, elevación)",
  "b": "II",
  "d": "Attributes of the IFC site that give an approximate position in WGS84 (degrees, minutes, seconds) and an elevation. They are informative: they do not define a precise transformation.",
  "ej": "Latitude 40°25'N, longitude 3°42'W for a project in Madrid.",
  "eq": "Revit: project location (map); Archicad: Project Location; all IFC exporters.",
  "err": "Taking the IfcSite lat/long as precise georeferencing, or leaving them at 0 (common according to TU Delft).",
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
  "t": "IfcMapConversion",
  "en": "IfcMapConversion (y IfcMapConversionScaled, IfcRigidOperation)",
  "b": "II",
  "d": "An IFC entity (since IFC4) that defines the transformation from the model's local system to the map CRS: Eastings, Northings, OrthogonalHeight, rotation (XAxisAbscissa/Ordinate) and scale. IFC4.3 adds IfcMapConversionScaled (FactorX/Y/Z) and IfcRigidOperation (translation only).",
  "ej": "IFCMAPCONVERSION(#ctx,#crs,440125.250,4474310.800,655.320,0.9993908,0.0348995,1.) for EPSG:25830.",
  "eq": "Revit (IFC4 with EPSG), Archicad (Survey Point and Project Origin), Tekla (IfcMapConversion option), Vectorworks, Bonsai, Allplan; in IFC2x3 it is emulated with ePSet_MapConversion.",
  "err": "Double offset: coordinates written both in IfcMapConversion and in the IfcSite placement.",
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
   "map conversion"
  ]
 },
 {
  "id": "C20",
  "slug": "ifcprojectedcrs-ifcgeographiccrs",
  "t": "IfcProjectedCRS / IfcGeographicCRS",
  "en": "IfcProjectedCRS / IfcGeographicCRS",
  "b": "II",
  "d": "The IFC entity that identifies the target CRS of IfcMapConversion: name (EPSG code), geodetic datum, vertical datum, projection, zone and units. In IFC4.3 the CRS must carry an EPSG code or a WKT.",
  "ej": "Name 'EPSG:25830', GeodeticDatum 'EPSG:6258' (ETRS89), VerticalDatum referred to Alicante, MapZone '30N'.",
  "eq": "EPSG field in the IFC exporter of Revit, Archicad, Vectorworks, Bonsai; IFC2x3: ePSet_ProjectedCRS.",
  "err": "Leaving the name empty or filled with free text that viewers cannot interpret.",
  "rel": [
   "C04",
   "C19"
  ],
  "al": [
   "IfcProjectedCRS",
   "IfcGeographicCRS",
   "IfcCoordinateReferenceSystem"
  ]
 },
 {
  "id": "C21",
  "slug": "contexto-geometrico-worldcoordinatesystem-y-truenorth",
  "t": "Geometric context: WorldCoordinateSystem and TrueNorth",
  "en": "Contexto geométrico: WorldCoordinateSystem y TrueNorth",
  "b": "II",
  "d": "The representation context of the IFC project, which contains the world coordinate system and the direction of true north. If IfcMapConversion is present, TrueNorth is informative only.",
  "ej": "TrueNorth rotated 12° from the model's Y axis.",
  "eq": "Revit 'Coordinate Base' with 'oriented in True North' variants; all exporters.",
  "err": "TrueNorth inconsistent with the IfcMapConversion rotation.",
  "rel": [
   "C09",
   "C19",
   "C22"
  ],
  "al": [
   "TrueNorth",
   "WorldCoordinateSystem",
   "IfcGeometricRepresentationContext",
   "geometric representation context"
  ]
 },
 {
  "id": "C22",
  "slug": "logeoref-y-validacion-de-georreferenciacion-ifc",
  "t": "Level of Georeferencing (LoGeoRef)",
  "en": "LoGeoRef y validación de georreferenciación IFC",
  "b": "II",
  "d": "A classification (HTW Dresden) of how complete the georeferencing of an IFC file is: 10 postal address, 20 lat/long in IfcSite, 30 placement of the top-level element, 40 WorldCoordinateSystem + TrueNorth, 50 IfcMapConversion + IfcProjectedCRS (recommended).",
  "ej": "Require LoGeoRef 50 in the BEP and check it with IfcGeoRefChecker, IfcGref or IDS.",
  "eq": "IfcGeoRefChecker, IfcGref (TU Delft), Bonsai, IDS validators, BIM Fit Check (buildingSMART Germany).",
  "err": "Accepting as valid an IFC file that only reaches LoGeoRef 20 (lat/long).",
  "rel": [
   "C18",
   "C19",
   "C20",
   "C21",
   "C32"
  ],
  "al": [
   "LoGeoRef",
   "level of georeferencing",
   "georeferencing validation"
  ]
 },
 {
  "id": "C23",
  "slug": "ifc-4-3-para-infraestructura-alineaciones-y-pk",
  "t": "IFC 4.3 alignment / linear referencing",
  "en": "IFC 4.3 para infraestructura: alineaciones y PK",
  "b": "II",
  "d": "IFC 4.3 (ISO 16739-1:2024) adds roads, railways, bridges and ports, with alignments (horizontal, vertical, cant) and linear referencing (chainage / stationing) as well as new georeferencing entities.",
  "ej": "A motorway main line from chainage 0+000 to 12+500 georeferenced in EPSG:25830.",
  "eq": "Civil 3D, OpenRoads/OpenRail, Istram, Allplan Civil, Bonsai.",
  "err": "Exporting a linear project to generic IFC4 and losing the alignment and chainage.",
  "rel": [
   "C19",
   "C25",
   "C27"
  ],
  "al": [
   "IFC 4.3",
   "IFC4.3",
   "alignment",
   "linear referencing",
   "chainage",
   "stationing",
   "alineación"
  ]
 },
 {
  "id": "C24",
  "slug": "exportacion-importacion-ifc-con-coordenadas",
  "t": "IFC export/import coordinate settings",
  "en": "Exportación/importación IFC con coordenadas",
  "b": "V",
  "d": "The settings of each program's IFC exporter/importer that decide which origin is written (internal, project base point, survey point, shared) and whether IfcMapConversion/IfcProjectedCRS or IFC2x3 property sets are generated.",
  "ej": "Revit: Coordinate Base = Shared Coordinates + EPSG in IFC4; Archicad: Survey Point and Project Origin; Tekla: IfcMapConversion or IfcSite.",
  "eq": "Revit IFC exporter (6 Coordinate Base options); Archicad translators; Tekla IFC export; Vectorworks; Allplan; CYPE; BricsCAD.",
  "err": "Mixing IFC files exported with different settings in the same viewer.",
  "rel": [
   "C19",
   "C20",
   "C17"
  ],
  "al": [
   "IFC export",
   "export IFC",
   "IFC exporter",
   "IFC import",
   "Coordinate Base",
   "exportación IFC",
   "exportar IFC",
   "exportador IFC"
  ]
 },
 {
  "id": "C25",
  "slug": "estrategia-de-coordenadas-en-eir-bep",
  "t": "Coordinate strategy in EIR/BEP (ISO 19650)",
  "en": "Estrategia de coordenadas en EIR/BEP (ISO 19650)",
  "b": "II",
  "d": "An agreement documented in the exchange information requirements (EIR) and the BIM execution plan (BEP) that fixes the CRS, vertical datum, control points, rotation, units, scale factor, who is responsible for the site model and how to export.",
  "ej": "The es.BIM guide asks for a 'project coordination base point' georeferenced in X, Y, Z, outside the building and with positive coordinates, and at least two documented points. ETS (Basque Country, 2024) specifies ETRS89 (ETRF2000, epoch 2017.0), UTM zone 30 and the EGM08-REDNAP geoid.",
  "eq": "Software-independent; applied in each program through its equivalent Survey Point.",
  "err": "Not agreeing on it at the start and discovering the offset at the first federation.",
  "rel": [
   "C01",
   "C08",
   "C13",
   "C32"
  ],
  "al": [
   "BIM execution plan",
   "BEP",
   "EIR",
   "exchange information requirements",
   "ISO 19650",
   "coordinate strategy"
  ]
 },
 {
  "id": "C26",
  "slug": "nubes-de-puntos-georreferenciadas",
  "t": "Georeferenced point clouds",
  "en": "Nubes de puntos georreferenciadas",
  "b": "III",
  "d": "Laser or photogrammetric scans registered in a real-world coordinate system. Because of their large coordinates, they usually need a global shift before they go into the BIM program.",
  "ej": "ReCap → Dynamo → CloudCompare (Global Shift) → ReCap → Revit origin-to-origin workflow (Modelical).",
  "eq": "ReCap, CloudCompare (Global Shift), Trimble RealWorks, Leica Cyclone; in Revit, origin-to-origin insertion or by shared coordinates.",
  "err": "'Jittering points' when inserting a point cloud in UTM without a shift.",
  "rel": [
   "C15",
   "C16",
   "C27"
  ],
  "al": [
   "point cloud",
   "point clouds",
   "georeferenced point cloud",
   "laser scan",
   "nube de puntos",
   "nubes de puntos"
  ]
 },
 {
  "id": "C27",
  "slug": "topografia-replanteo-y-gnss",
  "t": "Surveying, setting out and GNSS",
  "en": "Topografía, replanteo y GNSS",
  "b": "I",
  "d": "Fieldwork that measures the terrain and sets out the design on site. It requires setting-out control points with known coordinates and a calibration that relates the site system to GNSS.",
  "ej": "A network of setting-out control points tied to the IGN ERGNSS/REGENTE network.",
  "eq": "Trimble Business Center/Siteworks, Leica Infinity/Captivate (site calibration), Civil 3D, Istram, TcpMDT.",
  "err": "Setting out with coordinates from a model that did not share the surveyor's system.",
  "rel": [
   "C06",
   "C07",
   "C08",
   "C26"
  ],
  "al": [
   "surveying",
   "setting out",
   "GNSS",
   "total station",
   "survey",
   "site calibration",
   "topografía",
   "replanteo",
   "estación total"
  ]
 },
 {
  "id": "C28",
  "slug": "integracion-bim-gis",
  "t": "BIM-GIS integration (GeoBIM)",
  "en": "Integración BIM-GIS",
  "b": "IV",
  "d": "The combined use of BIM models and geospatial data (mapping, 3D city models) in the same environment, which requires the BIM model to be properly georeferenced and in the correct CRS.",
  "ej": "The project IFC model loaded over IGN mapping or a municipal CityGML model.",
  "eq": "ArcGIS GeoBIM / ArcGIS Pro, QGIS, FME, Cesium (3D Tiles), Autodesk Forma, Bentley iTwin.",
  "err": "Taking an IFC file without IfcMapConversion into GIS: it appears in the ocean off Ghana (0,0).",
  "rel": [
   "C02",
   "C19",
   "C29"
  ],
  "al": [
   "BIM-GIS",
   "BIM-GIS integration",
   "GeoBIM",
   "GIS"
  ]
 },
 {
  "id": "C29",
  "slug": "geolocalizacion-ubicacion-del-proyecto",
  "t": "Project location / geolocation",
  "en": "Geolocalización / ubicación del proyecto",
  "b": "III",
  "d": "The approximate position of the project (address or lat/long) used for sun studies, climate or map context. It does not replace shared coordinates.",
  "ej": "Location by postal address in Revit or Forma for solar studies.",
  "eq": "Revit: Location (Internet Mapping Service); Archicad: Project Location; Forma; IfcSite lat/long; IfcPostalAddress.",
  "err": "Thinking that geolocating on the map already puts the model in the correct UTM coordinates.",
  "rel": [
   "C18",
   "C28"
  ],
  "al": [
   "project location",
   "geolocation",
   "geolocating",
   "geolocated",
   "geolocalización",
   "ubicación del proyecto"
  ]
 },
 {
  "id": "C30",
  "slug": "coordinacion-en-la-nube",
  "t": "Cloud coordination (CDE)",
  "en": "Coordinación en la nube (CDE)",
  "b": "IV",
  "d": "Common data environments (ACC/BIM 360, Trimble Connect, Bentley iTwin, Dalux, BIMcollab Cloud, usBIM) where models are shared and federated; each has its own rules about coordinates and transformations.",
  "ej": "In ACC with cloud worksharing, Publish Coordinates may be disabled and you can only acquire from the master model.",
  "eq": "ACC Model Coordination (Transform), Trimble Connect, iTwin (linear/projected geolocation), Dalux, usBIM.",
  "err": "Transforming the model only in the cloud and forgetting that the original is still offset.",
  "rel": [
   "C14",
   "C17"
  ],
  "al": [
   "common data environment",
   "CDE",
   "cloud coordination",
   "entorno común de datos"
  ]
 },
 {
  "id": "C31",
  "slug": "sistemas-de-coordenadas-cad",
  "t": "CAD coordinate systems (WCS/UCS, DWG, DGN GCS, global origin)",
  "en": "Sistemas de coordenadas CAD (SCU/SCP, DWG, DGN)",
  "b": "III",
  "d": "In CAD, geometry is drawn directly in coordinates (WCS) and the UCS is an auxiliary system. Bentley DGN files add a GCS and a Global Origin.",
  "ej": "A topographic survey DWG in UTM zone 30N with a rotated UCS that causes confusion when it is linked.",
  "eq": "AutoCAD/Civil 3D: WCS/UCS, GEOGRAPHICLOCATION; MicroStation: GCS, Global Origin, ACS; BricsCAD.",
  "err": "Linking a DWG with additional UCSs without checking them.",
  "rel": [
   "C02",
   "C11",
   "C14"
  ],
  "al": [
   "WCS",
   "UCS",
   "DWG",
   "DGN",
   "world coordinate system",
   "user coordinate system",
   "SCU",
   "SCP"
  ]
 },
 {
  "id": "C32",
  "slug": "errores-comunes-y-control-de-calidad-de-coordenadas",
  "t": "Coordinate QA/QC checklists",
  "en": "Errores comunes y control de calidad de coordenadas",
  "b": "V",
  "d": "Systematic checks to detect offsets, rotations and height errors: witness objects at control points, verification in a neutral viewer, LoGeoRef check and comparison of the coordinates of known points.",
  "ej": "A 1 m³ cube or a physical 'Base Point' (ETS manual of the Basque Government) at each control point.",
  "eq": "Navisworks, Solibri, BIMcollab, IfcGeoRefChecker, IfcGref, Bonsai, IDS.",
  "err": "Validating only visually in the authoring program.",
  "rel": [
   "C17",
   "C22",
   "C25"
  ],
  "al": [
   "quality control",
   "QA/QC",
   "coordinate checks",
   "common mistakes",
   "control de calidad"
  ]
 },
 {
  "id": "C33",
  "slug": "marco-geodesico-y-legal-espanol",
  "t": "Spanish geodetic and legal framework",
  "en": "Marco geodésico y legal español",
  "b": "I",
  "d": "Royal Decree RD 1071/2007 sets ETRS89 (Peninsula and Balearic Islands) and REGCAN95 (Canary Islands) as the official systems, the UTM projection and heights referred to mean sea level at Alicante. The IGN maintains the REGENTE, REDNAP and ERGNSS networks.",
  "ej": "Public project in Spain: EPSG:25830 + REDNAP heights (EPSG:5782). Order PCM/818/2023 and the IGN BIM Plan require as-built models in IFC 4.3 referred to the official geodetic system.",
  "eq": "Affects the choice of CRS in every program.",
  "err": "Still using ED50 on new commissions or mixing Canary Islands and Peninsula systems.",
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
   "official geodetic system"
  ]
 },
 {
  "id": "C34",
  "slug": "unidades-y-conversion",
  "t": "Units and unit conversion",
  "en": "Unidades y conversión",
  "b": "V",
  "d": "The model units (mm, m, feet) and the CRS units (usually metres) must match; in IFC the Scale field of IfcMapConversion converts model units to map units.",
  "ej": "Model in millimetres: Scale = 0.001 if the CRS is in metres.",
  "eq": "Revit (project units; does not support the US survey foot), IFC Scale/MapUnit, Civil 3D (drawing units).",
  "err": "Exporting IFC in mm with Scale = 1 and a CRS in metres (error documented in revit-ifc #784).",
  "rel": [
   "C19",
   "C20"
  ],
  "al": [
   "model units",
   "unit conversion",
   "units",
   "unidades del modelo",
   "conversión de unidades"
  ]
 },
 {
  "id": "C35",
  "slug": "epoca-de-referencia-y-deriva-continental",
  "t": "Reference epoch / plate motion / dynamic datum",
  "en": "Época de referencia y deriva continental",
  "b": "I",
  "d": "Tectonic plates move a few centimetres a year, so the coordinates of a point in a global frame (ITRF, WGS84) change over time. A 'static' datum fixes the coordinates at a date (epoch); a dynamic datum updates them. Without stating the epoch, coordinates are not comparable to the centimetre.",
  "ej": "ETRS89 is tied to the Eurasian plate and barely changes in Spain, but it drifts away from WGS84 by about 2.5 cm/year. The ETS manual specifies ETRF2000 epoch 2017.0. In Australia (GDA94→GDA2020) the jump was about 1.8 m.",
  "eq": "Trimble Business Center, Leica Infinity, Civil 3D (time-dependent transformations); IFC: IfcSite lat/long in WGS84 without an epoch, which is why it is only good to the metre.",
  "err": "Mixing same-day GNSS coordinates in WGS84/ITRF with ETRS89 mapping, or MGA94 data with MGA2020 in Australia (a gas pipeline 300 mm out in the Worrell case).",
  "rel": [
   "C03",
   "C16",
   "C27",
   "C18"
  ],
  "al": [
   "reference epoch",
   "plate motion",
   "continental drift",
   "dynamic datum",
   "ITRF",
   "epoch",
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
