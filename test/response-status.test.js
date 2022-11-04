const Utils = require('../src/utils/Utils');
const Constants = require('../src/utils/Constants');

it('Status Code OK', () => {
    const result = Utils.responseStatus(undefined);
    expect(result).toEqual(200);
});

it('Status Code CONFLICT', () => {
    const result = Utils.responseStatus(Constants.ErrorDuplicate.name);
    expect(result).toEqual(409);
});

it('Status Code BAD REQUEST', () => {
    const result = Utils.responseStatus(Constants.ErrorValidation.name);
    expect(result).toEqual(400);
});

it('Status Code NOT FOUND', () => {
    const result = Utils.responseStatus(Constants.ErrorNotFound.name);
    expect(result).toEqual(404);
});