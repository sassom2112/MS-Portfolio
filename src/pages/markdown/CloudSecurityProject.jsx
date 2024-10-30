// src/pages/markdown/CloudSecurityProject.jsx

import React from 'react';
import './CommonStyles.css';

const CloudSecurityProject = () => {
  return (
    <div className="Report-content">
      <div className="ctf-header">
        <h1>Addressing Cloud-Based Security and Regulatory Compliance for Widgets International</h1>
        <p>
          This Purdue University project aims to enhance cloud security measures at Widgets International by addressing critical concerns like data breaches, IAM, account hijacking, and insecure APIs. The project will ensure compliance across all regional headquarters.
        </p>
      </div>

      {/* Project Overview */}
      <section className="content-section">
        <h2>Project Phases and Detailed Tasks</h2>

        {/* Phase 1: Project Initiation */}
        <h3>Phase 1: Project Initiation</h3>
        <ul>
          <li>
            <strong>Task 1.1:</strong> Form a project team with cloud security professionals, compliance officers, and regional reps.
          </li>
          <li>
            <strong>Task 1.2:</strong> Define goals, scope, and deliverables.
          </li>
          <li>
            <strong>Task 1.3:</strong> Conduct a kickoff meeting to align stakeholders and review project objectives.
          </li>
        </ul>

        {/* Phase 2: Assessment and Gap Analysis */}
        <h3>Phase 2: Assessment and Gap Analysis</h3>
        <h4>Security Assessment</h4>
        <ul>
          <li>
            <strong>Task 2.1:</strong> Evaluate current security with vulnerability scanning tools:
            <ul>
              <li>Run AWS Trusted Advisor for AWS environments:</li>
              <pre><code>aws support describe-trusted-advisor-checks</code></pre>
              <li>Use Azure Security Center for Azure configurations:</li>
              <pre><code>az security assessment list</code></pre>
            </ul>
          </li>
          <li>
            <strong>Task 2.2:</strong> Conduct IAM and API security checks.
            <ul>
              <li>In AWS, verify IAM policies for least-privilege access:</li>
              <pre><code>aws iam get-account-authorization-details</code></pre>
              <li>Inspect API Gateway logs for unauthorized access attempts:</li>
              <pre><code>aws logs describe-log-groups --log-group-name API-Gateway-Logs</code></pre>
            </ul>
          </li>
        </ul>

        <h4>Compliance Assessment</h4>
        <ul>
          <li>
            <strong>Task 2.3:</strong> Review policies for PCI DSS, GDPR, ISO/IEC 27017, Common Criteria, and FIPS 140-3.
          </li>
          <li>
            <strong>Task 2.4:</strong> Identify compliance gaps in each region. Use third-party tools like Qualys or Tenable for automated compliance checks:
            <pre><code>qualys_scan --compliance --pci</code></pre>
          </li>
        </ul>

        {/* Phase 3: Implementing Enhanced Cloud Security */}
        <h3>Phase 3: Implementing Enhanced Cloud Security</h3>
        <h4>Data Breach Mitigation</h4>
        <ul>
          <li>
            <strong>Task 3.1:</strong> Enable data encryption for cloud storage:
            <ul>
              <li>Encrypt S3 data at rest:</li>
              <pre><code>aws s3api put-bucket-encryption --bucket myBucket --server-side-encryption-configuration file://encryption.json</code></pre>
              <li>Activate encryption on Azure Blob storage:</li>
              <pre><code>az storage account update --name mystorageaccount --encryption-services blob</code></pre>
            </ul>
          </li>
        </ul>

        <h4>Strengthen IAM</h4>
        <ul>
          <li>
            <strong>Task 3.2:</strong> Implement MFA for user accounts in AWS and Azure:
            <ul>
              <li>Enable MFA for all IAM users in AWS:</li>
              <pre><code>
aws iam enable-mfa-device --user-name &lt;username&gt; --serial-number &lt;mfa-serial&gt; --authentication-code-1 &lt;code1&gt; --authentication-code-2 &lt;code2&gt;
              </code></pre>
              <li>Require MFA in Azure Active Directory:</li>
              <pre><code>az ad user update --id user@domain.com --force-change-password-next-login true</code></pre>
            </ul>
          </li>
          <li>
            <strong>Task 3.3:</strong> Enforce role-based access control (RBAC) with least-privilege principles.
          </li>
        </ul>

        <h4>Account Hijacking Prevention</h4>
        <ul>
          <li>
            <strong>Task 3.4:</strong> Implement anomaly detection for login attempts using SIEM systems like Splunk or ELK.
            <ul>
              <li>Splunk example query for unusual login locations:</li>
              <pre><code>index=aws_logs source="cloudtrail" action="Login" | stats count by user_ip | where count `&gt;` threshold</code></pre>
            </ul>
          </li>
        </ul>

        <h4>API Security</h4>
        <ul>
          <li>
            <strong>Task 3.5:</strong> Configure API Gateway with throttling and rate-limiting to prevent abuse.
            <pre><code>aws apigateway put-method-throttling --rest-api-id &lt;api-id&gt; --method GET --throttle.rate-limit 100 --throttle.burst-limit 50</code></pre>
          </li>
        </ul>

        {/* Continue with the other phases as in your original code */}
      </section>

      {/* Add the rest of your component here, as in your original code */}
    </div>
  );
};

export default CloudSecurityProject;
