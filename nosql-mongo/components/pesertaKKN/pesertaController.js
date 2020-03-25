const Peserta = require('./pesertaModel.js');

// function getAll
exports.get = (req, res, next) => {
    Peserta
        .find({})
        .then((listPeserta) => {
            res.send(listPeserta);
        })
        .catch(next(new Error("Error get all peserta")))
}

// function getByName (with regex a.k.a regular expression)
exports.getByName = (req, res, next) => {
    Peserta
        .find({name: { $regex: `.*${req.params.name}.*`, $options: 'i'}})
        .then((listPeserta) => {
            res.send(listPeserta)
        })
        .catch(next(new Error("Error get by name")))
}

// function post/send
exports.post = (req, res, next) => {
    Peserta
        .create(req.body)
        .then( (peserta) => {
            res.send(peserta);
        } )
        .catch(next(new Error("Error create peserta")))
}

// function put/update
exports.put = (req, res, next) => {
    Peserta
        .findOneAndUpdate({_id: req.params.id}, req.body)
        .then(() => {
            Peserta
                .findOne({_id: req.params.id})
                .then((updated) => {
                    res.send(updated);
                })
        })
        .catch(next(new Error("Error update peserta")))
}

// function delete
exports.delete = (req, res, next) => {
    Peserta
        .findOneAndDelete({_id: req.params.id})
        .then(() => {
            Peserta
                .find({})
                .then((updatedList) => {
                    res.send(updatedList);
                })
        })
        .catch(next(new Error("Error delete peserta")))
}