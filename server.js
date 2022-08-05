const express=require('express')
const app=express();
require('dotenv').config();
const mongoose=require('mongoose')
const port=process.env.PORT;
const connectDB=require('./dbConn')
const auth=require('./routes/user')
const passport = require("passport");
const books=require("./routes/book")

// Initialize  middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(passport.initialize());

require("./middleware/passport")(passport)

// connect Database
connectDB();

app.get('/',(req,res)=>{
    res.send('Welcome to zuri authentication system')
})
app.use('/auth',auth)
app.use('/book',books)

// test db connection

mongoose.connection.once('open',()=>{
    console.log(`Connected Successfully to Database:${mongoose.connection.name}`)
    app.listen(port,console.log(`Server listening on port:${port}`))
})
