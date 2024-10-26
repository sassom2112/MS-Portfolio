// src/pages/markdown/LianYuWalkthrough.jsx
import React from 'react';
import './CommonStyles.css';

const LianYuWalkthrough = () => {
  return (
    <div className="lianyu-content">
      <div className="ctf-header">
        <h1>TryHackMe Machine: Lian_Yu Walkthrough</h1>
        <p>
          In this walkthrough, we’ll break down the tactics, techniques, and procedures (TTPs) used to exploit the machine with IP <code>10.10.43.28</code>. 
          The goal was to escalate privileges and obtain the root flag. Below is a step-by-step breakdown of how this was achieved, explaining the attack flow 
          and highlighting key TTPs.
        </p>
      </div>

      <div className="content-section">
        <h3>1. Initial Enumeration and Clue Gathering</h3>
        <ul>
          <li><strong>Target IP:</strong> <code>10.10.43.28</code></li>
          <li><strong>Clue Found:</strong> The string <code>RTy8yhBQdscX</code> was uncovered during the enumeration phase.</li>
        </ul>
        <p>
          <strong>Decryption/Decoding:</strong> The string was decoded using <strong>base58</strong>, revealing the term <em>vigilante</em> and another clue, <em>!#th3h00d</em>.
        </p>
        <p>
          <strong>TTP:</strong> This phase involved gathering intelligence (<strong>Initial Access - T1078</strong>) and using tools for decoding strings 
          (<strong>Data from Information Repositories - T1213</strong>). By analyzing encoded data, the attacker gathered credentials or hints to continue the attack.
        </p>
      </div>

      <div className="content-section">
        <h3>2. Discovery of Password Clue (passwd.txt)</h3>
        <p>
          The next clue was found in <code>passwd.txt</code>, which contained the phrase:
        </p>
        <blockquote>
          This is your visa to Land on Lian_Yu # Just for Fun ***
        </blockquote>
        <p>
          The note referenced Oliver Queen, indicating further clues could be thematic.
        </p>
        <p>
          <strong>TTP:</strong> Information was gathered from available files (<strong>Discovery - T1083</strong>). This led to the discovery of useful thematic hints pointing to future access methods.
        </p>
      </div>

      <div className="content-section">
        <h3>3. SSH Access with Credentials</h3>
        <ul>
          <li><strong>Discovered Password:</strong> Through enumeration, the password for the user <code>slade</code> was revealed as <code>M3tahuman</code>.</li>
        </ul>
        <p>
          With this password, an <strong>SSH</strong> session was established to access the system:
        </p>
        <pre><code>{`ssh slade@10.10.43.28`}</code></pre>
        <p>
          <strong>TTP:</strong> This step involved brute forcing or discovering weak credentials (<strong>Valid Accounts - T1078</strong>) to gain initial access via SSH (<strong>Remote Services - T1021</strong>).
        </p>
      </div>

      <div className="content-section">
        <h3>4. Searching for Privilege Escalation Vectors</h3>
        <p>
          After gaining a foothold, the attacker explored the file system and found a <strong>hidden file</strong> named <code>.Important</code> with the following message:
        </p>
        <blockquote>
          What are you Looking for? Root Privileges? Try to find Secret_Mission.
        </blockquote>
        <p>
          This indicated that the attacker should escalate privileges to root by finding the <strong>Secret_Mission</strong>.
        </p>
        <p>
          <strong>TTP:</strong> The attacker explored and enumerated the file system for additional clues (<strong>File and Directory Discovery - T1083</strong>), leveraging the system's misconfigurations to escalate privileges.
        </p>
      </div>

      <div className="content-section">
        <h3>5. Privilege Escalation Using <code>pkexec</code></h3>
        <p>
          Running <code>sudo -l</code> revealed that the user <code>slade</code> had permission to run the command <code>pkexec</code> as root without entering the root password:
        </p>
        <pre><code>{`User slade may run the following commands on LianYu:   (root) PASSWD: /usr/bin/pkexec`}</code></pre>
        <p>
          <strong>Exploitation:</strong> The attacker used <code>pkexec</code> to spawn a root shell:
        </p>
        <pre><code>{`sudo /usr/bin/pkexec /bin/bash`}</code></pre>
        <p>
          This escalated privileges to root, allowing full control over the system.
        </p>
        <p>
          <strong>TTP:</strong> This was a classic <strong>Sudo and SUID Misconfiguration</strong> (<strong>Privilege Escalation - T1548.003</strong>) by exploiting the ability to run <code>pkexec</code> without a password, allowing the attacker to escalate privileges and gain root access.
        </p>
      </div>

      <div className="content-section">
        <h3>6. Capturing the Root Flag</h3>
        <p>
          With root privileges, the attacker navigated to the root directory and captured the root flag:
        </p>
        <pre><code>{`root@LianYu:~# cat root.txt Mission accomplished`}</code></pre>
        <p>
          <strong>TTP:</strong> The final goal (<strong>Exfiltration - T1560</strong>) was completed by reading the root flag and completing the mission.
        </p>
      </div>

      <div className="content-section">
        <h3>Summary of Key TTPs</h3>
        <ul>
          <li><strong>T1078:</strong> Valid Accounts – Exploiting weak or default credentials.</li>
          <li><strong>T1083:</strong> File and Directory Discovery – Searching the system for critical files.</li>
          <li><strong>T1213:</strong> Data from Information Repositories – Decoding base58 strings to extract useful data.</li>
          <li><strong>T1021:</strong> Remote Services – Gaining access via SSH.</li>
          <li><strong>T1548.003:</strong> Sudo and SUID Misconfiguration – Exploiting <code>pkexec</code> to escalate privileges.</li>
          <li><strong>T1560:</strong> Exfiltration – Reading and capturing the root flag to complete the mission.</li>
        </ul>
      </div>

      <div className="ctf-summary">
        <h3>Final Thoughts</h3>
        <p>
          This workflow outlines how various TTPs were used to compromise the TryHackMe machine, starting from clue discovery, SSH access, 
          and ultimately leading to privilege escalation via a misconfigured <code>pkexec</code>. The attack utilized discovery techniques 
          and privilege escalation methods commonly found in penetration testing engagements.
        </p>
      </div>
    </div>
  );
};

export default LianYuWalkthrough;
