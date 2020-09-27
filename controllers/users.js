const User = require('../models/user')

async function userProfile(req, res, next) {
  try {
    const user = await User.findById(req.currentUser._id).populate('userVideos').populate('userImages').populate('userArticles').populate('userTrainings')
    if (!user) throw new Error({ message: 'Not Found' })
    res.status(200).json(user)
  } catch (err) {
    next(err)
  }
}

async function publicProfile(req, res, next) {
  const userId = req.params.id
  try {
    const user = await User.findById(userId).populate('userVideos').populate('userImages').populate('userArticles').populate('userTrainings')
    if (!user) throw new Error({ message: 'Not found' })
    res.status(200).json(user)
  } catch (err) {
    next(err)
  }
}

module.exports = {
  profile: userProfile,
  publicProfile
}
