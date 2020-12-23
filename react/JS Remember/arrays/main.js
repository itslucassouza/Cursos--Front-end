//criando uma lista e pegando o index com indexOf
var lista = ["Matheus", 'Luiz', "matheus", 15]
lista.indexOf("Matheus");

//Pegando o index 2 da lista
lista[2] 


//quando vc procura um indice com nome q nao existe, sempre retorna -1
lista.indexOf("henriquex");


//dando um join para juntar
lista.join(",");
lista.join("/");


//pop sempre remove o ultimo elemento
lista.pop();

//shift remove o primeiro do indice
lista.shift();

//alterar o index
lista.indexOf("lucas");
lista[0] = "lucas Ferreira";

// push adiciona um item
lista.push("Matheus");

if(lista.indexOf("henrique") > -1) {
    alert("esse item ta na lista")
}else{
    alert("nao encontrado")
}

