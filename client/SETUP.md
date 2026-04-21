# Bank Transaction System - Complete Frontend

A modern, production-ready React frontend for banking transactions with Vite, Tailwind CSS, and responsive design.

## ✨ What's Included

### 🎨 UI Components
- **Button** - Multiple variants (primary, secondary, success, danger, ghost)
- **Input** - Form inputs with validation and error states
- **Card** - Reusable card containers with soft shadows
- **Toast** - Toast notifications (success, error, info, warning)
- **ThemeToggle** - Light/Dark mode switcher
- **Header** - Navigation header with user info
- **Sidebar** - Navigation sidebar with menu items

### 📄 Pages
- **LoginPage** - User login with validation
- **RegisterPage** - User registration
- **DashboardPage** - Account overview, balances, create accounts
- **TransferPage** - Money transfer between accounts
- **HistoryPage** - Transaction history (ready for backend integration)

### 🔐 Features
- Protected routes (auto-redirect unauthenticated users)
- Public routes (auto-redirect authenticated users)
- Session persistence (localStorage)
- Form validation with error messages
- Loading states and spinners
- Error handling with toast notifications
- Idempotent transactions (prevents duplicates)

### 🎯 Architecture
- **React Context API** - Global auth state
- **Axios** - HTTP client with interceptors
- **React Router v6** - Client-side routing
- **Tailwind CSS** - Utility-first styling
- **Custom Hooks** - useToast, useAuth, etc.
- **Modular Components** - Reusable, composable UI

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd client
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Server runs at: http://localhost:5173

### 3. Build for Production
```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
client/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Card.jsx
│   │   ├── Toast.jsx
│   │   ├── ThemeToggle.jsx
│   │   ├── Header.jsx
│   │   ├── Sidebar.jsx
│   │   ├── ProtectedRoute.jsx
│   │   └── PublicRoute.jsx
│   ├── pages/               # Page components
│   │   ├── LoginPage.jsx
│   │   ├── RegisterPage.jsx
│   │   ├── DashboardPage.jsx
│   │   ├── TransferPage.jsx
│   │   └── HistoryPage.jsx
│   ├── layouts/             # Layout wrappers
│   │   └── Layout.jsx
│   ├── context/             # React Context
│   │   └── AuthContext.jsx
│   ├── services/            # API calls
│   │   └── api.js
│   ├── hooks/               # Custom hooks
│   │   └── useToast.js
│   ├── utils/               # Utility functions
│   │   └── helpers.js
│   ├── styles/              # Global styles
│   │   └── index.css
│   ├── App.jsx              # Main app component
│   └── main.jsx             # Entry point
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS config
├── postcss.config.js        # PostCSS config
├── .eslintrc.js             # ESLint config
├── package.json
└── README.md
```

## 🔌 Backend Integration

The frontend connects to:
- **Backend URL**: `http://localhost:3000/api`
- **Authentication**: Cookie-based (withCredentials: true)
- **Token**: Stored in cookies + localStorage

### API Endpoints Used

**Authentication**
```
POST /auth/register     → { email, password, name }
POST /auth/login        → { email, password }
POST /auth/logout       → {}
```

**Accounts**
```
POST /accounts          → {}
GET /accounts           → {}
GET /accounts/balance/:id → {}
```

**Transactions**
```
POST /transactions      → { fromAccount, toAccount, amount, idempotencyKey }
POST /transactions/system/initial-funds → { toAccount, amount, idempotencyKey }
```

## 🎨 Customization

### Change Primary Color
Edit `client/tailwind.config.js`:
```js
colors: {
  primary: {
    600: '#your-color',
    // ... other shades
  }
}
```

### Add New Page
1. Create `src/pages/NewPage.jsx`
2. Add route in `App.jsx`
3. Add navigation in `Sidebar.jsx`

### Add New Component
1. Create `src/components/NewComponent.jsx`
2. Export as default
3. Import where needed

## 🧪 Testing

Currently no test suite included. Add with:
```bash
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom
```

## 📦 Dependencies

- react@18.2.0
- react-dom@18.2.0
- react-router-dom@6.20.0
- axios@1.6.0
- tailwindcss@3.3.0

## 🔒 Security Features

- ✅ Protected routes (unauthorized access prevention)
- ✅ Token validation on requests
- ✅ Automatic logout on token expiry (401)
- ✅ Session persistence with validation
- ✅ Form validation before submission
- ✅ Idempotent transactions (prevent duplicates)

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Docker
Create `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

### Build and Serve
```bash
npm run build
npm run preview
```

## 🐛 Troubleshooting

**CORS errors?**
- Ensure backend is running on http://localhost:3000
- Check backend CORS config includes your frontend URL

**Login not working?**
- Check browser console for errors (F12)
- Verify backend is connected and responding
- Check localStorage for token

**Styles not loading?**
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server
- Check Tailwind CSS config

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [React Router](https://reactrouter.com)
- [Axios](https://axios-http.com)

## 🎓 Learning Points

This project demonstrates:
- ✅ React best practices
- ✅ Component composition
- ✅ State management with Context API
- ✅ Form handling and validation
- ✅ API integration with Axios
- ✅ Routing with React Router
- ✅ Tailwind CSS for styling
- ✅ Dark mode implementation
- ✅ Error handling
- ✅ UX best practices

## 📝 License

ISC - Feel free to use and modify!

---

**Built with ❤️ for the Bank Transaction System**

For backend documentation, see: [../README.md](../README.md)
