//Encadeamento opcional e Operador de coalescência nula

type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento ={
  titulo: 'O titulo',
  texto: 'O texto',
};

console.log(documento.data?.toDateString() ?? 'ixi, não existe data.');
console.log(undefined ?? 'continua nao existindo');
console.log(null ?? 'ainda não querido');
console.log(false ?? 'Nadica mermão')
