const transactionModel = require("../models/transaction.model")
const ledgerModel = require("../models/ledger.model")
const emailService = require("../services/email.service")
const accountModel = require("../models/account.model")
const mongoose = require("mongoose")
async function createTransaction(req, res) {

    /**
     * 1. Validate request
     */
    const { fromAccount, toAccount, amount, idempotencyKey } = req.body
    if (!fromAccount || !toAccount || !amount || !idempotencyKey) {
        return res.status(400).json({
            message: "fromAccount, toAccount, amount and idempotency are required"
        })
    }

    // Verify accounts exist
    const fromUserAccount = await accountModel.findOne({
        _id: fromAccount
    })
    const toUserAccount = await accountModel.findOne({
        _id: toAccount
    })
    
    if (!fromUserAccount || !toUserAccount) {
        return res.status(400).json({
            message: "Invalid fromAccount or toAccount"
        })
    }

    /**
     * 2. SECURITY CHECK: Verify sender owns the fromAccount
     */
    if (fromUserAccount.user.toString() !== req.user._id.toString()) {
        return res.status(403).json({
            message: "You do not own the source account"
        })
    }

    /**
     * 3. Validate idempotency key
     */
    const isTransactionAlreadyExists = await transactionModel.findOne({
        idempotencyKey: idempotencyKey
    })
    if (isTransactionAlreadyExists) {
        if (isTransactionAlreadyExists.status === "COMPLETED") {
            return res.status(200).json({
                message: "Transaction already processed",
                transaction: isTransactionAlreadyExists
            })
        }
        if (isTransactionAlreadyExists.status === "PENDING") {
            return res.status(200).json({
                message: "Transaction is still processing"
            })
        }
        if (isTransactionAlreadyExists.status === "FAILED") {
            return res.status(500).json({
                message: "Transaction processing failed"
            })
        }
        if (isTransactionAlreadyExists.status === "REVERSED") {
            return res.status(500).json({
                message: "Transaction reversed, try again later"
            })
        }
    }

    /**
     * 4. Check account status
     */
    if (fromUserAccount.status !== "ACTIVE" || toUserAccount.status !== "ACTIVE") {
        return res.status(400).json({
            message: "Both fromAccount and toAccount must be ACTIVE to process the transaction"
        })
    }

    /**
     * 5. Validate amount
     */
    if (amount <= 0) {
        return res.status(400).json({
            message: "Amount must be greater than 0"
        })
    }

    /**
     * 6. Derive sender's balance from ledger
     */
    const balance = await fromUserAccount.getBalance()
    if (balance < amount) {
        return res.status(400).json({
            message: `Insufficient balance. Current balance is ${balance}. Requested amount is ${amount}`
        })
    }

    let transaction;
    try {
        /**
         * 7. Create transaction(pending)
         * 8. Create DEBIT ledger entry
         * 9. Create CREDIT ledger entry
         * 10. Mark transaction COMPLETED
         * 11. Commit MongoDB session
         */
        const session = await mongoose.startSession()
        session.startTransaction()

        transaction = (await transactionModel.create([{
            fromAccount,
            toAccount,
            amount,
            idempotencyKey,
            status: "PENDING"
        }], { session }))[0]

        // Debit from sender
        await ledgerModel.create([{
            account: fromAccount,
            amount: amount,
            transaction: transaction._id,
            type: "DEBIT"
        }], { session })

        // Credit to receiver
        await ledgerModel.create([{
            account: toAccount,
            amount: amount,
            transaction: transaction._id,
            type: "CREDIT"
        }], { session })

        // Mark transaction as completed
        await transactionModel.findOneAndUpdate(
            { _id: transaction._id },
            { status: "COMPLETED" },
            { session }
        )

        await session.commitTransaction()
        session.endSession()
    }
    catch (error) {
        return res.status(400).json({
            message: "Transaction failed due to an error",
            error: error.message
        })
    }

    /**
     * 12. Send email notification
     */
    try {
        await emailService.sendTransactionEmail(req.user.email, req.user.name, amount, toAccount)
    } catch (emailError) {
        console.error('Email notification failed:', emailError)
        // Don't fail transaction if email fails
    }

    return res.status(201).json({
        message: "Transaction completed successfully!",
        transaction: transaction
    })

}

