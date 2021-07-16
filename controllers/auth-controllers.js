'use strict'
var validator = require('validator'); //modulo para validar todo tipo de datos
//var Article = require('../models/article-model'); //Modelo donde tenemos el esquema de articulos para Mongo
var path = require('path');

//Using Firebase
const firebase = require('firebase');
const firebaseConfig = require('../firebaseconfig');


firebase.initializeApp(firebaseConfig);


var controller = {

    signup: (req, res) => {

        var params = req.body;
        const email = params.email;
        const password = params.password;
        
        firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
            console.log('Creando cuenta..');
            
            return res.status(200).send({ status: 'success', message: 'todo bien, todo chido' })
        });
        
    },
    login: (req, res) =>{

        var params = req.body;
        const email = params.email;
        const password = params.password;
        firebase.auth().signInWithEmailAndPassword(email, password).then((data) =>{
            console.log(data.user.email);
            return res.status(200).send({ status: 'success', message: 'todo bien con el Login' })
        });
    },
    signout:(req, res) =>{
        console.log('Saliendo...');
        firebase.auth().signOut();
        return res.status(200).send({status:'exitoso',message:'Todo chido'})
    },









}; //End Controller


module.exports = controller;