const texto = 'Romário era o excelente jogador\n, mas hoje é um político questionador'

console.log(texto.match(/r/gi))
console.log(texto.match(/^r/gi)) // ^ Indica inicio da string ou da linha
console.log(texto.match(/r$/gi)) // $ Indica final da linha
