# Project Documentation Index

Quick reference guide to all documentation files in this project.

## Getting Started

Start here to understand the project structure and get it running locally.

- **[README.md](./README.md)** - Project overview, features, and local setup
- **[SETUP_COMPLETE.md](./SETUP_COMPLETE.md)** - Complete setup status and how to run the project

## Development

Learn about the project architecture and how to work with the codebase.

- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - System architecture and data flow
- **[MONOREPO_SETUP.md](./MONOREPO_SETUP.md)** - Monorepo structure and scripts

## Deployment

Step-by-step guides for deploying the application.

- **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** - Complete deployment guide
  - GitHub push instructions
  - Backend deployment to Render
  - Frontend deployment to Vercel
  - Post-deployment configuration
  - Troubleshooting

## GitHub

Guide for pushing your code to GitHub.

- **[GITHUB_PUSH_GUIDE.md](./GITHUB_PUSH_GUIDE.md)** - Step-by-step GitHub push instructions

## Quick Links

### For Developers

```bash
# Clone and setup
git clone https://github.com/YOUR-USERNAME/Bank-Transaction-System.git
cd Bank-Transaction-System
npm run install-all

# Start development
npm run dev

# Run separately
npm run start-backend    # Terminal 1: Backend on port 3000
npm run start-frontend   # Terminal 2: Frontend on port 5173
```

### For Deployment

1. Push to GitHub: See [GITHUB_PUSH_GUIDE.md](./GITHUB_PUSH_GUIDE.md)
2. Deploy Backend: See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md#backend-deployment-render)
3. Deploy Frontend: See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md#frontend-deployment-vercel)

### Important Environment Variables

**Backend** (`backend/.env`):
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
EMAIL_USER=your_email@gmail.com
CLIENT_ID=google_oauth_client_id
CLIENT_SECRET=google_oauth_client_secret
REFRESH_TOKEN=google_oauth_refresh_token
```

**Frontend** (`client/.env.local`):
```
VITE_API_URL=http://localhost:3000/api
```

## File Structure

```
Bank-Transaction-System/
├── backend/                      # Express.js API server
│   ├── src/
│   │   ├── app.js               # Express app
│   │   ├── config/db.js         # Database config
│   │   ├── controllers/         # Route controllers
│   │   ├── middleware/          # Auth middleware
│   │   ├── models/              # Mongoose models
│   │   ├── routes/              # API routes
│   │   └── services/            # Services (email, etc)
│   ├── server.js                # Entry point
│   ├── package.json
│   ├── .env.example
│   ├── vercel.json              # Vercel config
│   └── render.json              # Render config
│
├── client/                       # React frontend
│   ├── src/
│   │   ├── pages/               # Page components
│   │   ├── components/          # UI components
│   │   ├── services/            # API client
│   │   ├── context/             # Context API
│   │   ├── hooks/               # Custom hooks
│   │   └── styles/              # Tailwind CSS
│   ├── vite.config.js
│   ├── package.json
│   ├── .env.example
│   ├── vercel.json              # Vercel config
│   └── index.html
│
├── package.json                  # Monorepo root
├── .gitignore
├── README.md                     # Project overview
├── ARCHITECTURE.md               # System design
├── MONOREPO_SETUP.md             # Monorepo guide
├── SETUP_COMPLETE.md             # Setup status
├── DEPLOYMENT_GUIDE.md           # Deployment instructions
├── GITHUB_PUSH_GUIDE.md          # GitHub instructions
└── DOCUMENTATION_INDEX.md        # This file
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Accounts
- `POST /api/accounts` - Create account
- `GET /api/accounts` - Get all accounts
- `GET /api/accounts/balance/:accountId` - Get account balance

### Transactions
- `POST /api/transactions` - Create transaction
- `GET /api/transactions/history` - Get transaction history

## Command Reference

### Development

```bash
# Start both backend and frontend
npm run dev

# Start backend only
npm run start-backend

# Start frontend only
npm run start-frontend

# Install all dependencies
npm run install-all
```

### Build & Deployment

```bash
# Build frontend for production
npm run build-frontend

# Backend uses: npm start (in backend directory)
```

## Useful Links

### Services Used
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - Database
- [Render](https://render.com) - Backend hosting
- [Vercel](https://vercel.com) - Frontend hosting
- [Google Cloud Console](https://console.cloud.google.com) - OAuth & email

### Documentation
- [Express.js Docs](https://expressjs.com)
- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [MongoDB Docs](https://docs.mongodb.com)
- [Mongoose Docs](https://mongoosejs.com)

## FAQ

**Q: How do I start development?**
A: Run `npm run dev` from the project root.

**Q: Where do I set environment variables?**
A: Backend: `backend/.env` | Frontend: `client/.env.local`

**Q: How do I deploy the backend?**
A: See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md#backend-deployment-render)

**Q: How do I deploy the frontend?**
A: See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md#frontend-deployment-vercel)

**Q: Can I run frontend and backend on the same machine?**
A: Yes! Run `npm run dev` to start both simultaneously, or use separate terminals.

**Q: What if I need to update the backend URL?**
A: Update `VITE_API_URL` in `client/.env.local` and redeploy on Vercel.

## Support

For issues or questions:

1. Check relevant documentation file
2. Check troubleshooting section in [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md#troubleshooting)
3. Check project [GitHub Issues](https://github.com/YOUR-USERNAME/Bank-Transaction-System/issues)

---

Last Updated: April 2026
Author: Tarun Singodia
