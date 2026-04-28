import React from 'react';
import './Skills.css';

const skills = [
  { category: "Programming Languages", items: ["C", "Java", "Python"] },
  { category: "Web Technologies", items: ["HTML", "CSS", "JavaScript"] },
  { category: "Frameworks", items: ["React.js", "Express.js", "Node.js", "Bootstrap"] },
  { category: "Databases", items: ["SQL", "MongoDB"] },
  { category: "Tools", items: ["Git", "GitHub", "VS Code"] },
  { category: "Concepts", items: ["Data Structures and Algorithms", "OOP", "DBMS", "REST APIs"] },
  { category: "Soft Skills", items: ["Problem Solving", "Team Leadership", "Collaboration", "Communication", "Time Management"] }
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-card glass-panel">
              <h3 className="skill-category">{skillGroup.category}</h3>
              <div className="skill-tags">
                {skillGroup.items.map((item, i) => (
                  <span key={i} className="skill-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
