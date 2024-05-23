// The controller uses the model and responds
//to requests for data.

//pull in the User model
const User = require("../models/User");

//lets make a function that returns all users
//the will run in response to a get request.
const getAllUsers = async (req, res) => {
  try {
    //get all users from the model
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//this is going to be hit with a post request
const createUser = async (req, res) => {
  //create a new user from the body of the request
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    phone: req.body.phone,
  });
  console.log("working");
  try {
    //create a new user
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
//Export these functiona to be used in another module
module.exports = { getAllUsers, createUser };
