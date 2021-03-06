import React from 'react'
import { getPublicPortfolio, getPortfolio, postChat, follow } from '../../lib/api'
import { Redirect , Link } from 'react-router-dom'
import Trainings from './Trainings'
import Images from './Images'
import Videos from './Videos'
import Articles from '../portfolio/Articles'

class PublicProfilePage extends React.Component {

  state = {
    formData: {
      text: ''
    },
    showFollowers: false,
    showFollowedAthletes: false,
    user: null,
    currentUser: null,
    showChat: false,
    showTrainings: false,
    showImages: true,
    showArticles: false,
    showVideos: false,
    isStudent: false,
    isAthlete: false,
    trainingOwnerId: '',
    trainingOwnerUsername: ''
  }

  async componentDidMount() {
    try {
      const userId = this.props.match.params.id
      const res = await getPublicPortfolio(userId)
      const resTwo = await getPortfolio()
      if (res.data.userType === 1) {
        this.setState({ user: res.data, isStudent: true, currentUser: resTwo.data })
      } else if (res.data.userType === 2) {
        this.setState({ user: res.data, isAthlete: true, currentUser: resTwo.data })
      }
      this.alreadyFollowed()
    } catch (err) {
      console.log(err)
    }
  }

  alreadyFollowed = async () => {
    try {
      console.log('hej')
      this.state.currentUser.following.map( user => {
        if (user.followedUserId == this.state.user._id) {
          this.setState({ alreadyFollowed: true })
        }
      })
    } catch (err) {
      console.log(err)
    }
  }

  handleShowingFollowers = () => {
    this.setState({ showFollowers: this.state.showFollowers ? false : true })
  }

  handleShowingFollowedAthletes = () => {
    this.setState({ showFollowedAthletes: this.state.showFollowedAthletes ? false : true })
  }

  handleChange = event => {
    const formData = { ...this.state.formData, [event.target.name]: event.target.value }
    this.setState({ formData })
  }

  handleSubmit = async event => {
    event.preventDefault()
    try {
      const userId = this.props.match.params.id
      const response = await postChat(this.state.formData, userId)
    } catch (err) {
      console.log('response: ', err.response.data)
    }
    this.setState({ showChat: false })
  }

  handleFollow = async () => {
    try {
      const id = this.props.match.params.id
      const res = await follow(id)
      const userId = this.props.match.params.id
      const resTwo = await getPublicPortfolio(userId)    
      this.setState({ user: resTwo.data, alreadyFollowed: this.state.alreadyFollowed ? false : true, showUnfollow: false })
    } catch (err) {
      console.log(err)
    }
  }

  handleUnfollow = () => {
    this.setState({ showUnfollow: this.state.showUnfollow ? false : true })
  }

  handleChat = () => {
    this.setState({ showChat: this.state.showChat === false ? true : false })
  }

  clickShow = (type) => {
    if (type === 'training') {
      this.setState({ showTrainings: true, showArticles: false, showImages: false, showVideos: false })
    } else if (type === 'images') {
      this.setState({ showImages: true, showTrainings: false, showVideos: false, showArticles: false })
    } else if (type === 'videos') {
      this.setState({ showVideos: true, showTrainings: false, showImages: false, showArticles: false })
    } else if (type === 'articles') {
      this.setState({ showArticles: true, showImages: false, showTrainings: false, showVideos: false })
    }
  }

  handleBookedTraining = (booking) => {
    if (booking > 0) {
      return true
    } else if (booking == 0) {
      return false
    }
  }

  availableTraining = (training) => {
    if (training.students.length > 0) {
      let studentCounter = 0
      training.students.map( student => {
        if (this.state.currentUser._id === student.userId) {
          studentCounter++
        }
      })
      if (studentCounter > 0) {
        console.log(studentCounter)
        return false
      } else {
        return true
      }
    } else {
      return true
    }
  }

