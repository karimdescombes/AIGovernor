import React from 'react';

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Governance Overview</h2>
      <ul>
        <li>Policies enforced: 42</li>
        <li>Compliant resources: 128</li>
        <li>Non-compliant resources: 5</li>
        <li>Last audit: 2023-09-01</li>
      </ul>
    </div>
  );
}
