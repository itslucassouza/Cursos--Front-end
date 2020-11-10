/**
 * JAVA SCRIPTÉ BASEADO EM PROTOTIPOS PARA PASSAR PRORPIEDADES E METODOS DE UM OBJETO PAR AOUTRO.
 * 
 * definição de proptotipo
 * é o termo utilizado para se refirir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções.
 * 
 * todos os objetos tem um referencia interna para um protótipo (__proto__)
 * que vem da propriedade prototyp da função construtora que foi usada para crialo. quando tentamos acessar um membro de um objeto, primeiro o moto do 
 * js vai tentar encontrar este membro no proprio objeto e depois a cadeia de protótipos é usada até o topo
 * (null) até encontrar (ou nao) tal membro 
 * 
 * 
 * 
 * 
 */

 function Pessoa( nome, sobrenome) {
     this.nome = nome;
     this.sobrenome = sobrenome;  
 }

 Pessoa.prototype.nomeCompleto = function() {
     return this.nome + ' ' + this.sobrenome;
 }