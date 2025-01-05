 
const mongoose = require('mongoose');
const { request } = require('../app');

const userSchema = new mongoose.Schema({
    Name:{type: String, require : [true, 'please ente the name']},
    Email :{type:String, require: [true,'Please enter the email'],unique :['please enter unique email']},
    password: {type: String, require: [true, 'please enter the password..']},
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
    url:{type :String, require :true},
    public_id:{type:String ,require:true}
},
resetPasswordToken : String,
resetPasswordTime: Date

},
{versionKey:false}
)
const UserModel = mongoose.model('User',userSchema)

module.exports = UserModel;