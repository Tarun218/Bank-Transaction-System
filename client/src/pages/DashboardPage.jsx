import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { accountsAPI } from '../services/api'
import { formatCurrency } from '../utils/helpers'
import Layout from '../layouts/Layout'
import Card from '../components/Card'
import Button from '../components/Button'

export default function DashboardPage({ onToast }) {
  const navigate = useNavigate()
  const { user } = useAuth()
  const [accounts, setAccounts] = useState([])
  const [balances, setBalances] = useState({})
  const [loading, setLoading] = useState(true)
  const [creatingAccount, setCreatingAccount] = useState(false)

  useEffect(() => {
    fetchAccounts()
  }, [])

  const fetchAccounts = async () => {
    try {
      setLoading(true)
      const response = await accountsAPI.getAccounts()
      const accountsList = response.data.accounts || []
      setAccounts(accountsList)

      // Build balances object from accounts response (which now includes balance)
      const balancesData = {}
      accountsList.forEach(account => {
        balancesData[account._id] = typeof account.balance === 'number' ? account.balance : 0
      })
      setBalances(balancesData)
    } catch (error) {
      console.error('Failed to fetch accounts:', error)
      onToast('Failed to fetch accounts', 'error')
    } finally {
      setLoading(false)
    }
  }

  const handleCreateAccount = async () => {
    try {
      setCreatingAccount(true)
      await accountsAPI.createAccount()
      onToast('Account created successfully!', 'success')
      // Always refresh accounts and balances after creation
      await fetchAccounts()
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to create account'
      onToast(message, 'error')
    } finally {
      setCreatingAccount(false)
    }
  }

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-50">
              Welcome, {user?.name}!
            </h1>
            <p className="text-neutral-600 dark:text-neutral-400 mt-1">
              Manage your accounts and transactions
            </p>
          </div>
          <Button
            variant="success"
            onClick={() => navigate('/transfer')}
          >
            💸 Send Money
          </Button>
        </div>

        {/* Accounts Grid */}
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          </div>
        ) : accounts.length === 0 ? (
          <Card className="text-center py-12">
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              No accounts yet. Create one to get started!
            </p>
            <Button
              variant="primary"
              onClick={handleCreateAccount}
              loading={creatingAccount}
            >
              Create Account
            </Button>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {accounts.map(account => (
              <Card key={account._id} className="border-l-4 border-l-primary-600">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {account.accountType}
                    </p>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                      {account.currency || 'INR'}
                    </h3>
                  </div>
                  <span className={`
                    px-3 py-1 rounded-full text-xs font-semibold
                    ${account.status === 'ACTIVE'
                      ? 'bg-accent-100 text-accent-800 dark:bg-accent-900 dark:text-accent-100'
                      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100'
                    }
                  `}>
                    {account.status}
                  </span>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">Balance</p>
                  <p className="text-3xl font-bold text-primary-600">
                    {formatCurrency(typeof balances[account._id] === 'number' ? balances[account._id] : 0)}
                  </p>
                </div>

                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  ID: {account._id.substring(0, 12)}...
                </p>
              </Card>
            ))}

            {/* Create Account Card */}
            <Card className="flex items-center justify-center py-12 border-2 border-dashed border-neutral-300 dark:border-neutral-600 hover:border-primary-600 dark:hover:border-primary-500 transition-colors cursor-pointer"
              onClick={handleCreateAccount}
            >
              <button
                className="text-center"
                disabled={creatingAccount}
              >
                <p className="text-4xl mb-2">+</p>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {creatingAccount ? 'Creating...' : 'Create New Account'}
                </p>
              </button>
            </Card>
          </div>
        )}
      </div>
    </Layout>
  )
}
