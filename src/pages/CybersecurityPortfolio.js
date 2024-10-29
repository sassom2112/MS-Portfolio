// src/pages/CybersecurityPortfolio.jsx

import React, { useState } from 'react';
import './CybersecurityPortfolio.css';
import Modal from './Modal';

// Import your markdown components
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
import SQLInjectionVulnerabilityReport from './markdown/SQLInjectionVulnerabilityReport.jsx';
import NmapToMetasploitWorkflow from './markdown/NmapToMetasploitWorkflow.jsx';
import MetasploitDatabaseSetup from './markdown/MetasploitDatabaseSetup.jsx';
import StealthNmapScan from './markdown/StealthNmapScan.jsx';
import JWTExploitWorkflow from './markdown/JWTExploitWorkflow.jsx';
import SOC2Compliance from './markdown/SOC2Compliance.jsx';
import PCIDSSCompliance from './markdown/PCIDSSCompliance.jsx';
import GDPRCompliance from './markdown/GDPRCompliance.jsx';
import ISO27001Compliance from './markdown/ISO27001Compliance.jsx';
import WiresharkAnalysisReport from './markdown/WiresharkAnalysisReport.jsx';
import CloudSecurityProject from './markdown/CloudSecurityProject.jsx';
import CloudDataSecurityProject from './markdown/CloudDataSecurityProject.jsx';
import OrganizationalSecurityPolicies from './markdown/OrganizationalSecurityPolicies.jsx';
import AccessControlsAndSecurityTechnologies from './markdown/AccessControlsAndSecurityTechnologies.jsx';
import EthicalHackingPlans from './markdown/EthicalHackingPlans.jsx';
import Audits from './markdown/Audits.jsx';



