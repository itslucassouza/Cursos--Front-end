export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-10';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  metodoNormal(): void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }

  // static falaOi(): void {
  //   console.log('Oi')
  // }

  static criaPEssoa(nome: string, sobrenome: string): Pessoa{
    return new Pessoa(nome, sobrenome, 0, '000.000.000-00');
  }
}

const pessoa1 = new Pessoa('luiz', 'Miranda', 30, '000.000.000-00');
const pessoa2 = Pessoa.criaPEssoa('Lucas', 'Souza');
console.log(pessoa1);
console.log(pessoa2);
pessoa1.metodoNormal();
console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
// Pessoa.falaOi();
