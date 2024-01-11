import React from 'react'
import './Breadcorum.css'
import arowicon from '../assets/images/arrow-icon.avif'
 const Breadcorum = (props) => {
 const {product} = props;
    return (
   <div className='breadcrum'>
HOME <img src={arowicon} alt=''/> SHOP <img src={arowicon} alt=''/> {product.category} <img src={arowicon} alt=''/> {product.name}
   </div>
  )
}
export default Breadcorum