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
          After gaining access to the target system, we access the MySQL console with root privileges, which provides direct access 
          to the database and its stored data.
        </p>
        <h4>Login to MySQL</h4>
        <p>Command: mysql -u root</p>
        <p><strong>TTP:</strong> Exploitation of SQL Injection (T1190) or credential discovery can provide a foothold into the system.</p>
      </div>

      <div className="content-section">
        <h3>2. Enumerating Databases</h3>
        <p>Once inside the MySQL shell, we enumerate all databases to locate where sensitive information might be stored.</p>
        <h4>Command</h4>
        <p>show databases;</p>
        <h4>Output</h4>
        <p>
          +--------------------+<br />
          | Database           |<br />
          +--------------------+<br />
          | information_schema |<br />
          | mysql              |<br />
          | pentesterlab       |<br />
          | performance_schema |<br />
          +--------------------+
        </p>
        <p><strong>Finding:</strong> The <code>pentesterlab</code> database likely contains application-related data.</p>
        <p><strong>TTP:</strong> Database Enumeration (T1083) reveals potential data stores with sensitive information.</p>
      </div>

      <div className="content-section">
        <h3>3. Switching to the Target Database</h3>
        <p>To focus the search for valuable data, we switch to the <code>pentesterlab</code> database.</p>
        <h4>Command</h4>
        <p>use pentesterlab;</p>
      </div>

      <div className="content-section">
        <h3>4. Enumerating Tables in the Database</h3>
        <p>We list the tables in the <code>pentesterlab</code> database to identify where sensitive user data might be stored.</p>
        <h4>Command</h4>
        <p>show tables;</p>
        <h4>Output</h4>
        <p>
          +------------------------+<br />
          | Tables_in_pentesterlab |<br />
          +------------------------+<br />
          | users                  |<br />
          +------------------------+
        </p>
        <p><strong>Finding:</strong> The <code>users</code> table is a likely location for usernames and passwords.</p>
        <p><strong>TTP:</strong> Table Enumeration (T1083) helps identify critical tables holding high-value data.</p>
      </div>

      <div className="content-section">
        <h3>5. Extracting User Credentials</h3>
        <p>We extract user data from the <code>users</code> table, which is expected to contain login credentials.</p>
        <h4>Command</h4>
        <p>select * from users;</p>
        <h4>Output</h4>
        <p>
          +-------+--------------------------------------+<br />
          | login | password                             |<br />
          +-------+--------------------------------------+<br />
          | admin | 0cefcff1-b087-4710-95ee-92218b028cdf |<br />
          +-------+--------------------------------------+
        </p>
        <p><strong>Finding:</strong> The extracted admin credentials may require further cracking or analysis.</p>
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
