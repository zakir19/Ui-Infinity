// Test script to verify the UIinfinity components package
const fs = require('fs');
const path = require('path');

console.log('🧪 Testing UIinfinity Components Package...\n');

// Check if dist directory exists
const distPath = path.join(__dirname, 'dist');
if (!fs.existsSync(distPath)) {
  console.error('❌ dist directory not found. Run "npm run build:lib" first.');
  process.exit(1);
}

// Check for required files
const requiredFiles = [
  'index.js',
  'index.esm',
  'index.d.ts'
];

console.log('📁 Checking build files:');
requiredFiles.forEach(file => {
  const filePath = path.join(distPath, file);
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    console.log(`✅ ${file} (${(stats.size / 1024).toFixed(2)} KB)`);
  } else {
    console.log(`❌ ${file} - Missing`);
  }
});

// Check package.json
const packagePath = path.join(__dirname, 'package.json');
if (fs.existsSync(packagePath)) {
  const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  console.log('\n📦 Package Information:');
  console.log(`   Name: ${packageJson.name}`);
  console.log(`   Version: ${packageJson.version}`);
  console.log(`   Description: ${packageJson.description}`);
  console.log(`   Main: ${packageJson.main}`);
  console.log(`   Module: ${packageJson.module}`);
  console.log(`   Types: ${packageJson.types}`);
}

// Test dry run of npm pack
console.log('\n📋 Testing npm pack (dry run):');
const { execSync } = require('child_process');
try {
  const packOutput = execSync('npm pack --dry-run', { encoding: 'utf8' });
  console.log('✅ npm pack dry run successful');
  console.log('📦 Files that would be included:');
  const lines = packOutput.split('\n');
  const fileListStart = lines.findIndex(line => line.includes('npm notice Tarball Contents:'));
  if (fileListStart !== -1) {
    lines.slice(fileListStart + 1).forEach(line => {
      if (line.trim() && !line.includes('npm notice')) {
        console.log(`   ${line.trim()}`);
      }
    });
  }
} catch (error) {
  console.error('❌ npm pack dry run failed:', error.message);
}

console.log('\n🎉 Package test completed!');
console.log('\n📝 Next steps:');
console.log('1. Update package.json with your details');
console.log('2. Run "npm login" to login to npm');
console.log('3. Run "npm publish" to publish the package');
console.log('4. Or use the provided scripts: scripts/publish.sh or scripts/publish.bat');
