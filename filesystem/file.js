const fs = require('fs');

// In case you don't know
// Asynchronous means that the code is not blocking the codes below.
// Synchronous means that the code is blocking the codes below, it has to be finished in order to continue
// Synchronous operation will take toll if the process is heavyweight.

// this is asynchronous read operation
// the log will appear before all data being read.
fs.readFile("readme.txt", "utf8", (err, data) => {
    if (err) throw err;

    console.log(data);
});
console.log("You are not waiting for this");

// this is synchronous read operation
// the log will appear after all data being read.
var text = fs.readFileSync("readme.txt", "utf8");
console.log("Ofcourse you are waiting for this");

// this is asynchronous write operation
fs.writeFile("writtenAsyncly.txt", "", (err) => {
    if (err) throw err;
});

// this is syncronous read operation
fs.writeFileSync("writtenSyncly.txt", text, {encoding: 'utf8'});
