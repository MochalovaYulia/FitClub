import React from 'react'
import './Footer.css'
import GitHub from '../../assets/github.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'

export const Footer = () => {
  return (
    <div className='footer_container'>
      <hr />
      <div className='footer'>
        <div className='sosial'>
          <img src={GitHub} alt='' />
          <img src={instagram} alt='' />
          <img src={linkedin} alt='' />
        </div>
        <div className='footer-logo'>
          <img src={Logo} alt='' />
        </div>
      </div>
    </div>
  )
}
