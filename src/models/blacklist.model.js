const monogoose = require('mongoose');

const tokenBlacklistSchema = new monogoose.Schema({
    token: {
        type: String,
        required: [true, "Token is required to blacklist"],
        unique: [true, "Token is already blacklisted"]
    },
}, {
    timestamps: true
})
tokenBlacklistSchema.index({
    createdAt: 1
}, {
    expireAfterSeconds: 60 * 60 * 24 * 7
})
const tokenBlacklistModel = monogoose.model("tokenBlacklist", tokenBlacklistSchema)
module.exports = tokenBlacklistModel