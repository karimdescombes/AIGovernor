import React from 'react';

const mockMetrics = [
  { label: 'Policies enforced', value: 42 },
  { label: 'Compliant resources', value: 128 },
  { label: 'Non-compliant resources', value: 5 },
  { label: 'Last audit', value: '2023-09-01' },
  // additional mock metrics to flesh out the dashboard
  { label: 'Policy violations', value: 3 },
  { label: 'Resources scanned', value: 133 },
];

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Governance Overview</h2>
      <ul>
        {mockMetrics.map((metric) => (
          <li key={metric.label}>
            {metric.label}: {metric.value}
          </li>
        ))}
      </ul>
    </div>
  );
}
