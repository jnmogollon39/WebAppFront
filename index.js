const http = require('http');
const hostname = '127.0.0.1';
const port = process.env.port || 3000;

const server = http.createServer((req, res) => {
    res.StatusCode = 200;
    const msg = 'Hola mundo\n';
    res.end(msg);
});

server.listen(port, hostname, () => {
    console.log('Servidor escuchando en http://${hostname}:${port}/');
})