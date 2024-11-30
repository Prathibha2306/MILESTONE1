import React from 'react';
import { Link } from 'react-router-dom';
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
        <h4>At Classic Cravings, we're dedicated to providing mouth-watering and nutritious meals that cater to various dietary preferences and requirements.
Our chefs carefully craft each dish using only the finest ingredients, sourced from local farmers and suppliers to ensure optimal flavor and freshness.
From classic comfort food to international cuisine and innovative vegan options, our diverse menu offers something for every palate and lifestyle.
With convenient delivery services, you can enjoy our delectable meals in the comfort of your own home or office.
Whether you're a busy professional, a health-conscious individual, or simply someone who loves great food, we're here to bring happiness to your table.</h4>
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
            <img src="./image/image2.png" alt="Crunchy Delight Combo" />
            <h3>Crunchy Delight Combo</h3>
            <p>A delightful contrast between the bold, savory chicken fries and the classic, comforting French fries.</p>
          </div>
          <div className="menu-item">
            <img src="./image/image3.png" alt="Cheezy Onion Rings" />
            <h3>Cheezy Onion Rings</h3>
            <p>The combination of crispy onion, stretchy cheese, and flavorful batter is irresistible.</p>
          </div>
          <div className="menu-item">
            <img src="./image/image4.png" alt="The Smoky Volcano" />
            <h3>The Smoky Volcano</h3>
            <p>A masterful blend of smoky flavors and spicy undertones, perfect for heat lovers.</p>
          </div>
        </div>
      </section>

      <section className="special-offers">
      <h2>Special Offers</h2>
      <p>Get 20% off your first order!</p>
      <Link to="menu" className="cta-button">
        Order Now
      </Link>
    </section>

      <footer className="footer">
        <div className="social-media">
        </div>
        <p>&copy; 2024@Classic Cravings. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
