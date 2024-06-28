import codecs

def gerar_html():

    nomes = open("nomes.txt", "r")
    nomes_alunos = nomes.read().splitlines()

    with codecs.open("base/head.html", 'rb', 'utf-8') as header:
        head = header.read()
    with codecs.open("base/footer.html", 'rb', 'utf-8') as footer:
        foot = footer.read()


    diploma = ""



    for nome in nomes_alunos:
        diploma += """
            <section class="diploma">
            <div class="nome">
                <p>""" + nome + """</p>
            </div>
            </section>
            """

    diploma = head + diploma + foot

    with open("diploma.html", "w") as diplomas_impressao:
        diplomas_impressao.write(diploma)
