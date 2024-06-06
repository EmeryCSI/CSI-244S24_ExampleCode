const User = require("../models/User");

//Create a user : POST
const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};
//Get all users : GET
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status;
  }
};
//Get a user by email : GET
const getUser = async (req, res) => {
  try {
    const user = await User.find({ email: req.params.email });
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

//whatever else you need to do with the user model

//export the functions
module.exports = {
  createUser,
  getAllUsers,
  getUser,
};
