import React from 'react';
import './CommonStyles.css';

const StealthNmapScan = () => {
  return (
    <div className="stealth-nmap-scan">
      <div className="ctf-header">
        <h1>Advanced Reconnaissance with Stealthy Nmap Scan</h1>
        <p>This guide outlines how to perform a stealthy Nmap scan by spoofing an IP address of another host on the network, an advanced technique to evade detection during reconnaissance.</p>
      </div>

      <div className="content-section">
        <h3>Overview</h3>
        <p>To execute a stealthy scan, we’ll use an idle host on the target network that has an incremental IP ID pattern, allowing us to spoof this host’s IP address. This technique, known as an idle scan, can be used to obscure the source of the scan.</p>
      </div>

      <div className="content-section">
        <h3>1. Identify an Idle Host with IP ID Scan</h3>
        <p>First, we need to locate an idle host with an incremental IP ID. This host will act as a "zombie" for our scan.</p>
        <pre><code>curl -H 'Content-Type: application/json' -X POST -d ' `&rbrace;` "username": "user", "password": "password1" `&rbrace;` ' http://10.10.188.12/api/v1.0/example1</code></pre>
        <h4>Use the <code>ipidseq</code> Script in Nmap</h4>
        <p>Run the following command to find a suitable IP to spoof. Here, we’re scanning <code>192.168.50.43</code> as a candidate idle host:</p>
        <pre><code>sudo nmap -Pn -p 80 --script ipidseq 192.168.50.43</code></pre>
        
        <h4>Expected Output:</h4>
        <pre><code>
Starting Nmap 7.94SVN ( https://nmap.org ) at 2024-10-28 00:14 EDT
Nmap scan report for tardis (192.168.50.43)
Host is up (2.0s latency).

PORT   STATE  SERVICE
80/tcp closed http

Host script results:
|_ipidseq: Incremental!
        </code></pre>
        <p>The result <code>ipidseq: Incremental!</code> confirms that <code>192.168.50.43</code> uses incremental IP IDs, making it a suitable candidate for our idle scan.</p>
      </div>

      <div className="content-section">
        <h3>2. Run the Idle Host Scan and Export Results</h3>
        <p>Using the identified idle host, we’ll now run a stealthy Nmap scan against the target (<code>metasploitable2</code>) and export the results to an XML file for later analysis in Metasploit.</p>
        
        <h4>Execute the Idle Scan</h4>
        <pre><code>sudo nmap -Pn -sI 192.168.50.43 -p- -oX Subnet1 metasploitable2</code></pre>
        
        <h4>Expected Output:</h4>
        <pre><code>
Starting Nmap 7.94SVN ( https://nmap.org ) at 2024-10-28 00:16 EDT
Idle scan using zombie 192.168.50.43 (192.168.50.43:80); Class: Incremental
        </code></pre>
        <p>This command initiates a stealthy scan using <code>192.168.50.43</code> as the zombie host and saves the results in <code>Subnet1.xml</code>.</p>
      </div>

      <div className="content-section">
        <h3>3. Import Results into Metasploit</h3>
        <p>With the XML scan file generated, we can now import the results into Metasploit for further exploitation:</p>
        <pre><code>msf `&gt;` db_import Subnet1.xml</code></pre>
        <p>This command loads the scan data into Metasploit’s database, making it available for analysis and action.</p>
      </div>

      <div className="ctf-summary">
        <h3>Conclusion</h3>
        <p>By using a stealthy idle scan, we’ve evaded direct detection while gathering detailed information on the target. This technique leverages an idle host’s IP ID sequence to mask the source of the scan, enhancing operational security during reconnaissance.</p>
      </div>
    </div>
  );
};

export default StealthNmapScan;
