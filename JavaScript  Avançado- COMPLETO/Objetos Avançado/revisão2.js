// Padroes de projeto

// Factory function / constructor functions // classes

function criaPessoa(nome, sobrenome) {
    return {
        nome, 
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio')
console.log(p1.nomeCompleto());


function Pessoa(nome, sobrneome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa('luiz', 'Miranda')