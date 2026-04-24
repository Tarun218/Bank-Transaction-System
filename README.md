# Bank Transaction System

 frontend/bank-system
A full-stack banking transaction system built with React (frontend) and Node.js/Express (backend). Features user authentication, account management, and idempotent fund transfers with a ledger-based architecture.
=======
A backend system designed to simulate real-world banking operations such as user authentication, account management, and secure fund transfers. The project focuses on building a clean, scalable API with practical security and transaction handling concepts.
 main

Live API

frontend/bank-system
- User registration and login with JWT authentication
- Token blacklist support for logout
- Account creation and balance retrieval
- Transaction processing with debit/credit ledger entries
- Idempotency support for transaction requests
- Email notifications for registration and transactions
- Responsive React frontend with Tailwind CSS
- Professional monorepo structure

## Tech Stack

**Frontend:**
- React 18
- Vite
- Tailwind CSS
- Axios
- React Router v6
- Context API for state management

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT authentication
- Nodemailer for email
- bcryptjs for password hashing

## Project Structure

```
Bank_Transaction_System/
├── backend/              # Express.js API server
│   ├── server.js
│   ├── src/
│   ├── package.json
│   ├── .env.example
│   └── vercel.json       # Deployment config
│
├── client/               # React frontend
│   ├── src/
│   ├── package.json
│   ├── vite.config.js
│   └── vercel.json       # Deployment config
│
└── package.json          # Monorepo root
```

## Quick Start
=======
---

About the project

This project demonstrates how a banking backend works internally — from authentication to maintaining transaction consistency. It includes features like idempotent transactions, ledger tracking, and token-based security, which are commonly used in real financial systems.

---
 main

Key features

 frontend/bank-system
- Node.js 18+ installed
- MongoDB Atlas account (free tier available)
- Git installed

### Installation

```bash
# Clone repository
git clone https://github.com/Tarun218/Bank-Transaction-System.git
cd Bank-Transaction-System

# Install all dependencies
npm run install-all
```

### Environment Setup

**Backend Configuration** (`backend/.env`)
```bash
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database
JWT_SECRET=your_jwt_secret_key_here
CLIENT_URL=http://localhost:5173
EMAIL_USER=your_gmail@gmail.com
CLIENT_ID=your_google_oauth_client_id
CLIENT_SECRET=your_google_oauth_client_secret
REFRESH_TOKEN=your_google_oauth_refresh_token
```

**Frontend Configuration** (`client/.env.local`)
```bash
VITE_API_URL=http://localhost:3000/api
```

### Run Development

```bash
# Start both frontend and backend
npm run dev

# Or run separately
npm run start-backend    # Terminal 1
npm run start-frontend   # Terminal 2
```

Frontend runs on `http://localhost:5173`
Backend runs on `http://localhost:3000`
=======
* JWT-based user authentication
* Secure login/logout with token blacklisting
* Account creation and balance tracking
* Fund transfer system with debit/credit ledger entries
* Idempotency support to prevent duplicate transactions
* Email notifications for important actions

---

Tech stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* JSON Web Tokens (JWT)
* Nodemailer

---

How to run locally

1. Clone the repository
   git clone https://github.com/Tarun218/Bank-Transaction-System.git
   cd Bank-Transaction-System

2. Install dependencies
   npm install

3. Create a .env file in the root directory
   (use .env.example as reference)

Required variables

MONGO_URI=
JWT_SECRET=
EMAIL_USER=
CLIENT_ID=
CLIENT_SECRET=
REFRESH_TOKEN=

4. Start the server
   npm run dev

or

npm start

The server will run on
http://localhost:3000

---

Using the deployed API
 main

Base URL
https://bank-transaction-system-7612.onrender.com

Example endpoints

 frontend/bank-system
- `POST /api/auth/register` - Register new user
  - Body: `{ "name": "Your Name", "email": "email@example.com", "password": "password" }`

- `POST /api/auth/login` - Login user
  - Body: `{ "email": "email@example.com", "password": "password" }`

- `POST /api/auth/logout` - Logout user
  - Requires auth token in cookie or `Authorization: Bearer <token>` header
=======
POST /api/auth/register
POST /api/auth/login
POST /api/accounts
POST /api/transactions

Use a tool like Postman to test endpoints. Include the JWT token in the Authorization header after login.

---
 main

How the system works

 frontend/bank-system
- `POST /api/accounts` - Create new account
  - Requires authentication

- `GET /api/accounts` - Fetch all user accounts
  - Requires authentication

- `GET /api/accounts/balance/:accountId` - Get account balance
  - Requires authentication
=======
* A user registers and logs in
* A JWT token is generated for authentication
* The user creates a bank account
* Transactions are processed between accounts
* A ledger records each transaction entry
* Idempotency ensures duplicate requests don’t create multiple transactions

---

Security considerations
 main

* Sensitive data is stored in environment variables
* .env is excluded from version control
* JWT is used for secure authentication
* Token blacklist prevents reuse after logout

 frontend/bank-system
- `POST /api/transactions` - Create transfer between accounts
  - Requires authentication
  - Body: `{ "fromAccount": "id", "toAccount": "id", "amount": 100, "idempotencyKey": "unique-key" }`

- `GET /api/transactions/history` - Get transaction history
  - Requires authentication

## Deployment

### Deploy Backend to Render

1. Push code to GitHub
2. Go to [render.com](https://render.com)
3. Create new Web Service
4. Connect GitHub repository
5. Configure:
   - Build command: `npm install`
   - Start command: `npm start`
   - Root directory: `backend`
6. Add environment variables (see `backend/.env.example`)
7. Deploy

### Deploy Frontend to Vercel

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

## Contributing

1. Create a new branch (`git checkout -b feature/amazing-feature`)
2. Commit changes (`git commit -m 'Add amazing feature'`)
3. Push to branch (`git push origin feature/amazing-feature`)
4. Open Pull Request

## License

ISC

## Author

Tarun Singodia
  - Body: `{ "fromAccount": "<id>", "toAccount": "<id>", "amount": 100, "idempotencyKey": "unique-key" }`
=======
---
 main

Future improvements

* Add automated tests
* Improve error handling and validation
* Add API documentation (Postman/Swagger)
* Build a frontend dashboard for visualization

---

Author

Tarun Singodia
https://github.com/Tarun218
