# Bank Transaction System

A backend ledger system built with Node.js, Express, and MongoDB for handling user authentication, account management, and idempotent fund transfers.

## Features

- User registration and login with JWT authentication
- Token blacklist support for logout
- Account creation and balance retrieval
- Transaction processing with debit/credit ledger entries
- Idempotency support for transaction requests
- Email notifications for registration and transactions

## Tech stack

- Node.js
- Express
- MongoDB with Mongoose
- JWT authentication
- Nodemailer for email
- dotenv for configuration

## Getting started

### Prerequisites

- Node.js 18+ installed
- MongoDB Atlas or local MongoDB instance
- Gmail account configured for email notifications

### Clone the repository

```bash
git clone https://github.com/Tarun218/Bank-Transaction-System.git
cd Bank-Transaction-System
```

### Install dependencies

```bash
npm install
```

### Environment variables

Create a `.env` file in the project root. Use `.env.example` as a reference.

Required variables:

```dotenv
MONGO_URI=
JWT_SECRET=
EMAIL_USER=
CLIENT_ID=
CLIENT_SECRET=
REFRESH_TOKEN=
```

### Run the app

```bash
npm run dev
```

or

```bash
npm start
```

The API will run on `http://localhost:3000` by default.

## API Endpoints

### Authentication

- `POST /api/auth/register`
  - Body: `{ "name": "Your Name", "email": "email@example.com", "password": "password" }`

- `POST /api/auth/login`
  - Body: `{ "email": "email@example.com", "password": "password" }`

- `POST /api/auth/logout`
  - Requires auth token in cookie or `Authorization: Bearer <token>` header

### Accounts

- `POST /api/accounts`
  - Create a new account for the authenticated user

- `GET /api/accounts`
  - Fetch all accounts for the authenticated user

- `GET /api/accounts/balance/:accountId`
  - Get balance for a specific account

### Transactions

- `POST /api/transactions`
  - Create a transfer from one account to another
  - Body: `{ "fromAccount": "<id>", "toAccount": "<id>", "amount": 100, "idempotencyKey": "unique-key" }`

- `POST /api/transactions/system/initial-funds`
  - Create a system-initiated initial funds transfer
  - Requires `authSystemUserMiddleware`
  - Body: `{ "toAccount": "<id>", "amount": 100, "idempotencyKey": "unique-key" }`

## Notes

- Keep `.env` out of source control and never commit secrets.
- Use the `.env.example` file to document required configuration values.
- The project currently logs email transporter readiness at startup and sends real email notifications when configured.

## Recommended improvements

- Add automated tests for authentication and transaction flows
- Add request validation middleware for cleaner request checks
- Add API documentation or Postman collection
- Add better error handling and transaction rollback logic
