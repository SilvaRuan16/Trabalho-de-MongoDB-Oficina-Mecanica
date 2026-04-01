// ==================================================
// TRABALHO MONGODB - CONSULTAS AVANÇADAS
// ==================================================
// TEMA: Oficina Mecânica
// GRUPO: 
// - Ruan Gustavo Soares da Silva.
// - Kayo Gabriel Soares da Silva.
// - Matheus Diirr Aguiar Veiga de Souza.
// DATA: 28/04/2026
// ==================================================

// --------------------------------------------------
// 1. CRIAÇÃO DO BANCO E COLEÇÕES
// --------------------------------------------------

// Cria a database
use('oficinaMecanica');

// Cria as collections
db.createCollection('veiculos');
db.createCollection('servicos');

// Limpa os dados das coleções
db.veiculos.deleteMany({});
db.servicos.deleteMany({});

// --------------------------------------------------
// 2. INSERÇÃO DE DADOS
// --------------------------------------------------

// 2.1 Insere os dados sobre o veículo
db.veiculos.insertMany([
    {
        _id: 1,
        marca: 'Volkswagen',
        modelo: 'Fusca',
        ano: 1980,
        placa: 'ABC1234',
        cor: 'Azul',
        quilometragem: 185_000,
        proprietario: 'Joao Silva'
    },
    {
        _id: 2,
        marca: 'Ford',
        modelo: 'Ka',
        ano: 2015,
        placa: 'XYZ5678',
        cor: 'Branco',
        quilometragem: 92_000,
        proprietario: 'Maria Oliveira'
    },
    {
        _id: 3,
        marca: 'Fiat',
        modelo: 'Uno',
        ano: 1998,
        placa: 'YPTO302',
        cor: 'Branco',
        quilometragem: 100_000,
        proprietario: 'Almeida Júnior de Souze'
    },
    {
        _id: 4,
        marca: 'Volkswagen',
        modelo: 'Gol',
        ano: 2012,
        placa: 'DEF2345',
        cor: 'Prata',
        quilometragem: 135_000,
        proprietario: 'Carlos Santos'
    },
    {
        _id: 5,
        marca: 'Chevrolet',
        modelo: 'Celta',
        ano: 2010,
        placa: 'GHI3456',
        cor: 'Preto',
        quilometragem: 148_000,
        proprietario: 'Ana Paula'
    },
    {
        _id: 6,
        marca: 'Fiat',
        modelo: 'Palio',
        ano: 2014,
        placa: 'JKL4567',
        cor: 'Cinza',
        quilometragem: 118_500,
        proprietario: 'Fernanda Costa'
    },
    {
        _id: 7,
        marca: 'Chevrolet',
        modelo: 'Onix',
        ano: 2019,
        placa: 'MNO5678',
        cor: 'Branco',
        quilometragem: 65_000,
        proprietario: 'Lucas Almeida'
    },
    {
        _id: 8,
        marca: 'Honda',
        modelo: 'Civic',
        ano: 2018,
        placa: 'PQR6789',
        cor: 'Preto',
        quilometragem: 78_000,
        proprietario: 'Ricardo Souza'
    },
    {
        _id: 9,
        marca: 'Toyota',
        modelo: 'Corolla',
        ano: 2020,
        placa: 'STU7890',
        cor: 'Prata',
        quilometragem: 52_000,
        proprietario: 'Juliana Martins'
    },
    {
        _id: 10,
        marca: 'Hyundai',
        modelo: 'HB20',
        ano: 2021,
        placa: 'VWX8901',
        cor: 'Azul',
        quilometragem: 41_000,
        proprietario: 'Bruno Ferreira'
    },
    {
        _id: 11,
        marca: 'Renault',
        modelo: 'Sandero',
        ano: 2017,
        placa: 'YZA9012',
        cor: 'Cinza',
        quilometragem: 89_000,
        proprietario: 'Patricia Gomes'
    },
    {
        _id: 12,
        marca: 'Fiat',
        modelo: 'Argo',
        ano: 2022,
        placa: 'BCD0123',
        cor: 'Vermelho',
        quilometragem: 27_000,
        proprietario: 'Rafael Nunes'
    },
    {
        _id: 13,
        marca: 'Chevrolet',
        modelo: 'Cruze',
        ano: 2016,
        placa: 'EFG1234',
        cor: 'Branco',
        quilometragem: 99_000,
        proprietario: 'Camila Rocha'
    },
    {
        _id: 14,
        marca: 'Volkswagen',
        modelo: 'Fox',
        ano: 2011,
        placa: 'HIJ2345',
        cor: 'Prata',
        quilometragem: 142_000,
        proprietario: 'Gustavo Barros'
    },
    {
        _id: 15,
        marca: 'Toyota',
        modelo: 'Etios',
        ano: 2018,
        placa: 'KLM3456',
        cor: 'Branco',
        quilometragem: 73_000,
        proprietario: 'Aline Ribeiro'
    }
]);

