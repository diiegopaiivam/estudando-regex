
//g - global
//i - ignore case sensitive 

const texto = 'A Aline vai fazer a janta hoje'

console.log(texto.match(/A|ai/)) 
console.log(texto.match(/a|ai/i))
console.log(texto.match(/a|ai/gi))
