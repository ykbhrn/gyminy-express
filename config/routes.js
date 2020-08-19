const router = require('express').Router()
const user = require('../controllers/users')
const auth = require('../controllers/auth')


router.route('/profile')
  .get(user.profile)

router.route('/register')
  .post(auth.register)

router.route('/login')
  .post(auth.login)

module.exports = router