import React from 'react';

const Services = () => {
  const services = [
    {
      icon: 'fas fa-shield-alt',
      title: 'Track Insurance',
      description: 'Comprehensive protection plans for your racing vehicle with track day coverage.'
    },
    {
      icon: 'fas fa-tools',
      title: 'Performance Tuning',
      description: 'Expert technicians specializing in race-spec modifications and engine tuning.'
    },
    {
      icon: 'fas fa-car-side',
      title: 'Track Test Drives',
      description: 'Experience your dream race car firsthand with our private track sessions.'
    },
    {
      icon: 'fas fa-hand-holding-usd',
      title: 'Racing Financing',
      description: 'Tailored financial solutions with competitive rates for performance car purchases.'
    }
  ];

  return (
    <section className="services">
      <div className="section-title" style={{ color: 'white' }}>
        <h2>Our Performance Services</h2>
        <p>We offer comprehensive services to ensure your racing or drifting experience is exceptional.</p>
      </div>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">
              <i className={service.icon}></i>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
