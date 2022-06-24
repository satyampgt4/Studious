import express from "express";
import dotenv from "dotenv";
import {OAuth2Client} from "google-auth-library";


dotenv.config();
const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID);
const app = express();
app.use(express.json());

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

app.listen(process.env.PORT|| 5000,()=>{
    console.log(`Server is Ready at http://localhost:${process.env.PORT||5000}`);
    
});