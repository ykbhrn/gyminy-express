import React from 'react'
import { getAllImages, getAllVideos, getSingleImage, getSingleVideo, getPortfolio, giveLike, giveVideoLike, postComment, postVideoComment } from '../../lib/api'
import { Link } from 'react-router-dom'
import Images from '../common/Images'
import Videos from '../common/Videos'
import Articles from '../portfolio/Articles'

class IndexPortfolio extends React.Component {
  state = {
    formData: {
      text: ''
    },
    user: null,
    images: [],
    videos: [],
    showImages: true,
    showVideos: false,
    showArticles: false,
    imageId: false,
    videoId: false,
    showLikes: false,
    image: null,
    video: null
  }

  async componentDidMount() {
    try {
      const resThree = await getPortfolio()
      const resTwo = await getAllVideos()
      const allVideos = resTwo.data
      const res = await getAllImages()
      const allImages = res.data

      const filteredImages = allImages.filter(image => {

        let followerCounter = 0

        resThree.data.following.map(user => {

          if (image.user._id == user.followedUserId) {
            followerCounter++
          }

        })

        if (followerCounter > 0) {
          return image
        }

      })

      console.log(allImages)

      const filteredVideos = allVideos.filter(video => {
        let followerCounter = 0
        resThree.data.following.map(user => {
          if (video.user._id == user.followedUserId) {
            followerCounter++
          }
        })
        if (followerCounter > 0) {
          return video
        }
      })

      this.setState({ user: resThree.data, images: filteredImages, videos: filteredVideos })

    } catch (err) {
      console.log(err)
    }
  }

  handleShowingLikes = (image) => {
    this.setState({ showLikes: this.state.showLikes === true ? false : true, image: image })
  }

  handleShowingVideoLikes = (video) => {
    this.setState({ showLikes: this.state.showLikes === true ? false : true, video: video })
  }

  handleChange = event => {
    const formData = { ...this.state.formData, [event.target.name]: event.target.value }
    this.setState({ formData })
  }

  handleSubmit = async (event, imageId) => {
    event.preventDefault()
    try {
      const formData = {
        ...this.state.formData
      }
      // await this.setState({ formData })
      const response = await postComment(formData, imageId)
      const res = await getAllImages()
      const allImages = res.data

      const filteredImages = allImages.filter(image => {
        let followerCounter = 0
        this.state.user.following.map(user => {
          if (image.user._id == user.followedUserId) {
            followerCounter++
          }
        })
        if (followerCounter > 0) {
          return image
        }
      })
      //reset formdata text ....it need to be in this way because there is two "text" in state and if i put just "text" than it reset wrong one
      const textData = {
        ...this.state.formData, text: ''
      }

      console.log(filteredImages)

      this.setState({ formData: textData, images: filteredImages })
    } catch (err) {
      console.log('response: ', err.response.data)
    }
  }

  handleVideoSubmit = async (event, videoId) => {
    event.preventDefault()
    try {
      const formData = {
        ...this.state.formData
      }
      // await this.setState({ formData })
      const response = await postVideoComment(formData, videoId)
      const resTwo = await getAllVideos()
      const allVideos = resTwo.data

      const filteredVideos = allVideos.filter(video => {
        let followerCounter = 0
        this.state.user.following.map(user => {
          // console.log(video)
          if (video.user._id == user.followedUserId) {
            followerCounter++
          }
        })
        if (followerCounter > 0) {
          return video
        }
      })
      //reset formdata text ....it need to be in this way because there is two "text" in state and if i put just "text" than it reset wrong one
      const textData = {
        ...this.state.formData, text: ''
      }
      this.setState({ formData: textData, videos: filteredVideos })
    } catch (err) {
      console.log('response: ', err.response.data)
    }
  }

  async likeImage(id) {
    try {
      const formData = { imageId: id }
      const res = await giveLike(formData)
      const resTwo = await getAllImages()
      const allImages = resTwo.data

      const filteredImages = allImages.filter(image => {
        let followerCounter = 0
        this.state.user.following.map(user => {
          if (image.user._id == user.followedUserId) {
            followerCounter++
          }
        })
        if (followerCounter > 0) {
          return image
        }
      })
      this.setState({ images: filteredImages })
    } catch (err) {
      console.log(err)
    }
  }

  async likeVideo(id) {
    try {
      const formData = { videoId: id }
      const res = await giveVideoLike(formData)
      const resTwo = await getAllVideos()
      const allVideos = resTwo.data

      const filteredVideos = allVideos.filter(video => {
        let followerCounter = 0
        this.state.user.following.map(user => {
          // console.log(video)
          if (video.user._id == user.followedUserId) {
            followerCounter++
          }
        })
        if (followerCounter > 0) {
          return video
        }
      })
      this.setState({ videos: filteredVideos })
    } catch (err) {
      console.log(err)
    }
  }

