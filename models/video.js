const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  user: { type: Object, required: true }
}, {
  timestamps: true
})

const videoSchema = new mongoose.Schema({
  url: { type: String, required: true },
  description: { type: String },
  comments: [ commentSchema ],
  likes: [{ userId: String, username: String }, { required: false }],
  user: { type: Object, required: true },
  userStuff: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

module.exports = ( mongoose.model('Video', videoSchema ))