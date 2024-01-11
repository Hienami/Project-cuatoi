import React from 'react'
import './Footer.css'
import footerLogo from '../assets/images/footer-logo.avif'
import instagramIcon from '../assets/images/instagram-icon.avif';
import tiktokIcon from '../assets/images/tiktok-icon.avif'
import facebookIcon from '../assets/images/facebook-icon.avif'
const Footer = () => {
  return (
  <div className='footer'>
<div className='footer-logo'>
    <img src={footerLogo} alt=''/>
    <p>SHOPPER</p>
</div>
<ul className='footer-links'>
    <li>Company</li>
    <li>Products</li>
    <li>Offices</li>
    <li>About</li>
    <li>Contact</li>
</ul>
<div className='footer-social-icon'>
    <div className='footer-icons-container'>
<img src={instagramIcon} alt=''/>
    </div>
    <div className='footer-icons-container'>
<img src={tiktokIcon} alt=''/>
    </div>
    <div className='footer-icons-container'>
<img src={facebookIcon} alt=''/>
    </div>
</div>
<div className='footer-copyright'>
    <hr/>
    <p>Copyright @ 2024 -All Right Reserved</p>
</div>
  </div>
  )
}
export default Footer