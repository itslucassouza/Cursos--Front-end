select * from estados e, cidades c
select 
c.nome as cidades,
e.nome as Estado,
regiao as Região
from estados e 
inner join cidades c 
    on e.id = c.estado_id