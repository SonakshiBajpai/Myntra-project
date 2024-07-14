import React from "react";
import "./Checkout.css";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout-left">
        <div className="delivery-check">
          <button>Check delivery time & services</button>
          <button>ENTER PIN CODE</button>
        </div>
        <div className="available-offers">
          <p>Available Offers</p>
          <ul>
            <li>
              10% Instant Discount up to ₹1000 on Kotak Bank Cards on a min
              spend of ₹3,000. TCA
            </li>
          </ul>
        </div>
        <div className="items-selected">
          <h2>2/2 ITEMS SELECTED</h2>
          <div className="item">
            <input type="checkbox" checked />
            <img
              src="https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/27605552/2024/2/15/3d09c59c-485a-4f6d-8d89-d7c83c3f385e1707973213652SILISOULMenPrintedHenleyNeckPureCottonBioFinishPocketsT-shir1.jpg"
              alt="Item 1"
            />
            <div className="item-info">
              <p>SILISOUL</p>
              <p>
                Striped Raglan Sleeves Pure Cotton Bio Finish Oversized T-Shirt
              </p>
              <p>Size: M Qty: 1</p>
              <p>
                ₹1,007 <span className="original-price">₹1,799</span> 44% OFF
              </p>
              <p>14 days return available</p>
            </div>
            <button className="remove-button">REMOVE</button>
          </div>
          <div className="item">
            <input type="checkbox" checked />
            <img
              src="https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/29522450/2024/6/28/fb6e7e3f-8a97-4511-87c4-7c05590f97401719551099895-Stormborn-Unisex-Graphic-Printed-Drop-Shoulder-Pure-Cotton-O-1.jpg"
              alt="Item 2"
            />
            <div className="item-info">
              <p>Stormborn</p>
              <p>
                Unisex Graphic Printed Drop Shoulder Pure Cotton Oversized
                T-Shirt
              </p>
              <p>Size: S Qty: 1</p>
              <p>
                ₹797 <span className="original-price">₹1,399</span> 43% OFF
              </p>
              <p>14 days return available</p>
            </div>
            <button className="remove-button">REMOVE</button>
          </div>
        </div>
      </div>
      <div className="checkout-right">
        <div className="coupons">
          <h3>Apply Coupons</h3>
          <button>APPLY</button>
        </div>
        <div className="donate">
          <p>SUPPORT TRANSFORMATIVE SOCIAL WORK IN INDIA</p>
          <label>
            <input type="checkbox" /> Donate and make a difference
          </label>
          <div className="donate-options">
            <button>₹10</button>
            <button>₹20</button>
            <button>₹50</button>
            <button>₹100</button>
          </div>
        </div>
        <div className="price-details">
          <h3>PRICE DETAILS (2 Items)</h3>
          <p>
            Total MRP <span>₹3,198</span>
          </p>
          <p>
            Discount on MRP <span>- ₹1,394</span>
          </p>
          <p>
            Coupon Discount <span>Apply Coupon</span>
          </p>
          <p>
            Platform Fee <span>FREE</span>
          </p>
          <p>
            Shipping Fee <span>₹79 FREE</span>
          </p>
          <h4>
            Total Amount <span>₹1,804</span>
          </h4>
        </div>
        <button className="place-order-button">PLACE ORDER</button>
      </div>
    </div>
  );
}

export default Checkout;
