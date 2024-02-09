//ejercicio 4 express

let myFavorites = [];

//funcion auxiliar para respuesta exitosa
function sendFavorites(res){
    res.status(200).json(myFavorites);
}

function postFav(req,res){
    const {id, name, status, species, gender, origin, image} = req.body;
    myFavorites.push({id, name, status, species, gender, origin, image});
    res.status(200).json(myFavorites);
}

function deleteFav(req,res){
    const {id} = req.params;
    myFavorites = myFavorites.filter((character)=> character.id !== Number(id));
    res.status(200).json(myFavorites);
}

module.exports={postFav, deleteFav, sendFavorites}