import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-auto">
          <div className="max-w-6xl mx-auto p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
