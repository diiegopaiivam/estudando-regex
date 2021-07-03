const texto = `1,2,3,4,5,6,7,8,9,a.b c!d?e\r    -
f_g`

console.log(texto.match(/\d/g)) //Seleciona somente os dígitos, semelhante ao [0-9]
console.log(texto.match(/\D/g)) //Seleciona os não digitos, semelhante ao [^0-9]

console.log(texto.match(/\w/g)) //Seleciona os caracteres, semelhante ao [a-zA-Z0-9_]
console.log(texto.match(/\W/g)) //Seleciona os não caracteres, semelhante ao [^a-zA-Z_]

console.log(texto.match(/\s/g)) //Seleciona os espaços [\t\n\r\f]
console.log(texto.match(/\S/g)) //Seleciona os não espaços [^\t\n\r\f]