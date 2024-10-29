// src/App.js
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CybersecurityPortfolio from './pages/CybersecurityPortfolio';
import About from './pages/About';

import Header from './components/Header';
import categories from './data/categories';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    gsap.fromTo(
      '.section',
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.section',
          start: 'top 90%',
          end: 'bottom top',
          scrub: true,
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      '.hero-content',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power4.out',
        delay: 0.3,
      }
    );
  }, []);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CybersecurityPortfolio" element={<CybersecurityPortfolio />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

const Home = () => (
  <div>
    {/* Hero Section */}
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to My Cybersecurity Portfolio</h1>
        <p className="hero-description">
          Driven by curiosity and a passion for tech, I’ve spent the last four years diving deep into platforms like TryHackMe, OverTheWire, OffSec, PortSwigger, and Purdue University. Here, you’ll find the heart of my journey—projects, challenges, and real-world insights—all brought to life. Let’s explore the best of what I can bring to the cybersecurity field.
        </p>
        <div className="hero-buttons">
          <button className="cta-button explore">Explore Portfolio</button>
          <button className="cta-button download">Download Resume</button>
        </div>
      </div>
    </section>

    {/* Techniques Section */}
    <section className="section techniques">
      <h2 className="section-title">Cybersecurity Techniques</h2>
      {categories.map((category) => {
        const techniques = new Set();
        category.challenges.forEach((challenge) => {
          challenge.techniques.forEach((technique) => {
            techniques.add(technique);
          });
        });

        return (
          <div key={category.id} className="category-section">
            <h3 className="category-title">{category.title}</h3>
            <div className="bubble-container">
              {[...techniques].map((technique, index) => (
                <span key={technique + index} className="bubble">
                  {technique}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </section>

    {/* MITRE TTPs Section */}
    <section className="section ttps">
      <h2 className="section-title">MITRE TTPs Covered</h2>
      {categories.map((category) => {
        const ttps = new Set();
        category.challenges.forEach((challenge) => {
          challenge.mitreTTPs.forEach((ttp) => {
            ttps.add(ttp);
          });
        });

        return (
          <div key={category.id} className="category-section">
            <h3 className="category-title">{category.title}</h3>
            <div className="bubble-container">
              {[...ttps].map((ttp, index) => (
                <span key={ttp + index} className="bubble">
                  {ttp}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </section>

    {/* Conclusion Section */}
    <section className="section conclusion">
      <h2 className="section-title">Let’s Work Together</h2>
      <p>Reach out to learn more about collaboration opportunities.</p>
      <button
        className="cta-button contact"
        onClick={() => (window.location.href = 'mailto:michael.sasso111@gmail.com')}
      >
        Contact Me
      </button>
    </section>
  </div>
);

export default App;
