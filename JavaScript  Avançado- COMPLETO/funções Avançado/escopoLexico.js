/**
 * a função reconhece seus vizinhos
 * ele vai procurando nos pais/ avôs
 */
const nome = 'luiz'

function falaNome() {
    // const nome = 'Otavio';
    console.log(nome)
}

falaNome()

function usafalaNome(){
    const nome = 'Otavio';
    falaNome() // ela continua respeitando o escopo dela, entao o nome nao é alterado
}
usafalaNome();