// ejercicio 1 express

import router from './routes';// ejercicio 6 express

const express = require('express');
const server = express();
const PORT = 3001;

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});

//ejercicio 6 express
server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});

//middlewares
server.use(express.json());
server.use('/rickandmorty', router);





// const http = require('http');
// const PORT = 3001;   
// const getCharById = require('./controllers/getCharById.js');

// //ejercicio 2 promises
// http.createServer(function(req,res){
    
//     res.setHeader('Access-Control-Allow-Origin', '*');
    
//     if(req.url.includes("onsearch")){
//         const id = req.url.split("/").pop();
//         getCharById(res,id);
        
//     }
// }).listen(PORT,"localhost")



//ejercicio 3 webserver
// http.createServer(function(req,res){
//     //acceso a cualquiera y hacwer peticiones a nuestro back
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     if(req.url.includes("/rickandmorty/character")){
//         // se busca la posicion del id que es la 3 porque 0 es /, 1 es rickandmorty y 2 es character
//         const id = req.url.split("/").pop();
//         console.log("el numero es:" + id)
//         const character = characters.filter(char=>char.id === Number(id));

//         res.writeHead(200, {'Content-Type': 'application/json'});
//         res.end(JSON.stringify(character[0]));
//     }
// }).listen(PORT,"localhost")