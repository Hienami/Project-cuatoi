import React from 'react'
import './NewLetter.css'
 const NewLetter = () => {
  return (
 <div className='newletter'>
    <h1> Get Exclusive Ofeers On Your Email</h1>
    <p>Subcribe to our newletter and stay updated</p>
    <div>
        <input type='email' placeholder='your Email id'/>
        <button>Subcribe</button>
    </div>
 </div>
  )
}
export default NewLetter