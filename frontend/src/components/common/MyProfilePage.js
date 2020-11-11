import React from 'react'
import { getPortfolio } from '../../lib/api'
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
    isAthlete: false
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

  render() {
    if (!this.state.user) return null
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
                      singleTraining={training}
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
                      singleTraining={training}
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
                  user={this.state.user}
                  id={image._id}
                  url={image.url}
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
                  user={this.state.user}
                  id={video._id}
                  url={video.url}
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