//IIFE = IMMEDIATELY INVOKED FUNCTION EXPRESSION
//quando a função é criada dentro de parenteses, ela foge do escopo global e respeita somente o escopo dela
(function(idade, peso, altura) {
    const sobrenome = 'Miranda';
    function criaNome(nome) {
        return nome + '' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Luiz'))
    }

    falaNome();
    console.log(idade, peso, altura)
})('idade' , 'peso', 'altura'); //tem sempre que retornar o parentese que invoca a função