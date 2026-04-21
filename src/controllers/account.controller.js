const accountModel = require("../models/account.model");
async function createAccountController(req,res){

    const user = req.user
    const account = await accountModel.create({
        user: user._id
    })

    // Get balance immediately
    const balance = await account.getBalance()

    res.status(201).json({
        message: "Account created successfully",
        account: {
            _id: account._id,
            user: account.user,
            status: account.status,
            currency: account.currency,
            balance: balance,
            createdAt: account.createdAt
        }
    })

}

async function getUserAccountsController(req,res){
    const accounts = await accountModel.find({
        user: req.user._id
    });
    
    // Get balance for each account
    const accountsWithBalance = await Promise.all(
        accounts.map(async (account) => {
            const balance = await account.getBalance()
            return {
                _id: account._id,
                user: account.user,
                status: account.status,
                currency: account.currency,
                balance: balance,
                createdAt: account.createdAt,
                updatedAt: account.updatedAt
            }
        })
    )
    
    res.status(200).json({
        accounts: accountsWithBalance
    })
}


async function getAccountBalanceController(req,res){

    const {accountId} = req.params;
    const account = await accountModel.findOne({
        _id: accountId,
        user: req.user._id
    })

    if(!account){
        return res.status(404).json({
            message:"Account not found"
        })
    }
    const balance = await account.getBalance();
    res.status(200).json({
        _id: account._id,
        accountId: account._id,
        balance: typeof balance === 'number' ? balance : 0
    })
}

module.exports = {
    createAccountController,
    getUserAccountsController,
    getAccountBalanceController
}