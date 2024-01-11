import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Kids from './components/Pages/Kids';
import Men from './components/Pages/Men';
import Women from './components/Pages/Womens';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './components/Footer/Footer';
import menBanner from './components/assets/images/men-banner.webp';
import womenBanner from './components/assets/images/women-banner.webp';
import kidBanner from './components/assets/images/kid-banner.webp';
import ShopCategory from './Pages/ShopCategory';
const App = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div>
    <Router>
    <Navbar activeMenu={activeMenu} handleMenuClick={handleMenuClick} />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/men" element={<ShopCategory banner={menBanner} category='men' />} />
      <Route path="/women" element={<ShopCategory banner={womenBanner} category='women' />} />
      <Route path="/kids" element={<ShopCategory banner={kidBanner} category='kid' />} />
      <Route path='/product/:productId' element={<Product />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/login' element={<LoginSignup />} />
    </Routes>
    <Footer/>
  </Router>
  </div>
  );
};

export default App;