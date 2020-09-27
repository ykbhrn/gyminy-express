const mongoose = require('mongoose')

const trainingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  description: { type: String, required: false },
  bookings: { type: Number, default: 0 },
  limit: { type: Number, default: 1 },
  isFull: { type: Boolean, default: false },
  user: { type: Object, required: true },
  userStuff: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  students: [],
  sports: []
})

module.exports = ( mongoose.model('Training', trainingSchema ))