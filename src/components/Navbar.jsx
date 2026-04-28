import React, { useState, useEffect } from 'react';
import { FiMenu as Menu, FiX as X, FiGithub as Github, FiLinkedin as Linkedin, FiMail as Mail } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo gradient-text">Vooka Kavya Suma</a>

        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </div>

        <div className="social-links">
          <a href="https://github.com/VookaKavyaSuma" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
          <a href="https://linkedin.com/in/kavyasumavooka" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
          <a href="mailto:vookakavyasuma4@gmail.com"><Mail size={20} /></a>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu glass-panel">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="mobile-nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="mobile-socials">
            <a href="https://github.com/kavyasumavooka" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
            <a href="https://linkedin.com/in/kavyasumavooka" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
            <a href="mailto:vookakavyasuma4@gmail.com"><Mail size={20} /></a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
