# 💳 Bank Transaction System

> A secure, full-stack banking application built with modern web technologies. Enables users to manage accounts, perform deposits/withdrawals, and track transaction history with real-time updates.


✨ Key Features

- 🔐 Secure JWT Authentication** - Token-based auth with refresh token support
- 🚪 Token Blacklist** - Enhanced security with logout functionality
- 💰 Account Management** - Create and manage multiple accounts per user
- 💸 Financial Transactions** - Deposit, withdraw, and transfer funds between accounts
- 📝 Ledger System** - Detailed debit/credit transaction logging
- 🔄 Idempotency Support** - Prevents duplicate transactions
- 📧 Email Notifications** - Automated emails for registration and transactions
- 🎨 Responsive UI** - Mobile-friendly interface with Tailwind CSS
- ⚡ Fast Development** - Vite-powered React frontend for instant HMR
- 🏗️ Modular Architecture** - Service layer separation, clean code organization

---

 🛠️ Tech Stack

| Layer | Technology | Version |
| --- | --- | --- |

| **Frontend** | React | 18+ |
| | Vite | 5+ |
| | Tailwind CSS | 3+ |
| | React Router | 6+ |
| | Axios | 1.6+ |

| **Backend** | Node.js | 18+ |
| | Express.js | 5.2+ |
| | MongoDB | 7+ |
| | Mongoose | 9.4+ |

| **Security** | JWT | jsonwebtoken 9.0+ |
| | bcryptjs | 3.0+ |
 
| **Email** | Nodemailer | 8.0+ |

---

 📁 Project Architecture

```
Bank_Transaction_System/
│
├── backend/                          # Express API Server
│   ├── server.js                     # Entry point
│   ├── src/
│   │   ├── app.js                    # Express app config
│   │   ├── config/
│   │   │   └── db.js                 # MongoDB connection
│   │   ├── controllers/
│   │   │   ├── auth.controller.js    # Auth logic
│   │   │   ├── account.controller.js # Account management
│   │   │   └── transaction.controller.js
│   │   ├── middleware/
│   │   │   └── auth.middleware.js    # JWT verification
│   │   ├── models/
│   │   │   ├── user.model.js
│   │   │   ├── account.model.js
│   │   │   ├── transaction.model.js
│   │   │   ├── ledger.model.js
│   │   │   └── blacklist.model.js
│   │   ├── routes/
│   │   │   ├── auth.routes.js
│   │   │   ├── account.routes.js
│   │   │   └── transaction.routes.js
│   │   └── services/
│   │       └── email.service.js      # Email notifications
│   ├── package.json
│   └── .env.example
│
├── client/                           # React Frontend (Vite)
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── components/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── ProtectedRoute.jsx    # Auth guard
│   │   │   ├── Sidebar.jsx
│   │   │   ├── ThemeToggle.jsx
│   │   │   └── Toast.jsx
│   │   ├── pages/
│   │   │   ├── LoginPage.jsx
│   │   │   ├── RegisterPage.jsx
│   │   │   ├── DashboardPage.jsx
│   │   │   ├── DepositPage.jsx
│   │   │   ├── TransferPage.jsx
│   │   │   └── HistoryPage.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx       # Auth state management
│   │   ├── services/
│   │   │   └── api.js                # API client
│   │   ├── hooks/
│   │   │   └── useToast.js
│   │   ├── styles/
│   │   │   └── index.css
│   │   └── utils/
│   │       └── helpers.js
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
└── package.json                      # Monorepo config
```

---

 🚀 Quick Start

# Prerequisites

- **Node.js** 18 or higher
- **npm** 9+ (comes with Node.js)
- **MongoDB** (local or Atlas - free tier available)
- **Git**

# Installation

```bash
# 1. Clone the repository
git clone https://github.com/Tarun218/Bank-Transaction-System.git
cd Bank-Transaction-System

# 2. Install all dependencies
npm run install-all
```

# Environment Configuration

**Backend** (`backend/.env`)

```env
# Server
PORT=3000
NODE_ENV=development

# Database
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/bank_db

# Authentication
JWT_SECRET=your_super_secret_jwt_key_min_32_chars_recommended

# Frontend URL (for CORS)
CLIENT_URL=http://localhost:5173

# Email Service (Gmail with App Password)
EMAIL_USER=your_email@gmail.com
CLIENT_ID=your_google_oauth_client_id
CLIENT_SECRET=your_google_oauth_client_secret
REFRESH_TOKEN=your_google_oauth_refresh_token
```

**Frontend** (`client/.env.local`)

```env
VITE_API_URL=http://localhost:3000/api
```

# Development

