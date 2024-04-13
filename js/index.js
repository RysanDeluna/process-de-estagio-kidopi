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
    const response = await fetch(url)
    const data = await response.json();

    populateTable(data);
}

function populateTable(obj) {
    var tbody = document.querySelector('#table_content');
    var tfoot = document.querySelector('#table_footer');
    tbody.innerHTML = "";
    tfoot.innerHTML = "";

    var totalConfirmados = 0;
    var totalMortos = 0;

    for (const i in obj) {
        // Criacao das tags
        var tr = document.createElement('tr');
        var th = document.createElement('th');
        var td_casos = document.createElement('td');
        var td_morto = document.createElement('td');

        th.scope = "row";
        th.textContent = obj[i].ProvinciaEstado;
        td_casos.textContent = obj[i].Confirmados;
        td_morto.textContent = obj[i].Mortos;

        totalMortos += Number(obj[i].Mortos);
        totalConfirmados += Number(obj[i].Confirmados);

        tr.append(th, td_casos, td_morto);
        tbody.append(tr);
    }

    var tr = document.createElement('tr');
    var th = document.createElement('th');
    var td_casos = document.createElement('td');
    var td_morto = document.createElement('td');

    th.scope = "row";
    th.textContent = "Total";
    td_casos.textContent = totalConfirmados;
    td_morto.textContent = totalMortos;

    tr.append(th, td_casos, td_morto);
    tfoot.append(tr);
}

// Função auxiliar para ver os dados
function showData(obj) {
    for(const i in obj) {
        console.log([obj[i].ProvinciaEstado, obj[i].Confirmados, obj[i].Mortos ]);
    }
}















