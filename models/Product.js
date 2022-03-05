import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
    title:  {String, required:true, unique:true}, // String is shorthand for {type: String}
    desc: {String, required:true,},
    img:   {String, required:true},
    categories: {type:Array},
    size: {type:String},
    color: {type:String},
    price: {type:Number, required:true}
  
  },
  {timestamps:true}
  );

  const Product = mongoose.model('Product', productSchema);