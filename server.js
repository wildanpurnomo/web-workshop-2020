const express = require('express');
const app = express();
const path = require('path');
const homeRouter = require('./components/home/homeRouter');
const aboutRouter = require('./components/about/aboutRouter');
const contactRouter = require('./components/contact/contactRouter');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/public/views'));

app.use(express.static('public'));
app.use(homeRouter);
app.use(aboutRouter);
app.use(contactRouter);

app.listen(8000, () => {
    console.log("listening to port 8000");
});
