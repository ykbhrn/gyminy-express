import React from 'react'
import { Link } from 'react-router-dom'
import { postVideoComment, getSingleVideo, giveVideoLike } from '../../lib/api'

class Videos extends React.Component{

  state = {
    formData: {
      text: ''
    },
    likeData: {
      video: ''
    },
    comments: [],
    displayNewComments: false,
    displayLikeCounter: null,
    displayNewLikes: false
  }

  async getData(videoId) { //* this function can be called whenever you need to update the info on the page
    try {
      const res = await getSingleVideo(videoId)
      this.setState({ comments: res.data.comments, displayNewComments: true })
    } catch (error) {
      console.log(error)
      // this.props.history.push('/notfound')
    }
  }

  async likeVideo(id) {
    try {
      const formData = { videoId: id }
      const res = await giveVideoLike(formData)
      const video = await getSingleVideo(id)
      this.setState({ displayLikeCounter: video.data.likes.length, displayNewLikes: true })
    } catch (err) {
      console.log(err)
    }
  }

  handleChange = event => {
    const formData = { ...this.state.formData, [event.target.name]: event.target.value }
    this.setState({ formData })
  }

  handleSubmit = async (event, displayPortfolioId) => {
    event.preventDefault()
    try {
      const formData = {
        ...this.state.formData
      }
      // await this.setState({ formData })
      const response = await postVideoComment(formData, displayPortfolioId)
      //reset formdata text ....it need to be in this way because there is two "text" in state and if i put just "text" than it reset wrong one
      const textData = {
        ...this.state.formData, text: ''
      }
      this.setState({ formData: textData })
      
    } catch (err) {
      console.log('response: ', err.response.data)
    }
    this.getData(displayPortfolioId)
  }

  hideNewComments = () => {
    this.setState({ displayNewComments: false, displayNewLikes: false })
  }

  render ( ) {   
    const { title, url, id, showBigPortfolio,  handleBigPortfolio, displayPhotoUrl, hideBig,
      displayTitle, displayUserId, displayUsername, displayProfileUrl, displayDescription, 
      displayComments, displayPortfolioId, displayLikes } = this.props
    return (
      <>
        <div 
          onClick={() => {
            handleBigPortfolio(id)
          }}
          className = "index-portfolio column is-one-quarter-desktop is-one-third-tablet is-8-mobile is-offset-2-mobile" >
          {/* {comments.map(singleComment => {
            return singleComment.text
          })} */}
         
          <video className="index-video" src={url} alt={title} />
          
        </div>
        {showBigPortfolio &&    
      <div className="show-big-image">

        <div className="big-image-card">
          <video className="big-image" src={displayPhotoUrl} alt={displayTitle} controls/>
          {/* side of big image container */}
          <div className='big-image-side'>
            <div className="profile-header-index">        
              <Link to={`/profile/${displayUserId}`} className="portfolio-header-part">
                <img className='profile-image-index' src={displayProfileUrl}/>{displayUsername}</Link>
              <div className="portfolio-header-part">
                <img className="small-like-img" src="https://res.cloudinary.com/djq7pruxd/image/upload/v1596516120/iconfinder_166_Heart_Love_Like_Twitter_4541850_an3vro.png"
                  onClick={() => {
                    this.likeVideo(displayPortfolioId)
                  }}
                />
                {!this.state.displayNewLikes && 
                  displayLikes
                }
                {this.state.displayNewLikes && 
                  this.state.displayLikeCounter
                }
              </div>
            </div>
            <hr className="hr-comment"/>
            <div className="description-and-comments">
              <div className="big-image-description">
                {displayDescription} 
              </div>
              <hr className="hr-comment"/>
  
              <div className="show-comments">
                {!this.state.displayNewComments &&
              <>
                {displayComments} 
              </>
                }
                {this.state.displayNewComments &&
              <>
                {this.state.comments.slice(0).reverse().map( comment => (
                  <div className='single-comment' key={comment._id}> 
                    <div className="profile-header-comment">        
                      <Link to={`/profile/${comment.user._id}`}>
                        <img className='profile-image-comment' src={comment.user.profileImage}/></Link>
                      <Link to={`/profile/${comment.user._id}`}>{comment.user.name}</Link>
                    </div> {comment.text} 
                  </div>
                ))}
              </>
                }
              </div>
            </div>

            <div className="post-comment">
              <form onSubmit={(event) => {
                this.handleSubmit(event, displayPortfolioId)
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
          <div onClick={this.hideNewComments}>
            <div className='close' onClick={hideBig}> <img src='https://res.cloudinary.com/djq7pruxd/image/upload/v1592484109/close_eo3yn4.png' /> </div>
          </div>
        </div>
      </div>
        }
      </>
    )
  }
  
}
export default Videos