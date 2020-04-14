const path = require('path');

exports.getGroupRoom = (req, res) => {
    res.sendFile(path.join(__dirname + '/../../public/html/groupRoom.html'));
}

exports.getBotRoom = (req, res) => {
    res.sendFile(path.join(__dirname + '/../../public/html/botRoom.html'));
}