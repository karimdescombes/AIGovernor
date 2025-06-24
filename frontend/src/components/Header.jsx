import React from 'react';

export default function Header() {
  return (
    <header className="app-header">
      <img
        src="/AIGovernor.png"
        alt="AIGovernor Logo"
        className="logo"
      />
      <div className="title-group">
        <h1>AIGovernor</h1>
        <p className="tagline">Smart Governance for Cloud & AI</p>
      </div>
    </header>
  );
}
