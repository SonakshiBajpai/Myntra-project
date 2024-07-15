import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "./IndianHandloomProductDetail.css"; // Assuming your CSS file is named styles.css

const IndianHandloomProductDetail = () => {
  return (
    <div className="product-detail">
      <div className="product-image">
        <img
          src="https://cdn.stylecaret.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/5/2/52749647835_e16c19559b_o.jpg"
          alt="Eco-Friendly Floral Dress"
        />
      </div>
      <div className="product-info">
        <div className="product-header">
          <h1 className="product-title">Blue Zardosi Lehenga</h1>
          <div className="product-badges">
            <span className="badge peta-approved"></span>
            <span className="badge vegan"></span>
            <span className="badge cruelty-free"></span>
          </div>
        </div>
        <div className="product-description">
          <p>
            This exquisite Indian embroidery lehenga celebrates traditional
            craftsmanship and sustainable practices. Each piece is meticulously
            handcrafted using ethically sourced materials, ensuring minimal
            environmental impact and supporting local artisans.
          </p>
          <p>
            The lehenga is adorned with intricate Indian embroidery, showcasing
            centuries-old techniques passed down through generations. It
            features vibrant colors and timeless patterns that highlight the
            rich cultural heritage of India.
          </p>
        </div>
        <div className="product-details">
          <div className="product-price">₹ 2500</div>
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
              <li>Organic Silk</li>
              <li>Handcrafted Embroidery Threads</li>
              <li>Recycled Gold Zari</li>
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
                "The Zardozi embroidery on this lehenga is breathtaking! The
                intricate details and use of metallic threads make it a true
                work of art. I feel like royalty wearing it"
              </p>
              <p className="review-author">- Sonakshi Bajpai</p>
            </div>
            <div className="review">
              <div className="review-header">
                <span className="review-rating">⭐⭐⭐⭐</span>
                <span className="review-date">March 1, 2024</span>
              </div>
              <p className="review-text">
                "This lehenga is a testament to the artisans' skill. The Zardozi
                embroidery is so intricate and meticulously done. It's not just
                clothing; it's a piece of art that tells a story of
                craftsmanship and tradition"
              </p>
              <p className="review-author">- Aashi P Kumar</p>
            </div>
            <div className="review">
              <div className="review-header">
                <span className="review-rating">⭐⭐⭐⭐⭐</span>
                <span className="review-date">March 16, 2024</span>
              </div>
              <p className="review-text">
                "The Zardozi embroidery on this lehenga is beyond stunning! The
                metallic threads and embellishments are so finely detailed,
                making it a standout piece in my wardrobe. It's a perfect blend
                of tradition and modern elegance"
              </p>
              <p className="review-author">- Tanishka Sharma</p>
            </div>
          </div>
          <div className="product-actions">
            <button className="add-to-cart-btn">Add to Cart</button>
            <button className="add-to-cart-btn">
              <Link to="/profile" className="product-reviews-link">
                Meet the Artesian !
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndianHandloomProductDetail;
