const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //vai gerar um conflito entre paradigmas : o this ainda é pessoa e

// a função bind "amarra" o sujeiro que será o this
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()