import React from "react";
import heroImg from "../assets/women_empowerment.png";

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-background-gradient"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-tagline">✨ Transforming Lives, Empowering Futures</div>
          <h1 className="hero-title">
            Empowering Women, <br />
            <span className="gradient-text">Shaping Tomorrow.</span>
          </h1>
          <p className="hero-description">
            She Can Foundation provides the critical skills, professional mentorship, and career resources women and girls need to break barriers, lead their communities, and achieve financial independence.
          </p>
          <div className="hero-actions">
            <a href="#volunteer" className="btn btn-primary">
              Get Involved
            </a>
            <a href="#about" className="btn btn-secondary">
              Our Mission
            </a>
          </div>
          <div className="hero-stats-mini">
            <div className="mini-stat">
              <strong>5K+</strong>
              <span>Impacted</span>
            </div>
            <div className="mini-stat">
              <strong>100%</strong>
              <span>Free Programs</span>
            </div>
            <div className="mini-stat">
              <strong>15+</strong>
              <span>Cities</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="image-wrapper glass-panel">
            <img 
              src={heroImg} 
              alt="Women in technology and leadership collaborating" 
              className="hero-image"
            />
            <div className="floating-badge badge-1 glass-card">
              <span className="badge-icon">🎓</span>
              <div>
                <h4>Scholarships</h4>
                <p>150+ Awarded</p>
              </div>
            </div>
            <div className="floating-badge badge-2 glass-card">
              <span className="badge-icon">💻</span>
              <div>
                <h4>Tech Training</h4>
                <p>Coding & Design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;