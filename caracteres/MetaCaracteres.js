//Conjunto de metas caracteres
// . ? * + = ^ $ | [ ] { } ( ) \ : 

const texto = '1,2,3,4,5,6,a.b c!d?e'

console.log(texto.split(/\?/g))
console.log(texto.replace(/\./, ' Substituindo o ponto '))

console.log(texto.split(/,|\.|\!|\?/g))
