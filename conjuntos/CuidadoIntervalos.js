const texto = 'ABC [abc] a-c 12345'

console.log(texto.match(/[a-c]/g)) //Isso é um range
console.log(texto.match(/a-c/g)) //Isso não é um range

console.log(texto.match(/[A-Za-z]/g)) //Pega todas as letras.

//Os ranges terão que respeitar a ordem da tabela unicode, se for gerado
//um range com a ordem inversa, o erro se apresentará no console.
//Tanto para números, quanto para as letras.