import React from 'react';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="page-header">
        <h1>Contact Us</h1>
        <p>Get in touch us.</p>
      </div>

      <div className="contact-content">
        <section className="contact-info">
          <h2>Contact Information</h2>
          <div className="info-grid">
            <div className="info-card">
              <h3>Email</h3>
              <p>info@gentlegivers.org</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact; 