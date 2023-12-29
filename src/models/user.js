const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    required: true,
    type: String,
    min: 3,
    max: 20,
  },
  lastName: {
    required: true,
    type: String,
    min: 3,
    max: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    max: 50,
  },
  password: {
    type: String,
    required: true,
  },
});


module.exports = mongoose.model("User", userSchema)