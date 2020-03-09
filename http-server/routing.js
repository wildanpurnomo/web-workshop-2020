const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
    var pathName = url.parse(req.url).pathname
    if ((pathName === '/home' || pathName === '/')) {
        fs.readFile('./views/home.html', "utf8", (err, data) => {
            if (err) throw err;

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });

    } else if (pathName === '/about') {
        fs.readFile('./views/about.html', "utf8", (err, data) => {
            if (err) throw err;

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    } else if (req.url.match("/api")) {
        res.writeHead(200, { 'Content-Type': 'application/json' });        

        if (req.method === "GET") {
            // handle get method
        } else if (req.method === "POST") {
            // handle post method, etc.
        }

        res.end();
    } else {
        fs.readFile('./views/404.html', "utf8", (err, data) => {
            if (err) throw err;

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    }

});

server.listen(process.env.PORT || 8000, () => {
    console.log("Listening at 8000");
})