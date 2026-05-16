# 🚀 Deployment Guide - Render Backend + Vercel Frontend

## Deployment Architecture

```
┌─────────────────────────┐
│   Vercel (Frontend)     │
│  React + Vite + SPA     │
└───────────┬─────────────┘
            │ API Calls
            ▼
┌─────────────────────────┐
│  Render (Backend)       │
│  Express.js API         │
│  Node.js Runtime        │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│  MongoDB Atlas          │
│  Database               │
└─────────────────────────┘
```

## Prerequisites

- GitHub repository: [Bank_Transaction_System](https://github.com/Tarun218/Bank-Transaction-System)
- MongoDB Atlas account with connection string
- Render account
- Vercel account

## Step-by-Step Deployment

### Step 1: Deploy Backend on Render

1. **Visit Render**: https://render.com

2. **Sign Up/Login**: Use GitHub for easiest setup

3. **Create New Web Service**:
   - Click **"New"** → **"Web Service"**
   - Connect GitHub repository: `Bank_Transaction_System`
   - Click **"Connect"**

4. **Configure Service**:
   - **Name**: `bank-transaction-backend` (or your preferred name)
   - **Runtime**: `Node`
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: Select **Free** (for free tier)

5. **Add Environment Variables**:
   - Click **"Environment"**
   - Add the following variables:

   | Key | Value |
   |-----|-------|
   | `MONGODB_URI` | Your MongoDB Atlas connection string |
   | `JWT_SECRET` | Generate a secure random string (min 32 chars) |
   | `JWT_EXPIRE` | `7d` |
   | `CLIENT_URL` | Leave blank for now (update after Vercel deployment) |
   | `SMTP_SERVICE` | `gmail` |
   | `SMTP_EMAIL` | Your Gmail address |
   | `SMTP_PASSWORD` | Gmail app-specific password |
   | `NODE_ENV` | `production` |

   **To get Gmail app password**:
   - Go to Google Account Security
   - Enable 2-Step Verification
   - Create an App Password
   - Use that password in `SMTP_PASSWORD`

6. **Deploy**:
   - Click **"Create Web Service"**
   - Wait for build and deployment (5-10 minutes)
   - Once deployed, copy the URL (e.g., `https://bank-transaction-backend.onrender.com`)

---

### Step 2: Deploy Frontend on Vercel

1. **Visit Vercel**: https://vercel.com

2. **Sign Up/Login**: Use GitHub for easiest setup

3. **Import Project**:
   - Click **"Add New"** → **"Project"**
   - Click **"Import Git Repository"**
   - Select: `Bank_Transaction_System`
   - Click **"Import"**

4. **Configure Project**:
   - **Framework Preset**: `Other` or `Vite` if available
   - **Root Directory**: Leave empty
   - **Build Command**: `cd client && npm run build`
   - **Output Directory**: `client/dist`
   - **Install Command**: `npm install && cd client && npm install`

5. **Add Environment Variables**:
   - Click **"Environment Variables"**
   - Add:
     - **Key**: `VITE_API_URL`
     - **Value**: `https://bank-transaction-backend.onrender.com/api`
     - Click **"Add"**

6. **Deploy**:
   - Click **"Deploy"**
   - Wait for build to complete (3-5 minutes)
   - You'll get a URL like: `https://your-project.vercel.app`

---

### Step 3: Update Render Environment Variable

Now that Vercel frontend is deployed:

1. Go back to **Render Dashboard**
2. Select your backend service
3. Go to **"Environment"**
4. Update `CLIENT_URL`:
   - Value: `https://your-project.vercel.app` (your Vercel URL)
5. Click **"Save Changes"**
6. Service will auto-redeploy with updated CORS settings

---

## Verify Deployment

1. **Test Frontend**: 
   - Visit your Vercel URL
   - Should see the login page

2. **Test Backend API**:
   - Visit: `https://bank-transaction-backend.onrender.com/api/`
   - Should return: `"Welcome to the banking API"`

3. **Test Full Flow**:
   - Go to frontend URL
   - Click "Register"
   - Create an account
   - Should receive registration email
   - Login successfully

---

## Automatic Deployments

Both Render and Vercel are connected to your GitHub repository.

**Auto-deploy triggers**:
- Push to `main` branch
- Both services automatically redeploy
- No manual action needed

**To deploy updates**:
```bash
git add .
git commit -m "your message"
git push origin main
```

---

## Troubleshooting

### CORS Error
**Problem**: `CORS error` when frontend tries to call API

**Solution**:
1. Verify `CLIENT_URL` is set correctly in Render
2. Check that it exactly matches your Vercel URL (including https://)
3. Redeploy Render service

### API Not Responding
**Problem**: Cannot connect to backend API

**Solution**:
1. Check Render service logs:
   - Render Dashboard → Your Service → Logs
   - Look for errors
2. Verify MongoDB connection:
   - Test `MONGODB_URI` in MongoDB Atlas
   - Check IP whitelist includes all IPs (0.0.0.0/0)

### Email Not Sending
**Problem**: Registration email not received

**Solution**:
1. Verify SMTP credentials in Render
2. For Gmail: Use app-specific password (not account password)
3. Check Render logs for SMTP errors
4. Enable "Less secure app access" if not using app password

### Build Fails on Vercel
**Problem**: Build command fails

**Solution**:
1. Check Vercel build logs
2. Ensure:
   - Build Command: `cd client && npm run build`
   - Output Directory: `client/dist`
   - Root Directory: empty

---

## Monitoring & Logs

### View Render Logs
1. Render Dashboard → Your Service
2. Click **"Logs"** tab
3. Real-time logs displayed

### View Vercel Logs
1. Vercel Dashboard → Your Project
2. Click **"Deployments"**
3. Select a deployment → **"Runtime Logs"**

---

## Environment Variables Reference

### Backend (.env on Render)
```
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/db
JWT_SECRET=your_super_secret_key_32_chars_min
JWT_EXPIRE=7d
CLIENT_URL=https://your-project.vercel.app
SMTP_SERVICE=gmail
SMTP_EMAIL=your_email@gmail.com
SMTP_PASSWORD=your_app_specific_password
NODE_ENV=production
```

### Frontend (.env on Vercel)
```
VITE_API_URL=https://bank-transaction-backend.onrender.com/api
```

---

## Free Tier Limitations

**Render Free Tier**:
- Service spins down after 15 minutes of inactivity
- First request may take 30 seconds to wake up
- 0.5 GB RAM
- No credit card required

**Vercel Free Tier**:
- Unlimited deployments
- Automatic HTTPS
- Global CDN
- No credit card required

---

## Next Steps

1. Test all functionality
2. Monitor logs for any errors
3. Share your deployed app URL
4. Consider upgrading for production (paid plans for faster/always-on services)

**Your app is now live! 🎉**
