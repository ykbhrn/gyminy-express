import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { isAuthenticated } from '../../lib/auth'
import { getPortfolio, getAllUsers, turnOffNotifications } from '../../lib/api'
class Navbar extends React.Component{
  state = { 
    user: [],
    isOpen: false,
    showSearchBar: false,
    allUsers: '',
    searchUsers: [],
    startTyping: false,
    newNotification: false,
    newChat: false,
    showNotification: false
  }

  async componentDidMount() {
    try {
      const res = await getPortfolio()
      const resTwo = await getAllUsers()
      this.setState( { user: res.data, allUsers: resTwo.data, newNotification: res.data.newNotification, newChat: res.data.newChat } )
      // if (res.data.user_type === 1) {
      //   this.setState({ user: res.data, isStudent: true })
      // } else if (res.data.user_type === 2) {
      //   this.setState({ user: res.data, isAthlete: true })
      // }
    } catch (err) {
      console.log(err)
    }
  }

  notificationFalse = async (typeDetail) => {
    try {
      const detail = { type: typeDetail }
      const resTwo = await turnOffNotifications(detail)
      const res = await getPortfolio()
      if (typeDetail === 'chat') {
        this.setState({ newChat: res.data.newChat })
      } else {
        this.setState({ newNotification: res.data.newNotification, 
          showNotification: this.state.showNotification === true ? false : true })
      }
      console.log(resTwo.data)
    } catch (err) {
      console.log(err)
    }
  }

  onChange = (event) => {
    event.preventDefault()
    const wordSearch = this.state.allUsers.filter(result => {
      const searchValue = event.target.value.toLowerCase()
      const userSearch = result.name.toLowerCase()
      if (userSearch.includes(searchValue)){
        return userSearch 
      }
    })
    const searchArray = event.target.value.split('')
    if (searchArray.length > 0) {
      return  this.setState({ searchUsers: wordSearch, startTyping: true })
    } else {
      this.setState({ searchUsers: wordSearch, startTyping: false })
    }
  }

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  handleSearchBar = () => {
    this.setState({ showSearchBar: this.state.showSearchBar == true ? false : true })
  }

  hideSearch = () => {
    this.setState({ showSearchBar: false })
  }

  handleRedirect = () => {
    this.setState({ showSearchBar: this.state.showSearchBar == true ? false : true, startTyping: false })
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ isOpen: false })
    }
  }

