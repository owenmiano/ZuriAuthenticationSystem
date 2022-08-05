const Users=require('../models/user');
const bcrypt=require("bcrypt")
const {validationResult}=require("express-validator")

// PASSWORD RECOVERY
exports.recoverAccount=async(req,res)=>{
    // check for errors
    const errors=validationResult(req)
    if(!errors.isEmpty()){
            return res.status(400).json({
              errors:errors.array()
            })
         }
    
try {
    // hash new password to replace the old one
    const hashedPassword=await bcrypt.hash(req.body.password,10)
    // search for the account by using email
    const emailExist=await Users.findOneAndUpdate(
        { email: req.query.email},
        {$set :{password: hashedPassword }},
     )
    //  if the email doesnot exist in the database
    if(!emailExist){
        return  res.status(400).json({
            errors:[
                {
                    "message":"Account with this email has not been found.Try Again or register new account"
                }
            ]
            
        })
    }
    //  if the email exist 
   return res.status(200).json({message:`Your password has been updated successfully.Login now`}) 
} catch (error) {
    res.status(500).json({'msg':error})
}
}