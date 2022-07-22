const express = require("express");
const dotenv = require("dotenv");
dotenv.config()

console.log(process.env.MONGODB_USERNAME);

const cookieParser = require("cookie-parser");
const sessions = require('express-session');

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.use(cookieParser());
// app.use(sessions({
//     secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
//     saveUninitialized:true,
//     cookie: { maxAge: oneDay },
//     resave: false
// }));
app.use(cookieParser());

const db = require("./database/database");
const auth = require("./controller/routing/auth")
const user = require("./controller/api/user")

app.use('/google-login',auth);
app.use('/user',user);

module.exports = app;