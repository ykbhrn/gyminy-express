import React from "react";
import { Link } from "react-router-dom";

// Kept in step with the options in SportSelect.js
const disciplines = [
  "Strength and Conditioning",
  "Powerlifting",
  "Weightlifting",
  "Combat Sports",
  "Yoga",
  "Breathing Exercises",
  "Aerobic",
];

const About = () => (
  <div className="about-container">
    <div className="logo-navbar-container">
      <div className="logo-container">
        <div className="logo">gymIny</div>
        <div className="slogan">VIRTUAL GYM, REAL RESULTS</div>
      </div>
      <div className="home-navbar">
        <Link to="/">
          <span className="home-navbar-item">Home</span>
        </Link>
        <Link to="/register">
          <span className="home-navbar-item">Join GYMINY</span>
        </Link>
      </div>
    </div>

    <div className="about-content">
      <section className="about-section">
        <h1 className="about-title">About Us</h1>
        <p className="about-lead">
          Gyminy is where the best coach for you isn't the closest one.
        </p>
        <p>
          Distance used to decide who you could train with. Not anymore. Browse
          a coach's videos, articles and past sessions, and choose based on how
          they actually coach, not what happens to be in your area. And for
          coaches, that works both ways: your audience stops being your postcode
          and starts being anyone in the world who's looking for exactly what
          you teach.
        </p>
      </section>

      <section className="about-section">
        <h2 className="about-heading">Two ways to be here</h2>
        <div className="about-grid">
          <div className="about-card">
            <h3 className="about-card-title">Athletes</h3>
            <p>
              You coach. Publish a live session with a date, a time and a
              capacity, and it's instantly visible to everyone training in your
              discipline anywhere. When someone books, you're told; when the
              last place goes, the session closes itself.
            </p>
            <p>
              Your profile does the convincing for you. Post the demonstrations,
              the technique breakdowns and the writing that show how you coach,
              so people can see it before they ever have to take it on trust.
            </p>
          </div>
          <div className="about-card">
            <h3 className="about-card-title">Students</h3>
            <p>
              You train. Pick the disciplines you care about, browse coaches by
              what they actually show rather than where they're based, and book
              a place in one click. Follow the ones whose approach makes sense
              to you and their work starts turning up in your feed.
            </p>
            <p>
              Every session you book stays on your profile. Record of what
              you've actually done builds up on its own.
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
              Every session runs live over video: a date, a time, a real coach,
              and a capacity. Booking is immediate, the coach is notified, and
              the session closes itself the moment it fills.
            </p>
          </div>
          <div className="about-card">
            <h3 className="about-card-title">Build a portfolio</h3>
            <p>
              Photos, video and long-form articles all live on your profile.
              Film a lift from the side, write up what changed in your training
              this month, or post the session you're proud of — it's what people
              see before they ever book you.
            </p>
          </div>
          <div className="about-card">
            <h3 className="about-card-title">Talk to people</h3>
            <p>
              Follow other members, like and comment on what they post, search
              for anyone by name, and message coaches directly for the questions
              that don't belong in a comment thread.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2 className="about-heading">The disciplines</h2>
        <p>
          Pick what you train when you join, it's what connects your sessions to
          the people actually looking for them, wherever they are.
        </p>
        <div className="about-pills">
          {disciplines.map((discipline) => (
            <span className="about-pill" key={discipline}>
              {discipline}
            </span>
          ))}
        </div>
      </section>

      <section className="about-section">
        <h2 className="about-heading">About the project</h2>
        <p>
          Gyminy began as a capstone project: a full-stack build putting a React
          frontend on an Express and MongoDB API, with authentication, image and
          video hosting, booking, messaging and notifications all written from
          scratch rather than assembled from a template.
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
          Sign up as an athlete if you have something to teach the world, or as
          a student if you're ready to find the coach who's actually right for
          you.
        </p>
        <Link to="/register">
          <button className="button about-button">Join GYMINY</button>
        </Link>
      </section>
    </div>
  </div>
);

export default About;
