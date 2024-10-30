//  src/pages/markdown/AzureAdmin.jsx
// src/pages/markdown/AzureAdmin.jsx
import React from 'react';
import './CommonStyles.css';

const AzureAdmin = () => {
  return (
    <div className="azure-admin-content">
      <header className="research-header">
        <h1>Creating and Configuring a Load Balancer in Azure</h1>
        <p> ACloudGuru lesson that explores the steps to set up a load balancer in Azure for optimal performance and availability.</p>
      </header>

      <section className="research-section">
        <h3>Introduction to Load Balancing</h3>
        <p>
          Load balancing is all about distributing network traffic effectively across multiple servers to ensure everything runs smoothly. A well-configured load balancer helps maintain availability and reliability, and it’s a fundamental tool for managing web applications and services.
        </p>
        <p>
          When we set up a load balancer, we can direct traffic to specific servers (or <em>backend nodes</em>) based on factors like health checks, server load, or even algorithms like <em>round-robin</em> or <em>least connections</em>. This strategy keeps resources optimized and prevents any single server from getting overwhelmed.
        </p>
      </section>

      <section className="research-section">
        <h3>Setting Up a Load Balancer in Azure</h3>
        <p>Here’s a step-by-step guide to setting up a load balancer in Azure:</p>
        <ol>
          <li>Log into the <a href="https://portal.azure.com" target="_blank" rel="noopener noreferrer">Azure Portal</a>.</li>
          <li>Go to <strong>Create a Resource</strong>, search for <strong>Load Balancer</strong> in the Marketplace, and select <strong>Create</strong>.</li>
        </ol>
        <p>Once you’ve initiated the setup, configure these essential sections:</p>

        <h4>Frontend IP Configuration</h4>
        <p>
          In the <strong>Frontend IP Configuration</strong> section, you’ll choose a public IP and give the frontend IP a name. Set the IP version to <strong>IPv4</strong>, unless you need IPv6 for your application.
        </p>

        <h4>Backend Pools</h4>
        <p>
          Here, you’ll add virtual machines (VMs) or other resources that will be part of the backend pool. The load balancer will distribute incoming traffic across these resources.
        </p>

        <h4>Health Probes</h4>
        <p>
          Health probes are essential for ensuring that traffic is only sent to healthy backend resources. You can configure the protocol and port to check for system health.
        </p>

        <h4>Load Balancing Rules</h4>
        <p>
          Load balancing rules determine how traffic is distributed. Here, you’ll define settings like the protocol, port, and backend pool.
        </p>

        <h4>Review and Create</h4>
        <p>
          After setting everything up, review your configurations and proceed to create the load balancer.
        </p>
      </section>

      <section className="research-section">
        <h3>Security Considerations for Load Balancers</h3>
        <ul>
          <li><strong>IP Restrictions:</strong> Use Network Security Groups (NSGs) to limit who can access the load balancer.</li>
          <li><strong>DDoS Protection:</strong> Enable Distributed Denial of Service (DDoS) protection for public-facing IPs.</li>
          <li><strong>Health Monitoring:</strong> Regularly check health probes to maintain reliable performance.</li>
        </ul>
      </section>

      <header className="research-header">
        <h1>Creating and Configuring a Kubernetes Cluster in Azure</h1>
        <p>Steps to deploy and set up a Kubernetes cluster in Azure.</p>
      </header>

      <section className="research-section">
        <h3>Deploying a Kubernetes Cluster</h3>
        <p>Follow these steps to create a Kubernetes cluster in Azure:</p>
        <ol>
          <li>Log into the <a href="https://portal.azure.com" target="_blank" rel="noopener noreferrer">Azure Portal</a>.</li>
          <li>Go to <strong>Create a resource</strong> and search for <strong>Kubernetes Service</strong>.</li>
          <li>Select <strong>Create</strong> to start setting up the cluster.</li>
        </ol>

        <h4>Cluster Basics</h4>
        <p>
          Begin with configuring the basics, including the cluster name, resource group, and region. A consistent naming format, like <code>SassoIN203</code>, can help with easy identification and organization.
        </p>

        <h4>Networking</h4>
        <p>
          Choose between <strong>Kubenet</strong> (Azure’s basic networking) and <strong>Azure CNI</strong> (more advanced), set a DNS name prefix, and consider enabling HTTP Application Routing for easier access management.
        </p>

        <h4>Integrations</h4>
        <p>
          Decide if you’ll need Container Registry integration and disable monitoring unless it’s required for your environment.
        </p>

        <h4>Review and Create</h4>
        <p>
          After configuring, review your settings, and if everything looks good, go ahead and create the cluster.
        </p>
      </section>

      <section className="research-section">
        <h3>Security Considerations for Kubernetes</h3>
        <ul>
          <li><strong>Ingress Controller Security:</strong> Set up SSL/TLS to keep traffic encrypted.</li>
          <li><strong>Container Monitoring:</strong> Enable monitoring for production clusters to keep an eye on performance and resource use.</li>
          <li><strong>API Server:</strong> Restrict access to the API server to authorized IPs and users for added security.</li>
        </ul>
      </section>
    </div>
  );
};

export default AzureAdmin;
