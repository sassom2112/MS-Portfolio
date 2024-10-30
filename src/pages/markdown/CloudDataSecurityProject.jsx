// src/pages/markdown/CloudDataSecurityProject.jsx

import React from 'react';
import './CommonStyles.css';

const CloudDataSecurityProject = () => {
  return (
    <div className="Report-content">
      <div className="ctf-header">
        <h1>Enhancing Cloud Data Security Throughout the Data Lifecycle</h1>
        <p>
          This project focuses on securing data within cloud environments at each lifecycle stage with
          concrete tools, commands, and techniques. The goal is to ensure data integrity, confidentiality,
          and regulatory compliance.
        </p>
      </div>

      {/* Project Overview */}
      <section className="content-section">
        <h2>Project Phases and Detailed Steps</h2>

        {/* Phase 1: Assessment and Planning */}
        <h3>Phase 1: Assessment and Planning</h3>
        <p>This phase involves analyzing current security posture, identifying risks, and planning.</p>
        <ul>
          <li>
            <strong>Task 1.1:</strong> Conduct Security Assessment
            <ul>
              <li>Run a security assessment tool, such as AWS Security Hub for AWS environments:</li>
              <pre><code>aws securityhub start-security-hub</code></pre>
              <li>For Azure, use Azure Security Center to evaluate configurations:</li>
              <pre><code>az security assessment list</code></pre>
            </ul>
          </li>
          <li>
            <strong>Task 1.2:</strong> Identify Vulnerabilities
            <ul>
              <li>Use vulnerability scanning tools like Tenable.io or Qualys for in-depth scanning of services.</li>
            </ul>
          </li>
          <li>
            <strong>Task 1.3:</strong> Review Compliance Requirements
            <ul>
              <li>Assess data handling policies for GDPR, HIPAA, and PCI DSS requirements.</li>
            </ul>
          </li>
        </ul>

        {/* Phase 2: Data Lifecycle Security Implementation */}
        <h3>Phase 2: Data Lifecycle Security Implementation</h3>
        <h4>Data Creation and Storage</h4>
        <ul>
          <li>
            <strong>Task 2.1:</strong> Encrypt Data at Rest and in Transit
            <ul>
              <li>Enable encryption for AWS S3 storage using AWS Key Management Service (KMS):</li>
              <pre><code>aws s3api put-bucket-encryption --bucket myBucket --server-side-encryption-configuration file://encryption.json</code></pre>
              <li>For Azure Blob storage:</li>
              <pre><code>az storage account update --name mystorageaccount --encryption-services blob</code></pre>
            </ul>
          </li>
          <li>
            <strong>Task 2.2:</strong> Access Control with IAM
            <ul>
              <li>Configure IAM policies for least-privilege access in AWS:</li>
              <pre><code>aws iam create-policy --policy-name LeastPrivilegePolicy --policy-document file://policy.json</code></pre>
            </ul>
          </li>
          <li>
            <strong>Task 2.3:</strong> Data Integrity with Hashing
            <ul>
              <li>Use SHA-256 hashing to verify data integrity:</li>
              <pre><code>echo "data" | sha256sum</code></pre>
            </ul>
          </li>
        </ul>

        <h4>Data Usage and Sharing</h4>
        <ul>
          <li>
            <strong>Task 2.4:</strong> Mask Sensitive Data
            <ul>
              <li>Implement data masking in applications using the Faker library in Python:</li>
              <pre><code>pip install faker</code></pre>
              <pre><code>from faker import Faker; fake = Faker(); print(fake.ssn())</code></pre>
            </ul>
          </li>
          <li>
            <strong>Task 2.5:</strong> Tokenization for PII
            <ul>
              <li>Implement tokenization using third-party libraries or services like Vault.</li>
            </ul>
          </li>
        </ul>

        <h4>Data Archiving</h4>
        <ul>
          <li>
            <strong>Task 2.7:</strong> Secure Archiving Solutions
            <ul>
              <li>Archive data securely with Amazon Glacier:</li>
              <pre><code>aws glacier create-vault --vault-name my-vault</code></pre>
            </ul>
          </li>
        </ul>

        <h4>Data Deletion and Destruction</h4>
        <ul>
          <li>
            <strong>Task 2.9:</strong> Secure Data Deletion
            <ul>
              <li>Use cryptographic erasure techniques (AWS KMS) to delete keys and render data unreadable:</li>
              <pre><code>aws kms schedule-key-deletion --key-id my-key-id</code></pre>
            </ul>
          </li>
        </ul>
      </section>

      {/* Deliverables */}
      <section className="content-section">
        <h2>Project Deliverables</h2>
        <ul>
          <li>
            <strong>Security Assessment Report:</strong> Comprehensive security findings from scans.
          </li>
          <li>
            <strong>Updated Security Policies:</strong> Policies for data encryption, IAM usage, and compliance.
          </li>
        </ul>
      </section>

      {/* Resources Required */}
      <section className="content-section">
        <h2>Resources Required</h2>
        <ul>
          <li><strong>Tools:</strong> AWS KMS, Azure Security Center, SIEM solutions like Splunk or ELK.</li>
          <li><strong>Personnel:</strong> Cloud Security Specialists, Compliance Analysts.</li>
        </ul>
      </section>
    </div>
  );
};

export default CloudDataSecurityProject;
