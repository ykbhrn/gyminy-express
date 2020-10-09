const mongoose = require('mongoose')

const subChatSchema = new mongoose.Schema({
  text: { type: String, required: true },
  receiverId: { type: String, required: true },
  receiverName: { type: String, required: false },
  senderId: { type: String, required: true },
  senderName: { type: String, required: false }
}, {
  timestamps: true
})

const chatSchema = new mongoose.Schema({
  receiverId: { type: String, required: true },
  receiverName: { type: String, required: true },
  receiverProfileImage: { type: String, required: true },
  senderId: { type: String, required: true },
  senderName: { type: String, required: true },
  senderProfileImage: { type: String, required: true },
  chatId: { type: String, required: false },
  subChat: [ subChatSchema ]
}, {
  timestamps: true
})

module.exports = ( mongoose.model('Chat', chatSchema))

