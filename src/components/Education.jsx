import React from 'react';
import { FaGraduationCap as GraduationCap } from 'react-icons/fa';
import { FiAward as Award } from 'react-icons/fi';
import './Education.css';

const education = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Anurag University, Hyderabad",
    duration: "2024 - 2028",
    score: "CGPA: 9.48/10"
  },
  {
    degree: "Intermediate Education",
    institution: "Trividyaa Junior College, Hyderabad",
    duration: "2022 - 2024",
    score: "Percentage: 97.6%"
  },
  {
    degree: "SSC, Class X",
    institution: "Sri Vidya Bharathi Model High School",
    duration: "2021 - 2022",
    score: "CGPA: 10/10"
  }
];

const achievements = [
  "Technical Member, IEEE CS Chapter – Organized 2+ technical workshops and peer learning sessions for 75+ students (Sep 2025 – Present)",
  "Secured 3rd place in Spark Ideathon (team event)",
  "Participated in 1 national-level and 4 college-level hackathons",
  "Attended the International Conference on Advances in Computational Intelligence and Informatics (ICACII)",
  "NPTEL – Programming in Java (Elite + Gold) 2025",
  "MongoDB University – Getting Started with MongoDB Atlas 2026",
  "NPTEL – Fundamental Algorithms: Design and Analysis (Top 5%) 2026"
];

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="education-grid">
          <div>
            <h2 className="section-title align-left">Education</h2>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-icon">
                    <GraduationCap size={20} />
                  </div>
                  <div className="timeline-content glass-panel">
                    <h3 className="degree">{edu.degree}</h3>
                    <h4 className="institution">{edu.institution}</h4>
                    <div className="timeline-meta">
                      <span className="duration">{edu.duration}</span>
                      <span className="score gradient-text">{edu.score}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="section-title align-left">Achievements & Certifications</h2>
            <div className="achievements-list glass-panel">
              {achievements.map((item, index) => (
                <div key={index} className="achievement-item">
                  <Award className="achievement-icon" size={20} />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
