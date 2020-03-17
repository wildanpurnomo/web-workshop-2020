const express = require('express');
const app = express();
const pesertaRouter = require('./components/pesertaKKN/pesertaRouter.js');

// use bodyparser middleware 
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// assign pesertaRouter to '/api'
app.use('/api', pesertaRouter);

// listen to port
app.listen(8000, () => {
    console.log("Listening to port 8000");
});

