import React from 'react'
import './Hero.css'
import handicon from '../assets/images/hand-icon.webp'
import arrowicon from '../assets/images/arrow-icon.avif'
import heroimg from '../assets/images/heroimg.avif'
 const Hero = () => {
  return (
   <div className='hero'>
    <div className='hero-left'>
        <h2>NEW ARRIVAL ONLY</h2>
        <div>
            <div className='hero-hand-icon'>
                <p>new</p>
                <img src={handicon} alt=''/>
            </div>
            <p>collections</p>
            <p>for everyone</p>
        </div>
        <div className='hero-latest-btn'>
            <div>Latest Collection</div>
            <img src={arrowicon} alt=''></img>
        </div>
    </div>
    <div className='hero-right'>
        <img src={heroimg} alt=''/>
    </div>
   </div>
  )
}
export default Hero