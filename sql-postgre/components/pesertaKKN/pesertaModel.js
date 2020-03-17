const { Client } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const PesertaClient = new Client({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
});

PesertaClient.connect(err => {
    if (err) {
        console.error('Error', err.stack);
    } else {
        console.log("Connected to DB");
    }
});

// create DB if not exist yet
const createTableQuery = {
    name: 'create-table',
    text: 'CREATE TABLE IF NOT EXISTS peserta(id SERIAL, name VARCHAR(50), age INTEGER, gender BOOLEAN, faculty VARCHAR(50), location VARCHAR(50));'
};

PesertaClient
    .query(createTableQuery)
    .then((result) => {
        console.log("Successfully create table");
    })
    .catch((e) => {
        console.error(e.stack);
        res.send(e.stack);
    });

module.exports = PesertaClient;
