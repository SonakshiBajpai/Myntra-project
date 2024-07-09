import React from 'react';
import "./Product.css";

function Product({image,type,discount}) {
  return (
    <div className='product'>
        <img src={image} alt="Product" />
        <div className="product_info">
            
            <p>{type}</p>
            <strong>{discount}</strong>
            <p>SHOP NOW</p>
        </div>
    </div>
  );
}

export default Product;
