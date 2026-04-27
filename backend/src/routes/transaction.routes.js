const {Router} = require('express');
const authMiddleware = require("../middleware/auth.middleware")
const transactionController = require("../controllers/transaction.controller")

const transactionRoutes=Router();

// Public routes
transactionRoutes.post("/", authMiddleware.authMiddleware, transactionController.createTransaction)
transactionRoutes.get("/history", authMiddleware.authMiddleware, transactionController.getHistory)

// Restricted routes (internal only - Postman with x-internal-call header)
const internalOnly = (req, res, next) => {
  if (!req.headers['x-internal-call']) {
    return res.status(403).json({
      message: "Forbidden: This endpoint requires x-internal-call header"
    })
  }
  next()
}

transactionRoutes.post("/deposit", internalOnly, transactionController.depositFunds)
transactionRoutes.post("/system/initial-funds", authMiddleware.authSystemUserMiddleware, transactionController.createInitialFundsTransaction)

module.exports = transactionRoutes;
