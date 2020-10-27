// par nome e valor
const saudacao = 'Opa' // contexto lexico 1 (local onde foi definido)

function exect() {
    const saudacao = 'Falaaa' // contexto lexico 2
    return saudacao
}

//objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: pedro,
    idade: 32,
    peso: 90,
    endereço: {
        logradouro: 'Rua muito legal',
        numero: 123,
    }
}

console.log(saudacao)
console.log(exect())

console.log(cliente)