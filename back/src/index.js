const http = require('http');
const PORT = 3001;
const characters = require ("./utils/data.js");   

//ejercicio 3 webserver
http.createServer(function(req,res){
    //acceso a cualquiera y hacwer peticiones a nuestro back
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url.includes("/rickandmorty/character")){
        // se busca la posicion del id que es la 3 porque 0 es /, 1 es rickandmorty y 2 es character
        const id = req.url.split("/").pop();
        console.log("el numero es:" + id)
        const character = characters.filter(char=>char.id === Number(id));

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(character[0]));
    }
}).listen(PORT,"localhost")