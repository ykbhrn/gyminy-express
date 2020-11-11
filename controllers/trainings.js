const Training = require('../models/training')
const User = require('../models/user')
async function trainingIndex(req, res) {
  try {
    const trainings = await Training.find()
    res.status(200).json(trainings)
  } catch (err) {
    res.json(err)
  }
}

async function trainingCreate(req, res) {
  try {
    req.body.user = req.currentUser
    req.body.userStuff = req.currentUser._id
    const createTraining = await Training.create(req.body)
    res.status(201).json(createTraining)
  } catch (err) {
    res.status(422).json(err)
  }
}

async function trainingShow(req, res) {
  const trainingId = req.params.id
  try {
    const training = await Training.findById(trainingId)
    if (!training) throw new Error('notFound')
    const user = await (User.findById(training.user)).populate('userTrainings')
    training.user = user
    res.status(200).json(training)
  } catch (err) {
    console.log(err)
  }
}

async function trainingBooking(req, res) {
  const trainingId = req.params.id
  try {
    const bookedUser = await User.findById(req.currentUser._id)
    const training = await Training.findById(trainingId)
    training.bookings += 1
    req.body.userId = bookedUser._id
    req.body.name = bookedUser.name
    req.body.profileImage = bookedUser.profileImage
    training.students.push(req.body) 

    bookedUser.studentTrainings.push(training)
    if (training.bookings >= training.limit) {
      training.isFull = true
    }
    await bookedUser.save()
    await training.save()
    res.status(202).json(training)
  } catch (err) {
    console.log(err)
  }
}

async function trainingDelete(req, res) {
  const trainingId = req.params.id
  try {
    const trainingToDelete = await Training.findById(trainingId)
    if (!trainingToDelete) throw new Error('notFound')
    if (!trainingToDelete.user._id.equals(req.currentUser._id)) throw new Error('Not Found')
    await trainingToDelete.remove()
    res.sendStatus(204)
  } catch (err) {
    res.status(422).json(err)
  }
}



module.exports = {
  index: trainingIndex,
  create: trainingCreate,
  show: trainingShow,
  booking: trainingBooking,
  delete: trainingDelete
}