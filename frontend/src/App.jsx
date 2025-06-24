import React from 'react';
import Header from './components/Header';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Header />

      <main className="app-main">
        <h2>Welcome to AIGovernor</h2>
        <p>
          Manage and govern your cloud and AI resources with confidence.
          AIGovernor gives you real-time compliance checks, policy enforcement,
          and audit trails—all in one unified dashboard.
        </p>
        <a href="/dashboard" className="cta-button">
          Go to Dashboard
        </a>
      </main>
    </div>
  );
}
