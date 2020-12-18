export class Pessoa<T, U> {
  constructor(
    public nome: T,
    public idade: unknown,
  ) {}
}

//pilha de dados
export class Pilha<T> {
  private contador = 0;
  private elementos: { [k: number]: T} = {};

  push(elemento: T):void {
    this.elementos[this.contador] = elemento;
    this.contador++;
  }

  pop(): T | void {
    if(this.isEmpty()) return undefined;

    this.contador--;
    const elemento = this.elementos[this.contador];
    delete this.elementos[this.contador];
    return elemento;
  }

  isEmpty(): boolean {
    return this.contador === 0;
  }

  lenght(): number {
    return this.contador;
  }

  show(): void {
    for(const chave in this.elementos) {
      console.log(this.elementos[chave])
    }
  }
}

const pilha = new Pilha<number>();

pilha.push(5)
pilha.push(5)
pilha.push(5)
pilha.push(5)

while(!pilha.isEmpty()) {
  console.log(pilha.pop());
}
