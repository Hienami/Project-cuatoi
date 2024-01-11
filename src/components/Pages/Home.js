import React from 'react'
import Hero from '../Hero/Hero';
import Popular from '../popular/Popular';
import Item from '../Item/Item';
import NewCollections from '../NewCollections/NewCollections';
import NewLetter from '../NewLetter/NewLetter';
import Offers from '../Offers/Offers';

import Footer from '../Footer/Footer';
 const Home = () => {
  return (
  <div>
<Hero/>
<Popular/>
<Item/>
<NewCollections/>
<NewLetter/>
<Offers/>
<Footer/>
   
  </div>
  )
}
export default Home;