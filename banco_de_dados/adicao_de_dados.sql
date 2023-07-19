INSERT into gerente(idgerente, funcao, nome)
VALUES (221, 'gerente de vendas', 'Carlos de freitas'),
(222, 'gerente de compras', 'Camila silva fagundes'),
(223, 'gerente de atendimentos', 'cristine soares santos'),
(224, 'gerente de vendas', 'Thiago fernandes jesus');

INSERT into cliente(cpf, nome, rg, data_de_nascimento, estado_civil, genero, idgerente)
VALUEs (12345678900, 'Lucas oliveira da silva', 001234567, 12072000, 'solteiro', 'masculino', 221),
(45612378900, 'Isabella da costa almeida', 007654321, 13021992, 'solteiro', 'feminino', 221),
(98765432100, 'Sofia ferreira cardoso', 005674123, 28122002, 'solteiro', 'feminino', 224),
(00345678912, 'Gabriel pereira santos', 002222232, 05091987, 'solteiro', 'masculino', 224);

INSERT into contatos(telefone, telefone_2, email,cpf)
VALUES (3199001002, 0,'Lucas@gmail.com', 12345678900),
(1198803278, 1198807823, 'belinha23@hotmail.com', 45612378900),
(4193243445, 0, 'fificardoso@outlook.com', 98765432100),
(7192350236, 0, 'Santosbiel@gmail.com', 00345678912);

INSERT into endereco(cep, uf, rua, cidade, cpf)
values (12000000, 'SP', 'Rua andrades', 'São paulo', 12345678900),
(12300000, 'MG', 'Av antonio carlos', 'Belo horizonte', 45612378900),
(12340000, 'RS', 'Rua azul', 'Pelotas', 98765432100),
(12350000, 'BA', 'Rua da forca', 'Salvador', 00345678912);

INSERT INTO carros(renavam, chassi, placa, modelo, marca, ipva, seguro, preco, ano_modelo, ano_de_fabricacao, motor, revisoes, idgerente)
VALUES (123456000, 'hg23434sdd56d67', 'plp4d23', '430i', 'BMW', 4000, 15000, 94900.00, 2018, 2018, 4325345, 042023, 221),
(908453213, 'ijw834ijkoswd89', 'iuj4352', 'huracan', 'LAMBORGHINI', 12400, 32000, 2000000.00, 2022, 2022, 4576893, 042023, 224),
(934876654, 'sjdkh3098dhjs98', 'hdf1j34', 'supra', 'TOYOTA', 10500, 27000, 449900.00, 2021, 2021, 4325345, 072023, 221),
(301238743, 'sdopaW40G9S8790', 'fdh6l09', 'mustang', 'FORD', 9500, 26000, 436900.00, 2022, 2022, 9837533, 122023, 224),
(203443345, 'dfsiduy56235rfs', 'hkf4a12', '718', 'PORSCHE', 7123, 21500, 194900.00, 2017, 2017, 9837533, 032023, 224);

INSERT INTO especificacoes(cor, combustível, capacidade_passageiros, caixa_de_marcha, potencia, renavam)
VALUES ('preto', 'gasolina', 5, 'automatico', 258, 123456000),
('blue laufey', 'gasolina', 2, 'automatico', 640, 908453213),
('branco', 'gasolina', 5, 'automatico', 340, 934876654),
('azul acizentado', 'gasolina', 5, 'automatico', 438, 301238743),
('vermelho', 'gasolina', 5, 'automatico', 500, 203443345);

INSERT into cota(numero_de_cotas, valor_cotas, cpf, idgerente, renavam)
VALUES (1, 94900.00, 12345678900, 221, 123456000),
(2, 2000000.00, 45612378900, 224, 908453213),
(1, 449900.00, 45612378900, 221, 934876654),
(1, 436900.00, 98765432100, 224, 301238743),
(1, 194900.00, 12345678900, 224, 203443345);

