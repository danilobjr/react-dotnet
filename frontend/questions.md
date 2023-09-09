1. As props `Alias` e `ID` sao aparentemente iguais. Devo criar filtros para cada ou posso escolher um dos dois e criar um input para este campo escolhido?

Escolhe ID
Tratar como texto e nao uma data

2. A prop `CvrfUrl` eh filtrada por valor exato da URL ou devo tratar como um texto? Examplo: filtrar no campo de URL pelo termo _microsoft_, traria todos os itens.

Criar um link na tabela, mas nao precisa ter um input pra filtrar

3. A prop `Severity` parece ser sempre nula: `<Severity i:nil="true"/>`. Como deve ser o campo para filtrar severity? Existe algum local q mostre os possiveis valores?

Ignorar nos filtros e na tabela, pois eh tudo null

4. A tabela deve ter paginacao?

Nao
