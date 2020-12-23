//resto 
// function MinhaLista(...nomes) {
//     console.log(nomes)
// }

// MinhaLista("matheus", "Lucas","Joao")

function cadastrar(usuarios, ...novosUsuarios) {
    let totalusuarios = [
        usuarios,
        novosUsuarios
        
    ];
}

let usuarios = ["MAtheus", "Lucas"]

let novosUsuarios = cadastrar(usuarios, "Henrique", "Joaozinho")

console.log(totalusuarios)