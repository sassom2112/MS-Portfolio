import React from 'react';
import './CommonStyles.css';

const WiresharkAnalysisReport = () => {
  return (
    <div className="report-content">
      {/* Report Header */}
      <div className="report-header">
        <h1>Wireshark Network Traffic Analysis Report</h1>
        <p><strong>Prepared for:</strong> Network Security Team</p>
        <p><strong>Date:</strong> October 25, 2024</p>
        <p><strong>Author:</strong> Michael Sasso</p>
      </div>

      {/* Executive Summary */}
      <section>
        <h2>1. Executive Summary</h2>
        <p>
          This report provides a comprehensive analysis of network traffic captured within the target environment, focusing on DNS and POP traffic patterns. The analysis aligns with the PTES Intelligence Gathering and Discovery phase, aiming to identify unauthorized data access, anomalous connections, and potential data exfiltration or policy violations.
        </p>
      </section>

      {/* Scope and Methodology */}
      <section>
        <h2>2. Scope and Methodology</h2>
        <h3>Scope</h3>
        <p>
          Network traffic analysis was conducted on captured packets, emphasizing specific traffic patterns that may indicate unauthorized activity. Key areas of focus included:
        </p>
        <ul>
          <li><strong>DNS queries</strong> for external or suspicious domains</li>
          <li><strong>POP traffic</strong> from external IPs outside trusted network boundaries</li>
        </ul>

        <h3>Methodology</h3>
        <p>
          This analysis follows PTES standards in network traffic reconnaissance and data analysis using Wireshark as the primary tool. Specific filters were applied to isolate DNS and POP protocol traffic, allowing for more targeted examination of anomalies in external communication patterns. Key steps included:
        </p>
        <ul>
          <li><strong>IP Filtering:</strong> <code>ip.addr == 10.0.2.15</code></li>
          <li><strong>Keyword Filtering:</strong> <code>frame contains "mail"</code></li>
        </ul>
        <p>These filters facilitated the identification of suspicious activities and enabled further drill-down into network behavior, contributing to a detailed and actionable report on the security posture of the network environment.</p>
      </section>

      {/* Findings and Analysis */}
      <section>
        <h2>3. Findings and Analysis (PTES: Vulnerability Analysis)</h2>

        {/* Finding #1 */}
        <h3>Finding #1: Unusual DNS Query for External Domain (mail.patriots.in)</h3>
        <h4>Description:</h4>
        <p>
          The analysis uncovered a DNS query from <code>10.10.1.4</code> to <code>10.10.1.1</code> for the external domain <em>mail.patriots.in</em>. This query is unusual, given that the queried domain is outside of the network’s typical whitelist, suggesting potential unauthorized data access or data exfiltration attempts.
        </p>

        <h4>Evidence:</h4>
        <ul>
          <li><strong>Source IP:</strong> 10.10.1.4</li>
          <li><strong>Destination IP:</strong> 10.10.1.1</li>
          <li><strong>Protocol:</strong> DNS</li>
          <li><strong>Details:</strong> Standard query for an A record of <em>mail.patriots.in</em> with a CNAME redirection response, potentially indicating aliasing to mask destination.</li>
        </ul>

        <h4>Impact and Recommendations:</h4>
        <p>
          This unusual DNS query for an external domain could indicate an attempt at data exfiltration. Based on PTES remediation principles, the following mitigation measures are recommended:
        </p>
        <ul>
          <li><strong>Restrict external DNS queries:</strong> Implement filtering to prevent outbound DNS requests for non-whitelisted domains in sensitive network segments.</li>
          <li><strong>Enhanced monitoring:</strong> Increase logging and analysis of outbound queries to detect uncommon external domains and take corrective actions promptly.</li>
          <li><strong>Implement network segmentation:</strong> Partition sensitive areas of the network to minimize unauthorized data access and allow for focused monitoring of critical segments.</li>
        </ul>
      </section>

      {/* Conclusion */}
      <section>
        <h2>4. Conclusion</h2>
        <p>
          The Wireshark analysis identified potential unauthorized data access points and anomalies in DNS and POP traffic patterns that suggest a risk of data leakage. This aligns with PTES best practices for reporting, with a focus on actionable insights. It is advised to implement DNS query restrictions and enhanced monitoring as recommended, to reduce the likelihood of unauthorized access and data exfiltration.
        </p>
      </section>
    </div>
  );
};

export default WiresharkAnalysisReport;
