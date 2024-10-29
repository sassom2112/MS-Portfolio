import React from 'react';
import './CommonStyles.css';

const MetasploitDatabaseSetup = () => {
  return (
    <div className="metasploit-db-setup">
      <div className="ctf-header">
        <h1>Setting Up the Metasploit Database Connection</h1>
        <p>Ensure Metasploit can connect to its PostgreSQL database by following these configuration steps.</p>
      </div>

      <div className="content-section">
        <h3>1. Start PostgreSQL</h3>
        <p>First, confirm that PostgreSQL is running by using the following command:</p>
        <pre><code>sudo service postgresql start</code></pre>
      </div>

      <div className="content-section">
        <h3>2. Create the <code>msf</code> Database and User</h3>
        <p>Log into PostgreSQL as the <code>postgres</code> user to set up the <code>msf</code> database and user for Metasploit:</p>
        <pre><code>sudo -u postgres psql</code></pre>
        <p>Once in the PostgreSQL prompt, run the following commands to create the database and user:</p>
        <pre><code>
CREATE DATABASE msf;
CREATE USER msf WITH PASSWORD 'msf';
GRANT ALL PRIVILEGES ON DATABASE msf TO msf;
ALTER USER msf CREATEDB;
        </code></pre>
        <ul>
          <li>This setup creates a database named <code>msf</code>.</li>
          <li>A user <code>msf</code> with the password <code>msf</code> is also created.</li>
          <li>The <code>msf</code> user has all necessary permissions on the <code>msf</code> database.</li>
        </ul>
      </div>

      <div className="content-section">
        <h3>3. Exit PostgreSQL</h3>
        <p>To exit the PostgreSQL prompt, type:</p>
        <pre><code>\q</code></pre>
      </div>

      <div className="content-section">
        <h3>4. Connect Metasploit to the Database</h3>
        <p>Open Metasploit and connect it to the database by running the following command:</p>
        <pre><code>db_connect msf:msf@127.0.0.1/msf</code></pre>
      </div>

      <div className="content-section">
        <h3>5. Check the Connection</h3>
        <p>Finally, verify the connection by executing:</p>
        <pre><code>db_status</code></pre>
        <p>This should display a message indicating that Metasploit is successfully connected to the database.</p>
      </div>

      <div className="ctf-summary">
        <h3>Conclusion</h3>
        <p>Following these steps ensures that Metasploit can reliably connect to its PostgreSQL database, streamlining workflows that require database integration.</p>
      </div>
    </div>
  );
};

export default MetasploitDatabaseSetup;
