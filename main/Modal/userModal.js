const mongoose = require("mongoose");
// const bcrypt=require("bcryptjs");
require("dotenv").config();
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gmail: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
    // unique: true,
  },
  message: {
    type: String,
    required: true,
    // unique: true,
  },
});
module.exports = mongoose.model("User", userSchema);
