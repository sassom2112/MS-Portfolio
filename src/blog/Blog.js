import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';  // Import the updated Blog styles


const blogPosts = [
  {
    id: 'post-1',
    title: 'Introduction to Red Teaming',
    date: 'October 16, 2024',
    description: 'Learn the basics of red teaming, including objectives, techniques, and best practices.',
  },
  {
    id: 'post-2',
    title: 'Exploring Privilege Escalation',
    date: 'October 20, 2024',
    description: 'A deep dive into privilege escalation techniques used in penetration testing and CTFs.',
  },
  {
    id: 'post-3',
    title: 'Understanding MITRE ATT&CK Framework',
    date: 'October 25, 2024',
    description: 'An in-depth guide on how to use the MITRE ATT&CK framework for security testing.',
  },
];

function Blog() {
  useEffect(() => {
    const cards = document.querySelectorAll('.blog-card');

    const handleMouseMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const moveX = (x - rect.width / 2) / 10;
      const moveY = (y - rect.height / 2) / 10;

      card.style.boxShadow = `${-moveX}px ${-moveY}px 20px rgba(255, 255, 255, 0.3)`;
    };

    const resetShadow = (e) => {
      e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    };

    cards.forEach(card => {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', resetShadow);
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', resetShadow);
      });
    };
  }, []);

  return (
    <div className="blog-page">
      <header className="blog-header">
        <h1>Blog</h1>
        <p>Welcome to my blog where I write about red teaming, penetration testing, and CTF challenges.</p>
      </header>

      <main className="blog-list">
        {blogPosts.map((post) => (
          <Link to={`/blog/${post.id}`} key={post.id} className="blog-card">  {/* Wrap the entire card with the Link */}
            <h2>{post.title}</h2>
            <p>{post.date}</p>
            <p>{post.description}</p>
            <span className="read-more">Read More</span>  {/* Keep 'Read More' as a styled overlay */}
          </Link>
        ))}
      </main>
    </div>
  );
}

export default Blog;
