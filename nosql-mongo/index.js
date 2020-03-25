const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const pesertaRouter = require('./components/pesertaKKN/pesertaRouter.js');
const searchRouter = require('./components/searchWiki/searchRouter');

// connect to DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/myapi", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("Connected to DB");
    }
});

mongoose.Promise = global.Promise;

// use bodyparser middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use 'cors middleware' so request from XMLHTTPRequest can get processed
// cors : cross-origin resource sharing
// try to comment this line, then make a request to this API
// using either axios, jQuery, or simply javascript's XMLHttpRequest
app.use(cors());

// assign pesertaRouter to '/api'
app.use('/api', pesertaRouter);

// assign searchRouter to '/api'
app.use('/api', searchRouter);

// error handling middleware
app.use((err, req, res, next) => {
    res
        .status(422)
        .send({
            error: `Error: ${err.message}`
        })
})

// listen to port
app.listen(process.env.PORT || 8000, () => {
    console.log("Listening to port 8000");
});