#!/usr/bin/env bash
set -euo pipefail

echo "🚀 Bootstrapping AIGovernor..."

# 1) Frontend
echo "🔧 Installing frontend dependencies..."
if [ -d "frontend" ]; then
  pushd frontend >/dev/null
    # Use npm ci for reproducible installs if you have a lockfile,
    # otherwise npm install
    if [ -f package-lock.json ]; then
      npm ci
    else
      npm install
    fi
  popd >/dev/null
else
  echo "⚠️  frontend/ directory not found—skipping"
fi

# 2) Backend
echo "🐍 Setting up Python backend..."
if [ -d "backend" ]; then
  pushd backend >/dev/null
    python3 -m venv venv
    # shellcheck disable=SC1091
    source venv/bin/activate
    pip install --upgrade pip
    pip install -r requirements.txt
  popd >/dev/null
else
  echo "⚠️  backend/ directory not found—skipping"
fi

echo "✅ Bootstrap complete! Frontend & backend dependencies are installed."
