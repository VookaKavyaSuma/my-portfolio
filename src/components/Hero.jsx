import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Vooka Kavya Suma</h1>
          <h2 className="hero-title">
            <span className="gradient-text">Software Engineer | CSE Undergraduate</span>
          </h2>
          <p className="hero-description">
            Computer Science undergraduate with experience in full-stack development,
            RESTful APIs, and AI-driven applications using the MERN stack.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="/vooka-kavya-suma-resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <Download size={18} /> Resume
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="hero-shape"></div>
          {/* Add a stylized initials graphic instead of a placeholder image */}
          <div className="hero-initials">
            <span className="gradient-text">VS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
