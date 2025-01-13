const path = require('path');

if (process.env.NODE_ENV !=='PRODUCTION'){
    require('dotenv').config({
        path: path.resolve(__dirname,'../config/.env'),
    })
}


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