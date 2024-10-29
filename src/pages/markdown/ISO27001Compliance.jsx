import React from 'react';
import './CommonStyles.css';

const ISO27001Compliance = () => {
  return (
    <div className="compliance-project">
      <div className="ctf-header">
        <h1>ISO/IEC 27001 Risk Assessment and Security Management System Implementation</h1>
        <p>Establish an ISO/IEC 27001-compliant Information Security Management System (ISMS) for comprehensive risk management and security control.</p>
      </div>

      <div className="content-section">
        <h3>Overview</h3>
        <p>ISO/IEC 27001 compliance provides a structured approach to information security. This project focuses on establishing a risk assessment framework and implementing security controls within an ISMS.</p>
      </div>

      <div className="content-section">
        <h3>Key Steps</h3>
        <ol>
          <li>Set up the ISMS framework, defining policies, objectives, and risk management criteria.</li>
          <li>Conduct a risk assessment to identify, evaluate, and prioritize security risks.</li>
          <li>Implement controls for access management, incident response, and asset management.</li>
          <li>Regularly monitor and review the ISMS to adapt to evolving security threats and organizational needs.</li>
        </ol>
      </div>

      <div className="ctf-summary">
        <h3>Takeaways</h3>
        <p>This project offers insight into ISMS implementation, risk assessment, and maintaining compliance with ISO/IEC 27001 standards for organizational information security.</p>
      </div>
    </div>
  );
};

export default ISO27001Compliance;
