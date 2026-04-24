# Quick Start Guide

Get your Bank Transaction System up and running in 5 minutes!

## 1. Clone & Setup (2 minutes)

```bash
git clone https://github.com/YOUR-USERNAME/Bank-Transaction-System.git
cd Bank-Transaction-System
npm run install-all
```

## 2. Configure Environment (2 minutes)

**Backend** (`backend/.env`):

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
JWT_SECRET=your_secret_key_here
CLIENT_URL=http://localhost:5173
EMAIL_USER=your_email@gmail.com
CLIENT_ID=your_google_client_id
CLIENT_SECRET=your_google_client_secret
REFRESH_TOKEN=your_google_refresh_token
```

**Frontend** (`client/.env.local` - optional):

```env
VITE_API_URL=http://localhost:3000/api
```

## 3. Start Development (1 minute)

```bash
npm run dev
```

Open your browser:
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:3000`

## Next Steps

### Ready to Push to GitHub?

```bash
git add .
git commit -m "Initial commit: Full-stack banking system"
git push origin main
```

See [GITHUB_PUSH_GUIDE.md](./GITHUB_PUSH_GUIDE.md) for detailed instructions.

### Ready to Deploy?

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md):

1. **Backend to Render** - 10 minutes
2. **Frontend to Vercel** - 5 minutes

## Common Commands

```bash
# Development
npm run dev                  # Start both services
npm run start-backend        # Backend only
npm run start-frontend       # Frontend only

# Building
npm run build-frontend       # Build for production

# Git
git add .
git commit -m "Your message"
git push origin main
```

## Troubleshooting

**Backend won't start?**
- Check MongoDB URI in `backend/.env`
- Ensure MongoDB cluster is active

**Frontend can't connect to API?**
- Verify backend is running on port 3000
- Check `VITE_API_URL` environment variable

**Port already in use?**
- Backend: Change port in `backend/src/app.js`
- Frontend: Change port in `client/vite.config.js`

## Documentation

- [Full README](./README.md) - Detailed project info
- [Deployment Guide](./DEPLOYMENT_GUIDE.md) - Deploy to Render & Vercel
- [Architecture](./ARCHITECTURE.md) - System design
- [Documentation Index](./DOCUMENTATION_INDEX.md) - All docs

## Key Features ✨

- ✅ User registration & login
- ✅ Account management
- ✅ Idempotent transactions
- ✅ Email notifications
- ✅ JWT authentication
- ✅ Responsive UI
- ✅ Professional architecture

## What's Included

- React frontend with Tailwind CSS
- Node.js/Express backend
- MongoDB database integration
- JWT authentication
- Email service
- Monorepo setup
- Deployment configs for Render & Vercel

## Environment Setup Tips

### MongoDB Atlas

1. Create free account at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create cluster
3. Get connection string
4. Add to `MONGO_URI` in `backend/.env`

### Google OAuth (for email)

1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Create project
3. Enable Gmail API
4. Create OAuth credentials
5. Add credentials to `backend/.env`

## Need Help?

1. Check [DOCUMENTATION_INDEX.md](./DOCUMENTATION_INDEX.md)
2. Review [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md#troubleshooting)
3. Check GitHub Issues
4. Review error messages in console

---

**Ready to go!** 🚀

Start with: `npm run dev`
