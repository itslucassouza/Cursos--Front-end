select * from estados where id = 25

INSERT INTO cidades 
(nome, area, estado_id)
VALUES (
    'Campinas',
    795, 
    31)

INSERT INTO cidades 
( nome, area, estado_id)
VALUES (
    'Niteroi', 
    133.9, 
    25)


INSERT INTO cidades 
(nome, area, estado_id)
VALUES (
    'caruaru', 
    920.6, 
    (SELECT id from estados where sigla= 'PE')
)