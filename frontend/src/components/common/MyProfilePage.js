import React from 'react'
import { getPortfolio, getSingleImage, getSingleVideo } from '../../lib/api'
import { isAuthenticated, logout } from '../../lib/auth'
import { Link } from 'react-router-dom'
import Trainings from './Trainings'
import Images from './Images'
import Videos from './Videos'
import Articles from '../portfolio/Articles'

class ProfilePage extends React.Component {

  state = {
    user: null,
    timeMessage: '',
    showTrainings: false,
    showImages: false,
    showArticles: false,
    showVideos: false,
    showChoices: true,
    bookedTraining: false,
    isStudent: false,
    isAthlete: false,
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
    displayComments: [],
    displayPortfolioId: ''
  }

  async componentDidMount() {
    try {
      const res = await getPortfolio()
      this.timeOfDay()
      if (res.data.userType === 1) {
        this.setState({ user: res.data, isStudent: true })
      } else if (res.data.userType === 2) {
        this.setState({ user: res.data, isAthlete: true })
      }
      console.log(res.data)
    } catch (err) {
      console.log(err)
    }
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

  handleBigTrainingPortfolio = (name, date, time, sports, description, bookings, username, userId, limit, profileUrl) => {
    this.setState({ showBigPortfolio: true, displayName: name, displayDate: date, displayTime: time, displaySports: sports,
      displayDescription: description, displayBookings: bookings, displayUsername: username, displayUserId: userId,
      displayLimit: limit, displayProfileUrl: profileUrl })
  }

  hideBig = () => {
    this.setState({ showBigPortfolio: false })
  }


  timeOfDay = () => {
    const date = new Date()
    const hour = date.getHours()
    let message = ''
    console.log('hour: ', hour)
    if (hour < 12) {
      message = 'Good Morning'
    } else if (hour >= 12 && hour < 17) {
      message = 'Good Afternoon'
    } else {
      message = 'Good Evening'
    }
    this.setState({ timeMessage: message })
  }

  clickShow = (type) => {
    this.setState({ showChoices: false })
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
    } else if (booking === 0) {
      return false
    }
  }


  portfolioUrl = () => {
    let portfolioUrl
    if (this.state.showImages) {
      return portfolioUrl = '/add/images'
    } else if (this.state.showVideos) {
      return portfolioUrl = '/add/videos'
    } else if (this.state.showArticles) {
      return portfolioUrl = '/newarticle'
    }
  }

