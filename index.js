'use strict'


//Correr mongo db : sudo mongod --dbpath=/Users/roger/data/db
//consola : mongo

//Import the mongoose module
var app = require ('./app');
var port = 3300;




app.listen(port, ()=> {
    console.log('Servidor corriendo en http://localhost:'+ port);
});

// mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log("Mongodb connected now");
//         //crear servidor y escuchar peticiones HTTP
//         app.listen(port, ()=> {
//             console.log('Servidor corriendo en http://localhost:'+ port);
//         });
//     }).catch(err => console.log(err));
