const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");
require("dotenv").config();

// Register a new user
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/;
const register = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

   if (!emailRegex.test(email)) {
     return res.status(400).json({ message: "Invalid email format" });
   }

    if (!passwordRegex.test(password)) {
      return res
        .status(400)
        .json({
          message:
            "Password must be at least 6 characters long, contain at least one number, one uppercase letter, and one special symbol",
        });
    }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    await user.save();

    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1 hour",
    });

    res.status(201).json({ message: "Registration successful", "role": user.role , "token" : token });
  } catch (error) {
    console.error("Error during registration:", error);
    next(error);
  }
};

// Login with an existing user


const login = async (req, res, next) => {
  const { email, password } = req.body;
  // console.log("Login request body:", req.body);

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    console.log(user.password);
     const savedPassword =
       "$2b$10$CLr7DQFxrb2h59xK0nRRqu5.7WXRbB24A0.Pf7ncjp6nukLjrJcny";

    const passwordMatch = await bcrypt.compare(password, savedPassword);

    // if (!passwordMatch) {
    //   return res.status(401).json({ message: "Invalid credentials" });
    // }

    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1 hour",
    });

    res.json({message: "Registration successful" ,"role":user.role , "token" : token });
  } catch (error) {
    console.error("Error during login:", error);
    next(error);
  }
};

// Google Authentication 
const googleAuth = async (req, res, next) => {
  const { token } = req.body;

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    const { uid, email } = decodedToken;

    // Check if user already exists
    let user = await User.findOne({ email });
    if (!user) {
      // Create new user if it doesn't exist
      user = new User({ email, googleId: uid });
      await user.save();
    }

    // Generate JWT token for session management
    const jwtToken = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1 hour",
    });

    res.json({ token: jwtToken });
  } catch (error) {
    console.error("Error during Google authentication:", error);
    res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = { register, login };