```bash
# Start both frontend and backend concurrently
npm run dev

# OR run them in separate terminals:
npm run start-backend    # Terminal 1 - Backend on http://localhost:3000
npm run start-frontend   # Terminal 2 - Frontend on http://localhost:5173
```

---

 📡 API Documentation

# Authentication Routes (`/api/auth`)

| Method | Endpoint | Description | Auth Required |
| --- | --- | --- | --- |
| POST | `/register` | Register new user | ❌ |
| POST | `/login` | Login user | ❌ |
| POST | `/logout` | Logout & blacklist token | ✅ |

**Register Example:**

```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "SecurePass123"
  }'
```

### Account Routes (`/api/accounts`)

| Method | Endpoint | Description | Auth Required |
| --- | --- | --- | --- |
| POST | `/` | Create new account | ✅ |
| GET | `/` | Get all user accounts | ✅ |
| GET | `/balance/:id` | Get account balance | ✅ |

# Transaction Routes (`/api/transactions`)

| Method | Endpoint | Description | Auth Required |
| --- | --- | --- | --- |
| POST | `/deposit` | Deposit funds | ✅ |
| POST | `/withdraw` | Withdraw funds | ✅ |
| POST | `/transfer` | Transfer between accounts | ✅ |
| GET | `/history` | Get transaction history | ✅ |

Deposit Example:
```bash
curl -X POST http://localhost:3000/api/transactions/deposit \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "accountId": "account_id_here",
    "amount": 500,
    "idempotencyKey": "unique-key-12345"
  }'
```

---

 🗄️ Database Schema

### User Model
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  createdAt: Date
}
```

### Account Model

```javascript
{
  userId: ObjectId (ref: User),
  accountNumber: String (unique),
  balance: Number,
  createdAt: Date
}
```

# Transaction Model
```javascript
{
  fromAccountId: ObjectId (ref: Account),
  toAccountId: ObjectId (ref: Account),
  amount: Number,
  type: String (deposit/withdraw/transfer),
  idempotencyKey: String (unique),
  status: String (completed/failed),
  createdAt: Date
}
```

### Ledger Model (Audit Trail)
```javascript
{
  accountId: ObjectId (ref: Account),
  type: String (debit/credit),
  amount: Number,
  transactionId: ObjectId (ref: Transaction),
  createdAt: Date
}
```

---

 🔒 Security Features

- ✅ **Password Hashing** - bcryptjs with salt rounds
- ✅ **JWT Tokens** - Secure token-based authentication
- ✅ **Token Blacklist** - Invalidate tokens on logout
- ✅ **CORS Protection** - Configurable CORS headers
- ✅ **Input Validation** - Server-side request validation
- ✅ **Environment Variables** - Sensitive data protection
- ✅ **Idempotency Keys** - Prevent duplicate transactions
- ✅ **HTTP-Only Cookies** - Secure token storage

---

 🚀 Deployment

# Deploy Backend to Render

1. Push code to GitHub
   ```bash
   git push origin main
   ```

2. Create Web Service on Render
   - Go to [render.com](https://render.com)
   - Click "New +" → "Web Service"
   - Connect your GitHub repository

3. Configure Service
   - Root Directory: `backend`
   - Build Command: `npm install`
   - Start Command: `node server.js`
   - Environment: Node

4. **Add Environment Variables
   - `MONGO_URI` - MongoDB Atlas connection string
   - `JWT_SECRET` - Secret key for tokens
   - `CLIENT_URL` - Your frontend URL
   - `EMAIL_USER`, `CLIENT_ID`, `CLIENT_SECRET`, `REFRESH_TOKEN` - Email config

5. **Deploy** - Render will automatically deploy on push

# Deploy Frontend to Vercel

1. Push code to GitHub

2. Import Project to Vercel
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New" → "Project"
   - Select your GitHub repository

3. Configure Project
   - Framework: Vite
   - Root Directory: `client`
   - Build Command: `npm run build`
   - Output Directory: `dist`

4. Add Environment Variable
   - `VITE_API_URL` - Your Render backend URL
     ```
     https://your-backend-service.onrender.com/api
     ```

5. Deploy - Vercel will automatically deploy

---

## 🧪 Testing the Application

### Local Testing Workflow

1. Register a new account
   - Navigate to `/register`
   - Fill in credentials
   - Receive confirmation email

2. Login
   - Navigate to `/login`
   - Use registered credentials

3. Create an account
   - Go to Dashboard
   - Create a savings/checking account

4. Perform transactions
   - **Deposit:** Add funds to account
   - **Withdraw:** Remove funds from account
   - **Transfer:** Send money between your accounts

5. View history
   - Check transaction history page
   - Verify ledger entries

---

 📋 Environment Variables Reference

# Backend (`.env`)

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | `3000` |
| `MONGO_URI` | MongoDB connection | `mongodb+srv://...` |
| `JWT_SECRET` | Token signing key | `your_secret_key` |
| `CLIENT_URL` | Frontend origin | `http://localhost:5173` |
| `NODE_ENV` | Environment | `development` or `production` |
| `EMAIL_USER` | Gmail address | `your@gmail.com` |
| `CLIENT_ID` | Google OAuth ID | `xxx.apps.googleusercontent.com` |
| `CLIENT_SECRET` | Google OAuth secret | `xxx` |
| `REFRESH_TOKEN` | Google refresh token | `xxx` |

