//false
console.log(this === global)
console.log(this === module)


//true
console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === global)
}

//this já não aponta mais para exports, quando se está dentro de uma função 
//ele vai apontar para global
logThis()