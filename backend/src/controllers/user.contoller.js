const ErrorHandler = require('../utils/ErrorHandler')
const UserModel = reuqire( '../models/user.model')

export async function CreateUser(req,res){
    const{Name,Email,password}= req.body
    const CheckUserPresent = await UserModel.findOne({
        email:Email,
    
    });

    if(CheckUserPresent){
        return res.ErrorHandler('Already present in DB');
       
    }
    new newUser = new UserModel({
        Name:Name,
        email:Email,
        password:password,

    })
    await UserModel.Save()

    return res.send('User Created Successfully');

}