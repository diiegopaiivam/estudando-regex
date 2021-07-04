const texto1 = 'O José Simão é muito engraçado... huahuahuahuahua'
const texto2 = 'http://www.site.info www.escola.ninja.br google.com.ag'

console.log(texto1.match(/(hua)+/g))
console.log(texto2.match(/(http:\/\/)?(www\.)?\w+\.\w{2,}(\.\w{2})?/g))