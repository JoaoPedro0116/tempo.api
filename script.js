const key = ""



function cliqueinoBotao() {
    const cidade = document.querySelector(".input-cidade").value
    
    console.log(cidade)

    document.getElementById("nome-cidade").innerText = "Tempo em " + cidade;
     if (cidade == 0){
        document.getElementById("nome-cidade").innerText = "Tempo em Cidade";
     }
    }

