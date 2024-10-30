import React from 'react';
import './CommonStyles.css';

const LianYuWalkthrough = () => {
  return (
    <div className="lianyu-content">
      <div className="ctf-header">
        <h1>TryHackMe: privilege escalation and exfiltration tactics</h1>
        <p>
          This project is based on the THM were I practiced privilege escalation and exfiltration tactics used to exploit the Lian_Yu machine. Starting from established SSH access, This Box highlights key techniques, tools, and TTPs that lead to obtaining root access and capturing the final flag.
        </p>
      </div>

      <div className="content-section">
        <h3>SSH Access with Discovered Credentials</h3>
        <p>We start in the middle of the CTF challange where things start to heat up. We discovered low hanging fruit.</p>
        <ul>
          <li><strong>Username:</strong> <code>slade</code></li>
          <li><strong>Password:</strong> <code>M3tahuman</code></li>
        </ul>
        <p>
          With these credentials, SSH access was initiated to the target system:
        </p>
        <pre><code>{`ssh slade@10.10.43.28`}</code></pre>
        <p>
          <strong>TTP:</strong> <strong>Valid Accounts - T1078</strong> and <strong>Remote Services - T1021</strong> were leveraged to gain access via valid credentials.
        </p>
      </div>

      <div className="content-section">
        <h3>Privilege Escalation Reconnaissance</h3>
        <p>
          Once inside, a file system search led to the discovery of a hidden file <code>.Important</code>, which included the following hint:
        </p>
        <blockquote>
          What are you Looking for? Root Privileges? Try to find Secret_Mission.
        </blockquote>
        <p>
          This indicated a privilege escalation route potentially involving <code>pkexec</code>.
        </p>
        <p>
          <strong>TTP:</strong> <strong>File and Directory Discovery - T1083</strong> was used to locate hidden files for potential escalation clues.
        </p>
      </div>

      <div className="content-section">
        <h3>Privilege Escalation via <code>pkexec</code> Misconfiguration</h3>
        <p>
          Running <code>sudo -l</code> revealed that <code>slade</code> could execute <code>pkexec</code> as root without a password:
        </p>
        <pre><code>{`User slade may run the following commands on LianYu:   (root) PASSWD: /usr/bin/pkexec`}</code></pre>
        <p>
          Using <code>pkexec</code> provided root shell access:
        </p>
        <pre><code>{`sudo /usr/bin/pkexec /bin/bash`}</code></pre>
        <p>
          <strong>TTP:</strong> Exploiting <strong>Sudo and SUID Misconfigurations - T1548.003</strong> allowed privilege escalation by executing <code>pkexec</code> without restrictions.
        </p>
      </div>

      <div className="content-section">
        <h3>4. Capturing the Root Flag</h3>
        <p>
          With root privileges, the attacker navigated to the root directory and obtained the root flag:
        </p>
        <pre><code>{`root@LianYu:~# cat root.txt Mission accomplished`}</code></pre>
        <p>
          <strong>TTP:</strong> Exfiltration techniques (<strong>Exfiltration - T1560</strong>) were used to read and capture the root flag, completing the mission.
        </p>
      </div>

      <div className="content-section">
        <h3>Summary of Key TTPs</h3>
        <ul>
          <li><strong>T1078:</strong> Valid Accounts – Gaining access through valid SSH credentials.</li>
          <li><strong>T1083:</strong> File and Directory Discovery – Locating key files for privilege escalation.</li>
          <li><strong>T1021:</strong> Remote Services – Using SSH for remote access.</li>
          <li><strong>T1548.003:</strong> Sudo and SUID Misconfiguration – Privilege escalation through <code>pkexec</code>.</li>
          <li><strong>T1560:</strong> Exfiltration – Capturing and reading the root flag.</li>
        </ul>
      </div>

      <div className="ctf-summary">
        <h3>Final Thoughts</h3>
        <p>
          This walkthrough highlights key steps for privilege escalation and data exfiltration on the Lian_Yu machine. By focusing on real tools and misconfigurations, this approach demonstrates how misconfigured privileges can lead directly to full system access.
        </p>
      </div>
    </div>
  );
};

export default LianYuWalkthrough;
