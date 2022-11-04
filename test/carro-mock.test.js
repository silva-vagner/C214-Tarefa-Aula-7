const { CarroModel } = require('../src/infrastructure/database');
const carro = require('../src/port/carro_repository');

describe('create', () => {
    it('Valid carro', async () => {
        CarroModel.prototype.save = jest.fn().mockImplementation(() => ({
            toObject: () => ({
                "modelo": "Gol",
                "ano": "2015",
                "marca": "Volkswagen"
            }),
        }));

        expect(await carro.create({
            modelo: "Gol",
            ano: "2015",
            marca: "Volkswagen"
        })).toEqual(
            expect.objectContaining({
                modelo: expect.any(String),
                ano: expect.any(String),
                marca: expect.any(String),
            }),
        )
    });
});

describe('update', () => {
    it('Valid carro', async () => {
        CarroModel.prototype.save = jest.fn().mockImplementation(() => ({
            toObject: () => ({
                "modelo": "Gol",
                "ano": "2015",
                "marca": "Volkswagen"
            }),
        }));

        expect(await carro.update({
            modelo: "Gol",
            ano: "2015",
            marca: "Volkswagen"
        })).toEqual(
            expect.objectContaining({
                modelo: expect.any(String),
                ano: expect.any(String),
                marca: expect.any(String),
            }),
        )
    });
});

describe('list', () => {
    it('Valid carro', async () => {
        CarroModel.prototype.save = jest.fn().mockImplementation(() => ({
            exec: () => ({
                "modelo": "Gol",
                "ano": "2015",
                "marca": "Volkswagen"
            }),
        }));

        expect(await carro.list({
            modelo: "Gol",
            ano: "2015",
            marca: "Volkswagen"
        }))
    });
});

