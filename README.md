# 💳 Bank Transaction System

A full-stack banking application with secure JWT authentication, account management, and real-time transaction processing. Built with React, Node.js, Express, and MongoDB.

## 🚀 Live Deployment

- **Frontend**: [https://bank-transaction-system-client-tarun218s-projects.vercel.app/login](https://bank-transaction-system-client-tarun218s-projects.vercel.app/login)
- **Backend API**: [https://bank-transaction-system-1-nfdf.onrender.com](https://bank-transaction-system-1-nfdf.onrender.com)
- **Database**: MongoDB Atlas

## ✨ Key Features

- 🔐 **Secure JWT Authentication** - Token-based auth with refresh token support and logout blacklist
- 🚪 **Token Blacklist** - Enhanced security preventing token reuse after logout
- 💰 **Account Management** - Create and manage multiple accounts per user
- 💸 **Financial Transactions** - Deposit, withdraw, and transfer funds between accounts
- 📝 **Ledger System** - Detailed debit/credit transaction logging with timestamps
- 🔄 **Idempotency Support** - Prevents duplicate transactions
- 📧 **Email Notifications** - Automated emails for registration and transactions
- 🎨 **Responsive UI** - Mobile-friendly interface with Tailwind CSS and dark mode support
- ⚡ **Fast Development** - Vite-powered React frontend with HMR
- 🏗️ **Modular Architecture** - Service layer separation, clean code organization

## 📸 Application Screenshots

### Login Page
Login with your credentials to access the banking system.
<img width="1900" height="911" alt="Screenshot 2026-06-11 144910" src="https://github.com/user-attachments/assets/8cda4d82-b297-46f2-adcc-bb4d2c63ae65" />


### Dashboard
View all your accounts with current balances and account details. Manage multiple accounts in one place.

### Transfer Money
Securely transfer funds between your accounts or to other users' accounts.

### Transaction History
Complete transaction ledger showing all your debit and credit transactions with detailed information.

## 🛠️ Tech Stack

| Layer | Technology | Version |
| --- | --- | --- |
| **Frontend** | React | 18+ |
| | Vite | 5+ |
| | Tailwind CSS | 3+ |
| | React Router | 6+ |
| | Axios | 1.6+ |
| **Backend** | Node.js | 18+ |
| | Express.js | 5.2+ |
| | Render | Cloud Deployment |
| | MongoDB | 7+ |
| | Mongoose | 9.4+ |
| **Security** | JWT (jsonwebtoken) | 9.0+ |
| | bcryptjs | 3.0+ |
| **Email** | Nodemailer | 8.0+ |

## 📁 Project Structure

```
Bank_Transaction_System/
├── backend/                    # Node.js + Express API
│   ├── src/
│   │   ├── controllers/        # Route controllers
│   │   ├── models/             # MongoDB schemas
│   │   ├── routes/             # API routes
│   │   ├── services/           # Business logic
│   │   ├── middleware/         # Auth & error handling
│   │   └── config/             # Database config
│   ├── server.js               # Express server
│   └── package.json
│
├── client/                     # React + Vite frontend
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   ├── pages/              # Page components
│   │   ├── context/            # React Context (Auth)
│   │   ├── services/           # API service layer
│   │   ├── hooks/              # Custom React hooks
│   │   ├── layouts/            # Layout components
│   │   ├── utils/              # Utility functions
│   │   └── styles/             # Global CSS
│   ├── vite.config.js
│   └── package.json
│
├── vercel.json                 # Vercel frontend config
└── package.json                # Root scripts & workspaces
```

## 🔧 Installation & Setup

### Prerequisites

- Node.js 18+
- npm or yarn
- MongoDB Atlas account (free tier available)
- Render account (for backend deployment)
- Vercel account (for frontend deployment)

### Local Development

1. **Clone and install dependencies:**

```bash
git clone https://github.com/Tarun218/Bank-Transaction-System.git
cd Bank_Transaction_System
npm run install-all
```

2. **Configure environment variables:**

Create `backend/.env`:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=7d
CLIENT_URL=http://localhost:5173
SMTP_SERVICE=gmail
SMTP_EMAIL=your_email@gmail.com
SMTP_PASSWORD=your_app_password
NODE_ENV=development
```

Create `client/.env`:

```env
VITE_API_URL=http://localhost:3000/api
```

3. **Start development servers:**

```bash
# Run both frontend and backend concurrently
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:3000

## 🚀 Deployment Guide

### Deploy Backend to Render

1. Visit [https://render.com](https://render.com)
2. Sign up or login with GitHub
3. Click **"New +"** → **"Web Service"**
4. Select your GitHub repository: `Bank-Transaction-System`
5. Configure the service:
   - **Build Command**: `cd backend && npm install`
   - **Start Command**: `cd backend && npm start`
   - **Environment**: Node
6. Add environment variables (same as `backend/.env`)
7. Click **"Create Web Service"** and wait for deployment

### Deploy Frontend to Vercel

1. Visit [https://vercel.com](https://vercel.com)
2. Sign up or login with GitHub
3. Click **"Add New"** → **"Project"**
4. Select your GitHub repository: `Bank-Transaction-System`
5. Configure:
   - **Framework**: Vite
   - **Build Command**: `cd client && npm run build`
   - **Output Directory**: `client/dist`
   - **Install Command**: `cd client && npm install`
6. Add Environment Variables:
   - **Key**: `VITE_API_URL`
   - **Value**: Your Render backend URL (e.g., `https://your-backend-xyz.onrender.com/api`)
7. Click **"Deploy"** and wait for completion

## 📚 API Documentation

### Authentication Endpoints

```
POST /api/auth/register      - Register new user
POST /api/auth/login         - Login user
POST /api/auth/logout        - Logout (blacklist token)
POST /api/auth/refresh       - Refresh access token
```

### Account Endpoints

```
GET /api/accounts            - Get all user accounts
POST /api/accounts           - Create new account
GET /api/accounts/:id        - Get account details
```

### Transaction Endpoints

```
POST /api/transactions/deposit    - Deposit money
POST /api/transactions/withdraw   - Withdraw money
POST /api/transactions/transfer   - Transfer between accounts
GET /api/transactions/history     - Get transaction history
```

## 🔒 Security Features

- JWT-based authentication with access and refresh tokens
- Token blacklist on logout preventing token reuse
- bcryptjs password hashing
- CORS protection
- Input validation and sanitization
- Secure HTTP headers
- MongoDB injection prevention via Mongoose

## 🧪 Testing

```bash
npm run test
```

## 📝 Git Workflow

```bash
# Create a new branch
git checkout -b feature/your-feature-name

# Make your changes and commit
git add .
git commit -m "feat: add your feature description"

# Push to GitHub
git push origin feature/your-feature-name

# Create a Pull Request on GitHub
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

## 👤 Author

**Tarun Singodia**

- Email: tarunmukeshsingodia@gmail.com
- GitHub: [@Tarun218](https://github.com/Tarun218)
- LinkedIn: [Tarun Singodia](https://www.linkedin.com/in/tarun-singodia/)

## 🙏 Acknowledgments

- React and Vite teams for amazing tools
- MongoDB for reliable database
- Render and Vercel for seamless deployment
- Tailwind CSS for utility-first styling
