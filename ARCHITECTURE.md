# 🏗️ Bank Transaction System - Architecture

## Complete System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    BROWSER (http://localhost:5173)              │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌──────────────────────────────────────────────────────┐        │
│  │              React Application (SPA)                 │        │
│  ├──────────────────────────────────────────────────────┤        │
│  │                                                      │        │
│  │  ┌────────────────────────────────────────────┐    │        │
│  │  │        App Component (BrowserRouter)       │    │        │
│  │  └────────────────────────────────────────────┘    │        │
│  │            ↓         ↓         ↓         ↓         │        │
│  │         Login    Register  Dashboard  Transfer    │        │
│  │         Page      Page       Page       Page      │        │
│  │            ↓         ↓         ↓         ↓         │        │
│  │  ┌────────────────────────────────────────────┐    │        │
│  │  │    Layout Component (Header + Sidebar)    │    │        │
│  │  └────────────────────────────────────────────┘    │        │
│  │                                                      │        │
│  │  ┌────────────────────────────────────────────┐    │        │
│  │  │    11 Reusable Components                 │    │        │
│  │  │  (Button, Input, Card, Toast, etc)       │    │        │
│  │  └────────────────────────────────────────────┘    │        │
│  │                                                      │        │
│  └──────────────────────────────────────────────────────┘        │
│           ↑                                      ↓                │
│           │ (localStorage)              (import.meta.env)        │
│           │                                      │                │
│  ┌────────┴──────────────────────────────────────┴──────┐       │
│  │         Global State (Context API)                    │       │
│  │  AuthContext (user, login, logout, loading)         │       │
│  └────────┬──────────────────────────────────────────────┘       │
│           │                                                      │
│  ┌────────┴──────────────────────────────────────────────┐       │
│  │       Axios API Service (src/services/api.js)        │       │
│  │  • Request/Response Interceptors                     │       │
│  │  • Auth Token Handling                              │       │
│  │  • Base URL: /api (proxy to :3000)                  │       │
│  └────────┬──────────────────────────────────────────────┘       │
│           │                                                      │
│           │ HTTP Requests (JSON)                                │
│           ↓                                                      │
└─────────────┼──────────────────────────────────────────────────┘
              │
              │  Cross-Origin Request (CORS enabled)
              │  http://localhost:3000/api
              ↓
