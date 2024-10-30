import React, { useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
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
          <Link to="/CybersecurityPortfolio" className="cta-button explore">Explore Portfolio</Link>
          <a href="/data/Michael Sasso Resume.pdf" download className="cta-button download">Download Resume</a>
        </div>
      </div>
    </section>

    <section className="section testimonials">
  <h2 className="section-title">TL;DR</h2>
  
  <div className="testimonial">
  <p>
    <strong>Red Team Operations:</strong> My journey into red teaming began with <strong>Planning the Red Team Engagement</strong>, where I learned the importance of setting clear goals, defining scope, and establishing rules of engagement. This solid foundation guided my approach to <strong>Phishing Campaign Setup</strong>, where I crafted a targeted spear-phishing campaign using OSINT techniques to simulate realistic social engineering scenarios. As I advanced, <strong>Privilege Escalation and Persistence</strong> taught me how to gain and maintain elevated access by exploiting vulnerabilities and using legitimate tools (LOLBAS) for stealth. Through <strong>TryHackMe’s Lian_Yu Walkthrough</strong>, I got hands-on experience with reconnaissance, SSH access, and privilege escalation, solidifying my skills in lateral movement. The next step was mastering evasion with <strong>Lateral Movement and Evasion Techniques</strong>, focusing on remaining undetected through methods like Pass-the-Hash and obfuscation. I combined these skills with the <strong>Stealthy Nmap Scan with IP Spoofing</strong> project, learning how to gather network data discreetly. Together, these projects formed a complete red team methodology that covers every phase from initial access to evasion, privilege escalation, and persistence.
  </p>
</div>

<div className="testimonial">
  <p>
    <strong>Vulnerability Assessment and Exploitation:</strong> Starting with the <strong>OTG Report: SQL Injection Vulnerability</strong>, I followed the OWASP Testing Guide to understand and document SQL injection flaws, which led me to explore several SQL injection techniques. Expanding on this knowledge, I tackled <strong>MySQL Injection</strong>, where I practiced extracting sensitive data through MySQL-specific vulnerabilities and deepened my understanding of credential dumping. In <strong>SUID Takeover</strong>, I learned how to identify and exploit misconfigured SUID files to escalate privileges and gain root access, giving me practical insights into system control. Finally, working on the <strong>PTES Framework Report: Wireshark Analysis</strong> allowed me to analyze network traffic for unauthorized access and data exfiltration attempts, bridging network reconnaissance with vulnerability assessment. These projects collectively strengthened my ability to detect, exploit, and evaluate system vulnerabilities, providing a rounded approach to vulnerability assessment and exploitation.
  </p>
</div>

<div className="testimonial">
  <p>
    <strong>Infrastructure and Cloud Management:</strong> In <strong>Automated LAMP Stack Deployment</strong>, I used Ansible to efficiently deploy a Linux, Apache, MySQL, PHP (LAMP) stack across multiple virtual machines, ensuring consistent security configurations across all setups. This automation approach extended to <strong>Standard Server Configuration with Ansible</strong>, where I learned to harden server environments with user management, firewall setup, and key-based authentication, applying these essential layers of security to both cloud and on-premise setups. As an <strong>Azure Administrator</strong>, I gained experience managing resources and strengthening access control within Azure, complementing my Ansible-driven configurations for cloud management. Setting up the <strong>Metasploit Database Connection</strong> further reinforced my infrastructure knowledge by integrating PostgreSQL with Metasploit to streamline data management and tracking. These interconnected projects provided me with a strong foundation in building, securing, and managing both on-premise and cloud environments.
  </p>
</div>

<div className="testimonial">
  <p>
    <strong>Compliance and Risk Assessment:</strong> Conducting a <strong>Feasibility Study for HIPAA-Compliant Data Pipeline Using AWS</strong> gave me a firsthand look at the compliance requirements for handling sensitive data, particularly focusing on access control and data security for HIPAA standards. This experience connected with my work on the <strong>ISO/IEC 27001 Risk Assessment and Security Management System Implementation</strong>, where I applied risk management frameworks aligned with ISO standards, developing ongoing risk assessment processes. Building on this, <strong>Understanding IT Auditing and Compliance</strong> provided insights into essential audit standards and methods, ensuring regulatory compliance across my projects. Together, these projects emphasized the importance of secure data management and comprehensive risk assessment, helping me understand how to balance regulatory requirements with proactive security practices.
  </p>
</div>

</section>


    {/* Techniques Section */}
    <section className="section techniques">
      <h2 className="section-title">Techniques Covered</h2>
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
