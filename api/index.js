const express = require("express");
const connectDB = require("./db");
const path = require("path");
const router = express.Router();
const cors = require("cors");
const app = express();
const bcrypt = require("bcrypt");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
// middlewares
const morgan = require("morgan");
// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes 
// Define authentication routes
app.use('/auth', authRoutes);
// Define user routes
app.use('/user', userRoutes);



// Connect to MongoDB
connectDB();



try {
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
} catch (e) {
  console.log(e);
}
