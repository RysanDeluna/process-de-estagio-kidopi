const botaoBR = document.getElementById("buttonBrazil");
const botaoCa = document.getElementById("buttonCanada");
const botaoAu = document.getElementById("buttonAustralia");

const url_BR = "https://dev.kidopilabs.com.br/exercicio/covid.php?pais=Brazil";
const url_Ca = "https://dev.kidopilabs.com.br/exercicio/covid.php?pais=Canada";
const url_Au = "https://dev.kidopilabs.com.br/exercicio/covid.php?pais=Australia";

botaoBR.addEventListener("click", () => {getData(url_BR)});
botaoCa.addEventListener("click", () => {getData(url_Ca)});
botaoAu.addEventListener("click", () => {getData(url_Au)});

function getData(url) {
    console.log(url)
    const resposta = fetch(url, {method: 'GET'}).then(resposta => resposta.json());
    resposta.then(dados => {console.log(dados)});
    alert("Resposta adquirida!");

    return resposta;
}

