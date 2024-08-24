const express = require("express");
const connectDB = require("./db/index.js");
const dotenv = require("dotenv");
// const router = express.Router();
const cors = require("cors");
const app = express();

dotenv.config({
  path: "./.env",
});




connectDB()
.then(() => {
  app.listen(process.env.PORT || 8000, () => {
     console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
  });
})
.catch((err)=>{
    console.log("MONGO db connection failed !!! ", err);
})
