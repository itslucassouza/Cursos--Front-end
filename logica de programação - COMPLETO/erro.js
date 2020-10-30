function tratarErroELacar(erro) {
    throw new Erro('...')
}

function imprimirNomeGritado(obj) {
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    }catch(e) {
        tratarErroELancar(e)
    }finally {
        console.log('final')
    }
}

const obj = { name: 'roberto' }
imprimirNomeGritado(obj)

