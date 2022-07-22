
const db = require('mongoose');
const dotenv = require("dotenv");
const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER_NAME}.mqlbjyg.mongodb.net/?retryWrites=true&w=majority`;
// console.log(uri);
db.connect(uri,{useNewUrlParser:true});

module.exports = db;