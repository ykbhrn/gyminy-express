require('dotenv').config()
const express = require('express')
const router = require('./config/routes')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const logger = require('./lib/logger')
const app = express()

const { port, dbURI } = require('./config/environment')

mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err) => {
    if (err) return console.log(err)
    console.log('Mongo is Connected')
  }
)

app.use(express.static(`${__dirname}/frontend/build`))

app.use(bodyParser.json())

app.use(logger)

app.use('/api', router)

app.use('/*', (req, res) => res.sendFile(`${__dirname}/frontend/build/index.html`))

app.listen(port, () => console.log(`Up and running on port ${port}`))