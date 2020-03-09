const fs = require('fs');

// create read stream
var readableStream = fs.createReadStream(__dirname + "/readme.txt", "utf8");

// write stream, better combined with read
var writableStream = fs.createWriteStream(__dirname + '/writeWithPipe.txt', 'utf8');


// using pipe, data from readable stream will automatically passed into writable stream
readableStream.pipe(writableStream);