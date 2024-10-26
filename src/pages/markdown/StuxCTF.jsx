// src/pages/markdown/StuxCTF.jsx
import React from 'react';
import './CommonStyles.css';

const StuxCTF = () => {
  return (
    <div className="stuxctf-content">
      <div className="ctf-header">
        <h1>Penetration Testing Workflow</h1>
        <p>Nmap Scan, HTTP Enumeration, and Diffie-Hellman Parameters</p>
      </div>

      <div className="content-section">
        <h3>1. Service Enumeration with Nmap</h3>
        <p>
          An <strong>Nmap scan</strong> was conducted on the target machine, revealing open ports and services:
        </p>
        <pre><code>nmap -sV -A 10.10.43.138</code></pre>
        <p><strong>Findings:</strong></p>
        <ul>
          <li><strong>Port 22 (SSH)</strong>: OpenSSH 7.2p2 on Ubuntu.</li>
          <li><strong>Port 80 (HTTP)</strong>: Apache HTTP Server 2.4.18.</li>
          <li><strong>robots.txt</strong>: Disallowed entry for <code>/StuxCTF/</code>.</li>
        </ul>
        <p><strong>TTP:</strong> <em>Network Scanning (T1046)</em> — initial reconnaissance to identify open services and vulnerabilities.</p>
      </div>

      <div className="content-section">
        <h3>2. HTTP Service Enumeration and Clue Discovery</h3>
        <p>HTTP analysis uncovered the default Apache page with clues in the <code>robots.txt</code> file and embedded page comments.</p>
        <ul>
          <li><strong>robots.txt</strong>: <code>User-agent: * Disallow: /StuxCTF/</code></li>
          <li><strong>Embedded Comment:</strong> Diffie-Hellman parameters for a cryptographic challenge were found:</li>
        </ul>
        <pre><code>p: 9975298661930085086019708402870402191114171745913160469454315876556947370642799226714405016920875594030192024506376929926694545081888689821796050434591251; g: 7; a: 330; b: 450; g^c: 6091917800833598741530924081762225477418277010142022622731688158297759621329407070985497917078988781448889947074350694220209769840915705739528359582454617;</code></pre>
        <p><strong>TTP:</strong> <em>Information Disclosure via HTTP (T1592)</em> — discovered clues and cryptographic data potentially useful for further exploitation.</p>
      </div>

      <div className="content-section">
        <h3>3. Potential Exploitation Paths</h3>
        <p>The Diffie-Hellman parameters suggest possible next steps:</p>
        <ul>
          <li><strong>Exploring <code>/StuxCTF/</code> Directory</strong> — possible clues or escalation paths.</li>
          <li><strong>Cryptographic Challenge:</strong> The Diffie-Hellman values might allow calculation of the shared secret through modular arithmetic techniques.</li>
        </ul>
        <p><strong>TTP:</strong> <em>Cryptographic Exploitation (T1600)</em> — leverage Diffie-Hellman parameters for potential access.</p>
      </div>

      <div className="content-section">
        <h3>4. Further Investigation with SSH</h3>
        <p>SSH on Port 22 could lead to additional exploitation opportunities:</p>
        <ul>
          <li><strong>Brute-Force SSH Login</strong> — possible if valid credentials are found.</li>
          <li><strong>Credential Harvesting</strong> — resources in <code>/StuxCTF/</code> may provide login information.</li>
        </ul>
        <p><strong>TTP:</strong> <em>Remote Service Exploitation via SSH (T1021)</em> — maintain persistent access by exploiting SSH.</p>
      </div>

      <div className="ctf-summary">
        <h3>Summary of Key TTPs</h3>
        <ul>
          <li><strong>T1046</strong>: Network Scanning with Nmap.</li>
          <li><strong>T1592</strong>: Information Disclosure through HTTP enumeration.</li>
          <li><strong>T1600</strong>: Cryptographic Exploitation via Diffie-Hellman parameters.</li>
          <li><strong>T1021</strong>: Potential Remote Service Exploitation through SSH.</li>
        </ul>
        <p>This workflow showcases the power of combining <strong>Nmap</strong> and <strong>HTTP analysis</strong> to uncover hidden directories, cryptographic challenges, and possible attack vectors for lateral movement and escalation.</p>
      </div>
    </div>
  );
};

export default StuxCTF;
