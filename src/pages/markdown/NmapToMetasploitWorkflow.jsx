import React from 'react';
import './CommonStyles.css';

const NmapToMetasploitWorkflow = () => {
  return (
    <div className="nmap-metasploit-workflow">
      <div className="ctf-header">
        <h1>Nmap to Metasploit Workflow</h1>
        <p>A step-by-step guide on integrating Nmap scans with Metasploit for efficient reconnaissance and exploitation.</p>
      </div>

      <div className="content-section">
        <h3>Step 1: Scan the Target Network with Nmap</h3>
        <p>Run an Nmap scan on the <code>metasploitable2</code> host for comprehensive reconnaissance:</p>
        
        <h4>Command Explanation:</h4>
        <pre><code>nmap -Pn -sS -A -oX Subnet1 metasploitable2</code></pre>
        <ul>
          <li><code>-Pn</code>: Disables host discovery, assuming the host is online.</li>
          <li><code>-sS</code>: Performs a TCP SYN scan, a stealthy scanning technique.</li>
          <li><code>-A</code>: Enables OS detection, version detection, script scanning, and traceroute.</li>
          <li><code>-oX Subnet1</code>: Outputs the scan results in XML format with the filename <code>Subnet1</code>.</li>
          <li><code>metasploitable2</code>: The target hostname (ensure it’s configured in your <code>/etc/hosts</code> file).</li>
        </ul>

        <h4>Run the Nmap Command:</h4>
        <pre><code>nmap -Pn -sS -A -oX Subnet1 metasploitable2</code></pre>
        <p>Wait for the scan to complete. The XML output file <code>Subnet1.xml</code> will be generated.</p>
      </div>

      <div className="content-section">
        <h3>Step 2: Open Metasploit Console and Connect to the Database</h3>
        
        <h4>Launch Metasploit:</h4>
        <pre><code>msfconsole</code></pre>
        
        <h4>Connect to the Database:</h4>
        <p>If the database isn’t configured, use the following command:</p>
        <pre><code>msf> db_connect msf:msf@127.0.0.1/msf</code></pre>
        <p>Then, check the database status:</p>
        <pre><code>msf> db_status</code></pre>
        <p>It should display "Connected to msf. Connection type: postgresql."</p>
      </div>

      <div className="content-section">
        <h3>Step 3: Import the Nmap Scan Results into Metasploit</h3>
        
        <h4>Import the XML File:</h4>
        <p>Load the scan results from the <code>Subnet1.xml</code> file into Metasploit’s database:</p>
        <pre><code>msf> db_import Subnet1.xml</code></pre>
        <p>Metasploit will import the results, making them available for analysis and further actions.</p>
      </div>

      <div className="content-section">
        <h3>Step 4: Verify the Imported Data</h3>
        
        <h4>List Hosts in the Database:</h4>
        <p>To confirm that the scan data has been successfully imported, check the list of hosts in the database:</p>
        <pre><code>msf> hosts -c address</code></pre>
        <p>This command displays the IP addresses of all hosts in the database, including the victim IP <code>metasploitable2</code>.</p>
      </div>

      <div className="content-section">
        <h3>Summary of Commands</h3>
        <p>For reference, here’s a summary of the commands used in this workflow:</p>
        <ul>
          <li><strong>Run Nmap Scan:</strong> <code>nmap -Pn -sS -A -oX Subnet1 metasploitable2</code></li>
          <li><strong>Open Metasploit and Connect to the Database:</strong> <code>msfconsole</code>, <code>msf> db_connect msf:msf@127.0.0.1/msf</code>, <code>msf> db_status</code></li>
          <li><strong>Import Nmap Results into Metasploit:</strong> <code>msf> db_import Subnet1.xml</code></li>
          <li><strong>Verify Hosts in Metasploit Database:</strong> <code>msf> hosts -c address</code></li>
        </ul>
      </div>

      <div className="ctf-summary">
        <h3>Conclusion</h3>
        <p>
          This workflow outlines the integration of Nmap scan results with Metasploit, enabling organized and efficient data handling 
          for further analysis and exploitation. Integrating these tools facilitates a streamlined approach to reconnaissance.
        </p>
      </div>
    </div>
  );
};

export default NmapToMetasploitWorkflow;
