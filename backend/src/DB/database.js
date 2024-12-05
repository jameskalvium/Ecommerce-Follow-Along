if (process.env.NODE_ENV !=='PRODUCTION'){
    require('dotenv').config({
        path:'../config/.env',
});

}


const mongoose = require('mongoose')

const connectDatabase=()=>{
    mongoose
    .connect("mongodb+srv://jamesrjacob9747:12345678910@cluster0.tludq.mongodb.net/")
    .then((data)=>{
        console.log(
            `Database is connected successfully: ${data.connection.host}`
        );
    })
    .catch((er)=>console.log('Database connection failed..',er.message));

}
module.exports = connectDatabase;