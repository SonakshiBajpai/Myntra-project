import React from "react";
import "./Product2.css";

function Product2({ image, type, discount }) {
  return (
    <div className="product2">
      <img src={image} alt={type} className="product2_image" />
      <div className="product2_info">
        <p className="product2_type">{type}</p>
        <p className="product2_discount">{discount}</p>
      </div>
    </div>
  );
}

export default Product2;
