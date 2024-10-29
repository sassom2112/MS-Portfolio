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

        {/* Coursework Section */}
        <section className="coursework">
          <h2>Relevant Coursework</h2>
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
