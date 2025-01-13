
const express = require('express')

const app = express()


if (process.env.NODE_ENV !=='PRODUCTION'){
    require('dotenv').config({
        path:'/src/config/.env'
    })
}

const productRouter = require('./routes/product.route.js');


const userRouter = require('./routes/user.routes.js')

app.use(express.json());

app.get('/',(req,res)=>{
    return res.send("Welcome to backend")
})


app.use('/user',userRouter)

app.use('/product', productRouter);



module.exports = app;