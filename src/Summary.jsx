// Summary.jsx
import React from "react";
import "./Summary.css";

const Summary = () => {
  return (
    <div className="artisan-profile-background">
      <div className="artisan-profile-container">
        <nav className="artisan-navbar">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="artisan-profile-picture"></div>
        <div className="artisan-profile-content">
          <div className="artisan-profile-details">
            <h1>Sustainable Clothing Manufacturing: A Comprehensive Guide</h1>
            <h3>Introduction</h3>
            <p>
              Sustainable clothing manufacturing focuses on creating garments
              with minimal environmental impact while ensuring ethical labor
              practices. This approach aims to address the fashion industry's
              significant contribution to global pollution and exploitation.
            </p>

            <h3>Key Principles</h3>
            <p>
              Sustainable clothing manufacturing adheres to several key
              principles: using eco-friendly materials, minimizing waste,
              reducing water and energy consumption, ensuring fair labor
              practices, and creating durable products.
            </p>

            <h3>Sustainable Materials</h3>
            <p>
              <strong>Organic Cotton:</strong> Grown without harmful pesticides
              or synthetic fertilizers, reducing environmental impact.
            </p>
            <p>
              <strong>Recycled Fibers:</strong> Made from post-consumer waste,
              such as plastic bottles or discarded textiles, reducing landfill
              waste.
            </p>
            <p>
              <strong>Hemp and Bamboo:</strong> Fast-growing, requires less
              water, and naturally pest-resistant.
            </p>
            <p>
              <strong>Lyocell (Tencel):</strong> Made from wood pulp using a
              closed-loop process that recycles water and solvents.
            </p>

            <h3>Eco-Friendly Production Processes</h3>
            <p>
              <strong>Water Conservation:</strong> Implementing closed-loop
              water systems and low-water dyeing techniques to minimize water
              usage and pollution.
            </p>
            <p>
              <strong>Natural and Low-Impact Dyes:</strong> Using plant-based
              dyes or low-impact synthetic dyes to reduce chemical pollution.
            </p>
            <p>
              <strong>Energy Efficiency:</strong> Utilizing renewable energy
              sources and energy-efficient machinery in production facilities.
            </p>
            <p>
              <strong>Waste Reduction:</strong> Adopting zero-waste pattern
              cutting techniques and recycling fabric scraps to minimize waste.
            </p>

            <h3>Ethical Labor Practices</h3>
            <p>
              Sustainable manufacturing prioritizes fair wages, safe working
              conditions, and workers' rights throughout the supply chain. This
              includes regular audits, transparency, and adherence to
              international labor standards.
            </p>

            <h3>Circular Economy Approach</h3>
            <p>
              Designing for longevity and recyclability is crucial in
              sustainable manufacturing. This involves creating durable
              garments, using mono-materials for easy recycling, and
              implementing take-back programs for end-of-life products.
            </p>

            <div className="artisan-image-gallery">
              <div className="artisan-side-image">
                <img
                  src="https://www.organicandmore.com/wp-content/uploads/2020/07/sustainable-clothing-ok.jpg"
                  alt="Sustainable Materials"
                />
              </div>
              <div className="artisan-side-image">
                <img
                  src="https://miro.medium.com/v2/resize:fit:1000/0*rvOKtbb99BVQcNLd.png"
                  alt="Eco-Friendly Production"
                />
              </div>
              <div className="artisan-side-image">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT7h_t78wPd9uvBHEdQDL-n_P_9Jvql3qbIw&s"
                  alt="Circular Fashion"
                />
              </div>
            </div>

            <h3>Certifications and Standards</h3>
            <p>
              Various certifications ensure sustainable practices, including:
            </p>
            <ul>
              <li>Global Organic Textile Standard (GOTS)</li>
              <li>OEKO-TEX Standard 100</li>
              <li>Fairtrade Textile Standard</li>
              <li>Cradle to Cradle Certified</li>
              <li>B Corp Certification</li>
            </ul>

            <h3>Challenges and Future Outlook</h3>
            <p>
              While sustainable manufacturing is gaining traction, challenges
              remain, including higher production costs, consumer education, and
              scaling up sustainable practices. However, with increasing
              consumer demand and technological advancements, the future of
              sustainable fashion looks promising.
            </p>

            <h3>Contact and Resources</h3>
            <p>
              <strong>Website:</strong>{" "}
              <a href="#">www.sustainablefashion.org</a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@sustainablefashion.org">
                info@sustainablefashion.org
              </a>
            </p>
            <div className="artisan-social-links">
              <a href="#">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                  alt="Facebook"
                />
              </a>
              <a href="#">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
                  alt="Instagram"
                />
              </a>
              <a href="#">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                  alt="Twitter"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
