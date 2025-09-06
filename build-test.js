#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';

console.log('🔨 Testing build process...\n');

try {
  // Check if dist directory exists and clean it
  if (fs.existsSync('dist')) {
    console.log('🧹 Cleaning existing dist directory...');
    fs.rmSync('dist', { recursive: true, force: true });
  }

  // Run the build command
  console.log('📦 Running build command...');
  execSync('npm run build', { stdio: 'inherit' });

  // Check if dist directory was created
  if (fs.existsSync('dist')) {
    console.log('✅ Build successful! dist directory created.');
    
    // List contents of dist directory
    const distContents = fs.readdirSync('dist');
    console.log('📁 Build output:', distContents);
    
    // Check if index.html exists
    if (fs.existsSync('dist/index.html')) {
      console.log('✅ index.html found in dist directory');
    } else {
      console.log('❌ index.html not found in dist directory');
    }
    
    // Check if assets directory exists
    if (fs.existsSync('dist/assets')) {
      const assets = fs.readdirSync('dist/assets');
      console.log('📦 Assets found:', assets.length, 'files');
    }
    
  } else {
    console.log('❌ Build failed! dist directory not created.');
    process.exit(1);
  }

} catch (error) {
  console.error('❌ Build failed with error:', error.message);
  process.exit(1);
}
