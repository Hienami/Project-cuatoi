import React from 'react'
import './ProductDisplay.css'

import staricon from "../assets/star icon.webp";
import stardullicon from "../assets/star dull-icon.avif";
 const ProductDisplay = (props) => {
  const {product} = props;
    return (
    <div className='productdisplay'>
        <div className='productdisplay-left'>
            <div className='productdisplay-img-list'>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
            </div>
            <div className='productdisplay-img'>
                <img className='productdisplay-main-img' src={product.image} alt=''/>
            </div>
</div>
<div className='productdisplay-right'>
    <h1> {product.name}</h1>
    <div className='productdisplay-right-star'>
        <img src={product.image} alt=""/>
        <img src={product.image} alt=""/>
        <img src={product.image} alt=""/>
        <img src={product.image} alt=""/>
    </div>
    <div className='productdisplay-img'>
        <img className='productdisplay-main-img' src={product.image} alt=''/>
    </div>
    </div>
    <div className='productdisplay-right'>
    <h1> {product.name}</h1>
    <div className='productdisplay-right-star'>
        <img src={staricon} alt=""/>
        <img src={staricon} alt=""/>
        <img src={staricon} alt=""/>
        <img src={staricon} alt=""/>
        <img src={stardullicon} alt=""/>
        <p>(122)</p>
    </div>
    <div className='productdisplay-right-prices'>
        <div className='productdisplay-right-price-old'>${product.old.price}</div>
        <div className='productdisplay-right-price-old'>${product.new.price}</div>
    </div>
    <div className='productdisplay-right-description'>
        A lightweight,usually kitted,pullower shirt, close fitting and a round neckline and short sleeves, worn as an undershirt 

    </div>
    <div className='productdisplay-right-size'>
        <h1>Select Size</h1>
        <div className='productdisplay-right-size'>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
        </div>
    </div>
    </div>

    </div>
  )
}
export default ProductDisplay