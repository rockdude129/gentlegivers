import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import heartIcon from './assets/hearticon.png';
import clothesImage from './assets/clothes.png';
import toysImage from './assets/toys.png';
import menuIcon from './assets/menu.svg';
import closeIcon from './assets/close.svg';

// Import pages
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const showSidebar = () => setSidebarOpen(true);
  const hideSidebar = () => setSidebarOpen(false);

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="container nav-container">
            <Link to="/" className="logo">
              <img src={heartIcon} alt="Gentle Givers Logo" height="48" />
            </Link>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="menuButton" onClick={showSidebar}>
              <img src={menuIcon} alt="Menu" />
            </div>
          </div>
          <ul className="sidebar" style={{ display: sidebarOpen ? 'flex' : 'none' }}>
            <li onClick={hideSidebar}>
              <Link to="/"><img src={closeIcon} alt="Close" /> Close</Link>
            </li>
            <li><Link to="/" onClick={hideSidebar}>Home</Link></li>
            <li><Link to="/gallery" onClick={hideSidebar}>Gallery</Link></li>
            <li><Link to="/contact" onClick={hideSidebar}>Contact</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <h3>About Gentle Givers</h3>
              <p>
                We are dedicated to ensuring that every child has access to the basic necessities
                they need to thrive. Through community support and collective action, we make a
                difference in children's lives.
              </p>
            </div>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Contact</h3>
              <ul>
                <li><a href="mailto:info@gentlegivers.org">info@gentlegivers.org</a></li>
                <li><a href="tel:+15551234567">(555) 123-4567</a></li>
                <li>123 Giving Street<br />Community City, ST 12345</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Gentle Givers. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
