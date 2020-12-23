//swuitch
document.write("<br>Escolha seu pedido: <br>")
document.write("<br> 0 - Sorvete / 1 - suco <br>")
document.write("<br> 2 - Coca cola / 3 - Agua Geralada <br><br>")


function pedir() {

    x = ("o que deseja pedir?");

    switch(x) {

        case '0': 
            alert("Você escolheu Sorvete");
            break
        case '1':
            alert("Você pediu um suco");
            break
        case '2': 
            alert("VocÊ pediu uma coca");
            break;
        case '3': 
            alert("Você pediu uma agua")
            break;
        default:
            Alert("não temos essa opção!")
            break;
    }
}