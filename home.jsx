import React from 'react';

const Home = ({ onSectionChange }) => {
  return (
    <section id="home" className="page-section active">
      <div className="hero">
        <div className="hero-content">
          <h2>N4SPEED</h2>
          <p>Your premier destination for high-performance racing and drifting cars</p>
          <button 
            className="cta-button hero-cta"
            onClick={() => onSectionChange('cars')}
            style={{ marginTop: '2rem', fontSize: '1.2rem', padding: '1rem 2rem' }}
          >
            Explore Our Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
