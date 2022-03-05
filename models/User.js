import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
    username:  {String, required:true, unique:true}, // String is shorthand for {type: String}
    email: {String, required:true,unique:true},
    password:   {String, required:true},
    isAdmin: {type:Boolean, default:false}
  
  },
  {timestamps:true}
  );

  const User = mongoose.model('User', userSchema);