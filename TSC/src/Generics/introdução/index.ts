//faz a tipagem baseada nos valores recebidos
type FilterCallback<U> = (
  value: U,
  index?: number,
  aray?: U[],
) => boolean;



export function meuFilter<T>(
  array: T[],
  callbackfn: FilterCallback<T>
  ): T[] {
  const newArray = [];

  for(let i = 0; i < array.length; i++) {
    if(callbackfn(array[i])) {
      newArray.push(array[i]);
    }
  }

  return newArray;
};





const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'a'];

const arrayFiltradoOriginal = array.filter((value) => value < 5)
console.log(arrayFiltradoOriginal);

const arrayFiltrado = meuFilter(array, (value) => value < 5);
console.log(arrayFiltradoOriginal);

