const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Welcome to Node.js Server");
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});