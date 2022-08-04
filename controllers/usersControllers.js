const Users=require('../models/user')
const {validationResult}=require("express-validator")
const bcrypt=require("bcrypt")
const  JWT =require('jsonwebtoken')

// Register new user POST auth/login
exports.registerUser=async(req,res)=>{
   
    // check for errors
    const errors=validationResult(req)

     if(!errors.isEmpty()){
    return res.status(400).json({
      errors:errors.array()
    })
 }
 const {password,email,firstName,lastName,role}=req.body
 //  validate if user doesnt already exist
 const emailExist=await Users.findOne({email});
if(emailExist){
  return  res.status(400).json({
        errors:[
            {
                "msg":"This user already exists"
            }
        ]
        
    })
}

const  hashedPassword=await bcrypt.hash(password,10)
try {
  const newUser= await Users.create({
    firstName,
    lastName,
    email,
    role,
    password:hashedPassword
  })
 return res.json({message:`Hurray! you have registered successfully.`})
} catch (error) {
  
}
   
        
      }