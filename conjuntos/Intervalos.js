const texto = '1,2,3,4,5,6,7,8,9,a.b c!d?e[f'
// trabalhando com conjuntos
console.log(texto.match(/[1-9]/g))
console.log(texto.match(/[a-z]/g))
console.log(texto.match(/[A-Z1-9]/gi))