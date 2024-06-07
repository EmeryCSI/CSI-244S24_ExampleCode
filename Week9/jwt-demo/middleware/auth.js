const jwt = require("jsonwebtoken");
const User = require("../models/user");
const dotenv = require("dotenv");

dotenv.config();

// Middleware to protect routes and verify JWT tokens
exports.protect = async (req, res, next) => {
  let token;

  // Check if the authorization header contains a Bearer token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Extract the token from the header
      token = req.headers.authorization.split(" ")[1];
      // Verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // Find the user by ID and attach to the request object
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  }

  if (!token) {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};
