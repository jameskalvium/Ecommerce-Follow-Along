const UserModel = require( '../models/user.model.js')
const ErrorHandler = require('../utils/ErrorHandler.js')

async function CreateUser(req,res){
    const{Name,Email,password}= req.body
    const CheckUserPresent = await UserModel.findOne({
        email:Email,
    
    });

    if(CheckUserPresent){
        return new ErrorHandler('Already present in DB',400);
       
    }
    const newUser = new UserModel({
        Name:Name,
        email:Email,
        password:password,

    })
    await newUser.save()

    return res.send('User Created Successfully');

}
module.exports=CreateUser