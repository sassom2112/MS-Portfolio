// src/pages/markdown/ServerConfiguration.jsx
import React from 'react';
import './CommonStyles.css';

const ServerConfiguration = () => {
  return (
    <div className="server-config-content">
      <div className="ctf-header">
        <h1>Standard Server Configuration with Ansible</h1>
        <p>Using Ansible to automate standard configurations and security settings across new servers.</p>
      </div>

      <div className="content-section">
        <h3>Phase 1: Planning and Setup</h3>
        <p>
          Defined organizational standards for servers, including user accounts, security policies, and required software. 
          Installed Ansible on the control node and prepared test VMs as target servers.
        </p>
        <h4>Inventory Setup</h4>
        <p>
          Created an Ansible inventory file listing all test servers, ensuring centralized configuration management.
        </p>
      </div>

      <div className="content-section">
        <h3>Phase 2: Basic Configuration Playbook</h3>
        <h4>User Management</h4>
        <p>
          Developed tasks to manage user accounts, ensuring only authorized users are present with appropriate permissions.
        </p>
        <h4>Security Hardening</h4>
        <p>
          Configured security tools like firewalls and fail2ban, restricted SSH access, and enforced key-based authentication.
        </p>
        <h4>Software Installation</h4>
        <p>
          Added tasks to install essential software, including sysadmin tools and network monitoring applications.
        </p>
      </div>

      <div className="content-section">
        <h3>Phase 3: Advanced Configurations</h3>
        <h4>Configuration Files</h4>
        <p>
          Used Ansible templates to manage configuration files for installed software, ensuring compliance with security 
          and operational standards.
        </p>
        <h4>Scheduled Tasks</h4>
        <p>
          Configured cron jobs for regular maintenance tasks, such as system updates and backups.
        </p>
        <h4>Compliance Checks</h4>
        <p>
          Implemented compliance checks to detect deviations from organizational standards and generate reports.
        </p>
      </div>

      <div className="content-section">
        <h3>Phase 4: Roles and Modularization</h3>
        <h4>Refactoring into Roles</h4>
        <p>
          Organized playbooks into roles for user management, security hardening, and software installation, enhancing 
          reusability and clarity.
        </p>
        <h4>Dynamic Inventory</h4>
        <p>
          Configured dynamic inventory for cloud providers, allowing Ansible to retrieve the latest server data automatically.
        </p>
      </div>

      <div className="content-section">
        <h3>Phase 5: Testing and Deployment</h3>
        <h4>Testing</h4>
        <p>
          Tested configurations on VMs, verifying that each new server met the defined standards without manual intervention.
        </p>
        <h4>Version Control and Continuous Integration</h4>
        <p>
          Set up version control with Git and a CI pipeline to ensure code quality and reliability through automated testing 
          of Ansible playbooks.
        </p>
      </div>
    </div>
  );
};

export default ServerConfiguration;
