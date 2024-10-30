import React from 'react';
import './About.css';

function About() {
  const coursework = {
    "Cybersecurity Fundamentals": [
      "Introduction to Cybersecurity",
      "Network Security Concepts",
      "Risk Management and Compliance",
      "Incident Response Planning",
      "Encryption and Social Engineering Attacks",
      "Access Controls and Security Technologies"
    ],
    "Cloud Computing": [
      "Cloud Computing Concepts",
      "Moving to Cloud Computing",
      "Cloud Architecture Security",
      "Cloud Data Security",
      "Cloud Security Design Principles",
      "Implementing Virtual Machines and Applications",
      "Working With a Cloud Provider"
    ],
    "Programming and Networking": [
      "Python Programming",
      "Networking With Microsoft Technologies",
      "Routing and Switching Configuration",
      "IP Addressing Schemes",
      "Linux System Administration",
      "Advanced Routing and Switching Concepts"
    ],
    "Ethics and Professional Development": [
      "Ethical Issues in Information Technology",
      "Ethical and Legal Topics in Information Technology",
      "Communicating a Professional Image",
      "Thinking Ethically and Critically",
      "Harnessing Social Media",
      "Communicating Professionally"
    ],
    "General Education": [
      "College Composition II",
      "College Algebra",
      "Discrete Mathematics",
      "Technology and the Environment",
      "Scientific Concepts Across Disciplines",
      "Information Technology and Society"
    ]
  };

  return (
    <div className="about-page">
      <main className="about-content">
        
        {/* About Me Section */}
        <section className="about-me-card">
          <h2>About Me</h2>
          <div className="about-me-content">
            <img src="/headshot.jpg" alt="Michael Sasso" className="profile-picture" />
            <div className="about-me-details">
              <p className="name">Michael Sasso</p>
              <p>Bachelor of Science in Cybersecurity - Cloud Computing | Status: Current | Expected Graduation - February 2025</p>
            </div>
          </div>
        </section>
        <section className="personal-message">
          <h2>A Personal Note</h2>
          <p>
            This portfolio represents just a fraction of my learning journey. Beyond the lines of code and projects here, I'm also a small business owner, a scuba instructor, a dedicated husband, and a friend to some wonderful felines. Over the past three years, I’ve not only deepened my understanding of technology but have truly learned how to learn, diving into new tech stacks with enthusiasm and resilience. 
          </p>
          <p>
            When I’m not in my lab, you can likely find me at a shady beach, enjoying a good book or challenging myself on a mountain bike trail. I’m a fan of paddleboarding and can’t resist the thrill of dangerously spicy foods 🌶️. This journey of discovery, learning, and community brings me great joy—and I look forward to what lies ahead. 
          </p>
        </section>

        {/* Contact Information Section */}
        <section className="contact-info">
          <h2>Contact Information</h2>
          <ul>
            <li>🔗 <a href="https://linkedin.com/in/michael-sasso-0x00/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li>🐙 <a href="https://github.com/sassom2112" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li>✉️ <a href="mailto:Michael.sasso111@gmail.com">Michael.sasso111@gmail.com</a></li>
            <li>📞 (440) 554-7378</li>
            <li>📍 Kihei, HI 96753</li>
          </ul>
        </section>

        {/* Coursework Section */}
        <section className="coursework">
          <h2>Purdue Global Coursework</h2>
          {Object.keys(coursework).map((category, index) => (
            <div key={index} className="course-category">
              <input type="checkbox" id={`category-${index}`} className="toggle" />
              <label htmlFor={`category-${index}`} className="category-header">
                {category}
              </label>
              <div className="category-content">
                <ul className="course-list">
                  {coursework[category].map((course, idx) => (
                    <li key={idx} className="course-item">{course}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

      </main>
    </div>
  );
}

export default About;
