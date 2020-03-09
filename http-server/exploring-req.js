const http = require('http');
const url = require('url');
const path = require('path');

const server = http.createServer((req, res) => {
    // log request
    // warning: huge object
    console.log(req);

    // request url
    console.log(url.parse(req.url, true).pathname);

    // request query string
    console.log(url.parse(req.url, true));

    // request path
    console.log(path.parse(url.parse(req.url).pathname));

    // request method
    console.log(req.method);

    res.end();
});

server.listen(process.env.PORT || 8000, () => {
    console.log("listening to port 8000");
});