import React from 'react';

const Footer = ({ onSectionChange }) => {
  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'cars', label: 'Cars' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  const brands = [
    'BMW M',
    'Porsche',
    'Ford Performance',
    'Mercedes-AMG',
    'Nissan Nismo'
  ];

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-col">
          <h3>N4Speed</h3>
          <p>Your premier destination for racing and drifting automobiles from the world's most prestigious performance manufacturers.</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/dicson7" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/dicson__05" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/share/17fioKay4C/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
        
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            {quickLinks.map(link => (
              <li key={link.id}>
                <a 
                  href="#" 
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    onSectionChange(link.id);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="footer-col">
          <h3>Performance Brands</h3>
          <ul>
            {brands.map((brand, index) => (
              <li key={index}><a href="#">{brand}</a></li>
            ))}
          </ul>
        </div>
        
        <div className="footer-col">
          <h3>Contact Us</h3>
          <ul>
            <li><i className="fas fa-map-marker-alt"></i> Trichy, Tamil Nadu</li>
            <li><i className="fas fa-phone"></i> +91 7305735186</li>
            <li><i className="fas fa-envelope"></i> dicson01102005@gmail.com</li>
            <li><i className="fas fa-clock"></i> Mon-Sat: 9AM - 7PM</li>
          </ul>
        </div>
      </div>
      
      <div className="copyright">
        <p>&copy; 2023 N4Speed. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
