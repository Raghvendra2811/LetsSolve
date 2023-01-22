const mongoose =require('mongoose');

const questionSchema= new mongoose.Schema({
    name:{type:String,required:true},
    link:{type:String,required:true},
    difficult:{type:Number,required:true},
    topic:{type:String,required:true},
    completed:{type:Boolean,required:true}
},{timestamps:{createdAt:'created_at',updatedAt:'updated_at'}})


const questionModel=mongoose.model("question",questionSchema)

module.exports=questionModel