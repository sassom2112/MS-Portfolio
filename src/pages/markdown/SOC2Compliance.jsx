import React from 'react';
import './CommonStyles.css';

const SOC2Compliance = () => {
  return (
    <div className="compliance-project">
      <div className="ctf-header">
        <h1>SOC 2 Compliance Implementation for a Web Application</h1>
        <p>Design and implement security controls to align with SOC 2 compliance for a web application, focusing on data protection and risk assessment practices.</p>
      </div>

      <div className="content-section">
        <h3>Overview</h3>
        <p>For SOC 2 compliance, we’ll implement controls around Security, Availability, Confidentiality, Processing Integrity, and Privacy. This project will ensure secure processing and storage of sensitive information within a web application.</p>
      </div>

      <div className="content-section">
        <h3>Key Steps</h3>
        <ol>
          <li>Define and document compliance objectives based on SOC 2 Trust Service Criteria.</li>
          <li>Implement logging, monitoring, and access controls for tracking and securing user activity.</li>
          <li>Develop policies and controls for data protection, disaster recovery, and incident response.</li>
          <li>Perform risk assessments to identify compliance gaps and potential security threats.</li>
        </ol>
      </div>

      <div className="ctf-summary">
        <h3>Takeaways</h3>
        <p>This project emphasizes the importance of structured policy-making, implementing secure access controls, and documenting procedures, all necessary for SOC 2 compliance in web applications.</p>
      </div>
    </div>
  );
};

export default SOC2Compliance;
