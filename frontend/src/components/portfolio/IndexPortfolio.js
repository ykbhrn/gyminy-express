import React from 'react'
import { getAllImages, getAllVideos, getSingleImage, getSingleVideo, getPortfolio } from '../../lib/api'
import { Link } from 'react-router-dom'
import Images from '../common/Images'
import Videos from '../common/Videos'
import Articles from '../portfolio/Articles'

class IndexPortfolio extends React.Component {
  state = {
    user: null,
    images: [],
    videos: [],
    showImages: true,
    showVideos: false,
    showArticles: false,
    showBigPortfolio: false,
    displayPhotoUrl: '',
    displayTitle: '',
    displayUsername: '',
    displayLikes: '',
    displayUserId: '',
    displayProfileUrl: '',
    displayDescription: '',
    displayComments: [],
    displayPortfolioId: '',
    newComments: false
  }

  async componentDidMount() {
    try {
      const res = await getPortfolio()
      this.setState({ user: res.data })
      this.getImages()
    } catch (err) {
      console.log(err)
    }
  }

  async getImages() {
    try {
      const res = await getAllImages()
      const allImages = res.data
      const resTwo = await getAllVideos()
      const allVideos = resTwo.data
      const filteredImages = allImages.filter(image => {
        let followerCounter = 0
        this.state.user.following.map( user => {
          if (image.user._id == user.followedUserId) {
            followerCounter++
          }
        })  
        if (followerCounter > 0) {
          return image
        } 
      })

      const filteredVideos = allVideos.filter(video => {
        let followerCounter = 0
        this.state.user.following.map( user => {
          if (video.user._id == user.followedUserId) {
            followerCounter++
          }
        })  
        if (followerCounter > 0) {
          return video
        } 
      })
      
      console.log(filteredImages)
      this.setState({ images: filteredImages, videos: filteredVideos })
    } catch (err) {
      console.log(err)
    }
  }

  clickShow = (type) => {
    if (type === 'videos'){
      this.setState({ showVideos: true, showImages: false, showArticles: false })
    } else if (type === 'images'){
      this.setState({ showImages: true, showVideos: false, showArticles: false })
    } else if (type === 'articles'){
      this.setState({ showArticles: true, showVideos: false, showImages: false })
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

  hideBig = () => {
    this.setState({ showBigPortfolio: false })
  }

  render() {
    // if (!this.state.images) return null
    return (
      <>
        <section className="m-scene">

          {this.state.showImages &&
        <Link to={this.portfolioUrl}>
          <img className='add-portfolio' src='https://res.cloudinary.com/djq7pruxd/image/upload/v1592484109/addimage_nqxehf.png'></img>
        </Link>
          }
          {this.state.showVideos &&
        <Link to={this.portfolioUrl}>
          <img className='add-portfolio' src='https://res.cloudinary.com/djq7pruxd/image/upload/v1592484109/addvideo_oufawy.png'></img>
        </Link>
          }
          {this.state.showArticles &&
        <Link to={this.portfolioUrl}>
          <img className='add-portfolio' src='https://res.cloudinary.com/djq7pruxd/image/upload/v1592484109/addarticle_f8vkg3.png'></img>
        </Link>
          }

          <div className="profile-choices-container index">
            <span onClick={() => {
              this.clickShow('images')
            }} className={`small-profile-choices ${this.state.showImages ? 'selected-menu-choice' : ''}`}>Images</span>

            <span onClick={() => {
              this.clickShow('videos')
            }} className={`small-profile-choices ${this.state.showVideos ? 'selected-menu-choice' : ''}`}>Videos</span>
      
            <span onClick={() => {
              this.clickShow('articles')
            }} className={`small-profile-choices ${this.state.showArticles ? 'selected-menu-choice' : ''}`}>Articles</span>

          </div>

          <div className="portfolio-container">

            {this.state.showImages &&
              <div className="columns is-multiline scene_element scene_element--fadein">
                {this.state.images.slice(0).reverse().map(image => (
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
            }

            {this.state.showVideos &&
              <div className="columns is-multiline scene_element scene_element--fadein">
                {this.state.videos.slice(0).reverse().map(video => (
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
            }
              
          </div>
        </section>
        {this.state.showArticles &&
        <Articles />
        }
      </>
    )
  }

}
export default IndexPortfolio