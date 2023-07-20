SELECT * FROM cliente;
SELECT * FROM contatos;
SELECT * FROM endereco;

SELECT * FROM gerente;

SELECT * FROM carros;
SELECT * FROM especificacoes;
SELECT * FROM cota;

SELECT marca, modelo, preco, ano_modelo, ano_de_fabricacao, revisoes FROM carros WHERE revisoes < 112023;
SELECT * FROM carros WHERE marca = 'BMW';

SELECT cliente.cpf, nome, genero, data_de_nascimento, endereco.cep, endereco.uf,endereco.cidade, endereco.rua FROM cliente
INNER JOIN endereco
on cliente.cpf = endereco.cpf;

SELECT cliente.cpf, nome, genero, data_de_nascimento, contatos.telefone, contatos.email FROM cliente
INNER JOIN contatos
on cliente.cpf = contatos.cpf;

