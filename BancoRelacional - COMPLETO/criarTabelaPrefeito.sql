CREATE TABLE IF NOT EXIST prefeitos (
    ID INT UNSIGNED NOD NULL AUTO_INCREMENT,
    nome varchar(255) not null,
    cidade_id INT UNSIGNED,
    primary key (id),
    unique key (cidade_id),
    foreign key(cidade_id) references cidades (id)
)