import React from 'react';

const Cars = ({ cars, onSectionChange }) => {
  return (
    <section id="cars" className="page-section active">
      <div className="container">
        <div className="section-title">
          <h2>Our Racing & Drifting Collection</h2>
          <p>Browse our extensive inventory of track-ready and drift-spec vehicles.</p>
        </div>
        
        <div className="car-grid">
          {cars.length > 0 ? cars.map(car => (
            <div key={car.id} className="car-card">
              <div 
                className="car-image" 
                style={{ backgroundImage: `url(${car.image})` }}
              >
                <div className="car-badge">{car.badge}</div>
              </div>
              <div className="car-details">
                <div className="car-brand">{car.brand}</div>
                <div className="car-model">{car.model}</div>
                <div className="car-price">{car.price}</div>
                <p>{car.description}</p>
                <div className="car-features">
                  <div className="feature">
                    <div className="feature-value">{car.features.engine}</div>
                    <div className="feature-label">Engine</div>
                  </div>
                  <div className="feature">
                    <div className="feature-value">{car.features.power}</div>
                    <div className="feature-label">Power</div>
                  </div>
                  <div className="feature">
                    <div className="feature-value">{car.features.acceleration}</div>
                    <div className="feature-label">0-100 km/h</div>
                  </div>
                </div>
                <div className="car-actions">
                  <button 
                    className="btn btn-primary"
                    onClick={() => onSectionChange('contact')}
                  >
                    Buy Now
                  </button>
                  <button 
                    className="btn btn-secondary"
                    onClick={() => onSectionChange('contact')}
                  >
                    Test Drive
                  </button>
                </div>
              </div>
            </div>
          )) : (
            <div className="loading">Loading cars...</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cars;
