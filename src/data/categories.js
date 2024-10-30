// src/data/categories.js
// Import your markdown components
import AzureAdmin from '../pages/markdown/AzureAdmin.jsx';
import LAMPDeployment from '../pages/markdown/LAMPDeployment.jsx';
import ServerConfiguration from '../pages/markdown/ServerConfiguration.jsx';
import MySQLInjection from '../pages/markdown/MySQLInjection.jsx';
import FeasibilityStudy from '../pages/markdown/FeasibilityStudy.jsx';
import SUIDTakeover from '../pages/markdown/SUIDTakeover.jsx';
import PlanningRedTeamEngagement from '../pages/markdown/PlanningRedTeamEngagement.jsx';
import PhishingCampaignSetup from '../pages/markdown/PhishingCampaignSetup.jsx';
import PrivilegeEscalationPersistence from '../pages/markdown/PrivilegeEscalationPersistence.jsx';
import LateralMovementEvasion from '../pages/markdown/LateralMovementEvasion.jsx';
import SQLInjectionVulnerabilityReport from '../pages/markdown/SQLInjectionVulnerabilityReport.jsx';
import NmapToMetasploitWorkflow from '../pages/markdown/NmapToMetasploitWorkflow.jsx';
import MetasploitDatabaseSetup from '../pages/markdown/MetasploitDatabaseSetup.jsx';
import StealthNmapScan from '../pages/markdown/StealthNmapScan.jsx';
import JWTExploitWorkflow from '../pages/markdown/JWTExploitWorkflow.jsx';
import ISO27001Compliance from '../pages/markdown/ISO27001Compliance.jsx';
import WiresharkAnalysisReport from '../pages/markdown/WiresharkAnalysisReport.jsx';
import CloudSecurityProject from '../pages/markdown/CloudSecurityProject.jsx';
import CloudDataSecurityProject from '../pages/markdown/CloudDataSecurityProject.jsx';
import AccessControlsAndSecurityTechnologies from '../pages/markdown/AccessControlsAndSecurityTechnologies.jsx';
import EthicalHackingPlans from '../pages/markdown/EthicalHackingPlans.jsx';
import Audits from '../pages/markdown/Audits.jsx';
import BurpSuiteWorkflow from '../pages/markdown/BurpSuiteWorkflow.jsx';
import LainYuwalkthrough from '../pages/markdown/LainYuwalkthrough.jsx';

