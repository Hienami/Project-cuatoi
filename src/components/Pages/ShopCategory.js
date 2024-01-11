import React, {useContext} from 'react'
import './css/ShopCategory.css'
import { Shopcontext } from '../context/Shopcontext';
import dropdownIcon from '../components/assets/images/dropdown-icon.webp';
import Item from '../components/Item/Item';


const ShopCategory = (props) => {
 const {allproduct} = useContext(Shopcontext);
 
  return (
   <div className='shop-category'>
<img className='shopcategoty-banner' src={props.banner} alt=''/>
<div className='shopcategory-indexSort'>
  <p>
    <span>Showing 1-12</span> out of 36 products
  </p>
  <div className='shopcategory-sort'>
    Sort by <img src={dropdownIcon} alt=''/>
  </div>
</div>
<div className='shopcategory-product'>
  {allproduct.map((item,i) =>{
    if(props.category===item.category){
return <Item key={i}
id={item.id}
name={item.name}
image={item.image}
newprice={item.newprice}
oldprice={item.oldprice}/>
    }
    else{
      return null;
    }
  })}
</div>
<div classNamee ="shopcategory-loadmoree">
  Explore More
</div>
   </div>
 
 )
}
export default ShopCategory