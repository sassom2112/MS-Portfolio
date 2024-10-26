src/Home.js
import React, { useEffect } from 'react';
import './Windows.css';  // Import Windows style

function Home() {
  useEffect(() => {
    document.body.classList.add('windows-theme');  // Apply Windows theme
    return () => {
      document.body.classList.remove('windows-theme');  // Cleanup theme on unmount
    };
  }, []);

  return (
    <div className="home-page">
      <h1>Welcome to My Windows-Themed Portfolio</h1>
      <p>Explore my work in Capture The Flag (CTF) challenges, red teaming, and penetration testing.</p>
    </div>
  );
}

export default Home;
