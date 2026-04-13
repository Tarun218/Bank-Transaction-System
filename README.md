# Bank Transaction System

A backend system designed to simulate real-world banking operations such as user authentication, account management, and secure fund transfers. The project focuses on building a clean, scalable API with practical security and transaction handling concepts.

Live API
https://bank-transaction-system-7612.onrender.com

---

About the project

This project demonstrates how a banking backend works internally — from authentication to maintaining transaction consistency. It includes features like idempotent transactions, ledger tracking, and token-based security, which are commonly used in real financial systems.

---

Key features

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

Base URL
https://bank-transaction-system-7612.onrender.com

Example endpoints

POST /api/auth/register
POST /api/auth/login
POST /api/accounts
POST /api/transactions

Use a tool like Postman to test endpoints. Include the JWT token in the Authorization header after login.

---

How the system works

* A user registers and logs in
* A JWT token is generated for authentication
* The user creates a bank account
* Transactions are processed between accounts
* A ledger records each transaction entry
* Idempotency ensures duplicate requests don’t create multiple transactions

---

Security considerations

* Sensitive data is stored in environment variables
* .env is excluded from version control
* JWT is used for secure authentication
* Token blacklist prevents reuse after logout

---

Future improvements

* Add automated tests
* Improve error handling and validation
* Add API documentation (Postman/Swagger)
* Build a frontend dashboard for visualization

---

Author

Tarun Singodia
https://github.com/Tarun218
