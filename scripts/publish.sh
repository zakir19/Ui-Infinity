#!/bin/bash

# UIinfinity Components Publishing Script

echo "🚀 Starting UIinfinity Components publishing process..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Check if npm is logged in
if ! npm whoami > /dev/null 2>&1; then
    echo "❌ Error: You must be logged in to npm. Run 'npm login' first."
    exit 1
fi

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf dist/
rm -rf node_modules/.cache/

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the library
echo "🔨 Building the library..."
npm run build:lib

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Error: Build failed. dist/ directory not found."
    exit 1
fi

# Check package size
echo "📊 Checking package size..."
PACKAGE_SIZE=$(du -sh dist/ | cut -f1)
echo "Package size: $PACKAGE_SIZE"

# Show what will be published
echo "📋 Files to be published:"
npm pack --dry-run

# Ask for confirmation
echo ""
read -p "🤔 Do you want to publish to npm? (y/N): " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "📤 Publishing to npm..."
    npm publish
    
    if [ $? -eq 0 ]; then
        echo "✅ Successfully published to npm!"
        echo "🎉 Your package is now available at: https://www.npmjs.com/package/@uiinfinity/components"
    else
        echo "❌ Failed to publish to npm."
        exit 1
    fi
else
    echo "❌ Publishing cancelled."
    exit 0
fi
