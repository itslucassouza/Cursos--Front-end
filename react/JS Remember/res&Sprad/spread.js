let primeiros = [1,2,3];

let numeros = [...primeiros, 4,5,6];

console.log(numeros)


function cadastroPessoa(info) {
    let novosDados = {
        ...info,
        cargo: 'Programador',
        status: 1,
        codigo: '6544645213',
    };
    return novosDados;
}

cadastroPessoa({nome: 'Lucas', sobrenome: 'Fraga', anoInicio: 2045});