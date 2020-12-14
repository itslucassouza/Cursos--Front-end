class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ){}

  getIdade(): number {
    return this.idade;
  }

  getCPF(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + '' + this.sobrenome;
  }
}

export class Aluno extends Pessoa{
    constructor(
      nome: string,
      sobrenome: string,
      idade: number,
      cpf: string,
      public sala: string,
    ) {
      super(nome, sobrenome, idade, cpf);
    }

  getNomeCompleto(): string {
    console.log('Fazendo algo antes')
    const result = super.getNomeCompleto();
    return result + 'HEeeeeyyy';
  }
}
export class Cliente extends Pessoa {}


