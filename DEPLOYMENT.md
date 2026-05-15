# 🚀 Deployment Guide - Bank Transaction System

## Quick Deployment Steps

### Prerequisites
- Firebase CLI: `npm install -g firebase-tools`
- Vercel CLI: `npm install -g vercel`
- MongoDB Atlas account with connection string
- GitHub repository

### Step 1: Setup Environment Variables

**For Firebase Backend:**
```bash
cd backend
# Create .env file with:
MONGODB_URI=your_mongodb_atlas_url
JWT_SECRET=your_secret_key_min_32_chars
CLIENT_URL=your_vercel_frontend_url
SMTP_SERVICE=gmail
SMTP_EMAIL=your_email@gmail.com
SMTP_PASSWORD=your_app_password
```

**For Vercel Frontend:**
```bash
cd client
# Create .env.production file with:
VITE_API_URL=https://your-firebase-project.firebaseapp.com/api
```

### Step 2: Deploy Backend to Firebase

```bash
# Login to Firebase
firebase login

# Initialize Firebase (if not done)
firebase init

# Deploy Cloud Functions and hosting
firebase deploy
```

**Firebase will automatically:**
- Deploy backend as Cloud Functions on Node.js 18
- Set up hosting rewrites to route `/api/*` to Cloud Functions
- Deploy frontend static files

### Step 3: Deploy Frontend to Vercel

```bash
# Login to Vercel
vercel login

# Navigate to client directory
cd client

# Deploy to production
vercel deploy --prod
```

**Or connect GitHub for automatic deployments:**
1. Push to GitHub
2. Go to vercel.com and import the repository
3. Vercel auto-deploys on every push

### Step 4: Verify Deployment

1. **Frontend**: Visit `https://your-project.vercel.app`
2. **Backend API**: Test `https://your-firebase-project.firebaseapp.com/api/`
3. **Authentication**: Login/Register to verify end-to-end flow

### Troubleshooting

| Issue | Solution |
|-------|----------|
| CORS errors | Update `CLIENT_URL` in backend .env to match Vercel URL |
| API not responding | Check Firebase Cloud Functions logs: `firebase functions:log` |
| Database connection fails | Verify MongoDB Atlas connection string and IP whitelist |
| Email not sending | Check SMTP credentials and use Gmail app password |
| Build fails on Vercel | Ensure Node.js 18+ selected in Vercel project settings |

### Monitoring & Logs

**Firebase Backend:**
```bash
firebase functions:log
```

**Vercel Frontend:**
- View logs at: `https://vercel.com/dashboard`
- Or: `vercel logs`

### Update After Deployment

1. Make code changes locally
2. Push to GitHub: `git push origin main`
3. Backend automatically updates: `firebase deploy`
4. Frontend automatically updates via Vercel webhook

---

**Note:** Keep sensitive environment variables secure and never commit `.env` files to git.
