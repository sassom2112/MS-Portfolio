// src/pages/markdown/BurpSuiteWorkflow.jsx
import React from 'react';
import './CommonStyles.css';

const BurpSuiteWorkflow = () => {
  return (
    <div className="burp-suite-content">
      <div className="ctf-header">
        <h1>Burp Suite Workflow</h1>
        <p>
          Burp Suite is a widely used web vulnerability scanner and proxy tool that allows security researchers to intercept,
          inspect, and modify HTTP/S traffic between their browser and the target web server. It is particularly useful for
          discovering web application vulnerabilities such as SQL injection, file upload vulnerabilities, and more.
        </p>
      </div>

      <div className="content-section">
        <h3>Workflow</h3>
        
        <h4>1. Initial Interception with Burp Suite</h4>
        <p>
          After accessing the <strong>landing page</strong>, Burp Suite's <strong>Intercept</strong> feature was used to capture
          the HTTP request as we attempted to navigate to the admin page. Burp Suite allowed us to analyze the parameters sent
          by the web application, particularly those used in the admin page request. We saved this intercepted request to a file
          for further analysis.
        </p>
        
        <h4>2. SQL Injection Testing with SQLMap</h4>
        <p>
          The saved request file was fed into SQLMap using the command <code>sqlmap -r requestfile --dump</code>. SQLMap identified
          SQL injection vulnerabilities in the parameters, enabling it to retrieve hashed credentials from the database. These
          password hashes were then cracked using SQLMap's dictionary-based attack feature, providing us access to administrative
          credentials.
        </p>
        
        <h4>3. Gaining a Foothold on the Web Server</h4>
        <p>
          After successfully cracking the admin credentials, we logged in and explored the admin interface. During this exploration,
          we discovered an <strong>upload page</strong>.
        </p>
        
        <h4>4. Bypassing File Upload Restrictions</h4>
        <p>
          The upload page initially only allowed files with <code>.png</code> extensions, rejecting other file types such as
          <code>.php</code>. Using Burp Suite, we intercepted the upload request and modified the file extension of our 
          <strong>PHP reverse shell</strong> file from <code>.php</code> to <code>.png</code>, thereby bypassing the lenient file 
          type restrictions. The web server accepted the <code>.png</code> file, even though it contained PHP code, allowing us to
          execute the reverse shell once the file was uploaded and accessed.
        </p>
      </div>

      <div className="content-section">
        <h3>Vulnerability Researched</h3>
        
        <h4>SQL Injection</h4>
        <p>
          The ability to inject SQL commands into the admin page's parameters resulted in the extraction of sensitive data
          (password hashes).
        </p>
        
        <h4>File Upload Vulnerability</h4>
        <p>
          The web application's upload functionality was not properly validating file contents, only superficially checking the
          file extension. This allowed us to upload a malicious PHP file disguised as an image (<code>.png</code>), leading to 
          remote code execution on the server.
        </p>
      </div>

      <div className="content-section">
        <h3>Remedy</h3>
        
        <h4>SQL Injection</h4>
        <ul>
          <li>Implement prepared statements and parameterized queries to prevent SQL injection.</li>
          <li>Apply robust input validation and sanitize user inputs.</li>
          <li>Use Web Application Firewalls (WAFs) to detect and block SQL injection attempts.</li>
        </ul>
        
        <h4>File Upload Vulnerability</h4>
        <ul>
          <li>Perform more stringent checks on file uploads, such as inspecting the file content (MIME type) and using security measures to ensure only safe files are uploaded.</li>
          <li>Store uploaded files outside the web root and use randomized file names.</li>
          <li>Implement server-side validation and block the execution of uploaded files where possible.</li>
        </ul>
      </div>

      <div className="ctf-summary">
        <h3>Summary</h3>
        <p>
          This sequence outlines how Burp Suite can be used for both parameter tampering and file upload manipulation,
          demonstrating its effectiveness in web exploitation workflows.
        </p>
      </div>
    </div>
  );
};

export default BurpSuiteWorkflow;
