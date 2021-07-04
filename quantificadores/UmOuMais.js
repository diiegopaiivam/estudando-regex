const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOOOOOOOOOOOOOOOOOO!'
const texto2 = 'There is a big fog in NYC'

// + -> um ou mais
console.log(texto1.match(/fogo+/gi))
console.log(texto2.match(/fog+/gi))

const texto3 = 'Os números são: 0123456789.'
console.log(texto3.match(/\d/g))
console.log(texto3.match(/\d+/g))