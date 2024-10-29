import React, { useState, useEffect } from 'react';
import './CommonStyles.css';

const TypingCode = ({ text }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) => prev + text[index]);
      index++;
      if (index >= text.length) clearInterval(interval);
    }, 50); // Adjust typing speed if necessary
    return () => clearInterval(interval);
  }, [text]);

  return <code>{displayText}</code>;
};

const WiresharkAnalysisReport = () => {
  return (
    <div className="Report-content">
      <div className="ctf-header"></div>
      <h1>PTES Framework Report Snippets for Wireshark Analysis</h1>
      <section>
        <h2>Executive Summary - Wireshark Analysis</h2>
        <h3>Objective:</h3>
        <p>
          Analyze network traffic to identify potential security issues, including unauthorized data transfers,
          anomalous connections, and signs of possible data exfiltration or policy violations.
        </p>
        <h3>Scope:</h3>
        <p>
          Traffic analysis was conducted on captured packets within the target network, with a focus on DNS and
          POP traffic associated with IPs and domains outside the trusted network boundaries.
        </p>

        <h3>Key Findings:</h3>
        <ul>
          <li>
            <strong>Unusual DNS Query:</strong> DNS request and response for <em>mail.patriots.in</em>, followed by
            POP traffic from an external IP, suggests potential data exfiltration attempts.
          </li>
          <li>
            <strong>High Delta Time in POP Traffic:</strong> The extended delay in the response from the external
            mail server raises concerns about low-and-slow data exfiltration methods.
          </li>
        </ul>
      </section>

      <section>
        <h2>Methodology - Wireshark Analysis</h2>
        <h3>Reconnaissance Phase:</h3>
        <p>
          Wireshark was used to capture network traffic and apply targeted filters to identify anomalies in DNS
          and POP protocol usage.
        </p>

        <h3>Analysis Approach:</h3>
        <p>Applied Wireshark filters to narrow down suspicious traffic:</p>
        <ul>
          <li>IP Filter: <TypingCode text="ip.addr == 10.0.2.15" /></li>
          <li>Content Filter: <TypingCode text='frame contains "mail"' /></li>
        </ul>
        <p>Manually reviewed captured packets for any unusual time gaps or external connections.</p>
      </section>

      <section>
        <h2>Findings and Analysis</h2>

        <h3>Finding #1: External DNS Query for mail.patriots.in</h3>
        <h4>Description:</h4>
        <p>
          A DNS query from <TypingCode text="10.10.1.4" /> to <TypingCode text="10.10.1.1" /> requested an A record for
          <em>mail.patriots.in</em>. The DNS response indicated a CNAME record, suggesting redirection or aliasing,
          which could mask the true destination.
        </p>

        <h4>Evidence:</h4>
        <ul>
          <li>Packet Capture:</li>
          <ul>
            <li>Source: <TypingCode text="10.10.1.4" /></li>
            <li>Destination: <TypingCode text="10.10.1.1" /></li>
            <li>Protocol: DNS</li>
            <li>Details: Standard query <TypingCode text="0x7956" /> A <em>mail.patriots.in</em></li>
          </ul>
        </ul>
        
      </section>
    </div>
  );
};

export default WiresharkAnalysisReport;
