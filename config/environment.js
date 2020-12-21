const port = 8000
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/gyminy-express-db'

module.exports = { port, dbURI }