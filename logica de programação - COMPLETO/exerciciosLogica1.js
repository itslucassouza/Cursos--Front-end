// function max(x, y) {
//     return x > y ? x : y
// }

//forma correta 
//arrow function quando se tem uma linha só deixa implicito que está retornando e não precisa das chaves
const max2 = (x, y) => x > y ? x : y;

// const maior = max(1, 2) se usa quando quer reutilizar o valores atribuidos
console.log(max2(10, 20))