const http = require("http");


const host = '2606:50c0:8003::153';
const port = 443;

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/html");
};

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(`<html><body><h1>This is HTML</h1></body></html>`);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
