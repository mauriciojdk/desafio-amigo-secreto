let listaNome = [];
let nome;
let posicaoAleatoria = Math.random();
let participantes = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');


function adicionarAmigo(){
    nome = document.querySelector('input').value;

    if(nome == ''){
        alert('Campo em branco, digite um nome válido!');
    }else if(listaNome.includes(nome)){
        alert('Não pode repetir nome, ou adicione sobrenome para difereciar');
    } else {
        listaNome.push(nome);
        criarListaDeParticipantes();
        limparCampo();
    }
}

function criarListaDeParticipantes(){
    let i = 0;
    participantes.innerHTML = '';
    while(i < listaNome.length){
        participantes.innerHTML += '<li>' + listaNome[i] + '<li>';
        i++
    }
}

function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}

function sortearAmigo() {
    if(listaNome == ''){
        alert('Digite nomes a lista para sortear');
    } else {
        participantes.innerHTML = '';
        resultado.innerHTML = 'O amigo secreto sorteado é: ' + listaNome[parseInt(posicaoAleatoria * listaNome.length)];
    }
    document.getElementById('reiniciar').removeAttribute('disabled');
}

function sortearNovamente(){
    resultado.innerHTML = '';
    listaNome = [];
    document.getElementById('reiniciar').setAttribute('disabled', true);
}