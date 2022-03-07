const router = require("express").Router();
const User  = require('../models/User');
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');

//REGISTER USER
router.post("/register", async (req,res)=>{
    try{
        const newUser = {
            username: req.body.username,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_PASS).toString()
        }
        //const hashPassword =  CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_PASS);
        const user = await User.create(newUser)
        return res.status(201).json({success:true,data:user})
    }catch(err){
         return res.status(500).json({success:false, data:err.message})
    }

})
//LOGIN USER
router.post("/login",async (req,res)=>{
    try{
        const user = await User.findOne({username:req.body.username});
        !user && res.status(401).json({success:false, data:'user not found'})
        const hashedPassword =  CryptoJS.AES.decrypt(user.password, process.env.SECRET_PASS);
        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        const {password, ...othersInfo} = user._doc;
        originalPassword !==req.body.password &&
        res.status(401).json({success:false, data:'password incorrect'})
        const accessToken = jwt.sign({
            id:user._id,
            isAdmin:user.isAdmin
          }, process.env.JWT_SEC, { expiresIn: '7d' });

        return res.status(200).json({success:true,data:{...othersInfo,accessToken}})
    }catch(err){
        return res.status(500).json({success:false, data:err.message})
    }
})

module.exports = router;