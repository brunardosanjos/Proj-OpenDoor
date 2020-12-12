const { request, response } = require("express")
const mongoose = require('mongoose')
const restaurante = require("../models/restaurantes")

const getAll = (request, response) => {
  restaurante.find()
      .then((restaurantes) => {
        response.status(200).json(restaurantes)
      })
      .catch(err => next(err));
}

const getById = (request, response) => {
  const {id} = request.params
      restaurante.findById(id)
          .then((restaurantes) =>{
            response.status(200).json(restaurantes)
          })
          .catch(err => {throw new Error(err)});
}


  const getCulinaria = (request, response) => {
    const {culinaria} = request.body

    restaurante.find(culinaria)
    .then((restaurantes) =>{
      response.status(200).json(restaurantes)
    })
    .catch(err => {next(err)});
}


  const createRestaurante = (Request, response) => {
    var { nome, culinaria, inclusivo, localizacao } = request.body

    const newRestaurante = newRestaurante({
      nome,
      culinaria,
      inclusivo,
      localizacao
    });
    newRestaurante.save()
       .then((res) => {
         response.status(200).json(resp)
       })
       
       .catch(err => {next(err)
  });
}

module.exports = {
  getAll,
  getById,
  getCulinaria,
  createRestaurante
}