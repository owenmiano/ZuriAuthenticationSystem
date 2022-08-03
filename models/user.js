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
        enum:["users","staff","manager","admin"],
        default:"users"
    },
    isAdmin:{
       type: Boolean,
       default:0
   },
    isStaff:{
    type: Boolean,
    default:0
    },  
    isManager:{
    type: Boolean,
    default:0
    },
},
{
    timestamps:true
})

const Users=model('users',userSchema)
module.exports=Users