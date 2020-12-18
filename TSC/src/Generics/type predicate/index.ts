export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

console.log(isNumber('123'));

export function soma<T> (...args: T[]): number | null {
  const retorno = args.reduce((sum, value) => {
    if(isNumber(sum) && isNumber(value)) {
      return sum + value;
    }
    return sum;
  }, 0);

  return retorno;
}
console.log(1, 2, 3)
