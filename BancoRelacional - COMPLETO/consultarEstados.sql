select * from estados

select nome, sigla as 'Nome do Estado' from estados
where regiao = 'sul'

select 
    nome,
    regiao 
from estados 
where populacao >= 10
ORDER BY populacao desc
