const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    lowercase: true,
    required: true,
    trim: true,
    required: [true, "Username is required"],
    unique: true,
  },
  email: {
    type: String,
    lowercase: true,
    required: true,
    trim: true,
    match: [/\S+@\S+\.\S+/, "is invalid"],
    minlength: [9, "Email can't be less than 9 characters"],
    maxlength: [32, "Email can't be more than 32 characters"],
    required: [true, "Must specify an email"],
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
