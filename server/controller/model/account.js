
const mongoose = require('mongoose');
const Transaction = require('./transaction') ;

const AccountSchema =mongoose.Schema(
    {
        _id : mongoose.Schema.Types.ObjectId,
        name: String,
        currentBalance: Number,
        email:String,
        transactions:[{
            type:mongoose.Schema.Types.ObjectId, ref:"Transaction"    
        }],
    });

    module.exports = mongoose.model("Account",AccountSchema);
    