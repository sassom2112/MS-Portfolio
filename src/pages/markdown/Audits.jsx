// src/pages/markdown/Audits.jsx

import React from 'react';
import './CommonStyles.css';

const Audits = () => {
  return (
    <div className="Report-content">
      <div className="ctf-header">
        <h1>Understanding IT Auditing and Compliance</h1>
      </div>

      {/* Introduction */}
      <section className="content-section">
        <p>
          IT auditing is a critical process that examines computer systems and networks to evaluate the
          effectiveness of technical and procedural controls in minimizing risks. Auditors investigate
          issues such as inadequate information security, inefficient use of resources, weak policies, and
          potential fraud or information theft. Some IT audits are mandated by industries and governing
          bodies to ensure compliance with regulations.
        </p>
      </section>

      {/* Types of Audits */}
      <section className="content-section">
        <h2>Types of Audits</h2>
        <ul>
          <li>
            <strong>Internal Audits:</strong> Conducted by employees within the organization to examine
            internal controls and compliance with management's goals. While familiar with the organization,
            internal auditors may lack objectivity.
          </li>
          <li>
            <strong>External Audits:</strong> Performed by independent consultants or auditing firms to
            provide an objective assessment. They strictly adhere to compliance obligations and offer a
            formal, structured process.
          </li>
        </ul>
      </section>

      {/* IT Security Audits */}
      <section className="content-section">
        <h2>IT Security Audits</h2>
        <p>
          An IT security audit focuses on the security posture of a company, including network security,
          implementation of the principle of least privilege (PoLP), adherence to relevant standards, and
          the existence of business continuity and disaster recovery plans. Physical security is also
          assessed.
        </p>
        <h3>Components of an IT Security Audit</h3>
        <ul>
          <li>
            <strong>Risk Evaluation or Assessment:</strong> Evaluates defense-in-depth strategies,
            governance policies, redundancy plans, use of corporate technology resources, and IT security
            policies.
          </li>
          <li>
            <strong>User Access and Rights Review:</strong> Examines the use of roles and security groups,
            implementation of PoLP, prevention of privilege creep, and documentation of security violations.
          </li>
        </ul>
      </section>

      {/* Financial Audits */}
      <section className="content-section">
        <h2>Financial Audits</h2>
        <p>
          Financial audits assess compliance with regulations such as the Sarbanes-Oxley Act (SOX) and
          Payment Card Industry Data Security Standard (PCI DSS).
        </p>
        <ul>
          <li>
            <strong>Sarbanes-Oxley (SOX):</strong> A federal law that requires companies to undergo audits
            focusing on IT security, access controls, data backup, change management, and physical security.
            Failed audits can have severe consequences, including criminal liability for senior officers.
          </li>
          <li>
            <strong>PCI DSS Compliance:</strong> A set of policies enforced by major credit card companies
            detailing procedures businesses should follow to secure credit card information. Failing PCI
            audits can result in substantial fines and loss of the ability to accept credit card payments.
          </li>
        </ul>
      </section>

      {/* Auditing Practices */}
      <section className="content-section">
        <h2>Auditing Practices</h2>
        <h3>Permissions Auditing</h3>
        <p>
          Verifies that accounts, groups, and roles adhere to the principle of least privilege. It aims to
          prevent privilege creep, where users accumulate unnecessary permissions over time.
        </p>
        <h3>Usage Auditing</h3>
        <p>
          Ensures systems are used appropriately and in accordance with organizational policies. It verifies
          that rights assigned to groups are necessary and used correctly.
        </p>
        <h3>Audit Logs</h3>
        <p>
          Audit logs track user activity on a system, including the date and time of actions, user identity,
          specific events, and success or failure of actions. Regularly reviewing audit logs is essential
          for identifying security incidents.
        </p>
      </section>

      {/* Protecting Audit Logs */}
      <section className="content-section">
        <h2>Protecting Audit Logs</h2>
        <p>
          Audit logs should be safeguarded to prevent tampering and unauthorized access. Implementing access
          controls, using write-once media, and monitoring for failed log recording are crucial steps in
          protecting audit logs.
        </p>
      </section>

      {/* Auditing Device Logs */}
      <section className="content-section">
        <h2>Auditing Device Logs</h2>
        <p>
          Auditing device logs involves enabling logging on network devices (e.g., routers, switches) and
          periodically reviewing the logs to identify important events like failed login attempts or device
          restarts. Configuring remote log servers and log aggregation can help manage and analyze log data
          effectively.
        </p>
      </section>

      {/* Conclusion */}
      <section className="content-section">
        <h2>Conclusion</h2>
        <p>
          IT auditing plays a vital role in ensuring the security and compliance of an organization's
          information systems. By regularly conducting audits, implementing strong access controls,
          protecting audit logs, and adhering to compliance standards like SOX and PCI DSS, organizations
          can mitigate risks and maintain trust with stakeholders.
        </p>
      </section>
    </div>
  );
};

export default Audits;
