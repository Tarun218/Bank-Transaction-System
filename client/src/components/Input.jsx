import React from 'react'

export default function Input({ 
  label, 
  error, 
  icon: Icon,
  className = '',
  ...props 
}) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
        )}
        <input
          className={`
            w-full px-4 py-2.5 rounded-lg border-2 transition-colors
            bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-50
            border-neutral-200 dark:border-neutral-600
            placeholder:text-neutral-400 dark:placeholder:text-neutral-500
            focus:outline-none focus:border-primary-600 dark:focus:border-primary-500
            disabled:bg-neutral-100 dark:disabled:bg-neutral-800 disabled:cursor-not-allowed
            ${Icon ? 'pl-10' : ''}
            ${error ? 'border-red-500' : ''}
            ${className}
          `}
          {...props}
        />
      </div>
      {error && (
        <p className="text-xs text-red-500 mt-1">{error}</p>
      )}
    </div>
  )
}
