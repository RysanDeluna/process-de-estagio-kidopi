// Definição de variáveis auxiliares
const botaoBR = document.getElementById("buttonBrazil");
const botaoCa = document.getElementById("buttonCanada");
const botaoAu = document.getElementById("buttonAustralia");
const url_BR = "https://dev.kidopilabs.com.br/exercicio/covid.php?pais=Brazil";
const url_Ca = "https://dev.kidopilabs.com.br/exercicio/covid.php?pais=Canada";
const url_Au = "https://dev.kidopilabs.com.br/exercicio/covid.php?pais=Australia";

// Criação dos Listeners
botaoBR.addEventListener("click", () => {getData(url_BR)});
botaoCa.addEventListener("click", () => {getData(url_Ca)});
botaoAu.addEventListener("click", () => {getData(url_Au)});

// Aquisição de dados da API
async function getData(url) {
    console.log(url)

    const response = await fetch(url)
    const data = await response.json();

    showData(data);
}

function populateTable() {

}

// Função auxiliar para ver os dados
function showData(obj) {
    for(const i in obj) {
        console.log([obj[i].ProvinciaEstado, obj[i].Confirmados, obj[i].Mortos ]);
    }
}















