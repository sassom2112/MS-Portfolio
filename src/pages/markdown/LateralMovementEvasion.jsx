// src/pages/markdown/LateralMovementEvasion.jsx
import React from 'react';
import './CommonStyles.css';

const LateralMovementEvasion = () => {
  return (
    <div className="lateral-movement-content">
      <div className="ctf-header">
        <h1>Lateral Movement and Evasion Techniques</h1>
        <p>
          After achieving persistence, the red team utilizes lateral movement and evasion techniques to avoid detection while moving within the target network.
        </p>
      </div>

      <div className="content-section">
        <h3>Lateral Movement</h3>
        <ul>
          <li><strong>Pass-the-Hash (PtH):</strong> Leveraging obtained hashes to authenticate and access systems laterally.</li>
        </ul>
      </div>

      <div className="content-section">
        <h3>Evasion Techniques</h3>
        <ul>
          <li><strong>Application Whitelisting Bypass:</strong> Using trusted binaries like Regsvr32.exe to bypass security tools.</li>
          <li><strong>Obfuscation:</strong> Aligning attack activities with legitimate processes to avoid detection.</li>
        </ul>
      </div>

      <div className="content-section">
        <h3>TTPs</h3>
        <ul>
          <li><strong>T1550.002:</strong> Use of Pass-the-Hash for lateral movement.</li>
          <li><strong>T1078:</strong> Leveraging valid accounts for unauthorized access.</li>
          <li><strong>T1027:</strong> Obfuscation techniques to evade detection.</li>
        </ul>
      </div>
    </div>
  );
};

export default LateralMovementEvasion;
