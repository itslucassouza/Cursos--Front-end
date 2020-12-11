const dadosCliente1:readonly [number, string] = [1, 'Luiz'];  //imutavel
const dadosCliente2: [ number, string, string] = [1, 'Luiz', 'Miranda'];
const dadosCliente3: [ number, string, string?] = [1, 'Luiz'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Luiz', 'Miranda'];

console.log(dadosCliente1)
