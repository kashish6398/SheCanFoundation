import React from "react";

function Impact() {
  const stats = [
    {
      number: "5,000+",
      label: "Women Empowered",
      desc: "Trained in vocational, digital, and leadership skills.",
      icon: "🌸"
    },
    {
      number: "20+",
      label: "Mentorship Programs",
      desc: "Connecting aspiring women leaders with industry experts.",
      icon: "🤝"
    },
    {
      number: "150+",
      label: "Scholarships Awarded",
      desc: "Providing financial aid for girls' higher education.",
      icon: "🎓"
    },
    {
      number: "15+",
      label: "Regional Chapters",
      desc: "Spreading our impact across multiple cities and communities.",
      icon: "🌐"
    }
  ];

  return (
    <section id="impact" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2>Our Impact</h2>
          <p>
            Through our dedicated initiatives, we support women and girls at every step of their growth journey.
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="glass-card stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <h3 className="stat-number">{stat.number}</h3>
              <h4 className="stat-label">{stat.label}</h4>
              <p className="stat-desc">{stat.desc}</p>
            </div>
          ))}
        </div>

        <div className="impact-focus-container glass-panel">
          <div className="impact-focus-info">
            <h3>Where Our Resources Go</h3>
            <p>
              We believe in transparency and allocating resources to maximize direct community benefit. Every contribution fuels real-world programs.
            </p>
            <div className="progress-bars">
              <div className="progress-item">
                <div className="progress-labels">
                  <span>Education & Scholarships</span>
                  <span>45%</span>
                </div>
                <div className="progress-bar-bg">
                  <div className="progress-bar-fill" style={{ width: "45%" }}></div>
                </div>
              </div>

              <div className="progress-item">
                <div className="progress-labels">
                  <span>Skill Development & Coding Bootcamps</span>
                  <span>35%</span>
                </div>
                <div className="progress-bar-bg">
                  <div className="progress-bar-fill" style={{ width: "35%" }}></div>
                </div>
              </div>

              <div className="progress-item">
                <div className="progress-labels">
                  <span>Mentorship & Career Counselling</span>
                  <span>20%</span>
                </div>
                <div className="progress-bar-bg">
                  <div className="progress-bar-fill" style={{ width: "20%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Impact;
