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

api.get('/codebreaker/secret/:number',function (req, res) {
    let response = {
        "message": "",
        "err": 1
    };
    let validation = validator.validarCadena(req.body.number);
    if(req.body.number === undefined){
        console.log("1")
        response.message = "El require debe de tener el siguiente formato {number: [number]}";
        return res.status(204).send(response);
    }
    if(validation != true){
        console.log("2")
        response.message = validation;
        return res.status(204).send(response);
    }
    if(instanceCodeBreaker === undefined){
        instanceCodeBreaker = new CodeBreaker(req.body.number);
    }else{
        instanceCodeBreaker.setSecret(req.body.number);
    }
    console.log("3")
    return res.status(200).send({ resultado });
});


module.exports=api;