import React from 'react'
import { addTraining, getPortfolio, getAllTrainings } from '../../lib/api'
import { Redirect, Link } from 'react-router-dom'
import AddTraining from './AddTraining'
import Trainings from '../common/Trainings'

class TrainingsPage extends React.Component {
  state = {
    user: null,
    trainings: [],
    formData: {
      name: '',
      date: '',
      time: '',
      description: '',
      limit: 1,
      sports: []
    },
    showAdd: false,
    showBookedTrainings: true,
    showNotBookedTrainings: false,
    redirect: false,
    studentRedirect: false,
    isStudent: false,
    isAthlete: false,
    isGroupTraining: false,
    trainingOwnerId: '',
    trainingOwnerUsername: '',
    errors: {
      name: '',
      date: '',
      time: '',
      description: '',
      sports: ''
    }
  }

  async componentDidMount() {
    try {
      const res = await getPortfolio()
      if (res.data.userType === 1) {
        const resTwo = await getAllTrainings()
        this.setState({ user: res.data, trainings: resTwo.data, isStudent: true })
      } else if (res.data.userType === 2) {
        this.setState({ user: res.data, isAthlete: true })
      }

    } catch (err) {
      console.log(err)
    }
  }

  handleChange = event => {
    console.log('change event: ', event.target.name)
    const formData = { ...this.state.formData, [event.target.name]: event.target.value }
    const errors = { ...this.state.errors, [event.target.name]: '' }
    this.setState({ formData, errors })
  }

  handleSelect = event => {
    const sport = this.state.formData.sports.concat(event.target.value)
    const formData = {
      ...this.state.formData, sports: sport
    }
    this.setState({ formData })
  }

  handleSubmit = async event => {
    event.preventDefault()
    try {
      const response = await addTraining(this.state.formData)
      if (response.status === 201) {
        this.setState({ redirect: true })
      }
      if (response.status === 422) throw new Error()
    } catch (err) {
      console.log('response: ', err.response.data)
      this.handleErrors(err.response.data)

    }
  }

  clickShow = (type) => {
    if (type === 'requests') {
      this.setState({ showRequests: true, showAdd: false, showBookedTrainings: false, showNotBookedTrainings: false })
    } else if (type === 'add') {
      this.setState({ showAdd: true, showRequests: false, showBookedTrainings: false, showNotBookedTrainings: false })
    } else if (type === 'booked') {
      this.setState({ showBookedTrainings: true, showRequests: false, showAdd: false, showNotBookedTrainings: false })
    } else if (type === 'not') {
      this.setState({ showNotBookedTrainings: true, showRequests: false, showBookedTrainings: false, showAdd: false })
    }
  }

