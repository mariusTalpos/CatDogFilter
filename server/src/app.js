const express = require('express')
const cors = require('cors')
//import routes here
const dogsRouter = require('./routes/dogs.router')
// const catsRouter = require('./routes/cats.router')

const app = express()
app.use(express.json())
app.use(cors({origin: `*`}))
app.use('/dogs', dogsRouter)
// app.use('/cats',catsRouter)

module.exports = app