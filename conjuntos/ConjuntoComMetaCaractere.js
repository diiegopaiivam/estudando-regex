const texto = '.$+*?-'

console.log(texto.match(/[$-?]/g))
console.log(texto.match(/[+.?*$]/g)) //não precisa utilizar o escape dentro de um conjunto

console.log(texto.match(/[$\-?]/g)) //não vai funcionar como um range por conta do escape
console.log(texto.match(/[-?]/g)) //vai selecionar os dois elementos dentro da string e não vai funcionar como um range