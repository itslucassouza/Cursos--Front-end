//funções de fabrica

function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome, 
        sobrenome,
        //getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
        //setter
        set nomeCompleto(valor) {
            //transforma o texto em vetores (arrays)
            valor = valor.split('');
            this.nome = valor.shift();
            this.sobrenome = valor.join('')
        },
        fala: function() {
            //o this está referenciando a pessoa, no caso a function pai
            return `${this.nome} está ${asssunto}.`;
        },
        altura: a,
        peso: p,
        //utilizando o get(getter), ele passa a ser um "atributo" e não uma função disparada dentro de um objeto
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2)
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.80, 80);
console.log(p1.sobrenome)