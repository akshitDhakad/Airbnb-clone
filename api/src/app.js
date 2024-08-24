const express = require("express");
const cors = require("cors");
const cookiesParser = require("cookie-parser");

const app = express();


app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));
