const Peserta = require('./pesertaModel.js');

// function getAll
exports.get = (req, res, next) => {

}

// function post/send
exports.post = (req, res, next) => {
    Peserta
        .create(req.body)
        .then( (peserta) => {
            res.send(peserta);
        } )
}

// function put/update
exports.put = (req, res, next) => {
    
}

// function delete
exports.delete = (req, res, next) => {
    
}
