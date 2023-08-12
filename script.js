const key = "b090f2be2e87f981573c8f468e8a06fb"
// chave

// function cliqueinoBotao() {
//     const cidade = document.querySelector(".input-cidade").value
    

//     console.log(cidade)

//      document.getElementById("nome-cidade").innerText = "Tempo em " + cidade;
//      if (cidade == 0){
//         document.getElementById("nome-cidade").innerText = "Tempo em Cidade";
//      }
//     }



// coletando dados do input para submeter ao api
function colocarNaTela(dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML =  Math.floor(dados.main.temp) + "°C"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".umidade").innerHTML =  "umidade " + Math.floor(dados.main.humidity) + "%"
}

// api convertendo em json
async function buscarCidade(cidade){
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
    cidade + 
    "&appid=" + 
    key+ 
    "&lang=pt_br" +
    "&units=metric"
    )
    .then(resposta => resposta.json())

    colocarNaTela(dados)
}


function cliqueiNoBotao(){
   let cidade = document.querySelector(".input-cidade").value

   buscarCidade(cidade)
}
// funcao para verificar a tecla enter e servir o button submit
document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
    
        var btn = document.querySelector("#btn-buscar");
      
      btn.click();
    
    }
  });