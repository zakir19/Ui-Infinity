@echo off
setlocal enabledelayedexpansion

echo 🚀 Starting UIinfinity Components publishing process...

REM Check if we're in the right directory
if not exist "package.json" (
    echo ❌ Error: package.json not found. Please run this script from the project root.
    exit /b 1
)

REM Check if npm is logged in
npm whoami >nul 2>&1
if errorlevel 1 (
    echo ❌ Error: You must be logged in to npm. Run 'npm login' first.
    exit /b 1
)

REM Clean previous builds
echo 🧹 Cleaning previous builds...
if exist "dist" rmdir /s /q "dist"
if exist "node_modules\.cache" rmdir /s /q "node_modules\.cache"

REM Install dependencies
echo 📦 Installing dependencies...
npm install

REM Build the library
echo 🔨 Building the library...
npm run build:lib

REM Check if build was successful
if not exist "dist" (
    echo ❌ Error: Build failed. dist/ directory not found.
    exit /b 1
)

REM Check package size
echo 📊 Checking package size...
for /f "tokens=1" %%i in ('dir /s dist ^| find "File(s)"') do set PACKAGE_SIZE=%%i
echo Package size: !PACKAGE_SIZE!

REM Show what will be published
echo 📋 Files to be published:
npm pack --dry-run

REM Ask for confirmation
echo.
set /p CONFIRM="🤔 Do you want to publish to npm? (y/N): "

if /i "!CONFIRM!"=="y" (
    echo 📤 Publishing to npm...
    npm publish
    
    if errorlevel 1 (
        echo ❌ Failed to publish to npm.
        exit /b 1
    ) else (
        echo ✅ Successfully published to npm!
        echo 🎉 Your package is now available at: https://www.npmjs.com/package/@uiinfinity/components
    )
) else (
    echo ❌ Publishing cancelled.
)

endlocal
