//record
const objeto1: Record<string, string | number> = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};

console.log(objeto1);

type PessoaProtocol = {
  nome: string;
  sobrenome: string;
  idade?: number;
};

//required
type PessoaRequired = Required<PessoaProtocol> ;

//partial
type PessoaPartial = Partial<PessoaRequired> ;

//Readonly
type PessoaReadonly = Readonly<PessoaRequired>;

//pick
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

const objeto2: PessoaRequired = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,

};


//extract e exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExclude = Exclude<ABC, CDE>;
type TipeExtract = Extract<ABC, CDE>;
//module mode
export default 1;

