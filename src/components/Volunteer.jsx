import React, { useState } from "react";

function Volunteer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    skill: "mentorship",
    availability: "weekends",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevent background scroll
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSubmitted(false);
    document.body.style.overflow = "unset"; // Enable background scroll
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate API registration delay
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        skill: "mentorship",
        availability: "weekends",
        message: ""
      });
    }, 1200);
  };

  return (
    <section id="volunteer" className="section-padding volunteer-section">
      <div className="volunteer-bg-glow"></div>
      <div className="container">
        <div className="volunteer-card glass-panel">
          <div className="volunteer-content">
            <h2>Make an Impact. Join Us as a Volunteer.</h2>
            <p>
              Your skills, time, and empathy can change lives. Whether you want to teach coding, mentor an aspiring business owner, or help coordinate events, there is a place for you at She Can Foundation.
            </p>
            <div className="volunteer-benefits">
              <div className="benefit-item">
                <span className="benefit-icon">💡</span>
                <span>Share your expertise directly with women in need</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">🌎</span>
                <span>Connect with a global community of change-makers</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">📈</span>
                <span>Gain leadership skills and valuable volunteering experience</span>
              </div>
            </div>
            <button className="btn btn-primary btn-lg" onClick={openModal}>
              Apply as a Volunteer
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Modal Overlay */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-container glass-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal} aria-label="Close modal">
              &times;
            </button>

            {!submitted ? (
              <>
                <h3 className="modal-title">Join She Can Foundation</h3>
                <p className="modal-subtitle">Fill out this quick form and our volunteer coordinator will reach out to you.</p>
                
                <form onSubmit={handleSubmit} className="modal-form">
                  <div className="form-group">
                    <label htmlFor="vol-name">Full Name *</label>
                    <input
                      type="text"
                      id="vol-name"
                      name="name"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="vol-email">Email Address *</label>
                    <input
                      type="email"
                      id="vol-email"
                      name="email"
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group flex-1">
                      <label htmlFor="vol-skill">Core Skill / Interest *</label>
                      <select
                        id="vol-skill"
                        name="skill"
                        value={formData.skill}
                        onChange={handleChange}
                      >
                        <option value="mentorship">Career Mentorship</option>
                        <option value="teaching">Technical Instruction</option>
                        <option value="marketing">Marketing & Design</option>
                        <option value="events">Event Coordination</option>
                        <option value="admin">Administrative Support</option>
                      </select>
                    </div>

                    <div className="form-group flex-1">
                      <label htmlFor="vol-avail">Availability *</label>
                      <select
                        id="vol-avail"
                        name="availability"
                        value={formData.availability}
                        onChange={handleChange}
                      >
                        <option value="weekends">Weekends only</option>
                        <option value="weekdays">Weekdays only</option>
                        <option value="flexible">Flexible / Remote</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="vol-msg">Why do you want to join? *</label>
                    <textarea
                      id="vol-msg"
                      name="message"
                      rows="3"
                      placeholder="Share a bit about your background and interest..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary btn-block btn-lg" 
                    disabled={submitting}
                  >
                    {submitting ? "Submitting Application..." : "Submit Application"}
                  </button>
                </form>
              </>
            ) : (
              <div className="modal-success-screen">
                <div className="success-checkmark">✨</div>
                <h3>Application Submitted!</h3>
                <p>
                  Thank you for taking the first step towards empowering women. Our volunteer team will review your application and get in touch with you at <strong>{formData.email}</strong> within 2-3 business days.
                </p>
                <button className="btn btn-primary" onClick={closeModal}>
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Volunteer;