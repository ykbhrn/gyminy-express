const User = require('../models/user')
const Chat = require('../models/chat')

async function sendChat(req, res) {
  try {
    const senderId = req.currentUser._id
    const sender = await User.findById(senderId)
    const receiverId = req.params.receiverid
    const receiver = await User.findById(receiverId)
    const chats = await Chat.find()
    let chatCounter = 0
    chats.map( chat => {
      if ( (chat.senderId == senderId && chat.receiverId == receiverId) || (chat.senderId == receiverId && chat.receiverId == senderId) ) {
        chatCounter++
      }
    })
    if ( chatCounter === 0 ) {
      req.body.senderId = senderId
      req.body.receiverId = receiverId
      req.body.receiverName = receiver.name
      req.body.senderName = sender.name
      const createChat = await Chat.create(req.body)
      res.status(201).json(createChat)
    } else {
      const chat = await Chat.findById(req.body.chatId)
      req.body.senderName = sender.name
      req.body.senderId = senderId
      req.body.receiverName = receiver.name
      req.body.receiverId = receiverId
      chat.subChat.push(req.body)
      await chat.save()
      res.status(201).json(chat)
    }
  } catch (err) {
    console.log(err)
    
  }
}

module.exports = {
  sendChat
}