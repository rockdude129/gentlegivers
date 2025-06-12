import React from 'react';
import { Link } from 'react-router-dom';
import aboutImg from '../assets/iStock-1362787530-1_11zon-1024x683.webp';

const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Gentle Givers</h1>
          <h2>Making a Difference in Children's Lives</h2>
          <p className="hero-description">
            We collect and distribute essential items to children in need, ensuring they have
            access to clean clothes, warm blankets, and toys that bring joy to their lives.
          </p>
          <div className="hero-buttons">
            <button onClick={() => scrollToSection('about')} className="cta-button primary">Learn More</button>
            <Link to="/contact" className="cta-button secondary">Get Involved</Link>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            Gentle Givers was founded by 3 high schoolers with a simple yet powerful mission: to ensure that every child
            has access to the basic necessities they need to thrive. We believe that every child
            deserves to have clean clothes, warm blankets, and toys that bring joy to their lives.
          </p>
          <img src={aboutImg} alt="About Gentle Givers" className="about-img" />
        </div>
      </section>

      <section className="mission-section">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            At Gentle Givers, we believe that every child deserves access to the basic necessities
            they need to thrive. Our mission is to bridge the gap between those who can give and
            those who need support, creating a community where no child goes without.
          </p>
          <div className="mission-values">
            <div className="value-item">
              <h3>Compassion</h3>
              <p>We approach every situation with empathy and understanding.</p>
            </div>
            <div className="value-item">
              <h3>Community</h3>
              <p>We believe in the power of collective action and support.</p>
            </div>
            <div className="value-item">
              <h3>Dignity</h3>
              <p>We treat everyone with respect and maintain their dignity.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Collection</h3>
            <p>We collect gently used clothes, toys, and other essential items from elementary and middleschools.</p>
          </div>
          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Sorting</h3>
            <p>We organize, measure, and donate the items collected to children in need.</p>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Rewards</h3>
            <p>We thank and reward classrooms that helped to donate.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Join Our Mission</h2>
        <p>Together, we can make a difference in the lives of children in our community.</p>
        <div className="cta-buttons">
          <Link to="/contact" className="cta-button primary">Donate Now</Link>
          <button onClick={() => scrollToSection('about')} className="cta-button secondary">Learn More</button>
        </div>
      </section>
    </div>
  );
};

export default Home; 