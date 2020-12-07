const texto =`
João trouxe flores para sua amada em 10 de janeiro de 1970,
maria era o nome dela.

foi um ano excelente na vida de joão. teve 5 filhos, todos adultos atualmente.
maria,hoje sua esposa,ainda faz aquele café com pão de queijo nas tardes de
domingo. também né! sendo a boa mineira que é, nunca esquece seu famoso pão de queijo.
não cabsi de ouvir a maria?
"jooooooooooooooooooooooooãoooo, o café ta prontinho aqui. vemm"!
`;

const arquivos = [
    'Atenção.jpg',
    'FOTO.jpeg',
    'Meu gatinho.jpg',
    'Meu gatinho.JPG',
    'Meu gatinho.jpeg',
    'marido.png',
    'lista de compras.txt'
];

const cpfs = `
Os CPFs são:
  254.224.877-45 215.978.456-12 047.258.369-96 	 

  963.987.321-00
  `;

const cpfs2 = `254.224.887-45 
215.978.456-12
047.258.369-96
963.987.32a.00`;



const ips = `
os ips são:
0.0.0.0
192.168.0.25
10.10.05.12
255.255.255.255`


const alfabeto =
'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789';
const html = '<p>Olá mundo</p> <p> Olá de novo </p> <div> Sou a div </p>';
const html2 = `<p>Olá mundo </p> <div>Sou a div </div>`;


module.exports = {
    texto, arquivos, html, alfabeto, ips, cpfs, html2
}
    