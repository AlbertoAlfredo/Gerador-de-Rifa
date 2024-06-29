import os
from pyhtml2pdf import converter

def gerar_pdf():
    path = os.path.abspath('rifas.html')
    converter.convert(f'file:///{path}', 'rifas.pdf', print_options={"preferCSSPageSize": True, "marginBottom": 0, "marginLeft": 0, "marginRight": 0, "marginTop": 0, })
    os.system('del ' + path)