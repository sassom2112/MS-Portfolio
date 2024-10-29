// src/data/catagories.js
// Import your markdown components
import StuxCTF from '../pages/markdown/StuxCTF.jsx';
import AzureAdmin from '../pages/markdown/AzureAdmin.jsx';
import LAMPDeployment from '../pages/markdown/LAMPDeployment.jsx';
import ServerConfiguration from '../pages/markdown/ServerConfiguration.jsx';
import MySQLInjection from '../pages/markdown/MySQLInjection.jsx';
import FeasibilityStudy from '../pages/markdown/FeasibilityStudy.jsx';
import SUIDTakeover from '../pages/markdown/SUIDTakeover.jsx';
import PlanningRedTeamEngagement from '../pages/markdown/PlanningRedTeamEngagement.jsx';
import IntelligenceGathering from '../pages/markdown/IntelligenceGathering.jsx';
import PhishingCampaignSetup from '../pages/markdown/PhishingCampaignSetup.jsx';
import PrivilegeEscalationPersistence from '../pages/markdown/PrivilegeEscalationPersistence.jsx';
import LateralMovementEvasion from '../pages/markdown/LateralMovementEvasion.jsx';
import SQLInjectionVulnerabilityReport from '../pages/markdown/SQLInjectionVulnerabilityReport.jsx';
import NmapToMetasploitWorkflow from '../pages/markdown/NmapToMetasploitWorkflow.jsx';
import MetasploitDatabaseSetup from '../pages/markdown/MetasploitDatabaseSetup.jsx';
import StealthNmapScan from '../pages/markdown/StealthNmapScan.jsx';
import JWTExploitWorkflow from '../pages/markdown/JWTExploitWorkflow.jsx';
import SOC2Compliance from '../pages/markdown/SOC2Compliance.jsx';
import PCIDSSCompliance from '../pages/markdown/PCIDSSCompliance.jsx';
import GDPRCompliance from '../pages/markdown/GDPRCompliance.jsx';
import ISO27001Compliance from '../pages/markdown/ISO27001Compliance.jsx';
import WiresharkAnalysisReport from '../pages/markdown/WiresharkAnalysisReport.jsx';
import CloudSecurityProject from '../pages/markdown/CloudSecurityProject.jsx';
import CloudDataSecurityProject from '../pages/markdown/CloudDataSecurityProject.jsx';
import OrganizationalSecurityPolicies from '../pages/markdown/OrganizationalSecurityPolicies.jsx';
import AccessControlsAndSecurityTechnologies from '../pages/markdown/AccessControlsAndSecurityTechnologies.jsx';
import EthicalHackingPlans from '../pages/markdown/EthicalHackingPlans.jsx';
import Audits from '../pages/markdown/Audits.jsx';



