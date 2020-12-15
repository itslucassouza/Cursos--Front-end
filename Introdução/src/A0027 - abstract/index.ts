// Toda vez que algo for abstrato, quando a classe for extendida é Obrigatório o metodo existir, conforme no exemplo
//do "Bordão"


export abstract class Personagem {

  protected abstract emoji: string;


  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
    ) {}

    atacar(personagem: Personagem): void {
      console.log(`${this.nome} está atacando...`);
      personagem.perderVida(this.ataque);
    }

    perderVida(forcaAtaque: number): void {
      this.vida -= forcaAtaque;
      console.log(`${this.nome} agora tem ${this.vida} da vida...`)
    }

     abstract bordao(): void;
}

export class Guerreira extends Personagem {
  protected emoji = '🙀';

  bordao(): void {
    console.log('GUERREIRA ATK')
  }
}

export class Monstro extends Personagem {
  protected emoji = '♥';

  bordao(): void {
    console.log('monstro atk')
  }
}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro('Monstro', 87, 1000)

guerreira.atacar(monstro)

guerreira.atacar(monstro)

guerreira.atacar(monstro)

