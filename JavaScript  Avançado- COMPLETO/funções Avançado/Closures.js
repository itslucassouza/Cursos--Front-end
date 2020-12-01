function retornaFuncao(nome) {
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao('Luiz') // nesse caso o valor do nome, será luiz
const funcao2 = retornaFuncao('Joao') // nessa caso o valor continuira sendo luiz, pois não pode ser alterado

console.log(funcao())