// Define categories and challenges within each category
export const categories = [
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
        mitreTTPs: [
          'T1046 - Network Service Scanning',
          'T1590 - Gather Victim Network Information',
          'T1587.001 - Develop Capabilities: Malware',
        ],
        description: 'Red team tactics for exploiting StuxCTF machine vulnerabilities.',
        markdownFile: <StuxCTF />,
      },
      {
        id: 'C002',
        title: 'Planning the Red Team Engagement',
        techniques: ['Goal Setting', 'Scope Definition', 'Rules of Engagement'],
        mitreTTPs: [
          'T1591 - Gather Victim Identity Information',
          'T1078.003 - Valid Accounts: Cloud Accounts',
        ],
        description: 'Establishing goals, scope, and rules of engagement for a red team operation.',
        markdownFile: <PlanningRedTeamEngagement />,
      },
      {
        id: 'C003',
        title: 'Intelligence Gathering',
        techniques: ['OSINT', 'Passive Reconnaissance'],
        mitreTTPs: [
          'T1592 - Gather Victim Infrastructure Information',
          'T1595 - Active Scanning',
          'T1589.002 - Gather Victim Network Information',
        ],
        description: 'OSINT techniques for building an initial profile of the target.',
        markdownFile: <IntelligenceGathering />,
      },
      {
        id: 'C004',
        title: 'Phishing Campaign Setup',
        techniques: ['Email Phishing', 'Spearphishing'],
        mitreTTPs: [
          'T1566.001 - Phishing: Spearphishing Attachment',
          'T1566.002 - Phishing: Spearphishing Link',
          'T1566.003 - Phishing: Spearphishing via Service',
        ],
        description: 'Setting up a phishing campaign to gain access using OSINT insights.',
        markdownFile: <PhishingCampaignSetup />,
      },
      {
        id: 'C005',
        title: 'Privilege Escalation and Persistence',
        techniques: ['Exploitation for Privilege Escalation', 'LOLBAS Techniques'],
        mitreTTPs: [
          'T1068 - Exploitation for Privilege Escalation',
          'T1546.015 - Event Triggered Execution: Component Object Model Hijacking',
          'T1218 - Signed Binary Proxy Execution',
        ],
        description: 'Gaining higher privileges and maintaining access using known vulnerabilities and LOLBAS techniques.',
        markdownFile: <PrivilegeEscalationPersistence />,
      },
      {
        id: 'C006',
        title: 'Lateral Movement and Evasion Techniques',
        techniques: ['Pass-the-Hash', 'Obfuscation'],
        mitreTTPs: [
          'T1550.002 - Use of Pass-the-Hash',
          'T1027 - Obfuscated Files or Information',
          'T1563 - Remote Service Session Hijacking',
        ],
        description: 'Using lateral movement and evasion techniques to move within the target network undetected.',
        markdownFile: <LateralMovementEvasion />,
      },
      {
        id: 'C015',
        title: 'Stealthy Nmap Scan with IP Spoofing',
        techniques: ['Idle Scan', 'IP Spoofing', 'Nmap'],
        mitreTTPs: [
          'T1046 - Network Service Scanning',
          'T1568.003 - Dynamic Resolution: Fast Flux DNS',
          'T1595 - Active Scanning',
        ],
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
        mitreTTPs: [
          'T1587 - Develop Capabilities',
          'T1588 - Obtain Capabilities',
          'T1591 - Gather Victim Identity Information',
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
        mitreTTPs: [
          'T1190 - Exploit Public-Facing Application',
          'T1552.001 - Unsecured Credentials: Credentials In Files',
          'T1195.002 - Supply Chain Compromise: Compromise Software Supply Chain',
        ],
        description: 'In-depth report on a critical SQL Injection vulnerability found in the web application.',
        markdownFile: <SQLInjectionVulnerabilityReport />,
      },
      {
        id: 'C008',
        title: 'MySQL Injection',
        techniques: ['SQL Injection', 'Credential Dumping'],
        mitreTTPs: [
          'T1190 - Exploit Public-Facing Application',
          'T1003 - OS Credential Dumping',
          'T1555 - Credentials from Password Stores',
        ],
        description: 'Exploiting MySQL injection vulnerabilities to extract sensitive data.',
        markdownFile: <MySQLInjection />,
      },
      {
        id: 'C009',
        title: 'SUID Takeover',
        techniques: ['Privilege Escalation', 'File Permissions'],
        mitreTTPs: [
          'T1548.001 - Abuse Elevation Control Mechanism: Setuid and Setgid',
          'T1068 - Exploitation for Privilege Escalation',
        ],
        description: 'Exploiting SUID vulnerabilities to gain root access on the system.',
        markdownFile: <SUIDTakeover />,
      },
      {
        id: 'C014',
        title: 'Nmap to Metasploit Workflow',
        techniques: ['Nmap Scan', 'Database Import', 'Metasploit Automation'],
        mitreTTPs: [
          'T1595 - Active Scanning',
          'T1588.006 - Obtain Capabilities: Vulnerabilities',
          'T1069 - Permission Groups Discovery',
        ],
        description: 'Integrating Nmap scan results with Metasploit for organized exploitation and analysis.',
        markdownFile: <NmapToMetasploitWorkflow />,
      },
      {
        id: 'C016',
        title: 'Exploiting JWT Vulnerabilities',
        techniques: ['Sensitive Information Disclosure', 'Signature Verification', 'JWT Cracking'],
        mitreTTPs: [
          'T1606.002 - Forge Web Credentials: SAML Tokens',
          'T1552 - Unsecured Credentials',
          'T1606 - Forge Web Credentials',
        ],
        description: 'Analysis and exploitation of common JWT vulnerabilities using CyberChef and Hashcat.',
        markdownFile: <JWTExploitWorkflow />,
      },
      {
        id: 'C021',
        title: 'PTES Framework Report: Wireshark Analysis',
        techniques: ['DNS Query Analysis', 'POP Traffic Inspection', 'Delta Time Analysis'],
        mitreTTPs: [
          'T1040 - Network Sniffing',
          'T1071 - Application Layer Protocol',
          'T1592 - Gather Victim Network Information',
        ],
        description:
          'Analysis of network traffic using Wireshark to identify unauthorized connections, data transfers, and potential policy violations.',
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
        mitreTTPs: [
          'T1608.004 - Stage Capabilities: Install Ingress Tools',
          'T1568 - Dynamic Resolution',
        ],
        description: 'Automate the deployment of a LAMP stack using Ansible.',
        markdownFile: <LAMPDeployment />,
      },
      {
        id: 'C011',
        title: 'Standard Server Configuration with Ansible',
        techniques: ['Security Hardening', 'Standardization'],
        mitreTTPs: [
          'T1556 - Modify Authentication Process',
          'T1608 - Stage Capabilities',
          'T1553 - Subvert Trust Controls',
        ],
        description: 'Automate server setup to meet organizational standards using Ansible.',
        markdownFile: <ServerConfiguration />,
      },
      {
        id: 'C012',
        title: 'Azure Administrator',
        techniques: ['Cloud Configuration', 'Resource Management'],
        mitreTTPs: [
          'T1526 - Cloud Service Discovery',
          'T1538 - Cloud Infrastructure Discovery',
          'T1098 - Account Manipulation',
        ],
        description: 'Guides for setting up and configuring resources in Azure.',
        markdownFile: <AzureAdmin />,
      },
      {
        id: 'C014B',
        title: 'Setting Up Metasploit Database Connection',
        techniques: ['Database Configuration', 'PostgreSQL', 'Metasploit Integration'],
        mitreTTPs: [
          'T1213 - Data from Information Repositories',
          'T1059.003 - Command and Scripting Interpreter: Windows Command Shell',
        ],
        description:
          'Steps to configure PostgreSQL for Metasploit, enabling seamless database connection and management.',
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
        mitreTTPs: [
          'T1562 - Impair Defenses',
          'T1556 - Modify Authentication Process',
          'T1078 - Valid Accounts',
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
        mitreTTPs: [
          'T1608.005 - Stage Capabilities: Install Software',
          'T1587.005 - Develop Capabilities: Botnet',
        ],
        description:
          'Design and feasibility analysis for a HIPAA-compliant pipeline using AWS.',
        markdownFile: <FeasibilityStudy />,
      },
      {
        id: 'C017',
        title: 'SOC 2 Compliance Implementation for a Web Application',
        techniques: ['Compliance Controls', 'Risk Assessment', 'Security Controls'],
        mitreTTPs: [
          'T1587 - Develop Capabilities',
          'T1588 - Obtain Capabilities',
          'T1591 - Gather Victim Identity Information',
        ],
        description: 'Implementing SOC 2 security controls for web application compliance.',
        markdownFile: <SOC2Compliance />,
      },
      {
        id: 'C018',
        title: 'PCI DSS Compliance for Payment Processing System',
        techniques: ['Compliance', 'Encryption', 'Network Segmentation'],
        mitreTTPs: [
          'T1600 - Weaken Encryption',
          'T1040 - Network Sniffing',
          'T1557 - Man-in-the-Middle',
        ],
        description: 'Applying PCI DSS standards to secure payment processing.',
        markdownFile: <PCIDSSCompliance />,
      },
      {
        id: 'C019',
        title: 'GDPR Compliance and Privacy Risk Assessment for User Data',
        techniques: ['Compliance', 'Privacy Impact Assessment', 'Data Minimization'],
        mitreTTPs: [
          'T1580 - Acquire Infrastructure',
          'T1597 - Search Closed Sources',
          'T1530 - Data from Cloud Storage Object',
        ],
        description:
          'Ensuring GDPR compliance through privacy impact assessments and user data protection.',
        markdownFile: <GDPRCompliance />,
      },
      {
        id: 'C020',
        title: 'ISO/IEC 27001 Risk Assessment and Security Management System Implementation',
        techniques: ['Risk Management', 'ISMS', 'Security Controls'],
        mitreTTPs: [
          'T1553 - Subvert Trust Controls',
          'T1588 - Obtain Capabilities',
          'T1592 - Gather Victim Infrastructure Information',
        ],
        description:
          'Establishing a risk assessment and ISMS framework compliant with ISO/IEC 27001.',
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
        mitreTTPs: [
          'T1526 - Cloud Service Discovery',
          'T1538 - Cloud Infrastructure Discovery',
          'T1078 - Valid Accounts',
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
        mitreTTPs: [
          'T1530 - Data from Cloud Storage Object',
          'T1552 - Unsecured Credentials',
          'T1562 - Impair Defenses',
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
        mitreTTPs: [
          'T1484 - Domain Policy Modification',
          'T1608 - Stage Capabilities',
          'T1553 - Subvert Trust Controls',
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
        mitreTTPs: [
          'T1562.002 - Impair Defenses: Disable Windows Event Logging',
          'T1070 - Indicator Removal on Host',
          'T1112 - Modify Registry',
        ],
        description:
          'An in-depth look at IT auditing practices, including internal and external audits, IT security audits, financial audits, and methods for protecting audit logs.',
        markdownFile: <Audits />,
      },
    ],
  },
]; // Correctly closed the categories array
export default categories;
