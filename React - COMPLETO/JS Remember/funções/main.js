//função entrar 
function entrar() {

    var area = document.getElementById('area');
    var texto = prompt('Digite seu nome?');

    
    if(texto === '' || texto === null) {
        alert('Digite seu nome novamente!')
        area.innerHTML = 'Bem vindo!...';
    }else {
        area.innerHTML = texto;
    }
}

function entrar2(nome) {
    var area = document.getElementById('area2');
    var texto = prompt('Digite seu Sobrenome?');
    area.innerHTML = nome + " " + texto;
}


function entrar3(idade) {
    var area = document.getElementById('area3');
    var texto = prompt('Digite sua Idade');
    area.innerHTML = idade + " " + texto;
}