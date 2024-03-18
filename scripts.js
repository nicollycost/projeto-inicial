var botao = document.getElementById("botao");
botao.addEventListener("click", alertar);
var nome = document.getElementById("nome");
var saida = document.getElementById("saida-de-dados");
var email = document.getElementById("email");
var telefone = document.getElementById("telefone");
var cep = document.getElementById("cep");

function alertar(){
//alert(nome.value + " " + "clicou no botão!");
    saida.innerText = "Nome: " + " " + nome.value +
        "\n E-mail: " + " " + email.value;

}