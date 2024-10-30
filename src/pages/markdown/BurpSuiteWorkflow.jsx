// src/pages/markdown/BurpSuiteWorkflow.jsx
import React from 'react';
import './CommonStyles.css';

const BurpSuiteWorkflow = () => {
  return (
    <div className="burp-suite-content">
      <header className="research-header">
        <h1>Exploring Web Vulnerabilities with Burp Suite</h1>
        <p>
          Burp Suite is an essential tool for anyone diving into web security. It allows us to intercept, inspect, and modify HTTP/S traffic between a browser and a target server. This project explores how Burp Suite can help uncover vulnerabilities like SQL injection and file upload bypasses, using a hands-on approach to simulate a controlled test environment.
        </p>
      </header>

      <section className="research-section">
        <h3>Understanding the Workflow</h3>
        
        <h4>1. Intercepting Requests with Burp Suite</h4>
        <p>
          The first step was accessing the <strong>landing page</strong> and enabling Burp Suite’s <strong>Intercept</strong> feature to capture the HTTP request as we navigated to the admin page. This interception let us closely analyze the parameters sent to the web application. By saving this initial request, we created a record to test against further.
        </p>
        
        <h4>2. Testing for SQL Injection with SQLMap</h4>
        <p>
          Next, we fed the intercepted request file into SQLMap using <code>sqlmap -r requestfile --dump</code>. SQLMap quickly identified that the parameters were vulnerable to SQL injection, allowing it to retrieve hashed credentials from the database. From there, we used SQLMap’s dictionary-based attack to crack these password hashes, ultimately gaining administrative credentials.
        </p>
        
        <h4>3. Accessing the Web Server’s Admin Interface</h4>
        <p>
          With admin credentials, we logged in and explored the admin interface. Here, we discovered an <strong>upload page</strong> that would prove useful in testing file upload security.
        </p>
        
        <h4>4. Bypassing File Upload Restrictions</h4>
        <p>
          Initially, the upload page allowed only <code>.png</code> files, blocking other extensions like <code>.php</code>. To get around this, we used Burp Suite to intercept the upload request and changed the extension of our <strong>PHP reverse shell</strong> from <code>.php</code> to <code>.png</code>. Surprisingly, the server accepted the disguised PHP file, enabling us to execute a reverse shell once uploaded and accessed.
        </p>
      </section>

      <section className="research-section">
        <h3>Key Vulnerabilities Discovered</h3>
        
        <h4>SQL Injection</h4>
        <p>
          The SQL injection vulnerability allowed us to extract sensitive data, including password hashes, from the database by injecting SQL commands directly into the admin page’s parameters.
        </p>
        
        <h4>File Upload Vulnerability</h4>
        <p>
          The web application’s upload feature relied solely on the file extension for validation, allowing us to upload a PHP file disguised as a <code>.png</code>. This flaw led to remote code execution, showcasing the risk of inadequate upload validation.
        </p>
      </section>

      <section className="research-section">
        <h3>Proposed Remedies</h3>
        
        <h4>Preventing SQL Injection</h4>
        <ul>
          <li>Use prepared statements and parameterized queries to prevent SQL injection.</li>
          <li>Apply robust input validation and sanitize user inputs.</li>
          <li>Consider implementing a Web Application Firewall (WAF) to detect and block SQL injection attempts.</li>
        </ul>
        
        <h4>Securing File Uploads</h4>
        <ul>
          <li>Implement stringent checks on file uploads, like verifying the file’s MIME type and using other security measures to ensure only safe files are accepted.</li>
          <li>Store uploaded files outside the web root and use randomized file names to prevent easy access.</li>
          <li>Apply server-side validation and block execution permissions on uploaded files where feasible.</li>
        </ul>
      </section>

      <section className="research-summary">
        <h3>Summary</h3>
        <p>
          This project highlights Burp Suite’s utility for both parameter tampering and file upload bypasses, showcasing how it can be a powerful tool in identifying and exploiting web vulnerabilities. From intercepting requests to executing payloads, Burp Suite was pivotal in exploring security gaps.
        </p>
      </section>
    </div>
  );
};

export default BurpSuiteWorkflow;
