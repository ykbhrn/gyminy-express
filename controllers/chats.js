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
    let singleChat 

    chats.map( chat => {
      if ( (chat.senderId == senderId && chat.receiverId == receiverId) || (chat.senderId == receiverId && chat.receiverId == senderId) ) {
        singleChat = chat
        chatCounter++
      }
    })
    if ( chatCounter === 0 ) {
      req.body.senderId = senderId
      req.body.receiverId = receiverId
      req.body.receiverName = receiver.name
      req.body.senderName = sender.name
      req.body.receiverProfileImage = receiver.profileImage
      req.body.senderProfileImage = sender.profileImage
      const createChat = await Chat.create(req.body)
      createChat.subChat.push(req.body)
      await createChat.save()
      sender.userChats.push(createChat)
      receiver.userChats.push(createChat)
      receiver.newChat = true
      await sender.save()
      await receiver.save()
      res.status(201).json(createChat)
    } else {
      req.body.senderName = sender.name
      req.body.senderId = senderId
      req.body.receiverName = receiver.name
      req.body.receiverId = receiverId
      req.body.chatId = singleChat._id
      const chat = await Chat.findById(req.body.chatId)
      chat.subChat.push(req.body)
      await chat.save()
      receiver.newChat = true
      await receiver.save()
      res.status(201).json(chat)
    }
  } catch (err) {
    console.log(err)
  }
}

async function chatIndex(req,res) {
  try {
    const chats = await Chat.find()
    res.status(200).json(chats)
  } catch (err) {
    console.log(err)
    
  }
}

async function showChat(req, res) {
  try {
    const chatId = req.params.id
    const chat = await Chat.findById(chatId)
    res.status(200).json(chat)
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  sendChat,
  index: chatIndex,
  show: showChat
}