import React from 'react';
import './CommonStyles.css';

const GDPRCompliance = () => {
  return (
    <div className="compliance-project">
      <div className="ctf-header">
        <h1>GDPR Compliance and Privacy Risk Assessment for User Data</h1>
        <p>Implement data protection strategies to comply with GDPR and secure Personally Identifiable Information (PII).</p>
      </div>

      <div className="content-section">
        <h3>Overview</h3>
        <p>GDPR compliance involves protecting user data and ensuring privacy rights. This project includes conducting a Privacy Impact Assessment (PIA) and implementing controls to safeguard user PII.</p>
      </div>

      <div className="content-section">
        <h3>Key Steps</h3>
        <ol>
          <li>Conduct a Privacy Impact Assessment (PIA) to identify risks related to data handling.</li>
          <li>Implement data minimization practices, reducing unnecessary storage and processing of PII.</li>
          <li>Develop policies for consent management, data breach notification, and data retention.</li>
          <li>Implement tools for data erasure and portability, allowing users control over their data.</li>
        </ol>
      </div>

      <div className="ctf-summary">
        <h3>Takeaways</h3>
        <p>This project builds understanding of GDPR requirements, privacy impact assessments, and data protection strategies essential for compliance and user data privacy.</p>
      </div>
    </div>
  );
};

export default GDPRCompliance;

