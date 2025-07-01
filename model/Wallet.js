const mongoose=require("mongoose");

const WalletSchema= mongoose.Schema({
    amount:{
        type:Number,
    },
    
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
    },
});


module.exports=mongoose.model('Wallet',WalletSchema);