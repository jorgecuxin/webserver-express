const http = require('http');

//Crear servidor
http.createServer((req, res) => {

        //regresar en un json
        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Jorge Cuxin',
            edad: 23,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        //res.write('Hola mundo');
        res.end();

    })
    .listen(8080);

console.log('Escuchando el puerto 8080');