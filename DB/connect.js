const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv"); 
dotenv.config();// Import dotenv

// Rest of your code...


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDB;
