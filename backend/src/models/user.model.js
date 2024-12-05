
const mongoose = require('mongoose');
const { request } = require('../app');

const userSchema = new mongoose.Schema({
    Name:{type: string, require : [true, 'please ente the name']},
    Email :{type:string, require: [true,'Please enter the email'],unique :['please enter unique email']},
    password: {type: string, require: [true, 'please enter the password..']},
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
    public_id:{type:string ,require:true}
},
resetPasswordToken : String,
resetPasswordTime: Date

},
{versionKey:false}
)
const UserModel = mongoose.model('User',userSchema)

module.exports = UserModel;