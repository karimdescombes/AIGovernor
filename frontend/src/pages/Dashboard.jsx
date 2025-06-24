import React from 'react';

const metrics = {
  identity: [
    { label: 'Users', value: 120, status: 'ok' },
    { label: 'Active sessions', value: 5, status: 'ok' },
  ],
  compliance: [
    { label: 'Policies enforced', value: 42, status: 'ok' },
    { label: 'Compliant resources', value: 128, status: 'ok' },
    { label: 'Non-compliant resources', value: 5, status: 'warning' },
  ],
  aiOversight: [
    { label: 'Policy violations', value: 3, status: 'warning' },
    { label: 'Last audit', value: '2023-09-01', status: 'ok' },
  ],
  costOptimization: [
    { label: 'Resources scanned', value: 133, status: 'ok' },
    {
      label: 'Savings achieved',
      value: 1500,
      currency: 'GBP',
      status: 'ok',
    },
  ],
};

function StatusDot({ status }) {
  const color = status === 'warning' ? 'bg-yellow-400' : status === 'alert' ? 'bg-red-500' : 'bg-green-400';
  return <span className={`inline-block w-3 h-3 rounded-full ${color}`} />;
}

function MetricTile({ metric, color }) {
  const displayValue = metric.currency
    ? new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: metric.currency,
        maximumFractionDigits: 0,
      }).format(metric.value)
    : metric.value;
  return (
    <div className={`bg-${color}-600 text-white p-4 rounded-lg shadow flex flex-col gap-1`}>
      <div className="flex items-center justify-between text-sm font-medium">
        <span>{metric.label}</span>
        {metric.status && <StatusDot status={metric.status} />}
      </div>
      <div className="text-xl font-bold">{displayValue}</div>
    </div>
  );
}

function MetricSection({ title, metrics, color }) {
  return (
    <section className="mb-6">
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m) => (
          <MetricTile key={m.label} metric={m} color={color} />
        ))}
      </div>
    </section>
  );
}

export default function Dashboard() {
  return (
    <div className="p-4 md:p-8 space-y-8">
      <h2 className="text-2xl font-bold mb-4">Governance Overview</h2>
      <MetricSection title="Identity" metrics={metrics.identity} color="blue" />
      <MetricSection title="Compliance" metrics={metrics.compliance} color="green" />
      <MetricSection title="AI Oversight" metrics={metrics.aiOversight} color="purple" />
      <MetricSection title="Cost Optimization" metrics={metrics.costOptimization} color="amber" />
    </div>
  );
}
