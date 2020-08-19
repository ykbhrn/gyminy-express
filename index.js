const express = require('express')
const router = require('./config/routes')
const mongoose = require('mongoose')
const app = express()

const { port, dbURI } = require('./config/environment')

mongoose.connect(dbURI)

app.use('/api', router)

app.listen(port, () => console.log(`Up and running on port ${port}`))