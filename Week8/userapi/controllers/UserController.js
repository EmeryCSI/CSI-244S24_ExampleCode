// The controller uses the model and responds
//to requests for data.

//pull in the User model
const User = require("../models/User");

//lets make a function that returns all users
//the will run in response to a get request.
//GET /User
const getAllUsers = async (req, res) => {
  try {
    //get all users from the model
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//lets make an endpoint that takes in an id and returns a user
//this will run in response to a get request
const getUser = async (req, res) => {
  try {
    //find a user by id
    console.log(req.params.id);
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//this is going to be hit with a post request
//Post /User
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
//Put user/ID
//update a user. this is goind to be hit with a put request
//remember that a put request gets data from the body AND the url
const updateUser = async (req, res) => {
  const userInfo = req.body;
  try {
    //find a user by id and update it
    const user = await User.findByIdAndUpdate(
      req.params.id,
      userInfo,
      //this option returns the updated user
      { new: true }
    );
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//Delete user/ID
//delete a user. this is going to be hit with a delete request
const deleteUser = async (req, res) => {
  try {
    //find a user by id and delete it
    const user = await User.findByIdAndDelete(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Export these functiona to be used in another module
module.exports = { getAllUsers, createUser, getUser, updateUser, deleteUser };
