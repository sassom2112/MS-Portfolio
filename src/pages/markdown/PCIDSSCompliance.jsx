import React from 'react';
import './CommonStyles.css';

const PCIDSSCompliance = () => {
  return (
    <div className="compliance-project">
      <div className="ctf-header">
        <h1>PCI DSS Compliance for Payment Processing System</h1>
        <p>Ensuring the security of cardholder data by aligning with PCI DSS standards in a payment processing environment.</p>
      </div>

      <div className="content-section">
        <h3>Overview</h3>
        <p>PCI DSS (Payment Card Industry Data Security Standard) compliance is critical for any system handling payment card information. This project focuses on data encryption, network segmentation, and access control to protect cardholder data.</p>
      </div>

      <div className="content-section">
        <h3>Key Steps</h3>
        <ol>
          <li>Identify and secure the Cardholder Data Environment (CDE) using encryption and restricted access.</li>
          <li>Implement network segmentation to isolate the CDE from other network components.</li>
          <li>Conduct regular vulnerability scans, monitor access logs, and enforce least-privilege principles.</li>
          <li>Develop documentation and training materials to ensure continuous PCI DSS adherence.</li>
        </ol>
      </div>

      <div className="ctf-summary">
        <h3>Takeaways</h3>
        <p>This project enhances understanding of PCI DSS requirements, such as encryption, network segmentation, and continuous monitoring for the security of payment processing systems.</p>
      </div>
    </div>
  );
};

export default PCIDSSCompliance;
