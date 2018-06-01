var assert = require('chai').assert;
var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');

const api=require('./routes');

// Importamos el facilitador de peticiones 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api',api);// para que todas las rutas usen el prefijo api/


module.exports = app;