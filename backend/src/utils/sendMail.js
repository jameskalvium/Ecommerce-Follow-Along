const nodemailer = require('nodemailer');


// nodemailer is only for js

const transportor = nodemailer.createTransport({
    host: "smtp.gmail.com",
    auth: {
        user: 'jamesrjacob9747@gmail.com',
        pass: 'jheb tvqz jhut gzdi'
    },
})
module.exports = transportor;