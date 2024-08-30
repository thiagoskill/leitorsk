let codigoEntrada = document.getElementById("codigoBarras");
document.getElementById('codigoBarras').addEventListener('input', function (e) {
    this.value = this.value.replace(/[^0-9]/g, '');
});
function adicionarLinha(){
    let tabela = document.getElementById("listaDeEntradas").getElementsByTagName('tbody')[0];
    let mensagemErro = "Por favor, preencha os dados ou scaneie o código de barras: \n";
    let camposFaltando = false;

    if(!codigoEntrada.value) {  // Verifica se o campo está vazio
        mensagemErro += "Registro não inserido\n";
        camposFaltando = true;
    }

    if(camposFaltando) {
        alert(mensagemErro);  // Mostra uma mensagem de erro, caso necessário
        return;
    } else {
        let novaLinha = tabela.insertRow();  // Insere a nova linha na tabela
        let celula1 = novaLinha.insertCell(0);
        let celula2 = novaLinha.insertCell(1);
        let celula3 = novaLinha.insertCell(2);

        celula1.innerHTML = codigoEntrada.value;  // Insere o valor do código de barras
        celula2.innerHTML = new Date().toLocaleString();  // Insere a data atual
        celula3.innerHTML = "<a class='remove-button'>🚮</a>";  // Adiciona o botão de remoção

        codigoEntrada.value = "";  // Limpa o campo de input

        celula3.querySelector('.remove-button').addEventListener('click', function(){
            tabela.deleteRow(novaLinha.rowIndex-1);
        });
    }
};

function enviaTabela() {
    let tabela = document.getElementById("listaDeEntradas").getElementsByTagName('tbody')[0];
    let linhas = tabela.getElementsByTagName('tr');
    let entradas = [];

    for (let i = 0; i < linhas.length; i++) {
        let celulas = linhas[i].getElementsByTagName('td');
        let entrada = {
            codigo: celulas[0].innerText,
            data: celulas[1].innerText
        };
        entradas.push(entrada);
    }

    let json = JSON.stringify(entradas);
    localStorage.setItem("tabelaEntradas", json);

    alert("Tabela enviada com sucesso!");
}