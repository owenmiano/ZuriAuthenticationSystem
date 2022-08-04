const Users=require('../models/user');
const bcrypt=require("bcrypt")
const {validationResult}=require("express-validator")
const  JWT =require('jsonwebtoken')
const passport = require("passport");

// Register user (ADMIN,MANAGER,STAFF,USER)
const userRegister=async(userDets,role,res)=>{
    //  validate user
    const errors=validationResult(userDets)
    if(!errors.isEmpty()){
            return res.status(400).json({
              errors:errors.array()
            })
         }
         const {password,email,firstName,lastName}=userDets.body
    // validate email
         const emailExist=await Users.findOne({email});
         if(emailExist){
           return  res.status(400).json({
                 errors:[
                     {
                         "message":"This user already exists"
                     }
                 ]
                 
             })
         }
//    Get the hashed Password
const  hashedPassword=await bcrypt.hash(password,10)
try {
      const newUser= await Users.create({
        ...userDets.body,
        role,
        password:hashedPassword
      })
     return res.status(201).json({message:`Hurray! you have registered successfully.`})
    } catch (error) {
      console.log(error.message)
      return res.status(500).json({
        errors:[
          {
              "message":"Unable to create your account"
          }
      ]
      })
    }
}


//  Login user (ADMIN,MANAGER,STAFF,USER)
const userLogin=async(userCreds,role,res)=>{
    const errors=validationResult(userCreds)
    if(!errors.isEmpty()){
            return res.status(400).json({
              errors:errors.array()
            })
         }
   let {email,password}=userCreds.body

// first check if the email exists in the database
    const user=await Users.findOne({email})
    if(!user){
        return res.status(404).json({
            errors:[
              {
                  "message":"Invalid login credentials"
              }
          ]
          })
    }

    // check role
    if(user.role !==role){
        return res.status(403).json({
            errors:[
              {
                  "message":"Please make sure you are logging in from the right portal"
              }
          ]
          })
    }
    // that means user is existing and trying to sign in from the right portal
    // check for password
    let isMatch=await bcrypt.compare(password,user.password);
    // if password is incorrect
    if(!isMatch){
        return  res.status(403).json({
              errors:[
                  {
                      "message":"Incorrect password"
                  }
              ]
              
          })
        }
    // if password is correct
    const token=await JWT.sign({
        email:user.email,
        user_id:user._id,
        firstName:user.firstName,
        role:user.role,
        lastName:user.lastName
    },
        process.env.TOKEN,{
        expiresIn:3600000
      })
      let result={
        firstName:user.firstName,
        lastName:user.lastName,
        email:user.email,
        role:user.role,
        token:`Bearer ${token}`
      }
      return res.status(200).json({...result,message:"Hurray! You are now logged in"})
}
// @DESC Passport middleware
const userAuth = passport.authenticate("jwt", { session: false });

// Check role middleware
const checkRole = roles => (req, res, next) =>
  !roles.includes(req.user.role)
    ? res.status(401).json("Unauthorized")
    : next();


const serializeUser=user=>{
    return{
        firstName:user.firstName,
        lastName:user.lastName,
        email:user.email,
        role:user.role,
        _id:user._id,
        createdAt:user.createdAt,
        updatedAt:user.updatedAt
    }
}
module.exports={
    userRegister,
    userLogin,
    serializeUser,
    userAuth,
    checkRole
}