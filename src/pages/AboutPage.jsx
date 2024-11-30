import React from 'react';
import './AboutPage.css'

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <section className="business-story">
        <h2>Our Story</h2>
        <p>
          We started with a passion for bringing people together through delicious food.
          Our journey began as a small family-owned business and has grown into a community
          favorite, serving fresh, locally-sourced ingredients in every dish.
        </p>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to create a memorable dining experience that combines quality ingredients,
          innovative recipes, and a welcoming atmosphere. We believe in supporting local farmers
          and using sustainable practices to make every meal special.
        </p>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="/image/Lavigne.jpg" alt="Head Chef" />
            <h3>John Doe</h3>
            <p>Head Chef</p>
            <p>With over 20 years of experience, Chef John creates magic in the kitchen with his unique flavors and dedication to excellence.</p>
          </div>
          <div className="team-member">
            <img src="/image/new manager.png" alt="Manager" />
            <h3>Jane Smith</h3>
            <p>Manager</p>
            <p>Jane ensures that every guest feels at home and that operations run smoothly. She’s the heart and soul of our customer service.</p>
          </div>
        </div>
      </section>

      <section className="unique-features">
        <h2>What Makes Us Unique</h2>
        <p>
          Our commitment to freshness and innovation sets us apart. From seasonal menu updates to
          handcrafted dishes, we aim to bring something new and exciting to the table with each visit.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
