const User = require("../models/user");
const { Strategy, ExtractJwt } = require("passport-jwt");

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.TOKEN
};

module.exports = passport => {
  passport.use(
    new Strategy(opts, async (payload, done) => {
      await User.findById(payload.user_id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => {
          return done(null, false);
        });
    })
  );
};












// const  JWT =require('jsonwebtoken')

// module.exports =async (req,res,next)=>{
//     const token=req.header('Bearer-token')

//     if(!token){
//         return  res.status(400).json({
//             errors:[
//                 {
//                     "message":"unauthorised!"
//                 }
//             ]
            
//         })
//     }
// try {
//     let user=await JWT.verify(token,process.env.TOKEN);
//     req.user=user.email;
//     next();
// } catch (error) {
//     return  res.status(400).json({
//         errors:[
//             {
//                 "message":"unauthorised!"
//             }
//         ]
        
//     })
// }

// }