const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name: String,
    surname: String,
    nickname: String,
    age: Number,
    cpf: String,
    adress: String,
    neighborhood: String,
    city: String,
    cellphone: String,
    email: String
});

module.exports = mongoose.model('Donor', schema)