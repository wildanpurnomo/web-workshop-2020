const express = require('express');
const app = express();
const router = require('./components/chatroom/router');
const socketHandler = require('./components/socket/socketHandler');

app.use(router);
app.use(express.static('public'));

const server = app.listen(8000, () => {
    console.log("Listening to 8000");
});

socketHandler(server);
