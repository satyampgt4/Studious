
const express = require("express");
const dotenv = require("dotenv");
const {OAuth2Client} = require('google-auth-library');
const router = express.Router();

const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID);
const user = [];

router.post('/',async(req,res)=>{
    const token = await client.verifyIdToken({
        idToken : token,
        audience : process.env.CLIENT_ID, 
    });
    const { name ,email,picture} = ticket.getPayload();
    upsert(users,{name,email,picture });
    console.log(users);
    res.status(201);
    res.json({name,email,picture});
});

module.exports = router;

