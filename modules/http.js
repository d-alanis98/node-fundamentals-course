const http = require('http');

const getResponse = () => 'OK';

const router = (req, res) => {
    switch(req.url) {
        case '/hello':
            let response = getResponse();
            res.write(response);
            break;
        default:
            res.writeHead(404);
            res.write('Not found');
    }
    res.end();
}

http.createServer(router).listen(3000);



console.log('Escuchando en el puerto 3000')

