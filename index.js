const https = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = https.createServer((req, res) => {
    res.StatusCode = 200;
    res.setHeader('Content-Type', 'test/plain');
    res.end('Hola mundo');
});

server.listen(port, hostname, () => {
    console.log('Servidor escuchando en https://${hostname}:${port}/');
})