import codecs
import json

def gerar_html():

    with open("numeros.json", "r") as numeros:
        numeros = json.load(numeros)

    with codecs.open("base/head.html", 'rb', 'utf-8') as header:
        head = header.read()
    with codecs.open("base/footer.html", 'rb', 'utf-8') as footer:
        foot = footer.read()


    diploma = ""



    for numero in range( numeros["inicio"], numeros["final"] + 1):
        diploma += """
        <section class="rifa">
            <div class="numero1">
                <p>""" + str(numero) + """</p>
            </div>
            <div class="numero2">
                <p>""" + str(numero) + """</p>
            </div>

        </section>
            """

    diploma = head + diploma + foot

    with open("rifas.html", "w") as diplomas_impressao:
        diplomas_impressao.write(diploma)
