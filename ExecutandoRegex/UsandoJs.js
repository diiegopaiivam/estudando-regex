const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

const regexNove = RegExp('9')

console.log("Métodos da RegExp...")
console.log(regexNove.test(texto))
console.log(regexNove.exec(texto))

const regexLetra = /[a-f]/g
console.log("Estudando Regex...")
//Encontra aquela chave dentro da regex
console.log(texto.match(regexLetra))
//Encontra o primeiro item do array da regex
console.log(texto.search(regexLetra))
//Subsitui aquele trecho encontrado na regex
console.log(texto.replace(regexLetra))
//Quebra a string em um array baseado na regra criada de regex
console.log(texto.split(regexLetra))