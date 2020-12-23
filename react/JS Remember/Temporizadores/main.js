function acao(){
    document.write("executando..")
}

//Executa de tempo em tempo!
// setInterval(acao, 7000);

var timer = setInterval(acao, 3000);

//para de executar
clearInterval(timer);

//executa e para (apenas uma vez)
// setTimeout(acao, 3000)