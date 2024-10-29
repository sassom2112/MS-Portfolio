import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CybersecurityPortfolio from './pages/CybersecurityPortfolio';
import About from './pages/About';
import Blog from './blog/Blog';
import BlogPost from './blog/BlogPost';
import Header from './components/Header';  // Import Header component
import './App.css';

function App() {
  return (
    <Router>
      <Header />  {/* Add the Header to all pages */}
      <Routes>
        <Route path="/" element={<div>Welcome to the Homepage</div>} />
        <Route path="/CybersecurityPortfolio" element={<CybersecurityPortfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
