select e.nome, c.nome 
from empresas e, empresas_unidade eu, cidade c
where e.id = eu.empresa_id
and c.id = eu.cidade_id
and sede