const key ='94ff526ba27566158df34d7c27fb5fe0';
const cidade = document.querySelector('.input-cidade');
const botton = document.querySelector('.botao-busca');
const local = document.querySelector('.cidade');
const tempo = document.querySelector('.temp');
const previsao = document.querySelector('.texto-previsao');


botton.addEventListener('click',buscarcidade);




async function buscarcidade(){

    let city = cidade.value


    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=pt_br`)
    .then(resposta => resposta.json())

    console.log(dados)

    local.textContent = "O tempo em " +dados.name

    tempo.textContent = "Está de " +dados.main.temp 

   previsao.textContent = "Descrição: " +dados.weather[0].descripiton
}