// Define categories and challenges within each category
const categories = [
  {
    id: 'D001',
    title: 'Red Team Operations',
    description:
      'Tactics and techniques used to simulate real-world attacks, including reconnaissance, phishing, and lateral movement.',
    challenges: [
      {
        id: 'C001',
        title: 'Penetration Testing Workflow: StuxCTF',
        techniques: ['Nmap Scan', 'HTTP Enumeration', 'Diffie-Hellman Parameters'],
        description: 'Red team tactics for exploiting StuxCTF machine vulnerabilities.',
        markdownFile: <StuxCTF />,
      },
      {
        id: 'C002',
        title: 'Planning the Red Team Engagement',
        techniques: ['T1591 - Victim Identity Information', 'T1078.003 - Valid Accounts: Cloud Accounts'],
        description: 'Establishing goals, scope, and rules of engagement for a red team operation.',
        markdownFile: <PlanningRedTeamEngagement />,
      },
      {
        id: 'C003',
        title: 'Intelligence Gathering',
        techniques: ['T1595 - Active Scanning', 'T1589.002 - Victim Network Information'],
        description: 'OSINT techniques for building an initial profile of the target.',
        markdownFile: <IntelligenceGathering />,
      },
      {
        id: 'C004',
        title: 'Phishing Campaign Setup',
        techniques: ['T1566.001 - Phishing: Spearphishing Attachment', 'T1566.002 - Phishing: Spearphishing Link'],
        description: 'Setting up a phishing campaign to gain access using OSINT insights.',
        markdownFile: <PhishingCampaignSetup />,
      },
      {
        id: 'C005',
        title: 'Privilege Escalation and Persistence',
        techniques: ['T1068 - Exploitation for Privilege Escalation', 'T1218.011 - System Binary Proxy Execution: Regsvr32'],
        description: 'Gaining higher privileges and maintaining access using known vulnerabilities and LOLBAS techniques.',
        markdownFile: <PrivilegeEscalationPersistence />,
      },
      {
        id: 'C006',
        title: 'Lateral Movement and Evasion Techniques',
        techniques: ['T1550.002 - Use of Pass-the-Hash', 'T1027 - Obfuscated Files or Information'],
        description: 'Using lateral movement and evasion techniques to move within the target network undetected.',
        markdownFile: <LateralMovementEvasion />,
      },
      {
        id: 'C015',
        title: 'Stealthy Nmap Scan with IP Spoofing',
        techniques: ['Idle Scan', 'IP Spoofing', 'Nmap'],
        description: 'Advanced Nmap scanning technique using IP spoofing for stealthy reconnaissance.',
        markdownFile: <StealthNmapScan />,
      },
      {
        id: 'C026',
        title: 'Ethical Hacking Plans and Risk Assessment',
        techniques: [
          'Ethical Hacking Strategies',
          'Cyber Kill Chain',
          'Threat Modeling',
          'Compliance and Legal Considerations',
        ],
        description:
          'Developing a comprehensive ethical hacking plan that includes risk assessment, threat modeling, and adherence to legal and ethical standards.',
        markdownFile: <EthicalHackingPlans />,
      },  
    ],
  },
  {
    id: 'D002',
    title: 'Vulnerability Assessment and Exploitation',
    description:
      'Identifying and exploiting vulnerabilities to assess the security of systems and applications.',
    challenges: [
      {
        id: 'C007',
        title: 'SQL Injection Vulnerability Report',
        techniques: ['Error-based Injection', 'Time-based Blind Injection', 'UNION Query Injection'],
        description: 'In-depth report on a critical SQL Injection vulnerability found in the web application.',
        markdownFile: <SQLInjectionVulnerabilityReport />,
      },
      {
        id: 'C008',
        title: 'MySQL Injection',
        techniques: ['SQL Injection', 'Credential Dumping'],
        description: 'Exploiting MySQL injection vulnerabilities to extract sensitive data.',
        markdownFile: <MySQLInjection />,
      },
      {
        id: 'C009',
        title: 'SUID Takeover',
        techniques: ['Privilege Escalation', 'File Permissions'],
        description: 'Exploiting SUID vulnerabilities to gain root access on the system.',
        markdownFile: <SUIDTakeover />,
      },
      {
        id: 'C014',
        title: 'Nmap to Metasploit Workflow',
        techniques: ['Nmap Scan', 'Database Import', 'Metasploit Automation'],
        description: 'Integrating Nmap scan results with Metasploit for organized exploitation and analysis.',
        markdownFile: <NmapToMetasploitWorkflow />,
      },
      {
        id: 'C016',
        title: 'Exploiting JWT Vulnerabilities',
        techniques: ['Sensitive Information Disclosure', 'Signature Verification', 'JWT Cracking'],
        description: 'Analysis and exploitation of common JWT vulnerabilities using CyberChef and Hashcat.',
        markdownFile: <JWTExploitWorkflow />,
      },
      {
        id: 'C021',
        title: 'PTES Framework Report: Wireshark Analysis',
        techniques: ['DNS Query Analysis', 'POP Traffic Inspection', 'Delta Time Analysis'],
        description: 'Analysis of network traffic using Wireshark to identify unauthorized connections, data transfers, and potential policy violations.',
        markdownFile: <WiresharkAnalysisReport />,
      },
    ],
  },
  {
    id: 'D003',
    title: 'Infrastructure and Cloud Management',
    description: 'Setting up, configuring, and securing infrastructure and cloud environments.',
    challenges: [
      {
        id: 'C010',
        title: 'Automated LAMP Stack Deployment',
        techniques: ['Configuration Management', 'Automated Deployment'],
        description: 'Automate the deployment of a LAMP stack using Ansible.',
        markdownFile: <LAMPDeployment />,
      },
      {
        id: 'C011',
        title: 'Standard Server Configuration with Ansible',
        techniques: ['Security Hardening', 'Standardization'],
        description: 'Automate server setup to meet organizational standards using Ansible.',
        markdownFile: <ServerConfiguration />,
      },
      {
        id: 'C012',
        title: 'Azure Administrator',
        techniques: ['Cloud Configuration', 'Resource Management'],
        description: 'Guides for setting up and configuring resources in Azure.',
        markdownFile: <AzureAdmin />,
      },
      {
        id: 'C014B',
        title: 'Setting Up Metasploit Database Connection',
        techniques: ['Database Configuration', 'PostgreSQL', 'Metasploit Integration'],
        description: 'Steps to configure PostgreSQL for Metasploit, enabling seamless database connection and management.',
        markdownFile: <MetasploitDatabaseSetup />,
      },
      {
        id: 'C025',
        title: 'Access Controls and Security Technologies',
        techniques: [
          'Access Control Mechanisms',
          'Cybersecurity Policies',
          'Defense-in-Depth Strategy',
          'Risk Management',
        ],
        description:
          'Analyzing the role of access controls and security technologies in organizations and how they contribute to a defense-in-depth strategy.',
        markdownFile: <AccessControlsAndSecurityTechnologies />,
      },
    ],
  },
  {
    id: 'D004',
    title: 'Compliance and Risk Assessment',
    description:
      'Ensuring systems and applications comply with regulatory requirements and assessing risk for data protection.',
    challenges: [
      {
        id: 'C013',
        title: 'Feasibility Study for HIPAA-Compliant Data Pipeline Using AWS',
        techniques: ['Compliance', 'Data Security'],
        description: 'Design and feasibility analysis for a HIPAA-compliant pipeline using AWS.',
        markdownFile: <FeasibilityStudy />,
      },
      {
        id: 'C017',
        title: 'SOC 2 Compliance Implementation for a Web Application',
        techniques: ['Compliance Controls', 'Risk Assessment', 'Security Controls'],
        description: 'Implementing SOC 2 security controls for web application compliance.',
        markdownFile: <SOC2Compliance />,
      },
      {
        id: 'C018',
        title: 'PCI DSS Compliance for Payment Processing System',
        techniques: ['Compliance', 'Encryption', 'Network Segmentation'],
        description: 'Applying PCI DSS standards to secure payment processing.',
        markdownFile: <PCIDSSCompliance />,
      },
      {
        id: 'C019',
        title: 'GDPR Compliance and Privacy Risk Assessment for User Data',
        techniques: ['Compliance', 'Privacy Impact Assessment', 'Data Minimization'],
        description: 'Ensuring GDPR compliance through privacy impact assessments and user data protection.',
        markdownFile: <GDPRCompliance />,
      },
      {
        id: 'C020',
        title: 'ISO/IEC 27001 Risk Assessment and Security Management System Implementation',
        techniques: ['Risk Management', 'ISMS', 'Security Controls'],
        description: 'Establishing a risk assessment and ISMS framework compliant with ISO/IEC 27001.',
        markdownFile: <ISO27001Compliance />,
      },
      {
        id: 'C022',
        title: 'Addressing Cloud-Based Security and Regulatory Compliance',
        techniques: [
          'Cloud Security Enhancement',
          'Regulatory Compliance',
          'IAM Strengthening',
          'SIEM Implementation',
        ],
        description:
          'Developing a comprehensive project plan to enhance cloud security measures and ensure compliance across international operations.',
        markdownFile: <CloudSecurityProject />,
      },
      {
        id: 'C023',
        title: 'Enhancing Cloud Data Security Throughout the Data Lifecycle',
        techniques: [
          'Data Lifecycle Security',
          'Advanced Security Mechanisms',
          'Cloud Storage Protection',
          'Regulatory Compliance',
        ],
        description:
          'Implementing advanced security measures at each stage of the cloud data lifecycle to enhance data protection in cloud environments.',
        markdownFile: <CloudDataSecurityProject />,
      },
      {
        id: 'C024',
        title: 'Organizational Security Policies and Acceptable Use Policy',
        techniques: [
          'Security Policy Development',
          'Risk Assessment',
          'Acceptable Use Policy',
          'Data Classification',
        ],
        description:
          'Analyzing major considerations in organizational security policies and creating policies for risk assessment, acceptable use, and data classification.',
        markdownFile: <OrganizationalSecurityPolicies />,
      },
      {
        id: 'C027',
        title: 'Understanding IT Auditing and Compliance',
        techniques: [
          'IT Auditing',
          'Compliance Standards',
          'Risk Mitigation',
          'Audit Log Analysis',
        ],
        description:
          'An in-depth look at IT auditing practices, including internal and external audits, IT security audits, financial audits, and methods for protecting audit logs.',
        markdownFile: <Audits />,
      },
    ],
  },
]; // Correctly closed the categories array

