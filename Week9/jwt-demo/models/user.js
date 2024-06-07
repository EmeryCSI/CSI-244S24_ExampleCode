const mongoose = require("mongoose");

// Define the user schema with username, email, and password fields
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Create the User model from the schema and export it
const User = mongoose.model("User", userSchema);

module.exports = User;
