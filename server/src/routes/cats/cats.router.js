const express = require('express')
const catsRouter = express.Router();
const {getCats} = require('./cats.controller')

catsRouter.get('/', getCats)


module.exports = catsRouter 