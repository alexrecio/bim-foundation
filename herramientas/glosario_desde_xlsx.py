"""Genera assets/js/glosario.js a partir de la hoja «Glosario» de la base de fuentes.

Uso: python3 herramientas/glosario_desde_xlsx.py /mnt/project-files/fuentes/coordenadas_bim_fuentes_y_glosario.xlsx [otra_base.xlsx ...]
Admite varias bases (una por artículo, p. ej. /mnt/project-files/fuentes/05-clasificacion/*.xlsx): se concatenan
en el orden dado; cada una usa sus propios ID (el artículo 05 usa K01, K02...) y no pueden repetirse.
Si la hoja «Glosario» tiene una columna «Alias» (separados por «;»), sus alias se usan en lugar de los de ALIAS.
Después: node herramientas/generar-indice.mjs (calcula en qué diapositivas se explica cada término).

ALIAS: formas en que el término aparece en el texto de los artículos. Sirven para el buscador
y para marcar el término en las diapositivas (definición al pasar). La primera es la principal.
"""
import json, re, sys, unicodedata
import openpyxl

ALIAS = {
    'C01': ['georreferenciación', 'georreferenciar', 'georreferenciado', 'georeferencing'],
    'C02': ['sistema de referencia', 'CRS', 'SRC', 'sistema de coordenadas'],
    'C03': ['datum', 'datum geodésico'],
    'C04': ['EPSG', 'código EPSG', 'WKT'],
    'C05': ['proyección', 'UTM', 'huso', 'Mercator'],
    'C06': ['coordenadas locales', 'coordenadas proyectadas', 'sistema local'],
    'C07': ['geoide', 'altura elipsoidal', 'altitud', 'ortométrica', 'datum vertical'],
    'C08': ['factor de escala', 'anamorfosis', 'factor combinado'],
    'C09': ['norte verdadero', 'norte de cuadrícula', 'norte magnético', 'norte de proyecto'],
    'C10': ['convergencia', 'convergencia de meridianos'],
    'C11': ['origen interno'],
    'C12': ['punto base'],
    'C13': ['Survey Point', 'punto de reconocimiento'],
    'C14': ['coordenadas compartidas', 'adquirir coordenadas', 'publicar coordenadas'],
    'C15': ['coma flotante', 'precisión simple', 'float32', 'float64', 'false origin'],
    'C16': ['transformación', 'Helmert', 'NTv2'],
    'C17': ['federación', 'federar', 'federado'],
    'C18': ['IfcSite', 'RefLatitude'],
    'C19': ['IfcMapConversion', 'IfcMapConversionScaled', 'IfcRigidOperation'],
    'C20': ['IfcProjectedCRS', 'IfcGeographicCRS'],
    'C21': ['TrueNorth', 'WorldCoordinateSystem'],
    'C22': ['LoGeoRef'],
    'C23': ['IFC 4.3', 'IFC4.3', 'alineación'],
    'C24': ['exportación IFC', 'exportar IFC', 'exportador IFC'],
    'C25': ['BEP', 'EIR', 'ISO 19650'],
    'C26': ['nube de puntos', 'nubes de puntos'],
    'C27': ['topografía', 'replanteo', 'GNSS', 'estación total'],
    'C28': ['BIM-GIS', 'GIS', 'GeoBIM'],
    'C29': ['geolocalización', 'ubicación del proyecto'],
    'C30': ['CDE', 'entorno común de datos'],
    'C31': ['SCU', 'SCP', 'DWG', 'DGN'],
    'C32': ['control de calidad', 'QA/QC'],
    'C33': ['ETRS89', 'REGCAN95', 'RD 1071/2007'],
    'C34': ['unidades del modelo', 'conversión de unidades'],
    'C35': ['época de referencia', 'deriva continental', 'ITRF', 'datum dinámico'],
}
ROMANO = {'I': 'I', 'II': 'II', 'III': 'III', 'IV': 'IV', 'V': 'V', 'VI': 'VI'}


def slug(s):
    s = unicodedata.normalize('NFD', s.split('(')[0]).encode('ascii', 'ignore').decode().lower()
    return re.sub(r'[^a-z0-9]+', '-', s).strip('-')


def leer(path, out):
    ws = openpyxl.load_workbook(path, read_only=True)['Glosario']
    rows = list(ws.iter_rows(values_only=True))
    cab = [str(c or '').strip() for c in rows[0]]
    ia = cab.index('Alias') if 'Alias' in cab else None
    for r in rows[1:]:
        if not r[0]:
            continue
        cid = r[0]
        if any(g['id'] == cid for g in out):
            raise SystemExit(f'ID repetido en el glosario: {cid} ({path})')
        al = [a.strip() for a in str(r[ia] or '').split(';') if a.strip()] if ia is not None else []
        out.append({
            'id': cid, 'slug': slug(r[1]), 't': r[1], 'en': r[2] or '',
            'b': (r[3] or '').split(' ')[0], 'd': r[4] or '', 'ej': r[5] or '',
            'eq': r[6] or '', 'err': r[7] or '',
            'rel': [x.strip() for x in (r[8] or '').split(',') if x.strip()],
            'al': al or ALIAS.get(cid, []),
        })


def main(paths):
    out = []
    for path in paths:
        leer(path, out)
    js = ('// Glosario de la serie. GENERADO por herramientas/glosario_desde_xlsx.py: no editar a mano.\n'
          '// id · slug · t término · en inglés · b bloque · d definición · ej ejemplo (España) · eq equivalentes por programa\n'
          '// err error típico · rel relacionados · al alias (cómo aparece en el texto)\n'
          'window.BF_GLOSARIO = ' + json.dumps(out, ensure_ascii=False, indent=1) + ';\n')
    open('assets/js/glosario.js', 'w', encoding='utf-8').write(js)
    print(len(out), 'términos')


if __name__ == '__main__':
    main(sys.argv[1:])
