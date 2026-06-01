import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill out all required fields.");
      return;
    }
    
    // Simulate API request
    setTimeout(() => {
      setSubmitted(true);
      setError("");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 800);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>
            Have questions, feedback, or want to collaborate? Reach out to us and we'll reply as soon as possible.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Details Card */}
          <div className="contact-info-panel glass-panel">
            <h3>Contact Information</h3>
            <p className="contact-subtext">Feel free to connect through our channels:</p>
            
            <div className="info-items">
              <div className="info-item">
                <span className="info-icon">📍</span>
                <div>
                  <h4>Our Office</h4>
                  <p>123 Empowerment Blvd, Suite 400, New Delhi, India</p>
                </div>
              </div>
              
              <div className="info-item">
                <span className="info-icon">📞</span>
                <div>
                  <h4>Phone Number</h4>
                  <p>+91 98765 43210</p>
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">✉️</span>
                <div>
                  <h4>Email Address</h4>
                  <p>hello@shecanfoundation.org</p>
                </div>
              </div>
            </div>

            <div className="social-links-container">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="#facebook" className="social-icon-btn">FB</a>
                <a href="#twitter" className="social-icon-btn">X</a>
                <a href="#instagram" className="social-icon-btn">IG</a>
                <a href="#linkedin" className="social-icon-btn">LN</a>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="contact-form-panel glass-card">
            <h3>Send Us a Message</h3>
            
            {submitted && (
              <div className="form-success-alert">
                ✨ Thank you! Your message has been sent successfully. We'll be in touch soon.
              </div>
            )}

            {error && (
              <div className="form-error-alert">
                ⚠️ {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Jane Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="jane@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Tell us what you'd like to share..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
