const express = require('express');
const path = require('path');
const app = express();

// use static middleware
// now you can load all file in public folder
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/home.html"));
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/about.html"));
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/404.html"));
});

app.listen(process.env.PORT || 8000, () => {
    console.log("Listening to 8000");
});