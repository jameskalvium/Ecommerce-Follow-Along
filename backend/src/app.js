if (process.env.NODE_ENV !=='PRODUCTION'){
    require('dotenv').config({
        path:'/src/config/.env'
    })
}



const express = require('express')

const app = express()

const userRouter = require('./routes/user.routes.js')

app.get('/',(req,res)=>{
    return res.send("Welcome to backend")
})

// app.get("/user/squad",(req,res)=>{
//     return res.send({message:'Good Afternoon'})
// })

// app.listen(8080,async() =>{
//     connectDatabase();
//     console.log('The server is running on PORT:8080 URL: http://localhost:8080')
// })


app.use('/user',userRouter)



module.exports = app;