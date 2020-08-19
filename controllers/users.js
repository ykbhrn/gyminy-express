const User = require('../models/user')

async function userProfile(req, res, next) {
  try {
    const user = await User.findById(req.currentUser._id)
    if (!user) throw new Error({ message: 'Not Found' })
    res.status(200).json(user)
  } catch (err) {
    next(err)
  }
}

module.exports = {
  profile: userProfile
}