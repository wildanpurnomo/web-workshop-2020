// using Array (Demo)
var data = [
    {
        name: 'wildan',
        faculty: 'mipa',
        location: 'burjo mm'
    },
    {
        name: 'not wildan',
        faculty: 'not mipa',
        location: 'not burjo mm'
    }
]

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render('admin', { kknData: data });
    });

    app.post('/add', (req, res) => {
        console.log(req);
        data.push(req.body);
        res.send(data);
    });

    app.delete('/delete/:name', (req, res) => {
        data = data.filter((student) => {
            return student.name.replace(/ /g, '-') !== req.params.name;
        });

        res.send(data);
    });
}

// using MongoDB Database
// const Peserta = require('../models/peserta');
// module.exports = (app) => {
//     app.get('/', (req, res, next) => {
//         Peserta
//         .find({})
//         .then((peserta) => {
//             console.log(peserta);
//             res.render('admin', {kknData: peserta});
//         })
//         .catch(next);
//     });

//     app.post('/add', (req, res, next) => {
//         Peserta
//         .create(req.body)
//         .then((peserta) => {
//             res.send(peserta);
//         })
//         .catch(next)
//     });

//     app.delete('/delete/:name', (req, res, next) => {
//         console.log("params" + req.params.name);
//         Peserta
//         .findOneAndRemove({
//             name: req.params.name
//         })
//         .then((peserta) => {
//             res.send(peserta);
//         })
//         .catch(next)
//     });
// }