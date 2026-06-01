import React, { useState } from "react";

function About() {
  const [activeStory, setActiveStory] = useState(0);

  const pillars = [
    {
      title: "Education & Literacy",
      description: "We provide scholarship programs, school supplies, and foundational literacy classes to ensure that financial hardship never stands in the way of a girl's learning.",
      story: "🎓 Success Story: Priyanjali, who received the She Can scholarship in 2021, is now pursuing a bachelor's degree in Civil Engineering at a premier university.",
      icon: "📚"
    },
    {
      title: "Skill Development",
      description: "From digital skills and web development to vocational training and entrepreneurship, we host interactive bootcamps that enable women to secure jobs or start businesses.",
      story: "💻 Success Story: After completing our 12-week web design bootcamp, Aisha started working as a freelance UI designer, doubling her family's monthly income.",
      icon: "⚙️"
    },
    {
      title: "Mentorship & Guidance",
      description: "We connect aspiring women professionals with established mentors in their field, offering career guidance, resume building, and leadership networking.",
      story: "🤝 Success Story: Ananya was mentored by a senior manager in tech through our program and successfully landed a software developer role at a global firm.",
      icon: "🌟"
    }
  ];

  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        <div className="section-header">
          <h2>About Us</h2>
          <p>
            Dedicated to creating a world where every woman has the tools, skills, and confidence to write her own future.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-mission-panel glass-panel">
            <h3>Our Mission & Vision</h3>
            <p>
              Founded in 2020, <strong>She Can Foundation</strong> is a non-governmental organization built on the belief that empowering women is the single most effective way to elevate families and transform communities.
            </p>
            <p>
              We address systemic barriers by focusing on the three core pillars of development. We strive to foster gender equality, financial self-reliance, and confidence in every woman and girl we reach.
            </p>
            <div className="vision-quote">
              <blockquote>
                "When you educate a woman, you educate a nation. When you empower a woman, you build the future."
              </blockquote>
            </div>
          </div>

          <div className="about-pillars-panel">
            <h3>Our Pillars of Empowerment</h3>
            <p className="pillars-helper-text">Click on any pillar to read a real-world success story:</p>
            
            <div className="pillars-list">
              {pillars.map((pillar, idx) => (
                <div 
                  key={idx} 
                  className={`pillar-card glass-card ${activeStory === idx ? "active" : ""}`}
                  onClick={() => setActiveStory(idx)}
                >
                  <div className="pillar-header">
                    <span className="pillar-icon">{pillar.icon}</span>
                    <h4>{pillar.title}</h4>
                  </div>
                  <p>{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Success Story Drawer */}
        <div className="success-story-drawer glass-card">
          <div className="drawer-glow"></div>
          <div className="drawer-content">
            <span className="drawer-icon">✨</span>
            <p className="story-text">{pillars[activeStory].story}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;