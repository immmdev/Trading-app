const mongoose=require("mongoose");

const WatchListSchema = mongoose.Schema({
    name: { type: String, required: true, },
    price: { type: Number, required: true },
    percent: { type: Number, required: true },
    isDown: { type: Boolean, required: true },
    avg:{ type: Number, required: true },
})

module.exports=mongoose.model("watchlist",WatchListSchema);

