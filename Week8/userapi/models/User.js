//create a model
//A model is just a javascript blueprint for an entry in a datbase
const mongoose = require("mongoose");

//I am going to define a schema
//The schema takes an object where I define all of the properties of user
//This user is going to have a name, email phone and address but these could
//be whatever properties we need. The type sets what kind of data to expect.
//Required sets whether or not we much have data for this property in order
//create a user.
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
