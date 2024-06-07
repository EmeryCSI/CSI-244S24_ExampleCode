const express = require("express");
const {
  registerUser,
  loginUser,
  getProtectedData,
  getAllUsers,
} = require("../controllers/userController");
const { protect } = require("../middleware/auth");

const router = express.Router();

// Route to handle user registration
router.post("/register", registerUser);

// Route to handle user login
router.post("/login", loginUser);

// Route to handle access to protected data
router.get("/protected", protect, getProtectedData);

// Route to get all users (for testing purposes)
router.get("/all", getAllUsers);

module.exports = router;