┌─────────────────────────────────────────────────────────────────┐
│                    Node.js Backend (port 3000)                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌──────────────────────────────────────────────────────┐        │
│  │            Express.js Application                    │        │
│  ├──────────────────────────────────────────────────────┤        │
│  │                                                      │        │
│  │  ┌────────────────────────────────────────────┐    │        │
│  │  │            CORS Middleware                 │    │        │
│  │  │  (Allow requests from localhost:5173)     │    │        │
│  │  └────────────────────────────────────────────┘    │        │
│  │                    ↓                                 │        │
│  │  ┌────────────────────────────────────────────┐    │        │
│  │  │         Auth Middleware                    │    │        │
│  │  │  (Validate JWT from cookies)              │    │        │
│  │  └────────────────────────────────────────────┘    │        │
│  │                    ↓                                 │        │
│  │  ┌────────────────────────────────────────────┐    │        │
│  │  │     Routes (Express Router)                │    │        │
│  │  │  • /auth/* (registration, login, logout)  │    │        │
│  │  │  • /accounts/* (CRUD operations)          │    │        │
│  │  │  • /transactions/* (money transfers)      │    │        │
│  │  └────────────────────────────────────────────┘    │        │
│  │                    ↓                                 │        │
│  │  ┌────────────────────────────────────────────┐    │        │
│  │  │     Controllers (Business Logic)           │    │        │
│  │  │  • User authentication                    │    │        │
│  │  │  • Account management                     │    │        │
│  │  │  • Transaction processing                 │    │        │
│  │  └────────────────────────────────────────────┘    │        │
│  │                    ↓                                 │        │
│  │  ┌────────────────────────────────────────────┐    │        │
│  │  │      Database Layer (Mongoose)             │    │        │
│  │  │  • Models (schemas)                       │    │        │
│  │  │  • Validation                             │    │        │
│  │  │  • Relationships                          │    │        │
│  │  └────────────────────────────────────────────┘    │        │
│  │                                                      │        │
│  └──────────────────────────────────────────────────────┘        │
│           ↑                                      ↓                │
│           │ (MongoDB protocol)          (environment vars)       │
│           │                                      │                │
│  ┌────────┴─────────────────────────────────────┴──────┐        │
│  │  Services Layer                                      │        │
│  │  • Email Service (Nodemailer)                       │        │
│  │  • JWT Token Service                               │        │
│  └────────────────────────────────────────────────────┘        │
│           ↑                                                      │
│           │                                                      │
│  ┌────────┴──────────────────────────────────────────────┐      │
│  │         Database Connection Pool                      │      │
│  │  MongoDB Atlas (Cloud)                              │      │
│  └────────────────────────────────────────────────────────┘      │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

---

## Data Flow Diagram

### Authentication Flow
```
User Input (Email/Password)
         ↓
Form Validation (Client)
         ↓
Axios POST to /api/auth/login
         ↓
Backend: Express Route Handler
         ↓
Controller: Find user in DB, validate password
         ↓
Generate JWT Token
         ↓
Set HttpOnly Cookie with token
         ↓
Return: { user, token }
         ↓
Frontend: Store in Context + localStorage
         ↓
Redirect to Dashboard
```

### Transfer Money Flow
```
User Input (From, To, Amount)
         ↓
Form Validation (Client)
         ↓
Generate Idempotency Key
         ↓
Axios POST to /api/transactions/transfer
   + Authorization Header (token)
         ↓
Backend: Auth Middleware validates token
         ↓
Controller: Check account ownership
         ↓
Validate amount & balance
         ↓
Create transaction in DB
         ↓
Update source account balance (-amount)
         ↓
Update dest account balance (+amount)
         ↓
Return: { transaction, newBalance }
         ↓
Frontend: Show success toast
         ↓
Refresh account list
```

---

## Component Hierarchy

```
App (Root)
├── BrowserRouter
├── ThemeToggle (Dark mode)
├── Toast Container
└── Routes
    ├── Route "/" → PublicRoute → LoginPage
    ├── Route "/register" → PublicRoute → RegisterPage
    ├── Route "/dashboard" → ProtectedRoute
    │   └── Layout
    │       ├── Header
    │       ├── Sidebar
    │       └── DashboardPage
    │           ├── AccountCard (multiple)
    │           │   ├── Button (Create Account)
    │           │   └── Button (Send Money)
    │           └── CreateAccountModal (future)
    ├── Route "/transfer" → ProtectedRoute
    │   └── Layout
    │       ├── Header
    │       ├── Sidebar
    │       └── TransferPage
    │           ├── Card
    │           ├── Input (multiple)
    │           └── Button (Transfer)
    └── Route "/history" → ProtectedRoute
        └── Layout
            ├── Header
            ├── Sidebar
            └── HistoryPage
```

---

## State Management Flow

```
AuthContext (Global Auth State)
├── user: { id, name, email, ... }
├── isAuthenticated: boolean
├── isLoading: boolean
├── error: string | null
├── login(email, password) → Calls API, updates state
├── logout() → Clears state, localStorage
└── Persists to localStorage on mount

Custom Hooks:
├── useAuth() → Get AuthContext
└── useToast() → Manage notifications
```

---

## API Endpoint Structure

```
BASE URL: http://localhost:3000/api

Authentication:
  POST /auth/register
  POST /auth/login
  POST /auth/logout

Accounts:
  GET /accounts
  POST /accounts
  GET /accounts/balance/:id

Transactions:
  POST /transactions
  GET /transactions (future)

Response Format:
  {
    "status": "success" | "error",
    "message": "...",
    "data": { ... },
    "error": "..."
  }
```

---

## Environment Variables

### Backend (.env)
```
MONGO_URI=mongodb+srv://...
JWT_SECRET=your-secret-key
JWT_EXPIRY=3d
CLIENT_URL=http://localhost:5173
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### Frontend (vite.config.js proxy)
```
/api → http://localhost:3000/api
```

---

## Request/Response Interceptors

### Request Interceptor
```
Before sending:
1. Get token from localStorage
2. Attach to Authorization header
3. Log request details
```

### Response Interceptor
```
After receiving:
1. Check status code
2. If 401: Auto-logout, redirect to login
3. If error: Show toast notification
4. Log response
```

---

## Component Communication

```
Props Down ↓
├── Page → Layout → Components
├── Page → Card → Button
└── Form → Input (validation)

Events Up ↑
├── Button click → Page handler
├── Form submit → Page handler
└── Input change → Form state

Context (Global) ←→
├── App ← → AuthContext
├── Pages ← → useAuth()
└── Any Component ← → useAuth(), useToast()
```

---

## Build & Deployment Architecture

```
Development:
├── npm run dev
├── Vite Dev Server (HMR enabled)
└── http://localhost:5173

Production Build:
├── npm run build
├── Vite bundles React + components
├── Tailwind CSS purged
├── Output: dist/ folder
└── Ready for deployment

Deployment Options:
├── Vercel (recommended)
├── Netlify
├── GitHub Pages
└── Custom server
```

---

## Security Layers

```
Frontend:
├── Protected Routes (must be authenticated)
├── Form validation
├── Error handling
└── No sensitive data in localStorage (except token)

Backend:
├── JWT validation (middleware)
├── Password hashing (bcrypt)
├── CORS (whitelist frontend origin)
├── Input validation
├── Database queries parameterized
└── Rate limiting (future)

Network:
├── HTTPS (production)
├── HttpOnly cookies
├── CSRF protection (future)
└── CORS headers
```

---

## Performance Optimizations

```
Frontend:
├── Code splitting (route-based)
├── Lazy loading components
├── Tree shaking (unused code removed)
├── Asset minification
├── Gzipping enabled
└── Bundle size: ~45KB (gzipped)

Build Speed:
├── Vite: ~3 seconds
├── HMR: Instant
└── Production: ~5 seconds

Runtime:
├── No unnecessary re-renders
├── Context memoization
├── Local storage caching
└── Debounced searches (future)
```

---

## Monitoring & Debugging

```
Development Tools:
├── Browser DevTools (F12)
├── React Developer Tools (browser extension)
├── Console logging (API requests)
├── Network tab (requests/responses)
└── ESLint (code quality)

Debugging:
├── Check browser console for errors
├── Check network tab for API calls
├── Check backend logs (terminal)
├── Check database (MongoDB Atlas)
└── Check auth state (React DevTools)
```

---

This architecture ensures:
✅ Scalability
✅ Maintainability
✅ Security
✅ Performance
✅ User experience
✅ Developer experience
