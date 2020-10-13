const User = require('../models/user')

async function follow(req, res) {
  try {
    const userId = req.currentUser._id
    const user = await User.findById(userId)
    const followingUserId = req.params.id
    const followingUser = await User.findById(followingUserId)

    req.body.userName = user.name
    req.body.userId = userId
    req.body.userProfileImage = user.profileImage

    req.body.followingUserId = followingUserId
    req.body.followingUserName = followingUser.name
    req.body.followingUserProfileImage = followingUser.profileImage
    let followCounter = 0
    user.following.map( followedUser => {
      if (followedUser.followingUserId == followingUserId) {
        const ind = user.following.indexOf(followedUser)
        user.following.splice(ind, 1)
        followCounter++
      } 
    })
    followingUser.followers.map( followedUser => {
      if (followedUser.followingUserId == followingUserId) {
        const ind = followingUser.followers.indexOf(followedUser)
        followingUser.followers.splice(ind, 1)
        followCounter++
      } 
    })
    
    if (followCounter === 0) {
      user.following.push(req.body)
      followingUser.followers.push(req.body)
      res.status(201).json(req.body)
    } else {
      res.json('User were unfollowed') 
    }

    await user.save()
    await followingUser.save()   
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  follow
}