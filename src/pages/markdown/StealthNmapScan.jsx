import React from 'react';
import './CommonStyles.css';

const StealthNmapScan = () => {
  return (
    <div className="stealth-nmap-scan">
      <div className="ctf-header">
        <h1>Advanced Reconnaissance with Stealthy Nmap Scan</h1>
        <p>This is a lesson from the <strong>Metasploit</strong> book where I outline how to perform a stealthy Nmap scan by spoofing an IP address of another host on the network, using an advanced technique to evade detection during reconnaissance.</p>
      </div>

      <div className="content-section">
        <h3>Overview</h3>
        <p>
          This advanced scan leverages a technique called an **idle scan** or **zombie scan**, where an idle host’s IP address is spoofed to obscure the true source of the scan. Idle scans exploit a host with an incremental IP ID sequence, meaning each new IP packet from this host has an incremented identifier. By using such a "zombie" host, we mask our scanning IP and evade detection while collecting information about the target.
        </p>
      </div>

      <div className="content-section">
        <h3>1. Identify an Idle Host with IP ID Sequence Scan</h3>
        <p>
          First, we need to identify an idle host with an incremental IP ID pattern on the network. This host will act as our "zombie" by receiving spoofed requests from our scanner. In Nmap, the `ipidseq` script helps determine if an IP uses an incremental ID, a requirement for this technique.
        </p>

        <h4>Using Nmap’s `ipidseq` Script</h4>
        <p>Run the following Nmap command to check if <code>192.168.50.43</code> is suitable as a zombie host:</p>
        <pre><code>sudo nmap -Pn -p 80 --script ipidseq 192.168.50.43</code></pre>
        
        <h4>Explanation:</h4>
        <ul>
          <li><code>-Pn</code>: Disables host discovery to ensure Nmap attempts the scan even if ICMP is blocked.</li>
          <li><code>-p 80</code>: Specifies port 80, typically open, to increase the chance of a successful scan.</li>
          <li><code>--script ipidseq</code>: Runs the `ipidseq` script to test if the IP ID sequence is incremental.</li>
        </ul>

        <h4>Expected Output:</h4>
        <pre><code>
Starting Nmap 7.94SVN ( https://nmap.org ) at 2024-10-28 00:14 EDT
Nmap scan report for zombie-host (192.168.50.43)
Host is up (2.0s latency).

PORT   STATE  SERVICE
80/tcp closed http

Host script results:
|_ipidseq: Incremental!
        </code></pre>
        <p>The result <code>ipidseq: Incremental!</code> confirms that <code>192.168.50.43</code> is suitable for an idle scan.</p>
      </div>

      <div className="content-section">
        <h3>2. Run the Idle Scan Against the Target and Export Results</h3>
        <p>
          With the zombie host identified, we can proceed with the stealthy scan against the target, <code>metasploitable2</code>, using the idle host’s IP to mask our source. We’ll export the results in XML format for analysis in Metasploit.
        </p>
        
        <h4>Execute the Idle Scan</h4>
        <pre><code>sudo nmap -Pn -sI 192.168.50.43 -p- -oX Subnet1 metasploitable2</code></pre>
        
        <h4>Explanation:</h4>
        <ul>
          <li><code>-Pn</code>: Skips host discovery, assuming the target is live.</li>
          <li><code>-sI 192.168.50.43</code>: Specifies the idle host for the scan, which masks our IP as <code>192.168.50.43</code>.</li>
          <li><code>-p-</code>: Scans all ports on the target.</li>
          <li><code>-oX Subnet1</code>: Outputs the results in XML format for further processing.</li>
        </ul>

        <h4>Expected Output:</h4>
        <pre><code>
Starting Nmap 7.94SVN ( https://nmap.org ) at 2024-10-28 00:16 EDT
Idle scan using zombie 192.168.50.43 (192.168.50.43:80); Class: Incremental
        </code></pre>
        <p>The scan results are saved in <code>Subnet1.xml</code>, containing comprehensive data about the target.</p>
      </div>

      <div className="content-section">
        <h3>3. Import Results into Metasploit</h3>
        <p>
          The XML scan file generated in the previous step can now be imported into Metasploit’s database, making it available for vulnerability analysis and exploitation. Importing data directly from Nmap into Metasploit streamlines the process, allowing quick identification and exploitation of potential vulnerabilities.
        </p>

        <h4>Command:</h4>
        <pre><code>msf$ db_import Subnet1.xml</code></pre>

        <h4>Explanation:</h4>
        <ul>
          <li><code>db_import</code>: Imports the Nmap XML output into Metasploit's database for structured access to hosts and services.</li>
          <li><code>Subnet1.xml</code>: The file name of the Nmap XML output we generated, containing scan data on <code>metasploitable2</code>.</li>
        </ul>
      </div>

      <div className="ctf-summary">
        <h3>Conclusion</h3>
        <p>
          Using Nmap’s idle scan technique for stealthy reconnaissance allows us to evade detection by masking the scanner's source IP. The identified zombie host’s IP ID increments reveal scan results without alerting the target, making this an essential reconnaissance tool for red teamers and security professionals aiming to maintain operational security.
        </p>
      </div>
    </div>
  );
};

export default StealthNmapScan;
