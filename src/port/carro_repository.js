const { CarroModel } = require('../infrastructure/database');

const CarroRepository = {
    async create(data) {
        try {
            const model = new CarroModel(data);
            const response = await model.save();
            return response.toObject();
        } catch (e) {
            return e;
        }
    },

    async update(data) {
        try {
            const update = {
                modelo: data.modelo, ano: data.ano, marca: data.marca
            };
            const options = { new: true };
            const filter = { nome: data.modelo };
            const result = await CarroModel.findOneAndUpdate(filter, update, options).exec();
            if (result === null) return []
            return result.toObject();
        } catch (e) {
            return e;
        }
    },

    async list() {
        try {
            const result = await CarroModel.find().exec();
            return result;
        } catch (error) {
            return error;
        }
    },

    async getByNome(data) {
        try {
            const result = await CarroModel.findOne({ nome: data.nome }).exec();
            return result;
        } catch (e) {
            return e;
        }
    },

    async delete(data) {
        try {
            const result = await CarroModel.deleteOne({ nome: data.nome }).exec();
            return result.deletedCount;
        } catch (error) {
            return error;
        }
    },
};

module.exports = CarroRepository;