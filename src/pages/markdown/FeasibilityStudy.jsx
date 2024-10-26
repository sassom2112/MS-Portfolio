// src/pages/markdown/FeasibilityStudy.jsx
import React from 'react';
import './CommonStyles.css';

const FeasibilityStudy = () => {
  return (
    <div className="feasibility-study-content">
      <div className="ctf-header">
        <h1>Feasibility Study for HIPAA-Compliant Data Pipeline Using AWS</h1>
        <p>Designing a secure, scalable, and HIPAA-compliant data pipeline with AWS services.</p>
      </div>

      <div className="content-section">
        <h3>1. Introduction</h3>
        <p>
          This feasibility study explores the design and implementation of a HIPAA-compliant data pipeline using AWS services. 
          The primary goal is to securely store, encrypt, control access, and monitor Protected Health Information (PHI) in compliance with HIPAA standards.
        </p>
      </div>

      <div className="content-section">
        <h3>2. Objectives</h3>
        <ul>
          <li><strong>Compliance:</strong> Ensure compliance with HIPAA regulations.</li>
          <li><strong>Security:</strong> Implement robust security measures, including encryption, access control, and monitoring.</li>
          <li><strong>Scalability:</strong> Design a scalable pipeline that can handle varying data loads without performance degradation.</li>
          <li><strong>Automation:</strong> Automate processes to reduce human error and enhance security.</li>
          <li><strong>Cost-effectiveness:</strong> Use AWS services cost-effectively while maintaining compliance and performance.</li>
        </ul>
      </div>

      <div className="content-section">
        <h3>3. Scope</h3>
        <p>This study evaluates the feasibility of using the following AWS services for building the data pipeline:</p>
        <ul>
          <li><strong>Amazon S3:</strong> Secure storage with encryption at rest for PHI.</li>
          <li><strong>AWS Key Management Service (KMS):</strong> Encryption key management.</li>
          <li><strong>AWS Lambda:</strong> Serverless data processing.</li>
          <li><strong>Amazon RDS:</strong> Secure database storage for PHI.</li>
          <li><strong>AWS Identity and Access Management (IAM):</strong> Secure access controls.</li>
          <li><strong>AWS CloudTrail and CloudWatch:</strong> Monitoring, logging, and auditing.</li>
        </ul>
      </div>

      <div className="content-section">
        <h3>4. HIPAA Compliance Considerations</h3>
        <ul>
          <li><strong>Data Encryption:</strong> PHI must be encrypted both at rest and in transit. AWS KMS, S3, and RDS provide encryption.</li>
          <li><strong>Access Control:</strong> Restricted access to PHI based on roles using AWS IAM.</li>
          <li><strong>Audit Trails:</strong> AWS CloudTrail logs all PHI-related activities for compliance.</li>
          <li><strong>Backup and Recovery:</strong> Regular backups and recovery plans are essential for HIPAA compliance.</li>
        </ul>
      </div>

      <div className="content-section">
        <h3>5. AWS Services Overview</h3>
        <h4>Amazon S3 (Simple Storage Service)</h4>
        <ul>
          <li>Secure storage for PHI with server-side encryption options (SSE-S3, SSE-KMS).</li>
          <li>IAM policies and bucket policies restrict access to authorized users.</li>
          <li>Lifecycle Management automates archival and deletion processes.</li>
        </ul>

        <h4>AWS Key Management Service (KMS)</h4>
        <ul>
          <li>Manages and controls access to encryption keys.</li>
          <li>Integrates with S3, Lambda, and RDS for comprehensive encryption coverage.</li>
          <li>Supports key rotation policies to ensure regular updates.</li>
        </ul>

        <h4>AWS Lambda</h4>
        <ul>
          <li>Serverless processing for PHI without infrastructure management.</li>
          <li>Can trigger workflows when new data is uploaded to S3.</li>
          <li>Integrated with IAM for secure, authorized data access.</li>
        </ul>

        <h4>Amazon RDS (Relational Database Service)</h4>
        <ul>
          <li>Stores structured PHI securely in a relational database.</li>
          <li>Supports encryption at rest with AWS KMS.</li>
          <li>Offers automated backups and multi-AZ deployment for high availability.</li>
        </ul>

        <h4>AWS Identity and Access Management (IAM)</h4>
        <ul>
          <li>Manages access to AWS resources securely.</li>
          <li>Role-Based Access Control (RBAC) enforces least-privilege access.</li>
        </ul>

        <h4>AWS CloudTrail & CloudWatch</h4>
        <ul>
          <li><strong>CloudTrail:</strong> Logs actions on AWS resources to meet HIPAA auditing requirements.</li>
          <li><strong>CloudWatch:</strong> Real-time monitoring with alerts for potential security issues.</li>
        </ul>
      </div>

      <div className="content-section">
        <h3>6. Risk Assessment</h3>
        <ul>
          <li><strong>Data Breaches:</strong> Encryption and strict access control mitigate the risk of unauthorized access.</li>
          <li><strong>Regulatory Non-Compliance:</strong> AWS HIPAA-eligible services help meet compliance requirements.</li>
          <li><strong>Cost Overruns:</strong> Managed by budgeting, using reserved instances for RDS, and S3 lifecycle policies.</li>
        </ul>
      </div>

      <div className="content-section">
        <h3>7. Cost Analysis</h3>
        <p>Cost of implementing the HIPAA-compliant pipeline will depend on:</p>
        <ul>
          <li><strong>Data Storage Costs:</strong> S3 and RDS charges depend on PHI volume.</li>
          <li><strong>Compute Costs:</strong> Lambda charges based on requests and execution time.</li>
          <li><strong>Encryption:</strong> KMS charges for key usage and requests.</li>
          <li><strong>Monitoring and Logging:</strong> CloudTrail and CloudWatch costs for storing and processing logs.</li>
        </ul>
        <p>Cost optimization strategies include S3 lifecycle policies for cheaper storage classes and reserved instances for RDS.</p>
      </div>

      <div className="content-section">
        <h3>8. Conclusion</h3>
        <p>
          The proposed HIPAA-compliant data pipeline is feasible and can be effectively implemented with AWS services. Leveraging AWS's 
          security features, such as encryption, access control, and monitoring, ensures HIPAA compliance while maintaining scalability 
          and cost-effectiveness.
        </p>
      </div>

      <div className="content-section">
        <h3>9. Next Steps</h3>
        <ul>
          <li>Create a detailed architecture diagram of the data pipeline.</li>
          <li>Implement a proof of concept (PoC) to validate encryption, access control, and logging mechanisms.</li>
          <li>Conduct security audits and risk assessments to ensure compliance.</li>
        </ul>
      </div>
    </div>
  );
};

export default FeasibilityStudy;
