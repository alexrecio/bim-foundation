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
   "coordinate strategy",
   "estrategia de coordenadas",
   "requisitos de coordenadas"
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
  "t": "Level of information need (LOIN)",
  "en": "Nivel de información necesario (LOIN)",
  "b": "I",
  "d": "Framework that defines the extent and granularity of the information required for each object: which geometrical information, alphanumerical information and documentation is needed for a purpose, at an information delivery milestone and between specific actors (ISO 7817-1).",
  "ej": "A fire door at detailed design stage, to demonstrate fire safety: clear opening width and swing direction; class EI2 60-C5; test certificate.",
  "eq": "Revit/Archicad: not an object in its own right; it becomes parameters, templates and an IDS. Platforms such as Cobuilder Require, BIMQ or Plannerly store it in a database.",
  "err": "Treating it as a single number for the whole model (“LOIN 3 model”) or as the sum LOD + LOI.",
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
   "level of information need",
   "LOIN",
   "LoIN",
   "nivel de información necesario"
  ]
 },
 {
  "id": "N02",
  "slug": "informacion-geometrica",
  "t": "Geometrical information",
  "en": "Información geométrica",
  "b": "I",
  "d": "Part of the level of information need that describes the shape of the object through five aspects: detail, dimensionality, location, appearance and parametric behaviour.",
  "ej": "Door at detailed design: low detail, 3D, absolute location, symbolic appearance, no parametric behaviour.",
  "eq": "Embodied in the family geometry (Revit), the GDL object (Archicad) or the IFC representation.",
  "err": "Confusing it with the view detail level (coarse, medium, fine), which only decides what is drawn at each scale.",
  "rel": [
   "N01",
   "N10",
   "N23"
  ],
  "al": [
   "geometrical information",
   "dimensionality",
   "parametric behaviour",
   "appearance",
   "información geométrica",
   "dimensionalidad",
   "comportamiento paramétrico",
   "apariencia"
  ]
 },
 {
  "id": "N03",
  "slug": "informacion-alfanumerica",
  "t": "Alphanumerical information",
  "en": "Información alfanumérica",
  "b": "I",
  "d": "Part of the level of information need made up of the object's identification (name, type, code, classification) and its information content (properties with name, value, unit and allowed values).",
  "ej": "Pset_DoorCommon.FireRating = “EI2 60-C5”; IsExternal = false.",
  "eq": "Revit: (shared) parameters; Archicad: properties; Allplan: attributes; Tekla: UDAs and property sets; IFC: attributes and Psets.",
  "err": "Requesting properties without a standardised name or data type: “60 min”, “EI60” and “yes” all arrive for the same question.",
  "rel": [
   "N01",
   "N20",
   "N26"
  ],
  "al": [
   "alphanumerical information",
   "alphanumeric information",
   "non-graphical information",
   "información alfanumérica"
  ]
 },
 {
  "id": "N04",
  "slug": "documentacion",
  "t": "Documentation",
  "en": "Documentación",
  "b": "I",
  "d": "Set of documents that accompany an object or delivery and are not part of the model: data sheets, certificates, photographs, manuals, shop drawings.",
  "ej": "Fire resistance test certificate for the door, as a PDF, linked to the type.",
  "eq": "IFC: IfcDocumentReference associated through IfcRelAssociatesDocument; in CDEs, documents linked to the element.",
  "err": "Requesting “technical documentation” without saying which document, in which format and for which milestone.",
  "rel": [
   "N01",
   "N28"
  ],
  "al": [
   "documentation",
   "IfcDocumentReference",
   "documentación"
  ]
 },
 {
  "id": "N05",
  "slug": "proposito",
  "t": "Purpose",
  "en": "Propósito",
  "b": "I",
  "d": "The use the information will be put to (coordinating, quantity take-off, demonstrating fire safety, maintenance...). It is the first condition for setting the level of information need.",
  "ej": "Purpose “demonstrate fire safety” for the building permit.",
  "eq": "IDS: purpose field in the <info> header.",
  "err": "Requesting information “just in case”, with no purpose: it leads to over-modelling.",
  "rel": [
   "N01",
   "N06",
   "N08",
   "N29"
  ],
  "al": [
   "purpose",
   "use case",
   "propósito",
   "caso de uso"
  ]
 },
 {
  "id": "N06",
  "slug": "hito-de-entrega-de-informacion-n06",
  "t": "Information delivery milestone",
  "en": "Hito de entrega de información",
  "b": "I",
  "d": "Agreed point in time at which information is exchanged: end of a stage, tender, permit, handover. The level of information need is set for each milestone.",
  "ej": "Concept design, basic design, detailed design, construction and final handover.",
  "eq": "IDS: milestone field in the header; ISO 19650: delivery plan (MIDP).",
  "err": "Requesting at design stage data that are only known once the contract is let (manufacturer, serial number).",
  "rel": [
   "N01",
   "N05",
   "N16"
  ],
  "al": [
   "information delivery milestone",
   "milestone",
   "milestones",
   "hito",
   "hitos"
  ]
 },
 {
  "id": "N07",
  "slug": "actores",
  "t": "Actors (appointing / appointed party)",
  "en": "Actores (parte que designa / parte designada)",
  "b": "I",
  "d": "Who requests the information (appointing party: the client or the lead contractor) and who produces it (appointed party). Every requirement identifies them.",
  "ej": "The client requests; the architecture team delivers the doors at detailed design and the joiner during construction.",
  "eq": "Responsibility matrix in the BEP; requirements management platforms with one IDS per actor.",
  "err": "Not assigning a responsible party: the data falls into no man's land between two disciplines.",
  "rel": [
   "N01",
   "N15",
   "N16"
  ],
  "al": [
   "actors",
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
  "t": "Over-modelling / information waste",
  "en": "Sobremodelado",
  "b": "I",
  "d": "Producing more geometry or more data than any purpose needs. It costs effort to create, check and maintain, and it adds noise.",
  "ej": "Modelling ironmongery and fixings for every door at concept design.",
  "eq": "BIMForum 2025 strengthens its “Expansion” paragraphs to respond to requests for excessive LODs.",
  "err": "Thinking a more detailed model is always better.",
  "rel": [
   "N01",
   "N05",
   "N09"
  ],
  "al": [
   "over-modelling",
   "information waste",
   "over-specification",
   "sobremodelado",
   "sobreespecificación"
  ]
 },
 {
  "id": "N09",
  "slug": "nivel-de-desarrollo",
  "t": "Level of Development (LOD)",
  "en": "Nivel de desarrollo (LOD)",
  "b": "I",
  "d": "Scale from 100 to 500 (plus 350) indicating how far the geometry and information of an element can be relied on. It emerged around 2004-2005 (Vico) and the AIA adopted it in E202-2008.",
  "ej": "LOD 300: quantity, size, shape, location and orientation measurable in the model.",
  "eq": "BIMForum LOD Specification (definitions per element); BEP element matrices.",
  "err": "Applying it to the whole model (“LOD 300 model”); BIMForum: “There is no such thing as an LOD ### model”.",
  "rel": [
   "N10",
   "N17",
   "N18",
   "N22"
  ],
  "al": [
   "level of development",
   "LOD",
   "LOD 300",
   "LOD 350",
   "nivel de desarrollo"
  ]
 },
 {
  "id": "N10",
  "slug": "nivel-de-detalle",
  "t": "Level of Detail",
  "en": "Nivel de detalle (Level of Detail)",
  "b": "I",
  "d": "How much graphical detail an element contains. BIMForum distinguishes it from development: detail is the input; development, the reliable output.",
  "ej": "A catalogue door with handle and hinges drawn but no product chosen: plenty of detail, little development.",
  "eq": "United Kingdom (NBS): LOD = level of detail (graphical). Not to be confused with the view detail level.",
  "err": "Taking graphical detail as proof that the element has been decided.",
  "rel": [
   "N09",
   "N02",
   "N23"
  ],
  "al": [
   "level of detail",
   "graphical detail",
   "nivel de detalle"
  ]
 },
 {
  "id": "N11",
  "slug": "nivel-de-informacion",
  "t": "Level of Information (LOI)",
  "en": "Nivel de información (LOI)",
  "b": "I",
  "d": "Level of the non-graphical (alphanumerical) information of an element. Used in the United Kingdom (NBS BIM Toolkit) and Germany (alongside LOG), now absorbed into the level of information need.",
  "ej": "LOI of a door at detailed design: type, fire resistance, thermal transmittance, acoustics.",
  "eq": "Germany: LOG (geometry) + LOI; Peru: matrix with LOD and LOI.",
  "err": "Using LOD and LOI as two loose numbers with no purpose or milestone.",
  "rel": [
   "N01",
   "N03",
   "N19"
  ],
  "al": [
   "level of information",
   "LOI",
   "LOG",
   "level of geometry"
  ]
 },
 {
  "id": "N12",
  "slug": "nivel-de-exactitud",
  "t": "Level of Accuracy (LOA)",
  "en": "Nivel de exactitud (LOA)",
  "b": "I",
  "d": "USIBD scale (LOA10 to LOA50) that sets, at 95 % confidence, the permissible deviation of what is measured and what is represented from reality.",
  "ej": "LOA30 (5-15 mm) for the survey of an existing building that is going to be refurbished.",
  "eq": "Laser scanning and point clouds (ReCap, CloudCompare); guides such as Metrolinx's combine it with LOIN.",
  "err": "Requesting a high LOD for an existing building model without setting the accuracy of the survey.",
  "rel": [
   "N02",
   "N09"
  ],
  "al": [
   "level of accuracy",
   "LOA",
   "LOA30",
   "nivel de exactitud"
  ]
 },
 {
  "id": "N13",
  "slug": "iso-7817-1",
  "t": "ISO 7817-1",
  "en": "ISO 7817-1",
  "b": "II",
  "d": "International standard (2024) “Building information modelling — Level of information need — Part 1: Concepts and principles”. It supersedes EN 17412-1 with no substantive changes; in Spain, UNE-EN ISO 7817-1:2025.",
  "ej": "UNE-EN ISO 7817-1:2025 supersedes UNE-EN 17412-1:2021, withdrawn on 2025-01-22.",
  "eq": "BIMForum 2025 describes each LOD using the aspects of ISO 7817-1.",
  "err": "Still citing UNE-EN 17412-1 in tender documents issued after 2025.",
  "rel": [
   "N01",
   "N14",
   "N15"
  ],
  "al": [
   "ISO 7817",
   "ISO 7817-1",
   "EN ISO 7817-1",
   "UNE-EN ISO 7817-1"
  ]
 },
 {
  "id": "N14",
  "slug": "en-17412-1",
  "t": "EN 17412-1",
  "en": "EN 17412-1",
  "b": "II",
  "d": "First European standard (CEN, 2020) on the level of information need. Withdrawn and superseded by EN ISO 7817-1:2024.",
  "ej": "UNE-EN 17412-1:2021, published on 2021-04-28 and withdrawn on 2025-01-22.",
  "eq": "—",
  "err": "Citing it as current.",
  "rel": [
   "N13"
  ],
  "al": [
   "EN 17412-1",
   "EN 17412",
   "UNE-EN 17412-1"
  ]
 },
 {
  "id": "N15",
  "slug": "requisitos-de-informacion",
  "t": "Information requirements (OIR, AIR, PIR, EIR)",
  "en": "Requisitos de información (OIR, AIR, PIR, EIR)",
  "b": "II",
  "d": "ISO 19650 chain of requirements: from the organization (OIR) and the asset (AIR) to the project (PIR) and each exchange (EIR), where the level of information need is set.",
  "ej": "The EIR of an architecture appointment requires the doors with their fire resistance at detailed design.",
  "eq": "Requirements platforms (BIMQ, Plannerly, Cobuilder Require); IDS attached to the EIR.",
  "err": "Writing the EIR with generic levels (“LOD 300”) and no purpose or milestone.",
  "rel": [
   "N01",
   "N07",
   "N16"
  ],
  "al": [
   "information requirements",
   "exchange information requirements",
   "OIR",
   "AIR",
   "PIR",
   "EIR",
   "requisitos de información",
   "requisitos de intercambio"
  ]
 },
 {
  "id": "N16",
  "slug": "plan-de-entregas",
  "t": "Master / task information delivery plan (MIDP / TIDP)",
  "en": "Plan de entregas (MIDP / TIDP)",
  "b": "II",
  "d": "ISO 19650 plans stating which information container each team delivers, who delivers it and when. They put milestones and the level of information need into practice.",
  "ej": "Structural team TIDP: structural model at LOD 350 for the detailed design milestone.",
  "eq": "Spreadsheets or the planning modules of CDEs.",
  "err": "Planning deliveries without linking them to the requirements of each milestone.",
  "rel": [
   "N06",
   "N07",
   "N15"
  ],
  "al": [
   "master information delivery plan",
   "task information delivery plan",
   "information delivery plan",
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
  "d": "Specification (since 2013, almost yearly) that defines what each LOD means for each element type, with illustrations. It added LOD 350; the 2025 edition incorporates the aspects of ISO 7817-1. There is an official Spanish version for 2024 and 2025.",
  "ej": "2025 edition in Spanish, translated with BIMForum Ecuador (February 2026).",
  "eq": "Reference for element matrices in any authoring tool.",
  "err": "Believing it says which LOD applies at each stage: “that determination is left to each project team”.",
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
  "d": "Contract documents of the American Institute of Architects: E202-2008 introduced the Level of Development definitions; in 2013 they were revised in E203, G201 and G202.",
  "ej": "—",
  "eq": "—",
  "err": "Using the 2008 E202 exhibit as if it were the current version.",
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
  "t": "UK LOD and LOI (PAS 1192 / NBS BIM Toolkit)",
  "en": "LOD y LOI británicos (PAS 1192 / NBS BIM Toolkit)",
  "b": "II",
  "d": "British scales of graphical (LOD) and non-graphical (LOI) level by stage. NBS considers them superseded by ISO 19650, EN 17412-1 and the level of information need.",
  "ej": "—",
  "eq": "—",
  "err": "Mixing the British scale (1-7) with the US scale (100-500).",
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
  "t": "Data templates (ISO 23386 / ISO 23387)",
  "en": "Plantillas de datos (ISO 23386 / ISO 23387)",
  "b": "II",
  "d": "ISO 23386 sets out how to describe properties and maintain interconnected dictionaries; ISO 23387 defines data templates that group the properties of each object type.",
  "ej": "Fire door data template with its fire resistance class and allowed values.",
  "eq": "bSDD; requirements management platforms; property import in Allplan and Archicad.",
  "err": "Inventing different property names on every project.",
  "rel": [
   "N03",
   "N21"
  ],
  "al": [
   "data template",
   "data templates",
   "ISO 23386",
   "ISO 23387",
   "plantilla de datos",
   "plantillas de datos"
  ]
 },
 {
  "id": "N21",
  "slug": "bsdd-n21",
  "t": "buildingSMART Data Dictionary (bSDD)",
  "en": "bSDD (buildingSMART Data Dictionary)",
  "b": "II",
  "d": "buildingSMART online service that publishes dictionaries of classes and properties according to ISO 23386, linked to IFC entities and with allowed values.",
  "ej": "Fire resistance property with values REI30 to REI120 in a national dictionary.",
  "eq": "Allplan 2026 integrates more than 300 dictionaries; Bonsai 0.8.5 supports API v5; IDS editors query the bSDD.",
  "err": "Creating a custom Pset for something that already exists in a dictionary or in IFC.",
  "rel": [
   "N20",
   "N26",
   "N27"
  ],
  "al": [
   "bSDD",
   "buildingSMART Data Dictionary",
   "data dictionary",
   "diccionario de datos"
  ]
 },
 {
  "id": "N22",
  "slug": "matriz-de-elementos",
  "t": "Model element table / LOD matrix",
  "en": "Matriz de elementos",
  "b": "II",
  "d": "Table of elements by milestone with the required level in each cell and who is responsible. In the United States, Model Element Table; in other countries, progression matrix or LOIN matrix.",
  "ej": "Structure 350 at detailed design, doors 300, furniture 100.",
  "eq": "BEP spreadsheet or platforms such as Plannerly and BIMQ.",
  "err": "A single “model LOD” column.",
  "rel": [
   "N09",
   "N16",
   "N25"
  ],
  "al": [
   "model element table",
   "LOD matrix",
   "LOIN matrix",
   "progression matrix",
   "matriz de elementos",
   "matriz LOIN",
   "matriz LOD"
  ]
 },
 {
  "id": "N23",
  "slug": "nivel-de-detalle-de-vista",
  "t": "View detail level",
  "en": "Nivel de detalle de vista",
  "b": "III",
  "d": "Graphical setting in authoring tools (coarse/medium/fine, schematic/simplified/detailed) that decides which geometry is drawn at each scale. It is not a contractual level.",
  "ej": "—",
  "eq": "Revit: Detail Level (Coarse, Medium, Fine) per view; Archicad: Model View Options; Revit IFC exporter: “Level of Detail” = tessellation.",
  "err": "Believing that a view set to “Fine” equals LOD 400.",
  "rel": [
   "N02",
   "N10"
  ],
  "al": [
   "view detail level",
   "Detail Level",
   "nivel de detalle de vista"
  ]
 },
 {
  "id": "N24",
  "slug": "parametros-y-propiedades-del-programa",
  "t": "Authoring tool parameters and properties",
  "en": "Parámetros y propiedades del programa",
  "b": "III",
  "d": "Native containers for alphanumerical information in each authoring tool. They should be defined once and with the name the requirement asks for.",
  "ej": "—",
  "eq": "Revit: shared parameters (TXT); Archicad: Property Manager and expressions; Allplan: attributes; Tekla: Trimble Connect property sets.",
  "err": "Entering the data in a parameter that the IFC exporter does not map to any Pset.",
  "rel": [
   "N03",
   "N26"
  ],
  "al": [
   "shared parameters",
   "parameters",
   "attributes",
   "parámetros compartidos",
   "parámetros",
   "atributos"
  ]
 },
 {
  "id": "N25",
  "slug": "gestor-de-requisitos-de-informacion",
  "t": "Information requirements management platform",
  "en": "Gestor de requisitos de información",
  "b": "IV",
  "d": "Platform that stores requirements by object, milestone, purpose and actor, and exports them to templates, rules or IDS.",
  "ej": "—",
  "eq": "dRofus, Plannerly, BIMQ, Cobuilder Require (exports one IDS per milestone and purpose).",
  "err": "Managing hundreds of requirements in a spreadsheet with no version control.",
  "rel": [
   "N15",
   "N22",
   "N27"
  ],
  "al": [
   "requirements management platform",
   "requirements management platforms",
   "requirements manager",
   "gestor de requisitos",
   "gestores de requisitos"
  ]
 },
 {
  "id": "N26",
  "slug": "conjunto-de-propiedades-ifc",
  "t": "IFC property set (Pset)",
  "en": "Conjunto de propiedades IFC (Pset)",
  "b": "V",
  "d": "Grouping of properties of an IFC object. The standard buildingSMART Pset_ sets (e.g. Pset_DoorCommon) have fixed names and types; quantity sets (Qto_) store measurements.",
  "ej": "Pset_DoorCommon.FireRating (IfcLabel), IsExternal (IfcBoolean).",
  "eq": "Revit: Property Sets tab of the exporter and user-defined property set TXT files; Archicad: IFC Translators.",
  "err": "Creating custom sets whose names start with “Pset_” or duplicating a standard property.",
  "rel": [
   "N03",
   "N24",
   "N27"
  ],
  "al": [
   "property set",
   "property sets",
   "Pset",
   "Psets",
   "Pset_DoorCommon",
   "Qto"
  ]
 },
 {
  "id": "N27",
  "slug": "ids-n27",
  "t": "Information Delivery Specification (IDS)",
  "en": "IDS (Information Delivery Specification)",
  "b": "V",
  "d": "buildingSMART standard (1.0, June 2024): an XML file with checkable requirements for an IFC, split into applicability and requirements, with six facets. Its header accepts purpose and milestone; it cannot require geometry.",
  "ej": "Door IDS: FireRating with pattern “EI2? \\d+(-C\\d)?” and IsExternal as a boolean.",
  "eq": "Import IDS: Archicad 28+, Allplan 2026, Vectorworks 2024+, BricsCAD V25; validate: IfcTester, Solibri (rule 244), BIMcollab Zoom; Revit with add-ins.",
  "err": "Thinking IDS covers the whole level of information need: it leaves out geometry and documents.",
  "rel": [
   "N01",
   "N26",
   "N30"
  ],
  "al": [
   "Information Delivery Specification",
   "IDS"
  ]
 },
 {
  "id": "N28",
  "slug": "cobie-n28",
  "t": "Construction Operations Building information exchange (COBie)",
  "en": "COBie",
  "b": "V",
  "d": "Subset of data for operation and maintenance (facilities, spaces, types, components, warranties). COBie v3 (2023) is part of NBIMS-US V4 and adds JSON.",
  "ej": "—",
  "eq": "COBie exporters in authoring tools; spreadsheets and IFC.",
  "err": "Requesting full COBie at design stages.",
  "rel": [
   "N04",
   "N06"
  ],
  "al": [
   "COBie",
   "COBie v3"
  ]
 },
 {
  "id": "N29",
  "slug": "idm",
  "t": "Information Delivery Manual (IDM) (ISO 29481)",
  "en": "IDM (ISO 29481)",
  "b": "V",
  "d": "Method for describing the processes and information exchanges of a use case. ISO 29481-3:2022 provides a machine-readable data schema.",
  "ej": "—",
  "eq": "buildingSMART Use Case Management; IDS as the checkable technical part.",
  "err": "Writing requirements without the process that justifies them.",
  "rel": [
   "N05",
   "N27"
  ],
  "al": [
   "Information Delivery Manual",
   "IDM",
   "ISO 29481"
  ]
 },
 {
  "id": "N30",
  "slug": "comprobacion-de-requisitos",
  "t": "Requirements checking",
  "en": "Comprobación de requisitos",
  "b": "VI",
  "d": "Verifying that a delivery meets its level of information need: that the properties exist, have a value and that the value is valid; geometry is reviewed with rules and sampling.",
  "ej": "IfcTester 0.9.0: 1 of 3 doors passes the test IDS.",
  "eq": "IfcTester, Solibri, BIMcollab Zoom, usBIM.IDS, xbim; the buildingSMART Validation Service does not check IDS.",
  "err": "Checking only on receipt, when fixing is more expensive.",
  "rel": [
   "N27",
   "N26"
  ],
  "al": [
   "requirements checking",
   "IDS validation",
   "IfcTester",
   "comprobación de requisitos",
   "validación IDS"
  ]
 },
 {
  "id": "N31",
  "slug": "guias-nacionales-de-niveles-de-informacion",
  "t": "National level of information guidance",
  "en": "Guías nacionales de niveles de información",
  "b": "II",
  "d": "Each country's documents that specify how to request levels of information: acronyms, scales, matrix templates and examples. Some follow the LOD 100-500 scale and others the level of information need.",
  "ej": "Spain: UNE-EN ISO 7817-1:2025 and CBIM guides; Chile: MINVU NDI and Planbim; Peru: Plan BIM level of information need matrix; Germany: Arbeitshilfe LOIN-Konzept.",
  "eq": "—",
  "err": "Copying another country's matrix without adapting the purposes or milestones.",
  "rel": [
   "N01",
   "N09",
   "N13"
  ],
  "al": [
   "national guidance",
   "NDI",
   "Plan BIM",
   "Planbim"
  ]
 },
 {
  "id": "N32",
  "slug": "iso-7817-2-e-iso-7817-3",
  "t": "ISO 7817-2 and ISO 7817-3",
  "en": "ISO 7817-2 e ISO 7817-3",
  "b": "II",
  "d": "Parts in preparation: Part 2 (ISO/DTS) is an application guide with examples and templates; Part 3 (ISO/DIS) defines a UML data model and an XSD schema for exchanging the level of information need.",
  "ej": "—",
  "eq": "Libraries that read drafts of Part 3 (e.g. openbim-loin).",
  "err": "Implementing the Part 3 draft as if it were final.",
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
  "t": "Clash / conflict",
  "en": "Interferencia / colisión",
  "b": "I",
  "d": "Incompatibility between elements of one or more models (spatial, clearance or time-based) that would prevent building, operating or maintaining the asset as designed; it is detected by comparing sets of elements against agreed rules and tolerances.",
  "ej": "An HVAC duct runs through a concrete beam.",
  "eq": "Navisworks: Clash; Solibri: Issue/Clash (component intersection rule); Revit: Interference Check; ACC Model Coordination: Clash; IfcClash: clash; BCF: Topic (type Clash)",
  "err": "Mistaking a geometric result for a real problem: many results are irrelevant or duplicated.",
  "rel": [
   "D02",
   "D03",
   "D04",
   "D08",
   "D10"
  ],
  "al": [
   "clash",
   "clashes",
   "conflict",
   "conflicts",
   "interference",
   "interferences",
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
  "t": "Hard clash",
  "en": "Interferencia dura",
  "b": "I",
  "d": "Two elements occupy the same physical space: their geometries intersect beyond the accepted penetration tolerance.",
  "ej": "A drainage pipe passing through a column.",
  "eq": "Navisworks: Hard / Hard (Conservative); Solibri: Intersection; ACC: Hard clash; IfcClash: intersection/collision",
  "err": "Reporting planned penetrations (sleeves) or tangential contacts without tolerance as hard clashes.",
  "rel": [
   "D05",
   "D12"
  ],
  "al": [
   "hard clash",
   "hard clashes",
   "physical clash",
   "interferencia dura",
   "choque duro"
  ]
 },
 {
  "id": "D03",
  "slug": "interferencia-blanda-o-de-holgura",
  "t": "Soft / clearance clash",
  "en": "Interferencia blanda o de holgura",
  "b": "I",
  "d": "An element intrudes into the minimum distance or free volume required around another (insulation, installation, access, safety) even though it does not touch it.",
  "ej": "A cable tray 5 cm from a duct where 30 cm of separation is required.",
  "eq": "Navisworks: Clearance; Solibri: Clearance / distance rule; Revizto: Clearance (with H/V offsets); IfcClash: clearance",
  "err": "Applying a single clearance to the whole model; clearance depends on the system and should be modelled as a volume when it is for maintenance.",
  "rel": [
   "D05",
   "D20"
  ],
  "al": [
   "clearance",
   "soft clash",
   "clearance clash",
   "soft clashes",
   "clearance clashes",
   "holgura",
   "interferencia de holgura"
  ]
 },
 {
  "id": "D04",
  "slug": "interferencia-de-flujo-de-trabajo-4d",
  "t": "Workflow / 4D / time-space clash",
  "en": "Interferencia de flujo de trabajo / 4D",
  "b": "I",
  "d": "Conflict that arises when the model is linked to the schedule: two activities, crews or workspaces coincide in place and time, or the sequence makes it impossible to install something.",
  "ej": "The crane's slewing radius encroaches on the façade installation zone in week 32.",
  "eq": "Navisworks: Clash Detective with TimeLiner; Synchro: 4D conflicts; ACC/Revizto: limited",
  "err": "Treating it with the same rules as a static spatial clash.",
  "rel": [
   "D01",
   "D24"
  ],
  "al": [
   "4D clash",
   "workflow clash",
   "time-space clash",
   "sequencing clash",
   "4D",
   "secuencia",
   "interferencia de flujo"
  ]
 },
 {
  "id": "D05",
  "slug": "tolerancia-de-deteccion",
  "t": "Clash tolerance",
  "en": "Tolerancia de detección",
  "b": "I",
  "d": "Numerical value that defines what gets reported: for hard clashes, the minimum penetration from which a clash is reported; for clearance, the maximum distance below which it is reported. It is usually adjusted by stage and discipline.",
  "ej": "Hard with 10 mm to ignore modelling contacts; 50 mm clearance between ducts.",
  "eq": "Navisworks: Tolerance; Solibri: tolerance in rules; Revizto: Tolerance; IfcClash: tolerance/clearance",
  "err": "Confusing detection tolerance with construction tolerance, or raising it so far that it hides real clashes.",
  "rel": [
   "D02",
   "D03",
   "D06"
  ],
  "al": [
   "tolerance",
   "clash tolerance",
   "detection tolerance",
   "tolerances",
   "tolerancia"
  ]
 },
 {
  "id": "D06",
  "slug": "matriz-de-deteccion",
  "t": "Clash matrix / clash test plan",
  "en": "Matriz de detección (plan de pruebas)",
  "b": "I",
  "d": "Table, agreed in the BEP, that defines which pairs of disciplines or systems are checked, with which type of test and tolerance, at which stage, with which priority and who is responsible.",
  "ej": "ARC vs STR hard 0 mm; DRN vs HVAC clearance 25 mm; ELE vs all, construction stage.",
  "eq": "Navisworks: list of Tests; Solibri: Ruleset; ACC: Clash test (automatic); BIMcollab/Revizto: Clash sets",
  "err": "Testing 'everything against everything' without a matrix and getting thousands of useless results.",
  "rel": [
   "D05",
   "D13",
   "D16",
   "D07"
  ],
  "al": [
   "clash matrix",
   "clash test plan",
   "test matrix",
   "detection matrix",
   "matriz de detección",
   "matriz de pruebas",
   "matriz"
  ]
 },
 {
  "id": "D07",
  "slug": "agrupacion-de-interferencias",
  "t": "Clash grouping",
  "en": "Agrupación de interferencias",
  "b": "I",
  "d": "Bringing together results with a common cause or solution (same element, system, level, zone or person responsible) to manage them as a single issue.",
  "ej": "40 clashes between the same cable tray and 40 joists are handled as one issue.",
  "eq": "Navisworks: Clash groups/Group; Solibri: grouping of results into Issues; BIM Track: Clash grouper; Revizto: Grouping; IfcClash: smart grouping",
  "err": "Grouping only by level or grid, mixing problems that belong to different people.",
  "rel": [
   "D08",
   "D10",
   "D12"
  ],
  "al": [
   "clash grouping",
   "grouping",
   "clash groups",
   "grouped",
   "agrupación",
   "agrupar"
  ]
 },
 {
  "id": "D08",
  "slug": "falso-positivo-interferencia-irrelevante",
  "t": "False positive / irrelevant clash",
  "en": "Falso positivo / interferencia irrelevante",
  "b": "I",
  "d": "Result that the tool flags as a clash but needs no action: an intentional contact, an element not modelled in enough detail, a problem that can be solved on site or an element already resolved.",
  "ej": "A clash between pipe insulation and its clamp.",
  "eq": "Navisworks: Approved/Resolved; Solibri: Accepted/Rejected; ACC: Not an issue; BCF: closed TopicStatus",
  "err": "Approving in bulk without criteria or, conversely, sending everything to the disciplines.",
  "rel": [
   "D05",
   "D07",
   "D12"
  ],
  "al": [
   "false positive",
   "false positives",
   "irrelevant clash",
   "irrelevant clashes",
   "falso positivo",
   "falsos positivos"
  ]
 },
 {
  "id": "D09",
  "slug": "coordinacion-espacial-modelo-federado-de-coordinacion",
  "t": "Spatial coordination / federated coordination model",
  "en": "Coordinación espacial / modelo federado de coordinación",
  "b": "I",
  "d": "Process of bringing together each discipline's models, without merging them or losing their authorship, into a georeferenced federated model on which incompatibilities are detected and resolved.",
  "ej": "Architecture, structure and MEP in IFC federated in a common viewer with a shared origin.",
  "eq": "Navisworks: NWF/NWD; Solibri: SMC with several IFC files; ACC: Coordination space; Revizto/BIMcollab Zoom; Trimble Connect",
  "err": "Federating models with different origins or versions, or coordinating on a 'merged' model that erases authorship.",
  "rel": [
   "C17",
   "D16",
   "D24"
  ],
  "al": [
   "spatial coordination",
   "3D coordination",
   "federated coordination model",
   "coordination model",
   "coordinación espacial",
   "coordinación 3D"
  ]
 },
 {
  "id": "D10",
  "slug": "incidencia",
  "t": "Issue (topic)",
  "en": "Incidencia (issue / topic)",
  "b": "I",
  "d": "Manageable record of a detected problem, with title, description, type, status, priority, assignee, due date, comments and associated views; in BCF it is called a Topic.",
  "ej": "Topic 'Duct C-12 against beam V-3, level 2', assigned to MEP, due Friday.",
  "eq": "BCF: Topic; Navisworks: Clash result/Issue; Solibri: Issue; ACC: Issue; Revizto: Issue; Trimble Connect: ToDo",
  "err": "Using the issue as a screenshot with no assignee or status.",
  "rel": [
   "D11",
   "D14",
   "D22"
  ],
  "al": [
   "issue",
   "issues",
   "topic",
   "topics",
   "incidencia",
   "incidencias"
  ]
 },
 {
  "id": "D11",
  "slug": "punto-de-vista-y-captura",
  "t": "Viewpoint and snapshot",
  "en": "Punto de vista y captura",
  "b": "I",
  "d": "Display state associated with an issue: camera (orthogonal or perspective), clipping planes, selected, visible or coloured components (by IFC GUID) and a reference image.",
  "ej": "viewpoint.bcfv with camera, two components selected by IfcGuid and snapshot.png.",
  "eq": "BCF: .bcfv + PNG/JPEG snapshot; Navisworks: Viewpoint; Solibri: Slide; ACC/Revizto: issue view",
  "err": "Sharing only the image without components: the recipient cannot select the elements in their own software.",
  "rel": [
   "D10",
   "D14",
   "D17"
  ],
  "al": [
   "viewpoint",
   "viewpoints",
   "snapshot",
   "snapshots",
   "punto de vista",
   "puntos de vista"
  ]
 },
 {
  "id": "D12",
  "slug": "duplicados",
  "t": "Duplicates",
  "en": "Duplicados",
  "b": "I",
  "d": "Repeated or overlapping elements with identical (or nearly identical) geometry in the same place, within one model or across models; they inflate quantities and clash results.",
  "ej": "A column modelled in both architecture and structure, or a wall copied twice.",
  "eq": "Navisworks: Duplicates; Solibri: duplicate components rule; Revit: 'identical instances' warning",
  "err": "Not running it before cross-discipline tests, multiplying the results.",
  "rel": [
   "D08",
   "D25"
  ],
  "al": [
   "duplicate",
   "duplicates",
   "duplicated elements",
   "duplicate elements",
   "duplicado",
   "duplicados"
  ]
 },
 {
  "id": "D13",
  "slug": "jerarquia-de-resolucion",
  "t": "Clash resolution hierarchy / right of way",
  "en": "Jerarquía de resolución (quién se mueve)",
  "b": "I",
  "d": "Order, agreed in the BEP, that decides which system gives way in a clash according to its flexibility: larger, permanent or constrained elements (structure, gravity drainage) take priority.",
  "ej": "Gravity drainage > ducts > pressurised pipes/fire protection > cable trays and electrical conduits.",
  "eq": "BEP priority matrix; ETS: severity A/B/C; Ashghal: priority A-C and severity 1-4",
  "err": "Applying it without exceptions (e.g. a small duct against a main sewer).",
  "rel": [
   "D06",
   "D24",
   "D20"
  ],
  "al": [
   "resolution hierarchy",
   "right of way",
   "who moves",
   "clash resolution hierarchy",
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
  "d": "Open buildingSMART standard for exchanging issues about models (IFC or others) without sending the model: XML (BCF-XML, .bcfzip/.bcf container) or web services (BCF API). Versions 1.0 (2011), 2.0, 2.1 and 3.0.",
  "ej": "Exporting 25 topics from Solibri in BCF 2.1 and importing them into Revit with BCF Manager.",
  "eq": "BCF-XML 2.1/3.0; BCF API 2.1/3.0; add-ins for Revit/Archicad/Tekla; BIMcollab; Revizto; Trimble Connect; Catenda; Bonsai",
  "err": "Mixing versions (3.0 vs 2.1) or losing fields (priority, server id) on export.",
  "rel": [
   "D10",
   "D11",
   "D15",
   "D17"
  ],
  "al": [
   "BCF",
   "BIM Collaboration Format",
   "BCF-XML",
   "BCF file"
  ]
 },
 {
  "id": "D15",
  "slug": "bcf-api-opencde",
  "t": "BCF API / OpenCDE APIs",
  "en": "BCF API / OpenCDE",
  "b": "II",
  "d": "REST/JSON specification for synchronising BCF issues between applications and servers; it belongs to the OpenCDE family together with the Foundation API (discovery, OAuth 2.0, user) and the Documents API (download/upload to the CDE).",
  "ej": "A Revit add-in calls GET /bcf/3.0/projects/{id}/topics and updates the status without passing files around.",
  "eq": "BCF API 2.1/3.0; OpenCDE Foundation API 1.0/1.1; Documents API 1.0",
  "err": "Assuming that 'supports BCF' means supporting the API (many tools only read/write files).",
  "rel": [
   "D14",
   "C30"
  ],
  "al": [
   "BCF API",
   "OpenCDE",
   "OpenCDE APIs",
   "Foundation API",
   "Documents API"
  ]
 },
 {
  "id": "D16",
  "slug": "iso-19650-y-coordinacion",
  "t": "ISO 19650 and coordination",
  "en": "ISO 19650 y coordinación",
  "b": "II",
  "d": "Information management framework (EN ISO 19650) that allocates coordination: each task team reviews and coordinates its information before sharing it; the lead appointed party defines the federation strategy, the container breakdown structure and the responsibility matrix, and compiles the TIDPs into the MIDP.",
  "ej": "The BEP sets the federation strategy by building and discipline, and the matrix that assigns clash detection to the delivery team's coordinator.",
  "eq": "ISO 19650-1/-2 (2018; 2026 revision); UNE-EN ISO 19650; UK BIM Framework; Plan BIM (Orden PCM/818/2023)",
  "err": "Believing that ISO 19650 defines job titles (BIM Manager) or the clash detection procedure: it defines functions and processes.",
  "rel": [
   "C25",
   "C17",
   "C30",
   "D06"
  ],
  "al": [
   "federation strategy",
   "TIDP",
   "MIDP",
   "lead appointed party",
   "task team",
   "estrategia de federación"
  ]
 },
 {
  "id": "D17",
  "slug": "identificador-de-objeto-ifc",
  "t": "IFC GlobalId (IfcGloballyUniqueId)",
  "en": "Identificador de objeto IFC (GlobalId)",
  "b": "II",
  "d": "Unique 128-bit identifier of each IFC object, encoded in 22 characters (alphabet 0-9A-Za-z_$); BCF uses it (IfcGuid) to reference components, so it must remain stable between exports.",
  "ej": "2O2Fr$t4X7Zf8NOew3FLOH identifies the same door in every version of the IFC file.",
  "eq": "IFC: GlobalId; BCF: IfcGuid; Revit: IfcGUID/IFC GUID parameter (derived from the UniqueId); Archicad: IFC GlobalId; Tekla: GUID",
  "err": "Regenerating GUIDs on export (copy/paste, delete and redraw) breaks issue traceability.",
  "rel": [
   "D11",
   "D14"
  ],
  "al": [
   "GlobalId",
   "IfcGloballyUniqueId",
   "IFC GUID",
   "IfcGuid",
   "GUID"
  ]
 },
 {
  "id": "D18",
  "slug": "conjunto-de-seleccion-conjunto-de-busqueda",
  "t": "Selection set / search set",
  "en": "Conjunto de selección / conjunto de búsqueda",
  "b": "III",
  "d": "Saved grouping of elements of the federated model used as side A or B of a clash test. A selection set stores specific elements (static); a search set stores criteria (property, category, system) and is re-evaluated when the model changes (dynamic).",
  "ej": "Search set 'MEP – Drainage' = elements whose 'System Type' contains 'Sanitary'; it is tested against the search set 'STR – Beams'. When the new model version is loaded, the set automatically includes the new pipes.",
  "eq": "Navisworks: Selection Set / Search Set (Sets window, Find Items); BIMcollab Zoom: Smart Views as source/target set; Revizto: search sets A/B; Solibri: rule component filters; Archicad: Group 1 / Group 2 by criteria; IfcClash: group A/B selectors; MicroStation: levels/references/Named Groups.",
  "err": "Using static selection sets in repeated tests: new elements from the next delivery are left out and the test gives a false 'zero clashes'. Also: criteria based on non-standardised names.",
  "rel": [
   "D06",
   "D19",
   "D08",
   "C17"
  ],
  "al": [
   "selection set",
   "selection sets",
   "search set",
   "search sets",
   "conjunto de selección",
   "conjuntos de búsqueda"
  ]
 },
 {
  "id": "D19",
  "slug": "reglas-de-exclusion-y-conjuntos-de-reglas",
  "t": "Clash rules / ignore rules and rulesets",
  "en": "Reglas de exclusión y conjuntos de reglas",
  "b": "III",
  "d": "Conditions that stop the program from reporting certain clashes (ignore rules) and saved, reusable groupings of checking rules (rulesets). They remove systematic false positives and standardise checking.",
  "ej": "In Navisworks, enabling 'Items in Same File' to skip clashes within each discipline and the 'Insulation Thickness' template for insulated pipes; in Solibri, an 'MEP-STR Coordination' ruleset with the General Intersection Rule and 'duct passes through wall' exceptions.",
  "eq": "Navisworks: Rules tab (6 default rules + templates); Solibri: Ruleset / Intersection Exceptions; Revizto: Ignore rules; Bentley: Suppression rules; Trimble Connect: 'Ignore clashes within the same file/type'; Archicad: 'Participates in Collision Detection' by material; BIMcollab Zoom: Local/Shared rulesets.",
  "err": "Rules that are too broad (e.g. 'Same File' on a model federated into a single NWD) that hide real clashes; or not documenting the rules in the BEP, so each coordinator gets different results.",
  "rel": [
   "D08",
   "D18",
   "D06",
   "D05",
   "C32"
  ],
  "al": [
   "ignore rules",
   "clash rules",
   "suppression rules",
   "ruleset",
   "rulesets",
   "reglas de exclusión",
   "conjunto de reglas"
  ]
 },
 {
  "id": "D20",
  "slug": "zona-libre-espacio-de-mantenimiento-y-acceso",
  "t": "Clearance / maintenance and access zone",
  "en": "Zona libre / espacio de mantenimiento y acceso",
  "b": "I",
  "d": "Volume that must be kept free around equipment or elements in order to operate, maintain, replace or access them safely; it is modelled as an auxiliary solid and checked with clearance or hard tests against that volume.",
  "ej": "A 1 m zone in front of an electrical panel, or the access-panel opening zone of an AHU.",
  "eq": "'Clearance' families/objects in Revit; Solibri: free space rule; Navisworks: test against clearance solids",
  "err": "Not modelling it and relying on the global tolerance; or modelling it as a solid that is then measured or exported as a real element.",
  "rel": [
   "D03",
   "D13"
  ],
  "al": [
   "clearance zone",
   "maintenance zone",
   "access zone",
   "free space",
   "maintenance space",
   "zona libre",
   "espacio libre",
   "espacio de mantenimiento"
  ]
 },
 {
  "id": "D21",
  "slug": "deteccion-automatica-en-la-nube",
  "t": "Automated cloud clash detection",
  "en": "Detección automática en la nube",
  "b": "IV",
  "d": "Clash calculation run by a service in the CDE without manual intervention when a model is published or updated in a coordination space, or on a schedule, leaving the results accessible to the whole team.",
  "ej": "When the new version of the HVAC IFC file is uploaded to the coordination space, Forma Model Coordination recalculates the clashes against structure and architecture and shows them grouped.",
  "eq": "Model Coordination (Autodesk Forma/BIM Collaborate Pro), Clash Automation (Revizto), clash spaces (Aconex), cloud clash sets (Trimble Connect).",
  "err": "Assuming that 'automated' means as configurable as Navisworks: Model Coordination has no tolerance or test matrix in the calculation, only filters afterwards; or leaving container models switched on and multiplying noise and processing time.",
  "rel": [
   "D05",
   "D06",
   "D07",
   "D09",
   "C30"
  ],
  "al": [
   "automated clash detection",
   "automatic clash detection",
   "cloud clash detection",
   "detección automática"
  ]
 },
 {
  "id": "D22",
  "slug": "estado-y-ciclo-de-vida-de-la-incidencia",
  "t": "Issue status and lifecycle",
  "en": "Estado y ciclo de vida de la incidencia",
  "b": "V",
  "d": "Sequence of statuses an issue goes through from creation until its closure is verified (e.g. New → Active/Assigned → Resolved by the author → Verified/Closed, or Dismissed), with assignee, dates and history.",
  "ej": "The coordinator creates the issue 'Duct vs beam L3' (Open) and assigns it to MEP; MEP marks it Resolved; after re-running the test the coordinator moves it to Closed.",
  "eq": "Topic status (BCF), New/Active/Reviewed/Approved/Resolved (Navisworks), Open/Closed (ACC Issues).",
  "err": "Mapping statuses incorrectly between programs: BCF does not fix values, each server defines them in extensions; on import into ACC everything arrives as 'Open' except 'Closed'; confusing 'Resolved' with 'Closed'.",
  "rel": [
   "D10",
   "D14",
   "D15",
   "D23",
   "D26"
  ],
  "al": [
   "issue status",
   "issue lifecycle",
   "lifecycle",
   "life cycle",
   "estado de la incidencia",
   "ciclo de vida"
  ]
 },
 {
  "id": "D23",
  "slug": "indicadores-de-coordinacion",
  "t": "Coordination KPIs",
  "en": "Indicadores de coordinación (KPI)",
  "b": "VI",
  "d": "Metrics that measure the health of the coordination process: open/closed issues, new issues per cycle, mean time to close, age, reopened issues, trend by discipline or zone and the identified/resolved ratio.",
  "ej": "Weekly dashboard: 42 open (−15 %), mean time to close 9 days, 6 reopened; MEP-structure accounts for 60 % of the open issues on L2.",
  "eq": "Clash metrics, coordination dashboard, clash aging.",
  "err": "Measuring the raw number of clashes (dominated by false positives and duplicates) instead of grouped issues; comparing cycles with different tests or tolerances.",
  "rel": [
   "D07",
   "D08",
   "D22",
   "D24",
   "C32"
  ],
  "al": [
   "KPI",
   "KPIs",
   "coordination KPIs",
   "indicators",
   "coordination metrics",
   "indicadores"
  ]
 },
 {
  "id": "D24",
  "slug": "reunion-de-coordinacion",
  "t": "Coordination meeting",
  "en": "Reunión de coordinación",
  "b": "I",
  "d": "Regular session (usually weekly or fortnightly) around the federated model in which prioritised issue groups are reviewed, solutions are agreed and owners and deadlines are assigned, recorded in BCF/CDE.",
  "ej": "Weekly meeting: review of 15 priority issues on level 3 with MEP and structure.",
  "eq": "ACC/BIM 360 Coordination; Revizto; BIMcollab; Navisworks in the meeting room; Teams + BCF",
  "err": "Reviewing clash by clash without preparation and without assigning tasks at the end.",
  "rel": [
   "D09",
   "D10",
   "D13"
  ],
  "al": [
   "coordination meeting",
   "coordination meetings",
   "clash review meeting",
   "reunión de coordinación"
  ]
 },
 {
  "id": "D25",
  "slug": "nivel-de-informacion-y-aptitud-del-modelo-para-detectar",
  "t": "Level of information need / LOD",
  "en": "Nivel de información y aptitud del modelo para detectar",
  "b": "I",
  "d": "Degree of geometric and alphanumeric development each element must have for a purpose; coordination needs geometry with size, position and interfaces (e.g. BIMForum LOD 350), defined according to the LOIN (EN ISO 7817-1:2024).",
  "ej": "Ducts with insulation and supports modelled before trade coordination.",
  "eq": "BIMForum LOD 100-500 (350 for coordination); EN ISO 7817-1 (LOIN); IDS to check requirements",
  "err": "Running clash detection on LOD 200 models and making decisions on generic geometry.",
  "rel": [
   "D01",
   "D08",
   "C32"
  ],
  "al": [
   "level of information need",
   "level of development",
   "LOD",
   "LOIN",
   "nivel de desarrollo",
   "nivel de información necesario"
  ]
 },
 {
  "id": "D26",
  "slug": "verificacion-de-cierre",
  "t": "Closure verification / clash re-run",
  "en": "Verificación de cierre",
  "b": "VI",
  "d": "Check that an issue marked as resolved really is: the same test (same rules and tolerance) is re-run on the new version of the models and it is confirmed that the clash disappears without creating others, before the issue is closed.",
  "ej": "After the new version of the plumbing model, the coordinator re-runs the PLU_v_STR test; the clash disappears and the issue moves from Resolved to Closed; a new clash with the suspended ceiling generates another issue.",
  "eq": "Re-run, verify fix, Approved/Resolved in Clash Detective, clashes shown in red as out of date (Trimble Connect).",
  "err": "Closing on the author's word without re-running, or re-running with a different tolerance or model and accepting the disappearance as valid.",
  "rel": [
   "D22",
   "D23",
   "D06",
   "D05"
  ],
  "al": [
   "closure verification",
   "clash re-run",
   "re-run",
   "verify fix",
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
  "t": "BIM execution plan (BEP)",
  "en": "Plan de ejecución BIM (BEP)",
  "b": "I",
  "d": "Plan explaining how the delivery team will manage and deliver the information for an appointment to meet the EIR: people, strategy, federation, responsibilities, methods, standard and resources.",
  "ej": "The Andalusian regional government (AOPJA) calls it PEB and asks for a pre-PEB with the tender and the PEB after award.",
  "eq": "ISO 19650-2: BIM execution plan; Penn State: BIM Project Execution Plan (PxP); NBIMS-US V4: BIM Execution Plan; ISO revision in progress: possibly «Information Production Plan».",
  "err": "Writing a generic company manual that answers no specific requirement of the EIR.",
  "rel": [
   "P02",
   "P03",
   "P04",
   "P16",
   "P21"
  ],
  "al": [
   "BIM execution plan",
   "BIM execution plans",
   "BEP",
   "execution plan",
   "plan de ejecución BIM",
   "planes de ejecución BIM",
   "PEB"
  ]
 },
 {
  "id": "P02",
  "slug": "bep-previo-a-la-designacion",
  "t": "Pre-appointment BEP",
  "en": "BEP previo a la designación",
  "b": "I",
  "d": "Version of the BEP that each prospective lead appointed party submits with its tender (ISO 19650-2, 5.3.2) to show how it will meet the EIR; it includes a high-level responsibility matrix.",
  "ej": "pre-PEB in the AOPJA model EIR (2024).",
  "eq": "PAS 1192-2: pre-contract BEP; Penn State: proposal.",
  "err": "Presenting it as a sales brochure instead of a point-by-point response to the EIR.",
  "rel": [
   "P01",
   "P03",
   "P16",
   "P29"
  ],
  "al": [
   "pre-appointment BEP",
   "pre-appointment BIM execution plan",
   "pre-BEP",
   "pre-contract BEP",
   "BEP previo",
   "pre-PEB"
  ]
 },
 {
  "id": "P03",
  "slug": "bep-confirmado",
  "t": "Post-appointment BEP",
  "en": "BEP confirmado (posterior a la designación)",
  "b": "I",
  "d": "BEP that the appointed delivery team confirms and details after the appointment (ISO 19650-2, 5.4.1): names of the people, detailed matrix, agreed methods and standard. It forms part of the contract documents.",
  "ej": "PEB after award in the AOPJA tender documents.",
  "eq": "PAS 1192-2: post-contract award BEP.",
  "err": "Not updating it after signing: halfway through the project it describes a team that no longer exists.",
  "rel": [
   "P01",
   "P02",
   "P17",
   "P18"
  ],
  "al": [
   "post-appointment BEP",
   "post-appointment BIM execution plan",
   "confirmed BEP",
   "post-contract BEP",
   "BEP confirmado"
  ]
 },
 {
  "id": "P04",
  "slug": "requisitos-de-intercambio-de-informacion",
  "t": "Exchange information requirements (EIR)",
  "en": "Requisitos de intercambio de información (EIR)",
  "b": "I",
  "d": "Information requirements for a specific appointment (management, commercial and technical aspects). The appointing party writes them and the lead appointed party passes them on to each appointed party.",
  "ej": "«BIM Requirements (EIR)» annex of the AOPJA tender documents.",
  "eq": "PAS 1192-2: Employer's Information Requirements; Spanish BIM Plan: BIM requirements in the technical specifications.",
  "err": "Still reading EIR as «Employer's»: under ISO 19650 there is an EIR for every appointment, including those to subcontractors.",
  "rel": [
   "P05",
   "P06",
   "P07",
   "P01"
  ],
  "al": [
   "exchange information requirements",
   "EIR",
   "EIRs",
   "information requirements",
   "requisitos de intercambio de información",
   "requisitos de intercambio"
  ]
 },
 {
  "id": "P05",
  "slug": "requisitos-de-informacion-de-la-organizacion",
  "t": "Organizational information requirements (OIR)",
  "en": "Requisitos de información de la organización (OIR)",
  "b": "I",
  "d": "Information requirements linked to the organization's strategic objectives for its assets; they feed the PIR and the AIR.",
  "ej": "A city council that needs to know the energy consumption of all its buildings.",
  "eq": "ISO 19650-1.",
  "err": "Skipping them and writing the EIR without knowing which decisions the information is for.",
  "rel": [
   "P06",
   "P07",
   "P04"
  ],
  "al": [
   "organizational information requirements",
   "OIR",
   "organisational information requirements",
   "requisitos de información de la organización"
  ]
 },
 {
  "id": "P06",
  "slug": "requisitos-de-informacion-del-proyecto",
  "t": "Project information requirements (PIR)",
  "en": "Requisitos de información del proyecto (PIR)",
  "b": "I",
  "d": "Requirements relating to the purpose, design and construction of the asset, linked to the project's key decision points; they determine the project information model (PIM).",
  "ej": "Information to decide whether to tender the works at the end of the detailed design.",
  "eq": "ISO 19650-1.",
  "err": "Confusing them with the EIR: the PIR belongs to the project; the EIR, to each appointment.",
  "rel": [
   "P05",
   "P04",
   "P08",
   "P19"
  ],
  "al": [
   "project information requirements",
   "PIR",
   "requisitos de información del proyecto"
  ]
 },
 {
  "id": "P07",
  "slug": "requisitos-de-informacion-del-activo-p07",
  "t": "Asset information requirements (AIR)",
  "en": "Requisitos de información del activo (AIR)",
  "b": "I",
  "d": "Requirements for the information needed to operate and maintain the asset; they determine the content of the asset information model (AIM).",
  "ej": "Maintenance data for HVAC equipment requested by the facility manager.",
  "eq": "ISO 19650-1 and -3; COBie as the usual format.",
  "err": "Asking for them at the end of construction instead of including them from the first EIR.",
  "rel": [
   "P05",
   "P09",
   "P04"
  ],
  "al": [
   "asset information requirements",
   "AIR",
   "requisitos de información del activo"
  ]
 },
 {
  "id": "P08",
  "slug": "modelo-de-informacion-del-proyecto-p08",
  "t": "Project information model (PIM)",
  "en": "Modelo de información del proyecto (PIM)",
  "b": "I",
  "d": "Information model (structured and unstructured containers) developed during the delivery phase that transfers to the AIM what the AIR requires.",
  "ej": "Models, drawings and documents for the design and construction of a hospital.",
  "eq": "ISO 19650-1.",
  "err": "Thinking it is only the federated 3D model.",
  "rel": [
   "P09",
   "P06",
   "P24"
  ],
  "al": [
   "project information model",
   "PIM",
   "modelo de información del proyecto"
  ]
 },
 {
  "id": "P09",
  "slug": "modelo-de-informacion-del-activo-p09",
  "t": "Asset information model (AIM)",
  "en": "Modelo de información del activo (AIM)",
  "b": "I",
  "d": "Information model of the operational phase; it receives the relevant information from the PIM at project close-out.",
  "ej": "Maintenance database of the handed-over building.",
  "eq": "ISO 19650-1 and -3.",
  "err": "Handing over the whole PIM as the AIM without filtering what is actually useful for operation.",
  "rel": [
   "P08",
   "P07"
  ],
  "al": [
   "asset information model",
   "AIM",
   "modelo de información del activo"
  ]
 },
 {
  "id": "P10",
  "slug": "parte-que-designa",
  "t": "Appointing party",
  "en": "Parte que designa",
  "b": "I",
  "d": "Receiver of information concerning works, goods or services: usually the client or whoever manages information on its behalf. It writes the EIR and accepts the information.",
  "ej": "A ministry or a public works agency tendering a project.",
  "eq": "ISO 19650: appointing party; PAS 1192: employer.",
  "err": "Simply calling it «the client» when in fact a delegated information manager is acting.",
  "rel": [
   "P11",
   "P12",
   "P04"
  ],
  "al": [
   "appointing party",
   "appointing parties",
   "parte que designa"
  ]
 },
 {
  "id": "P11",
  "slug": "parte-designada-principal",
  "t": "Lead appointed party",
  "en": "Parte designada principal",
  "b": "I",
  "d": "Party appointed by the appointing party that coordinates and manages information between its delivery team and the appointing party. It writes the BEP and the MIDP.",
  "ej": "The architecture practice that wins the competition and subcontracts structures and building services.",
  "eq": "ISO 19650: lead appointed party.",
  "err": "Assuming there is only one per project: there is one for every delivery team.",
  "rel": [
   "P10",
   "P12",
   "P13",
   "P18"
  ],
  "al": [
   "lead appointed party",
   "lead appointed parties",
   "parte designada principal"
  ]
 },
 {
  "id": "P12",
  "slug": "parte-designada",
  "t": "Appointed party",
  "en": "Parte designada",
  "b": "I",
  "d": "Provider of information appointed by the lead appointed party; it receives its own EIR and writes the TIDP for its task teams.",
  "ej": "The structural engineering firm subcontracted by the architecture practice.",
  "eq": "ISO 19650: appointed party.",
  "err": "Not passing it its own EIR: it then does not know what it must deliver.",
  "rel": [
   "P11",
   "P14",
   "P17"
  ],
  "al": [
   "appointed party",
   "appointed parties",
   "parte designada",
   "partes designadas"
  ]
 },
 {
  "id": "P13",
  "slug": "equipo-de-desarrollo",
  "t": "Delivery team",
  "en": "Equipo de desarrollo",
  "b": "I",
  "d": "Group made up of a lead appointed party and its appointed parties.",
  "ej": "Architecture + structures + building services under one main contract.",
  "eq": "ISO 19650: delivery team. In Spanish also «equipo de ejecución» (UNE translation to be confirmed).",
  "err": "Confusing it with the project team, which also includes the appointing party and other delivery teams.",
  "rel": [
   "P11",
   "P12",
   "P15"
  ],
  "al": [
   "delivery team",
   "delivery teams",
   "equipo de desarrollo",
   "equipos de desarrollo"
  ]
 },
 {
  "id": "P14",
  "slug": "equipo-de-tarea",
  "t": "Task team",
  "en": "Equipo de tarea",
  "b": "I",
  "d": "Group of people carrying out a specific package of work within an appointed party.",
  "ej": "The electrical services team within the engineering firm.",
  "eq": "ISO 19650: task team.",
  "err": "Treating the whole company as a single task team and losing the detail of the TIDP.",
  "rel": [
   "P12",
   "P17"
  ],
  "al": [
   "task team",
   "task teams",
   "equipo de tarea",
   "equipos de tarea"
  ]
 },
 {
  "id": "P15",
  "slug": "equipo-del-proyecto",
  "t": "Project team",
  "en": "Equipo del proyecto",
  "b": "I",
  "d": "The appointing party plus all the project's delivery teams.",
  "ej": "Developer, design team and contractor of the same project.",
  "eq": "ISO 19650: project team.",
  "err": "—",
  "rel": [
   "P10",
   "P13"
  ],
  "al": [
   "project team",
   "project teams",
   "equipo del proyecto"
  ]
 },
 {
  "id": "P16",
  "slug": "matriz-de-responsabilidades",
  "t": "Responsibility matrix",
  "en": "Matriz de responsabilidades",
  "b": "I",
  "d": "Table assigning who produces each piece of information: high-level in the pre-appointment BEP and detailed (by container, milestone and responsible party) after the appointment.",
  "ej": "Spreadsheet with containers in rows and teams in columns.",
  "eq": "ISO 19650-2: high-level / detailed responsibility matrix; RACI in project management.",
  "err": "Rows with two «responsible» parties: if everyone is responsible, no one is.",
  "rel": [
   "P02",
   "P17",
   "P18"
  ],
  "al": [
   "responsibility matrix",
   "responsibility matrices",
   "detailed responsibility matrix",
   "high-level responsibility matrix",
   "matriz de responsabilidades",
   "matriz de responsabilidad"
  ]
 },
 {
  "id": "P17",
  "slug": "plan-de-entrega-de-informacion-de-la-tarea",
  "t": "Task information delivery plan (TIDP)",
  "en": "Plan de entrega de información de la tarea (TIDP)",
  "b": "I",
  "d": "List of the containers each task team will deliver, with level of information need, format, date and responsible party.",
  "ej": "TIDP of the structures team for the scheme design.",
  "eq": "ISO 19650-2.",
  "err": "Doing it once and not updating it when the programme changes.",
  "rel": [
   "P18",
   "P14",
   "P16"
  ],
  "al": [
   "task information delivery plan",
   "TIDP",
   "TIDPs",
   "plan de entrega de información de la tarea"
  ]
 },
 {
  "id": "P18",
  "slug": "plan-maestro-de-entrega-de-informacion",
  "t": "Master information delivery plan (MIDP)",
  "en": "Plan maestro de entrega de información (MIDP)",
  "b": "I",
  "d": "Plan bringing together the TIDPs of the whole delivery team, aligned with the appointing party's information delivery milestones.",
  "ej": "MIDP of the team that won a hospital competition.",
  "eq": "ISO 19650-2; Peru: «programa general de desarrollo de la información» (UNE translation to be confirmed).",
  "err": "Using it as a construction Gantt chart instead of as an information plan.",
  "rel": [
   "P17",
   "P19",
   "P11"
  ],
  "al": [
   "master information delivery plan",
   "MIDP",
   "MIDPs",
   "plan maestro de entrega de información",
   "plan maestro de entrega"
  ]
 },
 {
  "id": "P19",
  "slug": "hito-de-entrega-de-informacion-p19",
  "t": "Information delivery milestone",
  "en": "Hito de entrega de información",
  "b": "I",
  "d": "Point at which the appointing party needs information to make a decision; it may fall at the end of a stage or within it.",
  "ej": "Delivery before applying for the building permit.",
  "eq": "ISO 19650-1/2; key decision points.",
  "err": "Setting milestones for the team's convenience rather than around the client's decisions.",
  "rel": [
   "P06",
   "P18"
  ],
  "al": [
   "information delivery milestone",
   "information delivery milestones",
   "delivery milestone",
   "delivery milestones",
   "hito de entrega",
   "hitos de entrega",
   "hito de entrega de información"
  ]
 },
 {
  "id": "P20",
  "slug": "estrategia-de-federacion",
  "t": "Federation strategy",
  "en": "Estrategia de federación",
  "b": "I",
  "d": "How information is split into containers (by discipline, volume, level…) and how they are brought together for coordination.",
  "ej": "One model per discipline and building, federated every week.",
  "eq": "ISO 19650-2 (pre-appointment BEP); information container breakdown structure.",
  "err": "Splitting the model according to each program's habits without thinking about who produces it.",
  "rel": [
   "P01",
   "P24"
  ],
  "al": [
   "federation strategy",
   "federation strategies",
   "estrategia de federación"
  ]
 },
 {
  "id": "P21",
  "slug": "estandar-de-informacion-del-proyecto",
  "t": "Project's information standard",
  "en": "Estándar de información del proyecto",
  "b": "I",
  "d": "Common rules for information: naming, classification, units, levels of information need, coordinate reference system and formats. The BEP proposes changes and the post-appointment BEP fixes them.",
  "ej": "Naming convention + metres + EPSG:25830 + Alicante heights.",
  "eq": "ISO 19650-2, 5.1.4.",
  "err": "Leaving coordinates out: each discipline picks its own origin.",
  "rel": [
   "P28",
   "P22",
   "P01"
  ],
  "al": [
   "project's information standard",
   "information standard",
   "project information standard",
   "estándar de información",
   "estándar de información del proyecto"
  ]
 },
 {
  "id": "P22",
  "slug": "metodos-y-procedimientos-de-produccion-de-la-informacion",
  "t": "Information production methods and procedures",
  "en": "Métodos y procedimientos de producción de la información",
  "b": "I",
  "d": "How information is produced, checked, reviewed, approved and shared on the project.",
  "ej": "Internal review before moving a file to shared.",
  "eq": "ISO 19650-2, 5.1.5.",
  "err": "Confusing them with the standard: the standard says what information looks like; the methods, how the work is done.",
  "rel": [
   "P21",
   "P25"
  ],
  "al": [
   "information production methods and procedures",
   "production methods and procedures",
   "production methods",
   "métodos y procedimientos de producción",
   "métodos de producción"
  ]
 },
 {
  "id": "P23",
  "slug": "protocolo-de-informacion",
  "t": "Information protocol",
  "en": "Protocolo de información",
  "b": "II",
  "d": "Contractual annex that brings information management into the appointment: responsibilities, licences and use of the information.",
  "ej": "—",
  "eq": "UK BIM Framework: Information Protocol (2021).",
  "err": "Signing the contract without it: the BEP then binds no one.",
  "rel": [
   "P04",
   "P01"
  ],
  "al": [
   "information protocol",
   "Information Protocol",
   "protocolo de información"
  ]
 },
 {
  "id": "P24",
  "slug": "contenedor-de-informacion",
  "t": "Information container",
  "en": "Contenedor de información",
  "b": "I",
  "d": "Named persistent set of information retrievable from a file system or application: a drawing, a model, a schedule, a document.",
  "ej": "HSP-ARQ-ZZ-01-M3-A-0001.ifc",
  "eq": "ISO 19650-1.",
  "err": "Thinking only of models: a PDF or a spreadsheet is a container too.",
  "rel": [
   "P28",
   "P25",
   "P08"
  ],
  "al": [
   "information container",
   "information containers",
   "container",
   "containers",
   "contenedor de información",
   "contenedores de información",
   "contenedor",
   "contenedores"
  ]
 },
 {
  "id": "P25",
  "slug": "estados-del-cde",
  "t": "CDE states",
  "en": "Estados del CDE",
  "b": "I",
  "d": "Status of each container in the common data environment: work in progress, shared, published and archived. Each transition requires a check, review or authorization.",
  "ej": "A WIP folder for each team and a published folder for the project.",
  "eq": "ISO 19650-1; Autodesk Docs and BCDE Project implement them with statuses and workflows.",
  "err": "Having the four folders with no one signing off the transitions.",
  "rel": [
   "P26",
   "P24",
   "P22"
  ],
  "al": [
   "CDE states",
   "CDE state",
   "work in progress",
   "WIP",
   "estados del CDE",
   "trabajo en curso"
  ]
 },
 {
  "id": "P26",
  "slug": "codigo-de-estado",
  "t": "Status code",
  "en": "Código de estado",
  "b": "II",
  "d": "Metadata indicating what a container is suitable for: S0 work in progress; S1–S7 shared; A, B and CR published (2021 UK National Annex).",
  "ej": "S1 suitable for coordination; A1 authorized and accepted.",
  "eq": "BS EN ISO 19650-2 NA; Autodesk Docs (attribute); other CDEs with their own lists.",
  "err": "Using S for «unchecked» and A for «approved» without defining the list in the project's information standard.",
  "rel": [
   "P25",
   "P27",
   "P28"
  ],
  "al": [
   "status code",
   "status codes",
   "suitability code",
   "suitability codes",
   "código de estado",
   "códigos de estado"
  ]
 },
 {
  "id": "P27",
  "slug": "codigo-de-revision",
  "t": "Revision code",
  "en": "Código de revisión",
  "b": "II",
  "d": "Version identifier of the container: P01, P02… preliminary; C01, C02… contractual; P01.01 for interim versions.",
  "ej": "P03 in shared; C01 on publishing.",
  "eq": "BS EN ISO 19650-2 NA.",
  "err": "Restarting the numbering when the state changes.",
  "rel": [
   "P26",
   "P28"
  ],
  "al": [
   "revision code",
   "revision codes",
   "código de revisión",
   "códigos de revisión"
  ]
 },
 {
  "id": "P28",
  "slug": "convencion-de-nomenclatura",
  "t": "Naming convention",
  "en": "Convención de nomenclatura",
  "b": "II",
  "d": "Rule for identifying containers by fields separated by hyphens: project-originator-volume-level-type-role-number (UK National Annex).",
  "ej": "HSP-ARQ-ZZ-01-M3-A-0001",
  "eq": "BS EN ISO 19650-2 NA; Autodesk Docs naming standard validator.",
  "err": "Copying the UK convention without defining the codes of each field for the project.",
  "rel": [
   "P24",
   "P26",
   "P21"
  ],
  "al": [
   "naming convention",
   "naming conventions",
   "file naming",
   "container naming",
   "convención de nombres",
   "convención de nomenclatura",
   "nomenclatura"
  ]
 },
 {
  "id": "P29",
  "slug": "plan-de-movilizacion",
  "t": "Mobilization plan",
  "en": "Plan de movilización",
  "b": "I",
  "d": "How the team will set up and test resources, technology and methods before producing information (ISO 19650-2, 5.3.5 and 5.5).",
  "ej": "IFC export test and upload to the CDE in the first week.",
  "eq": "ISO 19650-2.",
  "err": "Starting production without having tested the whole workflow.",
  "rel": [
   "P02",
   "P30"
  ],
  "al": [
   "mobilization plan",
   "mobilization",
   "mobilisation plan",
   "mobilisation",
   "plan de movilización",
   "movilización"
  ]
 },
 {
  "id": "P30",
  "slug": "proceso-de-gestion-de-la-informacion",
  "t": "Information management process",
  "en": "Proceso de gestión de la información",
  "b": "II",
  "d": "The eight ISO 19650-2 activities for each appointment: assessment and need, invitation to tender, tender response, appointment, mobilization, collaborative production of information, information model delivery and project close-out.",
  "ej": "—",
  "eq": "ISO 19650-2, clause 5; ISO 19650-3 for the operational phase.",
  "err": "Reading the BEP as a standalone document rather than as part of that process.",
  "rel": [
   "P01",
   "P02",
   "P03",
   "P29"
  ],
  "al": [
   "information management process",
   "information management",
   "gestión de la información",
   "proceso de gestión de la información"
  ]
 },
 {
  "id": "P31",
  "slug": "serie-iso-19650",
  "t": "ISO 19650 series",
  "en": "Serie ISO 19650",
  "b": "II",
  "d": "International standards for information management using BIM: 1 concepts, 2 delivery phase, 3 operational phase, 4 information exchange, 5 security, 6 health and safety. In Spain, UNE-EN ISO 19650.",
  "ej": "UNE-EN ISO 19650-1:2019 and -2:2019.",
  "eq": "BS 1192 and PAS 1192-2 (UK predecessors).",
  "err": "Citing «ISO 19650» without the part: the BEP is in part 2.",
  "rel": [
   "P30",
   "P01"
  ],
  "al": [
   "ISO 19650",
   "BS EN ISO 19650",
   "UNE-EN ISO 19650"
  ]
 },
 {
  "id": "P32",
  "slug": "usos-bim",
  "t": "BIM uses",
  "en": "Usos BIM",
  "b": "I",
  "d": "Specific ways of applying BIM to achieve an objective (3D coordination, quantity take-off, simulation…); the backbone of the Penn State guide and NBIMS-US.",
  "ej": "3D coordination and drawing extraction, required at the Initial level of the Spanish BIM Plan.",
  "eq": "Penn State BIM PxP Guide; NBIMS-US V4; Spanish BIM Plan.",
  "err": "Asking for «all uses» in the EIR without saying which decision each one serves.",
  "rel": [
   "P01",
   "P04"
  ],
  "al": [
   "BIM uses",
   "BIM use",
   "usos BIM",
   "uso BIM"
  ]
 },
 {
  "id": "P33",
  "slug": "plan-bim-en-la-contratacion-publica",
  "t": "Spanish BIM plan for public procurement (Plan BIM)",
  "en": "Plan BIM en la contratación pública",
  "b": "II",
  "d": "Plan for the Incorporation of the BIM Methodology in public procurement (Council of Ministers Agreement of 27/06/2023, Order PCM/818/2023): timetable of BIM levels required by contract value.",
  "ej": "Medium level for works ≥ €5 404 000 from 1/10/2025.",
  "eq": "Internal instruction for the General State Administration (AGE); recommendation for the rest of the public sector.",
  "err": "Calling it a «royal decree»: it is not one.",
  "rel": [
   "P34",
   "P35"
  ],
  "al": [
   "Spanish BIM Plan",
   "Plan BIM",
   "Order PCM/818/2023",
   "BIM Plan",
   "Orden PCM/818/2023",
   "Plan de Incorporación de la Metodología BIM"
  ]
 },
 {
  "id": "P34",
  "slug": "nivel-bim",
  "t": "BIM level (Spanish BIM plan)",
  "en": "Nivel BIM (Plan BIM español)",
  "b": "II",
  "d": "Maturity scale of the Spanish BIM Plan: PreBIM, Initial, Medium, Advanced and Integrated, assessed across strategy, processes, technology and people.",
  "ej": "Initial level: models for drawings and 3D coordination, the CDE as a repository and open formats.",
  "eq": "UK: «BIM Level 2» (term retired with ISO 19650).",
  "err": "Confusing it with the «levels of development» (LOD) of elements.",
  "rel": [
   "P33"
  ],
  "al": [
   "BIM level",
   "BIM levels",
   "nivel BIM",
   "niveles BIM"
  ]
 },
 {
  "id": "P35",
  "slug": "comision-interministerial-bim",
  "t": "Interministerial BIM Commission (CIBIM)",
  "en": "Comisión Interministerial BIM (CIBIM)",
  "b": "II",
  "d": "Body created by Royal Decree 1515/2018 to coordinate the incorporation of BIM into procurement by the General State Administration; it drew up the Spanish BIM Plan.",
  "ej": "cibim.transportes.gob.es",
  "eq": "Previously: es.BIM Commission (2015).",
  "err": "Attributing the BIM Plan to it as its own regulation: it was approved by the Council of Ministers.",
  "rel": [
   "P33",
   "P34"
  ],
  "al": [
   "Interministerial BIM Commission",
   "CIBIM",
   "CBIM",
   "Comisión Interministerial BIM"
  ]
 },
 {
  "id": "P36",
  "slug": "anexo-nacional-britanico",
  "t": "UK National Annex",
  "en": "Anexo nacional británico",
  "b": "II",
  "d": "Annex to BS EN ISO 19650-2 that specifies for the United Kingdom the naming convention, status codes and revision codes.",
  "ej": "Many Spanish tender documents copy its convention.",
  "eq": "BS EN ISO 19650-2:2018 + A1 / NA (2021).",
  "err": "Treating it as a Spanish standard: Spain has no national annex.",
  "rel": [
   "P28",
   "P26",
   "P27"
  ],
  "al": [
   "UK National Annex",
   "National Annex",
   "national annex",
   "anexo nacional",
   "anexo nacional británico"
  ]
 },
 {
  "id": "P37",
  "slug": "registro-de-riesgos-de-informacion",
  "t": "Information risk register",
  "en": "Registro de riesgos de información",
  "b": "I",
  "d": "Risks that may prevent the information being delivered on time and as required, with their treatment; it accompanies the tender response (ISO 19650-2, 5.3.6).",
  "ej": "Risk: different software versions between architecture and structures.",
  "eq": "ISO 19650-2.",
  "err": "Confusing it with the construction risk register.",
  "rel": [
   "P02",
   "P29"
  ],
  "al": [
   "information risk register",
   "risk register",
   "risk registers",
   "registro de riesgos"
  ]
 },
 {
  "id": "P38",
  "slug": "plan-de-produccion-de-informacion",
  "t": "Information Production Plan (proposed)",
  "en": "Plan de producción de información (propuesto)",
  "b": "II",
  "d": "Name that, according to sources that followed the public consultation, could replace the BEP in the ISO 19650 revision (draft back to ballot since 18/08/2026). It is not final.",
  "ej": "—",
  "eq": "ISO/DIS 19650-2.",
  "err": "Already using it as an official term.",
  "rel": [
   "P01",
   "P31"
  ],
  "al": [
   "Information Production Plan",
   "information production plan"
  ]
 },
 {
  "id": "G01",
  "slug": "gemelo-digital",
  "t": "Digital twin",
  "en": "Gemelo digital",
  "b": "I",
  "d": "Integrated, data-driven virtual representation of real-world entities and processes, with synchronised interaction at a specified frequency and fidelity.",
  "ej": "The Madrid City Council urban twin, which integrates 3D mapping and data from municipal sensors.",
  "eq": "ISO/IEC 30173:2023 (standardised term); 'operational twin' in AWS IoT TwinMaker; 'twin graph' in Azure Digital Twins; 'facility twin' in Autodesk Tandem; 'iTwin' in Bentley; 'virtual twin' in Dassault.",
  "err": "Calling any BIM model or 3D render a twin: without a data connection to the real asset there is no twin.",
  "rel": [
   "G02",
   "G03",
   "G04",
   "G05",
   "G43"
  ],
  "al": [
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
  "t": "Digital model",
  "en": "Modelo digital",
  "b": "I",
  "d": "Digital representation of a physical object with no automatic data exchange: any update between object and model is made manually (Kritzinger et al., 2018).",
  "ej": "An as-built BIM model handed over at the end of construction and never updated after refurbishments.",
  "eq": "Level 1 'Digital model' in Arup (2019); static asset information model (ISO 19650).",
  "err": "Believing that an as-built BIM model is already a digital twin.",
  "rel": [
   "G01",
   "G03",
   "G08"
  ],
  "al": [
   "digital model",
   "digital models",
   "static BIM model",
   "modelo digital",
   "modelo BIM estático"
  ]
 },
 {
  "id": "G03",
  "slug": "sombra-digital",
  "t": "Digital shadow",
  "en": "Sombra digital",
  "b": "I",
  "d": "Digital representation that receives data automatically from the physical object, but whose changes do not flow back to the object automatically (one-way flow) (Kritzinger et al., 2018).",
  "ej": "A dashboard that shows room temperatures sent by the building management system (BMS) on a 3D model, without sending setpoints.",
  "eq": "Many commercial operational 'digital twin' products work in practice as a digital shadow (monitoring without actuation).",
  "err": "Thinking every twin must act on the asset: in construction most real cases are digital shadows, and it is legitimate to say so.",
  "rel": [
   "G01",
   "G02",
   "G37"
  ],
  "al": [
   "digital shadow",
   "digital shadows",
   "sombra digital",
   "sombras digitales"
  ]
 },
 {
  "id": "G04",
  "slug": "activo-fisico",
  "t": "Physical asset / physical twin",
  "en": "Activo físico",
  "b": "I",
  "d": "Real item (building, bridge, equipment, network) that the twin represents and receives data from; ISO 55000 defines an asset as an item that has potential or actual value to an organisation.",
  "ej": "A hospital chiller, a viaduct pier or a Canal de Isabel II pumping station.",
  "eq": "IfcProduct/IfcElement in IFC; 'Asset' in AAS (IEC 63278); 'Equipment' in Brick; 'Entity' in AWS IoT TwinMaker.",
  "err": "Confusing the asset with its model: the twin must identify each asset uniquely and stably.",
  "rel": [
   "G01",
   "G08",
   "G14"
  ],
  "al": [
   "physical asset",
   "physical assets",
   "physical twin",
   "activo físico",
   "gemelo físico"
  ]
 },
 {
  "id": "G05",
  "slug": "nivel-de-madurez-del-gemelo",
  "t": "Digital twin maturity level",
  "en": "Nivel de madurez del gemelo",
  "b": "I",
  "d": "Scale that classifies a twin by its capability: Arup (2019) proposes 5 levels, from digital model to autonomous reasoning, assessing autonomy, intelligence, learning and fidelity.",
  "ej": "A temperature alert system in a building would be level 2 (feedback and control) on the Arup scale.",
  "eq": "Arup 1-5 (2019); ISO/IEC 30186:2025 'Digital twin — Maturity model and guidance for maturity assessment'.",
  "err": "Treating maturity as a goal in itself: the right level depends on the use case, and is not always the highest.",
  "rel": [
   "G01",
   "G43",
   "G35"
  ],
  "al": [
   "maturity level",
   "maturity levels",
   "digital twin maturity",
   "twin maturity",
   "nivel de madurez",
   "madurez del gemelo digital",
   "niveles de madurez"
  ]
 },
 {
  "id": "G06",
  "slug": "gemelo-digital-nacional",
  "t": "National digital twin (NDT)",
  "en": "Gemelo digital nacional",
  "b": "II",
  "d": "Ecosystem of digital twins connected through secure data sharing, proposed in the UK by the CDBB and now developed by the National Digital Twin Programme (NDTP).",
  "ej": "UK programme that aims to connect water, energy and transport twins through a common information management framework.",
  "eq": "CDBB Information Management Framework (IMF); Gemini Principles; NDTP Integration Architecture.",
  "err": "Picturing it as a single giant model of the country: it is a federation of interoperable twins.",
  "rel": [
   "G07",
   "G01",
   "G42"
  ],
  "al": [
   "national digital twin",
   "National Digital Twin",
   "NDT",
   "NDTP",
   "gemelo digital nacional"
  ]
 },
 {
  "id": "G07",
  "slug": "principios-gemini",
  "t": "Gemini Principles",
  "en": "Principios Gemini",
  "b": "II",
  "d": "Nine principles (CDBB, December 2018) for built-environment twins grouped into purpose, trust and function: public good, value creation, insight, security, openness, quality, federation, curation and evolution.",
  "ej": "Using them as a checklist when drafting the tender specification for a twin of a public network.",
  "eq": "Basis of the UK Information Management Framework; cited in ISO/IEC 30173 and AEC literature.",
  "err": "Taking them as a technical standard: they are guiding principles, not verifiable requirements.",
  "rel": [
   "G06",
   "G01"
  ],
  "al": [
   "Gemini Principles",
   "The Gemini Principles",
   "Gemini principles",
   "principios Gemini"
  ]
 },
 {
  "id": "G08",
  "slug": "modelo-de-informacion-del-activo-g08",
  "t": "Asset information model (AIM)",
  "en": "Modelo de información del activo (AIM)",
  "b": "II",
  "d": "Information model (geometry, data and documents) that supports asset management during operation, according to ISO 19650-1 and 19650-3.",
  "ej": "A maintenance asset database populated with COBie when a public building is handed over.",
  "eq": "ISO 19650-3:2020 (operational phase); 'Facility' in Autodesk Tandem; iModel in Bentley; AIM ≈ static layer of the twin.",
  "err": "Confusing the AIM with the twin: the AIM is the reference database; the twin adds a live connection and analytics.",
  "rel": [
   "G09",
   "G10",
   "G17",
   "G01"
  ],
  "al": [
   "AIM",
   "asset information model",
   "asset information models",
   "modelo de información del activo"
  ]
 },
 {
  "id": "G09",
  "slug": "modelo-de-informacion-del-proyecto-g09",
  "t": "Project information model (PIM)",
  "en": "Modelo de información del proyecto (PIM)",
  "b": "II",
  "d": "Information model developed during design and construction (ISO 19650-2); at completion, the relevant part is transferred to the AIM.",
  "ej": "Federated models of a hospital project managed in a CDE until handover.",
  "eq": "ISO 19650-2:2018; information containers in the CDE.",
  "err": "Handing over the full PIM as if it were the AIM, with construction data that is useless for operation.",
  "rel": [
   "G08",
   "C30",
   "G41"
  ],
  "al": [
   "PIM",
   "project information model",
   "project information models",
   "modelo de información del proyecto"
  ]
 },
 {
  "id": "G10",
  "slug": "requisitos-de-informacion-del-activo-g10",
  "t": "Asset information requirements (AIR)",
  "en": "Requisitos de información del activo (AIR)",
  "b": "V",
  "d": "Owner's requirements on what asset information must be delivered for its management, derived from the organisational information requirements (OIR) according to ISO 19650.",
  "ej": "List of mandatory attributes (manufacturer, serial number, warranty, maintenance interval) for each pump in a building.",
  "eq": "ISO 19650-1/-3; can be expressed in a verifiable way with IDS (buildingSMART) or COBie templates.",
  "err": "Writing generic AIR in a PDF that nobody can check automatically.",
  "rel": [
   "G08",
   "C25",
   "G18",
   "G17"
  ],
  "al": [
   "AIR",
   "asset information requirements",
   "requisitos de información del activo"
  ]
 },
 {
  "id": "G13",
  "slug": "ifc",
  "t": "Industry Foundation Classes (IFC)",
  "en": "IFC",
  "b": "II",
  "d": "Open buildingSMART schema for describing construction and infrastructure data; IFC 4.3 was published as ISO 16739-1:2024 (April 2024).",
  "ej": "Exporting a viaduct model in IFC 4.3 with IfcBridge to load it into a twin platform.",
  "eq": "Imported by Autodesk Tandem, Bentley iTwin (IFC connector), Nemetschek dTwin, Dalux; convertible to a graph (ifcOWL, Brick).",
  "err": "Thinking IFC carries real-time sensor data: IFC describes the asset, not the telemetry stream.",
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
  "t": "IFC GlobalId (GUID)",
  "en": "GUID IFC (GlobalId)",
  "b": "V",
  "d": "128-bit globally unique identifier (encoded in 22 characters) of each IFC object; it allows an element to be traced from the model to the twin record.",
  "ej": "Linking an air handling unit's maintenance tag to the GlobalId of the IfcUnitaryEquipment.",
  "eq": "IfcRoot.GlobalId in IFC; 'externalId' in Autodesk Tandem; 'federationGuid' in iModel (⚠); mapping property in DTDL.",
  "err": "Assuming the GUID is stable: some tools regenerate it on re-export, breaking traceability.",
  "rel": [
   "G13",
   "G04",
   "G41"
  ],
  "al": [
   "GUID",
   "GlobalId",
   "IfcGloballyUniqueId",
   "persistent identifier",
   "identificador persistente"
  ]
 },
 {
  "id": "G15",
  "slug": "ifcsensor",
  "t": "IfcSensor",
  "en": "IfcSensor",
  "b": "II",
  "d": "IFC class (subtype of IfcDistributionControlElement) that represents a device measuring a physical quantity (temperature, flow, strain) and forming part of a control system.",
  "ej": "A humidity sensor modelled in Revit and exported as IfcSensor with PredefinedType HUMIDITYSENSOR.",
  "eq": "IfcSensor (IFC); brick:Sensor (Brick); sosa:Sensor (SSN/SOSA); Sensor (SensorThings API).",
  "err": "Modelling the sensor only as generic geometry (IfcBuildingElementProxy), losing its semantics.",
  "rel": [
   "G13",
   "G16",
   "G19",
   "G22"
  ],
  "al": [
   "IfcSensor",
   "IFC sensor",
   "IfcDistributionControlElement",
   "sensor IFC"
  ]
 },
 {
  "id": "G16",
  "slug": "historial-de-rendimiento",
  "t": "IfcPerformanceHistory / IfcTimeSeries",
  "en": "Historial de rendimiento (IfcPerformanceHistory)",
  "b": "II",
  "d": "IFC entities for recording an element's performance data over time (time series); rarely used in practice compared with time-series databases.",
  "ej": "Storing a monthly summary of a pump's consumption in IFC when handing over the AIM.",
  "eq": "IfcPerformanceHistory + IfcTimeSeries (IFC); time series in InfluxDB/Azure Data Explorer in practice.",
  "err": "Trying to put high-frequency telemetry into IFC files.",
  "rel": [
   "G13",
   "G15",
   "G37"
  ],
  "al": [
   "IfcPerformanceHistory",
   "IfcTimeSeries",
   "IFC time series",
   "series temporales IFC"
  ]
 },
 {
  "id": "G17",
  "slug": "cobie-g17",
  "t": "Construction Operations Building information exchange (COBie)",
  "en": "COBie",
  "b": "II",
  "d": "Exchange specification (usually a spreadsheet or IFC) with spaces, systems, components, types and documents for handover to maintenance; created by USACE in 2007.",
  "ej": "Handing the owner a COBie workbook with all terminal units and their warranties.",
  "eq": "NBIMS-US (COBie v3 in development, 2023 draft); BS 1192-4:2014 in the UK; COBie exporters in Revit, Archicad.",
  "err": "Filling in COBie 'by hand' at the end of construction without linking it to the model GUIDs.",
  "rel": [
   "G08",
   "G10",
   "G41"
  ],
  "al": [
   "COBie",
   "Construction Operations Building information exchange",
   "COBie spreadsheet",
   "COBie workbook",
   "hoja COBie"
  ]
 },
 {
  "id": "G18",
  "slug": "ids-g18",
  "t": "Information Delivery Specification (IDS)",
  "en": "IDS",
  "b": "VI",
  "d": "buildingSMART standard (v1.0 approved on 4 June 2024) for defining information requirements in human-readable XML that can be checked automatically against IFC models.",
  "ej": "An IDS file requiring every IfcPump to have 'Manufacturer' and 'SerialNumber' before it is loaded into the twin.",
  "eq": "IfcTester (IfcOpenShell), Solibri, BIMcollab Zoom, usBIM.IDS and other validators; six facets: entity, attribute, property, classification, material, partOf.",
  "err": "Confusing IDS with IFC: IDS describes which data are required, not the model.",
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
  "t": "Brick Schema",
  "en": "Brick",
  "b": "II",
  "d": "Open ontology (RDF/OWL) for describing equipment, points, spaces and system relationships in buildings (HVAC, lighting, meters) in a machine-readable way.",
  "ej": "A Brick graph of a building in which a 'Supply_Air_Temperature_Sensor' feeds an 'AHU'.",
  "eq": "brick:Equipment/Point/Location; alignments with Haystack, RealEstateCore and ASHRAE 223P; SHACL validation with the brickschema library.",
  "err": "Using Brick for geometry: Brick describes system and point relationships, not shape or position.",
  "rel": [
   "G20",
   "G21",
   "G39",
   "G40"
  ],
  "al": [
   "Brick",
   "Brick Schema",
   "Brick ontology",
   "ontología Brick"
  ]
 },
 {
  "id": "G20",
  "slug": "project-haystack",
  "t": "Project Haystack",
  "en": "Project Haystack",
  "b": "II",
  "d": "Open initiative for semantic tagging of building IoT data (tags such as 'ahu', 'temp', 'sensor'); Haystack 5 (2025) adds the Xeto schema language and RDF integration.",
  "ej": "BMS points tagged 'discharge air temp sensor point' so that analytics can find them.",
  "eq": "Haystack 4 (tags and defs); Haystack 5 with Xeto; used in SkySpark and many BMSs.",
  "err": "Believing Haystack and Brick are locked in competition: they are converging through ASHRAE 223P.",
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
  "t": "RealEstateCore (REC)",
  "en": "RealEstateCore",
  "b": "II",
  "d": "Open modular ontology (MIT licence) for real estate that links BIM/IFC, building control and IoT; basis of the DTDL building ontologies for Azure Digital Twins.",
  "ej": "Modelling the spaces, floors and equipment of an office portfolio as REC twins in Azure Digital Twins.",
  "eq": "REC in DTDL (Azure), WillowTwin (REC extension), RDF/OWL version.",
  "err": "Thinking of it as an ISO standard: it is an open consortium that explicitly 'bridges' existing standards.",
  "rel": [
   "G19",
   "G25",
   "G40"
  ],
  "al": [
   "RealEstateCore",
   "RealEstateCore ontology",
   "REC",
   "ontología RealEstateCore"
  ]
 },
 {
  "id": "G22",
  "slug": "ssn-sosa",
  "t": "SSN/SOSA",
  "en": "SSN/SOSA",
  "b": "II",
  "d": "W3C-OGC ontology (Recommendation, October 2017) for describing sensors, observations, procedures and actuators; SOSA is its lightweight core.",
  "ej": "Describing that a strain gauge (sosa:Sensor) observes the deformation of a beam (sosa:FeatureOfInterest).",
  "eq": "sosa:Sensor ≈ IfcSensor ≈ brick:Sensor; conceptual basis of SensorThings API.",
  "err": "Using it to model the whole building: it focuses on observation and is combined with other ontologies.",
  "rel": [
   "G15",
   "G23",
   "G40"
  ],
  "al": [
   "SSN",
   "SOSA",
   "Semantic Sensor Network",
   "SSN ontology",
   "ontología SSN"
  ]
 },
 {
  "id": "G23",
  "slug": "sensorthings-api",
  "t": "OGC SensorThings API",
  "en": "SensorThings API",
  "b": "II",
  "d": "Open geospatial web API standard from OGC for interconnecting IoT devices, sensors and observations (Part 1 Sensing v1.0 2016, v1.1 2021; Part 2 Tasking).",
  "ej": "Publishing a dam's piezometer readings as Thing/Datastream/Observation entities queryable via REST and MQTT.",
  "eq": "Thing, Location, Datastream, Sensor, ObservedProperty, Observation and FeatureOfInterest entities; FROST-Server implementations.",
  "err": "Confusing it with a low-level protocol: it defines a data model and an API, and uses HTTP/MQTT underneath.",
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
  "t": "CityGML Dynamizer",
  "en": "Dynamizer (CityGML 3.0)",
  "b": "II",
  "d": "CityGML 3.0 module (OGC, 2021) that attaches time-varying values to city objects and links IoT sensors to the 3D city model.",
  "ej": "Assigning hourly solar irradiation to a building façade, or linking a traffic sensor to a street segment.",
  "eq": "CityGML 3.0 Dynamizer; can point to SensorThings API series.",
  "err": "Thinking CityGML 3.0 replaces IFC: they work at different scales (city vs. building).",
  "rel": [
   "G23",
   "G42"
  ],
  "al": [
   "Dynamizer",
   "CityGML 3.0",
   "Dynamizer module",
   "módulo Dynamizer"
  ]
 },
 {
  "id": "G25",
  "slug": "dtdl",
  "t": "Digital Twins Definition Language (DTDL)",
  "en": "DTDL",
  "b": "II",
  "d": "Open Microsoft language based on JSON-LD for defining twin models (interfaces with properties, telemetry, relationships and components); versions v2, v3 and v4.",
  "ej": "A 'Room' interface with a humidity property and a 'hasSensors' relationship, used for a university campus.",
  "eq": "Azure Digital Twins (supports v2/v3), RealEstateCore and WillowTwin ontologies, Azure IoT Plug and Play.",
  "err": "Believing DTDL is an ISO/IEC standard: it is an open Microsoft specification.",
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
  "d": "Standardised digital representation (IEC 63278-1:2023) that gives uniform access to the information and services of an industrial asset through submodels.",
  "ej": "A chiller's digital nameplate delivered by the manufacturer as an AAS.",
  "eq": "IEC 63278; Industrie 4.0 / IDTA; Eclipse BaSyx; 'Digital Nameplate' and 'Technical Data' submodels.",
  "err": "Considering it unrelated to construction: it is starting to be used for MEP equipment and products.",
  "rel": [
   "G04",
   "G26",
   "G33"
  ],
  "al": [
   "Asset Administration Shell",
   "AAS",
   "IEC 63278",
   "administración del activo"
  ]
 },
 {
  "id": "G27",
  "slug": "openusd",
  "t": "Universal Scene Description (OpenUSD)",
  "en": "OpenUSD",
  "b": "V",
  "d": "Open format and API for describing and composing 3D scenes, originating at Pixar; the Alliance for OpenUSD published Core Specification 1.0 on 17 December 2025.",
  "ej": "Composing a factory model in NVIDIA Omniverse from USD layers coming from Revit and from sensor data.",
  "eq": "NVIDIA Omniverse; Autodesk and Bentley USD connectors; Cesium for Omniverse.",
  "err": "Thinking USD replaces IFC: USD is scene/visualisation; IFC carries construction semantics.",
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
  "d": "Open format created by Cesium (OGC Community Standard) for streaming large 3D datasets (cities, point clouds, BIM models) to the web in tiles.",
  "ej": "Displaying in a browser a twin of a motorway with terrain, orthophoto and a tiled BIM model.",
  "eq": "Cesium ion, CesiumJS, Cesium for Unreal/Unity/Omniverse, Bentley iTwin.",
  "err": "Expecting full BIM semantics in 3D Tiles: it carries metadata, but its aim is efficient visualisation.",
  "rel": [
   "G27",
   "G42"
  ],
  "al": [
   "3D Tiles",
   "OGC 3D Tiles",
   "3D tiles",
   "teselas 3D"
  ]
 },
 {
  "id": "G29",
  "slug": "imodel",
  "t": "iModel",
  "en": "iModel",
  "b": "III",
  "d": "Distributed database (built on SQLite) of the Bentley iTwin platform that aligns data from various engineering sources in a common schema and records changes ('changesets').",
  "ej": "Synchronising IFC, DGN and Revit models of a metro line into a common iModel.",
  "eq": "iTwin.js (open source); IFC/Revit/DGN connectors; BIS schemas (⚠ technical detail not verified in this session).",
  "err": "Confusing an iModel with a file: it is a repository with a change history.",
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
  "t": "Twin graph / knowledge graph",
  "en": "Grafo de gemelos",
  "b": "IV",
  "d": "Network of twins (nodes) connected by typed relationships (contains, feeds, serves) that allows the state of the system and its context to be queried.",
  "ej": "Query: 'all rooms on level 3 served by AHU-2 with CO2 > 1000 ppm'.",
  "eq": "Azure Digital Twins (twin graph), AWS IoT TwinMaker (knowledge graph), Brick RDF graph.",
  "err": "Thinking the 3D model is the twin: the relationship graph usually adds more value than the geometry.",
  "rel": [
   "G25",
   "G19",
   "G40"
  ],
  "al": [
   "twin graph",
   "twin graphs",
   "knowledge graph",
   "knowledge graphs",
   "grafo de gemelos",
   "grafo de conocimiento"
  ]
 },
 {
  "id": "G31",
  "slug": "internet-de-las-cosas",
  "t": "Internet of Things (IoT)",
  "en": "Internet de las cosas (IoT)",
  "b": "I",
  "d": "Network of devices with sensors and connectivity that send data to computer systems; in a twin, it is the channel through which the asset's state is updated.",
  "ej": "LoRaWAN occupancy sensors in the classrooms of a university building.",
  "eq": "Azure IoT Hub, AWS IoT Core, Eclipse Ditto; standardised in ISO/IEC JTC 1/SC 41.",
  "err": "Thinking more sensors make a better twin: without a semantic model the data are hard to use.",
  "rel": [
   "G32",
   "G33",
   "G34"
  ],
  "al": [
   "IoT",
   "Internet of Things",
   "IoT sensors",
   "IoT devices",
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
  "d": "Lightweight publish/subscribe messaging protocol (OASIS; ISO/IEC 20922) widely used to send sensor telemetry to twin platforms.",
  "ej": "A building gateway publishing 'building/l3/room12/co2' to a broker every minute.",
  "eq": "Supported by Eclipse Ditto (MQTT 3.1.1 and 5), Azure IoT Hub, AWS IoT Core, SensorThings API.",
  "err": "Believing MQTT provides semantics: it only carries messages; the meaning comes from the model (Brick, DTDL...).",
  "rel": [
   "G31",
   "G33",
   "G23"
  ],
  "al": [
   "MQTT",
   "MQTT protocol",
   "MQTT broker",
   "protocolo MQTT",
   "broker MQTT"
  ]
 },
 {
  "id": "G33",
  "slug": "opc-ua",
  "t": "OPC Unified Architecture (OPC UA)",
  "en": "OPC UA",
  "b": "V",
  "d": "Industrial communication architecture (IEC 62541) with its own information model; a published mapping exists between BACnet (ISO 16484-5) and OPC UA.",
  "ej": "Reading data from a water treatment plant (SCADA) into the network twin.",
  "eq": "IEC 62541; companion specifications; OPC UA connectors in AWS IoT SiteWise, Azure IoT.",
  "err": "Assuming OPC UA is industry-only: it appears in infrastructure and large facilities.",
  "rel": [
   "G34",
   "G32",
   "G26"
  ],
  "al": [
   "OPC UA",
   "OPC-UA",
   "OPC Unified Architecture",
   "IEC 62541"
  ]
 },
 {
  "id": "G34",
  "slug": "bacnet",
  "t": "BACnet",
  "en": "BACnet",
  "b": "V",
  "d": "Communication protocol for building automation and control (ASHRAE 135 / ISO 16484-5), a common source of operational HVAC and lighting data.",
  "ej": "Integrating the BACnet points of a hospital BMS into Autodesk Tandem or Willow through a connector.",
  "eq": "ISO 16484-5; mapping to OPC UA; points can be tagged with Haystack/Brick.",
  "err": "Thinking BACnet point names are self-explanatory: they are usually codes that need mapping.",
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
  "t": "Predictive maintenance (PdM)",
  "en": "Mantenimiento predictivo",
  "b": "I",
  "d": "Strategy that anticipates failures from condition data and analytical models in order to intervene before a breakdown; level 3 on the Arup scale.",
  "ej": "Detecting from vibration and power consumption that a booster pump is degrading, and scheduling its replacement.",
  "eq": "AWS IoT TwinMaker + SiteWise; Azure Digital Twins + analytics; Autodesk Tandem (threshold alerts).",
  "err": "Confusing it with preventive (calendar-based) maintenance.",
  "rel": [
   "G05",
   "G31",
   "G38"
  ],
  "al": [
   "predictive maintenance",
   "PdM",
   "mantenimiento predictivo"
  ]
 },
 {
  "id": "G36",
  "slug": "monitorizacion-de-la-salud-estructural",
  "t": "Structural health monitoring (SHM)",
  "en": "Monitorización de la salud estructural (SHM)",
  "b": "I",
  "d": "Continuous measurement (strain, vibration, tilt, temperature) of a structure's behaviour to detect damage and support maintenance decisions.",
  "ej": "The monitoring system of the Queensferry Crossing bridge (Scotland), with hundreds of sensors.",
  "eq": "Bentley iTwin IoT / SHM partners; SensorThings for publication; IfcSensor for modelling sensors.",
  "err": "Calling an SHM system a twin when there is no associated bridge model: it is monitoring, not necessarily a twin.",
  "rel": [
   "G36",
   "G15",
   "G38"
  ],
  "al": [
   "SHM",
   "structural health monitoring",
   "structural monitoring",
   "monitorización estructural",
   "auscultación"
  ]
 },
 {
  "id": "G37",
  "slug": "latencia-y-frecuencia-de-sincronizacion",
  "t": "Latency / synchronisation frequency",
  "en": "Latencia y frecuencia de sincronización",
  "b": "VI",
  "d": "Time between a change in the asset and its reflection in the twin, and the update rate; the DTC definition requires a frequency specified according to the use case.",
  "ej": "Room occupancy: every 5 min is enough; bridge vibration: sampling at hundreds of Hz with aggregation.",
  "eq": "Design parameter in any platform (IoT Hub, SiteWise, Tandem streams).",
  "err": "Demanding 'real time' for everything, raising cost without adding value.",
  "rel": [
   "G01",
   "G03",
   "G38"
  ],
  "al": [
   "latency",
   "synchronisation frequency",
   "update frequency",
   "update rate",
   "latencia",
   "frecuencia de actualización"
  ]
 },
 {
  "id": "G38",
  "slug": "deriva-y-calibracion-del-sensor",
  "t": "Sensor drift and calibration",
  "en": "Deriva y calibración del sensor",
  "b": "VI",
  "d": "Progressive deviation of a sensor's reading from the true value; periodic calibration and anomaly detection are part of the twin's quality control.",
  "ej": "A CO2 probe that after two years reads 150 ppm too high and triggers ventilation unnecessarily.",
  "eq": "Calibration metadata in SSN/SOSA (procedure), Brick (properties), maintenance records.",
  "err": "Trusting the data because 'it comes from the sensor' without a calibration plan.",
  "rel": [
   "G37",
   "G36",
   "G22"
  ],
  "al": [
   "sensor drift",
   "sensor calibration",
   "deriva del sensor"
  ]
 },
 {
  "id": "G39",
  "slug": "shacl",
  "t": "Shapes Constraint Language (SHACL)",
  "en": "SHACL",
  "b": "VI",
  "d": "W3C language for validating RDF graphs against 'shapes' (constraints); used to check that a Brick model conforms to the ontology.",
  "ej": "Validating with the brickschema Python library that every sensor has 'isPointOf' to a piece of equipment.",
  "eq": "brickschema (Python), pySHACL, TopBraid; ASHRAE 223P is also defined with SHACL.",
  "err": "Validating only RDF syntax and not semantic consistency.",
  "rel": [
   "G19",
   "G40"
  ],
  "al": [
   "SHACL",
   "SHACL validation",
   "Shapes Constraint Language",
   "validación SHACL"
  ]
 },
 {
  "id": "G40",
  "slug": "ontologia",
  "t": "Ontology",
  "en": "Ontología",
  "b": "V",
  "d": "Formal model of the concepts and relationships of a domain that allows different systems to interpret the twin's data in the same way.",
  "ej": "Using Brick + IFC + SOSA so that analytics, maintenance and BIM all talk about the same 'equipment'.",
  "eq": "Brick, RealEstateCore, ifcOWL, SSN/SOSA, ASHRAE 223P; DTDL as a modelling language.",
  "err": "Inventing a bespoke ontology for every project instead of extending an existing one.",
  "rel": [
   "G19",
   "G21",
   "G22",
   "G25"
  ],
  "al": [
   "ontology",
   "ontologies",
   "ontología",
   "ontologías"
  ]
 },
 {
  "id": "G41",
  "slug": "traspaso-de-informacion",
  "t": "Information handover",
  "en": "Traspaso de información (handover)",
  "b": "V",
  "d": "Structured delivery of the project information (PIM) to the owner to form the AIM and feed the twin, verifying the agreed requirements.",
  "ej": "Crossrail handed over the Elizabeth line asset information to TfL as part of handover.",
  "eq": "ISO 19650-2/-3; COBie; IDS; UK 'Soft Landings'.",
  "err": "Leaving handover until the end: information must be accumulated and validated throughout construction.",
  "rel": [
   "G08",
   "G09",
   "G17",
   "G18"
  ],
  "al": [
   "handover",
   "information handover",
   "asset handover",
   "traspaso de información"
  ]
 },
 {
  "id": "G42",
  "slug": "gemelo-digital-urbano",
  "t": "Urban digital twin",
  "en": "Gemelo digital urbano",
  "b": "I",
  "d": "City-scale twin that integrates a 3D model, geospatial data, sensors and simulations for urban planning and management.",
  "ej": "Virtual Singapore (NRF, since 2014) or the Madrid City Council digital twin.",
  "eq": "CityGML 3.0, 3D Tiles/Cesium, Dassault 3DEXPERIENCE (Virtual Singapore), Esri.",
  "err": "Equating a 3D city viewer with a twin that has no live data or simulation.",
  "rel": [
   "G24",
   "G28",
   "G06"
  ],
  "al": [
   "urban digital twin",
   "urban twin",
   "city twin",
   "city digital twin",
   "gemelo urbano",
   "gemelo digital urbano",
   "gemelo de ciudad"
  ]
 },
 {
  "id": "G43",
  "slug": "fidelidad",
  "t": "Fidelity",
  "en": "Fidelidad",
  "b": "I",
  "d": "Degree of detail and accuracy with which the twin reproduces the asset (geometry, data and behaviour); it should be sufficient for the use case.",
  "ej": "Managing occupancy only needs a space model; SHM needs a calibrated structural model.",
  "eq": "Arup 'Fidelity' metric; 'fidelity' in the DTC definition; level of information need (ISO 7817-1).",
  "err": "Chasing maximum geometric fidelity when the value lies in the data.",
  "rel": [
   "G05",
   "G01",
   "G37"
  ],
  "al": [
   "fidelity",
   "fidelidad"
  ]
 }
];
