import React from 'react';
import './CommonStyles.css';

const MetasploitDatabaseSetup = () => {
  return (
    <div className="metasploit-db-setup">
      <div className="ctf-header">
        <h1>Setting Up the Metasploit Database Connection</h1>
        <p>Establish a reliable connection between Metasploit and its PostgreSQL database for improved performance and data storage.</p>
      </div>

      <div className="content-section">
        <h3>Start PostgreSQL</h3>
        <p>
          Ensure PostgreSQL is running on your system, as Metasploit relies on it for database functions. Use the following command to start the service:
        </p>
        <pre><code>sudo service postgresql start</code></pre>
        <p>
          This command verifies that the PostgreSQL database server is running and ready to accept connections, a requirement for Metasploit’s database setup.
        </p>
      </div>

      <div className="content-section">
        <h3> Create the msf Database and User</h3>
        <p>
          Log into PostgreSQL as the postgres user to create a dedicated database and user for Metasploit. This ensures that Metasploit has exclusive 
          access to a database for storing data related to scans, exploits, and sessions.
        </p>
        <pre><code>sudo -u postgres psql</code></pre>
        
        <h4>Creating the Database and User</h4>
        <p>
          In the PostgreSQL prompt, execute the following SQL commands to create the <code>msf</code> database and a user with necessary privileges:
        </p>
        <pre><code>
CREATE DATABASE msf;
CREATE USER msf WITH PASSWORD 'msf';
GRANT ALL PRIVILEGES ON DATABASE msf TO msf;
ALTER USER msf CREATEDB;
        </code></pre>
        
        <ul>
          <li>CREATE DATABASE msf; – Creates a new database named msf.</li>
          <li>CREATE USER msf WITH PASSWORD 'msf'; – Creates a user msf with a password, giving Metasploit access to the database.</li>
          <li>GRANT ALL PRIVILEGES ON DATABASE msf TO msf; – Grants full permissions to the msf user on the msf database.</li>
          <li>ALTER USER msf CREATEDB; – Allows the msf user to create databases, useful for certain Metasploit functions.</li>
        </ul>

      </div>

      <div className="content-section">
        <h3>Exit PostgreSQL</h3>
        <p>
          Once the database and user setup is complete, exit the PostgreSQL prompt by typing:
        </p>
        <pre><code>\q</code></pre>
        <p>This command exits the PostgreSQL command-line interface, returning you to the main terminal.</p>
      </div>

      <div className="content-section">
        <h3>4. Connect Metasploit to the Database</h3>
        <p>
          Launch Metasploit and establish a connection to the PostgreSQL database by executing the following command within the Metasploit console:
        </p>
        <pre><code>db_connect msf:msf@127.0.0.1/msf</code></pre>
        <p>
          This command specifies the username <code>msf</code>, password <code>msf</code>, and the database name <code>msf</code> located on the local machine.
          Successful execution will connect Metasploit to the PostgreSQL database, enabling it to store and retrieve scan and session data.
        </p>
      </div>

      <div className="content-section">
        <h3>5. Verify the Connection</h3>
        <p>
          To confirm that Metasploit is properly connected to the database, use the following command:
        </p>
        <pre><code>db_status</code></pre>
        <p>
          This command should return a message indicating that Metasploit is connected to PostgreSQL. A successful connection ensures that Metasploit can store 
          and manage data efficiently, which is essential for larger assessments and red team engagements.
        </p>
      </div>

      <div className="ctf-summary">
        <h3>Conclusion</h3>
        <p>
          By following these steps, you establish a reliable database connection for Metasploit, allowing it to seamlessly store scan results, exploit data, 
          and session information. This setup not only improves Metasploit's performance but also enables more organized and persistent engagement tracking.
        </p>
      </div>
    </div>
  );
};

export default MetasploitDatabaseSetup;
