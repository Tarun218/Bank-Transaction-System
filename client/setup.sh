#!/bin/bash

# Bank Transaction System - Frontend Setup Script
# This script sets up and runs the complete frontend

echo "🚀 Bank Transaction System - Frontend Setup"
echo "==========================================="
echo ""

# Check if node is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 16+ first."
    exit 1
fi

echo "✅ Node.js $(node --version) found"
echo ""

# Navigate to client directory
cd client

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
    echo ""
    echo "🎉 Setup complete!"
    echo ""
    echo "Available commands:"
    echo "  npm run dev     - Start development server (http://localhost:5173)"
    echo "  npm run build   - Build for production"
    echo "  npm run preview - Preview production build"
    echo "  npm run lint    - Check code with ESLint"
    echo ""
    echo "To start the development server, run:"
    echo "  npm run dev"
    echo ""
else
    echo "❌ Failed to install dependencies"
    exit 1
fi
