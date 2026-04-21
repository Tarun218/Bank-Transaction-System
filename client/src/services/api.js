import axios from 'axios'

const API_BASE_URL = 'http://localhost:3000/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  timeout: 15000,
})

// Request interceptor
api.interceptors.request.use(
  (config) => {
    console.log(`[API] ${config.method.toUpperCase()} ${config.url}`)
    return config
  },
  (error) => {
    console.error('[API] Request error:', error)
    return Promise.reject(error)
  }
)

// Response interceptor
api.interceptors.response.use(
  (response) => {
    console.log(`[API] Response: ${response.status}`)
    return response
  },
  (error) => {
    console.error('[API] Error:', error.response?.status, error.response?.data)
    if (error.response?.status === 401) {
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

// Auth endpoints
export const authAPI = {
  register: (email, password, name) =>
    api.post('/auth/register', { email, password, name }),
  login: (email, password) =>
    api.post('/auth/login', { email, password }),
  logout: () =>
    api.post('/auth/logout'),
}

// Accounts endpoints
export const accountsAPI = {
  createAccount: () =>
    api.post('/accounts'),
  getAccounts: () =>
    api.get('/accounts'),
  getBalance: (accountId) =>
    api.get(`/accounts/balance/${accountId}`),
}

// Transactions endpoints
export const transactionsAPI = {
  transfer: (fromAccount, toAccount, amount, idempotencyKey) =>
    api.post('/transactions', { fromAccount, toAccount, amount, idempotencyKey }),
  getHistory: () =>
    api.get('/transactions/history'),
  addFunds: (toAccount, amount, idempotencyKey) =>
    api.post('/transactions/system/initial-funds', { toAccount, amount, idempotencyKey }),
}

export default api