  render() {
    if (!this.state.user) return null
    return (
      <section className="public-profile-container">
        <div className="profile-header-container">
          <div className="profile-header">

            <img className='profile-image' src={this.state.user.profileImage} />

            <div className="greeting-public"><span className='title is-2'>{this.state.user.name} 
              {this.state.isStudent &&
              <>
                <span onClick={this.handleShowingFollowedAthletes} className="followed-title">Followed Athletes
                ({this.state.user.following.length})
                </span>
                {this.state.showFollowedAthletes &&
                <div className='followers-container'>
                  <span className="follower-title">Athletes</span>
                  <span className='close-follow' onClick={this.handleShowingFollowedAthletes}> X </span>
                  <div className="followers-frame">
                    {this.state.user.following.map( followed => {
                      return <div key={followed.followedUserId} className="profile-follow">      
                        <a href={`/profile/${followed.followedUserId}`}>
                          <img className='profile-image-follow' src={followed.followedUserProfileImage}/></a>
                        <a href={`/profile/${followed.followedUserId}`}>{followed.followedUserName}</a>
                      </div>
                    })}
                  </div>
                </div>
                }
              </>
              }
              {this.state.isAthlete &&  
              <>
                {this.state.alreadyFollowed ? <span onClick={this.handleUnfollow} className="already-followed-title">Following</span>
                  : <span onClick={this.handleFollow} className="follow"> +Follow Athlete</span> }
                {this.state.showUnfollow && 
                  <div className="unfollow">Do you want Unfollow {this.state.user.name}?
                    <br/><span className="unfollow-option"> <span onClick={this.handleFollow} className="unfollow-yes">Yes</span> <span onClick={this.handleUnfollow}>No</span> </span>
                  </div>
                }
              </>
              }
            </span>
            <div className="user-type">{this.state.isStudent && 
            <>
              <img src='https://res.cloudinary.com/djq7pruxd/image/upload/v1592484110/student_rtpzhv.png' />
              Student |
            </>
            }
            {this.state.isAthlete &&
            <div className='followers-title' onClick={this.handleShowingFollowers}>
              <span onClick={this.handleShowingFollowers} className="followers-title"></span>Followers ({this.state.user.followers.length})
            </div>
            }
            
            {this.state.showFollowers &&
              <div className='followers-container'>
                <span className="follower-title">Followers</span>
                <span className='close-follow' onClick={this.handleShowingFollowers}> X </span>
                <div className="followers-frame">
                  {this.state.user.followers.map( follower => {
                    return <div key={follower.userId} className="profile-follow">      
                      <a href={`/profile/${follower.userId}`}>
                        <img className='profile-image-follow' src={follower.userProfileImage}/></a>
                      <a href={`/profile/${follower.userId}`}>{follower.userName}</a>
                    </div>
                  })}
                </div>
              </div>
            }

            <div className="message" ><img src="https://res.cloudinary.com/djq7pruxd/image/upload/v1592484110/message_ffjyj2.png" onClick={this.handleChat}/>
              {this.state.showChat && 
                    <div className="chat-profile-form">
                      <div className="profile-header-chat">              
                        <img className='profile-image-index' src={this.state.user.profileImage}/>
                        {this.state.user.name}  <span className='close-message' onClick={this.handleChat}> X </span>
                      </div>

                      <form onSubmit={(event) => {
                        this.handleSubmit(event,)
                      }}>
                        <input className="input" 
                          name='text'
                          onChange={this.handleChange}
                        />
                        <button className="comment-button">Send</button>
                      </form>
                     
                    </div>
              }
            </div>
            </div>
            </div>  
          </div>

          <div className="profile-choices-container">
            <span onClick={() => {
              this.clickShow('images')
            }} className={`small-profile-choices ${this.state.showImages ? 'selected-menu-choice' : ''}`}>Images</span>

            <span onClick={() => {
              this.clickShow('videos')
            }} className={`small-profile-choices ${this.state.showVideos ? 'selected-menu-choice' : ''}`}>Videos</span>


            {this.state.isAthlete &&
              <>
                <span onClick={() => {
                  this.clickShow('articles')
                }} className={`small-profile-choices ${this.state.showArticles ? 'selected-menu-choice' : ''}`}>Articles</span>


                <span onClick={() => {
                  this.clickShow('training')
                }} className={`small-profile-choices ${this.state.showTrainings ? 'selected-menu-choice' : ''}`}>Trainings</span>
              </>
            }
          </div>
        </div>

        <div className='portfolio-container'>
          {this.state.showTrainings &&
            <>
              <div className="columns is-multiline scene_element scene_element--fadein">

                {this.state.user.userTrainings.map(training => (
                  <>
                    {!training.isFull &&
                    <>
                      {this.availableTraining(training) &&
                    <>
                      <Trainings
                        key={training._id}
                        singleTraining={training}
                        bookTimeSlot={true}
                        trainingPage={false}
                      />
                    </>
                      }
                    </>
                    }
                  </>
                ))}
              </div>
            </>
          }

          {this.state.showImages &&
            <>
              <div className="columns is-multiline scene_element scene_element--fadein">
                {this.state.user.userImages.slice(0).reverse().map(image => (
                  <Images
                    key={image._id}
                    user={this.state.currentUser}
                    id={image._id}
                    url={image.url}
                  />
                ))}
              </div>
            </>
          }

          {this.state.showVideos &&
            <>
              <div className="columns is-multiline scene_element scene_element--fadein">

                {this.state.user.userVideos.slice(0).reverse().map(video => (
                  <Videos
                    key={video._id}
                    user={this.state.currentUser}
                    id={video._id}
                    url={video.url}
                  />
                ))}
              </div>
            </>
          }

          {this.state.showArticles &&
            <>
            </>
          }

        </div>

      </section>
    )
  }

}
export default PublicProfilePage