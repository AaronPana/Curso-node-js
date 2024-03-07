const http = require('http');
const hostName = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end('{"mensaje": "Hola mundo!!"}');
});

server.listen(port, hostName, () => {
    console.log(`Servidor Node.js en ejecucion en http://${hostName}:${port}/`);
});
