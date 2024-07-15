import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-background">
      <div className="profile-container">
        <nav className="navbar">
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
        <div className="profile-picture">
          <img
            src="https://media.istockphoto.com/id/1130907084/photo/portrait-indian-woman-in-sari-at-village-stock-image.jpg?s=612x612&w=0&k=20&c=oRpQJEc2DxAec7kff04Q3gVpmyhD96k97ZUt_jb24lc="
            alt="Aarti Sharma"
          />
        </div>
        <div className="profile-content">
          <div className="profile-details">
            <h1>Meet Aarti Sharma: Master Indian Embroidery Artisan</h1>
            <h3>Biography</h3>
            <p>
              Aarti Sharma is a renowned Indian embroidery artisan celebrated
              for her expertise in various traditional and contemporary
              embroidery techniques. With over 30 years of experience, Aarti has
              become a master in her craft, creating exquisite pieces that
              reflect the rich cultural heritage of India. Born into a family of
              artisans in Jaipur, Rajasthan, Aarti developed a passion for
              embroidery at a young age, learning the intricacies of the art
              from her mother and grandmother.
            </p>

            <h3>Educational Background</h3>
            <p>
              Diploma in Textile Design - National Institute of Fashion
              Technology (NIFT), New Delhi. Workshops and Training - Attended
              numerous workshops on advanced embroidery techniques across India
              and internationally.
            </p>

            <h3>Areas of Expertise</h3>
            <p>
              <strong>Zardozi Embroidery:</strong> A traditional form of
              metallic thread embroidery that originated in Persia and was
              brought to India by the Mughals. Aarti's Zardozi work is
              characterized by its intricate designs and use of gold and silver
              threads, along with sequins, beads, and pearls.
            </p>
            <p>
              <strong>Chikankari Embroidery:</strong> Originating from Lucknow,
              Chikankari involves delicate and intricate hand embroidery on fine
              fabrics like muslin, silk, chiffon, and organza. Aarti's
              Chikankari work features floral patterns and motifs inspired by
              Mughal architecture.
            </p>
            <p>
              <strong>Phulkari Embroidery:</strong> Hailing from Punjab,
              Phulkari translates to "flower work" and is known for its vibrant
              and bold floral patterns. Aarti's Phulkari pieces are celebrated
              for their bright colors and geometric motifs.
            </p>
            <p>
              <strong>Kantha Embroidery:</strong> A traditional embroidery style
              from Bengal, Kantha involves running stitches to create complex
              patterns and narratives. Aarti's Kantha work often depicts stories
              from Indian mythology and rural life.
            </p>
            <p>
              <strong>Mirror Work (Shisha Embroidery):</strong> Originating from
              Gujarat and Rajasthan, this technique incorporates small mirrors
              into the embroidery to create reflective patterns. Aarti excels in
              integrating mirror work with colorful threads and beads.
            </p>

            <p>
              <strong>Kashmiri Embroidery (Kashida):</strong> Known for its
              intricate patterns and use of fine wool or silk threads, Kashmiri
              embroidery often features natural motifs such as flowers, birds,
              and trees. Aarti's Kashida work is admired for its elegance and
              detailed craftsmanship.
            </p>
            <p>
              <strong>Aari Embroidery:</strong> Utilizing a specialized needle
              called an "Aari," this type of embroidery is known for its chain
              stitch patterns. Aarti's Aari work is often used in bridal wear
              and traditional attire, showcasing detailed and elaborate designs.
            </p>
            <p>
              <strong>Pattiwork Embroidery:</strong> This involves applique
              work, where fabric pieces are cut into shapes and sewn onto a base
              fabric to create designs. Aarti's pattiwork is known for its
              vibrant and intricate floral and paisley patterns.
            </p>
            <h3>Achievements and Recognition</h3>
            <p>
              National Award for Handicrafts - Awarded by the Government of
              India for her outstanding contribution to traditional Indian
              embroidery. Exhibitions - Featured in numerous national and
              international exhibitions, including those in New York, Paris, and
              London. Collaborations - Worked with leading fashion designers in
              India and abroad, bringing traditional Indian embroidery to
              contemporary fashion.
            </p>
            <h3>Workshops and Teaching</h3>
            <p>
              Aarti is passionate about preserving the art of traditional Indian
              embroidery and often conducts workshops and training sessions for
              aspiring artisans. She has also collaborated with various
              educational institutions to integrate embroidery courses into
              their curriculum.
            </p>
            <div className="side-image2">
              <img
                src="https://cdn.shopify.com/s/files/1/0612/3670/7497/files/GRGERGEG_beautiful_zardozi_work_embroidery_real_4k_image_58ea1c6a-34b6-40e7-aac5-5041d0cce840_1024x1024.png?v=1675704276"
                alt="Embroidery Art"
              />
              <img
                src="https://i.pinimg.com/736x/10/03/14/10031448fd26c4d92b8e22bd6fdc1b7e.jpg"
                alt="Embroidery Art"
              />
              <img
                src="https://i.pinimg.com/736x/a5/6d/3b/a56d3b7f0302cde74859e340bdb0d119.jpg"
                alt="Embroidery Art"
              />
            </div>
            <h3>Contact and Social Media</h3>
            <p>
              <strong>Website:</strong> <a href="#">www.aartisharma.com</a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:aarti@aartisharma.com">aarti@aartisharma.com</a>
            </p>
            <div className="social-links">
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

export default Profile;
