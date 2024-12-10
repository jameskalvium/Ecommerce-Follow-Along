if (process.env.NODE_ENV !=='PRODUCTION'){
    require('dotenv').config({
        path:'/src/config/.env'
    })
}


const app = require('./app.js');
const PORT =process.env.PORT;
const connectDatabase = require('./DB/database')

const server = app.listen(PORT,async() =>{
    connectDatabase();
    console.log('The server is running on PORT:8080 URL: http://localhost:8080')
})