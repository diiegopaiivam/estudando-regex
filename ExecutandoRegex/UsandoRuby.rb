texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'
texto2 = '4589/2021-SETIN'

regexNove = Regexp::new('9')
# Faz um match com o caractere setado na regex
puts regexNove.match(texto)

regexNove = %r{9}
puts regexNove.match(texto)

p regexNove =~ '894'

regexLetra = /[a-c]/
regraRegex = 
puts texto.split(/[1-9]/)
puts "regex"
#Fazendo regex em um conjunto de letras
puts texto.scan(regexLetra).join('')
#Fazendo regex separando em um array
puts texto.split(/,/).join

print texto.split(/[aeiou]/)


