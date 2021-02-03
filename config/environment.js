const port = process.env.PORT || 8000
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/gyminy-express-db'

// 'mongodb+srv://jakub:61221698Kubo@cluster0.cxpcf.mongodb.net/gyminy-db?retryWrites=true&w=majority'

module.exports = { port, dbURI }