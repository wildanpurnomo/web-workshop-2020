const express = require('express');
const kknController = require('./controllers/kknController.js');
const app = express();
const mongoose = require('mongoose');

// setup DB : uncomment to use 
// mongoose.connect('mongodb://localhost/kkn');
// mongoose.Promise = global.Promise;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use((err, req, res, next) => {
    res.status(422).send({
        error: err.message
    });
});

kknController(app);

app.listen(process.env.PORT || 8000, () => {
    console.log("Listening to 8000");
});