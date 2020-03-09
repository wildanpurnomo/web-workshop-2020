const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PesertaSchema = new Schema({
    name: String,
    faculty: String,
    location: String
});

const Peserta = mongoose.model('peserta', PesertaSchema);

module.exports = Peserta