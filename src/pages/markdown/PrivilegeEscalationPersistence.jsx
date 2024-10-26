// src/pages/markdown/PrivilegeEscalationPersistence.jsx
import React from 'react';
import './CommonStyles.css';

const PrivilegeEscalationPersistence = () => {
  return (
    <div className="privilege-escalation-content">
      <div className="ctf-header">
        <h1>Privilege Escalation and Persistence</h1>
        <p>
          This phase involves techniques to elevate privileges and maintain long-term access, using both public vulnerabilities and legitimate system tools.
        </p>
      </div>

      <div className="content-section">
        <h3>Privilege Escalation</h3>
        <ul>
          <li><strong>PrintNightmare (CVE-2021-34527):</strong> A critical vulnerability in Windows Print Spooler that allows privilege escalation to administrator or system.</li>
        </ul>
      </div>

      <div className="content-section">
        <h3>Persistence Techniques</h3>
        <ul>
          <li><strong>Regsvr32.exe (LOLBAS):</strong> Used to execute code without being flagged by application whitelisting.</li>
          <li><strong>Scheduled Tasks:</strong> Automates payload execution for persistence.</li>
        </ul>
      </div>

      <div className="content-section">
        <h3>TTPs</h3>
        <ul>
          <li><strong>T1068:</strong> Exploitation for Privilege Escalation.</li>
          <li><strong>T1218.011:</strong> System Binary Proxy Execution with Regsvr32.</li>
          <li><strong>T1053.005:</strong> Scheduled Tasks for persistence.</li>
        </ul>
      </div>
    </div>
  );
};

export default PrivilegeEscalationPersistence;
