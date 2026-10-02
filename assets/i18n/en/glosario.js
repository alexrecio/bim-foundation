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
 }
];
