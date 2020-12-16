const objetoA: {
  readonly chaveA: string,  //não pode ser alterado o valor
  chaveB: string,
  chaveC?: string, //não obrigatório
  [key: string]: unknown;  //pode ser q tenha
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