  clickShow = (type) => {
    if (type === 'videos') {
      this.setState({ showVideos: true, showImages: false, showArticles: false })
    } else if (type === 'images') {
      this.setState({ showImages: true, showVideos: false, showArticles: false })
    } else if (type === 'articles') {
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
    // if (!this.state.user) return null

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
              <div className="images-container">

                {this.state.images.length === 0 &&
                  <h1>Media Of Your Followed Athletes Will Appear Here</h1>
                }

                {this.state.images.slice(0).reverse().map(image => {
                  let likeCounter = 0
                  return <div
                    key={image._id}
                    className="small-image">
                    <div className="small-image-header">
                      <Link to={`/profile/${image.user._id}`}>
                        <div className="small-image-profile">
                          <img src={image.user.profileImage} />
                          {image.user.name}
                        </div>
                      </Link>
                    </div>
                    <figure className="image is-1by1">
                      <img src={image.url} alt={image.title} />
                    </figure>
                    <div className="small-image-footer">
                      <div>
                        {image.likes.map(like => {
                          if (like.userId == this.state.user._id) {
                            likeCounter++
                          }
                        })}

                        <img className="small-like-img" src={likeCounter == 0 ? 'https://res.cloudinary.com/djq7pruxd/image/upload/v1604238327/muscle_l4iwm8.png'
                          : 'https://res.cloudinary.com/djq7pruxd/image/upload/v1604238630/muscle1_qefxuo.png'}
                          onClick={() => {
                            this.likeImage(image._id)
                          }}
                        />
                        <span onClick={() => {
                          this.handleShowingLikes(image)
                        }}
                          className="like-counter">
                          {image.likes.length} Likes
                        </span>
                      </div>
                      <span>
                        <Link to={`/profile/${image.user._id}`}>
                          <span className="username-footer">{image.user.name}</span>
                        </Link>
                        {image.description}
                      </span>
                      {this.state.showLikes &&
                        <div className='followers-container'>
                          <span className="follower-title">Likes</span>
                          <span className='close-follow' onClick={this.handleShowingLikes}> X </span>
                          <div className="followers-frame">
                            {this.state.image.likes.map(like => {
                              return <div key={like._id} className="profile-follow">
                                <a href={`/profile/${like.userId}`}>
                                  <img className='profile-image-follow' src={like.profileImage} /></a>
                                <a href={`/profile/${like.userId}`}>{like.username}</a>
                              </div>
                            })}
                          </div>
                        </div>
                      }
                      <hr />
                      <div>

                        {image.comments.slice(0).reverse(0).map(comment => {
                          return <div key={comment._id} className="profile-footer">
                            <div className="profile-footer-container">
                              <img src={comment.user.profileImage} />
                              <span className="username">{comment.user.name}</span>
                            </div>
                            <div className="footer-comment-text">
                              {comment.text}
                            </div>
                          </div>
                        })}

                      </div>

                    </div>
                    <form onClick={(event) => {
                      this.handleSubmit(event, image._id)
                    }}>
                      <div className="comment-add-container">
                        <input
                          className="input"
                          name="text"
                          placeholder="..."
                          value={this.state.formData.text}
                          onChange={this.handleChange}
                        />
                        <button className="comment-button" type="submit">Post</button>
                      </div>
                    </form>
                  </div>
                })}
              </div>
            }

            {this.state.showVideos &&
              <div className="images-container">

                {this.state.videos.length === 0 &&
                  <h1>Media Of Your Followed Athletes Will Appear Here</h1>
                }

                {this.state.videos.slice(0).reverse().map(video => {
                  let likeCounter = 0
                  return <div
                    key={video._id}
                    className="small-image">
                    <div className="small-image-header">
                      <Link to={`/profile/${video.user._id}`}>
                        <div className="small-image-profile">
                          <img src={video.user.profileImage} />
                          {video.user.name}
                        </div>
                      </Link>
                    </div>
                    <video className="videoStyle" src={video.url} alt={video.title} controls />
                    <div className="small-image-footer">
                      <div>
                        {video.likes.map(like => {
                          if (like.userId == this.state.user._id) {
                            likeCounter++
                          }
                        })}

                        <img className="small-like-img" src={likeCounter == 0 ? 'https://res.cloudinary.com/djq7pruxd/image/upload/v1604238327/muscle_l4iwm8.png'
                          : 'https://res.cloudinary.com/djq7pruxd/image/upload/v1604238630/muscle1_qefxuo.png'}
                          onClick={() => {
                            this.likeVideo(video._id)
                          }}
                        />
                        <span onClick={() => {
                          this.handleShowingVideoLikes(video)
                        }}
                          className="like-counter">
                          {video.likes.length} Likes
                        </span>
                      </div>
                      <span>
                        <Link to={`/profile/${video.user._id}`}>
                          <span className="username-footer">{video.user.name}</span>
                        </Link>
                        {video.description}
                      </span>
                      {this.state.showLikes &&
                        <div className='followers-container'>
                          <span className="follower-title">Likes</span>
                          <span className='close-follow' onClick={this.handleShowingVideoLikes}> X </span>
                          <div className="followers-frame">
                            {this.state.video.likes.map(like => {
                              return <div key={like._id} className="profile-follow">
                                <a href={`/profile/${like.userId}`}>
                                  <img className='profile-image-follow' src={like.profileImage} /></a>
                                <a href={`/profile/${like.userId}`}>{like.username}</a>
                              </div>
                            })}
                          </div>
                        </div>
                      }
                      <hr />
                      <div>

                        {video.comments.slice(0).reverse(0).map(comment => {
                          return <div key={comment._id} className="profile-footer">
                            <div className="profile-footer-container">
                              <img src={comment.user.profileImage} />
                              <span className="username">{comment.user.name}</span>
                            </div>
                            <div className="footer-comment-text">
                              {comment.text}
                            </div>
                          </div>
                        })}

                      </div>

                    </div>
                    <form onClick={(event) => {
                      this.handleVideoSubmit(event, video._id)
                    }}>
                      <div className="comment-add-container">
                        <input
                          className="input"
                          name="text"
                          placeholder="..."
                          value={this.state.formData.text}
                          onChange={this.handleChange}
                        />
                        <button className="comment-button" type="submit">Post</button>
                      </div>
                    </form>
                  </div>
                })}
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