
const userModel=require('../models/user.model.js')
const ErrorHandler=require("../utils/ErrorHandler.js")
const transporter=require("../utils/sendMail.js")
const jwt=require('jsonwebtoken')
require('dotenv').config({
    path:'./src/config/.env',
});
async function createUser(req,res){
    const {Name,email,password}=req.body
    const checkUserPresent=await userModel.findOne({
        email:email, //user schema
    })
    if (checkUserPresent){
        const error = new ErrorHandler("Already present in database",400)

        return res.status(404).send({
          message: error.message,
          status:error.statusCode,
          success:false,

        })
    }
    const newUser=new userModel({
        Name:Name,
        email:email,
        password:password
    })
    const data = {
         Name,
         email,
         password
         };


      //1. we have to send mail to user for verification as http://localhost:5173/activation/{token}
      //2. we have to send the mail as link to user
      //3. when the user click the link user have to be directed to activation page


    const token=generateToken(data)
    await transporter.sendMail({
        to:'james.r@kalvium.community',
        from: 'jamesrjacob9747@gmail.com',
        subject:'verification email',
        text:'Text',
        html:`<h1>Hello world</h1> http://localhost:8080/Activation/${token}`
    })
    await newUser.save()
    return res.send("User Created Succesfully")
}
const generateToken=(data)=>{
    const token=jwt.sign({
        // _id:_data.id,
        Name:data.Name,
        email:data.email,
    },
        process.env.SECRET_KEY
)
return token
}

async function verifyUserController(req,res){
  const {token} = req.params
  try {
    if (verifyUser(token)) {
        return res.status(200).cookie()
    }
    return res.status(403).send({ message: 'token expired' })
} catch (err) {
    return res.status(403).send({ message: err.message })
}
}




const verifyUser = (token) => {
    const verify = jwt.verify(token, process.env.SECRET_KEY);
    if (verify) {
      return verify;
    } else {
      return false;
    }
  };
  //find gives list of object
  //findOne gives one object
  

module.exports={createUser,verifyUserController}