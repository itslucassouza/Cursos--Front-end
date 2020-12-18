 /* eslint-disable */
/* type anotation */
//Tipos basicos (aqui ocorre inferÊnca de tipos)
let nome: string = 'Luiz';
let idade: number = 30;
let adulto: boolean = true;
let simbolo: symbol = Symbol('Qualquer-symbol');
// let big: bigint = 10n;


//arrays
let arrayDeNumeros: Array<number> = [ 1, 2, 3 ];
let arrayDeNumeros2: number[] = [ 1, 2, 3 ];
let arrayDeStrings: Array<string> = [ 'a', 'b' ];
let arrayDeString2: Array<string> = [ 'a', 'b' ];

//Objetos
let pessoa: {nome: string, idade: number, adulto: boolean} = {
  nome: 'lucas',
  idade: 30,
  adulto: true
};

//Funções
function soma(x: number, y: number): number {
  return x + y;
}
const soma2: (x:number, y: number) => number = (x, y) => x + y;