// 2.2 Insere os dados sobre os serviços realizados
db.servicos.insertMany([
    {
        tipo: 'Troca de oleo',
        descricao: 'Troca de oleo do motor e filtro',
        valor: 180.00,
        concluido: true,
        dataServico: new Date('2026-04-20'),
        veiculoId: 1
    },
    {
        tipo: 'Revisao de freios',
        descricao: 'Verificacao e troca das pastilhas de freio',
        valor: 320.00,
        concluido: false,
        dataServico: new Date('2026-04-25'),
        veiculoId: 1
    },
    {
        tipo: 'Alinhamento',
        descricao: 'Alinhamento e balanceamento das rodas',
        valor: 250.00,
        concluido: true,
        dataServico: new Date('2026-04-26'),
        veiculoId: 2
    },
    {
        tipo: 'Troca de bateria',
        descricao: 'Substituicao da bateria automotiva',
        valor: 420.00,
        concluido: true,
        dataServico: new Date('2026-04-27'),
        veiculoId: 3
    },
    {
        tipo: 'Troca de pneus',
        descricao: 'Substituicao de dois pneus dianteiros',
        valor: 980.00,
        concluido: false,
        dataServico: new Date('2026-04-28'),
        veiculoId: 4
    },
    {
        tipo: 'Balanceamento',
        descricao: 'Balanceamento das quatro rodas',
        valor: 120.00,
        concluido: true,
        dataServico: new Date('2026-04-29'),
        veiculoId: 5
    },
    {
        tipo: 'Troca de filtro de ar',
        descricao: 'Substituicao do filtro de ar do motor',
        valor: 95.00,
        concluido: true,
        dataServico: new Date('2026-04-30'),
        veiculoId: 6
    },
    {
        tipo: 'Revisao eletrica',
        descricao: 'Verificacao do sistema eletrico e fusiveis',
        valor: 210.00,
        concluido: false,
        dataServico: new Date('2026-05-01'),
        veiculoId: 7
    },
    {
        tipo: 'Troca de amortecedores',
        descricao: 'Substituicao dos amortecedores traseiros',
        valor: 760.00,
        concluido: true,
        dataServico: new Date('2026-05-02'),
        veiculoId: 8
    },
    {
        tipo: 'Higienizacao do ar-condicionado',
        descricao: 'Limpeza completa do sistema de climatizacao',
        valor: 160.00,
        concluido: true,
        dataServico: new Date('2026-05-03'),
        veiculoId: 9
    },
    {
        tipo: 'Troca de correia dentada',
        descricao: 'Substituicao da correia dentada e tensor',
        valor: 890.00,
        concluido: false,
        dataServico: new Date('2026-05-04'),
        veiculoId: 10
    },
    {
        tipo: 'Troca de velas',
        descricao: 'Substituicao das velas de ignicao',
        valor: 240.00,
        concluido: true,
        dataServico: new Date('2026-05-05'),
        veiculoId: 11
    },
    {
        tipo: 'Cambagem',
        descricao: 'Ajuste de cambagem das rodas dianteiras',
        valor: 140.00,
        concluido: true,
        dataServico: new Date('2026-05-06'),
        veiculoId: 12
    },
    {
        tipo: 'Troca de oleo da direcao',
        descricao: 'Substituicao do fluido da direcao hidraulica',
        valor: 175.00,
        concluido: false,
        dataServico: new Date('2026-05-07'),
        veiculoId: 13
    },
    {
        tipo: 'Reparo no escapamento',
        descricao: 'Solda e ajuste no sistema de escapamento',
        valor: 330.00,
        concluido: true,
        dataServico: new Date('2026-05-08'),
        veiculoId: 14
    },
    {
        tipo: 'Troca de pastilhas',
        descricao: 'Substituicao das pastilhas de freio dianteiras',
        valor: 290.00,
        concluido: true,
        dataServico: new Date('2026-05-09'),
        veiculoId: 15
    },
    {
        tipo: 'Revisao geral',
        descricao: 'Inspecao completa dos itens principais do veiculo',
        valor: 550.00,
        concluido: false,
        dataServico: new Date('2026-05-10'),
        veiculoId: 4
    }
]);

