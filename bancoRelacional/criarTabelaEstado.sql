-- criando a tabela estado
create table estados (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    sigla VARCHAR (2) NOT NULL,
    REGIAO ENUM('Norte', 'nordeste', 'centro-oeste','sudeste','sull') NOT NULL,
    população DECIMAL(5,2) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY (nome),
    UNIQUE KEY (sigla)
);