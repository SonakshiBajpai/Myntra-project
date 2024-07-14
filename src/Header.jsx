// src/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [activeSection, setActiveSection] = useState('Women');
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const sections = ['Men', 'Women', 'Kids', 'Home & Living', 'Beauty', 'Studio'];

  const dropdownContent = {
    Men: ['T-Shirts', 'Casual Shirts', 'Formal Shirts', 'Jeans', 'Trousers', 'Shorts', 'Track Pants & Joggers', 'Suits', 'Blazers & Waistcoats', 'Sweaters', 'Sweatshirts', 'Jackets', 'Coats', 'Suits', 'Rain Jackets'],
    Women: ['Indian & Fusion Wear', 'Kurtas & Suits', 'Kurtis, Tunics & Tops', 'Sarees', 'Ethnic Wear', 'Leggings, Salwars & Churidars', 'Skirts & Palazzos', 'Dress Materials', 'Lehenga Cholis', 'Duppattas & Shawls', 'Jackets', 'Western Wear', 'Dresses', 'Tops', 'Tshirts', 'Jeans', 'Trousers & Capris', 'Shorts & Skirts', 'Co-ords', 'Playsuits', 'Jumpsuits', 'Shrugs', 'Sweaters & Sweatshirts', 'Jackets & Coats', 'Blazers & Waistcoats', 'Plus Size', 'Maternity', 'Sunglasses & Frames', 'Footwear', 'Flats', 'Casual Shoes', 'Heels', 'Boots', 'Sports Shoes & Floaters', 'Sports & Active Wear', 'Clothing', 'Footwear', 'Sports Accessories', 'Sports Equipment', 'Lingerie & Sleepwear', 'Bra', 'Briefs', 'Shapewear', 'Sleepwear & Loungewear', 'Swimwear', 'Camisoles & Thermals', 'Beauty & Personal Care', 'Makeup', 'Skincare', 'Premium Beauty', 'Lipsticks', 'Fragrances', 'Belts, Scarves & More', 'Watches & Wearables', 'Gadgets', 'Smart Wearables', 'Fitness Gadgets', 'Headphones', 'Speakers', 'Jewellery', 'Fashion Jewellery', 'Fine Jewellery', 'Earrings', 'Backpacks', 'Handbags, Bags & Wallets', 'Luggages & Trolleys'],
    Kids: ['T-Shirts', 'Shirts', 'Shorts', 'Jeans', 'Trousers', 'Jackets', 'Sweatshirts', 'Ethnic Wear', 'Nightwear', 'Footwear', 'Sports Shoes', 'School Shoes', 'Sandals', 'Flip Flops'],
    'Home & Living': ['Bed Linen & Furnishing', 'Curtains & Accessories', 'Cushions & Cushion Covers', 'Mattresses', 'Bath', 'Beach Towels', 'Bath Towels', 'Bath Rugs', 'Robes', 'Living Room', 'Sofa Covers', 'Chair Covers', 'Kitchen & Table', 'Table Cloths', 'Runners', 'Dinnerware & Serveware', 'Storage & Organisation', 'Decor', 'Clocks', 'Mirrors', 'Wall Decor', 'Festive Decor', 'Pooja Essentials', 'Plants & Planters', 'Outdoor', 'Garden Decor', 'Lighting', 'Ceiling Lights', 'Wall Lights', 'Table Lamps', 'Floor Lamps', 'Smart Lights'],
    Beauty: ['Makeup', 'Face', 'Eyes', 'Lips', 'Nails', 'Tools & Brushes', 'Skincare', 'Cleansers', 'Moisturizers', 'Masks', 'Serums', 'Sunscreens', 'Bath & Body', 'Shower Gels', 'Soaps', 'Body Lotions', 'Bath Salts', 'Fragrances', 'Perfumes', 'Deodorants', 'Haircare', 'Shampoos', 'Conditioners', 'Hair Oils', 'Hair Styling', 'Men\'s Grooming', 'Beard Care', 'Shaving', 'Moustache Care'],
    Studio: ['Courses', 'Workshops', 'Tools']
  };

  const handleClick = (section) => {
    if (section === activeSection) {
      setDropdownVisible(!isDropdownVisible);
    } else {
      setActiveSection(section);
      setDropdownVisible(true);
    }
  };

  return (
    <header className="header">
      <Link to="/">
        <div className="logo">
          <img src="https://img.etimg.com/thumb/msid-80732141,width-480,height-360,imgsize-57026,resizemode-75/signs-of-trouble.jpg" alt="Logo" />
        </div>
      </Link>
      
      <nav className="nav">
        {sections.map((section) => (
          <div
            key={section}
            className={`nav-item ${activeSection === section ? 'active' : ''}`}
            onClick={() => handleClick(section)}
          >
            <a href={`#${section.toLowerCase().replace(' ', '-')}`}>{section.toUpperCase()}</a>
            {section === 'Studio' && <span className="new-label">NEW</span>}
            {activeSection === section && isDropdownVisible && (
              <ul className="dropdown">
                {dropdownContent[section].map((item) => (
                  <li key={item} className="dropdown-item">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>
      <div className="search">
        <input type="text" placeholder="Search for products, brands and more" />
      </div>
      <div className="profile-options">
        <Link to="/login">Profile</Link>
        <a href="#wishlist">Wishlist</a>
        <Link to="/checkout">Bag</Link>
      </div>
    </header>
  );
};

export default Header;
