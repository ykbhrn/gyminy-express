import React from 'react'
import { Link } from 'react-router-dom'
import SportSelect from '../common/SportSelect'

const Trainings = ( { renderRedirect, handleChange, handleSelect, handleSubmit, handleErrors, error, formData } ) => (
  
  <div className="register-container">
    {renderRedirect()}
    <div className="register-section add-training">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <div className="field">
            <label className="label">Training Name:</label>    
            <input
              className={`input ${error.name ? 'is-danger' : ''}`}
              placeholder="Name of the training"
              name="name"
              onChange={handleChange}
              value={formData.name}
            />
            {error.name ? <small className="help is-danger">{error.name}</small> : ''}
          </div>

          <div className="field">
            <label className="label">Date:</label>    
            <input
              type='date'
              className={`input ${error.date ? 'is-danger' : ''}`}
              placeholder="Date Of The Training"
              name="date"
              onChange={handleChange}
              value={formData.date}
            />
            {error.date ? <small className="help is-danger">{error.date}</small> : ''}
          </div>

        </div>

        <div className="input-container">

          <div className="field">
            <label className="label">Time:</label>    
            <input
              type='time'
              className={`input ${error.time ? 'is-danger' : ''}`}
              placeholder="Training Time"
              name="time"
              onChange={handleChange}
              value={formData.time}
            />
            {error.time && <small className="help is-danger">{error.time}</small>}
          </div>

          <div className="field">
            <label className="label">Students Capacity Limit:</label>    
            <input
              type='number'
              className='input'
              placeholder="Training Capacity Limit"
              name="limit"
              onChange={handleChange}
              value={formData.limit}
            />

          </div>

        </div>

        <div className="input-container">

          <div className="field">
            <label className="label">Description:</label>    
            <input
              className={`input ${error.description ? 'is-danger' : ''}`}
              placeholder="Describe Your Training"
              name="description"
              onChange={handleChange}
              value={formData.description}
            />
            {error.description && <small className="help is-danger">{error.description}</small>}
          </div>

          <div className='register-forms field category'>
            <label className="label">Training Category</label>
            <SportSelect
              handleSelect={handleSelect}
            />
            {error.sports && <small className="help is-danger">{error.sports}</small>}
          </div>

        </div>

        <div className="field">
          <button type="submit"  className='button'>Add Training</button>
        </div>
      </form>
    </div>
  </div>
)
export default Trainings