// --------------------------------------------------
// 3. CONSULTAS COM OPERADORES DE COMPARAÇÃO
// --------------------------------------------------

print("==================================================")
print("BANCO DE DADOS: oficinaMecanica")
print("COLEÇÕES: veiculos, servicos")
print("==================================================")

// 3.1 $gte - (Este comando é responsavel por buscar todos os veiculos que possuem um ano de fabricação maior ou igual a 2016)
print("--- 3.1 $gte - (Este comando é responsavel por buscar todos os veiculos que possuem um ano de fabricação maior ou igual a 2016) ---");
printjson(db.veiculos.find({ ano: { $gte: 2016 } }).toArray());

// 3.2 $lt - (Este comando é responsavel por buscar todos os servicos cujo valor seja menor que 100 reais)
print("--- 3.2 $lt - (Este comando é responsavel por buscar todos os servicos cujo valor seja menor que 100 reais) ---");
printjson(db.servicos.find({ valor: { $lt: 100.00 } }).toArray());

// 3.3 $gt - (Este comando é responsavel por buscar todos os veiculos que possuem um id superior a 4)
print("--- 3.3 $gt - (Este comando é responsavel por buscar todos os veiculos que possuem um id superior a 4) ---");
printjson(db.veiculos.find({ _id: { $gt: 4 } }).toArray());

// 3.4 $lte - (Este comando é responsavel por buscar todos os veiculos cujo quilometragem é menor ou igual a 100mil)
print("--- 3.4 $lte - (Este comando é responsavel por buscar todos os veiculos cujo quilometragem é menor ou igual a 100mil) ---");
printjson(db.veiculos.find({ quilometragem: { $lte: 100_000 } }).toArray());

// 3.5 $in - (Este comando lista os servicos cujo o id foi selecionado e depois busca quais são os respectivos veiculos daquele serviço)
print("--- 3.5 $in - (Este comando é responsavel por listar os servicos cujo o id foi selecionado e depois busca quais são os respectivos veiculos daquele serviço) ---");
printjson(db.servicos.aggregate([
    {
        $match: {
            veiculoId: { $in: [5, 3, 8] }
        }
    },
    {
        $lookup: {
            from: "veiculos",
            localField: "veiculoId",
            foreignField: "_id",
            as: "veiculos"
        }
    },
]).toArray());

// 3.6 $ne - (Este comando filtra somente os servicos que ainda não foram finalizados e mostra o veiculo referente)
print("--- 3.6 $ne - (Este comando é responsavel por filtrar somente os servicos que ainda não foram finalizados e mostrar o veiculo referente) ---");
printjson(db.servicos.aggregate([
    {
        $match: {
            concluido: { $ne: true }
        },
    },
    {
        $lookup: {
            from: "veiculos",
            localField: "veiculoId",
            foreignField: "_id",
            as: "veiculos"
        }
    },
]).toArray());

// --------------------------------------------------
// 4. CONSULTAS COM OPERADORES LÓGICOS
// --------------------------------------------------

