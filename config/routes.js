const router = require('express').Router()
const user = require('../controllers/users')
const auth = require('../controllers/auth')
const images = require('../controllers/images') 
const videos = require('../controllers/videos')
const articles = require('../controllers/articles')
const like = require('../controllers/likes')
const training = require('../controllers/trainings')
const chat = require('../controllers/chats')
const follow = require('../controllers/follows')
const notification = require('../controllers/notifications')
const secureRoute = require('../lib/secureRoute')

router.route('/users')
  .get(user.index)
  
router.route('/profile')
  .get(secureRoute, user.profile)

router.route('/profile/:id')
  .get(user.publicProfile)

router.route('/register')
  .post(auth.register)

router.route('/login')
  .post(auth.login)

router.route('/images')
  .get(images.index)
  .post(secureRoute, images.create)

router.route('/images/:id')
  .get(images.show)
  .put(secureRoute, images.update)
  .delete(secureRoute, images.delete)

router.route('/videos')
  .get(videos.index)
  .post(secureRoute, videos.create)

router.route('/videos/:id')
  .get(videos.show)
  .put(secureRoute, videos.update)
  .delete(secureRoute, videos.delete)

router.route('/articles')
  .get(articles.index)
  .post(secureRoute, articles.create)

router.route('/articles/:id')
  .get(articles.show)
  .put(secureRoute, articles.update)
  .delete(secureRoute, articles.delete)

router.route('/likes')
  .post(secureRoute, like.like)

router.route('/videolikes')
  .post(secureRoute, like.videoLike)

router.route('/images/:id/comments')
  .post(secureRoute, images.commentCreate)

router.route('/images/:id/comments/:commentid')
  .delete(secureRoute, images.commentDelete)

router.route('/videos/:id/comments')
  .post(secureRoute, videos.commentCreate)

router.route('/videos/:id/comments/:commentid')
  .delete(secureRoute, videos.commentDelete)

router.route('/articles/:id/comments')
  .post(secureRoute, articles.commentCreate)

router.route('/articles/:id/comments/:commentid')
  .delete(secureRoute, articles.commentDelete)

router.route('/trainings')
  .get(training.index)
  .post(secureRoute, training.create)

router.route('/trainings/:id')
  .get(secureRoute, training.show)
  .put(secureRoute, training.booking)
  .delete(secureRoute, training.delete)

router.route('/chats/:receiverid')
  .post(secureRoute, chat.sendChat)

router.route('/chats')
  .get(secureRoute, chat.index)

router.route('/chats/:id')
  .get(secureRoute, chat.show)

router.route('/follow/:id')
  .post(secureRoute, follow.follow)

router.route('/notifications')
  .post(secureRoute, notification.notificationFalse)

module.exports = router