const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, maxlength: 50 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  bio: { type: String, required: false, maxlength: 300 },
  userType: { type: Number, required: true },
  sports: [],
  profileImage: { type: String, required: false },
  studentTrainings: [],
  userChats: [],
  followers: [],
  following: []
})

userSchema.virtual('userImages', {
  ref: 'Image',
  localField: '_id',
  foreignField: 'userStuff'
})

userSchema.virtual('userVideos', {
  ref: 'Video',
  localField: '_id',
  foreignField: 'userStuff'
}
)
userSchema.virtual('userArticles', {
  ref: 'Article',
  localField: '_id',
  foreignField: 'userStuff'
})

userSchema.virtual('userTrainings', {
  ref: 'Training',
  localField: '_id',
  foreignField: 'userStuff'
})

userSchema
  .set('toJSON', {
    virtuals: true, 
    transform(doc, json) {
      delete json.password
      return json
    }
  })

userSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

userSchema
  .virtual('passwordConfirmation')
  .set(function(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation
  })

userSchema
  .pre('validate', function(next) {
    if (this.isModified('password') && this._passwordConfirmation !== this.password) {
      this.invalidate('passwordConfirmation', 'does not match')
    }
    next()
  })

userSchema
  .pre('save', function(next) {
    if (this.isModified('password')) {
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8))
    }
    next()
  })

userSchema.plugin(require('mongoose-unique-validator'))

module.exports = mongoose.model('User', userSchema)