function CybersecurityPortfolio() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedChallenge, setSelectedChallenge] = useState(null);

  return (
    <div className="cybersecurity-portfolio">
      <header className="portfolio-header">
        <h1>Cybersecurity Portfolio</h1>
        <p>
          This portfolio showcases projects across various domains of cybersecurity, demonstrating
          skills in Red Team operations, vulnerability assessment, infrastructure management,
          compliance, and detailed reporting.
        </p>
      </header>

      {/* Domain Cards */}
      {!selectedCategory && !selectedChallenge && (
        <div className="category-grid">
          {categories.map((category) => (
            <div
              key={category.id}
              className="category-card"
              onClick={() => setSelectedCategory(category)}
            >
              <h2>{category.title}</h2>
              <p>{category.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Challenges within the selected category */}
      {selectedCategory && !selectedChallenge && (
        <div className="category-section">
          <h2>{selectedCategory.title}</h2>
          <p>{selectedCategory.description}</p>

          {/* Back to Categories Button */}
          <div className="back-button-container">
            <button onClick={() => setSelectedCategory(null)} className="back-button">
              &larr; Back to Categories
            </button>
          </div>

          {/* Challenges Grid */}
          <div className="challenge-grid">
            {selectedCategory.challenges.map((challenge) => (
              <div
                key={challenge.id}
                className="challenge-card"
                onClick={() => setSelectedChallenge(challenge)}
              >
                <h3>{challenge.title}</h3>
                <p>
                  <strong>Techniques:</strong> {challenge.techniques.join(', ')}
                </p>
                <p>{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Challenge Modal */}
      {selectedChallenge && (
        <Modal show={selectedChallenge} onClose={() => setSelectedChallenge(null)}>
          <div className="modal-header">
            <h2>{selectedChallenge.title}</h2>
            <button className="close-button" onClick={() => setSelectedChallenge(null)}>
              &times;
            </button>
          </div>
          <div className="modal-body">{selectedChallenge.markdownFile}</div>
        </Modal>
      )}
    </div>
  );
}

export default CybersecurityPortfolio;
