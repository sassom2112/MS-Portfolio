import React from 'react';
import './CommonStyles.css';

const PlanningRedTeamEngagement = () => {
  return (
    <div className="planning-content">
      <div className="ctf-header">
        <h1>Planning the Red Team Engagement</h1>
        <p>This is based off of a <strong>TryHackMe | Read Team Engagments</strong> room.</p>
        <p>
        The planning phase is foundational in any red team engagement, setting clear collaboration pathways between the white team (oversight) and blue team (defensive security) alongside the red team (offensive security). The goal is to align objectives with business risks and design realistic attack scenarios that validate an organization’s security posture.        </p>
      </div>

      <div className="content-section">
        <h3>Key Points</h3>
        <ul>
          <li>
            <strong>Defining Engagement Goals:</strong> Both the red and white teams collaboratively establish scope, objectives, and any limitations to simulate relevant threats without causing harm. Clear goals ensure that the engagement aligns with potential real-world attacks the organization may face.
          </li>
          <li>
            <strong>Risk Scenarios:</strong> Emphasis on aligning engagement focus with specific business risks, such as ransomware or insider threats, helps in targeting vulnerabilities that could significantly impact the organization’s operations.
          </li>
        </ul>
      </div>

      <div className="content-section">
        <h3>Pentesting Terminology</h3>
        <ul>
          <li>
            <strong>Rules of Engagement (ROE):</strong> The ROE outlines the boundaries within which the red team will operate. This includes clear directives on what can and cannot be targeted to ensure the engagement does not disrupt business processes or cause unintended harm.
          </li>
          <li>
            <strong>Business Risk Alignment:</strong> The red team prioritizes vulnerabilities based on their potential business impact, targeting those that could most severely compromise operations, data integrity, or reputation if exploited.
          </li>
        </ul>
      </div>

      <div className="content-section">
        <h3>Detailed Engagement Planning</h3>
        <ul>
          <li>
            <strong>Scoping the Engagement:</strong> Define which systems, networks, and applications will be in-scope for testing, and identify any exclusions or sensitive areas. Clearly defined scoping ensures the team’s activities are targeted and compliant.
          </li>
          <li>
            <strong>Setting Objectives:</strong> Outline what the engagement seeks to achieve, whether it’s testing the blue team’s response to attacks, uncovering high-risk vulnerabilities, or simulating specific attack techniques used by known threat actors.
          </li>
          <li>
            <strong>Defining Attack Scenarios:</strong> Tailor attack scenarios that mirror real-world threats and account for current trends, such as ransomware, phishing, or insider attacks. Scenarios should be based on known vulnerabilities or emerging threats relevant to the organization’s sector.
          </li>
          <li>
            <strong>Resource Allocation:</strong> Plan resource requirements, including necessary tools, personnel, and time allocation. Resource planning helps ensure the engagement is well-supported and efficient.
          </li>
          <li>
            <strong>Creating a Communication Plan:</strong> Establish communication protocols between the red team and white team, defining when updates or alerts are necessary and who should be notified in case of significant findings.
          </li>
        </ul>
      </div>

      <div className="content-section">
        <h3>Goals of This Phase</h3>
        <ul>
          <li>
            Define and plan red team activities in alignment with critical business risks, ensuring that all testing is relevant to the organization’s threat landscape.
          </li>
          <li>
            Foster collaboration between offensive and defensive teams, creating a mutual understanding that enhances security posture without compromising business operations.
          </li>
          <li>
            Develop a clear roadmap for execution, covering scope, objectives, and the resources required to ensure a successful engagement.
          </li>
        </ul>
      </div>

      <div className="ctf-summary">
        <h3>Conclusion</h3>
        <p>
          Effective planning is the cornerstone of a successful red team engagement. By aligning engagement goals with business risks, establishing clear rules of engagement, and fostering collaboration, both the red and white teams can work towards the common goal of strengthening the organization's security defenses. Comprehensive planning reduces uncertainties, maximizes the relevance of testing, and ensures all activities contribute meaningfully to organizational security.
        </p>
      </div>
    </div>
  );
};

export default PlanningRedTeamEngagement;
