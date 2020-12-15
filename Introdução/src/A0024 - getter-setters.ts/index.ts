export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {}

  set cpf(valor: string){
    this._cpf = valor;
  }

  get cpf() {
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('luiz', 'Miranda', 30, '000.000.000-00');
pessoa.cpf = '123.456.789-99' ;
console.log(pessoa.cpf);

