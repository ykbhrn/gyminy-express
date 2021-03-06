import React from 'react'
import { getAllImages, getAllVideos, getPortfolio } from '../../lib/api'
import { Link } from 'react-router-dom'
import Images from '../common/Images'
import Videos from '../common/Videos'
import Articles from '../portfolio/Articles'

class IndexPortfolio extends React.Component {
  state = {
    images: [],
    videos: [],
    user: null,
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
      const res = await getAllImages()
      const resTwo = await getAllVideos()
      const resThree = await getPortfolio()
      this.setState({ images: res.data, videos: resTwo.data, user: resThree.data })
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

  render() {
    // if (!this.state.images) return null
    console.log(this.state.images)
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
                    user={this.state.user}
                    id={image._id}
                    url={image.url}
                  />
                ))}
              </div>
            }

            {this.state.showVideos &&
              <div className="columns is-multiline scene_element scene_element--fadein">
                {this.state.videos.slice(0).reverse().map(video => (
                  <Videos
                    key={video._id}
                    user={this.state.user}
                    id={video._id}
                    url={video.url}
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