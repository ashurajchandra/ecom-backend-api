import mongoose from 'mongoose';
const { Schema } = mongoose;

const OrderSchema = new Schema({
    userId:{String, required:true},
    products:[
       {
        productId:{String},
        quantity:{String, default:1}
       }
    ],
    amount:{String , required:true},
    address:{Object, required:true},
    status:{ String, default:"pending"}
  
  },
  {timestamps:true}
  );

  const Order = mongoose.model('Order', OrderSchema);