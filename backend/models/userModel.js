const mongoose= require("mongoose");
const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt  = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'please enter name']
    },
    email:{
        type:String,
        required:[true,'please enter name'],
        unique:true,
        validate:[validator.isEmail,'pls enter valid email address']
    },
    password:{
        type:String,
        required:[true,'please enter password'],
        select : false
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        next();
    }
    this.password  = await bcrypt.hash(this.password,10 )
})
userSchema.methods.getJwtToken = function(){
    return jwt.sign({id: this.id},process.env.JWT_SECRET,{
         expiresIn:process.env.JWT_EXPIRES_TIME
     })
 }

userSchema.methods.isValidPassword =async function(enteredPassword){
  return await bcrypt.compare(enteredPassword,this.password)
}


let model = mongoose.model('User',userSchema);
module.exports=model;