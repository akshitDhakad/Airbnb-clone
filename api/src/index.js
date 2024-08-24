const express = require("express");
const connectDB = require("./db/index.js");
const path = require("path");
// const router = express.Router();
const cors = require("cors");
const app = express();

dotenv.config({
  path: "./.env",
});


// const bcrypt = require("bcrypt");
const authRoutes = require("./routes/auth.route.js");
const userRoutes = require("./routes/user.route.js");




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
