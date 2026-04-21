import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { authAPI } from '../services/api'
import Button from './Button'

export default function Header() {
  const { user, logout } = useAuth()

  const handleLogout = async () => {
    try {
      await authAPI.logout()
      logout()
    } catch (error) {
      console.error('Logout failed:', error)
      logout()
    }
  }

  return (
    <header className="bg-white dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700 shadow-soft">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/dashboard" className="text-2xl font-bold text-primary-600">
          Bank
        </Link>

        <div className="flex items-center gap-4">
          {user && (
            <>
              <div className="text-right">
                <p className="text-sm font-medium text-neutral-900 dark:text-neutral-50">{user.name}</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">{user.email}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
