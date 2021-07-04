const texto1 = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>'
const texto2 = 'Lentamente é mente muito lenta.'
const texto3 = 'abcdefghijkll'
const texto4 = `125/2021-ABC 2/2021-BCD 6589/2021-UDA 58/2021-OPD 1456/2021-OPA 47896/2021-DPO`

console.log(texto1.match(/<(\w+)>.*<\/\1>/g))
console.log(texto2.match(/(lenta)(mente).*\2.*\1\./gi))
console.log(texto2.match(/(?:lenta)(mente).*\1/gi)) // ?: não guarda

console.log(texto2.match(/(lenta)(mente)/gi))
console.log(texto2.match(/(lenta)(mente)?/gi))
console.log(texto2.replace(/(lenta)(mente)/gi, '$2'))

console.log(texto4.match(/(\d{4})(?=-)/g)) //selecionando apenas o ano