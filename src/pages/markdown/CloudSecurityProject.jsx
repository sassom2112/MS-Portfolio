// src/pages/markdown/CloudSecurityProject.jsx

import React from 'react';
import './CommonStyles.css';

const CloudSecurityProject = () => {
  return (
    <div className="Report-content">
      <div className="ctf-header">
        <h1>Addressing Cloud-Based Security and Regulatory Compliance for Widgets International</h1>
      </div>

      {/* Project Overview */}
      <section className="content-section">
        <h2>Project Overview</h2>
        <p>
          This project aims to enhance cloud security measures at Widgets International by addressing
          critical security concerns such as data breaches, insufficient IAM, account hijacking, and
          insecure APIs. Additionally, the project will ensure compliance with relevant international
          regulations across all regional headquarters.
        </p>
      </section>

      {/* Project Objectives */}
      <section className="content-section">
        <h2>Project Objectives</h2>
        <ol>
          <li>
            <strong>Enhance Cloud Security Measures:</strong>
            <ul>
              <li>Implement strategies to detect and mitigate data breaches.</li>
              <li>Strengthen Identity and Access Management (IAM) protocols.</li>
              <li>Prevent and detect account hijacking attempts.</li>
              <li>Secure APIs used in cloud services.</li>
            </ul>
          </li>
          <li>
            <strong>Achieve Regulatory Compliance:</strong>
            <ul>
              <li>
                Evaluate and align company policies with PCI DSS, ISO/IEC 27017, Common Criteria, FIPS
                140-3, and GDPR.
              </li>
              <li>
                Develop a unified security strategy that meets local and international standards.
              </li>
              <li>Incorporate cultural awareness in compliance efforts across different regions.</li>
            </ul>
          </li>
        </ol>
      </section>

      {/* Project Scope */}
      <section className="content-section">
        <h2>Project Scope</h2>
        <p>
          <strong>Regions Covered:</strong> Canada, China, India, Ireland, Italy, and the United
          States.
        </p>
        <p>
          <strong>Cloud Environments:</strong> AWS, Azure, and any other cloud services utilized by the
          company.
        </p>
        <p>
          <strong>Data Types:</strong> Cardholder data, personally identifiable information (PII), and
          sensitive corporate data.
        </p>
      </section>

      {/* Project Phases and Tasks */}
      <section className="content-section">
        <h2>Project Phases and Tasks</h2>

        {/* Phase 1 */}
        <h3>Phase 1: Project Initiation</h3>
        <ul>
          <li>
            <strong>Task 1.1:</strong> Form a cross-functional project team comprising cloud security
            professionals, compliance officers, and regional representatives.
          </li>
          <li>
            <strong>Task 1.2:</strong> Define project goals, scope, and deliverables.
          </li>
          <li>
            <strong>Task 1.3:</strong> Conduct a kickoff meeting to align stakeholders.
          </li>
        </ul>

        {/* Phase 2 */}
        <h3>Phase 2: Assessment and Gap Analysis</h3>
        <ul>
          <li>
            <strong>Task 2.1:</strong> <em>Security Assessment</em>
            <ul>
              <li>Evaluate current cloud security measures.</li>
              <li>
                Identify vulnerabilities related to data breaches, IAM, account hijacking, and APIs.
              </li>
            </ul>
          </li>
          <li>
            <strong>Task 2.2:</strong> <em>Regulatory Compliance Assessment</em>
            <ul>
              <li>
                Review existing policies against PCI DSS, ISO/IEC 27017, Common Criteria, FIPS 140-3,
                and GDPR requirements.
              </li>
              <li>Identify compliance gaps in each regional headquarters.</li>
            </ul>
          </li>
          <li>
            <strong>Task 2.3:</strong> Document findings and prioritize areas of improvement.
          </li>
        </ul>

        {/* Continue with other phases similarly */}
        {/* ... */}
      </section>

      {/* Project Deliverables */}
      <section className="content-section">
        <h2>Project Deliverables</h2>
        <ul>
          <li>
            <strong>Assessment Reports:</strong>
            <ul>
              <li>Security assessment report with identified vulnerabilities.</li>
              <li>Compliance gap analysis report.</li>
            </ul>
          </li>
          <li>
            <strong>Strategy Documents:</strong>
            <ul>
              <li>Cloud security enhancement plan.</li>
              <li>Regulatory compliance strategy document.</li>
            </ul>
          </li>
          {/* ... */}
        </ul>
      </section>

      {/* Project Timeline */}
      <section className="content-section">
        <h2>Project Timeline</h2>
        <p>
          <strong>Total Estimated Duration:</strong> 12 weeks
        </p>
        <ul>
          <li>
            <strong>Phase 1:</strong> 1 week
          </li>
          <li>
            <strong>Phase 2:</strong> 2 weeks
          </li>
          {/* ... */}
        </ul>
      </section>

      {/* Continue adding other sections as needed */}
    </div>
  );
};

export default CloudSecurityProject;
