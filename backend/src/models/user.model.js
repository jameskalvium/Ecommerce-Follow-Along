 
const mongoose = require('mongoose');
// const { request } = require('../app');

const userSchema = new mongoose.Schema({
    Name:{type: String, required : [true, 'please enter the name']},
    Email :{type:String, required: [true,'Please enter the email'],unique :['please enter unique email']},
    password: {type: String, required: [true, 'please enter the password..']},
    address:[
        {city: String},
        {country: String},
        {add1: String},
        {add2: String},
        {zipCode: String},
        {addressType: String},
],
role: {type: String, default : 'user'},
avatar: {
    url:{type :String, required :true},
    public_id:{type:String ,required:true}
},
resetPasswordToken : String,
resetPasswordTime: Date

},
{versionKey:false}
)
const UserModel = mongoose.model('User',userSchema)

module.exports = UserModel;