const router=require('express').Router();
const usersControllers=require('../controllers/usersControllers')
const {check}=require("express-validator")

// login user route
router.post('/register',[
    check("email","Please provide a valid email").isEmail(),
    check("password","Please provide a password that is greater than 5 characters").isLength({
        min:6
    }),
    check("firstName","First Name is required").exists(),
    check("lastName","Last Name is required").exists(),
    
],
usersControllers.registerUser);

module.exports=router;     