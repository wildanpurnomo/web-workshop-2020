const fs = require('fs');

// In case you don't know
// Asynchronous means that the code is not blocking the codes below.
// Synchronous means that the code is blocking the codes below, it has to be finished in order to continue

// asynchronous make directory
fs.mkdir('./newdir', (err) => {
    if (err) return console.log(err);
});

// asynchronous remove directory
fs.rmdir('./newdir', (err) => {
    if (err) return console.log(err);
});

