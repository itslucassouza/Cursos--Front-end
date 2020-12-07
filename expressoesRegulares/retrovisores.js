const  { html2 } = require('./base');

//$1 $2 $3 < retrovisores


// console.log(html2);
console.log(html2.match(/<(\w+).*>.+?<\/\1>/gi));