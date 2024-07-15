import React from "react";
import { Link } from "react-router-dom";
import "./AnimalProduct.css";

function Product({ image, type, discount, link }) {
  return (
    <div className="product">
      <Link to={link}>
        <img src={image} alt="Product" />
        <div className="product_info">
          <p>{type}</p>
          <strong>{discount}</strong>
          <p>SHOP NOW</p>
        </div>
      </Link>
    </div>
  );
}

export default Product;
