// ejercicio 2 express
const axios = require('axios');


const URL = "`https://rym2.up.railway.app/api/character/${id}?key=jarp1994`";

function getCharById(req,res){
    const {id} = req.params;
    axios.get(URL + id).then(
        (response)=> {
            const character={
                id: response.data.id,
                name: response.data.name,
                status: response.data.status,
                image: response.data.image,
                species: response.data.species,
                gender: response.data.gender,
                origin: response.data.origin.name
            };
                res.status(200).json(character);
        }, (error)=> res.status(500).json(error.message)
    );
}



module.exports= getCharById;










// //ejercicio hw promises

// const getCharById = (res,id)=> {
//     return axios
//         .get(`https://rym2.up.railway.app/api/character/${id}?key=jarp1994`)
//         .then((response) => response.data)
//         .then(data=>{
//             const character = {
//                 id: data.id,
//                 name: data.name,
//                 status: data.status,
//                 species: data.species,
//                 origin: data.origin.name,
//                 image: data.image,
//                 gender: data.gender
//             }
//             res
//             .writeHead(200, {
//                 "content-type": 'application/json'
//             })
//             .end(JSON.stringify(character))
//             .catch((error) => {
//                 res.writeHead(500, {
//                     "content-type": 'text/plain'
//                 })
//                 .end(`Character with id ${id} not found`);
//             })
//         })
// }

// module.exports= getCharById;