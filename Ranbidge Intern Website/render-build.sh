#!/bin/bash

# Render Build Script for Ranbidge Internship Website

echo "🚀 Starting build process for Ranbidge Internship Website..."

# Navigate to the website directory
cd "Ranbidge Intern Website" || exit 1

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Set environment variables
export NODE_ENV=production
export GEMINI_API_KEY=${GEMINI_API_KEY}

# Build the application
echo "🔨 Building the application..."
npm run build

# Verify build output
if [ -d "dist" ]; then
    echo "✅ Build successful! dist directory created."
    ls -la dist/
else
    echo "❌ Build failed! dist directory not found."
    exit 1
fi

echo "🎉 Build process completed successfully!"
