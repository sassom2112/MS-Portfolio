// src/pages/markdown/PhishingCampaignSetup.jsx
import React from 'react';

const PhishingCampaignSetup = () => {
  return (
    <div>
      <h1>Phishing Campaign Setup Lesson</h1>
      <p>
        In this lesson, we’ll go over how to set up a phishing campaign in a safe, controlled lab environment. We'll be using a Kali machine to run our phishing tools and a Docker container as the "target" machine. The goal here is to create a simulated attack setup so we can explore phishing techniques securely and see how they work without any real-world risk.      
      </p>

      <section>
        <h2>1. Environment Setup</h2>
        <p>For this setup, we’ll need:</p>
        <ul>
          <li><strong>Kali Linux</strong> for launching the phishing campaign.</li>
          <li><strong>Docker</strong> to create an isolated environment simulating a victim machine.</li>
        </ul>

        <h3>Step 1.1: Install Docker on Kali</h3>
        <p>
          To install Docker on Kali, open a terminal and use the following commands:
        </p>
        <pre>
          <code>
            sudo apt update && sudo apt install -y docker.io<br />
            sudo systemctl start docker<br />
            sudo systemctl enable docker
          </code>
        </pre>

        <h3>Step 1.2: Pull a Docker Image for the Victim Machine</h3>
        <p>
          We’ll use a vulnerable Docker image, such as Metasploitable2, to simulate a realistic victim environment.
        </p>
        <pre>
          <code>sudo docker pull tleemcjr/metasploitable2</code>
        </pre>
        <p>Once downloaded, run the image:</p>
        <pre>
          <code>sudo docker run -d -p 80:80 --name victim tleemcjr/metasploitable2</code>
        </pre>
        <p>This will start a Metasploitable2 container on port 80.</p>
      </section>

      <section>
        <h2>2. Creating the Phishing Campaign</h2>
        <p>In this phase, we’ll use tools like Metasploit and the Social Engineering Toolkit (SET) to craft a phishing email designed to capture user credentials.</p>

        <h3>Step 2.1: Launch SET</h3>
        <p>
          SET provides several options for creating phishing attacks. Start by launching SET from the terminal:
        </p>
        <pre>
          <code>sudo setoolkit</code>
        </pre>
        <p>In SET, select the following options:</p>
        <ol>
          <li>Choose <strong>1) Social-Engineering Attacks</strong></li>
          <li>Select <strong>2) Website Attack Vectors</strong></li>
          <li>Select <strong>3) Credential Harvester Attack Method</strong></li>
          <li>For the attack vector, choose <strong>2) Site Cloner</strong></li>
        </ol>
        <p>
          You’ll be prompted to enter the URL of a site to clone (for example, a generic login page).
        </p>

        <h3>Step 2.2: Configure the Phishing Email</h3>
        <p>
          Next, we’ll craft a phishing email. In a real campaign, this email would direct the target to the cloned site. Ensure that your email content looks realistic and matches the target’s organization’s style to avoid detection.
        </p>
        <p>Example email template:</p>
        <blockquote>
          Dear [Employee Name],<br />
          <br />
          We have detected unusual activity on your account. Please reset your password by clicking on the link below:<br />
          <a href="http://[your-kali-ip]">Reset Password</a><br />
          <br />
          Thank you,<br />
          IT Support
        </blockquote>
      </section>

      <section>
        <h2>3. Phishing Tactics, Techniques, and Procedures (TTPs)</h2>
        <p>Understanding the TTPs employed in phishing campaigns will help you better evaluate and mitigate threats.</p>
        <ul>
          <li><strong>T1566.001:</strong> Phishing with malicious attachments.</li>
          <li><strong>T1566.002:</strong> Phishing with a link to a malicious site.</li>
        </ul>
      </section>

      <section>
        <h2>4. Running the Campaign</h2>
        <h3>Step 4.1: Monitor for Captured Credentials</h3>
        <p>
          When the target user clicks the phishing link and attempts to log in, SET will capture their credentials. To view the captured credentials, check the terminal output in SET.
        </p>
        <pre>
          <code>cat /var/www/html/harvester.log</code>
        </pre>

        <h3>Step 4.2: Validating the Campaign</h3>
        <p>
          Confirm that credentials have been successfully captured and analyze any potential issues with the setup. Adjust the campaign as needed to improve the phishing attempt’s success rate.
        </p>
      </section>

      <section>
        <h2>5. Goals of This Phase</h2>
        <ul>
          <li>Develop and execute a phishing campaign using OSINT insights.</li>
          <li>Utilize SET and Metasploit to simulate phishing attacks.</li>
          <li>Practice secure and controlled phishing techniques in a lab environment.</li>
        </ul>
      </section>

      <section>
        <h2>6. Cleanup</h2>
        <p>
          Once finished, ensure you clean up the environment to avoid unintended vulnerabilities.
        </p>
        <pre>
          <code>
            sudo docker stop victim<br />
            sudo docker rm victim
          </code>
        </pre>
        <p>This will stop and remove the Docker container.</p>
      </section>
    </div>
  );
};

export default PhishingCampaignSetup;
