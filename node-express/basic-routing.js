const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/about', (req, res) => {
    res.send('about');
});

app.get('/api', (req, res) => {
    res.send({type: "GET"});
});

app.post('/api', (req, res) => {
    res.send({type: "POST"});
});

app.listen(process.env.PORT || 8000, () => {
    console.log("Listening to 8000");
});