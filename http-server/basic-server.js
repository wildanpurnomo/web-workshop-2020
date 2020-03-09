const http = require('http');

// initialize server
// req means request and res means response
// Here the server simply
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.write("My First Server", (err) => {
        if (err) throw err;
    });
    res.end();
});

// open localhost:8000, or using PORT from DOTENV file.
server.listen(process.env.PORT || 8000, () => {
    console.log("listening to port 8000");
});