const Image = require('../models/image')
const Video = require('../models/video')

async function like(req, res) {
  try {
    const user = req.currentUser
    const image = await Image.findById(req.body.imageId)

    let likes = image.likes
    let likeStatus = false
    const likeCheck = likes.filter(like => like.userId === user._id.toString())

    if (likeCheck.length > 0) {
      likes = likes.filter(like => like.userId !== user._id.toString())
    } else {
      likeStatus = true
      const userDetails = { userId: user._id, username: user.name }
      likes.push(userDetails)
    }
    image.likes = likes 
    const updatedImage = await image.save()

    const data = { likeStatus: likeStatus, likeCount: updatedImage.likes.length, imageData: updatedImage }
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json(err)
  }
}

async function videoLike(req, res) {
  try {
    const user = req.currentUser
    const video = await Video.findById(req.body.videoId)

    let likes = video.likes
    let likeStatus = false
    const likeCheck = likes.filter(like => like.userId === user._id.toString())

    if (likeCheck.length > 0) {
      likes = likes.filter(like => like.userId !== user._id.toString())
    } else {
      likeStatus = true
      const userDetails = { userId: user._id, username: user.name }
      likes.push(userDetails)
    }
    video.likes = likes 
    const updatedVideo = await video.save()

    const data = { likeStatus: likeStatus, likeCount: updatedVideo.likes.length, videoData: updatedVideo }
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json(err)
  }
}

module.exports = {
  like,
  videoLike
}