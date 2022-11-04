const validate = require('validate.js');

const Utils = require('../utils/utils');
const Constants = require('../utils/constants');
const carroRepository = require('../port/carro_repository');
const Constraints = require('../utils/Carro_validation');
const Validation = require('../utils/validation');

const carro = {
    async create(data) {
        try {
            const validation = Validation.create(data);
            if (validation) {
                return validation;
            }

            data.modelo = data.modelo.toLowerCase();
            data.id = Utils.generateUuid();

            const response = await carroRepository.create(data);

            if (response.code === 11000) {
                const result = Constants.ErrorDuplicate;
                return result;
            }
            return response;
        } catch (error) {
            return error;
        }
    },

    async update(data) {
        try {
            const validation = validate.validate(data, Constraints.update);
            if (validation) {
                const response = Constants.ErrorValidation;
                response.message = validation;
                return response;
            }

            data.modelo = data.modelo.toLowerCase();
            const response = await carroRepository.update(data);

            if (response === []) {
                const result = Constants.ErrorNotFound;
                return result;
            }
            return response;
        } catch (error) {
            return error;
        }
    },

    async delete(data) {
        try {
            const validation = validate.validate(data, Constraints.deleteBy);
            if (validation) {
                const response = Constants.ErrorValidation;
                response.message = validation;
                return response;
            }
            data.nome = data.nome.toLowerCase();
            const response = await carroRepository.delete(data);

            return response;
        } catch (error) {
            return error;
        }
    },

    async listByNome(data) {
        try {
            const validation = validate.validate(data, Constraints.get);
            if (validation) {
                const response = Constants.ErrorValidation;
                response.message = validation;
                return response;
            }
            data.modelo = data.modelo.toLowerCase();
            const response = await carroRepository.getByNome(data);

            return response;
        } catch (error) {
            return error;
        }
    },

    async list() {
        try {
            const response = await carroRepository.list();

            return response;
        } catch (error) {
            return error;
        }
    },
};
module.exports = carro;