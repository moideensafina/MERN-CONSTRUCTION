const express = require('express')
const app= express()
const path  = require('path');
const dotenv = require("dotenv")
const cookieParser = require('cookie-parser');
const errorMiddleWares = require("./middleware/error")

dotenv.config({path:path.join(__dirname,"config/config.env")})

app.use(express.json())
app.use(cookieParser())
app.use('/uploads',express.static(path.join(__dirname,'uploads')))

const project = require('./routes/project')
const auth = require('./routes/auth')


app.use('/api/v1',project);
app.use('/api/v1',auth);



if (process.env.NODE_ENV ==="production") {
    app.use(express.static(path.join(__dirname ,'../frontend/build')))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'../frontend/build/index.html')) 
    })
}

app.use(errorMiddleWares)


module.exports = app;