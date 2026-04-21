@echo off
REM Bank Transaction System - Frontend & Backend Startup Script (Windows)
REM This script sets up and runs both backend and frontend

echo.
echo 🏦 Bank Transaction System - Complete Startup
echo ================================================
echo.

REM Check Node.js
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js is not installed. Please install Node.js 16+ first.
    pause
    exit /b 1
)

echo ✅ Node.js detected: 
node --version

echo.
echo 📦 Starting backend...
echo.

REM Start backend in new window
start cmd /k "npm start"

echo ⏳ Waiting 5 seconds for backend to start...
timeout /t 5 /nobreak

echo.
echo 📦 Installing frontend dependencies...
cd client
call npm install

if errorlevel 1 (
    echo ❌ Failed to install frontend dependencies
    pause
    exit /b 1
)

echo.
echo ✅ Frontend dependencies installed
echo.
echo 🚀 Starting frontend development server...
echo.
echo 🎉 System startup complete!
echo.
echo 📍 Your app is running at: http://localhost:5173
echo 🔌 Backend API at: http://localhost:3000/api
echo.
echo Press Ctrl+C to stop the frontend server (backend runs in separate window)
echo.

REM Start frontend
call npm run dev

pause
