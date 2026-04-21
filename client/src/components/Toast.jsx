import React from 'react'

export default function Toast({ message, type = 'info', onClose }) {
  const typeClasses = {
    info: 'bg-blue-500 text-white',
    success: 'bg-green-500 text-white',
    error: 'bg-red-500 text-white',
    warning: 'bg-yellow-500 text-white',
  }

  return (
    <div className={`${typeClasses[type]} px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-in fade-in slide-in-from-top`}>
      <span className="text-sm font-medium">{message}</span>
      <button onClick={onClose} className="ml-2 text-white/80 hover:text-white">
        ✕
      </button>
    </div>
  )
}
