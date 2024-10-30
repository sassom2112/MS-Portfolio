import React from 'react';
import './CommonStyles.css';

const LAMPDeployment = () => {
  return (
    <div className="lamp-content">
      <div className="ctf-header">
        <h1>Automated LAMP Stack Deployment</h1>
        <p>Using Ansible to deploy a Linux, Apache, MySQL, PHP (LAMP) stack across multiple virtual machines.</p>
      </div>

      <div className="content-section">
        <h3>Setup and Basic Playbook</h3>
        <p>
          To initiate the deployment, Ansible was installed on the control machine (Linux-based). I configured SSH keys for secure
          passwordless access between the control machine and each target VM, ensuring the network connectivity required to manage the nodes.
        </p>

        <h4>Simple Playbook for Apache Installation</h4>
        <p>
          I began by creating a basic playbook to install Apache across the nodes, defining tasks in YAML format. Here’s a sample 
          command to execute the playbook:
        </p>
        <pre><code>{`ansible-playbook -i inventory setup-apache.yml`}</code></pre>
        <p>
          This initial setup confirmed that Apache was correctly installed and running on each VM by verifying the service status:
        </p>
        <pre><code>{`ansible all -m shell -a "systemctl status apache2"`}</code></pre>
      </div>

      <div className="content-section">
        <h3>Expanding the Playbook</h3>
        
        <h4>MySQL Installation and Security</h4>
        <p>
          Next, I expanded the playbook to install MySQL, incorporating tasks to set up a root password, secure the installation, 
          and disable remote root access. The playbook was executed as follows:
        </p>
        <pre><code>{`ansible-playbook -i inventory setup-mysql.yml`}</code></pre>
        <p>
          This step utilized the `mysql_secure_installation` script to enhance security, ensuring the database remained protected 
          against unauthorized access.
        </p>

        <h4>PHP Installation and Integration with Apache</h4>
        <p>
          After MySQL, I added tasks to install PHP and necessary extensions, ensuring PHP could serve dynamic content. 
          Apache’s configuration was modified to handle PHP files, and I verified the PHP installation by deploying a test file:
        </p>
        <pre><code>{`echo "<?php phpinfo(); ?>" > /var/www/html/info.php`}</code></pre>
      </div>

      <div className="content-section">
        <h3>Templating and Roles</h3>
        
        <h4>Using Templates for Configuration</h4>
        <p>
          To maintain consistency across nodes, I used Ansible templates for the Apache and PHP configurations. By creating 
          Jinja2 template files, configurations could be updated in one place and applied to all nodes dynamically:
        </p>
        <pre><code>{`ansible-playbook -i inventory configure-apache-php.yml`}</code></pre>

        <h4>Organizing with Roles</h4>
        <p>
          For modularity, I organized the playbook into separate roles for Apache, MySQL, and PHP, each with dedicated tasks, 
          handlers, and templates. This modular approach made the playbook more manageable and reusable. To execute the playbook 
          with roles:
        </p>
        <pre><code>{`ansible-playbook -i inventory deploy-lamp-stack.yml`}</code></pre>
      </div>

      <div className="content-section">
        <h3>Adding More Features</h3>
        
        <h4>Implementing Dynamic Inventory</h4>
        <p>
          Since the deployment involved multiple instances, Ansible’s dynamic inventory was set up to automate the discovery and 
          management of nodes, particularly helpful for cloud-based environments. Ansible’s dynamic inventory script allowed the 
          playbook to adapt to changing environments without manual inventory updates.
        </p>

        <h4>Error Handling and Security Enhancements</h4>
        <p>
          Error handling was implemented by setting retries for tasks prone to transient network or package repository issues. 
          Firewall rules were added to restrict access to only necessary services (HTTP, MySQL), enhancing the security of the 
          deployment.
        </p>
      </div>

      <div className="content-section">
        <h3>Deployment and Testing</h3>
        
        <h4>Testing and Validating Deployment</h4>
        <p>
          I deployed the complete LAMP stack on fresh VMs to validate the playbook’s repeatability. Each deployment was tested 
          to confirm the services were correctly installed and configured, running smoothly without errors. Here’s how the playbook 
          was applied to a new environment:
        </p>
        <pre><code>{`ansible-playbook -i inventory deploy-lamp.yml`}</code></pre>

        <h4>Performance Tuning</h4>
        <p>
          Using metrics from Apache and MySQL, I fine-tuned configurations for performance, adjusting parameters like 
          <code>MaxConnections</code> and <code>Query Cache</code> to suit the environment. Tuning was automated through Ansible 
          to ensure consistent configurations across deployments.
        </p>

        <h4>Documentation for Collaboration</h4>
        <p>
          Each role, playbook, and template was documented to help team members understand the deployment setup and usage. 
          Documenting steps and configurations also made troubleshooting and future updates easier.
        </p>
      </div>
    </div>
  );
};

export default LAMPDeployment;
