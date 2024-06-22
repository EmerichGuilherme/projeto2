const form = document.getElementById('form-contato');
const contatos = []
const numeros = []

let linhas = '';

form.addEventListener('submit',function(e){
    e.preventDefault();

    adicionaLinha()
    atulizaTabela()


});

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato')
    if(contatos.includes(inputNomeContato.value)) {
        alert(`Já existe um contato com nome de: ${inputNomeContato.value}`)
    } else {
        contatos.push(inputNomeContato.value)
        numeros.push(parseFloat(inputNumeroContato.value));

        let linha = "<tr>"
        linha +=`<td>${inputNomeContato.value}</td>`;
        linha +=`<td>${inputNumeroContato.value}</td>`
        linha +=`</tr>`;

        linhas += linha;
    }
        inputNomeContato.value = ""
        inputNumeroContato.value = ""
}

function atulizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas
}

function apagarLinha(botao) {
    var linha = botao.parentNode.parentNode;
    linha.remove();
}