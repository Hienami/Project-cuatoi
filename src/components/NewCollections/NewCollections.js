import React from 'react';
import './NewCollections.css';
import collection1 from '../assets/images/collection-1.avif';
import collection2 from '../assets/images/collection2.avif';
import collection3 from '../assets/images/collection3.avif';
import collection4 from '../assets/images/collection4.avif';
import Item from '../Item/Item';

const NewCollections = () => {
  // Assuming collection1 is an array of objects with properties id, name, and image
  const collectionData = [
    { id: 1, name: 'Item 1', image: collection1 },
    { id: 2, name: 'Item 2', image: collection2 },
    { id: 3, name: 'Item 2', image: collection3 },
    { id: 4, name: 'Item 2', image: collection4 },
    
    // Add more items as needed
  ];

  return (
    <div className='newcollection'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className='newcollection-item'>
        {collectionData.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
            
            />
          );
        })}
      </div>
      
    </div>
  );
};

export default NewCollections;