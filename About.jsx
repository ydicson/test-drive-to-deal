import React from 'react';

const About = ({ onSectionChange }) => {
  return (
    <section id="about" className="page-section active">
      <div className="container">
        <div className="section-title">
          <h2>About N4Speed</h2>
          <p>Your trusted partner in high-performance racing and drifting cars.</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <h2>Excellence in Racing & Drifting Cars</h2>
            <p>Founded with a passion for motorsports, N4Speed has established itself as the premier destination for racing and drifting enthusiasts in India. Our commitment to performance extends beyond our curated inventory to the personalized service we provide each client.</p>
            <p>We understand that purchasing a racing or drift car is more than a transaction—it's joining a community. Our team of motorsports experts is dedicated to ensuring that experience is seamless, enjoyable, and tailored to your unique driving preferences.</p>
            <p>With years of track experience and relationships with the world's most prestigious performance manufacturers, we offer access to track-ready vehicles and competition-spec machines that are rarely available elsewhere.</p>
            <button 
              className="btn btn-primary"
              onClick={() => onSectionChange('contact')}
            >
              Get In Touch
            </button>
          </div>
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGx1eHVyeSUyMGNhciUyMHNob3dyb29tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="N4Speed Showroom" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
