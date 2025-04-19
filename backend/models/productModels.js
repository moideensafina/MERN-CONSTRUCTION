const mongoose=require('mongoose');
const productSchema = new mongoose.Schema({
    city:{
        type:String,
        required:[true,"please enter city"]
    },
    district:{
        type:String,
        required:[true,"please enter district"]
    },
    price:{
        type:Number, 
        required:[true,"please enter price"]
    },
    sqrt:{
        type:Number, 
        required:[true,"please enter price"]
    },
     image:{
                type:String,
                required:true
            }
            
      
})

let schema = mongoose.model('project',productSchema)
module.exports=schema