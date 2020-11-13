const Image = require('../models/image')
const User = require('../models/user')

async function imagesIndex(req, res) {
  try {
    const images = await Image.find()
    res.status(200).json(images)
  } catch (err) {
    res.json(err)
  }
}

async function imageCreate(req, res) {
  try {
    req.body.user = req.currentUser
    req.body.userStuff = req.currentUser._id
    const createImage = await Image.create(req.body)
    res.status(201).json(createImage)
  } catch (err) {
    res.status(422).json(err)
  }
}

async function imageShow(req, res) {
  const imageId = req.params.id 
  try {
    const image = await Image.findById(imageId)
    if (!image) throw new Error('notFound')
    const user = await (User.findById(image.user)).populate('userVideos').populate('userImages').populate('userArticles')
    image.user = user
    res.status(200).json(image)
  } catch (err) {
    res.status(422).json(err)
  }
}

async function imageUpdate(req, res) {
  const imageId = req.params.id
  try {
    const image = await Image.findByIdAndUpdate(imageId)
    if (!image) throw new Error('Not Found')
    if (!image.user.equals(req.currentUser._id)) throw new Error('Not Found')
    Object.assign(image, req.body)
    await image.save()
    res.status(202).json(image)
  } catch (err) {
    res.status(422).json(err)
  }
}

async function imageDelete(req, res) {
  const imageId = req.params.id
  try {
    const imageToDelete = await Image.findById(imageId)
    if (!imageToDelete) throw new Error('Not Found')
    if (!imageToDelete.user._id.equals(req.currentUser._id)) throw new Error('Not Found')
    await imageToDelete.remove()
    res.sendStatus(204)
  } catch (err) {
    res.status(422).json(err)
  }
}

async function commentCreate(req, res, next) {
  try {
    req.body.user = req.currentUser
    const user = await User.findById(req.currentUser._id)
    const imageId = req.params.id
    const image = await Image.findById(imageId)
    const ownerUser = await User.findById(image.user._id)

    const notificationDetails = { userId: user._id, username: user.name, profileImage: user.profileImage, 
      notificationType: 'comment', portfolioId: image._id, url: `/images/${image._id}`, portfolioType: 'image' }

    if (!image) throw new Error('notFound')

    ownerUser.notifications.push(notificationDetails)
    ownerUser.newNotification = true
    image.comments.push(req.body)
    await ownerUser.save()
    await image.save()
    res.status(201).json(image)
  } catch (err) {
    next(err)
  }
}

async function commentDelete(req, res) {
  try {
    const user = req.currentUser._id
    const imageId = req.params.id
    const commentId = req.params.commentid

    const image = await Image.findById(imageId)
    if (!image) throw new Error({ message: 'notFound' })

    const commentToRemove = image.comments.id(commentId)
    if (!commentToRemove) throw new Error({ message: 'notFound' })

    if (user.toString() !== commentToRemove.user.toString()) throw new Error({ message: 'notFound' })

    await commentToRemove.remove()
    await image.save()

    res.sendStatus(204)
  } catch (err) {
    res.json(err.data)
  }
}



module.exports = {
  index: imagesIndex,
  create: imageCreate,
  show: imageShow,
  update: imageUpdate,
  delete: imageDelete,
  commentCreate: commentCreate, 
  commentDelete: commentDelete
}