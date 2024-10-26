// src/pages/markdown/PlanningRedTeamEngagement.jsx
import React from 'react';
import './CommonStyles.css';

const PlanningRedTeamEngagement = () => {
  return (
    <div className="planning-content">
      <div className="ctf-header">
        <h1>Planning the Red Team Engagement</h1>
        <p>
          The planning phase is crucial in any red team engagement, involving close collaboration between the white team (defensive security team) and the red team (offensive security team). The objective is to align engagement goals with business risks and establish realistic attack scenarios.
        </p>
      </div>

      <div className="content-section">
        <h3>Key Points</h3>
        <ul>
          <li><strong>Defining Engagement Goals:</strong> Red and white teams must agree on scope, objectives, and limitations to simulate realistic threats.</li>
          <li><strong>Risk Scenarios:</strong> Align engagement focus on specific business risks, like ransomware or insider threats.</li>
        </ul>
      </div>

      <div className="content-section">
        <h3>Pentesting Terminology</h3>
        <ul>
          <li><strong>Rules of Engagement (ROE):</strong> Ground rules that ensure the red team operates without causing harm or business disruption.</li>
          <li><strong>Business Risk Alignment:</strong> Targeting vulnerabilities that pose the highest business impact.</li>
        </ul>
      </div>

      <div className="content-section">
        <h3>Goals of This Phase</h3>
        <ul>
          <li>Define and plan red team activities aligned with business concerns.</li>
          <li>Establish strong collaboration between offensive and defensive teams.</li>
        </ul>
      </div>
    </div>
  );
};

export default PlanningRedTeamEngagement;
