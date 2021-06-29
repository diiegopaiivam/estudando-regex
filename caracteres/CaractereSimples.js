const texto = '1,2,3,4,5,6,a.b c!d?e'

const regexVirtula = /,/
console.log(texto.split(regexVirtula))
console.log(texto.match(regexVirtula))

console.log(texto.match(/5/))
console.log(texto.match(/A/gi))
console.log(texto.match(/e/))
console.log(texto.replace(/a.b/, 'aqui'))
console.log(texto.replace(/[1-5]/, 'olha aqui de novo'))