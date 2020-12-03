
import React from 'react'
// import { Link } from 'react-router-dom' 
import { getSingleImage, getSingleVideo, getPortfolio, giveLike, giveVideoLike, postComment, postVideoComment } from '../../lib/api'
import { Link } from 'react-router-dom'


class SinglePortfolio extends React.Component {
  state = {
    formData: {
      text: ''
    },
    user: null,
    imageId: false,
    videoId: false,
    showLikes: false,
    image: null,
    video: null,
    showImage: false,
    showVideo: false
  }

  async componentDidMount() {
    try {
      if (this.props.match.path.includes('videos')) {
        const videoId = this.props.match.params.id
        const res = await getSingleVideo(videoId)
        const resTwo = await getPortfolio()
        return this.setState({ video: res.data, user: resTwo.data, showVideo: true }) 
      } else {
        const imageId = this.props.match.params.id
        const res = await getSingleImage(imageId)
        const resTwo = await getPortfolio()
        return this.setState({ image: res.data, user: resTwo.data, showImage: true })       
      }
    } catch (err) {
      this.props.history.push('/notfound')
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
      const res = await getSingleImage(imageId)

      const textData = {
        ...this.state.formData, text: ''
      }
      this.setState({ formData: textData, image: res.data })
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
      const res = await getSingleVideo(videoId)

      const textData = {
        ...this.state.formData, text: ''
      }
      this.setState({ formData: textData, video: res.data })
    } catch (err) {
      console.log('response: ', err.response.data)
    }
  }

  async likeImage(id) {
    try {
      const formData = { imageId: id }
      const res = await giveLike(formData)
      const resTwo = await getSingleImage(id)

      this.setState({ image: resTwo.data })
    } catch (err) {
      console.log(err)
    }
  }

  async likeVideo(id) {
    try {
      const formData = { videoId: id }
      const res = await giveVideoLike(formData)
      const resTwo = await getSingleVideo(id)

      this.setState({ video: resTwo.data })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    console.log(this.state)
    const { image, video } = this.state
    let likeCounter = 0
    if (!image && !video) return null
    return (
      <section className="m-scene">
        <div className="single">
          {this.state.showImage &&
        <div className="small-image">
          <div className="small-image-header">
            <Link to={`/profile/${image.user._id}`}>
              <div className="small-image-profile">
                <img src={image.user.profileImage}/>
                {image.user.name}
              </div>
            </Link>
          </div>
          <figure className="image is-1by1">
            <img src={image.url} alt={image.title} />
          </figure>
          <div className="small-image-footer">
            <div>
              {image.likes.map( like => {
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
              <span onClick={ () => {
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
                          {image.likes.map( like => {
                            return <div key={like._id} className="profile-follow">      
                              <a href={`/profile/${like.userId}`}>
                                <img className='profile-image-follow' src={like.profileImage}/></a>
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
          }

          {this.state.showVideo &&
          <div className="small-image">
            <div className="small-image-header">
              <Link to={`/profile/${video.user._id}`}>
                <div className="small-image-profile">
                  <img src={video.user.profileImage}/>
                  {video.user.name}
                </div>
              </Link>
            </div>
            <figure className="image is-1by1">
              <video className="video" src={video.url} alt={video.title} controls/>
            </figure>
            <div className="small-image-footer">
              <div>
                {video.likes.map( like => {
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
                <span onClick={ () => {
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
                          {video.likes.map( like => {
                            return <div key={like._id} className="profile-follow">      
                              <a href={`/profile/${like.userId}`}>
                                <img className='profile-image-follow' src={like.profileImage}/></a>
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
          }
        </div>
      </section>
    )
  }

}

export default SinglePortfolio