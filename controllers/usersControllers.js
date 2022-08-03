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
//  let user=Users.find((user)=>{
//     return user.email===email
//   })
// if(user){
//   return  res.status(400).json({
//         errors:[
//             {
//                 "msg":"This user already exists"
//             }
//         ]
        
//     })
// }

const  hashedPassword=await bcrypt.hash(password,10)

    Users.create({
        firstName:firstName,
        lastName:lastName,
        email:email,
        role:role,
        password:hashedPassword
      })
      const token=await JWT.sign({email},
          process.env.TOKEN,{
          expiresIn:3600000
        })
       
        return res.json({message:`Added user:${email} successfully!`,token})
        
      }