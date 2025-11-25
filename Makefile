# --- Configuration Variables ---
PROJECT_NAME := portfolio
PYTHON := python3
UV := uv
VENV_PATH := venv
PYTHON_DEPS := requirements.txt
BACKEND_DIR := backend
DJANGO_MANAGE := $(PYTHON) $(BACKEND_DIR)/manage.py

# Frontend Configuration
FRONTEND_DIR := frontend
NPM := npm
NODE_DEPS := $(FRONTEND_BUILD)/package.json
BUILD_DIR := $(BACKEND_DIR)/frontend_build

# Docker Configuration
DOCKER_IMAGE_NAME := $(PROJECT_NAME)
DOCKERFILE_DEV := Dockerfile.dev

# --- .PHONY Targets (Standard Make targets) ---
.PHONY: ensure_uv install build dev start_all test_backend migrate db_seed clean lint lint_backend lint_frontend prod setup_venv

# --- 1. Installation and Setup ---

ensure_uv: ## Ensure 'uv' is installed (using pipx is recommended).
	@if ! command -v $(UV) > /dev/null; then \
		echo "🔍 'uv' not found. Installing via wget..."; \
		wget -qO- https://astral.sh/uv/install.sh | sh; \
	else \
		echo "✅ '$(UV)' is already installed.\n"; \
	fi

setup_venv: ensure_uv ## Create the virtual environment using uv.
	@echo "🐍 Creating virtual environment with uv..."
	@test -d $(VENV_PATH) || $(UV) venv $(VENV_PATH)
	@echo "Virtual environment created/activated.\n"
	@echo "--- Use 'source $(VENV_PATH)/bin/activate' in terminal to activate manually ---\n"

install: install_backend install_frontend ## Install all dependencies for both stacks.

install_backend: setup_venv ## Install Python dependencies using uv.
	@echo "🐍 Installing Python dependencies with uv..."
	@uv sync

install_frontend: ## Install Node.js dependencies.
	@echo "⚛️ Installing Node.js dependencies..."
	@cd $(FRONTEND_DIR) && $(NPM) install

# --- 2. Development & Run Commands ---

dev: start_all ## Run both the frontend and backend simultaneously.

start_backend: install_backend ## Run the Django development server.
	@echo "🖥️ Starting Django API Server...\n"
	@uv run $(DJANGO_MANAGE) runserver 0.0.0.0:8000
	@echo "\n\n"

start_frontend: ## Run the React development server (with proxy).
	@echo "🖼️ Starting React Development Server (Port 5173)..."
	@cd $(FRONTEND_DIR) && $(NPM) run dev

build_frontend: ## Build the React frontend into static files.
	@echo "📦 Building React frontend into static files..."
	@cd $(FRONTEND_DIR) && $(NPM) run build

start_all: install_backend install_frontend
	@echo "⚡ Starting both Django (8000) and React (5173)..."
	@uv run $(DJANGO_MANAGE) runserver 0.0.0.0:8000 &
	@BACKEND_PID=$$!
	@$(NPM) --prefix $(FRONTEND_DIR) run dev
	@echo "Frontend stopped. Terminating Django backend (PID: $${BACKEND_PID})..."
	-kill $${BACKEND_PID}

# --- 3. Database Management ---

migrate: install_backend ## Run Django database migrations.
	@echo "🗄️ Running database migrations..."
	@uv run backend/manage.py makemigrations
	@uv run backend/manage.py migrate

db_seed: install_backend ## Upload data to the backend database (e.g., initial data or fixtures).
	@echo "🌱 Seeding initial data (Placeholder)..."
	@echo "👉 Update target 'db_seed' with your specific command."

# --- 4. Quality Assurance ---

test_backend: install_backend ## Run backend (Django) tests.
	@echo "🧪 Running Django backend tests..."
	@uv run backend/manage.py test

lint: lint_backend lint_frontend ## Run linters for both stacks.

lint_backend: install_backend ## Lint the backend code (requires configured tools).
	@echo "🧹 Linting backend (Django)..."
	@uv run black .

lint_frontend: install_frontend ## Lint the frontend code (requires configured tools).
	@echo "🎨 Linting frontend (React/TS)..."
	@cd $(FRONTEND_DIR) && $(NPM) run lint

# --- 5. Project Maintenance ---

clean: ## Clean up temporary files, build artifacts, and caches.
	@echo "🗑️ Cleaning project files..."
	@find . -type d -name "__pycache__" -exec rm -rf {} +
	@rm -rf $(BUILD_DIR)
	@rm -f $(BACKEND_DIR)/db.sqlite3 
	@echo "Cleaned __pycache__ and build directory."

# --- 6. Production & Deployment ---

prod: ensure_uv build_frontend ## Prepare the project for production deployment (using uv).
	@echo "🏭 Preparing for production..."
	@$(UV) sync
	# Run collectstatic with the uv-installed environment
	@$(PYTHON) $(BACKEND_DIR)/manage.py collectstatic --no-input
	@echo "Static files collected to $(BACKEND_DIR)/staticfiles/"
	@echo "Ready to deploy the contents of $(BACKEND_DIR)/"

# --- 7. Dockerization (Example) ---

dockerize_dev: ## Build and run the development Docker container.
	@echo "🐳 Building and running development container..."
	@docker build -f $(DOCKERFILE_DEV) -t $(DOCKER_IMAGE_NAME):dev .
	@docker run -it -p 8000:8000 -p 5173:5173 --name $(PROJECT_NAME)_dev $(DOCKER_IMAGE_NAME):dev bash

# --- Help Target ---

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-25s\033[0m %s\n", $$1, $$2}'