const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define schema
const PesertaSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        default: 0
    },
    gender: {
        type: Boolean
    },
    faculty: {
        type: String
    },
    location: {
        type: String
    }
});

// create model
const Peserta = mongoose.model('peserta', PesertaSchema);

// export model to be used in controller
module.exports = Peserta;