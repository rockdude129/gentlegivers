import React from 'react';

const Mission = () => {
  return (
    <div className="mission-page">
      <div className="page-header">
        <h1>Our Mission</h1>
        <p>Making a difference in children's lives through community support</p>
      </div>

      <div className="mission-content">
        <section className="mission-statement">
          <h2>Our Vision</h2>
          <p>
            We envision a world where every child has access to the basic necessities they need
            to grow, learn, and thrive. Through our community-driven approach, we aim to bridge
            the gap between those who can give and those who need support.
          </p>
        </section>

        <section className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Compassion</h3>
              <p>We approach every situation with empathy and understanding.</p>
            </div>
            <div className="value-card">
              <h3>Community</h3>
              <p>We believe in the power of collective action and support.</p>
            </div>
            <div className="value-card">
              <h3>Dignity</h3>
              <p>We treat everyone with respect and maintain their dignity.</p>
            </div>
            <div className="value-card">
              <h3>Sustainability</h3>
              <p>We promote responsible giving and long-term solutions.</p>
            </div>
          </div>
        </section>

        <section className="goals-section">
          <h2>Our Goals</h2>
          <ul className="goals-list">
            <li>Expand our reach to more schools and communities</li>
            <li>Increase the number of families we support</li>
            <li>Develop sustainable partnerships with local organizations</li>
            <li>Create awareness about the importance of community support</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Mission; 