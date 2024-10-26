// src/pages/markdown/LAMPDeployment.jsx
import React from 'react';
import './CommonStyles.css';

const LAMPDeployment = () => {
  return (
    <div className="lamp-content">
      <div className="ctf-header">
        <h1>Automated LAMP Stack Deployment</h1>
        <p>Using Ansible to deploy a Linux, Apache, MySQL, PHP stack across multiple virtual machines.</p>
      </div>

      <div className="content-section">
        <h3>Phase 1: Setup and Basic Playbook</h3>
        <p>
          Installed Ansible on the control machine and configured multiple virtual machines (VMs) as target nodes. Ensured 
          network connectivity between the control machine and the VMs.
        </p>
        <h4>Simple Playbook</h4>
        <p>
          Created an initial playbook to install Apache on all VMs. Executed the playbook and verified that Apache was 
          successfully installed and running on each node.
        </p>
      </div>

      <div className="content-section">
        <h3>Phase 2: Expanding the Playbook</h3>
        <h4>MySQL Installation</h4>
        <p>
          Extended the playbook to include tasks for installing MySQL, securing the MySQL installation, setting a root password, 
          and disabling remote root access.
        </p>
        <h4>PHP Installation</h4>
        <p>
          Added tasks to install PHP along with the necessary modules. Configured Apache to serve PHP files and connected 
          PHP to MySQL to support dynamic web applications.
        </p>
      </div>

      <div className="content-section">
        <h3>Phase 3: Templating and Roles</h3>
        <h4>Using Templates</h4>
        <p>
          Utilized Ansible templates to manage Apache and PHP configuration files dynamically, allowing changes to be applied 
          across all nodes consistently.
        </p>
        <h4>Organizing with Roles</h4>
        <p>
          Refactored the playbook into roles for Apache, MySQL, and PHP. This modular approach improved manageability and 
          reusability of the configuration tasks.
        </p>
      </div>

      <div className="content-section">
        <h3>Phase 4: Adding More Features</h3>
        <h4>Dynamic Inventory</h4>
        <p>
          Implemented Ansible’s dynamic inventory to automate inventory management, particularly beneficial for cloud deployments.
        </p>
        <h4>Error Handling and Security Enhancements</h4>
        <p>
          Added error handling and retries to manage transient errors during installations. Hardened the environment by 
          configuring firewall rules and security best practices.
        </p>
      </div>

      <div className="content-section">
        <h3>Phase 5: Deployment and Testing</h3>
        <h4>Testing the Deployment</h4>
        <p>
          Deployed the complete LAMP stack across new VMs, testing the repeatability and reliability of the playbook. Conducted 
          multiple deployments to ensure consistency.
        </p>
        <h4>Performance Tuning</h4>
        <p>
          Tuned Apache and MySQL performance settings using Ansible, based on metrics gathered from the deployment environment.
        </p>
        <h4>Documentation</h4>
        <p>
          Documented each playbook, role, and the overall deployment process, making it easy for team members to understand and 
          use the setup.
        </p>
      </div>
    </div>
  );
};

export default LAMPDeployment;
