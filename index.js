'use strict';
var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 5000;

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://selvin:1234@cluster0-shard-00-00-xve45.mongodb.net:27017,cluster0-shard-00-01-xve45.mongodb.net:27017,cluster0-shard-00-02-xve45.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('La conexion a la base de datos se ha realizado bien!');
    // Crear servidor y ponerme a escuchar periciones http
    app.listen(port, () => {
        console.log('Servidor corriendo en http://localhost:' + port);
    });
});