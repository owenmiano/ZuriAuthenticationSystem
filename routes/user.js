const router=require('express').Router();
const {check}=require("express-validator")
const {userRegister,userLogin, serializeUser,userAuth,checkRole}=require('../utils/Auth')
const userController=require("../controllers/userController")

// Users Registration Route
router.post("/register-user",[
    check("email","Please provide a valid email").isEmail(),
    check("password","Please provide a password that is greater than 5 characters").isLength({
        min:6
    }),
    check("firstName","First Name field is required").exists(),
    check("lastName","Last Name field is required").exists(),
],async(req,res)=>{
   await userRegister(req,"user",res)
 })

// ALL REGISTRATION ROUTES
// Staff Registration Route
router.post("/register-staff",[
    check("email","Please provide a valid email").isEmail(),
    check("password","Please provide a password that is greater than 5 characters").isLength({
        min:6
    }),
    check("firstName","First Name field is required").exists(),
    check("lastName","Last Name field is required").exists(),
],async(req,res)=>{
    await userRegister(req,"staff",res)
})
// Managers Registration Route
router.post("/register-manager",[
    check("email","Please provide a valid email").isEmail(),
    check("password","Please provide a password that is greater than 5 characters").isLength({
        min:6
    }),
    check("firstName","First Name field is required").exists(),
    check("lastName","Last Name field is required").exists(),
],async(req,res)=>{
    await userRegister(req,"manager",res)
})
// Admin Registration Route
router.post("/register-admin",[
    check("email","Please provide a valid email").isEmail(),
    check("password","Please provide a password that is greater than 5 characters").isLength({
        min:6
    }),
    check("firstName","First Name field is required").exists(),
    check("lastName","Last Name field is required").exists(),
],async(req,res)=>{
    await userRegister(req,"admin",res)
})

// ALL LOGIN ROUTES
// Users Login Route
router.post("/login-user",[
    check("email","Please provide a valid email").isEmail(),
    check("password","Please provide a password that is greater than 5 characters").isLength({
        min:6
    })
],async(req,res)=>{
  await userLogin(req,"user",res)
})
// Staff Login Route
router.post("/login-staff",[
    check("email","Please provide a valid email").isEmail(),
    check("password","Please provide a password that is greater than 5 characters").isLength({
        min:6
    })
],async(req,res)=>{
    await userLogin(req,"staff",res)
})
// Managers Login Route
router.post("/login-manager",[
    check("email","Please provide a valid email").isEmail(),
    check("password","Please provide a password that is greater than 5 characters").isLength({
        min:6
    })
],async(req,res)=>{
    await userLogin(req,"manager",res)
})
// Admin Login Route
router.post("/login-admin",[
    check("email","Please provide a valid email").isEmail(),
    check("password","Please provide a password that is greater than 5 characters").isLength({
        min:6
    })
],async(req,res)=>{
    await userLogin(req,"admin",res)
})

// View one's Profile Information
router.get("/profile",userAuth, async(req,res)=>{
 return res.json(serializeUser(req.user))
})

// PASSWORD RECOVERY
router.put("/passwordRecovery",userAuth,[
    check("email","Please provide a valid email").isEmail(),
    check("password","Please provide a password that is greater than 5 characters").isLength({
        min:6
    })
],userController.recoverAccount)
module.exports=router;     