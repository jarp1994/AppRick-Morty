//ejercicio 5 express

const router = require('express').Router();
const getCharById = require('../controllers/getCharById');
const login = require('../controllers/login');
// const {postFav, deleteFav} = require('../controllers/handlerFavorites');

router.get("/character/:id", getCharById);
router.get("/login", login);
// router.post("/fav", postFav);   
// router.delete("/fav/:id",deleteFav)


module.exports= router;