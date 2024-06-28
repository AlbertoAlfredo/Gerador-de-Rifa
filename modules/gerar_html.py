import codecs
import json

def gerar_html():

    numeros = json.loads(numeros)

    with codecs.open("base/head.html", 'rb', 'utf-8') as header:
        head = header.read()
    with codecs.open("base/footer.html", 'rb', 'utf-8') as footer:
        foot = footer.read()


    diploma = ""



    for numero in range( numeros.inicio, numeros.final):
        diploma += """
        <section class="rifa">
            <div class="numero1">
                <p>""" + numero + """</p>
            </div>
            <div class="numero2">
                <p>""" + numero + """</p>
            </div>

        </section>
            """

    diploma = head + diploma + foot

    with open("diploma.html", "w") as diplomas_impressao:
        diplomas_impressao.write(diploma)
