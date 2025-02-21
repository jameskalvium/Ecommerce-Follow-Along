const path = require('node:path');

if (process.env.NODE_ENV !=='PRODUCTION'){
    require('dotenv').config({
        path: path.join(__dirname, '../config/.env'),    })
    }
    
require('dotenv').config();

const mongoose = require('mongoose')

const DB_URL = process.env.DB_URL 
const connectDatabase=()=>{
    console.log(DB_URL)
    mongoose
    .connect(DB_URL)
    .then((data)=>{
        console.log(
            `Database is connected successfully: ${data.connection.host}`
        );
    })
    .catch((er)=>console.log('Database connection failed..',er.message));

}
module.exports = connectDatabase;