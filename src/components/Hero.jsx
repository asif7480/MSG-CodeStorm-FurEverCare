import React from 'react'
import './Hero.css';
import { Link } from 'react-router-dom';

// function Hero({ title, description, btnText="", btnLink="" }) {
function Hero({ title, description, btnText, btnLink }) {
  return (
    <>
    <section className="hero">
    <div className="container">
      <h1 className="display-4 fw-bold">{title}</h1>
      <p className="lead">{ description}</p>
      {
        btnText !== "" && btnLink !== "" && (
            <Link to={btnLink} className="btn btn-light btn-lg mt-3">{btnText}</Link>
        )
      }
    </div>
  </section>
    </>
  )
}

export default Hero
