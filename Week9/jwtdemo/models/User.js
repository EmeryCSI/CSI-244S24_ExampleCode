//bring in mongoose
const mongoose = require("mongoose");
//create a new schema
const userSchema = new mongoose.Schema({
  //name is required with a minimum length of 2
  name: {
    type: String,
    required: true,
    minlength: 2,
  },
  //email is required with a minimum length of 4 and must be unique
  email: {
    type: String,
    required: true,
    minlength: 4,
    unique: true,
  },
  //password is required with a minimum length of 6 and must contain at
  //least one digit, one lowercase letter, one uppercase letter,
  //and one special character
  password: {
    type: String,
    required: true,
    minlength: 6,
    validate: {
      validator: function (v) {
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid password!`,
    },
  },
  //date is required and will default to the current date
  date: {
    type: Date,
    default: Date.now,
  },
});
//export the model
module.exports = mongoose.model("User", userSchema);
