import React, { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const handleDonateClick = () => {
    alert("Thank you for your kindness! The donation portal is coming soon. Together we can empower more women.");
  };

  return (
    <header className={`navbar-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-container">
        <a href="#hero" className="nav-logo" onClick={handleLinkClick}>
          <span className="logo-icon">✨</span>
          <span className="logo-text">
            SheCan<span className="logo-highlight">.</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#impact">Impact</a>
            </li>
            <li>
              <a href="#volunteer">Volunteer</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="nav-actions">
          <button className="btn btn-donate" onClick={handleDonateClick}>
            Donate Now
          </button>
          
          {/* Mobile Hamburger toggle */}
          <button 
            className={`mobile-menu-toggle ${mobileMenuOpen ? "active" : ""}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle Navigation Menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <ul className="mobile-nav-links">
          <li>
            <a href="#hero" onClick={handleLinkClick}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={handleLinkClick}>About</a>
          </li>
          <li>
            <a href="#impact" onClick={handleLinkClick}>Impact</a>
          </li>
          <li>
            <a href="#volunteer" onClick={handleLinkClick}>Volunteer</a>
          </li>
          <li>
            <a href="#contact" onClick={handleLinkClick}>Contact</a>
          </li>
          <li>
            <button className="btn btn-donate btn-block" onClick={() => { handleDonateClick(); handleLinkClick(); }}>
              Donate Now
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;