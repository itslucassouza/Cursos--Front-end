const falar = {
    falar() {
        console.log(`${this.nome} está falando`)
    }
}

const comer = {
    comer() {
        console.log(`${this.nome} está comendo`)
    }
}

const pessoaPrototype = Object.assign({}, falar, comer)
 

function criaPessoa(nome, sobrenome) {
//criando um prototype para a função já que é uma factory e nao uma constrtuctor

    return Object.create(pessoaPrototype, {
        nome: {value: nome}, 
        sobrenome: {value: sobrenome}
    });
}

const p1 = criaPessoa('luiz' , 'otavio');

