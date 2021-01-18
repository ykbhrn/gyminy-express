import React from 'react'
import { Link } from 'react-router-dom'
import { postComment, getSingleImage, giveLike, follow } from '../../lib/api'

class Images extends React.Component{

  state = {
    formData: {
      text: ''
    },
    likeData: {
      image: ''
    },
    image: false,
    showBigImage: false,
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
      const response = await postComment(formData, id)
      const res = await getSingleImage(id)
      const textData = {
        ...this.state.formData, text: ''
      }
      this.setState({ image: res.data, formData: textData })
      
    } catch (err) {
      console.log('response: ', err.response.data)
    }
  }

  closeImage = () => {
    this.setState({ showBigPortfolio: false })
  }

  bigImage = async () => {
    const res = await getSingleImage(this.props.id)
    this.setState({ image: res.data, showBigPortfolio: true })
  }

  render ( ) {   
    let likeCounter = 0
    const { title, url, user } = this.props
    return (
      <>
        <div onClick={this.bigImage} className = "index-portfolio column is-one-quarter-desktop is-one-third-tablet is-8-mobile is-offset-2-mobile" >
          <figure className="image is-1by1">
            <img src={url} alt={title} />
          </figure>
        </div>
        {this.state.showBigPortfolio &&    
      <div className="show-big-image">
        <div className="big-image-card">
          <img className="big-image" src={this.state.image.url} />
          {/* side of big image container */}
          <div className='big-image-side'>
            <div className="profile-header-index">        
              <Link to={`/profile/${this.state.image.user._id}`} className="portfolio-header-part">
                <img className='profile-image-index' src={this.state.image.user.profileImage}/>{this.state.image.user.name}</Link>
              <div className="like-img">
                        
                {this.state.image.likes.map( like => {
                  if (like.userId == user._id) {
                    likeCounter++
                  }
                })}
                <img className="small-like-img" src={likeCounter == 0 ? 'https://res.cloudinary.com/djq7pruxd/image/upload/v1604238327/muscle_l4iwm8.png' 
                  : 'https://res.cloudinary.com/djq7pruxd/image/upload/v1604238630/muscle1_qefxuo.png'} 
                onClick={() => { 
                  this.likeImage(this.state.image._id)
                }}
                />
                <span className="like-counter">
                  {this.state.image.likes.length}
                </span>
              </div>
              <div className="portfolio-header-part">            
              </div>
            </div>
            <hr className="hr-comment"/>
            <div className="description-and-comments">
              <div className="big-image-description">
                {this.state.image.description} 
              </div>
              <hr className="hr-comment"/>
  
              <div className="show-comments">
                {this.state.image.comments.slice(0).reverse().map( comment => (
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
            <form className="comment-add-container" 
              onSubmit={(event) => {
                this.handleSubmit(event, this.state.image._id)
              }}>
              <input className="input"
                placeholder="..."
                name="text"
                value={this.state.formData.text}
                onChange={this.handleChange}
              />
              <button className="comment-button" type="submit">Post</button>
            </form>
  
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
export default Images

