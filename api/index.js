const express = require('express');
const path = require('path');
const router = express.Router();
const app = require('./app');
// middlewares
const morgan = require("morgan");


// middlewares 
app.use(morgan("dev"));

try{
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}catch(e){
    console.log(e);
}