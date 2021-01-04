function adicionar(...numeros) {
    let total = numeros.reduce((total, next) => {
        let soma = total + next;
        return soma;
        });

    console.log(total);

}

adicionar(1,2,3,4,5)