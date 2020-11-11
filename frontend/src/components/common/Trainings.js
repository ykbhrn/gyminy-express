import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { getAllTrainings, getSingleTraining, bookTraining } from '../../lib/api'

class Trainings extends React.Component{

  state = {
    training: null,
    showBigTraining: false,
    studentRedirect: false,
    trainingOwnerId: '',
    trainingOwnerUsername: ''
  }

  closeBig = () => {
    this.setState({ showBigTraining: false })
  }

  handleSingleTraining = async () => {
    try {
      const res = await getSingleTraining(this.props.singleTraining._id)
      this.setState({ training: res.data, showBigTraining: true })
    } catch (err) {
      console.log(err)
    }
  }

  handleBooking = async (id, ownerId, ownerUsername) => {
    try {
      await this.setState({ trainingOwnerId: ownerId, trainingOwnerUsername: ownerUsername })
      const res = await bookTraining(id)
      this.setState({ studentRedirect: true })
      console.log(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/done/training" />
    }
    if (this.state.studentRedirect) {
      return <Redirect to={`/done/booking/${this.state.trainingOwnerId}/${this.state.trainingOwnerUsername}`} />
    }
  }

  bookingForm = (limit, bookings) => {
    let capacity

    if (bookings === 0) {
      if (limit === 1) {
        return <>
          Capacity Limit: <span className="card-header-title"> Individual Training </span>
        </>
      } else if (this.state.isStudent) {
        return <>
          Capacity Limit: <span className="card-header-title">{limit} Students </span>
          Booked: <span className="card-header-title">{bookings} Students</span>
        </>
      } else {
        return <>
          Capacity Limit: <span className="card-header-title">{limit} Students </span>
        </>
      }
    } else if (bookings >= limit) {
      if (limit === 1) {
        return <>
          Capacity Limit: <span className="card-header-title"> Individual Training </span>
          <div>
            Training Is Fully Booked
          </div>
        </>
      } else {
        return <>
          Capacity Limit: <span className="card-header-title">{limit} Students </span>
          <div>
            Training Is Fully Booked
          </div>
        </>
      }
    } else {
      if (limit === 1) {
        return <>
          Capacity Limit: <span className="card-header-title"> Individual Training </span>
        </>
      } else {
        return <>
          Capacity Limit: <span className="card-header-title">{limit} Students </span>
          Booked: <span className="card-header-title">{bookings} Students</span>
        </>
      }
    }
  }



  render() {
    console.log(this.state.training)
    const { singleTraining, bookTimeSlot, trainingPage } = this.props 
    return (
      <>
        {this.renderRedirect()}
        <div onClick={this.handleSingleTraining}
          className="index-portfolio column column is-one-third-desktop is-one-third-tablet is-8-mobile is-offset-2-mobile" >
          <div className="card">
            <h4 className="card-header-title">{singleTraining.name}</h4>
            <div>Date: <span className="card-header-title">{singleTraining.date}</span></div>
            <div>Time: <span className="card-header-title">{singleTraining.time}</span></div>
            <div>Sport: <span className="card-header-title">{singleTraining.sports.map( sport => ( sport + ', '))}</span></div>
          </div>
        </div >
        {this.state.showBigTraining &&    
    <div className="show-big-training">
      <div className="big-training-card">
        <div className='big-training-side'>
          <div className="profile-header-training">        
            <Link to={`/profile/${this.state.training.user._id}`}>
              <img className='profile-image-index' src={this.state.training.user.profileImage}/></Link>
            <Link to={`/profile/${this.state.training.user._id}`}>{this.state.training.user.name}</Link>
          </div>
          <hr/>
          <div className="training-description">
            <h4 className="training-title title is-3 has-text-centered">{this.state.training.name}</h4>
            <Link to={`/profile/${this.state.training.user._id}`}>Instructor: <span className="card-header-title">{this.state.training.user.name}</span></Link>
           Date: <span className="card-header-title">{this.state.training.date}</span>
            Time: <span className="card-header-title">{this.state.training.time}</span>
            Sport: <span className="card-header-title">{this.state.training.sports.map(sport => ( sport + ', ' ))}</span> <br />
            {this.bookingForm(this.state.training.limit, this.state.training.bookings)} 
            <div>Description: <span className="card-header-title">{this.state.training.description}</span></div>     
          </div>
          <hr />
          {bookTimeSlot &&
          <>
            {trainingPage && 
            <div className="field">
              <button
                onClick={() => {
                  this.handleBooking(this.state.training._id, this.state.training.user._id, this.state.training.user.name)
                }}
                className='button is-fullwidth is-dark'>Book Time Slot</button>
            </div>
            }
            {!trainingPage && 
            <div className="field">
              <button
                onClick={() => {
                  this.handleBooking(this.state.training._id, this.state.training.user._id, this.state.training.user.name)
                }}
                className='button is-fullwidth is-dark'>Book Time Slot</button>
            </div>
            }
          </>
          }

          <style>
            {'\
            .navbar{\
              opacity: 0.5;\
            }\
            // .big-image{\
            //   opacity: 2;\
            // }\
            .m-scene .image, .index-video, .card{\
              opacity: 0.5;\
            }\
            '}
          </style>
          

        </div>

        <div className='close-training' onClick={this.closeBig}> <img src='https://res.cloudinary.com/djq7pruxd/image/upload/v1592484109/close_eo3yn4.png' /> </div>
      </div>
    </div>
        }
      </>
    )
  }
}
export default Trainings