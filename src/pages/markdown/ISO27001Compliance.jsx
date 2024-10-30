import React from 'react';
import './CommonStyles.css';

const ISO27001Compliance = () => {
  return (
    <div className="compliance-project">
      <div className="ctf-header">
        <h1>ISO/IEC 27001 Risk Assessment and Security Management System Implementation</h1>
        <p>
          Establishing an ISO/IEC 27001-compliant Information Security Management System (ISMS) provides a foundation for managing information security risks through structured, documented, and adaptable security controls.
        </p>
      </div>

      <div className="content-section">
        <h3>Project Overview</h3>
        <p>
          This project focuses on setting up an ISMS framework and performing a risk assessment to identify, manage, and mitigate security risks as outlined in ISO/IEC 27001 standards. By implementing these controls, you gain experience with an internationally recognized approach to securing organizational data and operations.
        </p>
      </div>

      <div className="content-section">
        <h3>Setting Up the ISMS Framework</h3>
        <p>
          Begin by defining the scope of your ISMS, outlining the policies, objectives, and risk criteria that guide information security practices. This includes determining which assets and processes the ISMS will protect.
        </p>
        <h4>Key Actions</h4>
        <ul>
          <li><strong>Policy Development:</strong> Draft policies that align with ISO/IEC 27001 requirements, covering areas like access control, data protection, and incident response.</li>
          <li><strong>Define ISMS Objectives:</strong> Identify specific security goals relevant to the organization (e.g., protect customer data, minimize downtime from incidents).</li>
        </ul>
      </div>

      <div className="content-section">
        <h3>Conducting the Risk Assessment</h3>
        <p>
          A risk assessment identifies potential security risks, assesses their likelihood and impact, and helps prioritize mitigation efforts. ISO/IEC 27001 emphasizes a structured risk management approach to continuously improve security.
        </p>
        <h4>Tools and Techniques</h4>
        <ul>
          <li>
            <strong>Risk Assessment Matrix:</strong> Use a matrix to assess risk levels by combining the likelihood and potential impact of identified threats.
          </li>
          <li>
            <strong>Threat Modeling Tools:</strong> Tools like <code>OWASP Threat Dragon</code> can visually map threats to assets, helping to systematically analyze potential security weaknesses.
          </li>
        </ul>
      </div>

      <div className="content-section">
        <h3>Implementing Security Controls</h3>
        <p>
          Based on the risk assessment, select and apply security controls to mitigate identified risks. Controls cover various domains, including access control, incident response, and asset management.
        </p>
        <h4>Ex. Controls</h4>
        <ul>
          <li><strong>Access Management:</strong> Implement policies and tools for managing user access to sensitive data (e.g., multi-factor authentication).</li>
          <li><strong>Incident Response Plan:</strong> Establish procedures for identifying, responding to, and recovering from security incidents.</li>
          <li><strong>Asset Management:</strong> Maintain an updated inventory of information assets to ensure all critical resources are accounted for and secured.</li>
        </ul>
      </div>

      <div className="content-section">
        <h3>Monitoring and Review</h3>
        <p>
          Regularly monitor and evaluate the ISMS to adapt to new threats, compliance updates, or organizational changes. This includes periodic internal audits and management reviews to ensure ongoing effectiveness.
        </p>
        <h4>Best Practices</h4>
        <ul>
          <li><strong>Internal Audits:</strong> Schedule audits to assess compliance with ISO/IEC 27001 standards and identify areas for improvement.</li>
          <li><strong>Management Reviews:</strong> Review ISMS performance with stakeholders and document findings for continuous improvement.</li>
        </ul>
      </div>

      <div className="ctf-summary">
        <h3>Key Takeaways</h3>
        <p>
          This project provided experience with the processes and controls essential to implementing an ISMS according to ISO/IEC 27001 standards. You’ll gain a practical understanding of structured risk management, policy development, and security control deployment—all critical for building secure organizational practices.
        </p>
      </div>
    </div>
  );
};

export default ISO27001Compliance;
