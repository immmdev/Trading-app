const mongoose=require("mongoose");

const OrderSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, 
  },
  qty: {
    type: Number,
    required: true,
    min: 1
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  totalPrice: {
    type: Number,
    required: true,
    min: 0
  },
  mode: {
    type: String,
    required: true,
  },
  
      user:{
          type:mongoose.Schema.Types.ObjectId,
          ref:'User',
          required:true,
      },
  createdAt: {
    type: Date,
    default: Date.now,
  }

});


module.exports=mongoose.model("order",OrderSchema);

