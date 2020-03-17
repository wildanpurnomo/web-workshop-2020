const express = require('express');
const app = express();
const mongoose = require('mongoose');
const pesertaRouter = require('./components/pesertaKKN/pesertaRouter.js');

// connect to DB
mongoose.connect("mongodb://localhost/myapi", { useNewUrlParser: true , useUnifiedTopology: true},(err) => {
    if (err) console.log(err);

    console.log("Connected to DB");
});

// use bodyparser middleware 
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// assign pesertaRouter to '/api'
app.use('/api', pesertaRouter);

// listen to port
app.listen(8000, () => {
    console.log("Listening to port 8000");
});