const jwt = require("jsonwebtoken");
const User = require('../model/UserModel');

const requireAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: "Authorization token required" });
  }

  const token = authHeader.split(' ')[1];

  try {
    const { _id } = jwt.verify(token, process.env.SECRET);

    const user = await User.findById(_id).select('_id');
    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("JWT Verification failed:", error.message);
    res.status(401).json({ error: "You are not authorized" });
  }
};

module.exports = { requireAuth };
