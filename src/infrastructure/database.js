const mongoose = require('mongoose');

const uri = `mongodb+srv://admin:admin@cluster0.eo0p6zw.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const CarroSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },
    modelo: String,
    ano: String,
    marca: String
});

const CarroModel = mongoose.model('Carro', CarroSchema);

module.exports = {
    CarroModel,
};