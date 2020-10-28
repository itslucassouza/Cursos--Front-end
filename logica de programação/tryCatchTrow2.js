try {
    console.log('abri um arquivo')
    console.log('Manipulei o arquivo e gerou erro')
    console.log("Fechei o arquivo")
} catch (e) {
    //é executada quando tem erros
    console.log('tratando o erro..')
} finally {
    //sempre vai ser executado
    console.log('eu sempre sou executado')
} 


function retornaHora(data) {

    //verificando se é uma instancia de date
    if (data && !(data instanceof Date)) {
        //recebendo um novo tipo de erro
         throw new TypeError('esperando instancia de Date.');
    }

    if(!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-br', {
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try{
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora(11); 
    console.log(hora) // aqui está o erro
} catch (error) {
    //tratar erro 

}finally {
    console.log('Tenha um bom dia!')
}
