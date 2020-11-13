const User = require('../models/user')

async function follow(req, res) {
  try {
    const userId = req.currentUser._id
    const user = await User.findById(userId)
    const followedUserId = req.params.id
    const followedUser = await User.findById(followedUserId)

    let notificationsArray = followedUser.notifications

    req.body.userName = user.name
    req.body.userId = user._id
    req.body.userProfileImage = user.profileImage

    req.body.followedUserId = followedUserId
    req.body.followedUserName = followedUser.name
    req.body.followedUserProfileImage = followedUser.profileImage
    let followCounter = 0
    user.following.map( currentUser => {
      if (currentUser.followedUserId == followedUserId) {
        const ind = user.following.indexOf(currentUser)
        user.following.splice(ind, 1)
        followCounter++
      } 
    })
    followedUser.followers.map( currentUser => {
      if (currentUser.userName == user.name) {
        const ind = followedUser.followers.indexOf(currentUser)
        followedUser.followers.splice(ind, 1)
        followCounter++
      } 
    })
    
    if (followCounter === 0) {
      user.following.push(req.body)
      followedUser.followers.push(req.body)
      const notificationDetails = { userId: user._id, username: user.name, profileImage: user.profileImage, 
        notificationType: 'follow', portfolioId: user._id, url: `/profile/${user._id}`, portfolioType: 'user' }
      followedUser.notifications.push(notificationDetails)
      followedUser.newNotification = true
    } else {
      res.json(followedUser) 
    }

    notificationsArray = followedUser.notifications.filter( notification => notification.portfolioId !== user._id)
    followedUser.notifications = notificationsArray
    await user.save()
    await followedUser.save()   
    res.status(201).json(followedUser)
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  follow
}