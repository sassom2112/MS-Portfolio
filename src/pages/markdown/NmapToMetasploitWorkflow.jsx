import React from 'react';
import './CommonStyles.css';

const NmapToMetasploitWorkflow = () => {
  return (
    <div className="nmap-metasploit-workflow">
      <div className="ctf-header">
        <h1>Nmap to Metasploit Workflow</h1>
        <p>This project is from the <strong>Metsploit</strong> book that integrats Nmap scans with Metasploit for efficient reconnaissance and exploitation.</p>
      </div>

      <div className="content-section">
        <h3>Step 1: Scan the Target Network with Nmap</h3>
        <p>To start, run an Nmap scan on the metasploitable2 IP to gather essential information about available services and potential vulnerabilities:</p>
        
        <h4>Command Explanation:</h4>
        <p>nmap -Pn -sS -A -oX Subnet1 metasploitable2</p>
        <ul>
          <li>-Pn: Disables host discovery, assuming the host is online.</li>
          <li>-sS: Performs a TCP SYN scan, a stealthy scanning technique that minimizes detection.</li>
          <li>-A: Enables OS detection, version detection, script scanning, and traceroute for detailed information.</li>
          <li>-oX Subnet1: Outputs the scan results in XML format with the filename Subnet1, useful for import into Metasploit.</li>
          <li>metasploitable2: Specifies the target host (make sure it’s configured in your <strong>/etc/hosts</strong> file).</li>
        </ul>

        <h4>Execute the Nmap Command:</h4>
        <p>Run the following command to perform the scan:</p>
        <p>nmap -Pn -sS -A -oX Subnet1 metasploitable2</p>
        <p>Upon completion, an XML output file <strong>Subnet1.xml</strong> is generated, containing comprehensive scan results for import into Metasploit.</p>
      </div>

      <div className="content-section">
        <h3>Step 2: Open Metasploit Console and Connect to the Database</h3>
        
        <h4>Launch Metasploit:</h4>
        <p>Open the Metasploit console by entering:</p>
        <p>msfconsole</p>
        
        <h4>Database Connection Setup:</h4>
        <p>To use Metasploit’s database functionalities, establish a connection to the PostgreSQL database. If it isn’t already connected, use:</p>
        <p>msf$ db_connect msf:msf@127.0.0.1/msf</p>
        <p>Verify the database connection status:</p>
        <p>msf$ db_status</p>
        <p>The output should confirm, "Connected to msf. Connection type: postgresql," indicating a successful database connection.</p>
      </div>

      <div className="content-section">
        <h3>Import the Nmap Scan Results into Metasploit</h3>
        
        <h4>Importing XML Scan Results:</h4>
        <p>With Metasploit connected to the database, import the Nmap scan results for analysis. Run:</p>
        <p>msf$ db_import Subnet1.xml</p>
        <p>Metasploit will process the XML file and store the scan data in its database, making it readily accessible for further exploitation or reconnaissance.</p>
      </div>

      <div className="content-section">
        <h3>Verify the Imported Data</h3>
        
        <h4>Listing Hosts in the Database:</h4>
        <p>To confirm that the Nmap data has been successfully imported, list all hosts currently in the Metasploit database:</p>
        <p>msf$ hosts -c address</p>
        <p>This command outputs the IP addresses of all hosts stored in the database, including the victim IP <strong>metasploitable2</strong>, verifying successful import.</p>
      </div>

      <div className="content-section">
        <h3>Summary of Commands</h3>
        <p>For reference, here’s a summary of the commands used in this workflow:</p>
        <ul>
          <li><strong>Run Nmap Scan:</strong> nmap -Pn -sS -A -oX Subnet1 metasploitable2</li>
          <li><strong>Open Metasploit and Connect to the Database:</strong> msfconsole, msf$ db_connect msf:msf@127.0.0.1/msf, msf$ db_status</li>
          <li><strong>Import Nmap Results into Metasploit:</strong> msf$ db_import Subnet1.xml</li>
          <li><strong>Verify Hosts in Metasploit Database:</strong> msf$ hosts -c address</li>
        </ul>
      </div>

      <div className="ctf-summary">
        <h3>Conclusion</h3>
        <p>
          Integrating Nmap scan results with Metasploit streamlines data management, providing an efficient approach to reconnaissance and exploitation.
          This workflow enables quick access to scan results for actionable analysis and organized exploitation.
        </p>
      </div>
    </div>
  );
};

export default NmapToMetasploitWorkflow;
