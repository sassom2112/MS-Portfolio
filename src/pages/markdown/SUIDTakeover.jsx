// src/pages/markdown/SUIDTakeover.jsx 
import React from 'react';
import './CommonStyles.css';

const SUIDTakeover = () => {
  return (
    <div className="suid-takeover-content">
      <div className="ctf-header">
        <h1>SUID Takeover Workflow</h1>
        <p>Exploiting a vulnerable SUID file to escalate privileges and gain root access on the system.</p>
      </div>

      <div className="content-section">
        <h3>Introduction</h3>
        <p>
          An <strong>SUID takeover</strong> occurs when an attacker exploits a file with the SUID bit set to elevate their
          privileges, potentially gaining root access. This can happen when an improperly configured or vulnerable SUID file
          allows users to execute commands with higher privileges than intended.
        </p>
      </div>

      <div className="content-section">
        <h3>GTFOBins</h3>
        <p>
          <strong>GTFOBins</strong> is a collection of Unix binaries that can be exploited by an attacker to bypass local
          security restrictions. Specifically, GTFOBins is used to document legitimate system binaries that can be leveraged for:
        </p>
        <ul>
          <li><strong>Privilege escalation:</strong> Running a binary in such a way that the user gains elevated privileges, often root.</li>
          <li><strong>File read/write access:</strong> Reading or writing to files that the user would not normally have permission to access.</li>
          <li><strong>Command execution:</strong> Executing arbitrary commands through misconfigured binaries.</li>
          <li><strong>Shell spawning:</strong> Using binaries to spawn an interactive shell.</li>
        </ul>
        <p>
          The site is a valuable resource for <strong>privilege escalation</strong> and <strong>post-exploitation</strong> techniques during penetration tests or red team exercises. It outlines how to use commonly installed binaries like <code>find</code>, <code>awk</code>, <code>less</code>, or <code>tar</code> to bypass security restrictions when they are misconfigured or used in unintended ways.
        </p>
      </div>

      <div className="content-section">
        <h3>SUID Takeover Workflow</h3>
        <p>Here’s an example workflow for discovering and exploiting a vulnerable SUID file to escalate privileges:</p>
        
        <h4>1. Finding SUID Binaries</h4>
        <p>Locate files with the SUID bit set by running the following command:</p>
        <pre><code>{`find / -perm -u=s 2>/dev/null`}</code></pre>
        <p>
          This command searches the file system for files with the SUID bit set (<code>-perm -u=s</code>), while 
          <code>{`2>/dev/null`}</code> suppresses permission errors.
        </p>

        <h4>2. Analyzing the SUID File</h4>
        <p>Identify potentially vulnerable files. For instance, you might find:</p>
        <pre><code>{`-rwsr-xr-x 1 root root 5678 Oct 10 12:00 /usr/local/bin/vulnprog`}</code></pre>
        <p>This binary, <code>/usr/local/bin/vulnprog</code>, has the SUID bit set and is owned by root.</p>

        <h4>3. Investigating the Program</h4>
        <p>
          Run and observe the program’s behavior. If the SUID program executes other binaries or scripts, these may be
          exploitable. For example, if <code>vulnprog</code> uses <code>system()</code> to execute a command, it may be
          possible to manipulate the environment or <code>PATH</code> to execute arbitrary commands.
        </p>

        <h4>4. Exploiting the Vulnerability</h4>
        <p>
          Suppose <code>vulnprog</code> uses <code>cp</code> without an absolute path. You could manipulate the
          <code>PATH</code> variable to use a malicious <code>cp</code>:
        </p>
        <pre><code>
{`echo "/bin/sh" > /tmp/cp
chmod +x /tmp/cp
export PATH=/tmp:$PATH`}
        </code></pre>
        <p>
          When <code>vulnprog</code> runs, it executes your malicious <code>cp</code> script, potentially granting you a
          root shell.
        </p>

        <h4>5. Privilege Escalation</h4>
        <p>After the takeover, confirm your privileges:</p>
        <pre><code>whoami</code></pre>
        <p>You should now have root access, allowing full control over the system.</p>
      </div>

      <div className="content-section">
        <h3>Preventing SUID Takeovers</h3>
        <ul>
          <li><strong>Limit SUID Usage:</strong> Only use the SUID bit when absolutely necessary.</li>
          <li><strong>Regular Audits:</strong> Periodically run <code>find / -perm -u=s</code> to review SUID binaries.</li>
          <li><strong>Code Audits:</strong> Review SUID binaries for vulnerabilities, especially around functions like <code>system()</code> and <code>exec()</code>.</li>
          <li><strong>Least Privilege:</strong> Ensure SUID binaries grant only minimal privileges necessary for their functionality.</li>
        </ul>
      </div>

      <div className="ctf-summary">
        <h3>Summary</h3>
        <p>
          SUID allows non-privileged users to perform privileged tasks. However, when misconfigured, it can introduce 
          significant security risks. A vulnerable SUID file can lead to a takeover, enabling attackers to gain root access 
          and perform unauthorized actions.
        </p>
      </div>
    </div>
  );
};

export default SUIDTakeover;