notificationType = (username, notificationType, portfolioType, url, portfolioId, isFull) => {
  if (notificationType === 'like') {
    if (portfolioType === 'image') {
      return <div className="notification-result">{username} liked your image <Link to={`/images/${portfolioId}`}><img className="image" src={url} /></Link>
      </div>
    } else if (portfolioType === 'video') {
      return <div className="notification-result">{username} liked your video <Link to={`/videos/${portfolioId}`}><video className="image" src={url} /></Link>
      </div>
    }
  } else if (notificationType === 'comment') {
    if (portfolioType === 'image') {
      return <div className="notification-result">{username} commented your image <Link to={`/images/${portfolioId}`}><img className="image" src={url} /></Link>
      </div>
    } else if (portfolioType === 'video') {
      return <div className="notification-result">{username} commented your video <Link to={`/videos/${portfolioId}`}><video className="image" src={url} /></Link>
      </div>
    }
  } else if (notificationType === 'follow') {
    return <div className="notification-result">{username} started following you</div>
  } else if (notificationType === 'training') {
    return  <Link to={`/trainings/${portfolioId}`}><div className="notification-result">{username} booked your training {url}.
      {isFull &&  <> It's fully booked</>}
    </div></Link>
  }
}

render() {
  if (!this.state.allUsers) return null
  console.log(this.state.user.notifications)
  const { isOpen } = this.state
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">

          {isAuthenticated() && 
            <div className="logo-search">
              <Link to="/" className="navbar-item" onClick={this.hideSearch}>
                <span className="logo-navbar">gyminy</span>
              </Link>
              {!this.props.location.pathname.includes('/profile/') &&
            <div className="search">
              {!this.state.showSearchBar &&
                <img onClick={this.handleSearchBar} src="https://res.cloudinary.com/djq7pruxd/image/upload/v1595291077/iconfinder_icon-111-search_314807_vywlu5.png" />
              }
              {this.state.showSearchBar &&
              <>
                <form>
                  <input
                    type="search"
                    placeholder="Search for User ..."
                    onChange={this.onChange}
                  />
                </form>
                {this.state.startTyping && this.state.searchUsers.length === 0 &&
                <div className="no-results">
                No results
                </div>
                } 
                {this.state.startTyping && this.state.searchUsers.length > 0 &&
              <>
                <div className="search-results" onClick={this.handleSearchBar}>
                  {this.state.searchUsers.map(user => {
                    return <Link key={user._id} to={`/profile/${user._id}`}>
                      <div className="search-profile" onClick={this.handleRedirect}> 
                        <div className="profile-header-comment">        
                          <img className='profile-image-comment' src={user.profileImage}/>{user.name}
                        </div> 
                      </div>
                    </Link>
                  })}
                </div>
              </>
                }
              </>
              }
            </div>
              } 
            </div>
          }

          {/* <span onClick={this.handleToggle} className={`navbar-burger ${isOpen ? 'is-active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span> */}
        </div>
        <div className="navbar-menu is-active">
          <div className="navbar-end">
            {isAuthenticated() && <Link to="/portfolio" onClick={this.hideSearch}>
              <img className='navbar-item' src="https://res.cloudinary.com/djq7pruxd/image/upload/v1604865766/iconfinder_Sed-07_2232598_lh3apb.png" />
            </Link>}
            {isAuthenticated() && <Link to="/explore" onClick={this.hideSearch}>
              <img className='navbar-item' src="https://res.cloudinary.com/djq7pruxd/image/upload/v1592484111/home_of6q7k.png" />
            </Link>}
            {isAuthenticated() && <Link to="/trainings" onClick={this.hideSearch}>
              <img className='navbar-item' src="https://res.cloudinary.com/djq7pruxd/image/upload/v1592484110/trainings_sridq6.png" />
            </Link>}
            {isAuthenticated() && <Link to="/chat" onClick={this.hideSearch}>
              <img onClick={() => {
                this.notificationFalse('chat')
              }} className='navbar-item' src={this.state.newChat === false ? 'https://res.cloudinary.com/djq7pruxd/image/upload/v1592484109/chat_usiydp.png' : 'https://res.cloudinary.com/djq7pruxd/image/upload/v1605126555/chat_usiydp_fxhab5.png'}/>
            </Link>}
            {isAuthenticated() && <div onClick={this.hideSearch}>
              <img onClick={() => {
                this.notificationFalse('notification')
              }} className='navbar-item' src={this.state.newNotification === false ? 'https://res.cloudinary.com/djq7pruxd/image/upload/v1605049586/iconfinder_notif_notification_info_information_caution_4831016_lxehyb.png' : 'https://res.cloudinary.com/djq7pruxd/image/upload/v1605126556/bell_gefhlq.png'} />
            </div>}
            {this.state.showNotification && 
            <div className="notifications-container">
              {this.state.user.notifications.slice(0).reverse().map( notification => {
                return <div key={notification.userId} className="profile-footer">
                  <Link className="profile-footer-container" to={`/profile/${notification.userId}`}> 
                    <img className="profile-image" src={notification.profileImage} />
                  </Link>
                  {this.notificationType(notification.username, notification.notificationType, notification.portfolioType, notification.url, notification.portfolioId, notification.isFull)}
                </div>
              })}
            </div>
            }

            {isAuthenticated() && <Link to="/profile" onClick={this.hideSearch}>
              <img className='navbar-image navbar-item' src={this.state.user.profileImage} />
            </Link>}
            {!isAuthenticated() && <Link to="/login" className="navbar-item">
              Login
            </Link>}
            {!isAuthenticated() && <Link to="/register" className="navbar-item">
              Register
            </Link>}
          </div>
        </div>
      </div>
    </nav>
  )
}
}
export default withRouter(Navbar)