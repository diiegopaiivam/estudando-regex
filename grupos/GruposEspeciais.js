const texto = 'João é calmo, mas no transito fica nervoso.'

console.log(texto.match(/[\wÀ-ú]+/gi))

// Positive lookahead
// faz um match com coisas que vem depois da palavra, é definido pelo =
console.log(texto.match(/[\wÀ-ú]+(?=,)/gi))
console.log(texto.match(/[\wÀ-ú]+(?=\.)/gi))
console.log(texto.match(/[\wÀ-ú]+(?=, mas)/gi))

// Negative lookahead
// Seleciona aquilo que não tem no final das palavras, é definido pelo !
console.log(texto.match(/[\wÀ-ú]+\b(?!,)/gi))
console.log(texto.match(/[\wÀ-ú]+[\s|\.](?!,)/gi))