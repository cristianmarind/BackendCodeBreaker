'use strict' // convencio de EMC6
const express = require('express');
var CodeBreaker = require('./codebreaker');
const validator = require('./validator');
//controlador
const api=express.Router();
var instanceCodeBreaker = undefined;

api.post('/codebreaker/try',function (req, res) {
    let response = {
        "message": "",
        "err": 1
    };
    let validation = validator.validarCadena(req.body.number);
    if(req.body.number === undefined){
        response.message = "El require debe de tener el siguiente formato {number: [number]}";
        return res.send({ response });
    }
    if(validation != true){
        response.message = validation;
        return res.send({ response });
    }
    if(instanceCodeBreaker === undefined){
        response.message = "debe de poner un numero secreto"
        return res.send({ response });
    }
    response.err = 0;
    response.message = instanceCodeBreaker.compare(req.body.number);
    res.send({ response });
});

api.post('/codebreaker/secret',function (req, res) {
    let response = {
        "message": "",
        "err": 1
    };
    let validation = validator.validarCadena(req.body.number);
    if(req.body.number === undefined){
        response.message = "El require debe de tener el siguiente formato {number: [number]}";
        return res.send({ response });
    }
    if(validation != true){
        response.message = validation;
        return res.send({ response });
    }
    if(instanceCodeBreaker === undefined){
        instanceCodeBreaker = new CodeBreaker(req.body.number);
    }else{
        instanceCodeBreaker.setSecret(req.body.number);
    }
    response.err = 0;
    response.message = "Se creó con exito la calve";
    return res.send({ response });
});


module.exports=api;