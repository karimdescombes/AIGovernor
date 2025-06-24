import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="app-header">
      <img src="/AIGovernor.png" alt="AIGovernor Logo" className="logo" />
      <div className="title-group">
        <h1>AIGovernor</h1>
        <p className="tagline">Smart Governance for Cloud & AI</p>
      </div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
    </header>
  );
}
