const port = process.env.PORT || 8000
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/gyminy-db'

module.exports = { port, dbURI }