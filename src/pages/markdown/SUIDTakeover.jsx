import React from 'react';
import './CommonStyles.css';

const SUIDTakeover = () => {
  return (
    <div className="suid-takeover-content">
      <div className="ctf-header">
        <h1>SUID Takeover Workflow</h1>
        <p>
          This project is based off of the <strong>THM PrivEsc</strong> room. Exploiting a vulnerable SUID file to escalate privileges and gain root access on the system, an advanced technique that showcases the power of understanding system misconfigurations.
        </p>
      </div>

      <div className="content-section">
        <h3>Introduction</h3>
        <p>
          A <strong>SUID takeover</strong> allows attackers to exploit a file with the SUID bit to elevate privileges—potentially gaining root access. The SUID bit enables a program to execute with the permissions of the file owner, usually root. This becomes dangerous when a misconfigured SUID file inadvertently allows users to perform tasks with higher privileges than intended.
        </p>
      </div>

      <div className="content-section">
        <h3>GTFOBins</h3>
        <p>
          <strong>GTFOBins</strong> is a helpful tool for penetration testers and red teamers. It documents common binaries that can be exploited under certain conditions to bypass security. It’s organized by specific actions, such as:
        </p>
        <ul>
          <li><strong>Privilege escalation:</strong> Running commands with elevated privileges to access restricted areas.</li>
          <li><strong>File access:</strong> Gaining read/write access to files normally restricted.</li>
          <li><strong>Command execution:</strong> Running arbitrary commands using the vulnerable binary.</li>
          <li><strong>Shell spawning:</strong> Using binaries to open a shell with higher permissions.</li>
        </ul>
        <p>
          This resource is valuable for privilege escalation workflows, as it details specific actions for each binary and suggests how to use these files to overcome security barriers during assessments.
        </p>
      </div>

      <div className="content-section">
        <h3>SUID Takeover Workflow</h3>
        <p>
          Let's walk through a hands-on example where we locate and exploit a vulnerable SUID file to escalate privileges.
        </p>

        <h4>Finding SUID Binaries</h4>
        <p>
          We start by locating files with the SUID bit set, which allows them to run with elevated permissions. This is done with:
        </p>
        <pre><code>{`find / -perm -u=s 2>/dev/null`}</code></pre>
        <p>
          Here’s what’s happening in the command:
        </p>
        <ul>
          <li><code>/ -perm -u=s</code>: Searches the file system for files with the SUID permission.</li>
          <li><code>2`{'>'}`/dev/null</code>: Suppresses errors that might show up if we don’t have permissions in some directories.</li>
        </ul>

        <h4>Analyzing the SUID File</h4>
        <p>
          Once we identify potential SUID files, we analyze them. Let’s say we find a file like this:
        </p>
        <pre><code>{`-rwsr-xr-x 1 root root 5678 Oct 10 12:00 /usr/local/bin/vulnprog`}</code></pre>
        <p>
          This file, <code>/usr/local/bin/vulnprog</code>, has the SUID bit set and is owned by root. This indicates that any user can run it with root-level permissions.
        </p>

        <h4>Investigating the Program</h4>
        <p>
          To see if <strong>vulnprog</strong> can be exploited, we run and observe its behavior. Programs that call other binaries or scripts can often be manipulated. For example, if <strong>vulnprog</strong> uses <strong>system()</strong> to run another command, we might be able to control what command it runs by changing the environment or <strong>PATH</strong>.
        </p>

        <h4>4. Exploiting the Vulnerability</h4>
        <p>
          Imagine <strong>vulnprog</strong> calls <strong>cp</strong> without specifying its full path. This would make it possible to insert a malicious version of <code>cp</code> by manipulating <code>PATH</code>
        </p>
        <pre><code>
{`echo "/bin/sh" > /tmp/cp
chmod +x /tmp/cp
export PATH=/tmp:$PATH`}
        </code></pre>
        <p>
          Here’s how it works:
        </p>
        <ul>
          <li><code>echo "/bin/sh" `{'>'}` /tmp/cp</code> Creates a file <strong>/tmp/cp</strong> that, when run, will launch a shell.</li>
          <li><code>chmod +x /tmp/cp</code> Makes <strong>/tmp/cp</strong> executable.</li>
          <li><code>export PATH=/tmp:$PATH</code> Sets our new shell script <strong>/tmp/cp</strong> as the first command in the <strong>PATH</strong>, so <strong>vulnprog</strong> will run it instead of the real <code>cp</code></li>
        </ul>
        <p>
          When <strong>vulnprog</strong> tries to run <strong>cp</strong>, it will instead launch our <code>/tmp/cp</code> script, giving us a root shell.
        </p>

        <h4>5. Privilege Escalation</h4>
        <p>
          After exploiting <code>vulnprog</code>, we confirm our escalated privileges with:
        </p>
        <pre><code>whoami</code></pre>
        <p>
          If successful, this should return "root," indicating that we now have full control over the system.
        </p>
      </div>

      <div className="content-section">
        <h3>Preventing SUID Takeovers</h3>
        <ul>
          <li><strong>Limit SUID Usage:</strong> Only set the SUID bit on files that absolutely need it.</li>
          <li><strong>Regular Audits:</strong> Periodically run <code>find / -perm -u=s</code> to review SUID binaries and ensure they’re not misconfigured.</li>
          <li><strong>Code Audits:</strong> Check SUID binaries for unsafe functions, especially <code>system()</code> and <code>exec()</code>, which can be easily exploited.</li>
          <li><strong>Least Privilege:</strong> Ensure SUID binaries provide only the minimal permissions necessary for their function.</li>
        </ul>
        <p>
          Proper SUID management and regular audits are key to preventing privilege escalation vulnerabilities like this.
        </p>
      </div>

      <div className="ctf-summary">
        <h3>Summary</h3>
        <p>
          SUID permissions are powerful but can introduce significant risks when misconfigured. By finding and exploiting vulnerable SUID files, attackers can elevate privileges, potentially gaining root access. This workflow demonstrates both the power and risk of SUID in Unix-based systems, highlighting the importance of careful system configuration and regular security audits.
        </p>
      </div>
    </div>
  );
};

export default SUIDTakeover;
