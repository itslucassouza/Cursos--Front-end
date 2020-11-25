INSERT INTO empresas 
(NOME, CNPG)
values
('BRADESCO' , 95694186)
('VALE', 27887148000146)

--ALTERANDO A TABELA PARA QUE MODIFIQUE O NUMERO INTEIRO PARA VARCHAR
ALTER TABLE EMPRESAS MODIFY CPNJ VARCHAR(14)

--descreva
DESC empresas

select * from empresas;
select * from cidades;

insert into empresas_unidades
    (empresa_id, cidade_id, sede)
values
    (1,1,1),
    (1,2,0)