async function createInitialFundsTransaction(req,res){
    const {toAccount,amount, idempotencyKey}=req.body

if(!toAccount || !amount || !idempotencyKey){
    return res.status(400).json({
        message:"toAccount, amount and idempotency Key are required"
    })
}
const toUserAccount = await accountModel.findOne({
    _id:toAccount
})

if(!toUserAccount){
    return res.status(400).json({
        message:"Invalid toAccount"
    })
}

const fromUserAccount = await accountModel.findOne({
    // systemUser:true,
    user: req.user._id
})

if(!fromUserAccount){
    return res.status(400).json({
        message:"System user account not found"
    })
}
const session = await mongoose.startSession()
session.startTransaction()

const transaction = new transactionModel({
    fromAccount:fromUserAccount._id,
    toAccount,
    amount,
    idempotencyKey,
    status:"PENDING"
})
 
const debitLedgerEntry = await ledgerModel.create([{
    account:fromUserAccount._id,
    amount: amount,
    transaction: transaction._id,
    type:"DEBIT"
}],{session})

const creditLedgerEntry = await ledgerModel.create([{
    account:toUserAccount._id,
    amount: amount,
    transaction: transaction._id,
    type:"CREDIT"
}],{session})

transaction.status= "COMPLETED"
    await transaction.save({session})

    await session.commitTransaction()
    session.endSession()

    return res.status(201).json({
        message:"Inititial fund transfer completed successfully",
        transaction: transaction
    })

}

/**
 * Deposit funds to user's own account
 * Creates a CREDIT ledger entry with a system transaction
 */
async function depositFunds(req, res) {
    const { toAccount, amount, idempotencyKey } = req.body

    // Validate input
    if (!toAccount || !amount || !idempotencyKey) {
        return res.status(400).json({
            message: "toAccount, amount and idempotencyKey are required"
        })
    }

    if (amount <= 0) {
        return res.status(400).json({
            message: "Amount must be greater than 0"
        })
    }

    // Get the account
    const account = await accountModel.findOne({
        _id: toAccount,
        user: req.user._id
    })

    if (!account) {
        return res.status(404).json({
            message: "Account not found"
        })
    }

    // Check account status
    if (account.status !== "ACTIVE") {
        return res.status(400).json({
            message: "Account must be ACTIVE to receive deposits"
        })
    }

    // Check if idempotency key already exists
    const existingTransaction = await transactionModel.findOne({
        idempotencyKey: idempotencyKey
    })

    if (existingTransaction) {
        if (existingTransaction.status === "COMPLETED") {
            return res.status(200).json({
                message: "Deposit already processed",
                transaction: existingTransaction
            })
        }
    }

    let transaction;
    try {
        const session = await mongoose.startSession()
        session.startTransaction()

        // Create transaction record (fromAccount is null for deposits)
        transaction = (await transactionModel.create([{
            fromAccount: null,
            toAccount: toAccount,
            amount: amount,
            idempotencyKey: idempotencyKey,
            status: "COMPLETED"
        }], { session }))[0]

        // Create CREDIT ledger entry
        await ledgerModel.create([{
            account: toAccount,
            amount: amount,
            transaction: transaction._id,
            type: "CREDIT"
        }], { session })

        await session.commitTransaction()
        session.endSession()
    } catch (error) {
        return res.status(400).json({
            message: "Deposit failed",
            error: error.message
        })
    }

    // Get updated balance
    const updatedBalance = await account.getBalance()

    return res.status(201).json({
        message: "Deposit completed successfully!",
        transaction: transaction,
        newBalance: updatedBalance
    })
}

module.exports= {
    createTransaction,
    createInitialFundsTransaction,
    depositFunds
}