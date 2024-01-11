// File: Popular.js
import React from 'react';
import './Popular.css';

import dataproduct from '../assets/data'; // Import mảng dataproduct từ file data.js
import Item from '../Item/Item';

const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className='popular-item'>
        {dataproduct.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              newprice={item.newprice}
              oldprice={item.oldprice}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;