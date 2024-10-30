// src/pages/markdown/FeasibilityStudy.jsx
import React from 'react';
import './CommonStyles.css';

const FeasibilityStudy = () => {
  return (
    <div className="feasibility-study-content">
      <div className="ctf-header">
        <h1>Feasibility Study for HIPAA-Compliant Data Pipeline Using AWS</h1>
        <p>
        This project grew from an internship experience at HNu, where we migrated from AWS cloud and opted for a custom on-prem HIPAA-compliant setup. My role focused on data preprocessing, which sparked my interest in exploring how AWS could be used to build a HIPAA-compliant data pipeline. This project aims to design a secure, scalable pipeline on AWS, emphasizing secure storage, access control, and monitoring for Protected Health Information (PHI). The approach leverages AWS services to ensure compliance, enhance security, and provide scalability and automation.
        </p>
      </div>

      {/* Introduction */}
      <div className="content-section">
        <h3>1. Introduction</h3>
        <p>
          The goal is to design a secure and scalable HIPAA-compliant data pipeline. Key components include data encryption, strict access controls, and comprehensive monitoring to manage PHI securely while adhering to HIPAA standards. This study serves as a roadmap for implementing each stage, with practical commands and configurations in AWS.
        </p>
      </div>

      {/* Objectives */}
      <div className="content-section">
        <h3>2. Objectives</h3>
        <ul>
          <li><strong>Compliance:</strong> Ensure the pipeline meets HIPAA regulatory standards.</li>
          <li><strong>Security:</strong> Apply encryption, role-based access control, and monitoring to protect PHI.</li>
          <li><strong>Scalability:</strong> Design the pipeline to handle varying data loads seamlessly.</li>
          <li><strong>Automation:</strong> Automate key processes, minimizing manual intervention and error.</li>
          <li><strong>Cost-effectiveness:</strong> Optimize AWS services to balance cost and compliance.</li>
        </ul>
      </div>

      {/* Scope */}
      <div className="content-section">
        <h3>3. Scope</h3>
        <p>This project evaluates the use of the following AWS services to create a HIPAA-compliant pipeline:</p>
        <ul>
          <li><strong>Amazon S3:</strong> Encrypted storage for PHI.</li>
          <li><strong>AWS KMS:</strong> Key management and encryption services.</li>
          <li><strong>AWS Lambda:</strong> Serverless processing for data workflows.</li>
          <li><strong>Amazon RDS:</strong> Encrypted, secure database storage for structured PHI.</li>
          <li><strong>AWS IAM:</strong> Secure access control and role management.</li>
          <li><strong>AWS CloudTrail & CloudWatch:</strong> Monitoring, logging, and auditing services.</li>
        </ul>
      </div>

      {/* Compliance Considerations */}
      <div className="content-section">
        <h3>4. HIPAA Compliance Considerations</h3>
        <ul>
          <li><strong>Data Encryption:</strong> Ensure PHI is encrypted both at rest and in transit using AWS KMS, S3, and RDS.</li>
          <li><strong>Access Control:</strong> Use AWS IAM to restrict access based on roles.</li>
          <li><strong>Audit Trails:</strong> Enable AWS CloudTrail to log all actions on PHI-related resources.</li>
          <li><strong>Backup & Recovery:</strong> Regular backups and disaster recovery plans are crucial for HIPAA compliance.</li>
        </ul>
      </div>

      {/* AWS Services Overview */}
      <div className="content-section">
        <h3>5. AWS Services Overview</h3>
        <h4>Amazon S3 (Simple Storage Service)</h4>
        <ul>
          <li>To secure storage for PHI, enable encryption using SSE-S3 or SSE-KMS:</li>
          <pre><code>aws s3api put-bucket-encryption --bucket myBucket --server-side-encryption-configuration file://encryption.json</code></pre>
          <li>Apply IAM policies to restrict access to authorized users only.</li>
          <li>Utilize lifecycle policies for automated data archival or deletion.</li>
        </ul>

        <h4>AWS Key Management Service (KMS)</h4>
        <ul>
          <li>Manage encryption keys with policies controlling access to PHI data.</li>
          <li>Integrate KMS with other services like S3 and RDS for seamless encryption coverage.</li>
          <li>Set up key rotation policies for regular updates.</li>
        </ul>

        <h4>AWS Lambda</h4>
        <ul>
          <li>Use Lambda functions for serverless PHI data processing without managing servers.</li>
          <li>Trigger Lambda on new data uploads to S3 for automated workflows:</li>
          <pre><code>aws lambda create-function --function-name processPHI --runtime python3.8 --role arn:aws:iam::account-id:role/lambda-role --handler lambda_function.handler --zip-file fileb://function.zip</code></pre>
        </ul>

        <h4>Amazon RDS (Relational Database Service)</h4>
        <ul>
          <li>Set up an encrypted RDS instance for structured PHI storage:</li>
          <pre><code>aws rds create-db-instance --db-instance-identifier mydbinstance --engine mysql --master-username admin --master-user-password password --allocated-storage 20 --storage-encrypted</code></pre>
          <li>Enable automated backups for data protection and compliance.</li>
        </ul>

        <h4>AWS Identity and Access Management (IAM)</h4>
        <ul>
          <li>Configure IAM roles with least-privilege access for each team member or service.</li>
          <li>Use Role-Based Access Control (RBAC) to limit access to sensitive PHI data.</li>
        </ul>

        <h4>AWS CloudTrail & CloudWatch</h4>
        <ul>
          <li>Enable CloudTrail to log all PHI-related actions on AWS resources for compliance:</li>
          <pre><code>aws cloudtrail create-trail --name myTrail --s3-bucket-name my-trail-bucket</code></pre>
          <li>Use CloudWatch to set up alerts for security anomalies or resource issues.</li>
        </ul>
      </div>

      {/* Risk Assessment */}
      <div className="content-section">
        <h3>6. Risk Assessment</h3>
        <ul>
          <li><strong>Data Breaches:</strong> Mitigate with strict encryption and role-based access control.</li>
          <li><strong>Regulatory Non-Compliance:</strong> AWS HIPAA-compliant services align with necessary standards.</li>
          <li><strong>Cost Overruns:</strong> Address with budget planning, S3 lifecycle policies, and reserved RDS instances.</li>
        </ul>
      </div>

      {/* Cost Analysis */}
      <div className="content-section">
        <h3>7. Cost Analysis</h3>
        <p>Implementing the pipeline has associated costs based on:</p>
        <ul>
          <li><strong>Data Storage:</strong> S3 and RDS costs depend on the amount of PHI data stored.</li>
          <li><strong>Compute Costs:</strong> Lambda incurs charges per request and execution time.</li>
          <li><strong>Encryption:</strong> KMS costs for key management and usage.</li>
          <li><strong>Monitoring & Logging:</strong> CloudTrail and CloudWatch charges for storing and analyzing logs.</li>
        </ul>
        <p>Cost-saving options include S3 lifecycle policies for archival and RDS reserved instances for long-term use.</p>
      </div>

      {/* Conclusion */}
      <div className="content-section">
        <h3>8. Conclusion</h3>
        <p>
          This feasibility study demonstrates that AWS can support a secure, HIPAA-compliant data pipeline. AWS's built-in security features provide a reliable foundation for PHI management, allowing for scalability and compliance with HIPAA while maintaining cost efficiency.
        </p>
      </div>

      {/* Next Steps */}
      <div className="content-section">
        <h3>9. Next Steps</h3>
        <ul>
          <li>Design an architecture diagram of the proposed data pipeline.</li>
          <li>Implement a proof-of-concept to validate encryption, access controls, and logging mechanisms.</li>
          <li>Conduct regular security audits and risk assessments to confirm ongoing compliance.</li>
        </ul>
      </div>
    </div>
  );
};

export default FeasibilityStudy;
