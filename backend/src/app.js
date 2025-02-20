const express = require('express')

const userRouter = require('./routes/user.routes.js')
const app = express()
const cookieParser = require('cookie-parser');

const cors = require('cors');

const cartRouter = require('./routes/cart.route.js')
const PaymentRouter = require('./routes/Payment.route.js');

const orderRouter = require('./routes/order.route.js')
if (process.env.NODE_ENV !=='PRODUCTION'){
    require('dotenv').config({
        path:'/src/config/.env'
    })
}

const productRouter = require('./routes/product.route.js');



app.use(express.json());
app.use(cors());
app.use(cookieParser());


app.get('/',(req,res)=>{
    return res.send("Welcome to backend")
})


app.use('/user',userRouter)

app.use('/product', productRouter);

app.use('/cart', cartRouter);
app.use('/orders', orderRouter);


app.use('/payment', PaymentRouter);

module.exports = app;