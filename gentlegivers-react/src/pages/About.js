import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      <div className="page-header">
        <h1>About Us</h1>
        <p>Learn more about our mission and impact</p>
      </div>
      
      <div className="about-content">
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            Gentle Givers was founded with a simple yet powerful mission: to ensure that every child
            has access to the basic necessities they need to thrive. We believe that every child
            deserves to have clean clothes, warm blankets, and toys that bring joy to their lives.
          </p>
        </section>

        <section className="impact-section">
          <h2>Our Impact</h2>
          <div className="impact-stats">
            <div className="stat-card">
              <h3>1000+</h3>
              <p>Families Helped</p>
            </div>
            <div className="stat-card">
              <h3>50+</h3>
              <p>Schools Participating</p>
            </div>
            <div className="stat-card">
              <h3>5000+</h3>
              <p>Items Donated</p>
            </div>
          </div>
        </section>

        <section className="team-section">
          <h2>Our Team</h2>
          <p>
            We are a dedicated group of volunteers who believe in the power of community and
            collective action. Our team works tirelessly to collect, sort, and distribute
            donations to those who need them most.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About; 