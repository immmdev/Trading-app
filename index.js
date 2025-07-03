require("dotenv").config();

const express = require("express");

const app = express();

const PORT = process.env.PORT;

const url = process.env.MONGO_URL;

const mongoose = require('mongoose');

const  HoldingModel  = require("./model/HoldingModel");

const  PositionModel  = require("./model/PositionModel");

const OrderModel  = require("./model/OrderModel");

const WatchListModel = require("./model/WatchListModel");

const Wallet=require("./model/Wallet");

const cors = require("cors");

const jwt=require("jsonwebtoken");


const User = require('./model/UserModel');

const {requireAuth}=require('./middleware/requireAuth');



app.use(cors());

app.use(express.json()); //parsing json data

mongoose.connect(url)
  .then(() => {
    console.log("Cluster connected");
  })
  .catch((err) => {
    console.log(err);
  });

// the function that is creating and returning token for us {jwt}
const createToken =(_id)=>{ // _id will be the payload 
  return jwt.sign({_id} , process.env.SECRET, {expiresIn:"1d"});
}




app.get("/holdings-display",requireAuth ,async (req, res) => {
  try {
   const allholdings = await HoldingModel.find({user:req.user._id });
    return res.status(200).json(allholdings);
  }
  catch (err) {
    console.error(err);
    return res.status(500).json({ error: "failed to fetch holdings" });
  }

});


app.get("/positions-display", requireAuth,async (req, res) => {
  try {
    const allpositions = await PositionModel.find({user:req.user._id });
    return res.status(200).json(allpositions);
  }
  catch (err) {
    console.error(err);
    return res.status(500).json({ error: "failed to fetch positions" });
  }

});

app.get("/orders-display",requireAuth,async (req, res) => {
  try {
    const allOrders = await OrderModel.find({user:req.user._id });
    return res.status(200).json(allOrders); // sending data to the dashboard in json forat
  }
  catch (err) {
    console.error(err);
    return res.status(500).json({ error: "failed to fetch holdings" });
  }

});

app.get("/watchlist", async (req, res) => {

  try {
    const watchlistall = await WatchListModel.find({});
    return res.status(200).json(watchlistall);
  }
  catch(err){
    console.error(err);
    return res.status(500).json({ error: "failed to fetch positions" });
  }
  
});

app.post("/order", requireAuth,async (req, res) => {
  try {
    const { order, holding } = req.body;

    if (!order || !holding) {
      return res.status(400).json({ error: "Missing order or holding data" });
    }

    let existingHolding= await HoldingModel.findOne({user:req.user._id, name:holding.name });
    if(!existingHolding){
      existingHolding= new HoldingModel({ ...holding,user:req.user._id });

    }
    else{
      existingHolding.qty+=Number(holding.qty);
    }

    const newOrder = new OrderModel({ ...order,user:req.user._id });
    await newOrder.save();
    await existingHolding.save();
    console.log("Both saved successfully");
    return res.status(200).json({ message: "Order and Holding saved successfully" });
  } catch (err) {
    console.error("Error saving to DB:", err);
    return res.status(500).json({ error: "Failed to save order or holding" });
  }
});



app.post("/signup",async(req,res)=>{

  const {name,username,email,password}=req.body

 try {
    const user = await User.signup(name, username, email, password);

    // creating token
    const token =createToken(user._id);
    // sending json response to to api endpoits
    res.status(200).json({ username, token });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});




app.post("/login",async(req,res)=>{
  const {username,password}=req.body;

  try{

    const user= await User.login(username,password);
    
    const token=createToken(user._id);

    res.status(200).json({username,token});

  } catch(error){
      res.status(400).json({error:error.message});
  }
});

app.get("/wallet", requireAuth,async (req, res) => {
  try {
    let walletData = await Wallet.findOne({ user: req.user._id });

    if (!walletData) {
      walletData = new Wallet({ amount: 0, user: req.user._id });
      await walletData.save();
    }
    res.status(200).json(walletData);
  } catch (error) {
    res.status(500).json({ error: "Server error while fetching wallet" });
  }
});


app.post("/wallet",requireAuth,async(req,res)=>{
  const {updatedAmount}=req.body;
  try{
    const wallet= await Wallet.findOne({user:req.user._id});
    if(!wallet){
        wallet = new Wallet({
        user: req.user._id,
        amount: updatedAmount,
      });

    }else{
      wallet.amount+=updatedAmount;
    }
    await wallet.save();
    res.status(200).json(wallet);

  } catch(error){
    res.status(400).json({error:"No wallet exist"});
  }

});

app.listen(PORT, () => {
  console.log("port is listing at 3002");
});