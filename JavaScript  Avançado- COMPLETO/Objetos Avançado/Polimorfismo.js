//classe mae
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if(valor > this.saldo)
     console.log('Saldo insuficiente' `${this.saldo}`)
    return
};

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo()
};

Conta.prototype.verSaldo = function(){
    console.log(`Àg/c: ${this.agencia}/${this.conta}` + 
    `Saldo: R${this.saldo.toFixed(2)}`
    );
};

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite;
}

caches.prototype = Object.create(Conta.prototype);
caches.prototype.constructor = CC;

// const conta1 = new Conta(11, 22, 10);
// conta1.depositar(20)