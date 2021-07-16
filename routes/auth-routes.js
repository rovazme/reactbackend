'use strict'

//Cargamos Express
var express = require ('express');

//importamos el controlador que contiene todas las funciones, desde el article-controller
var AuthController = require('../controllers/auth-controllers');

//importamos las rutas con express
var router = express.Router();


//Rutas de prueba
router.post('/signup', AuthController.signup);
router.post('/login', AuthController.login);
router.post('/signout', AuthController.signout);




module.exports = router;