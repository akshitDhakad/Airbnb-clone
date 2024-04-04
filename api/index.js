const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = require("./models/Users");
const SECRET_KEY = "airbnbsecretkey";
const bcrypt = require("bcrypt");
const multer = require("multer");
const Place = require("./models/Place");
// image downloader
const axios = require("axios");
const fs = require("fs");
const path = require("path");

// apply middlewares

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// jwt  middleware
const authenticateMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]; // Assuming the token is sent in the Authorization header
    const decodedToken = jwt.verify(token, "yourSecretKeyHere");
    const user = await User.findById(decodedToken.userId);

    if (!user) {
      throw new Error("User not found");
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: "Unauthorized" });
  }
};

app.get("/protected", authenticateMiddleware, (req, res) => {
  // This route is protected and requires authentication
  res.json({ message: "Access granted!" });
});

// Mongoose connection
async function connectToDatabase() {
  try {
    await mongoose.connect(
      "mongodb+srv://airbnb:akshit123@cluster0.gzr9dgg.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to MongoDB database");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
}
connectToDatabase();

// Routers section
app.get("/", async (req, res) => {
  res.send({
    message: "Hello World",
  });
});
// *********** Auth Routes ***********
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the number of salt rounds
    // Create a new user instance with the hashed password
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    // Generate a JWT token for the registered user
    const token = jwt.sign({ userId: newUser._id }, SECRET_KEY);
    // Send the token in the response
    res.json({ token });
  } catch (error) {
    console.error("Error registering user:", error.message);
    res.status(500).json({ error: "An error occurred" });
  }
});
// handle login routers
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !user.isValidPassword(password)) {
      // Authentication failed
      return res
        .status(401)
        .json({ success: false, error: "Invalid credentials" });
    }
    // Authentication successful, generate and send token

    const token = jwt.sign({ userId: user._id }, SECRET_KEY);
    res.json({ success: true, token, name: user.name, email: user.email }); // Include the user's name and success status
  } catch (error) {
    console.error("Error logging in:", error.message);
    res.status(500).json({ success: false, error: "An error occurred" });
  }
});

// ******************image handler Routers *********************
app.post("/image-link-upload", async (req, res) => {
  const imageUrl = req.body.imageUrl;
  async function downloadAndSaveImage(imageUrl, savePath) {
    try {
      const response = await axios.get(imageUrl, {
        responseType: "arraybuffer",
      });
      // Generate a unique filename using a timestamp
      const timestamp = new Date().getTime();
      const uniqueFilename = `airbnb-Image-${timestamp}.jpg`;
      const fullPath = path.join(savePath, uniqueFilename);
      fs.writeFileSync(fullPath, response.data);
      console.log("Image downloaded and saved:", fullPath);

      return uniqueFilename; // Return only the filename
    } catch (error) {
      console.error("Error downloading image:", error.message);
      throw error;
    }
  }

  const savePath = path.join(__dirname, "uploads");
  try {
    const savedImageFilename = await downloadAndSaveImage(imageUrl, savePath);
    res.status(200).json({ filename: savedImageFilename }); // Send the saved image filename in the response
  } catch (error) {
    res.status(500).json({ error: "Error saving image" });
  }
});

//  multer code for file upload images
const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    const timestamp = new Date().getTime();
    const uniqueFilename = `airbnb-Image-${timestamp}.jpg`;
    cb(null, uniqueFilename);
  },
});
const upload = multer({ storage });

app.post("/upload", upload.single("image"), (req, res) => {
  
  if (!req.file) {
    return res.status(400).json({ message: "No image file provided" });
  }
  const imagePath = path.join(req.file.filename);
  res.json({ imagePath: imagePath });

});



// add place router 

app.post("/add-place", async (req, res) => {
  try {
    const { title, address, description, imgURLs, extras, details } = req.body;

    // Create a new instance of the Place model
    const newPlace = new Place({
      title,
      address,
      description,
      imgURLs,
      extras,
      details,
    });

    // Save the new place to the database
    await newPlace.save();

    res.status(201).json({ message: "Place added successfully" });
  } catch (error) {
    console.error("Error adding place:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});







// server code 
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
