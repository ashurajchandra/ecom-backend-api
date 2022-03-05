const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port =3000;

mongoose.connect(
    // 'mongodb+srv://ashurajchandra:sXv2FYL8nUYtleJs@cluster0.1bmsh.mongodb.net/shop?retryWrites=true&w=majority'
    // 'mongodb+srv://ashurajchandra:sXv2FYL8nUYtleJs@cluster0.1bmsh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    process.env.MONGO_URL
    ).
then(()=>console.log("DB connection successful")).catch((err)=>console.log("error in connecting server",err))
app.get("/", (req,res)=>{
    res.send("hello world")
})

app.listen(process.env.PORT ||port, ()=>{
    console.log(`app is running successfully on port ${port}`)
})