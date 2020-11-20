update estados
set nome = 'Maranhão'
where sigla = 'MA'


select nome frome stados where sigla = 'ma'

update estados 
set nome = 'paraná',
    população = 11.32
WHERE sigla = 'PR'

SELECT est.nome, sigla, populacao
from estados estwhere sigla = 'PR'