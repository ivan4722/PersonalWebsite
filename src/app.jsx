import React from "react";
import { Router, Link } from "wouter";
import "./styles/styles.css";
import PageRouter from "./components/router.jsx";
import Seo from './components/seo.jsx';

export default function Home() {
  return (
    <Router>
      <Seo />
      <div className="wrapper">
        <div className="content">
          <PageRouter />
        </div>
        <div className="social-links">
          <a href="https://github.com/ivan4722" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.glitch.global/b0b21e26-c8c1-4508-b1e1-5fba2701f32b/git.png?v=1707689278605" alt="GitHub" className="social-icon" width = "50px"/>
          </a>
          <a href="https://linkedin.com/in/ivanxiong4722" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.glitch.global/b0b21e26-c8c1-4508-b1e1-5fba2701f32b/lin.png?v=1707689272347" alt="LinkedIn" className="social-icon" width = "50px"/>
          </a>
        </div>
      </div>
      <footer className="sticky-footer">
        <div className="links">
          <Link href="/" style={{ color: 'white' }}>Home</Link>
          <span className="divider">|</span>
          <Link href="/projects" style={{ color: 'white' }}>Projects</Link> 
          <span className="divider">|</span>
          <Link href="/skills" style={{ color: 'white' }}>Skills</Link>
        </div>
      </footer>
    </Router>
  );
}
