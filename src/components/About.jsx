import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text glass-panel">
            <p>
              I am a passionate Computer Science undergraduate with a CGPA of 9.48, currently studying at Anurag University, Hyderabad. I specialize in full-stack development, RESTful APIs, and AI-driven applications using the MERN stack.
            </p>
            <p>
              My goal is to design scalable systems and contribute to real-world technology solutions. I thrive in environments that challenge me to solve complex problems and learn new technologies.
            </p>
            <div className="stats-container">
              <div className="stat-item">
                <h3 className="gradient-text">9.48</h3>
                <p>CGPA</p>
              </div>
              <div className="stat-item">
                <h3 className="gradient-text">4★</h3>
                <p>HackerRank (C & Java)</p>
              </div>
              <div className="stat-item">
                <h3 className="gradient-text">Top 5%</h3>
                <p>NPTEL Algorithms</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
