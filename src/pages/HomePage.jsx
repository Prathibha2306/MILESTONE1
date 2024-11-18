import React from 'react';
import './HomePage.css'; 

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="hero-section">
        <h1>Welcome to Classic Cravings</h1>
        <p>Where every bite is made with love and fresh ingredients!</p>
      </header>
      
      <section className="about-service">
        <h2>About Our Food Service</h2>
        <p>We are passionate about delivering delicious and healthy meals right to your doorstep. Our menu is designed with diverse tastes in mind, offering a variety of fresh, locally-sourced dishes that are sure to please everyone.</p>
      </section>

      <section className="menu-highlights">
        <h2>Featured Dishes</h2>
        <div className="menu-items">
          <div className="menu-item">
            <img src="/image/image1.png" alt="Rice with Mixed Manchurian" />
            <h3>Rice with Mixed Manchurian</h3>
            <p>A fusion delight combining fragrant fried rice with a medley of crispy Manchurian balls, made with vegetables and protein options.</p>
          </div>
          <div className="menu-item">
            <img src="/image/image2.png" alt="Crunchy Delight Combo" />
            <h3>Crunchy Delight Combo</h3>
            <p>A delightful contrast between the bold, savory chicken fries and the classic, comforting French fries.</p>
          </div>
          <div className="menu-item">
            <img src="/image/image3.png" alt="Cheezy Onion Rings" />
            <h3>Cheezy Onion Rings</h3>
            <p>The combination of crispy onion, stretchy cheese, and flavorful batter is irresistible.</p>
          </div>
          <div className="menu-item">
            <img src="/image/image4.png" alt="The Smoky Volcano" />
            <h3>The Smoky Volcano</h3>
            <p>A masterful blend of smoky flavors and spicy undertones, perfect for heat lovers.</p>
          </div>
        </div>
      </section>

      <section className="special-offers">
        <h2>Special Offers</h2>
        <p>Get 20% off your first order!</p>
        <button className="cta-button">Order Now</button>
      </section>

      <footer className="footer">
        <div className="social-media">
          {/* Social media icons here */}
        </div>
        <p>&copy; 2024@Classic Cravings. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
