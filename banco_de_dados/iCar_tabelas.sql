CREATE TABLE gerente( 
 idGerente INT PRIMARY KEY NOT NULL,  
 funcao VARCHAR(40) NOT NULL,  
 nome VARCHAR(60) NOT NULL
); 

CREATE TABLE cliente(
 CPF INT PRIMARY KEY not NULL,
 Nome VARCHAR(60) NOT NULL,
 RG INT not NULL,
 data_de_Nascimento INT not NULL,  
 estado_civil VARCHAR(12) not NULL,  
 genero VARCHAR(20) not NULL,
 idGerente INT,
 FOREIGN KEY(idGerente) REFERENCES gerente(idGerente)
);

CREATE TABLE contatos(
 id_contatos SERIAL PRIMARY KEY,
 Telefone INT NOT NULL,  
 Telefone_2 INT,
 Email VARCHAR(260) not NULL,
 CPF INT,
 FOREIGN KEY(CPF) REFERENCES cliente(CPF)
);

CREATE TABLE endereco(
 id_endereco SERIAL PRIMARY KEY,
 CEP INT not NULL,  
 UF VARCHAR(2) not NULL,  
 Rua VARCHAR(150) not NULL,  
 Cidade VARCHAR(80) not NULL,
 CPF INT,
 FOREIGN KEY(CPF) REFERENCES cliente(CPF)
);

CREATE TABLE carros(
 renavam INT PRIMARY KEY NOT NULL,
 chassi INT  NOT NULL,  
 placa VARCHAR(7)  NOT NULL,  
 modelo VARCHAR(60)  NOT NULL,  
 marca VARCHAR(50)  NOT NULL,     
 IPVA INT  NOT NULL,  
 seguro INT  NOT NULL,  
 preco INT  NOT NULL,  
 ano_modelo INT  NOT NULL,  
 ano_de_fabricacao INT  NOT NULL,    
 motor INT  NOT NULL,    
 revisoes INT  NOT NULL,
 idGerente INT,
 FOREIGN KEY(idGerente) REFERENCES gerente(idGerente)
); 

CREATE TABLE especificacoes(
  id_especificacoes SERIAL PRIMARY KEY,
  cor VARCHAR(40)  NOT NULL,
  combustível VARCHAR(20)  NOT NULL,
  capacidade_passageiros INT  NOT NULL,
  caixa_de_marcha VARCHAR(30)  NOT NULL,
  potencia INT  NOT NULL,
  renavam INT,
  FOREIGN KEY(renavam) REFERENCES carros(renavam)
);

CREATE TABLE Cota(  
 id_cotas SERIAL PRIMARY KEY,
 numero_de_Cotas INT NOT NULL, 
 valor_cotas INT NOT NULL,  
 CPF INT,  
 idGerente INT,  
 renavam INT,
 FOREIGN KEY(CPF) REFERENCES cliente(CPF),
 FOREIGN KEY(idGerente) REFERENCES gerente(idGerente),
 FOREIGN KEY(renavam) REFERENCES carros(renavam)
); 



ALTER TABLE cliente ALTER cpf TYPE BIGINT;
ALTER TABLE contatos ALTER telefone TYPE BIGINT;
ALTER TABLE contatos ALTER telefone_2 TYPE BIGINT;
ALTER TABLE contatos ALTER cpf TYPE BIGINT;
ALTER TABLE endereco ALTER cpf TYPE BIGINT;
ALTER TABLE carros ALTER chassi TYPE VARCHAR(15);
ALTER TABLE cota ALTER cpf TYPE BIGINT;