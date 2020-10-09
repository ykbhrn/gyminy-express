import React from 'react'
import { getChat, postChat, getPortfolio } from '../../lib/api'
import { Link } from 'react-router-dom'


class Chat extends React.Component {
  state = {
    formData: {
      text: ''
    },
    user: null,
    showMessages: false,
    chats: null,
    profileImage: '',
    username: '',
    userId: '',
    isStudent: false
  }

  async componentDidMount() {
    try {
      const res = await getPortfolio()
      this.setState({ user: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  async getData(chatId) { //* this function can be called whenever you need to update the info on the page
    try {
      const res = await getChat(chatId)
      await this.setState({ chats: res.data })
    } catch (error) {
      console.log(error)
      // this.props.history.push('/notfound')
    }
  }

  handleChange = event => {
    console.log('change event: ', event.target.name)
    const formData = { ...this.state.formData, [event.target.name]: event.target.value }
    this.setState({ formData })
  }

  handleSubmit = async (event, userId) => {
    event.preventDefault()
    try {
      const response = await postChat(this.state.formData, userId)
      const textData = {
        ...this.state.formData, text: ''
      }
      this.setState({ formData: textData })
      console.log(response.data)
    } catch (err) {
      console.log('response: ', err.response.data)
    }
    this.getData(this.state.chats._id)
  }

  getMessages = async (id) => {
    try {
      const res = await getChat(id)
      await this.setState({ chats: res.data, showMessages: true })
      await this.getUser()

    } catch (err) {
      console.log(err)

    }
  }

  getUser = async () => {
    const clicker = 0
    if ( this.state.chats.senderId !== this.state.user._id) {
      this.setState({
        profileImage: this.state.chats.senderProfileImage,
        username: this.state.chats.senderName, userId: this.state.chats.senderId
        // isStudent: chat.userType === 1 ? true : false
      })
    } else if ( this.state.chats.receiverId !== this.state.user._id) {
      this.setState({
        profileImage: this.state.chats.receiverProfileImage,
        username: this.state.chats.receiverName, userId: this.state.chats.receiverId
        // isStudent: chat.userType === 1 ? true : false
      })
    }

  }





  render() {
    if (!this.state.user) return null
    console.log(this.state.userId)
    return (
      <div className="chat-profile-container">
        <div className="chat-profile-side">
          {/* Find Users who i have chat history with */}
          {this.state.user.userChats.slice(0).reverse().map(chat => {

            if (chat.receiverId !== this.state.user._id) {
              return <div onClick={() => {
                this.getMessages(chat._id)
              }}
              key={chat.receiverId} className="profile-header-chat-page">
                <img className='profile-image-index' src={chat.receiverProfileImage} />{chat.receiverName}
              </div>
            } else if (chat.senderId !== this.state.user._id) {
              return <div onClick={() => {
                this.getMessages(chat._id)
              }}
              key={chat.senderId} className="profile-header-chat-page">
                <img className='profile-image-index' src={chat.senderProfileImage} />{chat.senderName}
              </div>
            }
    
          })}
        </div>
        {/* Show this header when user have no messages */}
        {this.state.user.userChats.length === 0 &&
        <div className="no-messages">
          <h1 className="title is-2">You Have No Messages Yet</h1>
        </div>
        }

        {/* Chat history with specific user and sending message form*/}
        {this.state.showMessages &&
        <div className="messages-section">
          <Link to={`/profile/${this.state.userId}`}>
            <div className="profile-header profile-messages">
              <img className='profile-image' src={this.state.profileImage} />
              <div className="greeting-public"><span className='title is-2'>{this.state.username}</span>
                <div className="user-type"><img src={`${this.state.isStudent ? 'https://res.cloudinary.com/djq7pruxd/image/upload/v1592484110/student_rtpzhv.png' : 'https://res.cloudinary.com/djq7pruxd/image/upload/v1592484110/athlete_gwre8y.png'}`} />
                  {this.state.user.userType.name}
                </div>
              </div>
            </div>
          </Link>

          <div className="chat-history-container">
            <div className="chat-history">
              {this.state.chats.subChat.slice(0).reverse().map(chat => {
                if (this.state.user._id === chat.senderId) {
                  return <div key={chat._id} className="one-message-container"><span className="one-message">{chat.text}</span></div>
                } else {
                  return <div key={chat._id} className="one-message-container-other"><span className="one-message-other">{chat.text}</span></div>
                }
              })}
            </div>
          </div>
          <div className="messages-form-container">
            <form onSubmit={(event) => {
              this.handleSubmit(event, this.state.userId)
            }}>
              <input className="input"
                name='text'
                onChange={this.handleChange}
                value={this.state.formData.text}
              />
              <button className="comment-button">Send</button>
            </form>
          </div>

        </div>
        }


      </div>
    )
  }

}
export default Chat