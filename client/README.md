# Bank Transaction System - Frontend

A modern, minimal React frontend for the Bank Transaction System built with Vite, Tailwind CSS, and Context API.

## Features

✨ **Modern UI**
- Minimal, card-based design with soft colors
- Light & Dark mode toggle
- Responsive layout
- Smooth transitions and animations

🔐 **Authentication**
- User registration and login
- Protected routes
- Session persistence
- Token-based auth

💰 **Banking Features**
- Create multiple accounts
- View account balances
- Transfer money between accounts
- Toast notifications

🎨 **Design System**
- Tailwind CSS for styling
- Reusable components (Button, Input, Card, etc.)
- Custom color palette (primary, accent, neutral)
- Soft shadows and rounded corners

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first CSS
- **Axios** - HTTP client
- **React Router** - Routing
- **Context API** - State management

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.jsx
│   ├── Input.jsx
│   ├── Card.jsx
│   ├── Header.jsx
│   ├── Sidebar.jsx
│   ├── ProtectedRoute.jsx
│   └── ...
├── pages/              # Page components
│   ├── LoginPage.jsx
│   ├── RegisterPage.jsx
│   ├── DashboardPage.jsx
│   ├── TransferPage.jsx
│   └── HistoryPage.jsx
├── layouts/            # Layout components
│   └── Layout.jsx
├── context/            # React Context
│   └── AuthContext.jsx
├── services/           # API calls
│   └── api.js
├── hooks/              # Custom hooks
│   └── useToast.js
├── utils/              # Utility functions
│   └── helpers.js
├── styles/             # Global styles
│   └── index.css
├── App.jsx
└── main.jsx
```

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
cd client
npm install
```

### Development

```bash
npm run dev
```

Server will start at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## API Integration

The frontend connects to the backend at `http://localhost:3000/api`

### Endpoints Used

- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- `POST /auth/logout` - User logout
- `POST /accounts` - Create account
- `GET /accounts` - Get user accounts
- `GET /accounts/balance/:id` - Get account balance
- `POST /transactions` - Transfer money

## Features Implemented

### Authentication
- [x] User registration with validation
- [x] User login with session persistence
- [x] Logout with token cleanup
- [x] Protected routes
- [x] Public routes (login/register only)

### Dashboard
- [x] Display all user accounts
- [x] Show account balances
- [x] Create new accounts
- [x] Account status indicators
- [x] Quick action buttons

### Transfer
- [x] Form validation
- [x] Transfer between accounts
- [x] Idempotency keys for safety
- [x] Success/error notifications
- [x] Loading states

### UI/UX
- [x] Light & Dark mode
- [x] Toast notifications
- [x] Form validation with error messages
- [x] Loading states and spinners
- [x] Responsive design
- [x] Accessible components

## Color Palette

### Light Mode
- **Primary** (Brown): #b8785f
- **Accent** (Green): #22c55e
- **Neutral** (Gray): #f5f5f5

### Dark Mode
- **Primary** (Brown): #d4a080
- **Accent** (Green): #4ade80
- **Neutral** (Dark Gray): #1a1a1a

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)

## Future Improvements

- [ ] Transaction history page with filtering
- [ ] Account settings and profile management
- [ ] Money transfer to external accounts
- [ ] Transaction receipt download
- [ ] Mobile app
- [ ] Two-factor authentication
- [ ] Analytics dashboard

## Contributing

This is a demo project. Feel free to fork and extend!

## License

ISC
