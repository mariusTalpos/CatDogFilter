const express = require('express')
const dogsRouter = express.Router()
const getDogs = require('./dogs.controller')

dogsRouter.get('/', getDogs)

module.exports = dogsRouter