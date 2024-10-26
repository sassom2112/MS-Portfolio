//  src/pages/markdown/AzureAdmin.jsx
// src/pages/markdown/AzureAdmin.jsx
import React from 'react';
import './CommonStyles.css';

const AzureAdmin = () => {
  return (
    <div className="azure-admin-content">
      <div className="ctf-header">
        <h1>Creating and Configuring a Load Balancer in Azure</h1>
        <p>Steps to set up a load balancer in Azure to ensure optimal performance and high availability.</p>
      </div>

      <div className="content-section">
        <h3>Introduction to Load Balancing</h3>
        <p>
          <strong>Load balancing</strong> efficiently distributes incoming network traffic across multiple servers. This 
          ensures high availability and reliability while optimizing resource utilization.
        </p>
        <p>
          A <strong>load balancer</strong> directs traffic to servers (or <em>backend nodes</em>) based on criteria such as 
          health, load, or algorithms like <em>round-robin</em>, <em>least connections</em>, or <em>IP hash</em>.
        </p>
      </div>

      <div className="content-section">
        <h3>Create a Networking Resource (Load Balancer)</h3>
        <ol>
          <li>Log into the <a href="https://portal.azure.com" target="_blank" rel="noopener noreferrer">Azure Portal</a>.</li>
          <li>Navigate to <strong>Create a Resource</strong> and search for <strong>Load Balancer</strong> in the Marketplace. Click <strong>Create</strong>.</li>
        </ol>
        <p>Configure the following tabs:</p>

        <h4>Frontend IP Configuration</h4>
        <p>After setup, go to the <strong>Frontend IP Configuration</strong> tab. Select a public IP and name the frontend IP configuration. Set IP Version to <strong>IPv4</strong> unless IPv6 is needed.</p>

        <h4>Backend Pools</h4>
        <p>Add VMs or resources for the load balancer to distribute traffic.</p>

        <h4>Health Probes</h4>
        <p>Set up <strong>Health Probes</strong> to ensure traffic goes to healthy resources, configuring the protocol and port.</p>

        <h4>Load Balancing Rules</h4>
        <p>Define load balancing rules by setting the protocol, port, and backend pool.</p>

        <h4>Review and Create</h4>
        <p>Validate and create the Load Balancer after reviewing the settings.</p>
      </div>

      <div className="content-section">
        <h3>Security Considerations</h3>
        <ul>
          <li><strong>IP Restrictions:</strong> Configure NSGs to restrict access.</li>
          <li><strong>DDoS Protection:</strong> Enable protection for public IPs.</li>
          <li><strong>Health Monitoring:</strong> Regularly check Health Probes.</li>
        </ul>
      </div>

      <div className="ctf-header">
        <h1>Creating and Configuring a Kubernetes Cluster in Azure</h1>
        <p>Guide to deploying and configuring a Kubernetes cluster in Azure.</p>
      </div>

      <div className="content-section">
        <h3>Steps to Create a Kubernetes Cluster</h3>
        <ol>
          <li>Log into the <a href="https://portal.azure.com" target="_blank" rel="noopener noreferrer">Azure Portal</a>.</li>
          <li>Navigate to <strong>Create a resource</strong> and search for <strong>Kubernetes Service</strong>.</li>
          <li>Select <strong>Create</strong> to set up the Kubernetes cluster.</li>
        </ol>

        <h4>Cluster Basics</h4>
        <p>Configure basic settings like cluster name, resource group, and region. Use a naming format such as <code>SassoIN203</code>.</p>

        <h4>Networking</h4>
        <p>Choose between <strong>Kubenet</strong> and <strong>Azure CNI</strong>, set DNS name prefix, and enable HTTP Application Routing.</p>

        <h4>Integrations</h4>
        <p>Configure Container Registry and disable monitoring if unnecessary.</p>

        <h4>Review and Create</h4>
        <p>Review and deploy the Kubernetes cluster after validating the settings.</p>
      </div>

      <div className="content-section">
        <h3>Security Considerations</h3>
        <ul>
          <li><strong>Ingress Controller Security:</strong> Enable SSL/TLS for encrypted traffic.</li>
          <li><strong>Container Monitoring:</strong> Enable monitoring in production for insights on resource usage.</li>
          <li><strong>API Server:</strong> Restrict API access to authorized users and IPs.</li>
        </ul>
      </div>
    </div>
  );
};

export default AzureAdmin;
