import React, { useEffect } from 'react';
import '../themes/Windows.css';  // Windows style

function About() {
  useEffect(() => {
    // Add the Linux theme when the component mounts
    document.body.classList.add('linux-theme');
    
    // Clean up the theme when the component unmounts
    return () => {
      document.body.classList.remove('linux-theme');
    };
  }, []);

  return (
    <div className="about-page">
      <main className="about-content">
        <section>
          <h2>Who I Am</h2>
          <p>
            I'm Michael Sasso, a cybersecurity enthusiast and Capture The Flag (CTF) practitioner. I specialize in red teaming, penetration testing, and exploiting real-world vulnerabilities.
          </p>
        </section>

        <section>
          <h2>My Background</h2>
          <p>
            With a background in cybersecurity and offensive security techniques, I have developed a strong passion for solving complex challenges and simulating advanced persistent threats (APTs).
          </p>
        </section>

        <section>
          <h2>What I Do</h2>
          <p>
            I engage in a variety of cybersecurity activities, including red team engagements, vulnerability research, penetration testing, and CTF competitions.
          </p>
        </section>
      </main>
    </div>
  );
}

export default About;
