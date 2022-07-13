const express = require("express");
const dotenv = require("dotenv");
const {OAuth2Client} = require('google-auth-library');

const app = express();
dotenv.config();

app.use(express.json());



const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID);



const user = [];

app.post('/api/google-login',async(req,res)=>{
    const token = await client.verifyIdToken({
        idToken : token,
        audience : process.env.CLIENT_ID, 
    });
    const { name ,email,picture} = ticket.getPayload();
    upsert(users,{name,email,picture });
    res.status(201);
    res.json({name,email,picture});
});



module.exports = app;