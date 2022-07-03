import './Footer.css'
import React from 'react'
import { FaHome, FaPhone, FaMailBulk,FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: '#fff', marginRight: '2rem' }} />
            <div>
              <p>98 Kobujoi</p>
              <p>Nairobi Kenya</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: '#fff', marginRight: '2rem' }}
              />
              +254728585337
            </h4>

          </div>
          <h4>
          <FaMailBulk
          size={20} 
          style={{ color: "#fff", 
          marginRight: "2rem"}} />
          kipshillash@gmail.com
          </h4>
        </div>
      </div>
      <div className='right'>
        <h4>About...</h4>
        <p>about me.........</p>
        <div className='socoal'>
        <FaLinkedin
          size={30} 
          style={{ color: "#fff", 
          marginRight: "2rem"}} />
        <FaFacebook
          size={30} 
          style={{ color: "#fff", 
          marginRight: "1rem"}} />
          <FaTwitter
          size={30} 
          style={{ color: "#fff", 
          marginRight: "1rem"}} />
        </div>
      </div>
    </div>
  )
}

export default Footer
