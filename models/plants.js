const mongoose=require("mongoose");

const plantSchema = new mongoose.Schema({
    
    name:{
        type:String,
        required :true
    },
    description:{
        type:String,
        required :true
    },
    Category:{
        type:String,
        required :true
    }
});

module.exports=mongoose.model('Plants',plantSchema)