  handleErrors = (errors) => {
    let name = ''
    let date = ''
    let time = ''
    let description = ''
    let sports = ''

    if (errors.name) {
      name = 'Training Name Is Required'
    }
    if (errors.date) {
      date = 'Training Date Is Required'
    }
    if (errors.time) {
      time = 'Training Time Is Required'
    }
    if (errors.description) {
      description = 'Describe Your Training Please'
    }
    if (errors.sports) {
      sports = 'Choose Training Categories Please.'
    }

    this.setState({ errors: { name, date, time, description, sports } })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/done/training" />
    }
    if (this.state.studentRedirect) {
      return <Redirect to={`/done/booking/${this.state.trainingOwnerId}/${this.state.trainingOwnerUsername}`} />
    }
  }

  
  handleBookedTraining = (booking) => {
    if (booking > 0) {
      return true
    } else if (booking === 0) {
      return false
    }
  }

  availableTraining = (training) => {
    if (training.students.length > 0) {
      let studentCounter = 0
      training.students.map( student => {
        if (this.state.user._id === student.userId) {
          studentCounter++
        }
      })
      if (studentCounter > 0) {
        console.log(studentCounter)
        return false
      } else {
        return true
      }
    } else {
      return true
    }
  }

  render() {
    const { formData, errors } = this.state
    return (
      <>
        {this.renderRedirect()}
        <section className="section m-scene">

          {this.state.isAthlete &&
            <>
              <div className="profile-choices-container index">

                <span onClick={() => {
                  this.clickShow('booked')
                }} className={`small-profile-choices ${this.state.showBookedTrainings ? 'selected-menu-choice' : ''}`}>
                  Booked Trainings</span>

                <span onClick={() => {
                  this.clickShow('not')
                }} className={`small-profile-choices ${this.state.showNotBookedTrainings ? 'selected-menu-choice' : ''}`}>
                  Not Booked Yet</span>

                <span onClick={() => {
                  this.clickShow('add')
                }} className={`small-profile-choices ${this.state.showAdd ? 'selected-menu-choice' : ''}`}>
                  Add New Training Slots</span>

              </div>

              {this.state.showBookedTrainings &&
                <div className='portfolio-container'>
                  <h1 className="title is-2 has-text-centered">Your Next Trainings</h1>
                  <hr />
                  <div className="columns is-multiline scene_element scene_element--fadein">

                    {this.state.user.userTrainings.map(training => (
                      <>
                        {this.handleBookedTraining(training.bookings) &&
                        <Trainings
                          key={training._id}
                          singleTraining={training}
                        />
                        }
                      </>
                    ))}

                  </div>
                </div>
              }

              {this.state.showNotBookedTrainings &&
                <div className='portfolio-container'>
                  <h1 className="title is-2 has-text-centered">Your Trainings Without Booking</h1>
                  <hr />
                  <div className="columns is-multiline scene_element scene_element--fadein">
                    {this.state.user.userTrainings.map(training => (
                      <>
                        {!this.handleBookedTraining(training.bookings) &&
                        <Trainings
                          key={training._id}
                          singleTraining={training}
                        />
                        }
                      </>
                    ))}

                  </div>
                </div>
              }

              {this.state.showAdd &&
                <AddTraining
                  renderRedirect={this.renderRedirect}
                  handleChange={this.handleChange}
                  handleSelect={this.handleSelect}
                  handleSubmit={this.handleSubmit}
                  handleErrors={this.handleErrors}
                  formData={formData}
                  error={errors}
                />
              }
            </>
          }
          {this.state.isStudent &&
            <>
              <div className="profile-choices-container index">

                <span onClick={() => {
                  this.clickShow('booked')
                }} className={`small-profile-choices ${this.state.showBookedTrainings ? 'selected-menu-choice' : ''}`}>Find New Trainings</span>

                <span onClick={() => {
                  this.clickShow('not')
                }} className={`small-profile-choices ${this.state.showNotBookedTrainings ? 'selected-menu-choice' : ''}`}>My Next Trainings</span>

              </div>

              {this.state.showNotBookedTrainings &&
                <div className='portfolio-container'>
                  <h1 className="title is-2 has-text-centered">My Next Trainings</h1>
                  <hr />
                  <div className="columns is-multiline scene_element scene_element--fadein">

                    {this.state.user.studentTrainings.map(training => (
                      <Trainings
                        key={training._id}
                        singleTraining={training}
                      />
                    ))}
                  </div>
                </div>
              }

              {this.state.showBookedTrainings &&
                <div className='portfolio-container'>
                  <h1 className="title is-2 has-text-centered">All Available Trainings</h1>
                  <hr />
                  <div className="columns is-multiline scene_element scene_element--fadein">

                    {this.state.trainings.map(training => (
                      <>
                        {this.availableTraining(training) &&
                      <>
                        {!training.isFull &&
                      <Trainings
                        key={training._id}
                        singleTraining={training}
                        bookTimeSlot={true}
                        trainingPage={true}
                      />
                        }
                      </>
                        }
                      </>
                    ))}
                  </div>
                </div>
              }
            </>
          }
        </section>
      </>

    )
  }

}
export default TrainingsPage