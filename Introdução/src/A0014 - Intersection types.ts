type TemNome = { nome: string};
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome | TemIdade; // or, AND

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type intersecao = AB & AC | AD;


const pessoa: Pessoa = {
  nome: 'Luiz',
  sobrenome: 'augusto'
};

console.log(pessoa)


export { pessoa }
