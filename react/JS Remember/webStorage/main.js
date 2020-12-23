
//Melhor forma de fazer
localStorage.nome = "Souza";
localStorage.nome;

//setando item no local Storage
localStorage.setItem("nome", "Matheus");

//capturando Item no LocalStorage
localStorage.getItem("nome");

//Removendo item no local storage
localStorage.removeItem("nome")


localStorage.setItem("nome", "lucas");
localStorage.setItem("sobrenome", "Souza");

localStorage.removeItem("nome", "sorbenome")

var nome = '';
if(typeof localStorage.nome == 'undefined'){
    localStorage.nome = prompt("digite seu nome?")
}
nome = localStorage.nome;

document.getElementById('nome').innerHTML(nome);
