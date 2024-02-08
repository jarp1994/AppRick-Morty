const axios = require('axios');

//ejercicio hw promises

const getCharById = (res,id)=> {
    return axios
        .get(`https://rym2.up.railway.app/api/character/${id}?key=jarp1994`)
        .then((response) => response.data)
        .then(data=>{
            const character = {
                id: data.id,
                name: data.name,
                status: data.status,
                species: data.species,
                origin: data.origin.name,
                image: data.image,
                gender: data.gender
            }
            res
            .writeHead(200, {
                "content-type": 'application/json'
            })
            .end(JSON.stringify(character))
            .catch((error) => {
                res
                .writeHead(500, {
                    "content-type": 'text/plain'
                })
                .end(`Character with id ${id} not found`);
            })
        })
}

module.exports= getCharById;