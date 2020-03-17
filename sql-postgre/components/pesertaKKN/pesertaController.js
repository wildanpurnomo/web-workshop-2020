const PesertaClient = require('./pesertaModel');

exports.getAll = (req, res) => {
    const getAllQuery = {
        name: 'select-all-peserta',
        text: 'SELECT * FROM peserta'
    }

    PesertaClient
        .query(getAllQuery)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((e) => {
            res.send(e.stack);
        })
}

exports.insert = (req, res) => {
    const insertQuery = {
        name: 'insert-peserta',
        text: 'INSERT INTO peserta(name, age, gender, faculty, location) VALUES($1, $2, $3, $4, $5) RETURNING id, name, age, gender, faculty, location',
        values: [req.body.name, req.body.age, req.body.gender, req.body.faculty, req.body.location]
    };

    PesertaClient
        .query(insertQuery)
        .then((result) => {
            res.send(result.rows[0]);
        })
        .catch((e) => {
            res.send(e.stack);
        });
}