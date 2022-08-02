const express=require('express')
const app=express();
require('dotenv').config();
const port=process.env.PORT;
const connectDB=require('./dbConn')
const mongoose=require('mongoose')

// Initialize express middleware
app.use(express.json({extended:false}))

// connect Database
connectDB();

// test db connection
mongoose.connection.once('open',()=>{
    console.log('Connected Successfully to Database')
    app.listen(port,console.log(`Server listening on port:${port}`))
})
