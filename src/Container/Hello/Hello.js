import './Hello.css'
import React from 'react'
import Basketball from '../assets/kip.jpg'
import { Link } from 'react-router-dom'

const Hello = () => {
  return (
    <div className="helo">
      <div className="mask">
        <img className="into-img" src={Basketball} alt="Basketball" />
      </div>
      <div className="content">
        <p>Hello, I am Hillary.</p>
        <h1>A Software Developer.</h1>
<Link to="projects" className='btn'>PROJECTS</Link>
<Link to="/contact" className='btn btn-light'>CONTACT</Link>
      </div>
    </div>
  )
}

export default Hello
