import React from 'react';
import './CommonStyles.css';

const ServerConfiguration = () => {
  return (
    <div className="server-config-content">
      <div className="ctf-header">
        <h1>Standard Server Configuration with Ansible</h1>
        <p>
          Automating standard configurations and security settings across new servers using Ansible ensures consistency, security, and efficiency in managing multiple systems within an organization.
        </p>
      </div>

      <div className="content-section">
        <h3>Planning and Setup</h3>
        <p>
          First, organizational standards for servers were defined, covering aspects like user accounts, security policies, and essential software. Ansible was installed on the control node, and test virtual machines (VMs) were set up as target servers.
        </p>
        <h4>Inventory Setup</h4>
        <p>
          An Ansible inventory file was created to list all test servers, centralizing configuration management and allowing easy control over multiple nodes.
        </p>
        <h4>Example Inventory File:</h4>
        <pre>
          [servers]<br />
          server1 ansible_host=192.168.1.10<br />
          server2 ansible_host=192.168.1.11<br />
        </pre>
      </div>

      <div className="content-section">
        <h3>Phase 2: Basic Configuration Playbook</h3>
        <h4>User Management</h4>
        <p>
          Tasks were added to manage user accounts, ensuring only authorized users were present and that permissions were appropriate. 
        </p>
        <h4>Example Ansible Task:</h4>
        <pre>
          - name: Create admin user<br />
            user:<br />
              name: admin<br />
              groups: sudo<br />
              state: present<br />
        </pre>
        <h4>Security Hardening</h4>
        <p>
          Security tasks included firewall setup, configuring fail2ban for brute-force protection, restricting SSH access, and enforcing key-based authentication.
        </p>
        <h4>Software Installation</h4>
        <p>
          Added tasks to install essential software like system monitoring and network tools to facilitate maintenance and monitoring.
        </p>
        <h4>Example Command:</h4>
        <pre>
          - name: Install essential packages<br />
            apt:<br />
              name: [vim, curl, net-tools]<br />
              state: present<br />
              update_cache: yes<br />
        </pre>
      </div>

      <div className="content-section">
        <h3>Phase 3: Advanced Configurations</h3>
        <h4>Configuration Files</h4>
        <p>
          Ansible templates were used to manage configuration files, ensuring compliance with security standards and operational consistency.
        </p>
        <h4>Scheduled Tasks</h4>
        <p>
          Cron jobs were set up to handle regular maintenance tasks such as system updates and backups, ensuring servers remain up-to-date.
        </p>
        <h4>Compliance Checks</h4>
        <p>
          Implemented checks to detect configuration deviations, generating reports to help maintain organizational standards across all servers.
        </p>
      </div>

      <div className="content-section">
        <h3>Phase 4: Roles and Modularization</h3>
        <h4>Refactoring into Roles</h4>
        <p>
          To improve organization and reusability, playbooks were divided into roles for user management, security hardening, and software installation.
        </p>
        <h4>Dynamic Inventory</h4>
        <p>
          Configured a dynamic inventory for cloud providers to automatically retrieve the latest server information, enabling Ansible to manage cloud resources dynamically.
        </p>
      </div>

      <div className="content-section">
        <h3>Phase 5: Testing and Deployment</h3>
        <h4>Testing</h4>
        <p>
          Configurations were tested on VMs to verify that each new server met defined standards without requiring manual intervention.
        </p>
        <h4>Version Control and Continuous Integration</h4>
        <p>
          Implemented Git for version control, ensuring changes to playbooks are tracked. A CI/CD pipeline was set up to run automated tests on Ansible playbooks, ensuring reliability and consistency.
        </p>
      </div>

      <div className="ctf-summary">
        <h3>Conclusion</h3>
        <p>
          By automating server configuration using Ansible, this project achieves secure and consistent server setups across an organization. The approach minimizes human error, enforces compliance, and streamlines server management.
        </p>
      </div>
    </div>
  );
};

export default ServerConfiguration;
