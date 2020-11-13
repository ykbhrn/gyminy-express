// const Image = require('../models/image')
// const Video = require('../models/video')
const User = require('../models/user')

async function notificationFalse(req, res) {
  try {
    const user = await User.findById(req.currentUser._id)
    if (req.body.type === 'chat') {
      user.newChat = false
    } else if (req.body.type === 'notification') {
      user.newNotification = false
    }
    await user.save()
    res.status(200).json(user)
  } catch (err) {
    res.status(500).json(err)
  }
}


module.exports = {
  notificationFalse
}