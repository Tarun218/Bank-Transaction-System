import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import DashboardPage from './pages/DashboardPage'
import TransferPage from './pages/TransferPage'
import HistoryPage from './pages/HistoryPage'
import ProtectedRoute from './components/ProtectedRoute'
import PublicRoute from './components/PublicRoute'
import Toast from './components/Toast'
import ThemeToggle from './components/ThemeToggle'
import { useToast } from './hooks/useToast'

function App() {
  const [theme, setTheme] = useState('light')
  const { toasts, addToast, removeToast } = useToast()

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <AuthProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
            {/* Theme Toggle */}
            <div className="fixed top-4 right-4 z-50">
              <ThemeToggle theme={theme} onToggle={toggleTheme} />
            </div>

            {/* Toast Container */}
            <div className="fixed top-20 right-4 space-y-2 z-40">
              {toasts.map(toast => (
                <Toast
                  key={toast.id}
                  message={toast.message}
                  type={toast.type}
                  onClose={() => removeToast(toast.id)}
                />
              ))}
            </div>

            {/* Routes */}
            <Routes>
              <Route
                path="/login"
                element={
                  <PublicRoute>
                    <LoginPage onToast={addToast} />
                  </PublicRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <PublicRoute>
                    <RegisterPage onToast={addToast} />
                  </PublicRoute>
                }
              />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <DashboardPage onToast={addToast} />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/transfer"
                element={
                  <ProtectedRoute>
                    <TransferPage onToast={addToast} />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/history"
                element={
                  <ProtectedRoute>
                    <HistoryPage onToast={addToast} />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Navigate to="/dashboard" />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
