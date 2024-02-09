let nome = window.document.querySelector('#nome'); 
let sobrenome = window.document.querySelector('#sobrenome'); 
let email = document.querySelector('#email'); 
let mensagem = document.querySelector('#mensagem');

function validaNome(){

    let txt = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txt.innerHTML = 'Nome Inválido'
        txt.style.color = 'red'
    } else {
        txt.innerHTML = 'Nome Válido'
        txt.style.color = 'green'
    }
}

function validaSobrenome(){

    let txt = document.querySelector('#txtSobrenome')
    if (sobrenome.value.length < 3) {
        txt.innerHTML = 'Sobrenome Inválido'
        txt.style.color = 'red'
    } else {
        txt.innerHTML = 'Sobrenome Válido'
        txt.style.color = 'green'
    }

}

function validaEmail(){
    let txt = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txt.innerHTML = 'E-mail Inválido'
        txt.style.color = 'red'
    } else {
        txt.innerHTML = 'E-mail Válido'
        txt.style.color = 'green'
    }

}

function validaMensagem(){
    let txt = document.querySelector('#txtMensagem')
    if (mensagem.value.length < 20) {
        txt.innerHTML = 'Mensagem deve conter pelo menos 20 caracteres'
        txt.style.color = 'red'
    } else {
        txt.innerHTML = 'Mensagem Válida'
        txt.style.color = 'green'
    }
}