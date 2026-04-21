import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { accountsAPI, transactionsAPI } from '../services/api'
import { generateIdempotencyKey } from '../utils/helpers'
import Layout from '../layouts/Layout'
import Card from '../components/Card'
import Button from '../components/Button'
import Input from '../components/Input'

export default function TransferPage({ onToast }) {
  const navigate = useNavigate()
  const [accounts, setAccounts] = useState([])
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState({
    fromAccount: '',
    toAccount: '',
    amount: '',
  })

  useEffect(() => {
    fetchAccounts()
  }, [])

  const fetchAccounts = async () => {
    try {
      const response = await accountsAPI.getAccounts()
      const accountsList = response.data.accounts || []
      setAccounts(accountsList)
      if (accountsList.length > 0) {
        setFormData(prev => ({
          ...prev,
          fromAccount: accountsList[0]._id
        }))
      }
    } catch (error) {
      console.error('Failed to fetch accounts:', error)
      onToast('Failed to fetch accounts', 'error')
    } finally {
      setLoading(false)
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.fromAccount) newErrors.fromAccount = 'Select a source account'
    if (!formData.toAccount) newErrors.toAccount = 'Enter destination account ID'
    if (!formData.amount) newErrors.amount = 'Enter an amount'
    else if (parseFloat(formData.amount) <= 0) newErrors.amount = 'Amount must be greater than 0'
    if (formData.fromAccount === formData.toAccount) newErrors.toAccount = 'Cannot transfer to same account'
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setSubmitting(true)
    try {
      const idempotencyKey = generateIdempotencyKey()
      await transactionsAPI.transfer(
        formData.fromAccount,
        formData.toAccount,
        parseFloat(formData.amount),
        idempotencyKey
      )
      onToast('Transfer successful!', 'success')
      setFormData({ fromAccount: accounts[0]?._id || '', toAccount: '', amount: '' })
      setTimeout(() => navigate('/dashboard'), 2000)
    } catch (error) {
      const message = error.response?.data?.message || 'Transfer failed'
      onToast(message, 'error')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Layout>
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">
          Transfer Money
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 mb-6">
          Send money to any account (same user or different user)
        </p>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          </div>
        ) : accounts.length === 0 ? (
          <Card className="text-center py-12">
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              You need at least 1 account to transfer money.
            </p>
            <Button
              variant="primary"
              onClick={() => navigate('/dashboard')}
            >
              Create Account
            </Button>
          </Card>
        ) : (
          <Card>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  From Account (Your Account)
                </label>
                <select
                  name="fromAccount"
                  value={formData.fromAccount}
                  onChange={handleChange}
                  className="
                    w-full px-4 py-2.5 rounded-lg border-2 transition-colors
                    bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-50
                    border-neutral-200 dark:border-neutral-600
                    focus:outline-none focus:border-primary-600 dark:focus:border-primary-500
                  "
                >
                  <option value="">Select your account</option>
                  {accounts.map(account => (
                    <option key={account._id} value={account._id}>
                      {account.currency} - Balance: ₹{account.balance?.toFixed(2) || '0.00'} - {account._id.substring(0, 12)}...
                    </option>
                  ))}
                </select>
                {errors.fromAccount && <p className="text-xs text-red-500 mt-1">{errors.fromAccount}</p>}
              </div>

              <Input
                label="To Account ID"
                name="toAccount"
                type="text"
                placeholder="Paste account ID here (or select from your accounts)"
                value={formData.toAccount}
                onChange={handleChange}
                error={errors.toAccount}
              />

              <Input
                label="Amount (INR)"
                name="amount"
                type="number"
                placeholder="1000.00"
                step="0.01"
                min="0"
                value={formData.amount}
                onChange={handleChange}
                error={errors.amount}
              />

              <div className="bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
                <p className="text-sm text-blue-800 dark:text-blue-100">
                  💡 <strong>Tip:</strong> You can transfer to any account ID. It can be your own account or another user's account.
                </p>
              </div>

              <div className="flex gap-4">
                <Button
                  type="submit"
                  variant="primary"
                  loading={submitting}
                  className="flex-1"
                >
                  Transfer
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => navigate('/dashboard')}
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </Card>
        )}
      </div>
    </Layout>
  )
}
