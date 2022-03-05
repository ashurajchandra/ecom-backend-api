import mongoose from 'mongoose';
const { Schema } = mongoose;

const CartSchema = new Schema({
    userId:{String, required:true},
    products:[
       {
        productId:{String},
        quantity:{String, default:1}
       }
    ]
  
  },
  {timestamps:true}
  );

  const Cart = mongoose.model('Cart', CartSchema);