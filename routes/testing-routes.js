'use strict'

//Cargamos Express
var express = require ('express');

//importamos el controlador que contiene todas las funciones, desde el article-controller
var TestingControllers = require('../controllers/testing-controller');

//importamos las rutas con express
var router = express.Router();


//Rutas de prueba
router.get('/test', TestingControllers.test);




module.exports = router;