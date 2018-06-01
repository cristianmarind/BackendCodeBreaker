'use strict' // convencio de EMC6
const express = require('express');
const codebreaker = require('./codebreaker');
const validator = require('./validator');
//controlador
const api=express.Router();
const instanceCodeBreaker = undefined;

/*api.get('/codebreaker/:num',function (req, res) {
    let num = req.body.num;
    let resultado = instanceCodeBreaker.compare(num);
    res.status(200).send({ resultado });
});*/

api.get('/codebreaker/secret',function (req, res) {
    console.log(res.params);
    res.send("asd");
    let response = {
        "message": "",
        "err": 1
    }
    console.log(req);
    let validation = validator.validarCadena(req.body.number);
    if(req.body.number === undefined){
        response.message = "El require debe de tener el siguiente formato {number: [number]}";
        return res.status(204).send(response);
    }
    if(validation != true){
        response.message = validation;
        return res.status(204).send(response);
    }
    if(instanceCodeBreaker === undefined){
        instanceCodeBreaker = new CodeBreaker(req.body.number);
    }else{
        instanceCodeBreaker.setSecret(req.body.number);
    }
    response.err = 0;
    response.message = "Se creó con exito";
    return res.status(200).send({ response });
});


module.exports=api;