import React, { useState } from 'react';
import './CybersecurityPortfolio.css';
import Modal from './Modal';
import categories from '../data/categories';

function CybersecurityPortfolio() {
  const [selectedChallenge, setSelectedChallenge] = useState(null);

  return (
    <div className="cybersecurity-portfolio">
      <header className="portfolio-header">
        <h1>Cybersecurity Portfolio</h1>
        <p>
          This portfolio showcases projects across various domains of cybersecurity, demonstrating skills in Red Team operations, vulnerability assessment, infrastructure management, compliance, and reporting.
        </p>
      </header>

      {/* Categories and Challenges */}
      <section className="portfolio-content">
        {categories.map((category, index) => (
          <div key={category.id} className="portfolio-category">
            <input type="checkbox" id={`category-${index}`} className="toggle" />
            <label htmlFor={`category-${index}`} className="category-header">
              {category.title}
            </label>
            <div className="category-content">
              <p className="category-description">{category.description}</p>
              <ul className="challenge-list">
                {category.challenges.map((challenge) => (
                  <li key={challenge.id} className="challenge-item">
                    <button
                      className="challenge-button"
                      onClick={() => setSelectedChallenge(challenge)}
                    >
                      {challenge.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* Modal for Selected Challenge */}
      {selectedChallenge && (
        <Modal show={selectedChallenge} onClose={() => setSelectedChallenge(null)}>
          <div className="modal-header">
            <h2>{selectedChallenge.title}</h2>
            <button className="close-button" onClick={() => setSelectedChallenge(null)}>
              &times;
            </button>
          </div>
          <div className="modal-body">
            {selectedChallenge.markdownFile}
            <div className="techniques">
              <h3>Techniques</h3>
              <p>{selectedChallenge.techniques.join(', ')}</p>
            </div>
            <div className="mitre-ttps">
              <h3>MITRE TTPs</h3>
              <ul>
                {selectedChallenge.mitreTTPs.map((ttp, index) => (
                  <li key={index}>{ttp}</li>
                ))}
              </ul>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default CybersecurityPortfolio;
