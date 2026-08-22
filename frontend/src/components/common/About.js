import React from 'react'
import { Link } from 'react-router-dom'

// Kept in step with the options in SportSelect.js
const disciplines = [
  'Strength and Conditioning',
  'Powerlifting',
  'Weightlifting',
  'Combat Sports',
  'Yoga',
  'Breathing Exercises',
  'Aerobic'
]

const About = () => (
  <div className="about-container">

    <div className="logo-navbar-container">
      <div className="logo-container">
        <div className="logo">gymIny</div>
        <div className="slogan">VIRTUAL GYM, REAL RESULTS</div>
      </div>
      <div className="home-navbar">
        <Link to="/"><span className="home-navbar-item">Home</span></Link>
        <Link to="/register"><span className="home-navbar-item">Join GYMINY</span></Link>
      </div>
    </div>

    <div className="about-content">

      <section className="about-section">
        <h1 className="about-title">About Us</h1>
        <p className="about-lead">
          Gyminy is where coaches and the people they train find each other — and
          where the work between sessions is visible.
        </p>
        <p>
          Most training happens alone. You book a class, you turn up, you leave,
          and nothing connects that hour to the next one. The coach never sees
          how the week went. You never see how anyone else is finding the same
          movement you are stuck on. Gyminy exists to close that gap: sessions
          you can actually book, and a place to put the work in between.
        </p>
      </section>

      <section className="about-section">
        <h2 className="about-heading">Two ways to be here</h2>
        <div className="about-grid">
          <div className="about-card">
            <h3 className="about-card-title">Athletes</h3>
            <p>
              You coach. Publish a session with a date, a time and a capacity,
              and it appears for everyone training in your discipline. When
              someone books, you are told; when the last place goes, the session
              marks itself full so nobody turns up to a room with no space.
            </p>
            <p>
              Your profile is your portfolio. Post the demonstrations, the
              technique breakdowns and the writing that shows how you coach,
              rather than asking people to take it on trust.
            </p>
          </div>
          <div className="about-card">
            <h3 className="about-card-title">Students</h3>
            <p>
              You train. Pick the disciplines you care about when you sign up,
              find sessions that fit, and book a place in one click. Follow the
              coaches whose approach makes sense to you and their work turns up
              in your feed.
            </p>
            <p>
              Everything you book stays on your profile, so the record of what
              you have actually done builds up on its own.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2 className="about-heading">What you can do here</h2>
        <div className="about-grid">
          <div className="about-card">
            <h3 className="about-card-title">Book real sessions</h3>
            <p>
              Every session carries a date, a time, a description and a hard
              limit on places. Booking is immediate, the coach is notified, and
              the session closes itself when it fills.
            </p>
          </div>
          <div className="about-card">
            <h3 className="about-card-title">Build a portfolio</h3>
            <p>
              Photos, video and long-form articles all live on your profile.
              Film a lift from the side, write up what changed in your training
              this month, or post the session you are proud of.
            </p>
          </div>
          <div className="about-card">
            <h3 className="about-card-title">Talk to people</h3>
            <p>
              Follow other members, like and comment on what they post, search
              for anyone by name, and message coaches directly when you have a
              question that does not belong in a comment thread.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2 className="about-heading">The disciplines</h2>
        <p>
          Everyone picks what they train when they join, and it is what connects
          sessions to the people looking for them.
        </p>
        <div className="about-pills">
          {disciplines.map(discipline => (
            <span className="about-pill" key={discipline}>{discipline}</span>
          ))}
        </div>
      </section>

      <section className="about-section">
        <h2 className="about-heading">About the project</h2>
        <p>
          Gyminy began as a capstone project — a full-stack build putting a
          React frontend on an Express and MongoDB API, with authentication,
          image and video hosting, booking, messaging and notifications all
          written from scratch rather than assembled from a template.
        </p>
        <p>
          It sat untouched for a couple of years and was brought back up in
          2026: dependencies replaced, secrets moved out of the source, and the
          original database recovered and folded back in, which is why some of
          the training sessions and posts you will find here are older than
          others.
        </p>
      </section>

      <section className="about-section about-cta">
        <h2 className="about-heading">Start training</h2>
        <p>
          Sign up as an athlete if you have something to teach, or as a student
          if you are looking for someone to teach you.
        </p>
        <Link to="/register">
          <button className="button about-button">Join GYMINY</button>
        </Link>
      </section>

    </div>
  </div>
)

export default About
