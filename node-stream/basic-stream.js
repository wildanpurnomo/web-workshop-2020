const fs = require('fs');

// readable stream
// the log "you've seen this" will show more than once
// indicating that the read process is not done in one-go.
var readableStream = fs.createReadStream(__dirname + "/readme.txt", "utf8");
readableStream.on('data', (chunk) => {
    console.log("you've seen this");
    console.log(chunk);
});

// writable stream
var writableStream = fs.createWriteStream(__dirname + '/writeme.txt', 'utf8');
readableStream.on('data', (chunk) => {
    writableStream.write(chunk);
});

// we can also write CSV file
var writableCSV = fs.createWriteStream(__dirname + '/writeme.csv', "utf8");
readableStream.on('data', (chunk) => {
    writableCSV.write(chunk);
});