// Define categories and challenges within each category
export const categories = [
  {
    id: 'D001',
    title: 'Red Team Operations',
    description: 'Tactics and techniques used to simulate real-world attacks, including reconnaissance, phishing, and lateral movement.',
    challenges: [
      {
        id: 'C002',
        title: 'Planning the Red Team Engagement',
        techniques: ['Goal Setting', 'Scope Definition', 'Rules of Engagement'],
        mitreTTPs: ['T1591 - Gather Victim Identity Information', 'T1078.003 - Valid Accounts: Cloud Accounts'],
        description: 'Establishing goals, scope, and rules of engagement for a red team operation.',
        markdownFile: <PlanningRedTeamEngagement />,
      },
      {
        id: 'C004',
        title: 'Phishing Campaign Setup',
        techniques: ['Email Phishing', 'Spearphishing'],
        mitreTTPs: ['T1566.001 - Phishing: Spearphishing Attachment', 'T1566.002 - Phishing: Spearphishing Link', 'T1566.003 - Phishing: Spearphishing via Service'],
        description: 'Setting up a phishing campaign to gain access using OSINT insights.',
        markdownFile: <PhishingCampaignSetup />,
      },
      {
        id: 'C005',
        title: 'Privilege Escalation and Persistence',
        techniques: ['Exploitation for Privilege Escalation', 'LOLBAS Techniques'],
        mitreTTPs: ['T1068 - Exploitation for Privilege Escalation', 'T1546.015 - Event Triggered Execution: Component Object Model Hijacking', 'T1218 - Signed Binary Proxy Execution'],
        description: 'Gaining higher privileges and maintaining access using known vulnerabilities and LOLBAS techniques.',
        markdownFile: <PrivilegeEscalationPersistence />,
      },
      {
        id: 'C003',
        title: 'Privilege Escalation and Exfiltration Tactics: TryHackMe',
        techniques: ['Initial Access', 'Privilege Escalation', 'SSH Exploitation'],
        mitreTTPs: ['T1078 - Valid Accounts', 'T1083 - File and Directory Discovery', 'T1213 - Data from Information Repositories', 'T1021 - Remote Services', 'T1548.003 - Sudo and SUID Misconfiguration', 'T1560 - Exfiltration'],
        description: 'A detailed walkthrough of the Lian_Yu machine on TryHackMe, covering enumeration, SSH access, and privilege escalation to capture the root flag.',
        markdownFile: <LainYuwalkthrough />,
      },
      {
        id: 'C006',
        title: 'Lateral Movement and Evasion Techniques',
        techniques: ['Pass-the-Hash', 'Obfuscation'],
        mitreTTPs: ['T1550.002 - Use of Pass-the-Hash', 'T1027 - Obfuscated Files or Information', 'T1563 - Remote Service Session Hijacking'],
        description: 'Using lateral movement and evasion techniques to move within the target network undetected.',
        markdownFile: <LateralMovementEvasion />,
      },
      {
        id: 'C015',
        title: 'Stealthy Nmap Scan with IP Spoofing',
        techniques: ['Idle Scan', 'IP Spoofing', 'Nmap'],
        mitreTTPs: ['T1046 - Network Service Scanning', 'T1568.003 - Dynamic Resolution: Fast Flux DNS', 'T1595 - Active Scanning'],
        description: 'Advanced Nmap scanning technique using IP spoofing for stealthy reconnaissance.',
        markdownFile: <StealthNmapScan />,
      },
    ],
  },
  {
    id: 'D002',
    title: 'Vulnerability Assessment and Exploitation',
    description: 'Identifying and exploiting vulnerabilities to assess the security of systems and applications.',
    challenges: [
      {
        id: 'C007',
        title: 'OTG Report: SQL Injection Vulnerability',
        techniques: ['Error-based Injection', 'Time-based Blind Injection', 'UNION Query Injection'],
        mitreTTPs: ['T1190 - Exploit Public-Facing Application', 'T1552.001 - Unsecured Credentials: Credentials In Files', 'T1195.002 - Supply Chain Compromise: Compromise Software Supply Chain'],
        description: 'In-depth report on a critical SQL Injection vulnerability found in the web application.',
        markdownFile: <SQLInjectionVulnerabilityReport />,
      },
      {
        id: 'C008',
        title: 'MySQL Injection',
        techniques: ['SQL Injection', 'Credential Dumping'],
        mitreTTPs: ['T1190 - Exploit Public-Facing Application', 'T1003 - OS Credential Dumping', 'T1555 - Credentials from Password Stores'],
        description: 'Exploiting MySQL injection vulnerabilities to extract sensitive data.',
        markdownFile: <MySQLInjection />,
      },
      {
        id: 'C009',
        title: 'SUID Takeover',
        techniques: ['Privilege Escalation', 'File Permissions'],
        mitreTTPs: ['T1548.001 - Abuse Elevation Control Mechanism: Setuid and Setgid', 'T1068 - Exploitation for Privilege Escalation'],
        description: 'Exploiting SUID vulnerabilities to gain root access on the system.',
        markdownFile: <SUIDTakeover />,
      },
      {
        id: 'C021',
        title: 'PTES Framework Report: Wireshark Analysis',
        techniques: ['DNS Query Analysis', 'POP Traffic Inspection', 'Delta Time Analysis'],
        mitreTTPs: ['T1040 - Network Sniffing', 'T1071 - Application Layer Protocol', 'T1592 - Gather Victim Network Information'],
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
        mitreTTPs: ['T1608.004 - Stage Capabilities: Install Ingress Tools', 'T1568 - Dynamic Resolution'],
        description: 'Automate the deployment of a LAMP stack using Ansible.',
        markdownFile: <LAMPDeployment />,
      },
      {
        id: 'C011',
        title: 'Standard Server Configuration with Ansible',
        techniques: ['Security Hardening', 'Standardization'],
        mitreTTPs: ['T1556 - Modify Authentication Process', 'T1608 - Stage Capabilities', 'T1553 - Subvert Trust Controls'],
        description: 'Automate server setup to meet organizational standards using Ansible.',
        markdownFile: <ServerConfiguration />,
      },
      {
        id: 'C014B',
        title: 'Setting Up Metasploit Database Connection',
        techniques: ['Database Configuration', 'PostgreSQL', 'Metasploit Integration'],
        mitreTTPs: ['T1213 - Data from Information Repositories', 'T1059.003 - Command and Scripting Interpreter: Windows Command Shell'],
        description: 'Steps to configure PostgreSQL for Metasploit, enabling seamless database connection and management.',
        markdownFile: <MetasploitDatabaseSetup />,
      },
    ],
  },
  {
    id: 'D004',
    title: 'Compliance and Risk Assessment',
    description: 'Ensuring systems and applications comply with regulatory requirements and assessing risk for data protection.',
    challenges: [
      {
        id: 'C013',
        title: 'Feasibility Study for HIPAA-Compliant Data Pipeline Using AWS',
        techniques: ['Compliance', 'Data Security'],
        mitreTTPs: ['T1608.005 - Stage Capabilities: Install Software', 'T1587.005 - Develop Capabilities: Botnet'],
        description: 'Design and feasibility analysis for a HIPAA-compliant pipeline using AWS.',
        markdownFile: <FeasibilityStudy />,
      },
      {
        id: 'C020',
        title: 'ISO/IEC 27001 Risk Assessment and Security Management System Implementation',
        techniques: ['Risk Management', 'ISMS', 'Security Controls'],
        mitreTTPs: ['T1553 - Subvert Trust Controls', 'T1588 - Obtain Capabilities', 'T1592 - Gather Victim Infrastructure Information'],
        description: 'Establishing a risk assessment and ISMS framework compliant with ISO/IEC 27001.',
        markdownFile: <ISO27001Compliance />,
      },
      {
        id: 'C027',
        title: 'Understanding IT Auditing and Compliance',
        techniques: ['IT Auditing', 'Compliance Standards', 'Risk Mitigation', 'Audit Log Analysis'],
        mitreTTPs: ['T1562.002 - Impair Defenses: Disable Windows Event Logging', 'T1070 - Indicator Removal on Host', 'T1112 - Modify Registry'],
        description: 'An in-depth look at IT auditing practices, including internal and external audits, IT security audits, financial audits, and methods for protecting audit logs.',
        markdownFile: <Audits />,
      },
    ],
  },
];

export default categories;
