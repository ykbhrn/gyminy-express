const Image = require('../models/image')
const Video = require('../models/video')
const User = require('../models/user')

async function like(req, res) {
  try {
    const user = req.currentUser
    const image = await Image.findById(req.body.imageId)
    const ownerUser = await User.findById(image.user._id)

    let likes = image.likes
    let notificationsArray = ownerUser.notifications
    let likeStatus = false
    const likeCheck = likes.filter(like => like.userId === user._id.toString())

    if (likeCheck.length > 0) {
      likes = likes.filter(like => like.userId !== user._id.toString())
      notificationsArray = ownerUser.notifications.filter( notification => notification.portfolioId !== image._id.toString())
    } else {
      likeStatus = true
      const userDetails = { userId: user._id, username: user.name, profileImage: user.profileImage }
      const notificationDetails = { userId: user._id, username: user.name, profileImage: user.profileImage, 
        notificationType: 'like', portfolioId: image._id, url: `/images/${image._id}`, portfolioType: 'image' }
      likes.push(userDetails)
      ownerUser.notifications.push(notificationDetails)
      ownerUser.newNotification = true
    }
    image.likes = likes 
    ownerUser.notifications = notificationsArray
    const updatedImage = await image.save()
    const updatedUser = await ownerUser.save()

    const data = { likeStatus: likeStatus, likeCount: updatedImage.likes.length, imageData: updatedImage, updatedUser: updatedUser }
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json(err)
  }
}

async function videoLike(req, res) {
  try {
    const user = req.currentUser
    const video = await Video.findById(req.body.videoId)
    const ownerUser = await User.findById(video.user._id)

    let likes = video.likes
    let likeStatus = false
    const likeCheck = likes.filter(like => like.userId === user._id.toString())

    if (likeCheck.length > 0) {
      likes = likes.filter(like => like.userId !== user._id.toString())
    } else {
      likeStatus = true
      const userDetails = { userId: user._id, username: user.name, profileImage: user.profileImage }
      const notificationDetails = { userId: user._id, username: user.name, profileImage: user.profileImage, 
        notificationType: 'like', portfolioId: video._id, url: `/videos/${video._id}`, portfolioType: 'video' }
      likes.push(userDetails)
      ownerUser.notifications.push(notificationDetails)
      ownerUser.newNotification = true
    }
    video.likes = likes 
    const updatedVideo = await video.save()
    const updatedUser = await ownerUser.save()

    const data = { likeStatus: likeStatus, likeCount: updatedVideo.likes.length, videoData: updatedVideo, updatedUser: updatedUser }
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json(err)
  }
}

module.exports = {
  like,
  videoLike
}