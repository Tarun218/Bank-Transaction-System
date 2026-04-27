import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  const navItems = [
    { label: 'Dashboard', path: '/dashboard', icon: '📊' },
    { label: 'Transfer', path: '/transfer', icon: '💸' },
    { label: 'History', path: '/history', icon: '📜' },
  ]

  return (
    <aside className="bg-white dark:bg-neutral-800 border-r border-neutral-200 dark:border-neutral-700 w-64 h-screen sticky top-0">
      <nav className="p-6 space-y-2">
        {navItems.map(item => (
          <Link
            key={item.path}
            to={item.path}
            className="
              flex items-center gap-3 px-4 py-3 rounded-lg
              text-neutral-700 dark:text-neutral-300
              hover:bg-neutral-100 dark:hover:bg-neutral-700
              transition-colors
            "
          >
            <span className="text-xl">{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}
