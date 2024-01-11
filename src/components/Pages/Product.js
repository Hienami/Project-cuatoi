import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Shopcontext } from '../context/Shopcontext';
import Breadcorum from '../components/Breadcorum/Breadcorum';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';

const Product = () => {
  const { allproduct } = useContext(Shopcontext);
  const { productId } = useParams();
  const product = allproduct.find((e) => e.id === Number(productId));

  return (
    <div>
      <Breadcorum product={product}/>
      <ProductDisplay product={product}/>
    </div>
  );
};

export default Product;