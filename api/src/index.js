const express = require("express");
const app = express();
const connectDB = require("./db/index.js");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

dotenv.config({
  path: "./.env",
});

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public")); // Correct static file serving
app.use(cookieParser());

// routes import
// const bookingRoutes = require("./routes/booking.route.js");
const authRoutes = require("./routes/auth.route.js");
// const userRoutes = require("./routes/user.route.js");
// const placeRoutes = require("./routes/place.route.js");
const hostRoutes = require("./routes/host.route.js"); 

app.use("/auth", authRoutes);
// app.use("/user", userRoutes);
// app.use("/booking", bookingRoutes);
// app.use("/place", placeRoutes);
app.use("/host", hostRoutes);

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 4000, () => {
      console.log(`⚙️ Server is running at port : ${process.env.PORT || 4000}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed: ", err); // Use console.error for errors
  });
