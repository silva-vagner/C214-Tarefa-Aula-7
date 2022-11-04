const validate = require('validate.js');
const Constants = require('./Constants');
const Constraints = require('./Carro_validation');

const Validation = {
    create(data) {
        const validation = validate.validate(data, Constraints.create);
        if (validation) {
            const response = Constants.ErrorValidation;
            response.message = validation;
            return response;
        }
        return validation;
    },
    listByName(data) {
        const validation = validate.validate(data, Constraints.get);
        if (validation === undefined) {
            const response = Constants.ErrorNotFound.name;
            return response;
        }
        return validation;
    },
    update(data) {
        const validation = validate.validate(data, Constraints.update);
        if (validation) {
            const response = Constants.ErrorValidation.name;
            return response;
        }
        return validation;
    },
    getAll(data) {
        const validation = validate.validate(data, Constraints.getAll);
        if (validation) {
            const response = Constants.ErrorNotFound.name;
            return response;
        }
        return validation;
    }
};
module.exports = Validation;
