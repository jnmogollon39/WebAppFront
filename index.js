const http = require('http');
const hostname = '0.0.0.0';
const port = process.env.port || 8080

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    const msg = 'Hola mundo\n';
    res.end(msg);
});

server.listen(port, hostname, () => {
    console.log('Servidor escuchando en http://${hostname}:${port}/');
})