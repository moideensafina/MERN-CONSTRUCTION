const catchAsyncError = require('../middleware/catchAsyncError');
const User = require('../models/userModel');
const ErrorHandler = require('../utils/errorHandler')
const sendToken = require('../utils/jwt');




exports.registerUser = catchAsyncError(async (req,res,next)=>{
    const {name, email,password} = req.body;
    let BASE_URL = process.env.BACKEND_URL;
    if (process.env.NODE_ENV ==="production") {
      BASE_URL = `${req.protocol}://${req.get('host')}`
    }
   
    const user =  await User.create({
        name,
        email,
        password
    })

    sendToken(user,201,res)
})

exports.loginUser = catchAsyncError(async (req,res,next)=>{
    const {email,password} = req.body;

    if (!email || !password) {
        return next(new ErrorHandler('please enter email & password',400))
     }
     //finding the user data from database
     const user = await User.findOne({email}).select('+password')
  
     if (!user) {
        return next(new ErrorHandler('invalid password & email',401))
     }
  
     if (!await user.isValidPassword(password)) {
        return next(new ErrorHandler('invalid password & email',401))
     }
     sendToken(user,201,res)
})


exports.logOutUser=(req,res,next)=>{
   
    res.cookie('token',null,{
       expires:new Date(Date.now()),
       httpOnly:true
    })
    .status(200)
    .json({
       success:true,
       message:"LoggedOut"
    })
}

exports.getUserProfile=catchAsyncError(async(req,res,next)=>{
   const user = await User.findById(req.user.id)
   res.status(200).json({
      success:true,
      user
   })
})