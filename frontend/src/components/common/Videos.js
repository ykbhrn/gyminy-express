import React from 'react'
import { Link } from 'react-router-dom'
import { postVideoComment, getSingleVideo, giveVideoLike, follow } from '../../lib/api'

class Videos extends React.Component{

  state = {
    formData: {
      text: ''
    },
    likeData: {
      video: ''
    },
    video: false,
    showBigVideo: false,
    showBigPortfolio: false
  }

  // handleFollow = async (userId) => {
  //   console.log(userId)
  //   try {
  //     // const userId = this.props.match.params.id
  //     const res = await follow(userId)
  //     console.log(res.data)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

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

  handleChange = event => {
    const formData = { ...this.state.formData, [event.target.name]: event.target.value }
    this.setState({ formData })
  }

  handleSubmit = async (event, id) => {
    event.preventDefault()
    try {
      const formData = {
        ...this.state.formData
      }
      const response = await postVideoComment(formData, id)
      const res = await getSingleVideo(id)
      const textData = {
        ...this.state.formData, text: ''
      }
      this.setState({ video: res.data, formData: textData })
      
    } catch (err) {
      console.log('response: ', err.response.data)
    }
  }

  closeImage = () => {
    this.setState({ showBigPortfolio: false })
  }

  bigVideo = async () => {
    const res = await getSingleVideo(this.props.id)
    this.setState({ video: res.data, showBigPortfolio: true })
  }

  render ( ) {   
    let likeCounter = 0
    const { title, url, user } = this.props
    return (
      <>
        <div onClick={this.bigVideo} className = "index-portfolio column is-one-quarter-desktop is-one-third-tablet is-8-mobile is-offset-2-mobile" >
          <video className="index-video" src={url} alt={title} />
        </div>
        {this.state.showBigPortfolio &&    
      <div className="show-big-image">
        <div className="big-image-card">
          <video className="big-image" src={this.state.video.url} controls/>
          {/* side of big image container */}
          <div className='big-image-side'>
            <div className="profile-header-index">        
              <Link to={`/profile/${this.state.video.user._id}`} className="portfolio-header-part">
                <img className='profile-image-index' src={this.state.video.user.profileImage}/>{this.state.video.user.name}</Link>
              <div className="like-img">
                        
                {this.state.video.likes.map( like => {
                  if (like.userId == user._id) {
                    likeCounter++
                  }
                })}
                <img className="small-like-img" src={likeCounter == 0 ? 'https://res.cloudinary.com/djq7pruxd/image/upload/v1604238327/muscle_l4iwm8.png' 
                  : 'https://res.cloudinary.com/djq7pruxd/image/upload/v1604238630/muscle1_qefxuo.png'} 
                onClick={() => { 
                  this.likeVideo(this.state.video._id)
                }}
                />
                <span className="like-counter">
                  {this.state.video.likes.length}
                </span>
              </div>
              <div className="portfolio-header-part">            
              </div>
            </div>
            <hr className="hr-comment"/>
            <div className="description-and-comments">
              <div className="big-image-description">
                {this.state.video.description} 
              </div>
              <hr className="hr-comment"/>
  
              <div className="show-comments">
                {this.state.video.comments.slice(0).reverse().map( comment => (
                  <div className='single-comment' key={comment._id}> 
                    <div className="profile-header-comment">        
                      <Link to={`/profile/${comment.user._id}`}>
                        <img className='profile-image-comment' src={comment.user.profileImage}/></Link>
                      <Link to={`/profile/${comment.user._id}`}>{comment.user.name}</Link>
                    </div> {comment.text} 
                  </div>
                ))}
              </div>
            </div>

            {/* <div onClick={() => {
                this.handleFollow(displayUserId)
              }}
              className="small-follow"> +Follow</div>  */}
              
            <div className="post-comment">
              <form onSubmit={(event) => {
                this.handleSubmit(event, this.state.video._id)
              }}>
                <div className="comment-add-container">
                  <input className="input"
                    placeholder="..."
                    name="text"
                    value={this.state.formData.text}
                    onChange={this.handleChange}
                  />
                  <button className="comment-button" type="submit">Post</button>
                </div>
              </form>

            </div>
  
            <style>
              {'\
              .navbar{\
                opacity: 0.5;\
              }\
              .m-scene .image, .index-video{\
                opacity: 0.5;\
              }\
              '}
            </style>
  
          </div>
          <div onClick={this.closeImage} className='close'>
            <img src='https://res.cloudinary.com/djq7pruxd/image/upload/v1592484109/close_eo3yn4.png' /> 
          </div>
        </div>
      </div>
        }
      </>
    )
  }
  
}
export default Videos

