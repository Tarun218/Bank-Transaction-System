import React from 'react'

export default function Card({ children, className = '' }) {
  return (
    <div className={`bg-white dark:bg-neutral-800 rounded-xl shadow-soft dark:shadow-lg p-6 ${className}`}>
      {children}
    </div>
  )
}
