import React from 'react';
import { FiGithub as Github, FiExternalLink as ExternalLink } from 'react-icons/fi';
import './Projects.css';

const projects = [
  {
    title: "MarketMind AI",
    description: "Built a Generative AI platform for marketing automation to generate multi-platform marketing campaigns and personalized outreach content. Designed AI-powered lead scoring and market analysis, improving targeting efficiency by 40%.",
    tech: ["FastAPI", "React", "JavaScript", "Gemini API", "IBM AI", "Groq", "Hugging Face"],
    github: "https://github.com/CodifyWithShravan/MarketMind",
    demo: "https://marketmind-black.vercel.app/"
  },
  {
    title: "Campus AI Hub",
    description: "Created a React + Python platform with 4+ functional sections integrating Generative AI models and LLMs. Engineered RESTful APIs connecting frontend components with AI-powered backend services.",
    tech: ["React", "JavaScript", "Python", "Generative AI", "LLMs"],
    github: "https://github.com/VookaKavyaSuma/Campus-AI-Hub",
    demo: "https://unimind-woad.vercel.app/"
  },
  {
    title: "MediVault.AI",
    description: "Engineered a full-stack MERN application with 3 core modules and 2 user roles, secured using JWT-based authentication. Integrated RESTful APIs and constructed an interactive dashboard to visualize medical data using Chart.js.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Chart.js"],
    github: "https://github.com/VookaKavyaSuma/MediVault.AI",
    demo: "#"
  },
  {
    title: "Internship Success Portal",
    description: "A full-stack MERN application for tracking internship applications and analyzing job descriptions. Built with a modular architecture ready for future AI integration.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Vite", "JWT"],
    github: "https://github.com/VookaKavyaSuma/intern-track",
    demo: "https://intern-track-frontend.vercel.app/"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title reveal">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className={`project-card glass-panel reveal delay-${(index % 3) + 1}`}>
              <div className="project-content">
                <h3 className="project-title gradient-text">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  <Github size={18} /> GitHub
                </a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
