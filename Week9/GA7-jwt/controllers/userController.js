//import the user model
const User = require("../models/User");
//bring in bcrypt. we use this library to hash the password
const bcrypt = require("bcrypt");
//bring in jwt. we use this library to create a token
const jwt = require("jsonwebtoken");

// Controller function for user registration
exports.register = async (req, res) => {
  try {
    // Check if the email already exists in the database
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) return res.status(400).send("Email already exists");

    // Hash the user's password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create a new user
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });

    // Save the user to the database
    const savedUser = await user.save();
    res.send({ user: user._id });
  } catch (err) {
    res.status(400).send(err);
  }
};

// Controller function for user login
exports.login = async (req, res) => {
  try {
    // Check if the email exists in the database
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("Email not found");

    // Validate the user's password
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) return res.status(400).send("Invalid password");

    // Create and assign a JWT token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header("auth-token", token).send(token);
  } catch (err) {
    res.status(400).send(err);
  }
};
