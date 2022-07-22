const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();

const Account = require("../model/account");
// Account.init();
router.get('/create',async(req,res)=>{
    var newUser = new Account(
        { 
            _id :new mongoose.Types.ObjectId(),
            name: req.name, 
            currentBalance: req.initialBalance, 
            email: req.initialBalance
             
        });
 
    // save model to database
    newUser.save(function (err, book) {
      if (err) return console.error(err);
        console.log(book.name + " saved to bookstore collection.");
    });
    res.json({ user: 'hi', model: newUser });
});

router.get('/find',async(req,res)=>{

    var temp;
    await Account.find({ name: 'Abhinav Agrawal'}, async function (err, docs) {
        if (err){
            console.log(err);
        }
        else{
             temp  = docs;
            console.log("First function call1 : ", docs);
        }
    });
    console.log("second function call2 : ", temp);
    res.json(temp);

});

module.exports = router;