# Frontend (`.env.local`)

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API URL | `http://localhost:3000/api` |

---

 🐛 Troubleshooting

# Common Issues

MongoDB Connection Error
```
Error: connect ECONNREFUSED
```
- Check MongoDB URI is correct
- Ensure MongoDB is running locally OR Atlas cluster is accessible
- Verify IP whitelist on MongoDB Atlas

JWT Token Errors
```
Error: jwt malformed
```
- Clear browser cookies
- Re-login to get a fresh token
- Check `JWT_SECRET` matches between sessions

**CORS Errors**
```
Access to XMLHttpRequest blocked by CORS policy
```
- Verify `CLIENT_URL` env var in backend
- Ensure frontend URL matches CORS whitelist
- Check backend is running on correct port

**Email Sending Fails**
```
Error: Invalid credentials
```
- Use Gmail App Password (not account password)
- Enable 2FA on Gmail account
- Verify Google OAuth credentials are correct

Port Already in Use
```
Error: listen EADDRINUSE: address already in use :::3000
```
- Change `PORT` in `.env`
- OR kill process: `npx kill-port 3000`

---

 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

# Code Style

- Use ESLint for linting: `npm run lint`
- Follow existing code patterns
- Add meaningful commit messages

---

 📈 Future Enhancements

- [ ] 📱 Mobile app (React Native)
- [ ] 🔐 Two-factor authentication
- [ ] 📊 Advanced analytics dashboard
- [ ] 🏦 Multiple bank integration
- [ ] 💳 Payment card support
- [ ] 📲 Push notifications
- [ ] 🌐 Multi-language support
- [ ] 🏷️ Budget tracking
- [ ] 🔄 Recurring transactions
- [ ] 📈 Investment portfolio tracking

---

 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

---

 👨‍💻 Author

Tarun Singodia

- GitHub: [@Tarun218](https://github.com/Tarun218)
- Email: tarunmukeshsingodia@gmail.com

---

 💡 Support

If you found this project helpful, please consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs via Issues
- 💬 Discussing ideas in Discussions
- 🔗 Sharing with others

---

 🙏 Acknowledgments

- React & Vite community for great tools
- MongoDB for flexible database
- Express.js for lightweight framework
- All contributors and users
7. Deploy

# Deploy Frontend to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Import project from GitHub
3. Configure:
   - Root directory: `client`
   - Build command: `npm run build`
   - Output directory: `dist`
4. Add environment variables:
   - `VITE_API_URL=https://your-render-backend-url/api`
5. Deploy

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed step-by-step instructions.

## Documentation

- [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) - Complete deployment instructions
- [MONOREPO_SETUP.md](./MONOREPO_SETUP.md) - Monorepo setup guide
- [ARCHITECTURE.md](./ARCHITECTURE.md) - System architecture
- [SETUP_COMPLETE.md](./SETUP_COMPLETE.md) - Development setup guide

 Contributing

1. Create a new branch (`git checkout -b feature/amazing-feature`)
2. Commit changes (`git commit -m 'Add amazing feature'`)
3. Push to branch (`git push origin feature/amazing-feature`)
4. Open Pull Request

 License

ISC

 Author

Tarun Singodia
  - Body: `{ "fromAccount": "<id>", "toAccount": "<id>", "amount": 100, "idempotencyKey": "unique-key" }`

- `POST /api/transactions/system/initial-funds`
  - Create a system-initiated initial funds transfer
  - Requires `authSystemUserMiddleware`
  - Body: `{ "toAccount": "<id>", "amount": 100, "idempotencyKey": "unique-key" }`

 Notes

- Keep `.env` out of source control and never commit secrets.
- Use the `.env.example` file to document required configuration values.
- The project currently logs email transporter readiness at startup and sends real email notifications when configured.

 Recommended improvements

- Add automated tests for authentication and transaction flows
- Add request validation middleware for cleaner request checks
- Add API documentation or Postman collection
- Add better error handling and transaction rollback logic
