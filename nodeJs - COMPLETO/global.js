// console.log(global)
//Obejto compartilhado congelado para não ser alterado os valores padroes
//objeto imutavel
global.MinhaApp = Object.freeze ({
    saudacao() {
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema Legal'
})