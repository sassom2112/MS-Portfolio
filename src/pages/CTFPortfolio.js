import React, { useState } from 'react';
import './CTFPortfolio.css';
import Modal from './Modal';
import ReactMarkdown from 'react-markdown';


import StuxCTF from './markdown/StuxCTF.jsx';
import AzureAdmin from './markdown/AzureAdmin.jsx';
import LAMPDeployment from './markdown/LAMPDeployment.jsx';
import ServerConfiguration from './markdown/ServerConfiguration.jsx';
import MySQLInjection from './markdown/MySQLInjection.jsx';
import FeasibilityStudy from './markdown/FeasibilityStudy.jsx';
import SUIDTakeover from './markdown/SUIDTakeover.jsx';
import PlanningRedTeamEngagement from './markdown/PlanningRedTeamEngagement.jsx';
import IntelligenceGathering from './markdown/IntelligenceGathering.jsx';
import PhishingCampaignSetup from './markdown/PhishingCampaignSetup.jsx';
import PrivilegeEscalationPersistence from './markdown/PrivilegeEscalationPersistence.jsx';
import LateralMovementEvasion from './markdown/LateralMovementEvasion.jsx';

const challenges = [
  {
    id: 'C001',
    title: 'Automated LAMP Stack Deployment',
    techniques: ['Configuration Management', 'Automated Deployment'],
    description: 'Automate the deployment of a LAMP stack using Ansible.',
    markdownFile: <LAMPDeployment />,
  },
  {
    id: 'C002',
    title: 'Standard Server Configuration with Ansible',
    techniques: ['Security Hardening', 'Standardization'],
    description: 'Automate server setup to meet organizational standards using Ansible.',
    markdownFile: <ServerConfiguration />,
  },
  {
    id: 'C003',
    title: 'Azure Administrator',
    techniques: ['Cloud Configuration', 'Resource Management'],
    description: 'Guides for setting up and configuring resources in Azure.',
    markdownFile: <AzureAdmin />,
  },
  {
    id: 'C004',
    title: 'Penetration Testing Workflow: StuxCTF',
    techniques: ['Nmap Scan', 'HTTP Enumeration', 'Diffie-Hellman Parameters'],
    description: 'Red team tactics for exploiting StuxCTF machine vulnerabilities.',
    markdownFile: <StuxCTF />,
  },
  {
    id: 'C005',
    title: 'MySQL Injection',
    techniques: ['SQL Injection', 'Credential Dumping'],
    description: 'Exploiting MySQL injection vulnerabilities to extract sensitive data.',
    markdownFile: <MySQLInjection />,
  },
  {
    id: 'C006',
    title: 'Feasibility Study for HIPAA-Compliant Data Pipeline Using AWS',
    techniques: ['Compliance', 'Data Security'],
    description: 'Design and feasibility analysis for a HIPAA-compliant pipeline using AWS.',
    markdownFile: <FeasibilityStudy />,
  },
  {
    id: 'C007',
    title: 'SUID Takeover',
    techniques: ['Privilege Escalation', 'File Permissions'],
    description: 'Exploiting SUID vulnerabilities to gain root access on the system.',
    markdownFile: <SUIDTakeover />,
  },
  {
    id: 'C008',
    title: 'Planning the Red Team Engagement',
    techniques: ['T1591 - Victim Identity Information', 'T1078.003 - Valid Accounts: Cloud Accounts'],
    description: 'Establishing goals, scope, and rules of engagement for a red team operation.',
    markdownFile: <PlanningRedTeamEngagement />,
  },
  {
    id: 'C009',
    title: 'Intelligence Gathering',
    techniques: ['T1595 - Active Scanning', 'T1589.002 - Victim Network Information'],
    description: 'OSINT techniques for building an initial profile of the target.',
    markdownFile: <IntelligenceGathering />,
  },
  {
    id: 'C010',
    title: 'Phishing Campaign Setup',
    techniques: ['T1566.001 - Phishing: Spearphishing Attachment', 'T1566.002 - Phishing: Spearphishing Link'],
    description: 'Setting up a phishing campaign to gain access using OSINT insights.',
    markdownFile: <PhishingCampaignSetup />,
  },
  {
    id: 'C011',
    title: 'Privilege Escalation and Persistence',
    techniques: ['T1068 - Exploitation for Privilege Escalation', 'T1218.011 - System Binary Proxy Execution: Regsvr32'],
    description: 'Gaining higher privileges and maintaining access using known vulnerabilities and LOLBAS techniques.',
    markdownFile: <PrivilegeEscalationPersistence />,
  },
  {
    id: 'C012',
    title: 'Lateral Movement and Evasion Techniques',
    techniques: ['T1550.002 - Use of Pass-the-Hash', 'T1027 - Obfuscated Files or Information'],
    description: 'Using lateral movement and evasion techniques to move within the target network undetected.',
    markdownFile: <LateralMovementEvasion />,
  },
];


function CTFPortfolio() {
  const [selectedChallenge, setSelectedChallenge] = useState(null);

  return (
    <div className="ctf-portfolio">
      <header className="ctf-header">
        <h1>CTF Portfolio</h1>
        <p>Explore my Capture The Flag (CTF) challenges inspired by real-world tactics and techniques.</p>
      </header>

      <main className="challenge-grid">
        {challenges.map((challenge) => (
          <div
            key={challenge.id}
            className="challenge-card"
            onClick={() => setSelectedChallenge(challenge)}
          >
            <h3>{challenge.title}</h3>
            <p><strong>Techniques:</strong> {challenge.techniques.join(', ')}</p>
            <p>{challenge.description}</p>
          </div>
        ))}
      </main>

      <Modal show={selectedChallenge} onClose={() => setSelectedChallenge(null)}>
        {selectedChallenge && (
          <>
            <h2>{selectedChallenge.title}</h2>
            {typeof selectedChallenge.markdownFile === 'string' ? (
              <ReactMarkdown>{selectedChallenge.markdownFile}</ReactMarkdown>
            ) : (
              selectedChallenge.markdownFile
            )}
          </>
        )}
      </Modal>
    </div>
  );
}

export default CTFPortfolio;
