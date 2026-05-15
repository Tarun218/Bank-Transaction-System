# 💳 Bank Transaction System

A full-stack banking application with secure JWT authentication, account management, and real-time transaction processing. Built with React, Node.js, Express, and MongoDB.

## 🚀 Live Deployment

- **Frontend**: Deployed on Vercel
- **Backend API**: Firebase Cloud Functions
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

## 🛠️ Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| **Frontend** | React | 18+ |
| | Vite | 5+ |
| | Tailwind CSS | 3+ |
| | React Router | 6+ |
| | Axios | 1.6+ |
| **Backend** | Node.js | 18+ |
| | Express.js | 5.2+ |
| | Firebase Functions | 5.0+ |
| | MongoDB | 7+ |
| | Mongoose | 9.4+ |
| **Security** | JWT (jsonwebtoken) | 9.0+ |
| | bcryptjs | 3.0+ |
| **Email** | Nodemailer | 8.0+ |

## 📁 Project Structure

```
Bank_Transaction_System/
├── backend/                    # Node.js + Express API
│   ├── functions/             # Firebase Cloud Functions
│   ├── src/
│   │   ├── controllers/       # Route controllers
│   │   ├── models/            # MongoDB schemas
│   │   ├── routes/            # API routes
│   │   ├── services/          # Business logic
│   │   ├── middleware/        # Auth & error handling
│   │   └── config/            # Database config
│   └── package.json
│
├── client/                    # React + Vite frontend
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   ├── pages/            # Page components
│   │   ├── context/          # React Context (Auth)
│   │   ├── services/         # API service layer
│   │   └── styles/           # Global CSS
│   └── package.json
│
├── firebase.json             # Firebase configuration
├── vercel.json              # Vercel frontend config
└── package.json             # Root scripts
```

## 🔧 Installation & Setup

### Prerequisites

- Node.js 18+
- npm or yarn
- MongoDB Atlas account (free tier available)
- Firebase project account
- Vercel account (for frontend deployment)

### Local Development

1. **Clone and install dependencies:**

```bash
git clone https://github.com/yourusername/Bank_Transaction_System.git
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
```

Create `client/.env`:

```env
VITE_API_URL=http://localhost:3000/api
```

3. **Start development servers:**

```bash
# Terminal 1 - Backend (Express on port 3000)
npm run start-backend

# Terminal 2 - Frontend (React on port 5173)
npm run start-frontend

# Or run both concurrently:
npm run dev
```

## 🚀 Deployment

### Deploy Frontend to Vercel

1. **Install Vercel CLI:**

```bash
npm install -g vercel
```

2. **Build and deploy:**

```bash
cd client
npm run build
vercel deploy --prod
```

Or connect your GitHub repository to Vercel for automatic deployments on push.

### Deploy Backend to Firebase

1. **Install Firebase CLI:**

```bash
npm install -g firebase-tools
```

2. **Login and initialize Firebase:**

```bash
firebase login
firebase init
```

3. **Deploy Cloud Functions and hosting:**

```bash
firebase deploy
```

This will deploy:
- Backend API as Cloud Functions (Node.js 18)
- Frontend static hosting with rewrites to Cloud Functions

## 📡 API Documentation

### Authentication Endpoints

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout (blacklist token)
- `POST /api/auth/refresh` - Refresh access token

### Account Endpoints (Protected)

- `GET /api/accounts` - Get all user accounts
- `POST /api/accounts` - Create new account
- `GET /api/accounts/:id` - Get account details

### Transaction Endpoints (Protected)

- `GET /api/transactions` - Get transaction history
- `POST /api/transactions/deposit` - Deposit funds
- `POST /api/transactions/withdraw` - Withdraw funds
- `POST /api/transactions/transfer` - Transfer between accounts

## 🔐 Security Features

- JWT token-based authentication
- Bcrypt password hashing
- Token blacklist for logout
- CORS protection
- Input validation and sanitization
- Secure HTTP-only cookies
- MongoDB injection prevention
- Idempotency keys for transactions

## 📝 Environment Variables

### Backend (.env)

```
MONGODB_URI         # MongoDB connection string
JWT_SECRET         # Secret key for JWT signing
JWT_EXPIRE         # Token expiration time (e.g., 7d)
CLIENT_URL         # Frontend URL for CORS
SMTP_SERVICE       # Email service provider
SMTP_EMAIL         # Email account for notifications
SMTP_PASSWORD      # Email app password
```

### Frontend (.env)

```
VITE_API_URL       # Backend API URL
```

## 🐛 Troubleshooting

### CORS errors

- Ensure `CLIENT_URL` in backend .env matches your frontend domain
- Check CORS configuration in `backend/src/app.js`

### MongoDB connection errors

- Verify connection string in `MONGODB_URI`
- Check MongoDB Atlas IP whitelist
- Ensure database user credentials are correct

### Firebase deployment issues

- Ensure `.firebaserc` has correct project ID
- Verify Firebase CLI is installed and authenticated
- Check Node.js version compatibility (18+)

### Email notifications not working

- Verify SMTP credentials in `.env`
- For Gmail, use an app password (not regular password)
- Enable "Less secure app access" if using regular Gmail password

## 📄 License

ISC License

## 👨‍💻 Author

**Tarun Singodia** - Full-stack developer

---

**Note:** This project is designed for educational and demonstration purposes. For production use, implement additional security measures and compliance requirements.
