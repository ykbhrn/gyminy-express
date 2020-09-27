const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  user: { type: Object, required: true }
}, {
  timestamps: true
})

const articleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  imageUrl: { type: String, required: true },
  titleImageUrl: { type: String, required: false },
  text: { type: String, required: true },
  comments: [ commentSchema ],
  likes: [{ userId: String, username: String }, { required: false }],
  user: { type: Object, required: true },
  userStuff: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

module.exports = ( mongoose.model('Article', articleSchema ))