'use strict';

// Cargar modulos de node para crear servidor
var express = require('express');
var bodyParser = require('body-parser');

// Ejecutar express (http)
var app = express();

// Cargar ficheros de rutas
var articleRoutes = require('./routes/article');

// Middlewares
app.use(bodyParser.urlencoded({ extends: false }));
app.use(bodyParser.json());

// Cors
// Configurar cabeceras y cors


// Añadir prefijos a rutas
app.use('/api', articleRoutes);

// Exportar modulos (fichero actual)
module.exports = app;
