
let x = 10; //eslint-disable-line
x = 0b1010;
const y = 10 //só pode ser 10

let a = 100; //eslint-disable-line


const pessoa = {
  nome: 'Luiz' as const,
  sobrenome: 'Miranda',
};

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}
console.log(escolhaCor('Vermelho'));

//module mode
export default 1;
