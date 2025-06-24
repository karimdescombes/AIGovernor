.PHONY: setup frontend backend

setup: frontend backend

frontend:
	@echo "🔧 Installing frontend deps..."
	cd frontend && if [ -f package-lock.json ]; then npm ci; else npm install; fi

backend:
	@echo "🐍 Installing backend deps..."
	cd backend && python3 -m venv venv && . venv/bin/activate && pip install -r requirements.txt
