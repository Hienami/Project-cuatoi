import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router,  Link,  } from 'react-router-dom';

import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


import logo from '../assets/images/logo.webp';
import carticon from '../assets/images/cart-icon.webp';
// Import các component tương ứng


 // Add this line

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };
  return (
 
   <Router>
     
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" className="mr-2"/>
        <p>SHOPPER </p>
      </div>
   
      <ul className="nav-menu">
  <li className={`nav-item ${activeMenu === 'home' ? 'active' : ''}`}>
    <Link style={{textDecoration:'none'}}className="nav-link" to="/Navbar" onClick={() => handleMenuClick('home')}>
      Home
    </Link>
  </li>
  <li className={`nav-item ${activeMenu === 'men' ? 'active' : ''}`}>
    <Link style={{textDecoration:'none'}} className="nav-link" to="/" onClick={() => handleMenuClick('men')}>
      Men
    </Link>
  </li>
  <li className={`nav-item ${activeMenu === 'women' ? 'active' : ''}`}>
      <Link style={{textDecoration:'none'}} className="nav-link" to="/women" onClick={() => handleMenuClick('women')}>
      Women
    </Link>
  </li>
  <li className={`nav-item ${activeMenu === 'kids' ? 'active' : ''}`}>
    <Link style={{textDecoration:'none'}} className="nav-link" to="/kids" onClick={() => handleMenuClick('kids')}>
      Kids
    </Link>
  </li>
  <li className={`nav-item ${activeMenu === 'cart' ? 'active' : ''}`}>
    <Link style={{textDecoration:'none'}}  className="nav-link" to="/cart" onClick={() => handleMenuClick('cart')}>
      Cart
    </Link>
  </li>
</ul>

      <div className="nav-login-cart">
       <div>
  <link to="/Login" /><button className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation" >Login</button>
  <link to="/cart" />
  <img src={carticon} alt='' />
</div>

        <div className='nav-cart-count'>0</div>
      </div>
    </div>
   
    </Router>
   
    
  );
};

export default Navbar;