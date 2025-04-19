const mongoose=require('mongoose');
const packageSchema = new mongoose.Schema({
    budget:{
        type:Number
    },
    standard:{
        type:Number
    },
    premium:{
        type:Number
    },
    luxury:{
        type:Number
    }
            
      
})

let schema = mongoose.model('package',packageSchema)
module.exports=schema