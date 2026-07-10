<div align="center">

# 💳 Bank Transaction System

### A Full-Stack MERN Banking Application for Secure Digital Transactions

Secure • JWT Authentication • Account Management • Transaction Processing • Responsive

<br>

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Nodemailer](https://img.shields.io/badge/Nodemailer-0A66C2?style=for-the-badge)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=black)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

<br><br>

<a href="https://bank-transaction-system-client-tarun218s-projects.vercel.app/login">
<img src="https://img.shields.io/badge/🚀_Live_Demo-Visit_Website-blue?style=for-the-badge">
</a>

<a href="https://bank-transaction-system-1-nfdf.onrender.com">
<img src="https://img.shields.io/badge/⚙️_Backend_API-Render-success?style=for-the-badge">
</a>

<a href="https://github.com/Tarun218/Bank-Transaction-System">
<img src="https://img.shields.io/badge/📂_Source_Code-GitHub-black?style=for-the-badge&logo=github">
</a>

</div>

---

# 📖 About The Project

**Bank Transaction System** is a full-stack banking application developed using the **MERN Stack** that enables users to securely manage multiple bank accounts and perform financial transactions through a modern web interface.

The application implements secure authentication using **JWT**, encrypted password storage with **bcrypt**, detailed transaction logging, account management, fund transfers, and email notifications. The project follows a modular architecture with a clean separation between frontend and backend services and demonstrates real-world backend concepts such as authentication, authorization, RESTful API development, middleware, service layers, and secure transaction processing.

---

# 🌐 Live Deployment

### 🖥 Frontend

https://bank-transaction-system-client-tarun218s-projects.vercel.app/login

### ⚙ Backend API

https://bank-transaction-system-1-nfdf.onrender.com

### 📂 GitHub Repository

https://github.com/Tarun218/Bank-Transaction-System

---

# 🎥 Video Demonstration
<div align="center">
https://drive.google.com/file/d/1VR5XZT5mpTLzDMJNVP3B8lvk7hONib-c/view
</div>

---


## 📸 Application Screenshots

### Login Page
Login with your credentials to access the banking system.
<img width="1900" height="911" alt="Screenshot 2026-06-11 144910" src="https://github.com/user-attachments/assets/8cda4d82-b297-46f2-adcc-bb4d2c63ae65" />


### Dashboard
View all your accounts with current balances and account details. Manage multiple accounts in one place.
<img width="1912" height="912" alt="Screenshot 2026-06-11 145002" src="https://github.com/user-attachments/assets/d684d7d7-37d3-4a82-a1c2-4a1460927360" />


### Transfer Money
Securely transfer funds between your accounts or to other users' accounts.
<img width="1902" height="912" alt="Screenshot 2026-06-11 145031" src="https://github.com/user-attachments/assets/e8d7eb3a-24bf-4d88-bc51-a66691d5f97e" />


### Transaction History
Complete transaction ledger showing all your debit and credit transactions with detailed information.
<img width="1907" height="905" alt="Screenshot 2026-06-11 145020" src="https://github.com/user-attachments/assets/230d240f-0a1e-4c39-9487-77d62d2d875e" />

# ✨ Features

## 🔐 Authentication

- JWT Authentication
- Access & Refresh Tokens
- Secure Password Hashing using bcrypt
- Token Blacklisting on Logout
- Protected Routes
- User Registration & Login

---

## 💳 Account Management

- Create Multiple Bank Accounts
- View Account Details
- Account Balance Tracking
- Manage Personal Accounts

---

## 💸 Transaction Management

- Deposit Money
- Withdraw Money
- Transfer Funds Between Accounts
- Complete Transaction History
- Debit/Credit Ledger
- Idempotent Transaction Processing

---

## 📧 Notifications

- Email Notifications on Registration
- Transaction Confirmation Emails

---

## 🔒 Security

- JWT Authentication
- Refresh Token Support
- Token Blacklisting
- Password Hashing using bcrypt
- Secure Environment Variables
- CORS Protection
- Input Validation
- MongoDB Injection Protection

---

## 🎨 User Experience

- Responsive UI
- Dark Mode Support
- Mobile Friendly
- Fast Navigation using React Router
- Modern Dashboard

---

## ⚡ Backend

- RESTful APIs
- Modular Service Architecture
- Express Middleware
- MongoDB Relationships
- Clean Controller-Service Structure

---
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

---

# 👨‍💻 Developer

## **Tarun Singodia**

**B.Tech Computer Science Engineering (2026 Graduate)**

📧 Email

tarunmukeshsingodia@gmail.com

💼 LinkedIn

https://www.linkedin.com/in/tarun-singodia/

💻 GitHub

https://github.com/Tarun218

---

<div align="center">

### ⭐ If you found this project helpful, consider giving it a Star on GitHub!

**Happy Coding! 🚀**

</div>

## 🙏 Acknowledgments

- React and Vite teams for amazing tools
- MongoDB for reliable database
- Render and Vercel for seamless deployment
- Tailwind CSS for utility-first styling
