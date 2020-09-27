const Image = require('../models/image')

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

module.exports = {
  like
}