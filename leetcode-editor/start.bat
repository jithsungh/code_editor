@echo off
echo ========================================
echo   LeetCode Editor POC - Quick Start
echo ========================================
echo.

echo Checking if node_modules exists...
if not exist "node_modules\" (
    echo Installing dependencies...
    call npm install
    echo.
) else (
    echo Dependencies already installed.
    echo.
)

echo Starting development server...
echo.
echo Once started, open your browser to:
echo   http://localhost:5173
echo.
echo Navigate to specific problems using:
echo   http://localhost:5173/1
echo   http://localhost:5173/2
echo   http://localhost:5173/<problem-id>
echo.
echo Press Ctrl+C to stop the server
echo.

call npm run dev
