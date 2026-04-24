# Bank Transaction System - Monorepo Setup

## Project Structure

```
Bank_Transaction_System/
├── backend/                 # Node.js Express backend server
│   ├── server.js           # Entry point
│   ├── src/
│   │   ├── app.js         # Express app setup
│   │   ├── config/
│   │   │   └── db.js      # MongoDB connection
│   │   ├── controllers/   # Business logic
│   │   ├── middleware/    # Auth & custom middleware
│   │   ├── models/        # Mongoose schemas
│   │   ├── routes/        # API routes
│   │   └── services/      # External services (Email, etc)
│   ├── package.json
│   ├── .env               # Backend environment variables
│   └── .env.example
│
├── client/                 # React Vite frontend
│   ├── src/
│   │   ├── pages/        # Page components
│   │   ├── components/   # Reusable components
│   │   ├── services/     # API client
│   │   └── context/      # Context API
│   ├── package.json
│   ├── vite.config.js
│   ├── .env.example      # Frontend environment variables
│   └── index.html
│
├── package.json           # Root monorepo config
├── README.md
└── .gitignore
```

## Installation & Setup

### 1. Install All Dependencies

```bash
# Install all packages for root, backend, and client
npm run install-all

# Or manually:
npm install                    # Root monorepo deps
cd backend && npm install     # Backend dependencies
cd ../client && npm install   # Frontend dependencies
```

### 2. Environment Setup

#### Backend Environment Variables

Create/update `backend/.env`:

```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database
JWT_SECRET=your_jwt_secret_key
CLIENT_URL=http://localhost:5173
EMAIL_USER=your_email@gmail.com
CLIENT_ID=your_google_oauth_client_id
CLIENT_SECRET=your_google_oauth_client_secret
REFRESH_TOKEN=your_google_oauth_refresh_token
```

#### Frontend Environment Variables

Create `client/.env.local`:

```
VITE_API_URL=http://localhost:3000/api
```

### 3. Running the Project

#### Development Mode (Both Frontend & Backend)

```bash
# Run from root directory - starts both simultaneously
npm run dev

# Or run separately:
npm run start-backend    # Terminal 1 - Backend on port 3000
npm run start-frontend   # Terminal 2 - Frontend on port 5173
```

#### Build for Production

```bash
npm run build-frontend   # Builds React app to client/dist
```

## API Architecture

```
Frontend (React - port 5173)
    ↓
Vite Dev Server (localhost:5173)
    ↓
API Proxy (/api → localhost:3000)
    ↓
Backend Express Server (port 3000)
    ↓
MongoDB Atlas (Cloud Database)
```

## Key Features

- ✅ JWT-based authentication with token blacklist
- ✅ MongoDB with Mongoose
- ✅ Account management
- ✅ Idempotent transactions
- ✅ Email notifications (Nodemailer)
- ✅ CORS enabled for frontend
- ✅ Request/Response interceptors in frontend

## Available Scripts

### Root Level

- `npm run install-all` - Install all dependencies
- `npm run dev` - Start backend + frontend concurrently
- `npm run start-backend` - Start only backend
- `npm run start-frontend` - Start only frontend
- `npm run build-frontend` - Build frontend for production

### Backend

- `npm run dev` - Start with nodemon (auto-reload)
- `npm start` - Start production server

### Frontend

- `npm run dev` - Start dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment

### Backend Deployment (Render.com)

1. Deploy `backend/` to Render
2. Set environment variables on Render dashboard
3. Set `CLIENT_URL` to your frontend domain

### Frontend Deployment (Netlify)

1. Connect GitHub repo to Netlify
2. Set base directory: `client`
3. Build command: `npm run build`
4. Publish directory: `client/dist`
5. Set `VITE_API_URL` to your backend URL

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Backend won't start | Check MongoDB URI in `backend/.env` |
| API calls failing | Ensure `VITE_API_URL` in frontend is correct |
| CORS errors | Verify `CLIENT_URL` is set in backend `.env` |
| Port already in use | Change port in backend/src/app.js or kill existing process |

## Team

- **Author**: Tarun Singodia
- **License**: ISC
