const Constants = require('../src/utils/Constants');
const Validation = require('../src/utils/Validation');

it('Caso valido create', () => {
    const result = Validation.create({
        "modelo": "Gol",
        "ano": "2015",
        "marca": "Volkswagen"
    });
    expect(result).toEqual(undefined);
});

it('Caso valido get all', () => {
    const result = Validation.getAll();
    expect(result).toEqual(undefined);
});

it('Caso valido update', () => {
    const result = Validation.update({
        "modelo": "gol"
    });
    expect(result).toEqual(Constants.ErrorValidation.name);
});

it('Caso Invalido - sem o parametro modelo', () => {
    const result = Validation.create({
        ano: "1999",
        marca: "volkswagen"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

it('Caso Invalido - item nao encontrado', () => {
    const result = Validation.listByName({
        modelo: "nome invalido"
    });
    expect(result).toEqual(Constants.ErrorNotFound.name);
});

it('Caso Invalido - valor numerico ao inves de string', () => {
    const result = Validation.update({
        modelo: 123
    });
    expect(result).toEqual(Constants.ErrorValidation.name);
});