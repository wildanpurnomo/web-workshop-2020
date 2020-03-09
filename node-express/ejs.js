const express = require('express');
const app = express();

// set view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render("home");
});

// we can pass data as second parameter to our view
app.get("/student", (req, res) => {
    res.render("student", { id: 1, data: { nama: "wildan", nim: 46530 } });
});

app.listen(process.env.PORT || 8000, () => {
    console.log("Listening to 8000");
});