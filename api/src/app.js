const express = require("express");
const cors = require("cors");
const cookiesParser = require("cookie-parser");
const path = require("path");
const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname,"public"));
app.use(cookiesParser());

// routes import
const bookingRoutes = require("./routes/booking.route.js");
const authRoutes = require("./routes/auth.route.js");
const userRoutes = require("./routes/user.route.js");

//routes declaration
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/", bookingRoutes);
