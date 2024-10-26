// src/pages/markdown/PhishingCampaignSetup.jsx
import React from 'react';
import './CommonStyles.css';

const PhishingCampaignSetup = () => {
  return (
    <div className="phishing-setup-content">
      <div className="ctf-header">
        <h1>Phishing Campaign Setup</h1>
        <p>
          After gathering intelligence, the next phase involves executing a phishing campaign to gain entry into the target network.
        </p>
      </div>

      <div className="content-section">
        <h3>Key Points</h3>
        <ul>
          <li><strong>Creating the Phishing Campaign:</strong> Tools like Metasploit and SET were used to create realistic phishing emails that mimic corporate communication.</li>
          <li><strong>Target Selection:</strong> Leveraged collected OSINT data to identify a target email pattern and validate emails.</li>
        </ul>
      </div>

      <div className="content-section">
        <h3>Example Phishing Email</h3>
        <p>A crafted email directed targets to reset their password using a fake link to capture credentials.</p>
      </div>

      <div className="content-section">
        <h3>TTPs</h3>
        <ul>
          <li><strong>T1566.001:</strong> Phishing with malicious attachments.</li>
          <li><strong>T1566.002:</strong> Phishing with a link to a malicious site.</li>
        </ul>
      </div>

      <div className="content-section">
        <h3>Goals of This Phase</h3>
        <ul>
          <li>Create an effective phishing campaign using OSINT insights.</li>
          <li>Learn to use SET and Metasploit for executing phishing attacks.</li>
        </ul>
      </div>
    </div>
  );
};

export default PhishingCampaignSetup;
