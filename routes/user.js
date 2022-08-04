const router=require('express').Router();
const {check}=require("express-validator")
const {userRegister,userLogin, serializeUser,userAuth,checkRole}=require('../utils/Auth')
// const checkAuth=require('../middleware/auth')
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

// Profile Route
router.get("/profile",userAuth, async(req,res)=>{
 return res.json(serializeUser(req.user))
})

// Users Protected Route
router.get("/user-protected",userAuth, checkRole(["user"]), async(req,res)=>{
    return res.json(`hello ${req.user.firstName}, your role:${req.user.role}`);
})
// Staff Protected Route
router.get("/staff-protected",userAuth,checkRole(["staff"]), async(req,res)=>{
    return res.json(`hello ${req.user.firstName}, your role:${req.user.role}`);
})
// Managers Protected Route
router.get("/manager-protected",userAuth, checkRole(["manager"]), async(req,res)=>{
    return res.json(`hello ${req.user.firstName}, your role:${req.user.role}`);
})
// Admin Protected Route
router.get("/admin-protected",userAuth, checkRole(["admin"]), async(req,res)=>{
    return res.json(`hello ${req.user.firstName}, your role:${req.user.role}`);
})
module.exports=router;     