  handleLogout = () => {
    logout()
    return  window.location.assign('/')
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
    console.log(this.state.user)
    

    return (
      <section className="section m-scene">

        {this.state.showImages &&
        <Link to={this.portfolioUrl}>
          <img className='add-portfolio' src='https://res.cloudinary.com/djq7pruxd/image/upload/v1592484109/addimage_nqxehf.png' />
        </Link>
        }
        {this.state.showVideos &&
        <Link to={this.portfolioUrl}>
          <img className='add-portfolio' src='https://res.cloudinary.com/djq7pruxd/image/upload/v1592484109/addvideo_oufawy.png' />
        </Link>
        }
        {this.state.showArticles &&
        <Link to={this.portfolioUrl}>
          <img className='add-portfolio' src='https://res.cloudinary.com/djq7pruxd/image/upload/v1592484109/addarticle_f8vkg3.png' />
        </Link>
        }

        {isAuthenticated() && <div onClick={this.handleLogout} className="logout">
          <img src='https://res.cloudinary.com/djq7pruxd/image/upload/v1592484110/logout_vfd7q8.png' />
        </div>}

        {this.state.showChoices &&
          <>
            <h1 className="title is-2 has-text-centered greeting">{`${this.state.timeMessage} ${this.state.user.name}`}</h1>
            <hr />
          </>
        }
        <div className="profile-choices-container">
          <div className={`${this.state.showChoices ? 'profile-choices' : 'small-profile-choices'}`}
            onClick={() => {
              this.clickShow('training')
            }}
          > 
            {this.state.showChoices && <img src='https://res.cloudinary.com/djq7pruxd/image/upload/v1592484110/nexttrainings_w7p1yq.png' />}
            <span className={`${this.state.showTrainings ? 'selected-menu-choice' : ''}`}>Next Trainings</span>
          </div>

          <div className={`${this.state.showChoices ? 'profile-choices' : 'small-profile-choices'}`}
            onClick={() => {
              this.clickShow('images')
            }}
          >
            {this.state.showChoices && <img src='https://res.cloudinary.com/djq7pruxd/image/upload/v1592484111/yourphotos_ob9jmp.png' /> }
            <span className={`${this.state.showImages ? 'selected-menu-choice' : ''}`}>Your Photos</span>
          </div>

          <div className={`${this.state.showChoices ? 'profile-choices' : 'small-profile-choices'}`}
            onClick={() => {
              this.clickShow('videos')
            }}
          > 
            {this.state.showChoices && <img src='https://res.cloudinary.com/djq7pruxd/image/upload/v1592484111/yourvideos_alvfgs.png' />}
            <span className={`${this.state.showVideos ? 'selected-menu-choice' : ''}`}>Your Videos</span>
          </div>

          {this.state.isAthlete &&
          <div className={`${this.state.showChoices ? 'profile-choices' : 'small-profile-choices'}`}
            onClick={() => {
              this.clickShow('articles')
            }}
          > 
            {this.state.showChoices && <img src='https://res.cloudinary.com/djq7pruxd/image/upload/v1592484111/yourarticles_lcufmi.png' /> }
            <span className={`${this.state.showArticles ? 'selected-menu-choice' : ''}`}>Your Articles</span>
          </div>
          }

        </div>
      
        <div className='portfolio-container'>
          {this.state.showTrainings &&
        <>
          <div className="profile-header">
           
            <img className='profile-image' src={this.state.user.profileImage} />
            
            <div className="title is-2">{this.state.user.name} <br /><span className="subtitle is-5">Booked Trainings</span></div>          </div>
          <hr />
          <div className="columns is-multiline scene_element scene_element--fadein">

            {this.state.isAthlete &&
            <>
              {this.state.user.userTrainings.map(training => (
                <>
                  {this.handleBookedTraining(training.bookings) &&
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
                    />
                  }
                </>
              ))}
            </>
            }

            {this.state.isStudent &&
            <>
              {this.state.user.studentTrainings.map(training => (
                <>
                  {this.handleBookedTraining(training.bookings) &&
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
                    />
                  }
                </>
              ))}
            </>
            }

          </div>
        </>
          }

          {this.state.showImages &&
          <>
            <div className="profile-header">
  
              <img className='profile-image' src={this.state.user.profileImage} />
              
              <div className="title is-2">{this.state.user.name} <br /><span className="subtitle is-5">Photos</span></div>            </div>
            <hr />
            <div className="columns is-multiline scene_element scene_element--fadein">
              {this.state.user.userImages.map(image => (
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
            <div className="profile-header">
             
              <img className='profile-image' src={this.state.user.profileImage} />
              
              <div className="title is-2">{this.state.user.name} <br /><span className="subtitle is-5">Videos</span></div>            </div>
            <hr />
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
        </div>

        {this.state.showArticles &&
          <>
            <div className="profile-header">
             
              <img className='profile-image' src={this.state.user.profileImage} />
              
              <div className="title is-2">{this.state.user.name} <br /><span className="subtitle is-5">Articles</span></div>
            </div>
            <div className="article-container">
              {this.state.user.userArticles.map( article => (
                <div key={article._id}>
                  <div className="card-article">

                    < Link to = {`/articles/${article._id}`}> 
                      <img className='image-article' src={article.imageUrl} alt={article.title} />
                    </Link >    
                    
                    <div className='article-text'>
                      < Link to = {`/articles/${article._id}`}> 
                        <div className="article-title">{article.title}</div>
                        <div className='article-border'></div>
                      </ Link>
                      <div className="subtitle-article">{article.text}</div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
            <hr />
          </>
        }

      </section>
    )
  }

}
export default ProfilePage