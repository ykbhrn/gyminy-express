import React from 'react'
import { getPublicPortfolio, getPortfolio, bookTraining, postChat, getSingleImage, getSingleVideo, follow } from '../../lib/api'
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
    followData: null,
    displayNewFollowData: false,
    user: null,
    currentUser: null,
    showChat: false,
    showTrainings: false,
    showImages: true,
    showArticles: false,
    showVideos: false,
    isStudent: false,
    isAthlete: false,
    redirect: false,
    trainingOwnerId: '',
    trainingOwnerUsername: '',
    showBigPortfolio: false,
    displayPhotoUrl: '',
    displayTitle: '',
    displayUsername: '',
    displayUserId: '',
    displayProfileUrl: '',
    displayDescription: '',
    displayName: '',
    displayDate: '',
    displayTime: '',
    displaySports: '',
    displayBookings: '',
    displayLimit: '',
    displayId: '',
    displayComments: [],
    displayPortfolioId: '',
    alreadyFollowed: false,
    showUnfollow: false
  }

  async componentDidMount() {
    try {
      const userId = this.props.match.params.id
      const res = await getPublicPortfolio(userId)
      const resTwo = await getPortfolio()
      console.log(res.data)
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
    console.log('change event: ', event.target.name)
    const formData = { ...this.state.formData, [event.target.name]: event.target.value }
    this.setState({ formData })
  }

  handleSubmit = async event => {
    event.preventDefault()
    try {
      const userId = this.props.match.params.id
      const response = await postChat(this.state.formData, userId)
      console.log(response.data)  
    } catch (err) {
      console.log('response: ', err.response.data)
    }
    this.setState({ showChat: false })
  }

  handleFollow = async () => {
    try {
      const id = this.props.match.params.id
      const res = await follow(id)
      this.setState({ followData: res.data, displayNewFollowData: true, 
        alreadyFollowed: this.state.alreadyFollowed ? false : true, showUnfollow: false })
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

  handleBigPortfolio = async (id) => {
    let portfolio
    try {
      if (this.state.showImages) {
        portfolio = await getSingleImage(id)
      } else if (this.state.showVideos) {
        portfolio = await getSingleVideo(id)
      }
      this.setState({ showBigPortfolio: true, displayPhotoUrl: portfolio.data.url, displayUserId: portfolio.data.user._id,
        displayUsername: portfolio.data.user.name, displayProfileUrl: portfolio.data.user.profileImage,
        displayDescription: portfolio.data.description, displayComments: portfolio.data.comments, displayPortfolioId: id, displayLikes: portfolio.data.likes.length
      })
    } catch (err) {
      console.log(err)
    }  
  }

  handleBigTrainingPortfolio = (name, date, time, sports, description, bookings, username, userId, limit, profileUrl, id) => {
    this.setState({ showBigPortfolio: true, displayName: name, displayDate: date, displayTime: time, displaySports: sports,
      displayDescription: description, displayBookings: bookings, displayUsername: username, displayUserId: userId,
      displayLimit: limit, displayProfileUrl: profileUrl, displayId: id })
  }

  hideBig = () => {
    this.setState({ showBigPortfolio: false })
  }

  handleBooking = async (id) => {
    try {
      const res = await bookTraining(id)
      this.setState({ redirect: true })
      console.log(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={`/done/booking/${this.state.user.id}/${this.state.user.username}`} />
    }
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

 

  handleBookingForm = (limit, bookings) => {
    let capacity

    if (bookings === 0){
      if (limit === 1) {
        return <>
          <div>Capacity Limit: <span className="card-header-title"> Individual Training </span></div>
        </>
      } else if (this.state.isStudent){
        return <>
          <div>Capacity Limit: <span className="card-header-title">{limit} Students </span></div>
          <div>Booked: <span className="card-header-title">{bookings} Students</span></div>
        </>
      } else {
        return <>
          <div>Capacity Limit: <span className="card-header-title">{limit} Students </span></div>
        </>
      } 
    } else if (bookings >= limit) {
      if (limit === 1) {
        return <>
          <div>Capacity Limit: <span className="card-header-title"> Individual Training </span></div>
          <div>
              Training Is Fully Booked
          </div>
        </>
      } else {
        return <>
          <div>Capacity Limit: <span className="card-header-title">{limit} Students </span></div>
          <div>
            Training Is Fully Booked
          </div>
        </>
      }
    } else {
      if (limit === 1) {
        return <>
          <div>Capacity Limit: <span className="card-header-title"> Individual Training </span></div>
        </>
      } else {
        return <>
          <div>Capacity Limit: <span className="card-header-title">{limit} Students </span></div>
          <div>Booked: <span className="card-header-title">{bookings} Students</span></div>
        </>
      }
    }
  }

  render() {
    if (!this.state.user) return null
    console.log(this.state.currentUser)
    return (
      <section className="public-profile-container">
        {this.renderRedirect()}
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
              <span onClick={this.handleShowingFollowers} className="followers-title"></span>Followers
            ({this.state.displayNewFollowData ? this.state.followData.followers.length : this.state.user.followers.length})
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
                       <Trainings
                         key={training._id}
                         id={training._id}
                         name={training.name}
                         date={training.date}
                         time={training.time}
                         username={training.user.name}
                         userId={training.user._id}
                         sports={training.sports.map(sport => (`${sport.name}  `))}
                         description={training.description}
                         limit={training.limit}
                         bookingForm={this.handleBookingForm}
                         bookings={training.bookings}
                         profileUrl={training.user.profileImage}
                         handleBigPortfolio={this.handleBigTrainingPortfolio}
                         showBigPortfolio={this.state.showBigPortfolio}
                         hideBig={this.hideBig}
                         displayName={this.state.displayName}
                         displayDate={this.state.displayDate}
                         displayTime={this.state.displayTime}
                         displaySports={this.state.displaySports}
                         displayDescription={this.state.displayDescription}
                         displayBookings={this.state.displayBookings}
                         displayUsername={this.state.displayUsername}
                         displayUserId={this.state.displayUserId}
                         displayLimit={this.state.displayLimit}
                         displayProfileUrl={this.state.displayProfileUrl}
                         handleBooking={this.handleBooking}
                         bookTimeSlot={true}
                         displayId={this.state.displayId}
                         trainingPage={false}
                       />
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
                    id={image._id}
                    url={image.url}
                    handleBigPortfolio={this.handleBigPortfolio}
                    showBigPortfolio={this.state.showBigPortfolio}
                    displayPhotoUrl={this.state.displayPhotoUrl}
                    hideBig={this.hideBig}
                    displayLikes={this.state.displayLikes}
                    displayTitle={this.state.displayTitle}
                    displayUserId={this.state.displayUserId}
                    displayUsername={this.state.displayUsername}
                    displayProfileUrl={this.state.displayProfileUrl}
                    displayDescription={this.state.displayDescription}
                    displayPortfolioId={this.state.displayPortfolioId}
                    displayComments={this.state.displayComments.slice(0).reverse().map( comment => (
                      <div className='single-comment' key={comment._id}> 
                        <div className="profile-header-comment">        
                          <Link to={`/profile/${comment.user._id}`}>
                            <img className='profile-image-comment' src={comment.user.profileImage}/></Link>
                          <Link to={`/profile/${comment.user._id}`}>{comment.user.name}</Link>
                        </div> {comment.text}
                      </div>
                    ))}
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
                    id={video._id}
                    url={video.url}
                    handleBigPortfolio={this.handleBigPortfolio}
                    showBigPortfolio={this.state.showBigPortfolio}
                    displayPhotoUrl={this.state.displayPhotoUrl}
                    hideBig={this.hideBig}
                    displayLikes={this.state.displayLikes}
                    displayTitle={this.state.displayTitle}
                    displayUserId={this.state.displayUserId}
                    displayUsername={this.state.displayUsername}
                    displayProfileUrl={this.state.displayProfileUrl}
                    displayDescription={this.state.displayDescription}
                    displayPortfolioId={this.state.displayPortfolioId}
                    displayComments={this.state.displayComments.slice(0).reverse().map( comment => (
                      <div className='single-comment' key={comment._id}> 
                        <div className="profile-header-comment">        
                          <Link to={`/profile/${comment.user._id}`}>
                            <img className='profile-image-comment' src={comment.user.profileImage}/></Link>
                          <Link to={`/profile/${comment.user._id}`}>{comment.user.name}</Link>
                        </div> {comment.text}
                      </div>
                    ))}
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