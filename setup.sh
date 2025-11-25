#!/bin/bash

# --- Configuration ---
PROJECT_NAME="portfolio"
DJANGO_APP_NAME="api" # The Django app that will contain your DRF views
DJANGO_PROJECT_DIR="backend"
FRONTEND_DIR="frontend"
BUILD_DIR="${DJANGO_PROJECT_DIR}/frontend_build" # Final build output location

echo "🚀 Starting full-stack setup for: $PROJECT_NAME"

# --- 1. Create Project Root Directory ---
uv init $PROJECT_NAME
cd $PROJECT_NAME

# --- 2. Setup Python Virtual Environment and Django Backend ---
echo "🐍 Setting up Django backend in: ${DJANGO_PROJECT_DIR}/"

source venv/bin/activate

# Install Django and DRF, plus useful packages for a full-stack app
uv add django djangorestframework django-cors-headers

mkdir $DJANGO_PROJECT_DIR
cd $DJANGO_PROJECT_DIR

# Create Django Project (myproject is the inner config folder)
uv run django-admin startproject core .
# Create Django API App
uv run manage.py startapp $DJANGO_APP_NAME

# Create the final build directory that React will target
mkdir $BUILD_DIR

cd .. # Back to project root ($PROJECT_NAME)

# --- 3. Setup React/TypeScript/Tailwind Frontend ---
echo "⚛️ Setting up React (Vite, TS) frontend in: ${FRONTEND_DIR}/"

# Use Vite for a modern, fast React setup
npm create vite@latest $FRONTEND_DIR -- --template react-ts

cd $FRONTEND_DIR

# Install dependencies and Tailwind CSS
npm install
npm install -D tailwindcss postcss autoprefixer

# Initialize Tailwind configuration files
npx tailwindcss init -p

# --- 4. Configure Frontend Files (Tailwind and Vite Build) ---

# 4.1 Update tailwind.config.js to scan React files
cat > tailwind.config.js << EOF
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
EOF

# 4.2 Add Tailwind directives to the main CSS file
# Note: Path is relative to the frontend directory
echo -e "@tailwind base;\n@tailwind components;\n@tailwind utilities;" > src/index.css

# 4.3 Configure Vite to build to the Django directory and setup proxy
# Note: The 'outDir' path is critical for Django integration
cat > vite.config.ts << EOF
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

// Path to the Django build folder (from frontend/)
const djangoBuildDir = resolve(__dirname, '..', '${BUILD_DIR}')

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: djangoBuildDir,
    emptyOutDir: true,
  },
  server: {
    port: 5173,
    // Proxy API requests to the Django backend
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
EOF

cd .. # Back to project root ($PROJECT_NAME)

# --- 5. Configure Django Settings and URLs for Integration ---
echo "⚙️ Configuring Django settings and URL patterns..."

DJANGO_SETTINGS_PATH="${DJANGO_PROJECT_DIR}/myproject/settings.py"
DJANGO_URLS_PATH="${DJANGO_PROJECT_DIR}/myproject/urls.py"

# 5.1 Update settings.py
# Use sed to modify INSTALLED_APPS, MIDDLEWARE, TEMPLATES, and STATIC settings
# The syntax for sed differs slightly between Linux and macOS, using '-i.bak' for compatibility.
sed -i.bak "/INSTALLED_APPS = \[/a\    '${DJANGO_APP_NAME}',\n    'rest_framework',\n    'corsheaders'," $DJANGO_SETTINGS_PATH
sed -i.bak "/MIDDLEWARE = \[/a\    'corsheaders.middleware.CorsMiddleware'," $DJANGO_SETTINGS_PATH

# Add frontend-specific settings (TEMPLATES and Static)
cat >> $DJANGO_SETTINGS_PATH << EOF
# --- Full-Stack Integration Settings ---

# TEMPLATES: Point to React's index.html
TEMPLATES[0]['DIRS'] = [BASE_DIR / '${BUILD_DIR}']

# STATICFILES: Tell Django where to find React's compiled CSS/JS
STATICFILES_DIRS = [
    BASE_DIR / '${BUILD_DIR}' / 'static',
]

# CORS: Allow React dev server to communicate with Django API
CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]
CORS_ALLOW_CREDENTIALS = True

# --- END Full-Stack Integration Settings ---
EOF

# Clean up sed backup files
find $DJANGO_PROJECT_DIR -type f -name "*.bak" -delete

# 5.2 Update urls.py (The catch-all route for React)
cat > $DJANGO_URLS_PATH << EOF
from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # API endpoints will go here
    path('api/', include('${DJANGO_APP_NAME}.urls')),

    # CATCH-ALL: Serve the React app (index.html) for all other routes
    re_path(r'^(?:.*)/?$', TemplateView.as_view(template_name='index.html')),
]
EOF

# 5.3 Create an initial urls.py file for the new Django API app
cat > ${DJANGO_PROJECT_DIR}/${DJANGO_APP_NAME}/urls.py << EOF
from django.urls import path

# Replace this with your actual views later
from django.http import JsonResponse 
def hello_world_api(request):
    return JsonResponse({'message': 'Hello from Django API!'}, safe=False)

urlpatterns = [
    # A simple test API endpoint
    path('hello/', hello_world_api, name='hello_world_api'),
]
EOF

echo "✅ Setup Complete!"

# --- 6. Next Steps Instructions ---
echo -e "\n--- Next Steps ---\n"
echo "1. Navigate to the project directory:"
echo "   cd $PROJECT_NAME"
echo "2. Start the Django API Server (in a new terminal/tab):"
echo "   source venv/bin/activate"
echo "   python ${DJANGO_PROJECT_DIR}/manage.py runserver"
echo "   (Check the API: http://127.0.0.1:8000/api/hello/)"
echo "3. Build and Start the React Dev Server (in another terminal/tab):"
echo "   cd $FRONTEND_DIR"
echo "   npm run build # Initial build to create the frontend_build folder"
echo "   npm run dev # Starts the React development server with proxy"
echo "   (Open your browser to: http://127.0.0.1:5173)"

# Grant execute permissions to the script itself (if not already granted)
chmod +x setup.sh