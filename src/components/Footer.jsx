import React from 'react';
import { FiGithub as Github, FiLinkedin as Linkedin, FiMail as Mail, FiCode as Code } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h2 className="footer-logo gradient-text">Kavya Suma Vooka</h2>
            <p className="footer-desc">
              Software Engineering Intern specializing in full-stack web development and AI-driven applications.
            </p>
          </div>
          <div className="footer-contact">
            <h3>Contact Me</h3>
            <p>Hyderabad, Telangana, 500087</p>
            <a href="mailto:vookakavyasuma4@gmail.com" className="contact-link">vookakavyasuma4@gmail.com</a>
          </div>
          <div className="footer-socials">
            <h3>Connect</h3>
            <div className="social-icons">
              <a href="https://github.com/kavyasumavooka" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/kavyasumavooka" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="https://leetcode.com/u/kavyasumavooka/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
                <Code size={24} />
              </a>
              <a href="mailto:vookakavyasuma4@gmail.com" aria-label="Email">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Vooka Kavya Suma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
