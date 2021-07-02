const texto = '1,2,3,4,5,6,7,8,9,a.b c!d?e[f'
const texto2 = 'João não vai passear na moto'

//Selecionando grupo pares
console.log(texto.match(/[02468]/g))
//Selecionando dois tipos de NA
console.log(texto2.match(/n[aã]/g))
console.log(texto.split(/2,3/))
console.log(texto2.replace(/não/, ''))