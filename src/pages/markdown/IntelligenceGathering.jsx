// src/pages/markdown/IntelligenceGathering.jsx
import React from 'react';
import './CommonStyles.css';

const IntelligenceGathering = () => {
  return (
    <div className="intelligence-gathering-content">
      <div className="ctf-header">
        <h1>Intelligence Gathering</h1>
        <p>
          The intelligence gathering phase, or reconnaissance, allows the red team to collect critical information from both public and private sources to build an initial profile of the target.
        </p>
      </div>

      <div className="content-section">
        <h3>Key Points</h3>
        <ul>
          <li><strong>Open Source Intelligence (OSINT):</strong> Collect public data, like employee and domain information, to assess the target’s security posture.</li>
          <li><strong>Historical Research:</strong> Review past Advanced Persistent Threat (APT) activities to inform attack scenarios.</li>
        </ul>
      </div>

      <div className="content-section">
        <h3>Example Tools</h3>
        <ul>
          <li>Recon-ng, Shodan, theHarvester</li>
        </ul>
      </div>

      <div className="content-section">
        <h3>TTPs (Tactics, Techniques, and Procedures)</h3>
        <ul>
          <li><strong>T1595:</strong> Active Scanning - Identifying exposed services.</li>
          <li><strong>T1596:</strong> Search Open Websites - Using public sites for data collection.</li>
        </ul>
      </div>

      <div className="content-section">
        <h3>Goals of This Phase</h3>
        <ul>
          <li>Apply OSINT techniques to build a profile of the target.</li>
          <li>Leverage past APT insights for a tailored attack approach.</li>
        </ul>
      </div>
    </div>
  );
};

export default IntelligenceGathering;
