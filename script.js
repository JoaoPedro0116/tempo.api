const key = "b090f2be2e87f981573c8f468e8a06fnb"



// async function buscarcidade(cidade){
//     const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}`).then(resposta => resposta.json())

//     console.log(dados)
   
// }

function cliqueinoBotao() {
    const cidade = document.querySelector(".input-cidade").value
    
    console.log(cidade)
}
