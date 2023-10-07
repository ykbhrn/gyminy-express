import React from 'react'
import { registerUser, loginUser } from '../../lib/api'
import { Redirect, Link } from 'react-router-dom'
import { setToken } from '../../lib/auth'
import SportSelect from '../common/SportSelect'
import axios from 'axios'

const uploadUrl = process.env.REACT_APP_CLOUDINARY_URL
const uploadPreset = 'rkx7ycea'

class Register extends React.Component {
  state = {
    formData: {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      sports: [],
      userType: '',
      bio: '',
      profileImage: 'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png'
    },
    redirect: false,
    isLoading: false,
    errors: {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      sports: '',
      userType: ''
    }
  }

  handleChange = event => {
    console.log('change evet: ', event.target.name)
    const formData = { ...this.state.formData, [event.target.name]: event.target.value }
    const errors = { ...this.state.errors, [event.target.name]: '' }
    this.setState({ formData, errors })
  }

  // const sports = { ...this.state.formData.sports, [event.target.name]: event.target.value }
  // this.state.formData.sports.push( event.target.value )
  // this.setState({ sports })

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
      this.setState({ loading: true })
      const response = await registerUser(this.state.formData)

      //If registration goes well, run the login user function with the formdata, then set token and redirect to profile page
      if (response.status === 201) {
        const loginResponse = await loginUser(this.state.formData)
        setToken(loginResponse.data.token)
        this.setState({ redirect: true })
      }
      if (response.status === 422) throw new Error()
    } catch (err) {
      console.log('response: ', err.response.data)
      //need to send handleErrors function the errors array from the 422 response as args
      this.handleErrors(err.response.data)
      this.setState({ isLoading: false })
    }
  }

  handleErrors = (errors) => {
    let name = ''
    let email = ''
    let password = ''
    let passwordConfirmation = ''
    let sports = ''
    let userType = 1

    if (errors.name) {
      name = 'Your Username Is Required'
    }
    if (errors.email) {
      email = errors.email
    }
    if (errors.password) {
      password = 'Password is required'
    }
    if (errors.passwordConfirmation) {
      passwordConfirmation = 'Password confirmation does not match'
    }
    if (errors.sports) {
      sports = 'Please choose your sports'
    }
    if (errors.userType) {
      userType = 'Are you looking for trainings or offering trainings? Please choose'
    }

    this.setState({ errors: { name, email, password, passwordConfirmation: passwordConfirmation, sports, userType: userType } })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/done/register" />
    }
  }

  setUrl = imgUrl => {
    const formData = { ...this.state.formData, profileImage: imgUrl }
    this.setState({ formData })
  }

  handleUpload = async event => {
    try {
      this.setState({ isLoading: true })
      const data = new FormData()
      data.append('file', event.target.files[0])
      data.append('upload_preset', uploadPreset)
      const res = await axios.post(uploadUrl, data)
      console.log(res.data)
      this.setState({ isLoading: false })
      this.setUrl(res.data.url)
    } catch (err) {
      console.log('err=', err)
    }
  }


  render() {
    const { formData, errors } = this.state
    console.log(process.env.REACT_APP_CLOUDINARY_BUCKET)
    return (
      <>
        <Link to="/" className="navbar-item">
          <span className="logo-navbar">gyminy</span>
        </Link>
        <div className="register-container">
          <div className="register-section">
            {this.renderRedirect()}
            <div>
              <form onSubmit={this.handleSubmit} >
                <div className="has-text-centered title register-title">Join Our Virtual Gym</div>

                <div className="input-container">
                  <div className="field">
                    <label className="label">Username:</label>
                    <input
                      className={`input ${errors.name ? 'is-danger' : ''}`}
                      placeholder="name"
                      name="name"
                      onChange={this.handleChange}
                      value={formData.name}
                    />
                    {errors.name ? <small className="help is-danger">{errors.name}</small> : ''}
                  </div>

                  <div className="field">
                    <label className="label">Email:</label>
                    <input
                      className={`input ${errors.email ? 'is-danger' : ''}`}
                      placeholder="Email"
                      name="email"
                      onChange={this.handleChange}
                      value={formData.email}
                    />
                    {this.state.errors.email ? <small className="help is-danger">{errors.email}</small> : ''}
                  </div>
                </div>


                <div className="input-container">
                  <div className="field">
                    <label className="label">Password:</label>
                    <input
                      className={`input ${errors.password ? 'is-danger' : ''}`}
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={this.handleChange}
                      value={formData.password}
                    />
                    {errors.password && <small className="help is-danger">{errors.password}</small>}
                  </div>

                  <div className="field">
                    <label className="label">Password Confirmation:</label>
                    <input
                      type="password"
                      className={`input ${errors.passwordConfirmation ? 'is-danger' : ''}`}
                      placeholder="Password Confirmation"
                      name="passwordConfirmation"
                      onChange={this.handleChange}
                      value={formData.passwordConfirmation}
                    />
                    {errors.passwordConfirmation && <small className="help is-danger">{errors.passwordConfirmation}</small>}
                  </div>
                </div>

                <div className="register-forms-container field">
                  <div className='register-forms'>
                    <label className="label">What are you interested in?</label>
                    <SportSelect
                      handleSelect={this.handleSelect}
                    />
                    {errors.sports && <small className="help is-danger">{errors.sports}</small>}
                  </div>

                  <div className='register-forms register-type'>
                    <label className="label">Do You Wanna Offer Trainings(Athlete) Or Find Trainings(Student)</label>
                    <label className='radio'>
                      <input type="radio"
                        name="userType"
                        value={1}
                        onChange={this.handleChange}
                      ></input>
                      <span className="register-forms-span">Student</span>
                    </label>

                    <label className='radio'>
                      <input type="radio"
                        name="userType"
                        value={2}
                        onChange={this.handleChange}
                      ></input>
                      <span className="register-forms-span">Athlete</span>
                    </label>
                  </div>
                  {errors.userType && <small className="help is-danger">{errors.userType}</small>}
                </div>

                <div className="input-container">
                  <div className="field">
                    <label className="label">Bio:</label>
                    <textarea
                      className='textarea'
                      rows="4"
                      cols="40"
                      placeholder="Your Bio"
                      name="bio"
                      onChange={this.handleChange}
                      value={formData.bio}
                    />
                  </div>

                  <div className="field">
                    <label className="label">Upload Your Profile Picture</label>
                    <div className="upload-portfolio-register">
                      <input
                        className='input'
                        type="file"
                        onChange={this.handleUpload}
                      />
                      <div>
                        {formData.profileImage ? <img src={formData.profileImage} alt="User's Upload" /> : ''}
                      </div>
                    </div>
                  </div>

                </div>

                {this.state.isLoading &&
                  <>
                    <img src='https://res.cloudinary.com/djq7pruxd/image/upload/v1592484110/loading_ngtamg.svg' className='loading-image-register' />
                  </>
                }
                {!this.state.isLoading &&
                  <div className="field">
                    <button type="submit" className={`button is-fullwidth register-button ${this.state.loading ? 'is-loading' : ''}`}>Register</button>
                  </div>
                }
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Register
