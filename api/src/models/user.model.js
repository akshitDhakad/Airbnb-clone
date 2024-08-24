const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");
const userSchema = new Schema(
  {
    firstName: {
      type: String,
      lowercase: true,
      trim: true,
      required: [true, "First Name is required"],
    },
    lastName: {
      type: String,
      lowercase: true,
      trim: true, 
    },
    email: {
      type: String,
      lowercase: true,
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
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

// Hash the password before saving it to the database

userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(user.password, salt);
    next();
  } catch (error) {
    return next(error);
  }
});

// Compare the given password with the hashed password in the database
userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
