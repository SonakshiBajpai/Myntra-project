import React from "react";
import "./AnimalProductDetail.css"; // Assuming your CSS file is named styles.css

const AnimalProductDetail = () => {
  return (
    <div className="product-detail">
      <div className="product-image">
        <img
          src="https://www.libas.in/cdn/shop/files/off-white-printed-georgette-dress-libas-1.jpg?v=1705682143"
          alt="Eco-Friendly Floral Dress"
        />
      </div>
      <div className="product-info">
        <div className="product-header">
          <h1 className="product-title">Blue Summer Dress</h1>
          <div className="product-badges">
            <span className="badge peta-approved">PETA Approved</span>
            <span className="badge vegan">Vegan</span>
            <span className="badge cruelty-free">Cruelty-Free</span>
          </div>
        </div>
        <div className="product-description">
          <p>
            This eco-friendly floral dress is made with sustainable materials
            and practices. It is crafted using organic cotton sourced from
            fair-trade suppliers, ensuring minimal environmental impact and
            supporting ethical farming practices.
          </p>
          <p>
            The dress is dyed using natural plant-based dyes, free from harmful
            chemicals and toxins. It is designed for comfort and style,
            featuring a flattering fit and timeless floral pattern.
          </p>
        </div>
        <div className="product-details">
          <div className="product-price">₹ 1200</div>
          <div className="product-reviews">
            <span>⭐⭐⭐⭐</span> <span>(4.8)</span>
          </div>
          <div className="product-size-chart">
            <h3>Size Chart</h3>
            <table>
              <thead>
                <tr>
                  <th>Size</th>
                  <th>Bust (cm)</th>
                  <th>Waist (cm)</th>
                  <th>Hips (cm)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Small</td>
                  <td>85-90</td>
                  <td>65-70</td>
                  <td>90-95</td>
                </tr>
                <tr>
                  <td>Medium</td>
                  <td>90-95</td>
                  <td>70-75</td>
                  <td>95-100</td>
                </tr>
                <tr>
                  <td>Large</td>
                  <td>95-100</td>
                  <td>75-80</td>
                  <td>100-105</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="product-materials">
            <h3>Materials</h3>
            <ul>
              <li>Organic Cotton</li>
              <li>Natural Plant-Based Dyes</li>
              <li>Recycled Polyester Thread</li>
            </ul>
          </div>
          <div className="product-reviews-section">
            <h3>Customer Reviews</h3>
            <div className="review">
              <div className="review-header">
                <span className="review-rating">⭐⭐⭐⭐</span>
                <span className="review-date">March 1, 2024</span>
              </div>
              <p className="review-text">
                "Beautiful dress! Fits perfectly and feels amazing. Love that
                it's eco-friendly."
              </p>
              <p className="review-author">- Sonakshi Bajpai</p>
            </div>
            <div className="review">
              <div className="review-header">
                <span className="review-rating">⭐⭐⭐⭐</span>
                <span className="review-date">March 1, 2024</span>
              </div>
              <p className="review-text">
                "I recently purchased this eco-friendly floral dress and I
                couldn't be happier with my choice. The fabric is incredibly
                soft and breathable, making it perfect for warm weather. I love
                that it's made from organic cotton and dyed with natural
                plant-based dyes, which means it's not only good for my skin but
                also for the environment. The fit is very flattering, and the
                timeless floral pattern makes it versatile enough for both
                casual outings and more formal events. Plus, knowing that this
                dress supports fair-trade practices adds to its charm. Highly
                recommend for anyone looking to add sustainable fashion to their
                wardrobe!"
              </p>
              <p className="review-author">- Aashi P Kumar</p>
            </div>
            <div className="review">
              <div className="review-header">
                <span className="review-rating">⭐⭐⭐⭐⭐</span>
                <span className="review-date">March 16, 2024</span>
              </div>
              <p className="review-text">
                "This eco-friendly dress is both stylish and comfortable, made
                with sustainable materials that I absolutely love!"
              </p>
              <p className="review-author">- Tanishka Sharma</p>
            </div>
          </div>
          <div className="product-actions">
            <button className="add-to-cart-btn">Add to Cart</button>
            <button className="add-to-cart-btn">
              How our Clothes are Manufactured
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalProductDetail;
