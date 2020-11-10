const Video = require('../models/video')
const User = require('../models/user')

async function videosIndex(req, res) {
  try {
    const videos = await Video.find()
    res.status(200).json(videos)
  } catch (err) {
    res.json(err)
  }
}

async function videoCreate(req, res) {
  try {
    req.body.user = req.currentUser
    req.body.userStuff = req.currentUser._id
    const createVideo = await Video.create(req.body)
    res.status(201).json(createVideo)
  } catch (err) {
    res.status(422).json(err)
  }
}

async function videoShow(req, res) {
  const videoId = req.params.id 
  try {
    const video = await Video.findById(videoId)
    if (!video) throw new Error('notFound')
    const user = await User.findById(video.user)
    video.user = user
    res.status(200).json(video)
  } catch (err) {
    res.status(422).json(err)
  }
}

async function videoUpdate(req, res) {
  const videoId = req.params.id
  try {
    const video = await video.findByIdAndUpdate(videoId)
    if (!video) throw new Error('Not Found')
    if (!video.user.equals(req.currentUser._id)) throw new Error('Not Found')
    Object.assign(video, req.body)
    await video.save()
    res.status(202).json(video)
  } catch (err) {
    res.status(422).json(err)
  }
}

async function videoDelete(req, res) {
  const videoId = req.params.id
  try {
    const videoToDelete = await Video.findById(videoId)
    if (!videoToDelete) throw new Error('Not Found')
    if (!videoToDelete.user._id.equals(req.currentUser._id)) throw new Error('Not Found')
    await videoToDelete.remove()
    res.sendStatus(204)
  } catch (err) {
    res.status(422).json(err)
  }
}

async function commentCreate(req, res, next) {
  console.log('comment created')
  try {
    req.body.user = req.currentUser
    const videoId = req.params.id
    const video = await Video.findById(videoId)
    if (!video) throw new Error('notFound')
    video.comments.push(req.body)
    console.log(video)
    console.log(req.body)
    await video.save()
    res.status(201).json(video)
  } catch (err) {
    next(err)
  }
}

async function commentDelete(req, res) {
  try {
    const user = req.currentUser._id
    const videoId = req.params.id
    const commentId = req.params.commentid

    const video = await Video.findById(videoId)
    if (!video) throw new Error({ message: 'notFound' })

    const commentToRemove = video.comments.id(commentId)
    if (!commentToRemove) throw new Error({ message: 'notFound' })

    if (user.toString() !== commentToRemove.user.toString()) throw new Error({ message: 'notFound' })

    await commentToRemove.remove()
    await video.save()

    res.sendStatus(204)
  } catch (err) {
    res.json(err.data)
  }
}

module.exports = {
  index: videosIndex,
  create: videoCreate,
  show: videoShow,
  update: videoUpdate,
  delete: videoDelete,
  commentCreate: commentCreate,
  commentDelete: commentDelete
}