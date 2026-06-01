import React, { useState } from "react";

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;

    // Simulate API registration delay
    setTimeout(() => {
      setSubscribed(true);
      setEmail("");
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setSubscribed(false);
      }, 5000);
    }, 800);
  };

  return (
    <footer className="main-footer">
      <div className="container footer-grid">
        {/* Brand Column */}
        <div className="footer-col brand-col">
          <a href="#hero" className="footer-logo">
            <span className="logo-icon">✨</span>
            <span className="logo-text">SheCan.</span>
          </a>
          <p className="footer-desc">
            Empowering women and girls globally since 2020. We strive to provide the tools, support, and mentorship necessary for all women to achieve independence.
          </p>
          <div className="footer-socials">
            <a href="#fb" aria-label="Facebook">FB</a>
            <a href="#tw" aria-label="Twitter">TW</a>
            <a href="#ig" aria-label="Instagram">IG</a>
            <a href="#ln" aria-label="LinkedIn">LN</a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#impact">Our Impact</a></li>
            <li><a href="#volunteer">Volunteer</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="footer-col">
          <h3>Connect</h3>
          <ul className="footer-info-list">
            <li>
              <span className="icon">📍</span>
              <span>123 Empowerment Blvd, Suite 400, New Delhi, India</span>
            </li>
            <li>
              <span className="icon">📞</span>
              <span>+91 98765 43210</span>
            </li>
            <li>
              <span className="icon">✉️</span>
              <span>hello@shecanfoundation.org</span>
            </li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="footer-col newsletter-col">
          <h3>Newsletter</h3>
          <p>Subscribe to receive updates on our impact, stories of change, and upcoming events.</p>
          
          {subscribed ? (
            <div className="newsletter-success">
              🎉 Thank you for subscribing!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email Address for newsletter"
              />
              <button type="submit" className="btn btn-primary btn-newsletter">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-container">
          <p>© {new Date().getFullYear()} She Can Foundation. All rights reserved.</p>
          <div className="bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;