// 4.1 $and (implicito) - (Busca por serviços concluídos com valor maior ou igual a 200.00)
print("--- 4.1 $and (implicito) - (Busca por serviços concluídos com valor maior ou igual a 200.00) ---");
printjson(db.servicos.find({ concluido: true, valor: { $gte: 200.00 } }).toArray());

// 4.2 $and (explicito) - (Busca por serviços aonde foi concluido ou não e que sejam do tipo troca de velas ou revisão geral)
print("--- 4.2 $and (explicito) - (Busca por serviços aonde foi concluido ou não e que sejam do tipo troca de velas ou revisão geral) ---");
printjson(db.servicos.find({
    $and: [{ $or: [{ concluido: true }, { concluido: false }] },
    { $or: [{ tipo: 'Troca de velas' }, { tipo: 'Revisao geral' }] }]
}).toArray());

// 4.3 $or - (Busca por serviços do tipo troca de oleo ou revisão de freios)
print("--- 4.3 $or - (Busca por serviços do tipo troca de oleo ou revisão de freios) ---");
printjson(db.servicos.find({
    $or: [{ tipo: 'Troca de oleo' }, { tipo: 'Revisao de freios' }]
}).toArray());

// 4.4 $nor - (Busca por veículos que não sejam da cor preta ou branca)
print("--- 4.4 $nor - (Busca por veículos que não sejam da cor preta ou branca) ---");
printjson(db.veiculos.find({
    $nor: [{ cor: 'Preto' }, { cor: 'Branco' }]
}).toArray());

// 4.5 $not - (Busca por veículos que não sejam do ano de fabricação 2010 ou inferior)
print("--- 4.5 $not - (Busca por veículos que não sejam do ano de fabricação 2010 ou inferior) ---");
printjson(db.veiculos.find({
    ano: { $not: { $lte: 2010 } }
}).toArray());

// 4.6 $and + $or - (Busca por veículos da marca Volkswagen que sejam da cor preta ou branca)
print("--- 4.6 $and + $or - (Busca por veículos da marca Volkswagen que sejam da cor prata ou azul) ---");
printjson(db.veiculos.find({
    $and: [{ marca: "Volkswagen" }, {}]
}).toArray());

// 4.7 Combinacoes - (Busca por serviços não concluídos com valor maior ou igual a 300.00 e data de serviço dentro de um data antiga ou mais atual)
print("--- 4.7 Combinacoes - (Busca por serviços não concluídos com valor maior ou igual a 300.00 e data de serviço dentro de um data antiga ou mais atual) ---");
printjson(db.servicos.find({
    concluido: false, valor: { $gte: 300.00 },
    $or: [
        { dataServico: { $lte: new Date("2026-04-30") } },
        { dataServico: { $gte: new Date("2026-05-05") } }
    ]
}).toArray());

// 4.8 $and - (Busca por serviços do tipo troca de oleo que foram concluídos e mostra o veículo relacionado)
print("--- 4.8 $and - (Busca por serviços do tipo troca de oleo que foram concluídos e mostra o veículo relacionado) ---");
printjson(db.servicos.aggregate([
    {
        $match: {
            $and: [{
                tipo: 'Troca de oleo', concluido: true
            }]
        }
    },
    {
        $lookup: {
            from: "veiculos",
            localField: "veiculoId",
            foreignField: "_id",
            as: "veiculos"
        }
    },
]).toArray());

// 4.9 $or - (Busca por veículos da cor azul ou preta e mostra os serviços relacionados a esses veículos)
print("--- 4.9 $or - (Busca por veículos da cor azul ou preto e mostra os serviços relacionados a esses veículos) ---");
printjson(db.veiculos.aggregate([
    {
        $match: {
            $or: [{ cor: 'Preto' }, { cor: 'Azul' }]
        }
    },
    {
        $lookup: {
            from: "servicos",
            localField: "_id",
            foreignField: "veiculoId",
            as: "historico_servicos"
        }
    },
]).toArray());