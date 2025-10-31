import React, { useState } from 'react';

const Header = ({ activeSection, onSectionChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'cars', label: 'Cars' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <i className="fas fa-car"></i>
          <h1>N4<span>SPEED</span></h1>
        </div>
        <button 
          className="nav-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className="fas fa-bars"></i>
        </button>
        <nav>
          <ul className={isMenuOpen ? 'active' : ''}>
            {navItems.map(item => (
              <li key={item.id}>
                <a 
                  href="#" 
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onSectionChange(item.id);
                    setIsMenuOpen(false);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a 
          href="#" 
          className="cta-button"
          onClick={(e) => {
            e.preventDefault();
            onSectionChange('contact');
          }}
        >
          Schedule Test Drive
        </a>
      </div>
    </header>
  );
};

export default Header;
