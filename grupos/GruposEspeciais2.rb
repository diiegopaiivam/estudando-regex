texto = 'supermercado superação hiperMERCADO Mercado'

puts texto.scan(/(?:super)[\wÀ-ú]+/i).join(' ')

# Positive lookahead
# faz um match com coisas que vem depois da palavra, é definido pelo =
puts texto.scan(/(?<=super)[\wÀ-ú]+/i)

# Negative lookahead
# Seleciona aquilo que não tem no final das palavras, é definido pelo !
puts texto.scan(/(?<!super)[\wÀ-ú]+/i)