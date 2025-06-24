import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Header />
      <main className="app-main">
        <Routes>
          <Route
            path="/"
            element={(
              <>
                <h2>Welcome to AIGovernor</h2>
                <p>
                  Manage and govern your cloud and AI resources with confidence.
                  AIGovernor gives you real-time compliance checks, policy enforcement,
                  and audit trails—all in one unified dashboard.
                </p>
                <Link to="/dashboard" className="cta-button">
                  Go to Dashboard
                </Link>
              </>
            )}
          />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  );
}
