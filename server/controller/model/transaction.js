
const mongoose = require('mongoose');
const TransactionSchema =mongoose.Schema(
    {
        _id : mongoose.Types.ObjectId,
        type: String,
        amount: Number,
        tag:String,
        description:String,
        createdAt: {type: Date, default: Date.now},
        updatedAt: {type: Date, default: Date.now},

    });    
    module.exports = mongoose.model("Transaction",TransactionSchema);