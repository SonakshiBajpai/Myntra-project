import React from 'react';
import "./Product2.css";

function Product2({ image, type, discount }) {
    return (
        <div className='product'>
            <img src={image} alt="Product" className="product_image"/>
            <div className="product_info">
                <p>{type}</p>
                <strong>{discount}</strong>
                <p>SHOP NOW</p>
            </div>
        </div>
    );
}

export default Product2;
