const {Schema,model}=require('mongoose')

// Create User Schema
const userSchema=new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["user","staff","manager","admin"],
        default:"user"
    }
    
    },
{
    timestamps:true
})

const Users=model('users',userSchema)
module.exports=Users