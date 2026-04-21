import React, { useState, useEffect } from 'react'
import { accountsAPI } from '../services/api'
import { formatCurrency, formatDate } from '../utils/helpers'
import Layout from '../layouts/Layout'
import Card from '../components/Card'

export default function HistoryPage({ onToast }) {
  const [transactions, setTransactions] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, you would fetch transaction history from the backend
    // For now, we'll show a placeholder
    setLoading(false)
  }, [])

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-50">
            Transaction History
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 mt-1">
            View all your transactions
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          </div>
        ) : transactions.length === 0 ? (
          <Card className="text-center py-12">
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              No transactions yet. Start by making a transfer!
            </p>
          </Card>
        ) : (
          <Card>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-700">
                    <th className="text-left py-3 px-4 font-semibold text-neutral-900 dark:text-neutral-50">Date</th>
                    <th className="text-left py-3 px-4 font-semibold text-neutral-900 dark:text-neutral-50">Type</th>
                    <th className="text-left py-3 px-4 font-semibold text-neutral-900 dark:text-neutral-50">Amount</th>
                    <th className="text-left py-3 px-4 font-semibold text-neutral-900 dark:text-neutral-50">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((tx, idx) => (
                    <tr key={idx} className="border-b border-neutral-100 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800">
                      <td className="py-3 px-4 text-neutral-600 dark:text-neutral-400">{formatDate(tx.date)}</td>
                      <td className="py-3 px-4 font-medium text-neutral-900 dark:text-neutral-50">{tx.type}</td>
                      <td className="py-3 px-4 font-semibold text-neutral-900 dark:text-neutral-50">{formatCurrency(tx.amount)}</td>
                      <td className="py-3 px-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          tx.status === 'COMPLETED'
                            ? 'bg-accent-100 text-accent-800 dark:bg-accent-900 dark:text-accent-100'
                            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100'
                        }`}>
                          {tx.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}
      </div>
    </Layout>
  )
}
