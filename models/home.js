const mongoose=require('mongoose')
const homeSchema=new mongoose.Schema({
    locality:{
        type:String,
        required:true
    },
    bhkType:{
        type:String,
        required:true
    },
    rent:{
        type:String,
        required:true
    },
    isFurnished:{
        type:Boolean,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true,

    },
    created:{
        type:Date,
        required:true,
        default:Date.now,
    },
})
module.exports=mongoose.model("home",homeSchema);